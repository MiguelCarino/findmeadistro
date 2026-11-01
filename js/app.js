// Find Me a Distro: a gacha pull. You set the pool (families, the chips it
// runs on, whether discontinued projects count) and pull one distro at random.
//
// The pull is uniform: every distro in the pool has the same chance, and the
// page says so. The stars are a label for how well known a distro is
// (Common = a flagship, Rare = everything else that is alive, Relic =
// discontinued), never a weight.
//
// The pool and the current pick live in the URL hash, so a result can be
// shared (#fam=debian,arch&eol=on&cpu=arm&pick=linuxmint.com; defaults are
// left out, and old #family=…&eol=… links still work). The collection and
// recent pulls are this browser's own (localStorage). Nothing is sent.
// The lists are in js/handlelink.js (`links.regular` / `links.eol`, keyed 1-9
// by family, each entry { url, name, cpu?, tier? }).

(function () {
    'use strict';

    // n = the key in handlelink.js; the card face is drawn from the family
    // (css/style.css, .front[data-family]), so only the icon is named here.
    const FAMILIES = {
        debian:    { n: 2, name: 'Debian',    icon: 'img/debian.ico' },
        arch:      { n: 3, name: 'Arch',      icon: 'img/arch.png' },
        fedora:    { n: 5, name: 'Fedora',    icon: 'img/fedora.ico' },
        suse:      { n: 6, name: 'SUSE',      icon: 'img/opensuse.png' },
        gentoo:    { n: 4, name: 'Gentoo',    icon: 'img/gentoo.ico' },
        slackware: { n: 7, name: 'Slackware', icon: 'img/slackware.png' },
        bsd:       { n: 8, name: 'BSD',       icon: 'img/freebsd.ico' },
        other:     { n: 9, name: 'Other',     icon: 'img/void.png' },
    };
    // A distro's own icon (img/d/<key>.webp, from tools/build_icons.sh), else its family's.
    const OWN_ICONS = new Set(typeof DISTRO_ICONS !== 'undefined' ? DISTRO_ICONS : []);
    const iconKey = (id) => id.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    const iconFor = (item) => (OWN_ICONS.has(iconKey(item.id)) ? 'img/d/' + iconKey(item.id) + '.webp' : FAMILIES[item.family].icon);
    const FAM_KEYS = Object.keys(FAMILIES);
    const CPUS = { x64: '64-bit PC', x86: '32-bit PC', arm: 'ARM', riscv: 'RISC-V', ppc: 'PowerPC', retro: 'Retro chips' };
    const CPU_KEYS = Object.keys(CPUS);
    const EOL = ['off', 'on', 'only'];
    const TIERS = {
        common: { stars: '★',   name: 'Common', wait: 420 },
        rare:   { stars: '★★',  name: 'Rare',   wait: 720 },
        relic:  { stars: '★★★', name: 'Relic',  wait: 1150 },
    };
    const STORE = { col: 'fmad-collection', recent: 'fmad-recent' };
    const RECENT_MAX = 8;

    const tr = (key) => (typeof window.t === 'function' ? window.t(key) : key);
    const fill = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k]);
    const $ = (id) => document.getElementById(id);
    const reduced = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));

    // A readable id for a link: host without www, plus the path when there is one.
    function slug(url) {
        try {
            const u = new URL(url);
            const path = u.pathname.replace(/\/(index\.(html?|php))?$/i, '').replace(/\/+$/, '');
            return u.hostname.replace(/^www\./, '') + path;
        } catch (e) {
            return url;
        }
    }

    // The whole catalogue, once: each entry with family, chips, tier. A distro
    // listed twice (live and discontinued) keeps its live entry.
    const CATALOG = [];
    const BY_ID = new Map();
    ['regular', 'eol'].forEach((list) => FAM_KEYS.forEach((fam) => {
        (links[list][FAMILIES[fam].n] || []).forEach((e) => {
            const url = typeof e === 'string' ? e : e.url;
            const id = slug(url);
            if (BY_ID.has(id)) return;
            const eol = list === 'eol';
            const item = {
                id, url, name: e.name || id, family: fam, eol,
                cpu: (e.cpu || 'x64').split(/\s+/),
                tier: eol ? 'relic' : e.tier === 'common' ? 'common' : 'rare',
            };
            CATALOG.push(item);
            BY_ID.set(id, item);
        });
    }));

    // ---------- state ----------
    const defaults = () => ({ fams: new Set(FAM_KEYS), cpus: new Set(CPU_KEYS), eol: 'off', pick: null });
    let state = defaults();

    function load(key) {
        try { const v = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(v) ? v : []; } catch (e) { return []; }
    }
    function save(key, arr) {
        try { localStorage.setItem(key, JSON.stringify(arr)); } catch (e) { /* private window: it lasts this visit */ }
    }
    let collection = new Set(load(STORE.col));
    let recent = load(STORE.recent).filter((id) => BY_ID.has(id));
    let shownNew = false;   // whether the card on show was new when it was pulled

    const matchEol = (item, eol) => (eol === 'off' ? !item.eol : eol === 'only' ? item.eol : true);
    const matchCpu = (item, cpus) => item.cpu.some((c) => cpus.has(c));
    function pool(s) {
        s = s || state;
        return CATALOG.filter((i) => s.fams.has(i.family) && matchEol(i, s.eol) && matchCpu(i, s.cpus));
    }

    function readHash() {
        const p = new URLSearchParams(location.hash.slice(1));
        const s = defaults();
        const list = (v, keys) => new Set((v || '').split(',').filter((k) => keys.includes(k)));
        if (p.has('fam')) s.fams = p.get('fam') === 'none' ? new Set() : list(p.get('fam'), FAM_KEYS);
        else if (FAM_KEYS.includes(p.get('family'))) s.fams = new Set([p.get('family')]);   // old links
        if (p.has('cpu')) s.cpus = list(p.get('cpu'), CPU_KEYS);
        if (EOL.includes(p.get('eol'))) s.eol = p.get('eol');
        s.pick = p.get('pick') || null;
        state = s;
    }

    function writeHash() {
        const p = new URLSearchParams();
        if (state.fams.size !== FAM_KEYS.length) p.set('fam', state.fams.size ? FAM_KEYS.filter((k) => state.fams.has(k)).join(',') : 'none');
        if (state.eol !== 'off') p.set('eol', state.eol);
        if (state.cpus.size !== CPU_KEYS.length) p.set('cpu', CPU_KEYS.filter((k) => state.cpus.has(k)).join(','));
        if (state.pick) p.set('pick', state.pick);
        const h = p.toString();
        history.replaceState(null, '', h ? '#' + h : location.pathname + location.search);
    }

    // ---------- the pool panel ----------
    function renderPool() {
        const all = pool();
        document.querySelectorAll('.fam').forEach((b) => {
            const k = b.dataset.family;
            b.setAttribute('aria-pressed', String(state.fams.has(k)));
            const n = CATALOG.filter((i) => i.family === k && matchEol(i, state.eol) && matchCpu(i, state.cpus)).length;
            b.querySelector('.fam-n').textContent = n;
        });
        document.querySelectorAll('.pchip').forEach((b) => {
            const k = b.dataset.cpu;
            b.setAttribute('aria-pressed', String(state.cpus.has(k)));
            const n = CATALOG.filter((i) => state.fams.has(i.family) && matchEol(i, state.eol) && i.cpu.includes(k)).length;
            b.classList.toggle('empty', n === 0);
            b.title = fill(tr(n === 1 ? '{n} distro' : '{n} distros'), { n });
        });
        document.querySelectorAll('.seg-btn').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.eol === state.eol)));
        $('famAll').textContent = tr(state.fams.size === FAM_KEYS.length ? 'None' : 'All');
        $('cpuAll').textContent = tr(state.cpus.size === CPU_KEYS.length ? 'None' : 'All');

        $('poolN').textContent = all.length;
        $('poolBtnN').textContent = all.length;
        $('poolUnit').textContent = tr(all.length === 1 ? 'distro' : 'distros');
        $('pullBtn').disabled = all.length === 0 || busy;

        const odds = $('odds');
        odds.textContent = '';
        Object.keys(TIERS).forEach((t) => {
            const n = all.filter((i) => i.tier === t).length;
            const pct = all.length ? (n / all.length) * 100 : 0;
            const li = document.createElement('li');
            li.className = n ? '' : 'zero';
            li.innerHTML = '<span class="st ' + t + '"></span><span class="lbl"></span><span class="pct"></span>';
            li.children[0].textContent = TIERS[t].stars;
            li.children[1].textContent = tr(TIERS[t].name) + ' · ' + n;
            li.children[2].textContent = (pct > 0 && pct < 1 ? pct.toFixed(1) : Math.round(pct)) + '%';
            odds.appendChild(li);
        });
    }

    // ---------- the card ----------
    function paint(item, isNew) {
        const card = $('gcard');
        card.dataset.tier = item.tier;
        $('frStars').textContent = TIERS[item.tier].stars;
        $('frTier').textContent = tr(TIERS[item.tier].name);
        $('frNew').hidden = !isNew;
        const own = OWN_ICONS.has(iconKey(item.id));
        $('frIcon').src = iconFor(item);
        $('front').dataset.family = item.family;
        $('frIconBox').classList.toggle('own', own);
        $('frMark').src = FAMILIES[item.family].icon;
        const name = $('frName');
        name.textContent = item.name;
        name.classList.toggle('long', item.name.length > 16);
        $('frFam').textContent = fill(tr('{family} family'), { family: tr(FAMILIES[item.family].name) });
        const cpu = $('frCpu');
        cpu.textContent = '';
        item.cpu.forEach((c) => {
            const s = document.createElement('span');
            s.className = 'chip-tag';
            s.textContent = tr(CPUS[c]);
            cpu.appendChild(s);
        });
        $('frNote').textContent = item.eol ? tr('Discontinued, so its site may be an archive.') : '';
        const host = $('frHost');
        host.textContent = item.id;
        host.href = item.url;
        const visit = $('visitBtn');
        visit.href = item.url;
        visit.hidden = false;
        $('front').setAttribute('aria-label', fill(tr('{name}, {tier}, {family} family'), {
            name: item.name, tier: tr(TIERS[item.tier].name), family: tr(FAMILIES[item.family].name),
        }));
    }

    function faceDown() {
        $('gcard').classList.remove('up');
        $('visitBtn').hidden = true;
    }

    // Show a card face up straight away (a shared link, a recent pull).
    function showNow(item, isNew) {
        const card = $('gcard');
        shownNew = !!isNew;
        paint(item, shownNew);
        card.style.transition = 'none';
        card.classList.add('up');
        void card.offsetWidth;
        card.style.transition = '';
    }

    let busy = false;
    async function pull() {
        if (busy) return;
        const all = pool();
        if (!all.length) return;
        // Never the same one twice in a row when there is a choice.
        const rest = all.length > 1 ? all.filter((i) => i.id !== state.pick) : all;
        const item = rest[Math.floor(Math.random() * rest.length)];
        const isNew = !collection.has(item.id);
        collection.add(item.id);
        save(STORE.col, [...collection]);
        recent = [item.id, ...recent.filter((id) => id !== item.id)].slice(0, RECENT_MAX);
        save(STORE.recent, recent);
        state.pick = item.id;
        shownNew = isNew;
        writeHash();

        const card = $('gcard');
        const zone = card.parentElement;
        if (reduced()) {
            paint(item, isNew);
            card.classList.add('up');
            renderShelf();
            return;
        }
        busy = true;
        $('pullBtn').disabled = true;
        if (card.classList.contains('up')) {
            faceDown();
            await wait(480);
        }
        // The charge: the back glows in the tier's colour before it turns.
        card.dataset.tier = item.tier;
        zone.dataset.tier = item.tier;
        card.classList.add('charge');
        await wait(TIERS[item.tier].wait);
        card.classList.remove('charge');
        paint(item, isNew);
        card.classList.add('up');
        const burst = $('burst');
        burst.classList.remove('go');
        void burst.offsetWidth;
        burst.classList.add('go');
        await wait(520);
        busy = false;
        $('pullBtn').disabled = pool().length === 0;
        renderShelf();
    }

    // ---------- collection ----------
    function mini(item, onClick) {
        const b = document.createElement(onClick ? 'button' : 'div');
        b.className = 'mini';
        if (onClick) { b.type = 'button'; b.addEventListener('click', onClick); }
        const img = document.createElement('img');
        img.src = onClick ? iconFor(item) : FAMILIES[item.family].icon;
        img.alt = '';
        const nm = document.createElement('span');
        nm.className = 'nm';
        const st = document.createElement('span');
        st.className = 'st ' + item.tier;
        if (onClick) {
            b.dataset.tier = item.tier;
            nm.textContent = item.name;
            st.textContent = TIERS[item.tier].stars;
            st.title = tr(TIERS[item.tier].name);
        } else {
            b.classList.add('locked');
            nm.textContent = '???';
            b.setAttribute('aria-label', tr('Not found yet'));
        }
        b.append(img, nm, st);
        return b;
    }

    function openItem(item) {
        closeBinder();
        state.pick = item.id;
        writeHash();
        showNow(item, false);
    }

    function renderShelf() {
        const all = pool();
        const found = all.filter((i) => collection.has(i.id)).length;
        $('colN').textContent = found;
        $('colOf').textContent = all.length;
        $('colBar').style.width = (all.length ? (found / all.length) * 100 : 0) + '%';
        $('colMini').textContent = found + ' / ' + all.length;
        const list = $('recent');
        list.textContent = '';
        recent.forEach((id) => {
            const item = BY_ID.get(id);
            const li = document.createElement('li');
            li.appendChild(mini(item, () => openItem(item)));
            list.appendChild(li);
        });
        $('recentEmpty').hidden = recent.length > 0;
        if (!$('binder').hidden) renderBinder();
    }

    function renderBinder() {
        const all = pool();
        const found = all.filter((i) => collection.has(i.id)).length;
        $('binderN').textContent = found + ' / ' + all.length;
        const grid = $('binderGrid');
        grid.textContent = '';
        FAM_KEYS.forEach((fam) => {
            const items = all.filter((i) => i.family === fam);
            if (!items.length) return;
            const h = document.createElement('h3');
            const got = items.filter((i) => collection.has(i.id)).length;
            h.textContent = fill(tr('{family} family'), { family: tr(FAMILIES[fam].name) }) + ' · ' + got + ' / ' + items.length;
            grid.appendChild(h);
            items.slice().sort((a, b) => a.name.localeCompare(b.name)).forEach((i) => {
                grid.appendChild(collection.has(i.id) ? mini(i, () => openItem(i)) : mini(i, null));
            });
        });
    }

    let lastFocus = null;
    function openBinder() {
        lastFocus = document.activeElement;
        closePool();
        renderBinder();
        $('binder').hidden = false;
        $('scrim').hidden = false;
        $('colClose').focus();
    }
    function closeBinder() {
        if ($('binder').hidden) return;
        $('binder').hidden = true;
        $('scrim').hidden = true;
        disarmClear();
        if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    // Clearing asks twice, on the button itself (no browser dialogs).
    let clearTimer = 0;
    function disarmClear() {
        const b = $('colClear');
        b.classList.remove('armed');
        b.textContent = tr('Clear collection');
        clearTimeout(clearTimer);
    }
    function clearCollection() {
        const b = $('colClear');
        if (!b.classList.contains('armed')) {
            b.classList.add('armed');
            b.textContent = tr('Click again to clear');
            clearTimer = setTimeout(disarmClear, 3000);
            return;
        }
        collection = new Set();
        recent = [];
        save(STORE.col, []);
        save(STORE.recent, []);
        disarmClear();
        $('frNew').hidden = true;
        renderShelf();
    }

    // ---------- phone pool sheet ----------
    function openPool() {
        $('stage').classList.add('pool-open');
        $('scrim').hidden = false;
        $('poolClose').focus();
    }
    function closePool() {
        if (!$('stage').classList.contains('pool-open')) return;
        $('stage').classList.remove('pool-open');
        if ($('binder').hidden) $('scrim').hidden = true;
        $('poolOpen').focus();
    }

    // ---------- changes ----------
    function changed() {
        // A pick that left the pool goes face down: it belonged to the old pool.
        if (state.pick && !pool().some((i) => i.id === state.pick)) {
            state.pick = null;
            faceDown();
        }
        writeHash();
        render();
    }
    function toggle(set, key) {
        if (set.has(key)) set.delete(key); else set.add(key);
        changed();
    }
    function toggleAll(set, keys) {
        if (set.size === keys.length) set.clear(); else keys.forEach((k) => set.add(k));
        changed();
    }

    function startOver() {
        state = defaults();
        faceDown();
        writeHash();
        render();
    }

    let toastTimer = 0;
    function copyLink() {
        const done = () => {
            const el = $('toast');
            el.classList.add('show');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(location.href).then(done, () => {});
        }
    }

    function render() {
        renderPool();
        renderShelf();
        $('poolClose').setAttribute('aria-label', tr('Close'));
        const item = state.pick && BY_ID.get(state.pick);
        if (item && $('gcard').classList.contains('up')) paint(item, shownNew);
    }

    function fromHash() {
        readHash();
        const item = state.pick && pool().find((i) => i.id === state.pick);
        if (item) showNow(item, false);
        else { state.pick = null; faceDown(); }
        render();
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.fam').forEach((b) => b.addEventListener('click', () => toggle(state.fams, b.dataset.family)));
        document.querySelectorAll('.pchip').forEach((b) => b.addEventListener('click', () => toggle(state.cpus, b.dataset.cpu)));
        document.querySelectorAll('.seg-btn').forEach((b) => b.addEventListener('click', () => { state.eol = b.dataset.eol; changed(); }));
        $('famAll').addEventListener('click', () => toggleAll(state.fams, FAM_KEYS));
        $('cpuAll').addEventListener('click', () => toggleAll(state.cpus, CPU_KEYS));
        $('pullBtn').addEventListener('click', pull);
        $('colOpen').addEventListener('click', openBinder);
        $('colOpen2').addEventListener('click', openBinder);
        $('colClose').addEventListener('click', closeBinder);
        $('colClear').addEventListener('click', clearCollection);
        $('poolOpen').addEventListener('click', openPool);
        $('poolClose').addEventListener('click', closePool);
        $('scrim').addEventListener('click', () => { closeBinder(); closePool(); });
        $('copyLink').addEventListener('click', copyLink);
        $('startOver').addEventListener('click', startOver);
        // Space or Enter pulls, unless a control has focus (it keeps its own key).
        // C opens the collection; Esc closes whatever is open.
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey || e.altKey) return;
            const t = e.target;
            const onControl = t && t.closest && t.closest('button, a, input, select, textarea, [contenteditable="true"]');
            if (e.key === 'Escape') { closeBinder(); closePool(); return; }
            if (onControl) return;
            if ((e.key === ' ' || e.key === 'Enter') && $('binder').hidden) {
                e.preventDefault();
                if (!e.repeat) pull();
            } else if ((e.key === 'c' || e.key === 'C') && !e.repeat) {
                if ($('binder').hidden) openBinder(); else closeBinder();
            }
        });
        fromHash();
    });
    window.addEventListener('hashchange', fromHash);
    window.addEventListener('carino:langchange', render);
})();
