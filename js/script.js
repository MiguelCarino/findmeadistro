
function initializeLocalStorage() {
    const defaults = {
        EOLToggle: 2,
        dmToggle: 'light',
        distroToggle: 1,
    };
    for (const [key, value] of Object.entries(defaults)) {
        if (localStorage.getItem(key) === null) {
            localStorage.setItem(key, value);
        }
    }
}

initializeLocalStorage();
let r = document.querySelector(":root");
let EOLToggle = parseInt(localStorage.getItem("EOLToggle"), 10);

const color_list = [
    "#ED5565", "#4fb722", "#FC6E51", "#4FC1E9", "#AC92EC", "#5D9CFF",
    "#69b40f", "#AC92EC", "#de3939ff", "#c39a31ff"
];

let curr_color, prev_color;

const distro_list = [
    "TEST", "FMALDALL", "FMALDDEBIAN", "FMALDARCH", "FMALDGENTOO",
    "FMALDFEDORA", "FMALDSUSE", "FMALDSLACK", "FMALDBSD", "FMALDOTHER"
];

document.addEventListener("DOMContentLoaded", () => {
    const distroToggle = parseInt(localStorage.getItem("distroToggle"), 10);
    const baseTheme = {
        1: 'theme-all',
        2: 'theme-debian',
        3: 'theme-arch',
        4: 'theme-gentoo',
        5: 'theme-fedora',
        6: 'theme-suse',
        7: 'theme-slackware',
        8: 'theme-bsd',
        9: 'theme-other'
    }[distroToggle] || 'theme-all';

    const dmMode = localStorage.getItem("dmToggle") || 'dark';
    document.body.className = `${baseTheme}-${dmMode}`;

    highlightActiveButtons();
    changeButtonColor();
});


function clicked() {
    const distroToggle = parseInt(localStorage.getItem("distroToggle"), 10);
    let chosenList;

    if (EOLToggle === 1) chosenList = Math.random() < 0.5 ? links.regular : links.eol;
    else if (EOLToggle === 2) chosenList = links.regular;
    else if (EOLToggle === 3) chosenList = links.eol;

    let allLinks = [];
    if (distroToggle === 1) {
        for (let key in chosenList) {
            if (Array.isArray(chosenList[key])) {
                allLinks = allLinks.concat(chosenList[key]);
            }
        }
    } else {
        allLinks = chosenList[distroToggle] || [];
    }

    if (allLinks.length > 0) {
        const randomLink = allLinks[Math.floor(Math.random() * allLinks.length)];
        window.open(randomLink, '_blank');
    }
}

function changeButtonColor() {
    const colorIndex = Math.floor(Math.random() * color_list.length);
    const distroToggle = parseInt(localStorage.getItem("distroToggle"), 10);

    if (color_list[colorIndex] === curr_color || color_list[colorIndex] === prev_color) {
        changeButtonColor();
        return;
    }

    document.querySelectorAll('.family-button').forEach(button => {
        button.style.backgroundColor = "#151525";
        button.style.color = "white";
    });

    const selectedColor = color_list[distroToggle] || color_list[colorIndex];
    const selectedId = distro_list[distroToggle];
    const selectedButton = document.getElementById(selectedId);
    if (selectedButton) {
        selectedButton.style.backgroundColor = selectedColor;
    }

    const bigTitle = document.getElementById("BigTitle");
    if (bigTitle) bigTitle.style.color = selectedColor;

    ['EOLon', 'EOLoff', 'EOLonly', 'random-button'].forEach(id => {
        const elem = document.getElementById(id);
        if (elem) elem.style.backgroundColor = selectedColor;
    });

    updateEOLButtonStyles();

    prev_color = curr_color;
    curr_color = selectedColor;

    applyTheme();
}

function updateEOLButtonStyles() {
    const styles = {
        on: EOLToggle === 1 ? curr_color : '#1a1c2c',
        off: EOLToggle === 2 ? curr_color : '#1a1c2c',
        only: EOLToggle === 3 ? curr_color : '#1a1c2c'
    };
    ['EOLon', 'EOLoff', 'EOLonly'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.style.backgroundColor = styles[id.replace('EOL', '').toLowerCase()];
    });
}

function highlightActiveButtons() {
    const distroToggle = parseInt(localStorage.getItem("distroToggle"), 10);
    const eolToggle = parseInt(localStorage.getItem("EOLToggle"), 10);

    document.querySelectorAll('.family-button').forEach(btn => {
        btn.classList.remove('active-family');
        btn.style.backgroundColor = "#151525";
        btn.style.color = "white";
    });

    const activeFamilyId = distro_list[distroToggle];
    const activeFamilyBtn = document.getElementById(activeFamilyId);
    if (activeFamilyBtn) {
        activeFamilyBtn.classList.add('active-family');
        activeFamilyBtn.style.backgroundColor = curr_color || "#4FC1E9";
    }

    ['EOLon', 'EOLoff', 'EOLonly'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.classList.remove('active-eol');
            btn.style.backgroundColor = "#1a1c2c";
        }
    });

    const activeEOLId = eolToggle === 1 ? 'EOLon' : (eolToggle === 2 ? 'EOLoff' : 'EOLonly');
    const activeEOLBtn = document.getElementById(activeEOLId);
    if (activeEOLBtn) {
        activeEOLBtn.classList.add('active-eol');
        activeEOLBtn.style.backgroundColor = curr_color || "#4FC1E9";
    }
}

function toggleEOL(value) {
    if (EOLToggle !== value) {
        EOLToggle = value;
        localStorage.setItem("EOLToggle", value);
        highlightActiveButtons();
        changeButtonColor();
    }
}

function toggleDistro(distro) {
    localStorage.setItem("distroToggle", distro);

    const baseTheme = {
        1: 'theme-all',
        2: 'theme-debian',
        3: 'theme-arch',
        4: 'theme-gentoo',
        5: 'theme-fedora',
        6: 'theme-suse',
        7: 'theme-slackware',
        8: 'theme-bsd',
        9: 'theme-other'
    }[distro] || 'theme-all';

    const dmMode = localStorage.getItem("dmToggle") || 'dark';
    document.body.className = `${baseTheme}-${dmMode}`;

    highlightActiveButtons();
    changeButtonColor();
}

function dmchange() {
    const current = localStorage.getItem("dmToggle");
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem("dmToggle", next);

    const distroToggle = parseInt(localStorage.getItem("distroToggle"), 10);
    const baseTheme = {
        1: 'theme-all',
        2: 'theme-debian',
        3: 'theme-arch',
        4: 'theme-gentoo',
        5: 'theme-fedora',
        6: 'theme-suse',
        7: 'theme-slackware',
        8: 'theme-bsd',
        9: 'theme-other'
    }[distroToggle] || 'theme-all';

    document.body.className = `${baseTheme}-${next}`;
    changeButtonColor();
}


function applyTheme() {
    const isDark = localStorage.dmToggle === 'dark';
    r.style.setProperty('--bg', isDark ? '#ffffff' : '#0a0a13');
    r.style.setProperty('--text', isDark ? '#000000' : '#f0f0f0');
    r.style.setProperty('--hover', isDark ? '#e0e0e0' : '#1a1c2c');
}

function relocateGithubHome() {
    window.open("https://github.com/MiguelCarino/findmeadistro", "_blank");
}

function relocateGithub() {
    window.open("https://github.com/MiguelCarino/findmeadistro/issues", "_blank");
}