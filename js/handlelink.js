// This file contains all the links: { url, name } per distro, keyed 1-9 by family.
// The name is what the result card shows. Where the official name is not known
// for sure, the name is the host (and path), the same text the card links.

var links = {
    regular: {
        1: [
        ], // Placeholder for "ALL"
        2: [
            { url: "https://www.debian.org/", name: "Debian" },
            { url: "https://pop.system76.com/", name: "Pop!_OS" }, //Based on Ubuntu 24.04 LTS, features COSMIC desktop
            { url: "https://www.kali.org/", name: "Kali Linux" },
            { url: "https://tails.boum.org/", name: "Tails" },
            { url: "https://linuxmint.com/", name: "Linux Mint" },
            { url: "https://xubuntu.org/", name: "Xubuntu" },
            { url: "https://kubuntu.org/", name: "Kubuntu" },
            { url: "https://www.raspberrypi.org/software/", name: "Raspberry Pi OS" },
            { url: "https://www.parrotsec.org/", name: "Parrot OS" },
            { url: "https://lubuntu.me/", name: "Lubuntu" },
            { url: "https://ubuntubudgie.org/", name: "Ubuntu Budgie" },
            { url: "https://ubuntu-mate.org/", name: "Ubuntu MATE" },
            { url: "https://ubuntustudio.org/", name: "Ubuntu Studio" },
            { url: "https://www.edubuntu.org/", name: "Edubuntu" },
            { url: "https://www.backbox.org/", name: "BackBox Linux" },
            { url: "https://zorinos.com/", name: "Zorin OS" },
            { url: "https://elementary.io/", name: "elementary OS" },
            { url: "https://ubuntuunity.org/", name: "Ubuntu Unity" },
            { url: "https://ubuntucinnamon.org/", name: "Ubuntu Cinnamon" },
            { url: "https://neon.kde.org/", name: "KDE neon" },
            { url: "https://www.linuxliteos.com/", name: "Linux Lite" },
            { url: "http://www.linuxmce.org/", name: "LinuxMCE" },
            { url: "https://www.bodhilinux.com/", name: "Bodhi Linux" },
            { url: "https://www.netrunner.com/", name: "Netrunner" }, // Will become EOL if no Debian 13 version is released in December 2026
            { url: "https://www.gooroom.kr/", name: "Gooroom" },
            { url: "https://trisquel.info/", name: "Trisquel" },
            { url: "https://peppermintos.com/", name: "Peppermint OS" },
            { url: "https://www.slax.org/", name: "Slax" }, //Running on Slackware or Debian 12, will reach EOL in 2026 if no Debian Trixie version is released
            { url: "https://mxlinux.org/", name: "MX Linux" },
            { url: "https://www.bandshed.net/avlinux/", name: "AV Linux" }, //Based on MX Linux, oriented for music production
            { url: "https://bosslinux.in/", name: "BOSS Linux" },
            { url: "https://www.primebook.in/primeos", name: "PrimeOS" },
            { url: "https://www.knopper.net/knoppix/index-en.html", name: "KNOPPIX" },
            { url: "https://www.devuan.org/", name: "Devuan" },
            { url: "https://www.deepin.org/en/", name: "deepin" },
            { url: "https://www.crunchbangplusplus.org/", name: "CrunchBang++" },
            { url: "https://getsol.us/", name: "Solus" },
            { url: "https://armbian.com", name: "Armbian" },
            { url: "https://qntm.org/suicide", name: "Suicide Linux" }, //It's a concept, pretty much you can install it as a package or a container
            { url: "https://ferenos.weebly.com/", name: "Feren OS" },
            { url: "https://www.elivecd.org/", name: "Elive" },
            { url: "https://q4os.org/index.html", name: "Q4OS" },
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
            { url: "https://www.omoikane.co.jp/product/", name: "Omoikane GNU/Linux" }, //Debian-based Japanese distro meant for business support through licensing
            { url: "https://vanillaos.org/", name: "Vanilla OS" },
            { url: "https://www.caine-live.net/", name: "CAINE" }, //Computer forensics distro based on Ubuntu
            { url: "https://br-os.com/", name: "Br OS" },
            { url: "https://amaroklinux.org/", name: "amaroklinux.org" },
            { url: "https://besgnulinux.blogspot.com", name: "BesGnuLinux" }, //Debian based for low memory and processing computer to save old computers
            { url: "https://www.linuxfx.org/", name: "Linuxfx" }, //Have an independent fork https://windowsfx.org/"
            //"https://www.linspirelinux.com/", //Became paywalled, discarded
            { url: "https://kaisenlinux.org/", name: "Kaisen Linux" }, //Debian-based rolling release distro for IT diagnostics
            { url: "https://rhinolinux.org/", name: "Rhino Linux" }, //ubuntu-based rolling release distro
            //"https://teejeetech.com/tag/zinc/", //ubuntu lts based distro with xfce as default, it has been renamed or removed
            { url: "https://draugeros.org/", name: "DraugerOS" }, //Ubuntu based gaming distro
            { url: "https://www.supergrubdisk.org/rescatux/", name: "Rescatux" }, //Debian based distro for rescuiing broken installations
            { url: "https://www.tuxedocomputers.com/en/TUXEDO-OS_1.tuxedo", name: "TUXEDO OS" }, //Linux hardware vendor
            { url: "https://www.kumander.org/", name: "Kumander Linux" }, //Debian based aiming to look like Windows 7
            { url: "https://www.openkylin.top/downloads/", name: "openKylin" }, //Open Kylin, the whole Kylin family is a mess
            { url: "https://ubuntukylin.com/", name: "Ubuntu Kylin" }, //Ubuntu based Kylin
            { url: "https://loc-os.com/", name: "Loc-OS" }, //Debian 11 based distro meant for old harwdware
            //"https://goldendoglinux.org/", //Debian based with gld alias for apt, Microsoft repo installed, and Plasma
            //"https://www.anduinos.com/", //Debian based with Ubuntu package approach - website answering 502 since 2026-08-18
            { url: "https://cuerdos.github.io", name: "CuerdOS" }, //Debian based Spanish distro, not really a unique feature
            { url: "https://dyne.org/dynebolic/", name: "dyne:bolic" }, //Devuan based
            { url: "https://ubuntu.com/", name: "Ubuntu" }, //The base a good third of this list is built on, listed for its own sake
            { url: "https://sparkylinux.org/", name: "SparkyLinux" }, //Debian based, testing and stable branches, still releasing
            { url: "https://antixlinux.com/", name: "antiX" }, //Debian based, no systemd, runs on machines nothing else will
            { url: "https://www.pureos.net/", name: "PureOS" }, //Purism's FSF-endorsed Debian derivative, desktop and phone
            { url: "https://minios.dev/", name: "MiniOS" }, //Debian based live system with persistence, 32 and 64 bit
            { url: "https://www.exton.se/", name: "Exton Linux" }, //Prolific Swedish maker of Ubuntu and Debian respins
            { url: "https://gnoppix.org/", name: "Gnoppix" }, //Debian based, ships local AI tooling
            { url: "https://www.makululinux.com/", name: "MakuluLinux" }, //Debian based with its own desktops, Shift and Max
            { url: "https://emmabuntus.org/", name: "Emmabuntüs" }, //Debian based, built to refurbish old machines for charities
            { url: "https://www.kicksecure.com/", name: "Kicksecure" }, //Hardened Debian, the base Whonix is built on
            { url: "https://www.whonix.org/", name: "Whonix" }, //Anonymity by a gateway and workstation pair, everything over Tor
            { url: "https://www.proxmox.com/", name: "Proxmox" }, //Debian based hypervisor, VE and Backup Server
            { url: "https://www.truenas.com/", name: "TrueNAS" }, //NAS appliance, the current SCALE line is Debian based
            { url: "https://dietpi.com/", name: "DietPi" } //Minimal Debian for SBCs and low power servers
        ], // debian links
        3: [
            { url: "https://archlinux.org/", name: "Arch Linux" },
            { url: "https://manjaro.org/", name: "Manjaro" },
            { url: "https://archbang.org/", name: "ArchBang" },
            { url: "https://artixlinux.org/", name: "Artix Linux" },
            //"https://archlabslinux.com/", //Not there anymore
            { url: "https://endeavouros.com/", name: "EndeavourOS" },
            { url: "https://www.hyperbola.info/", name: "Hyperbola GNU/Linux-libre" },
            { url: "https://www.parabola.nu/", name: "Parabola GNU/Linux-libre" },
            { url: "https://instantos.io", name: "instantOS" },
            { url: "https://maboxlinux.org/", name: "Mabox Linux" },
            { url: "https://garudalinux.org/", name: "Garuda Linux" },
            //"https://tos.odex.be/", //Not there anymore
            { url: "https://rebornos.org/", name: "RebornOS" },
            //"https://getcryst.al/site", //EOL, website down and outdated - Arch distro with GNOME and Amethyst AUR helper
            { url: "https://pearos.xyz/", name: "pearOS" }, //macos like Arch
            { url: "https://blendos.co/", name: "blendOS" }, //Arch based distro that has some sort of distrobox integration
            { url: "https://cachyos.org/", name: "CachyOS" },
            { url: "https://xerolinux.xyz/", name: "XeroLinux" },
            { url: "https://arkanelinux.org/", name: "Arkane Linux" }, //Arch based immutable distro with default GNOME
            { url: "https://nyarchlinux.moe/", name: "Nyarch Linux" },
            { url: "https://kde.org/linux/", name: "KDE Linux" }, //Official KDE supported distro based on Arch
            { url: "https://kazeta.org/", name: "Kazeta" }, //Gaming only distro focused on DRM-free games
            { url: "https://omarchy.org/", name: "Omarchy" }, //Based on Arch with Hyprland ootb
            { url: "https://www.biglinux.com.br/", name: "BigLinux" }, //Brazilian, Manjaro based with a heavily reworked KDE
            { url: "https://bluestarlinux.sourceforge.io/", name: "Bluestar Linux" }, //Arch based, ships a full software set out of the box
            { url: "https://archcraft.io/", name: "Archcraft" }, //Minimal Arch with preconfigured window managers
            { url: "https://athenaos.org/", name: "Athena OS" }, //Arch based for penetration testing
            { url: "https://chimeraos.org/", name: "ChimeraOS" }, //Arch based console style gaming OS, boots into Steam
            { url: "https://store.steampowered.com/steamos", name: "SteamOS" }, //Valve's Arch based OS for the Steam Deck
            { url: "https://www.tromjaro.com/", name: "TROMjaro" } //Manjaro based, trade-free software only
        ], // arch links
        4: [
            { url: "https://www.gentoo.org/", name: "Gentoo Linux" },
            //"https://chromeenterprise.google/os/chromeosflex/", //Requires contacto to get offers from Google, discarded
            { url: "https://www.calculate-linux.org/", name: "Calculate Linux" },
            { url: "https://www.chromium.org/chromium-os", name: "ChromiumOS" },
            { url: "https://www.system-rescue.org/Download/", name: "SystemRescue" },
            { url: "https://www.mocaccino.org", name: "MocaccinoOS" },
            { url: "https://redcorelinux.org/", name: "Redcore Linux" }, //Hardened Gentoo based on its testing branch
            { url: "https://fydeos.io/", name: "FydeOS" } //De-googled Chromium
        ], // gentoo links
        5: [
            { url: "https://getfedora.org/", name: "Fedora Linux" },
            { url: "https://developers.redhat.com/products/rhel/download", name: "Red Hat Enterprise Linux" },
            { url: "https://www.centos.org/", name: "CentOS" },
            { url: "https://www.openmandriva.org/", name: "OpenMandriva Lx" },
            { url: "https://www.oracle.com/linux/", name: "Oracle Linux" },
            { url: "https://www.mageia.org/en/", name: "Mageia" },
            { url: "https://rosa.ru/rosa-fresh-12/", name: "ROSA Fresh" }, //Now called Rosa Fresh
            { url: "https://www.pclinuxos.com/", name: "PCLinuxOS" },
            { url: "https://getalt.org/en/", name: "ALT Linux" },
            { url: "https://almalinux.org", name: "AlmaLinux" },
            { url: "https://rockylinux.org/", name: "Rocky Linux" },
            { url: "https://berry-lab.net/", name: "Berry Linux" },
            { url: "https://www.miraclelinux.com/", name: "MIRACLE LINUX" }, //Japanese RHEL compatible system
            //"https://euro-linux.com/en/software/eurolinux/", //404 - Polish RHEL compatible system, not developing the distro anymore
            { url: "https://nobaraproject.org/", name: "Nobara" },
            { url: "https://fedora-asahi-remix.org/", name: "Fedora Asahi Remix" }, //Asahi Linux project + Fedora Linux
            { url: "https://getaurora.dev/", name: "Aurora" }, //Ublue (Fedora atomica) based
            { url: "https://projectbluefin.io/", name: "Bluefin" }, //Ublue (Fedora atomica) based
            { url: "https://bazzite.gg/", name: "Bazzite" }, //Ublue (Fedora atomica) based
            { url: "https://oreonproject.org/", name: "Oreon" }, //RHEL based with added tweaks
            { url: "https://rakuos.org/", name: "RakuOS" }, //Fedora Atomic based, dnf package overlays; Origami Linux merged into it
            { url: "https://github.com/vojtapolasek/vojtux", name: "Vojtux" }, //Fedora with tweaks aimed for aimed at visually impaired users. Purpose of the distro is to contribute such tweaks to Fedora itself.
            { url: "https://ultramarine-linux.org/", name: "Ultramarine Linux" }, //Fedora based with codecs and Flathub set up, actively released
            { url: "https://www.qubes-os.org/", name: "Qubes OS" }, //Security by isolation, Xen with Fedora and Debian templates
            { url: "https://secureblue.dev/", name: "secureblue" }, //Hardened Fedora Atomic images
            { url: "https://universal-blue.org/", name: "Universal Blue" } //The image factory behind Bazzite, Bluefin and Aurora
        ], // fedora links
        6: [
            { url: "https://www.suse.com/", name: "SUSE Linux Enterprise" },
            { url: "https://www.opensuse.org/", name: "openSUSE" },
            { url: "https://easynas.org/", name: "EasyNAS" },
            { url: "https://linuxkamarada.com/", name: "Linux Kamarada" }, //Brazilian distro based on open SUSE Leap, working on version 15.6
            { url: "https://get.regataos.com.br/", name: "Regata OS" }, //Gaming focused distro based on OpenSuse Leap
            { url: "https://aeondesktop.github.io/", name: "openSUSE Aeon" } //openSUSE Aeon, immutable GNOME on MicroOS
        ], // suse links
        7: [
            { url: "http://www.slackware.com/", name: "Slackware" },
            { url: "https://nimblex.net/", name: "NimbleX" },
            { url: "https://salixos.org/", name: "Salix OS" },
            { url: "http://www.porteus.org/", name: "Porteus" },
            //"https://www.dnalinux.com/", //Container, not distro
            { url: "https://www.plamolinux.org/", name: "Plamo Linux" },
            { url: "https://github.com/porteux/porteux", name: "PorteuX" }, //Slackware based portable system, released on GitHub
            { url: "https://www.wifislax.com/", name: "Wifislax" } //Slackware based, wireless auditing
        ], // slack links
        8: [
            { url: "https://www.ghostbsd.org/", name: "GhostBSD" },
            { url: "https://www.freebsd.org/", name: "FreeBSD" },
            { url: "https://www.openbsd.org/", name: "OpenBSD" },
            { url: "https://www.netbsd.org/", name: "NetBSD" },
            { url: "https://www.dragonflybsd.org/", name: "DragonFly BSD" },
            { url: "https://www.midnightbsd.org/", name: "MidnightBSD" },
            { url: "https://nomadbsd.org/", name: "NomadBSD" },
            { url: "https://hellosystem.github.io/", name: "helloSystem" },
            { url: "https://ravynos.com/", name: "ravynOS" },
            { url: "https://chimera-linux.org/", name: "Chimera Linux" },
            { url: "https://fuguita.org/", name: "FuguIta" },
            { url: "https://opnsense.org/", name: "OPNsense" }, //firewall distro based on hardenedBSD, which is freebsd-based
            { url: "https://hardenedbsd.org/", name: "HardenedBSD" }, //FreeBSD fork with exploit mitigations, the base OPNsense came from
            { url: "https://www.pfsense.org/", name: "pfSense" }, //FreeBSD based firewall, the other half of the OPNsense story
            { url: "https://www.xigmanas.com/", name: "XigmaNAS" } //FreeBSD based NAS, the continuation of NAS4Free
        ], // bsd links
        9: [
            { url: "https://guix.gnu.org/", name: "GNU Guix System" },
            { url: "https://www.gobolinux.org/", name: "GoboLinux" },
            { url: "https://voidlinux.org/", name: "Void Linux" },
            //"http://www.toms.net/rb/", //Not anymore
            { url: "http://www.tinycorelinux.net/", name: "Tiny Core Linux" },
            { url: "https://slitaz.org/en/", name: "SliTaz" },
            { url: "https://puppylinux.com/", name: "Puppy Linux" },
            //"https://openwrt.org/", //Removed due to it being not a distro
            { url: "https://nixos.org/", name: "NixOS" },
            { url: "https://crux.nu/", name: "CRUX" },
            { url: "https://www.alpinelinux.org/", name: "Alpine Linux" },
            { url: "https://bedrocklinux.org/", name: "Bedrock Linux" },
            { url: "https://kaosx.us/", name: "KaOS" },
            { url: "https://thinstation.github.io/thinstation/", name: "Thinstation" },
            { url: "https://asahilinux.org/", name: "Asahi Linux" },
            { url: "https://ponyos.org/", name: "PonyOS" },
            { url: "http://collapseos.org/", name: "Collapse OS" },
            { url: "https://venomlinux.org/", name: "Venom Linux" },
            { url: "https://easyos.org/", name: "EasyOS" }, //Experimental Linux distribution made by Puppy Linux's maintainer
            { url: "https://www.redox-os.org/", name: "Redox OS" }, //Rust-based independent OS
            { url: "https://4mlinux.com/", name: "4MLinux" }, //Lighweight 32-bit Desktop edition and 64-bit Server edition            
            { url: "https://github.com/microsoft/azurelinux", name: "Azure Linux" },
            { url: "https://omnios.org/", name: "OmniOS" },
            { url: "https://asterinas.github.io/", name: "Asterinas" }, //Rust based, framekernel and Linux ABI compatible
            { url: "https://t2sde.org/", name: "T2 SDE" }, //T2 SDE (System Development Environment), build system for Linux distributions
            { url: "https://aerynos.com/", name: "AerynOS" }, //Formerly Serpent OS, independent with the moss package manager
            { url: "https://os.gnome.org/", name: "GNOME OS" }, //GNOME's own image based reference OS
            { url: "https://postmarketos.org/", name: "postmarketOS" }, //Alpine based, ten years of updates for old phones
            { url: "https://batocera.org/", name: "Batocera.linux" }, //Retro gaming, boots straight into EmulationStation
            { url: "https://rocknix.org/", name: "ROCKNIX" }, //Handheld gaming firmware, successor to JELOS
            { url: "https://www.zimaspace.com/", name: "ZimaOS" }, //ZimaOS, home server appliance OS
            { url: "https://www.openeuler.org/en/", name: "openEuler" }, //Chinese enterprise distro maintained by the openEuler community
            { url: "https://openindiana.org/", name: "OpenIndiana" }, //illumos, the community continuation of OpenSolaris
            { url: "https://www.commodoreos.net/", name: "Commodore OS Vision" } //Commodore OS Vision, Linux dressed as a C64
        ] // other links
    },
    eol: {
        1: [
        ], // Placeholder for "ALL"
        2: [
            { url: "http://hannahmontana.sourceforge.net/", name: "Hannah Montana Linux" }, //very much yes.
            { url: "https://archiveos.org/feather/", name: "Feather Linux" },
            { url: "https://archiveos.org/dreamlinux/", name: "Dreamlinux" },
            { url: "https://www.kanotix.org/", name: "Kanotix" },
            { url: "https://archiveos.org/handy/", name: "HandyLinux" },
            { url: "https://archiveos.org/kurumin/", name: "Kurumin" },
            { url: "https://archiveos.org/sabily/", name: "Sabily" },
            { url: "https://www.nova.cu/", name: "Nova" },
            { url: "https://archiveos.org/cub/", name: "Cub Linux" },
            { url: "https://archiveos.org/max/", name: "MAX" },
            { url: "https://sites.google.com/site/poseidonlinux/Home", name: "Poseidon Linux" },
            { url: "https://archiveos.org/nepalinux/", name: "NepaLinux" },
            { url: "https://archiveos.org/advanced/", name: "Advanced Persistent Security" },
            { url: "https://archiveos.org/mydebian/", name: "MyDebian" },
            { url: "https://archiveos.org/ubuntubsd/", name: "UbuntuBSD" },
            { url: "https://archiveos.org/64studio/", name: "64 Studio" },
            { url: "https://archiveos.org/accelerated-knoppix/", name: "Accelerated KNOPPIX" },
            { url: "https://www.backtrack-linux.org/", name: "BackTrack" },
            { url: "https://archiveos.org/bellaos/", name: "BellaOS" },
            { url: "https://archiveos.org/blackaudit/", name: "BlackAudit" },
            { url: "https://archiveos.org/bubuntu/", name: "Bubuntu" },
            { url: "http://environmentalomics.org/bio-linux/", name: "Bio-Linux" },
            { url: "https://archiveos.org/black-lab/", name: "Black Lab Linux" },
            { url: "https://www.caelinux.com/CMS3/", name: "CAELinux" },
            { url: "https://archiveos.org/ubuntu-satanic/", name: "Ubuntu Satanic Edition" }, //not sure if this distro has book of sin included
            { url: "https://archiveos.org/caixa-magica/", name: "Caixa Mágica" },
            { url: "https://archiveos.org/delix/", name: "Delix" },
            { url: "https://archiveos.org/muriqui/", name: "Muriqui" },
            { url: "https://www.jolicloud.com/jolios/", name: "Joli OS" },
            { url: "https://www.backslashlinux.com/", name: "Backslash Linux" },
            { url: "https://lxle.net/", name: "LXLE" },
            { url: "https://amog-os.github.io/", name: "AmogOS" }, //ඞ sus
            { url: "https://github.com/theVakhovskeIsTaken/holoiso", name: "HoloISO" },//Latest release in 2024
            { url: "https://solydxk.com/", name: "SolydXK" }, //EOL - Latest release from 2023
            { url: "https://www.endlessos.org/os", name: "Endless OS" }, //EOL - Latest release from 2022
            { url: "https://astralinux.ru/en/software-services/os/", name: "Astra Linux" }, //EOL - Latest version is from 2023
            { url: "https://galliumos.org/", name: "GalliumOS" }, //EOL - Last release from 2019
            { url: "http://www.damnsmalllinux.org/", name: "Damn Small Linux" }, //EOL - Last release from 2024
            { url: "https://spirallinux.github.io/", name: "SpiralLinux" }, //EOL - No new releases since 2023
            { url: "https://www.bunsenlabs.org/", name: "BunsenLabs Linux" }, //EOL - No release since 2024
            { url: "https://regolith-linux.org/", name: "Regolith Linux" }, // EOL - Last version from 2021
            { url: "http://ubuntuce.com/", name: "Ubuntu Christian Edition" }, // EOL - Last release from 2022
            { url: "https://cutefish-ubuntu.github.io/", name: "CutefishOS" }, //Still based on 22.04, no recent releases
            { url: "https://winuxos.com/", name: "Wubuntu" } //Wubuntu, Windows lookalike based on Ubuntu, website gone
        ], // eol debian links
        3: [
            { url: "https://archbox-linux.github.io/", name: "ArchBox Linux" },
            { url: "https://archiveos.org/archeos/", name: "ArcheOS" },
            { url: "https://archiveos.org/architect/", name: "Architect" },
            { url: "https://archiveos.org/archmerge/", name: "ArchMerge" },
            { url: "https://archiveos.org/antergos/", name: "Antergos" },
            { url: "https://archiveos.org/chakra/", name: "Chakra" }, //https://www.chakralinux.org/
            { url: "http://justbrowsinglinux.com/", name: "JustBrowsing" }, //Cool but last release was in 2014
            { url: "https://www.frugalware.org/", name: "Frugalware Linux" }, //EOL - Last version from 2016
            { url: "https://arcolinux.com/", name: "ArcoLinux" }, //Project has been ended by author
            { url: "https://archhurd.org/", name: "Arch Hurd" }, //EOL - Arch based on GNUHurd. Last version from 2018.
            { url: "https://exodia-os.github.io/", name: "Exodia OS" }, //EOL - No new release since 2024 (Arch based distro for cibersecurity)
            { url: "https://www.blackarch.org/", name: "BlackArch Linux" }, //EOL - Outdated ISO from 2023, unacceptable on Arch
            { url: "https://arcolinuxb.com/", name: "ArcoLinuxB" }, //Project has been ended by author
            { url: "https://lainos.dev/", name: "LainOS" } //Arch with Hyprland and Lain aesthetics, website down
        ], // eol arch links
        4: [
            { url: "https://archiveos.org/vlos/", name: "VLOS" },
            { url: "https://archiveos.org/slontoo/", name: "Slontoo" },
            { url: "https://gentoox.shallax.com/", name: "Gentoox" },
            { url: "https://archiveos.org/gentooth/", name: "GentooTH" },
            { url: "https://archiveos.org/cloveros/", name: "CloverOS" },
            { url: "https://archiveos.org/bintoo/", name: "BinToo" },
            { url: "https://archiveos.org/phaeronix/", name: "Phaeronix" },
            { url: "https://archiveos.org/bitdefender/", name: "BitDefender Rescue CD" },
            { url: "https://pentoo.ch/", name: "Pentoo" }, //EOL - Last release from 2020
            { url: "https://liguros.gitlab.io/", name: "LiGurOS" } //EOL - Last release from 2020
        ], // eol gentoo links
        5: [
            { url: "https://archiveos.org/redstar/", name: "Red Star OS" }, //RedStarOS's website's inactive directory is called www.naenara.com.kp/en/kcc/ and naenara in korea means my country (내나라) pretty creative I guess
            { url: "https://archiveos.org/linux-xp/", name: "Linux XP" },
            { url: "https://archiveos.org/yellowdog/", name: "Yellow Dog Linux" },
            { url: "http://berry.osdn.jp/", name: "Berry Linux" },
            { url: "https://vinelinux.org/", name: "Vine Linux" },
            { url: "https://archiveos.org/asplinux/", name: "ASPLinux" },
            { url: "https://archiveos.org/tao/", name: "Tao Linux" },
            { url: "https://archiveos.org/startcom/", name: "StartCom Linux" },
            { url: "https://scientificlinux.org/", name: "Scientific Linux" }, //Reached EOL on June 30, 2024
            { url: "https://sourceforge.net/projects/xange/", name: "sourceforge.net/projects/xange" }, //EOL - Latest release from 2023
            { url: "https://risi.io/", name: "risiOS" }, //Dead website
            { url: "https://www.clearos.com/", name: "ClearOS" }, //Small business server distro, discontinued and website gone
            { url: "https://img.cs.montana.edu/linux/montanalinux/", name: "Montana Linux" } //Montana Linux, university respin, host no longer answers
        ], // eol fedora links
        6: [
            { url: "https://archiveos.org/united/", name: "United Linux" },
            { url: "https://archiveos.org/karamad/", name: "Karamad" },
            { url: "http://urix.us/", name: "URIX OS" },
            { url: "https://archiveos.org/kde-four-live/", name: "KDE Four Live" },
            { url: "https://www.stresslinux.org/sl/", name: "Stresslinux" },
            { url: "https://geckolinux.github.io/", name: "GeckoLinux" }, //EOL - Last release from 2022
            { url: "https://archiveos.org/astaro/", name: "Astaro Security Linux" }
        ], // eol suse links
        7: [
            { url: "https://archiveos.org/vector/", name: "VectorLinux" },
            { url: "https://archiveos.org/topologilinux/", name: "Topologilinux" },
            { url: "https://archiveos.org/rivendell/", name: "Rivendell" },
            { url: "https://www.supergamer.x10host.com/", name: "SuperGamer" }, //EOL - Latest release from 2016
            { url: "http://www.zenwalk.org/", name: "Zenwalk Linux" }, //EOL - Latest release from 2023
            { url: "http://topologi-linux.sourceforge.net/", name: "Topologilinux" }, //EOL - Latest release from 2009
            { url: "https://www.freenix.net/", name: "freenix.net" } //EOL - No working link or repo (Slackware with non-free packages)
        ], // eol slack links
        8: [
            { url: "https://www.trueos.org/", name: "TrueOS" }, //Was PC-BSD, discontinued in 2020, the notice explains why
            { url: "https://nextbsd.org/", name: "NextBSD" }, //FreeBSD fork with Mach and launchd, abandoned
            { url: "https://sourceforge.net/projects/desktopbsd/", name: "DesktopBSD" } //DesktopBSD, FreeBSD for the desktop, long dead
        ], // eol bsd links
        9: [
            { url: "https://archiveos.org/kateos/", name: "KateOS" },
            { url: "https://archiveos.org/caldera/", name: "Caldera OpenLinux" },
            { url: "https://archiveos.org/lps/", name: "Lightweight Portable Security" },
            { url: "https://emmett31.wixsite.com/lightninglinux", name: "emmett31.wixsite.com/lightninglinux" }, //parent unknown. come back to it later
            { url: "https://archiveos.org/netlinx/", name: "NetLinx" },
            { url: "https://archiveos.org/alinux/", name: "aLinux" },
            { url: "http://biebian.sourceforge.net/", name: "Biebian" },
            //yeah it turns out biebian is not part of Debian or Ubuntu (shoking) it's acutally part of Puppy Linux which was part of a joke
            { url: "https://blankon.id/", name: "BlankOn" }, //parent distribution uknown, check out later
            { url: "https://archiveos.org/saluki/", name: "Saluki" },
            { url: "https://archiveos.org/carolina/", name: "Carolina" },
            { url: "https://web.archive.org/web/20210720175650/", name: "web.archive.org/web/20210720175650" },
            { url: "https://spi.dod.mil/lipose.htm", name: "spi.dod.mil/lipose.htm" }, //the funding ended and website is unavailable. Might delete completely.
            { url: "http://www.lunar-linux.org/", name: "Lunar Linux" }, //Last release from 2014
            { url: "https://nakst.gitlab.io/essence", name: "Essence" }, //EOL - Last release from 2023
            { url: "https://www.dragora.org/", name: "Dragora" }, //EOL - Latest release from 2023
            { url: "http://www.mklinux.org/", name: "MkLinux" }, // EOL - Latest release from 2009
            { url: "https://clearlinux.org/", name: "Clear Linux OS" }, //Discontinued by Intel in July 2025
            { url: "https://cb-linux.github.io/breath/", name: "Breath" }, //EOL
            { url: "https://k1ss.org/install", name: "KISS Linux" }, //EOL - No updates since 2020
            { url: "https://www.foresightlinux.org/", name: "Foresight Linux" } //EOL - Last release from 2013
        ] // eol other links
    }
};
