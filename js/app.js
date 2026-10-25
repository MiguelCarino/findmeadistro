// Find Me a Distro: two choices (family, discontinued projects) and one
// random pick from the matching pool, shown on the page.
//
// The pick is random within the pool and the page says so: it is not a match.
// Everything lives in the URL hash (#family=debian&eol=off&pick=linuxmint.com),
// so a result can be shared, reloaded and redone. Nothing is stored or sent.
// The link lists are in js/handlelink.js (`links.regular` / `links.eol`,
// keyed 1-9 by family).

(function () {
    'use strict';

    // Family key → the number handlelink.js uses, and the name shown.
    const FAMILIES = {
        all:       { n: 1, name: 'All' },
        debian:    { n: 2, name: 'Debian' },
        arch:      { n: 3, name: 'Arch' },
        gentoo:    { n: 4, name: 'Gentoo' },
        fedora:    { n: 5, name: 'Fedora' },
        suse:      { n: 6, name: 'SUSE' },
        slackware: { n: 7, name: 'Slackware' },
        bsd:       { n: 8, name: 'BSD' },
        other:     { n: 9, name: 'Other' },
    };
    const EOL = ['off', 'on', 'only'];
    const DEFAULTS = { family: 'all', eol: 'off' };

    // The dictionary script loads after this one; fall back to English until it has.
    const tr = (key) => (typeof window.t === 'function' ? window.t(key) : key);
    const fill = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k]);
    const $ = (id) => document.getElementById(id);

    let state = { family: DEFAULTS.family, eol: DEFAULTS.eol, pick: null };

    // A readable id for a link: host without www, plus the path when there is one
    // (archiveos.org/kateos, sourceforge.net/projects/...). Also the hash value.
    function slug(url) {
        try {
            const u = new URL(url);
            const path = u.pathname.replace(/\/(index\.(html?|php))?$/i, '').replace(/\/+$/, '');
            return u.hostname.replace(/^www\./, '') + path;
        } catch (e) {
            return url;
        }
    }

    // Every entry in the chosen pool, each with its family and whether it is discontinued.
    function pool() {
        const keys = state.family === 'all'
            ? Object.keys(FAMILIES).filter((k) => k !== 'all')
            : [state.family];
        const lists = state.eol === 'off' ? ['regular'] : state.eol === 'only' ? ['eol'] : ['regular', 'eol'];
        const out = [];
        lists.forEach((list) => keys.forEach((k) => {
            (links[list][FAMILIES[k].n] || []).forEach((url) => {
                out.push({ url: url, id: slug(url), family: k, eol: list === 'eol' });
            });
        }));
        return out;
    }

    function readHash() {
        const p = new URLSearchParams(location.hash.slice(1));
        const family = p.get('family');
        const eol = p.get('eol');
        state = {
            family: FAMILIES[family] ? family : DEFAULTS.family,
            eol: EOL.includes(eol) ? eol : DEFAULTS.eol,
            pick: p.get('pick') || null,
        };
    }

    function writeHash() {
        const p = new URLSearchParams({ family: state.family, eol: state.eol });
        if (state.pick) p.set('pick', state.pick);
        history.replaceState(null, '', '#' + p.toString());
    }

    function renderChoices() {
        document.querySelectorAll('.fam-btn').forEach((b) => {
            const on = b.dataset.family === state.family;
            b.classList.toggle('active', on);
            b.setAttribute('aria-pressed', String(on));
        });
        document.querySelectorAll('.eol-btn').forEach((b) => {
            const on = b.dataset.eol === state.eol;
            b.classList.toggle('active', on);
            b.setAttribute('aria-pressed', String(on));
        });
        const n = pool().length;
        $('poolCount').textContent = fill(tr(n === 1 ? '{n} distro in this pool' : '{n} distros in this pool'), { n: n });
        $('pickBtn').disabled = n === 0;
    }

    function renderResult() {
        const box = $('result');
        const hit = state.pick && pool().find((e) => e.id === state.pick);
        if (!hit) { box.hidden = true; return; }

        const famName = tr(FAMILIES[hit.family].name);
        const tags = $('rcTags');
        tags.textContent = '';
        const chip = (text) => {
            const s = document.createElement('span');
            s.className = 'chip-tag';
            s.textContent = text;
            tags.appendChild(s);
        };
        chip(fill(tr('{family} family'), { family: famName }));
        if (hit.eol) chip(tr('Discontinued'));

        $('rcName').textContent = hit.id;
        // Say plainly that this is a random pick, from which pool.
        let why = state.family === 'all'
            ? tr('A random pick from all families — pick again for another.')
            : fill(tr('A random pick from the {family} family — pick again for another.'), { family: famName });
        if (hit.eol) why += ' ' + tr('This project is discontinued, so its site may be an archive.');
        $('rcWhy').textContent = why;
        $('rcLink').href = hit.url;
        box.hidden = false;
    }

    function render() {
        renderChoices();
        renderResult();
    }

    function pick() {
        const all = pool();
        if (!all.length) return;
        // Never the same one twice in a row when there is a choice.
        const rest = all.length > 1 ? all.filter((e) => e.id !== state.pick) : all;
        state.pick = rest[Math.floor(Math.random() * rest.length)].id;
        writeHash();
        render();
        $('result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Changing an answer clears the result: it belonged to the old pool.
    function choose(key, value) {
        if (state[key] === value) return;
        state[key] = value;
        state.pick = null;
        writeHash();
        render();
    }

    function startOver() {
        state = { family: DEFAULTS.family, eol: DEFAULTS.eol, pick: null };
        history.replaceState(null, '', location.pathname + location.search);
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
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

    document.addEventListener('DOMContentLoaded', () => {
        readHash();
        document.querySelectorAll('.fam-btn').forEach((b) =>
            b.addEventListener('click', () => choose('family', b.dataset.family)));
        document.querySelectorAll('.eol-btn').forEach((b) =>
            b.addEventListener('click', () => choose('eol', b.dataset.eol)));
        $('pickBtn').addEventListener('click', pick);
        $('againBtn').addEventListener('click', pick);
        $('startBtn').addEventListener('click', () => {
            $('choices').scrollIntoView({ behavior: 'smooth', block: 'start' });
            const first = document.querySelector('.fam-btn.active') || document.querySelector('.fam-btn');
            if (first) first.focus({ preventScroll: true });
        });
        $('copyLink').addEventListener('click', copyLink);
        $('startOver').addEventListener('click', startOver);
        render();
    });
    window.addEventListener('hashchange', () => { readHash(); render(); });
    window.addEventListener('carino:langchange', render);
})();
