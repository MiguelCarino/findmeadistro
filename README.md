# **Find Me A Distro**

**[Find yours →](https://distro.carino.systems/)** — runs in your browser.

[Find Me A Distro](https://distro.moe), or **FMAD** for short, is a gacha-style pull for Unix/GNU+Linux distributions. Set your pool (families, the chips a distro runs on, and whether discontinued projects count) and pull one at random, with a link to its site. Every distro in the pool has the same chance: the stars (Common, Rare, Relic) only say how well known a distro is, and the page shows the odds. The pool and the pick are kept in the link so a result can be shared; the collection of distros you have pulled stays in your browser. This is a fork from [Find Me a Linux Distro](https://github.com/KripC2160/findmealinuxdistro) by [KripC2160](https://github.com/KripC2160/).

![randomdistrofaviconbig](https://raw.githubusercontent.com/MiguelCarino/Depot/refs/heads/main/NonFree/ICO/distromoe.png)

These distributions may include familiar options, remixes, country exclusives, and more. FMAD is seeking additional distributions, so if you have suggestions, please submit them in the [issues](https://github.com/MiguelCarino/findmeadistro/issues). Currently, the focus is on Linux distributions primarily for x86_64 workstations, though server images and other architectures may be included. Feedback is welcome.

## Distro icons

Cards show each distro's own icon from `img/d/`, taken from its official site, and fall back to the family icon. `tools/build_icons.sh` rebuilds them and `js/icons.js`; look the set over afterwards and add any icon that is a host's or theme's default to `tools/icon-skip.txt`. The icons are the projects' own marks, shown only to identify them.

## Licensing

**GNU General Public License v3.0** — see [LICENSE](LICENSE).

This is a **fork**, not original work. The upstream project is
[Find Me A Linux Distro](https://github.com/KripC2160/findmealinuxdistro) by
[KripC2160](https://github.com/KripC2160/), and it is GPL-3.0. That licence
carries forward to this fork: the copyright in the inherited code stays with the
upstream authors, and changes made here are contributed back under the same
terms. No separate Carino copyright is asserted over it.

Unlike the rest of the [carino.systems](https://carino.systems/) fleet, this
repository is therefore **not** available for relicensing or for a commercial
exception — that is not mine to grant.

**Not mine either.** The fonts below are third-party works under their own
licences, which the GPL above does not displace.

| Path | What it is | Licence | Notice |
| --- | --- | --- | --- |
| [`fonts/`](fonts/) | IBM Plex Sans, IBM Plex Mono, Red Hat Display (the shared Carino fonts) | SIL OFL 1.1 | [`fonts/OFL.txt`](fonts/OFL.txt) |
