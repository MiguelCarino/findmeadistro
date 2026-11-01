// This file contains all the links: { url, name, cpu?, tier? } per distro, keyed 1-9 by family.
// The name is what the card shows. Where the official name is not known
// for sure, the name is the host (and path), the same text the card links.
// cpu: the chips it has images for, space-separated (x64 x86 arm riscv ppc retro);
//      left out = x64 only. Best-effort, from each project's download page.
// tier: "common" marks a well-known flagship (one star). Every other live
//      entry is Rare, every discontinued one is a Relic. A label only: the
//      pull is uniform across the pool.

var links = {
    regular: {
        1: [
        ], // Placeholder for "ALL"
        2: [
            { url: "https://www.debian.org/", name: "Debian", cpu: "x64 arm riscv ppc", tier: "common" },
            { url: "https://system76.com/pop", name: "Pop!_OS", cpu: "x64 arm", tier: "common" }, //Based on Ubuntu 24.04 LTS, features COSMIC desktop
            { url: "https://www.kali.org/", name: "Kali Linux", cpu: "x64 arm", tier: "common" },
            { url: "https://tails.net/", name: "Tails", tier: "common" },
            { url: "https://linuxmint.com/", name: "Linux Mint", tier: "common" },
            { url: "https://xubuntu.org/", name: "Xubuntu", tier: "common" },
            { url: "https://kubuntu.org/", name: "Kubuntu", tier: "common" },
            { url: "https://www.raspberrypi.com/software/", name: "Raspberry Pi OS", cpu: "arm", tier: "common" },
            { url: "https://www.parrotsec.org/", name: "Parrot OS", cpu: "x64 arm" },
            { url: "https://lubuntu.me/", name: "Lubuntu", tier: "common" },
            { url: "https://ubuntubudgie.org/", name: "Ubuntu Budgie" },
            { url: "https://ubuntu-mate.org/", name: "Ubuntu MATE" },
            { url: "https://ubuntustudio.org/", name: "Ubuntu Studio" },
            { url: "https://www.edubuntu.org/", name: "Edubuntu" },
            { url: "https://www.backbox.org/", name: "BackBox Linux" },
            { url: "https://zorin.com/os/", name: "Zorin OS", tier: "common" },
            { url: "https://elementary.io/", name: "elementary OS", tier: "common" },
            { url: "https://ubuntuunity.org/", name: "Ubuntu Unity" },
            { url: "https://ubuntucinnamon.org/", name: "Ubuntu Cinnamon" },
            { url: "https://neon.kde.org/", name: "KDE neon", tier: "common" },
            { url: "https://www.linuxliteos.com/", name: "Linux Lite" },
            { url: "https://www.bodhilinux.com/", name: "Bodhi Linux" },
            { url: "https://www.netrunner.com/", name: "Netrunner" }, // Will become EOL if no Debian 13 version is released in December 2026
            { url: "https://www.gooroom.kr/", name: "Gooroom" },
            { url: "https://trisquel.info/", name: "Trisquel", cpu: "x64 arm ppc" },
            { url: "https://peppermintos.com/", name: "Peppermint OS" },
            { url: "https://www.slax.org/", name: "Slax" }, //Running on Slackware or Debian 12, will reach EOL in 2026 if no Debian Trixie version is released
            { url: "https://mxlinux.org/", name: "MX Linux", cpu: "x64 x86 arm", tier: "common" },
            { url: "https://www.bandshed.net/avlinux/", name: "AV Linux" }, //Based on MX Linux, oriented for music production
            { url: "https://bosslinux.in/", name: "BOSS Linux" },
            { url: "https://www.primebook.in/primeos", name: "PrimeOS" },
            { url: "https://www.knopper.net/knoppix/index-en.html", name: "KNOPPIX", cpu: "x64 x86" },
            { url: "https://www.devuan.org/", name: "Devuan", cpu: "x64 x86 arm ppc" },
            { url: "https://www.deepin.org/en/", name: "deepin", cpu: "x64 arm riscv", tier: "common" },
            { url: "https://www.crunchbangplusplus.org/", name: "CrunchBang++" },
            { url: "https://getsol.us/", name: "Solus", tier: "common" },
            { url: "https://armbian.com", name: "Armbian", cpu: "arm riscv x64" },
            { url: "https://qntm.org/suicide", name: "Suicide Linux" }, //It's a concept, pretty much you can install it as a package or a container
            { url: "https://ferenos.weebly.com/", name: "Feren OS" },
            { url: "https://www.elivecd.org/", name: "Elive", cpu: "x64 x86" },
            { url: "https://q4os.org/index.html", name: "Q4OS", cpu: "x64 x86 arm" },
            { url: "https://voyagerlive.org/", name: "Voyager Live" }, //Ubuntu and Debian images, can't really call it a distro, website is terrible
            { url: "https://sourceforge.net/projects/rebeccablackos/", name: "RebeccaBlackOS" }, //First wayland testing distro, project updated but no recent ISOs
            { url: "https://nxos.org/", name: "Nitrux" }, //non Systemd Debian based
            // Never link uwuntuos.site: that domain lapsed, and the project itself warns it
            // now serves malware. This is the official one.
            { url: "https://uwuntuos.com/", name: "UwUntu" }, //UwUntu, Ubuntu based weeb distro
            { url: "https://pika-os.com/", name: "PikaOS" }, //Gaming Ubuntu based distro with Nobara Tweaks
            { url: "https://escuelaslinux.sourceforge.io/english/index.html", name: "Escuelas Linux" }, //Based on Bodhi, designed for preschool
            { url: "https://www.digi77.com/linux-kodachi/", name: "Linux Kodachi" }, //anti-forensic and anonymous distro based on Debian
            { url: "https://blends.debian.org/edu/", name: "Debian Edu" },
            { url: "https://vanillaos.org/", name: "Vanilla OS" },
            { url: "https://www.caine-live.net/", name: "CAINE" }, //Computer forensics distro based on Ubuntu
            { url: "https://br-os.com/", name: "Br OS" },
            { url: "https://maunalinux.top/", name: "Mauna Linux" }, // (was Amarok Linux, renamed 2023)
            { url: "https://besgnulinux.blogspot.com", name: "BesGnuLinux" }, //Debian based for low memory and processing computer to save old computers
            { url: "https://www.winux.is/", name: "Winux" }, //Have an independent fork https://windowsfx.org/" (was Linuxfx)
            //"https://www.linspirelinux.com/", //Became paywalled, discarded
            { url: "https://rhinolinux.org/", name: "Rhino Linux", cpu: "x64 arm" }, //ubuntu-based rolling release distro
            //"https://teejeetech.com/tag/zinc/", //ubuntu lts based distro with xfce as default, it has been renamed or removed
            { url: "https://draugeros.org/", name: "DraugerOS" }, //Ubuntu based gaming distro
            { url: "https://www.tuxedocomputers.com/en/TUXEDO-OS_1.tuxedo", name: "TUXEDO OS" }, //Linux hardware vendor
            { url: "https://www.kumander.org/", name: "Kumander Linux" }, //Debian based aiming to look like Windows 7
            { url: "https://www.openkylin.top/downloads/", name: "openKylin", cpu: "x64 arm riscv" }, //Open Kylin, the whole Kylin family is a mess
            { url: "https://www.ubuntukylin.com/", name: "Ubuntu Kylin", cpu: "x64 arm" }, //Ubuntu based Kylin
            { url: "https://loc-os.com/", name: "Loc-OS", cpu: "x64 x86" }, //Debian 11 based distro meant for old harwdware
            //"https://goldendoglinux.org/", //Debian based with gld alias for apt, Microsoft repo installed, and Plasma
            //"https://www.anduinos.com/", //Debian based with Ubuntu package approach - website answering 502 since 2026-08-18
            { url: "https://cuerdos.github.io", name: "CuerdOS" }, //Debian based Spanish distro, not really a unique feature
            { url: "https://dyne.org/dynebolic/", name: "dyne:bolic" }, //Devuan based
            { url: "https://ubuntu.com/", name: "Ubuntu", cpu: "x64 arm riscv ppc", tier: "common" }, //The base a good third of this list is built on, listed for its own sake
            { url: "https://sparkylinux.org/", name: "SparkyLinux", cpu: "x64 x86 arm" }, //Debian based, testing and stable branches, still releasing
            { url: "https://antixlinux.com/", name: "antiX", cpu: "x64 x86" }, //Debian based, no systemd, runs on machines nothing else will
            { url: "https://www.pureos.net/", name: "PureOS", cpu: "x64 arm" }, //Purism's FSF-endorsed Debian derivative, desktop and phone
            { url: "https://minios.dev/", name: "MiniOS" }, //Debian based live system with persistence, 32 and 64 bit
            { url: "https://www.exton.se/", name: "Exton Linux" }, //Prolific Swedish maker of Ubuntu and Debian respins
            { url: "https://gnoppix.org/", name: "Gnoppix" }, //Debian based, ships local AI tooling
            { url: "https://www.makululinux.com/", name: "MakuluLinux" }, //Debian based with its own desktops, Shift and Max
            { url: "https://emmabuntus.org/", name: "Emmabuntüs", cpu: "x64 x86" }, //Debian based, built to refurbish old machines for charities
            { url: "https://www.kicksecure.com/", name: "Kicksecure" }, //Hardened Debian, the base Whonix is built on
            { url: "https://www.whonix.org/", name: "Whonix" }, //Anonymity by a gateway and workstation pair, everything over Tor
            { url: "https://www.proxmox.com/", name: "Proxmox", tier: "common" }, //Debian based hypervisor, VE and Backup Server
            { url: "https://www.truenas.com/", name: "TrueNAS", tier: "common" }, //NAS appliance, the current SCALE line is Debian based
            { url: "https://dietpi.com/", name: "DietPi", cpu: "arm x64 riscv" }, //Minimal Debian for SBCs and low power servers
            { url: "https://www.pardus.org.tr/en/", name: "Pardus" }, // Turkish government; 25 Nov 2025
            { url: "https://www.openmediavault.org/", name: "openmediavault", cpu: "x64 arm" }, // NAS; OMV 8 Dec 2025
            { url: "https://ubports.com/", name: "Ubuntu Touch", cpu: "arm", tier: "common" }, // UBports mobile; 24.04-2.0 Jul 2026
            { url: "https://www.anduinos.com/", name: "AnduinOS" }, // Windows-11-style Ubuntu; 1.4 Oct 2025
            { url: "https://remnux.org/", name: "REMnux" }, // Malware analysis; v8 Feb 2026
            { url: "https://grml.org/", name: "Grml", cpu: "x64 arm" }, // Sysadmin rescue; 2026.09
            { url: "https://www.turnkeylinux.org/", name: "TurnKey Linux" }, // Server appliances; 19.0 Aug 2026
            { url: "https://gparted.org/livecd.php", name: "GParted Live", cpu: "x64 x86" }, // Partitioning live CD; Aug 2026
            { url: "https://fuss.bz.it/", name: "FUSS" }, // South Tyrol schools; 13.7 Oct 2026
            { url: "https://mobian-project.org/", name: "Mobian", cpu: "arm x64" }, // Debian for phones; Oct 2025
            { url: "https://www.bunsenlabs.org/", name: "BunsenLabs Linux", cpu: "x64 x86" }, // Carbon, Feb 2026
            { url: "https://astralinux.ru/en/software-services/os/", name: "Astra Linux" }, // 1.8.4 Nov 2025
            { url: "https://www.endlessos.org/os", name: "Endless OS", cpu: "x64 arm" }, // Endless OS 6 maintained, 7 in development (Jan 2026)
            { url: "https://solydxk.com/", name: "SolydXK" }, // 13-202603, Mar 2026
            { url: "https://www.kanotix.org/", name: "Kanotix", cpu: "x86 x64" }, // Slowfire 2024; Towelfire preview 2025
            { url: "http://www.damnsmalllinux.org/", name: "Damn Small Linux", cpu: "x86" }, // Revived as DSL 2024
        ], // debian links
        3: [
            { url: "https://archlinux.org/", name: "Arch Linux", tier: "common" },
            { url: "https://manjaro.org/", name: "Manjaro", cpu: "x64 arm", tier: "common" },
            { url: "https://archbang.org/", name: "ArchBang" },
            { url: "https://artixlinux.org/", name: "Artix Linux" },
            //"https://archlabslinux.com/", //Not there anymore
            { url: "https://endeavouros.com/", name: "EndeavourOS", tier: "common" },
            { url: "https://www.hyperbola.info/", name: "Hyperbola GNU/Linux-libre", cpu: "x64 x86" },
            { url: "https://www.parabola.nu/", name: "Parabola GNU/Linux-libre", cpu: "x64 x86 arm" },
            { url: "https://instantos.io", name: "instantOS" },
            { url: "https://maboxlinux.org/", name: "Mabox Linux" },
            { url: "https://garudalinux.org/", name: "Garuda Linux", tier: "common" },
            //"https://tos.odex.be/", //Not there anymore
            { url: "https://rebornos.org/", name: "RebornOS" },
            //"https://getcryst.al/site", //EOL, website down and outdated - Arch distro with GNOME and Amethyst AUR helper
            { url: "https://pearos.xyz/", name: "pearOS" }, //macos like Arch
            { url: "https://blendos.co/", name: "blendOS" }, //Arch based distro that has some sort of distrobox integration
            { url: "https://cachyos.org/", name: "CachyOS", tier: "common" },
            { url: "https://xerolinux.xyz/", name: "XeroLinux" },
            { url: "https://arkanelinux.org/", name: "Arkane Linux" }, //Arch based immutable distro with default GNOME
            { url: "https://nyarchlinux.moe/", name: "Nyarch Linux" },
            { url: "https://linux.kde.org/", name: "KDE Linux" }, //Official KDE supported distro based on Arch
            { url: "https://kazeta.org/", name: "Kazeta" }, //Gaming only distro focused on DRM-free games
            { url: "https://omarchy.org/", name: "Omarchy" }, //Based on Arch with Hyprland ootb
            { url: "https://www.biglinux.com.br/", name: "BigLinux" }, //Brazilian, Manjaro based with a heavily reworked KDE
            { url: "https://bluestarlinux.sourceforge.io/", name: "Bluestar Linux" }, //Arch based, ships a full software set out of the box
            { url: "https://archcraft.io/", name: "Archcraft" }, //Minimal Arch with preconfigured window managers
            { url: "https://athenaos.org/", name: "Athena OS" }, //Arch based for penetration testing
            { url: "https://chimeraos.org/", name: "ChimeraOS" }, //Arch based console style gaming OS, boots into Steam
            { url: "https://store.steampowered.com/steamos", name: "SteamOS", tier: "common" }, //Valve's Arch based OS for the Steam Deck
            { url: "https://www.tromjaro.com/", name: "TROMjaro" }, //Manjaro based, trade-free software only
            { url: "https://shani.dev/", name: "ShaniOS" }, // Immutable Arch, blue/green roots; Jan 2026
            { url: "https://www.blackarch.org/", name: "BlackArch Linux" }, // Rolling; repo active Oct 2026
            { url: "https://github.com/The-LainOS-Project/LainOS", name: "LainOS" }, // 2025.11.17 stable; lainos.dev no longer resolves
        ], // arch links
        4: [
            { url: "https://www.gentoo.org/", name: "Gentoo Linux", cpu: "x64 x86 arm riscv ppc", tier: "common" },
            //"https://chromeenterprise.google/os/chromeosflex/", //Requires contacto to get offers from Google, discarded
            { url: "https://www.calculate-linux.org/", name: "Calculate Linux" },
            { url: "https://www.chromium.org/chromium-os", name: "ChromiumOS", cpu: "x64 arm", tier: "common" },
            { url: "https://www.system-rescue.org/Download/", name: "SystemRescue" },
            { url: "https://www.mocaccino.org", name: "MocaccinoOS" },
            { url: "https://redcorelinux.org/", name: "Redcore Linux" }, //Hardened Gentoo based on its testing branch
            { url: "https://fydeos.io/", name: "FydeOS", cpu: "x64 arm" }, //De-googled Chromium
            { url: "https://www.flatcar.org/", name: "Flatcar Container Linux", cpu: "x64 arm" }, // CoreOS successor on a Gentoo SDK; Apr 2026
            { url: "https://github.com/lxnay/matrixos", name: "matrixOS" }, // Immutable OSTree Gentoo; Feb 2026
            { url: "https://pentoo.ch/", name: "Pentoo", cpu: "x64 x86" }, // 2025.0 Nov 2025
        ], // gentoo links
        5: [
            { url: "https://fedoraproject.org/", name: "Fedora Linux", cpu: "x64 arm ppc", tier: "common" },
            { url: "https://developers.redhat.com/products/rhel/download", name: "Red Hat Enterprise Linux", cpu: "x64 arm ppc", tier: "common" },
            { url: "https://www.centos.org/", name: "CentOS", cpu: "x64 arm ppc", tier: "common" },
            { url: "https://www.openmandriva.org/", name: "OpenMandriva Lx", cpu: "x64 arm" },
            { url: "https://www.oracle.com/linux/", name: "Oracle Linux", cpu: "x64 arm" },
            { url: "https://www.mageia.org/en/", name: "Mageia", cpu: "x64 x86 arm" },
            { url: "https://rosa.ru/rosa-fresh-13/", name: "ROSA Fresh" }, //Now called Rosa Fresh
            { url: "https://www.pclinuxos.com/", name: "PCLinuxOS" },
            { url: "https://getalt.org/en/", name: "ALT Linux", cpu: "x64 x86 arm ppc" },
            { url: "https://almalinux.org", name: "AlmaLinux", cpu: "x64 arm ppc", tier: "common" },
            { url: "https://rockylinux.org/", name: "Rocky Linux", cpu: "x64 arm ppc", tier: "common" },
            { url: "https://berry-lab.net/", name: "Berry Linux", cpu: "x64 x86" },
            { url: "https://www.miraclelinux.com/", name: "MIRACLE LINUX", cpu: "x64 arm" }, //Japanese RHEL compatible system
            //"https://euro-linux.com/en/software/eurolinux/", //404 - Polish RHEL compatible system, not developing the distro anymore
            { url: "https://nobaraproject.org/", name: "Nobara", tier: "common" },
            { url: "https://fedora-asahi-remix.org/", name: "Fedora Asahi Remix", cpu: "arm" }, //Asahi Linux project + Fedora Linux
            { url: "https://getaurora.dev/", name: "Aurora" }, //Ublue (Fedora atomica) based
            { url: "https://projectbluefin.io/", name: "Bluefin" }, //Ublue (Fedora atomica) based
            { url: "https://bazzite.gg/", name: "Bazzite", tier: "common" }, //Ublue (Fedora atomica) based
            { url: "https://oreonproject.org/", name: "Oreon" }, //RHEL based with added tweaks
            { url: "https://rakuos.org/", name: "RakuOS" }, //Fedora Atomic based, dnf package overlays; Origami Linux merged into it
            { url: "https://github.com/vojtapolasek/vojtux", name: "Vojtux" }, //Fedora with tweaks aimed for aimed at visually impaired users. Purpose of the distro is to contribute such tweaks to Fedora itself.
            { url: "https://ultramarine-linux.org/", name: "Ultramarine Linux", cpu: "x64 arm" }, //Fedora based with codecs and Flathub set up, actively released
            { url: "https://www.qubes-os.org/", name: "Qubes OS", tier: "common" }, //Security by isolation, Xen with Fedora and Debian templates
            { url: "https://secureblue.dev/", name: "secureblue" }, //Hardened Fedora Atomic images
            { url: "https://universal-blue.org/", name: "Universal Blue" }, //The image factory behind Bazzite, Bluefin and Aurora
            { url: "https://www.playtron.one/game-os", name: "Playtron GameOS" }, // Handheld/PC gaming OS; 1.1 2025
            { url: "https://aws.amazon.com/linux/amazon-linux-2023/", name: "Amazon Linux", cpu: "x64 arm", tier: "common" }, // AWS cloud OS (AL2023)
            { url: "https://openanolis.cn/", name: "Anolis OS", cpu: "x64 arm riscv" }, // Alibaba-led CentOS successor; 23.x 2025
            { url: "https://redos.red-soft.ru/", name: "RED OS", cpu: "x64 arm" }, // Russian certified RPM distro; 2025
        ], // fedora links
        6: [
            { url: "https://www.suse.com/", name: "SUSE Linux Enterprise", cpu: "x64 arm ppc", tier: "common" },
            { url: "https://www.opensuse.org/", name: "openSUSE", cpu: "x64 arm ppc", tier: "common" },
            { url: "https://easynas.org/", name: "EasyNAS" },
            { url: "https://linuxkamarada.com/", name: "Linux Kamarada" }, //Brazilian distro based on open SUSE Leap, working on version 15.6
            { url: "https://get.regataos.com.br/", name: "Regata OS" }, //Gaming focused distro based on OpenSuse Leap
            { url: "https://aeondesktop.github.io/", name: "openSUSE Aeon" } //openSUSE Aeon, immutable GNOME on MicroOS
        ], // suse links
        7: [
            { url: "http://www.slackware.com/", name: "Slackware", cpu: "x64 x86 arm", tier: "common" },
            { url: "https://nimblex.net/", name: "NimbleX", cpu: "x86" },
            { url: "https://salixos.org/", name: "Salix OS", cpu: "x64 x86" },
            { url: "http://www.porteus.org/", name: "Porteus", cpu: "x64 x86" },
            //"https://www.dnalinux.com/", //Container, not distro
            { url: "https://www.plamolinux.org/", name: "Plamo Linux", cpu: "x64 x86" },
            { url: "https://github.com/porteux/porteux", name: "PorteuX", cpu: "x64 arm" }, //Slackware based portable system, released on GitHub
            { url: "https://www.wifislax.com/", name: "Wifislax", cpu: "x64 x86" }, //Slackware based, wireless auditing
            { url: "https://unraid.net/", name: "Unraid", tier: "common" }, // NAS/homelab; 7.2.5 Apr 2026
            { url: "http://www.zenwalk.org/", name: "Zenwalk Linux", cpu: "x86 x64" }, // Current Milestone 2026, Sep 2026
        ], // slack links
        8: [
            { url: "https://www.ghostbsd.org/", name: "GhostBSD" },
            { url: "https://www.freebsd.org/", name: "FreeBSD", cpu: "x64 x86 arm riscv ppc", tier: "common" },
            { url: "https://www.openbsd.org/", name: "OpenBSD", cpu: "x64 x86 arm riscv ppc", tier: "common" },
            { url: "https://www.netbsd.org/", name: "NetBSD", cpu: "x64 x86 arm riscv ppc", tier: "common" },
            { url: "https://www.dragonflybsd.org/", name: "DragonFly BSD" },
            { url: "https://www.midnightbsd.org/", name: "MidnightBSD", cpu: "x64 x86" },
            { url: "https://nomadbsd.org/", name: "NomadBSD" },
            { url: "https://hellosystem.github.io/", name: "helloSystem" },
            { url: "https://ravynos.com/", name: "ravynOS" },
            { url: "https://chimera-linux.org/", name: "Chimera Linux", cpu: "x64 arm riscv ppc" },
            { url: "https://fuguita.org/", name: "FuguIta", cpu: "x64 x86 arm" },
            { url: "https://opnsense.org/", name: "OPNsense", tier: "common" }, //firewall distro based on hardenedBSD, which is freebsd-based
            { url: "https://hardenedbsd.org/", name: "HardenedBSD" }, //FreeBSD fork with exploit mitigations, the base OPNsense came from
            { url: "https://www.pfsense.org/", name: "pfSense", tier: "common" }, //FreeBSD based firewall, the other half of the OPNsense story
            { url: "https://www.xigmanas.com/", name: "XigmaNAS" } //FreeBSD based NAS, the continuation of NAS4Free
        ], // bsd links
        9: [
            { url: "https://guix.gnu.org/", name: "GNU Guix System", cpu: "x64 x86 arm" },
            { url: "https://www.gobolinux.org/", name: "GoboLinux" },
            { url: "https://voidlinux.org/", name: "Void Linux", cpu: "x64 x86 arm", tier: "common" },
            //"http://www.toms.net/rb/", //Not anymore
            { url: "http://www.tinycorelinux.net/", name: "Tiny Core Linux", cpu: "x64 x86 arm" },
            { url: "https://slitaz.org/en/", name: "SliTaz", cpu: "x86 x64" },
            { url: "https://puppylinux.com/", name: "Puppy Linux", cpu: "x64 x86", tier: "common" },
            //"https://openwrt.org/", //Removed due to it being not a distro
            { url: "https://nixos.org/", name: "NixOS", cpu: "x64 arm", tier: "common" },
            { url: "https://crux.nu/", name: "CRUX" },
            { url: "https://www.alpinelinux.org/", name: "Alpine Linux", cpu: "x64 x86 arm riscv ppc", tier: "common" },
            { url: "https://bedrocklinux.org/", name: "Bedrock Linux", cpu: "x64 x86 arm" },
            { url: "https://kaosx.us/", name: "KaOS" },
            { url: "https://thinstation.github.io/thinstation/", name: "Thinstation", cpu: "x64 x86" },
            { url: "https://asahilinux.org/", name: "Asahi Linux", cpu: "arm" },
            { url: "https://ponyos.org/", name: "PonyOS", cpu: "x86" },
            { url: "http://collapseos.org/", name: "Collapse OS", cpu: "retro" },
            { url: "https://venomlinux.org/", name: "Venom Linux" },
            { url: "https://easyos.org/", name: "EasyOS" }, //Experimental Linux distribution made by Puppy Linux's maintainer
            { url: "https://www.redox-os.org/", name: "Redox OS", cpu: "x64 x86 arm" }, //Rust-based independent OS
            { url: "https://4mlinux.com/", name: "4MLinux", cpu: "x64 x86" }, //Lighweight 32-bit Desktop edition and 64-bit Server edition            
            { url: "https://github.com/microsoft/azurelinux", name: "Azure Linux", cpu: "x64 arm" },
            { url: "https://omnios.org/", name: "OmniOS" },
            { url: "https://asterinas.github.io/", name: "Asterinas", cpu: "x64 riscv" }, //Rust based, framekernel and Linux ABI compatible
            { url: "https://t2sde.org/", name: "T2 SDE", cpu: "x64 x86 arm riscv ppc" }, //T2 SDE (System Development Environment), build system for Linux distributions
            { url: "https://aerynos.com/", name: "AerynOS" }, //Formerly Serpent OS, independent with the moss package manager
            { url: "https://os.gnome.org/", name: "GNOME OS" }, //GNOME's own image based reference OS
            { url: "https://nura.eco/", name: "Nura", cpu: "arm x64" }, //Alpine based, ten years of updates for old phones (was postmarketOS, renamed Sep 2026)
            { url: "https://batocera.org/", name: "Batocera.linux", cpu: "x64 arm" }, //Retro gaming, boots straight into EmulationStation
            { url: "https://rocknix.org/", name: "ROCKNIX", cpu: "arm" }, //Handheld gaming firmware, successor to JELOS
            { url: "https://www.zimaspace.com/", name: "ZimaOS" }, //ZimaOS, home server appliance OS
            { url: "https://www.openeuler.org/en/", name: "openEuler", cpu: "x64 arm riscv" }, //Chinese enterprise distro maintained by the openEuler community
            { url: "https://openindiana.org/", name: "OpenIndiana" }, //illumos, the community continuation of OpenSolaris
            { url: "https://www.commodoreos.net/", name: "Commodore OS Vision" }, //Commodore OS Vision, Linux dressed as a C64
            { url: "https://www.haiku-os.org/", name: "Haiku", cpu: "x64 x86", tier: "common" }, // BeOS successor; R1/beta6 Aug 2026
            { url: "https://openwrt.org/", name: "OpenWrt", cpu: "x64 x86 arm riscv ppc", tier: "common" }, // Router/embedded; 25.12 Mar 2026
            { url: "https://www.linuxfromscratch.org/", name: "Linux From Scratch", tier: "common" }, // 13.0 Mar 2026
            { url: "https://www.talos.dev/", name: "Talos Linux", cpu: "x64 arm" }, // Immutable Kubernetes OS; 1.14 Aug 2026
            { url: "https://libreelec.tv/", name: "LibreELEC", cpu: "x64 arm", tier: "common" }, // Kodi appliance; 12.2
            { url: "https://www.ipfire.org/", name: "IPFire", cpu: "x64 arm" }, // Firewall; core204 Oct 2026
            { url: "https://sailfishos.org/", name: "Sailfish OS", cpu: "arm" }, // Jolla mobile; 5.x 2026
            { url: "https://www.recalbox.com/", name: "Recalbox", cpu: "x64 x86 arm" }, // Retro gaming; 10.1 Sep 2026
            { url: "https://www.lakka.tv/", name: "Lakka", cpu: "x64 arm" }, // RetroArch; 6.1 Feb 2026
            { url: "https://knulli.org/", name: "Knulli", cpu: "arm" }, // Handheld firmware (Batocera-based); May 2026
            { url: "https://muos.dev/", name: "muOS", cpu: "arm" }, // Handheld firmware; 2601.1 Jan 2026
            { url: "https://aosc.io/", name: "AOSC OS", cpu: "x64 arm riscv ppc" }, // Independent, strong on RISC-V/LoongArch; Oct 2026
            { url: "https://www.tribblix.org/", name: "Tribblix" }, // illumos; m40 Jun 2026
            { url: "https://www.smartos.org/", name: "SmartOS" }, // illumos hypervisor; Sep 2026
            { url: "https://blankon.id/", name: "BlankOn", cpu: "x64 x86" }, // Revived; 26.09 in 2026
            { url: "http://www.lunar-linux.org/", name: "Lunar Linux", cpu: "x86 x64" }, // Rolling; moonbase active Oct 2026
        ] // other links
    },
    eol: {
        1: [
        ], // Placeholder for "ALL"
        2: [
            { url: "http://hannahmontana.sourceforge.net/", name: "Hannah Montana Linux", cpu: "x86" }, //very much yes.
            { url: "https://archiveos.org/feather/", name: "Feather Linux", cpu: "x86" },
            { url: "https://archiveos.org/dreamlinux/", name: "Dreamlinux", cpu: "x86" },
            { url: "https://archiveos.org/handy/", name: "HandyLinux", cpu: "x86 x64" },
            { url: "https://archiveos.org/kurumin/", name: "Kurumin", cpu: "x86" },
            { url: "https://archiveos.org/sabily/", name: "Sabily", cpu: "x86 x64" },
            { url: "https://www.nova.cu/", name: "Nova", cpu: "x86 x64" },
            { url: "https://archiveos.org/cub/", name: "Cub Linux", cpu: "x64 x86" },
            { url: "https://archiveos.org/max/", name: "MAX", cpu: "x86 x64" },
            { url: "https://sites.google.com/site/poseidonlinux/Home", name: "Poseidon Linux", cpu: "x86 x64" },
            { url: "https://archiveos.org/nepalinux/", name: "NepaLinux", cpu: "x86" },
            { url: "https://archiveos.org/advanced/", name: "Advanced Persistent Security" },
            { url: "https://archiveos.org/mydebian/", name: "MyDebian", cpu: "x86 x64" },
            { url: "https://archiveos.org/ubuntubsd/", name: "UbuntuBSD", cpu: "x64 x86" },
            { url: "https://archiveos.org/64studio/", name: "64 Studio", cpu: "x64 x86" },
            { url: "https://archiveos.org/accelerated-knoppix/", name: "Accelerated KNOPPIX", cpu: "x86" },
            { url: "https://www.backtrack-linux.org/", name: "BackTrack", cpu: "x86 x64 arm" },
            { url: "https://archiveos.org/bellaos/", name: "BellaOS" },
            { url: "https://archiveos.org/blackaudit/", name: "BlackAudit" },
            { url: "https://archiveos.org/bubuntu/", name: "Bubuntu" },
            { url: "http://environmentalomics.org/bio-linux/", name: "Bio-Linux" },
            { url: "https://archiveos.org/black-lab/", name: "Black Lab Linux", cpu: "x64 x86" },
            { url: "https://www.caelinux.com/CMS3/", name: "CAELinux" },
            { url: "https://archiveos.org/ubuntu-satanic/", name: "Ubuntu Satanic Edition", cpu: "x86 x64" }, //not sure if this distro has book of sin included
            { url: "https://archiveos.org/caixa-magica/", name: "Caixa Mágica", cpu: "x86 x64" },
            { url: "https://archiveos.org/delix/", name: "Delix", cpu: "x86" },
            { url: "https://archiveos.org/muriqui/", name: "Muriqui", cpu: "x86" },
            { url: "https://www.jolicloud.com/jolios/", name: "Joli OS", cpu: "x86" },
            { url: "https://www.backslashlinux.com/", name: "Backslash Linux" },
            { url: "https://lxle.net/", name: "LXLE", cpu: "x86 x64" },
            { url: "https://amog-os.github.io/", name: "AmogOS" }, //ඞ sus
            { url: "https://github.com/theVakhovskeIsTaken/holoiso", name: "HoloISO" },//Latest release in 2024
            { url: "https://galliumos.org/", name: "GalliumOS" }, //EOL - Last release from 2019
            { url: "https://spirallinux.github.io/", name: "SpiralLinux", cpu: "x64 x86" }, //EOL - No new releases since 2023
            { url: "https://regolith-linux.org/", name: "Regolith Linux", cpu: "x64 arm" }, // EOL - Last version from 2021
            { url: "http://ubuntuce.com/", name: "Ubuntu Christian Edition", cpu: "x86" }, // EOL - Last release from 2022
            { url: "https://cutefish-ubuntu.github.io/", name: "CutefishOS" }, //Still based on 22.04, no recent releases
            { url: "https://kaisenlinux.org/", name: "Kaisen Linux" }, // 3.0 (Aug 2025) declared the final release
            { url: "https://www.supergrubdisk.org/rescatux/", name: "Rescatux", cpu: "x64 x86" }, // Last release 0.74, Nov 2021
            { url: "https://www.omoikane.co.jp/product/", name: "Omoikane GNU/Linux" }, // Gone from the vendor page; successor ARMA 4.0 (2020) was the last
            { url: "http://www.linuxmce.org/", name: "LinuxMCE", cpu: "x64 x86" }, // Site down for maintenance, last stable 1404 (Ubuntu 14.04)
        ], // eol debian links
        3: [
            { url: "https://archbox-linux.github.io/", name: "ArchBox Linux" },
            { url: "https://archiveos.org/archeos/", name: "ArcheOS", cpu: "x86 x64" },
            { url: "https://archiveos.org/architect/", name: "Architect" },
            { url: "https://archiveos.org/archmerge/", name: "ArchMerge" },
            { url: "https://archiveos.org/antergos/", name: "Antergos" },
            { url: "https://archiveos.org/chakra/", name: "Chakra" }, //https://www.chakralinux.org/
            { url: "http://justbrowsinglinux.com/", name: "JustBrowsing" }, //Cool but last release was in 2014
            { url: "https://www.frugalware.org/", name: "Frugalware Linux", cpu: "x64 x86" }, //EOL - Last version from 2016
            { url: "https://arcolinux.com/", name: "ArcoLinux" }, //Project has been ended by author
            { url: "https://archhurd.org/", name: "Arch Hurd", cpu: "x86" }, //EOL - Arch based on GNUHurd. Last version from 2018.
            { url: "https://exodia-os.github.io/", name: "Exodia OS" }, //EOL - No new release since 2024 (Arch based distro for cibersecurity)
            { url: "https://arcolinuxb.com/", name: "ArcoLinuxB" }, //Project has been ended by author
            { url: "https://getcryst.al/", name: "Crystal Linux" }, // Sunset Jan 2026
            { url: "https://github.com/SteamFork", name: "SteamFork" }, // Archived Apr 2025
        ], // eol arch links
        4: [
            { url: "https://archiveos.org/vlos/", name: "VLOS", cpu: "x86" },
            { url: "https://archiveos.org/slontoo/", name: "Slontoo", cpu: "x86" },
            { url: "https://gentoox.shallax.com/", name: "Gentoox", cpu: "x86" },
            { url: "https://archiveos.org/gentooth/", name: "GentooTH" },
            { url: "https://archiveos.org/cloveros/", name: "CloverOS" },
            { url: "https://archiveos.org/bintoo/", name: "BinToo" },
            { url: "https://archiveos.org/phaeronix/", name: "Phaeronix" },
            { url: "https://archiveos.org/bitdefender/", name: "BitDefender Rescue CD", cpu: "x86" },
            { url: "https://liguros.gitlab.io/", name: "LiGurOS" }, //EOL - Last release from 2020
            { url: "https://www.funtoo.org/", name: "Funtoo Linux" }, // Ended Jul 2024
        ], // eol gentoo links
        5: [
            { url: "https://archiveos.org/redstar/", name: "Red Star OS", cpu: "x86" }, //RedStarOS's website's inactive directory is called www.naenara.com.kp/en/kcc/ and naenara in korea means my country (내나라) pretty creative I guess
            { url: "https://archiveos.org/linux-xp/", name: "Linux XP", cpu: "x86" },
            { url: "https://archiveos.org/yellowdog/", name: "Yellow Dog Linux", cpu: "ppc" },
            { url: "https://vinelinux.org/", name: "Vine Linux", cpu: "x86 ppc" },
            { url: "https://archiveos.org/asplinux/", name: "ASPLinux", cpu: "x86" },
            { url: "https://archiveos.org/tao/", name: "Tao Linux", cpu: "x86" },
            { url: "https://archiveos.org/startcom/", name: "StartCom Linux", cpu: "x86" },
            { url: "https://scientificlinux.org/", name: "Scientific Linux", cpu: "x64 x86" }, //Reached EOL on June 30, 2024
            { url: "https://sourceforge.net/projects/xange/", name: "sourceforge.net/projects/xange", cpu: "x86" }, //EOL - Latest release from 2023
            { url: "https://risi.io/", name: "risiOS" }, //Dead website
            { url: "https://www.clearos.com/", name: "ClearOS" }, //Small business server distro, discontinued and website gone
            { url: "https://img.cs.montana.edu/linux/montanalinux/", name: "Montana Linux", cpu: "x86" }, //Montana Linux, university respin, host no longer answers
            { url: "https://euro-linux.com/", name: "EuroLinux", cpu: "x64 arm" }, // EOL Oct 2024
        ], // eol fedora links
        6: [
            { url: "https://archiveos.org/united/", name: "United Linux", cpu: "x86" },
            { url: "https://archiveos.org/karamad/", name: "Karamad", cpu: "x86" },
            { url: "http://urix.us/", name: "URIX OS" },
            { url: "https://archiveos.org/kde-four-live/", name: "KDE Four Live", cpu: "x86 x64" },
            { url: "https://www.stresslinux.org/sl/", name: "Stresslinux", cpu: "x86" },
            { url: "https://geckolinux.github.io/", name: "GeckoLinux" }, //EOL - Last release from 2022
            { url: "https://archiveos.org/astaro/", name: "Astaro Security Linux", cpu: "x86" }
        ], // eol suse links
        7: [
            { url: "https://archiveos.org/vector/", name: "VectorLinux", cpu: "x86 x64" },
            { url: "https://archiveos.org/topologilinux/", name: "Topologilinux", cpu: "x86" },
            { url: "https://archiveos.org/rivendell/", name: "Rivendell", cpu: "x86" },
            { url: "https://www.supergamer.x10host.com/", name: "SuperGamer", cpu: "x86" }, //EOL - Latest release from 2016
            { url: "https://www.freenix.net/", name: "freenix.net", cpu: "x86" }, //EOL - No working link or repo (Slackware with non-free packages)
            { url: "https://www.absolutelinux.org/", name: "Absolute Linux" }, // Discontinued Jan 2025
        ], // eol slack links
        8: [
            { url: "https://www.trueos.org/", name: "TrueOS" }, //Was PC-BSD, discontinued in 2020, the notice explains why
            { url: "https://nextbsd.org/", name: "NextBSD" }, //FreeBSD fork with Mach and launchd, abandoned
            { url: "https://sourceforge.net/projects/desktopbsd/", name: "DesktopBSD", cpu: "x86 x64" }, //DesktopBSD, FreeBSD for the desktop, long dead
            { url: "https://www.truenas.com/truenas-core/", name: "TrueNAS CORE" }, // Final release 13.3-U1.2, Apr 2025
        ], // eol bsd links
        9: [
            { url: "https://archiveos.org/kateos/", name: "KateOS", cpu: "x86" },
            { url: "https://archiveos.org/caldera/", name: "Caldera OpenLinux", cpu: "x86" },
            { url: "https://archiveos.org/lps/", name: "Lightweight Portable Security", cpu: "x64 x86" },
            { url: "https://emmett31.wixsite.com/lightninglinux", name: "emmett31.wixsite.com/lightninglinux" }, //parent unknown. come back to it later
            { url: "https://archiveos.org/netlinx/", name: "NetLinx", cpu: "x86" },
            { url: "https://archiveos.org/alinux/", name: "aLinux", cpu: "x86" },
            { url: "http://biebian.sourceforge.net/", name: "Biebian" },
            //yeah it turns out biebian is not part of Debian or Ubuntu (shoking) it's acutally part of Puppy Linux which was part of a joke
            { url: "https://archiveos.org/saluki/", name: "Saluki", cpu: "x86" },
            { url: "https://archiveos.org/carolina/", name: "Carolina" },
            { url: "https://web.archive.org/web/20210720175650/", name: "web.archive.org/web/20210720175650", cpu: "x86" },
            { url: "https://nakst.gitlab.io/essence", name: "Essence" }, //EOL - Last release from 2023
            { url: "https://www.dragora.org/", name: "Dragora", cpu: "x86 x64" }, //EOL - Latest release from 2023
            { url: "http://www.mklinux.org/", name: "MkLinux", cpu: "ppc" }, // EOL - Latest release from 2009
            { url: "https://clearlinux.org/", name: "Clear Linux OS" }, //Discontinued by Intel in July 2025
            { url: "https://cb-linux.github.io/breath/", name: "Breath", cpu: "x64 arm" }, //EOL
            { url: "https://k1ss.org/install", name: "KISS Linux" }, //EOL - No updates since 2020
            { url: "https://www.foresightlinux.org/", name: "Foresight Linux", cpu: "x86 x64" }, //EOL - Last release from 2013
            { url: "https://github.com/JustEnoughLinuxOS", name: "JELOS", cpu: "arm" }, // Ended 2024; team moved to ROCKNIX
        ] // eol other links
    }
};
