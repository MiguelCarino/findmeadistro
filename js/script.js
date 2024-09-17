// Initialize local storage with default values if not set
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

// Call initialization
initializeLocalStorage();

// Get local storage variables
var r = document.querySelector(":root");
var EOLToggle = parseInt(localStorage.getItem("EOLToggle"), 10);

// Color palette and distro list
var curr_color, prev_color;
var color_list = [
    "#ED5565", "#48CFAD", "#FC6E51", // red, turquoise, orange
    "#4FC1E9", "#AC92EC", "#5D9CFF", // aqua, purple, blue
    "#A0D468", "#EC87C0", "#FFCE54", // green, pink, mustard
    "#CFA400" // yellow
];

var distro_list = [
    "TEST", "FMALDALL", "FMALDDEBIAN", "FMALDARCH", "FMALDGENTOO",
    "FMALDFEDORA", "FMALDSUSE", "FMALDSLACK", "FMALDBSD", "FMALDOTHER"
];

// Function to open a random link based on toggle settings
function clicked() {
    const distroToggle = parseInt(localStorage.getItem("distroToggle"), 10);
    let chosenList;
    
    // Determine which list to use based on EOLToggle
    if (EOLToggle === 1) { // EOL On: randomly select from regular and EOL
        chosenList = Math.random() < 0.5 ? links.regular : links.eol;
    } else if (EOLToggle === 2) { // EOL Off: use regular links
        chosenList = links.regular;
    } else if (EOLToggle === 3) { // EOL Only: use EOL links
        chosenList = links.eol;
    }

    let allLinks = [];
    if (distroToggle === 1) { // "ALL" option selected
        for (let key in chosenList) {
            if (chosenList.hasOwnProperty(key) && Array.isArray(chosenList[key])) {
                allLinks = allLinks.concat(chosenList[key]);
            }
        }
    } else {
        allLinks = chosenList[distroToggle] || [];
    }

    if (allLinks.length > 0) {
        const randomLink = allLinks[Math.floor(Math.random() * allLinks.length)];
        window.open(randomLink);
    }
}

// Function to change button colors
function changeButtonColor() {
    const color = Math.floor(Math.random() * color_list.length);
    const distroToggle = parseInt(localStorage.getItem("distroToggle"), 10);
    
    if (color_list[color] === curr_color || color_list[color] === prev_color) {
        changeButtonColor();
        return;
    }

    // Set button color for all buttons
    document.querySelectorAll('.FMALDALL, .FMALDDEBIAN, .FMALDARCH, .FMALDGENTOO, .FMALDFEDORA, .FMALDSUSE, .FMALDSLACK, .FMALDBSD, .FMALDOTHER').forEach(button => {
        button.style.backgroundColor = "#3D3D3D";
        button.style.color = "white";
    });

    // Update color based on the selected button
    const selectedColor = color_list[distroToggle] || color_list[color];
    document.getElementById("BigTitle").style.color = selectedColor;
    document.getElementById(distro_list[distroToggle]).style.backgroundColor = selectedColor;

    ['EOLon', 'EOLoff', 'EOLonly', 'random-button'].forEach(id => {
        document.getElementById(id).style.backgroundColor = selectedColor;
    });

    // Update active EOL button
    updateEOLButtonStyles();

    prev_color = curr_color;
    curr_color = color_list[color];

    // Apply theme based on dmToggle
    applyTheme();
}

// Update EOL button styles based on the selected EOLToggle
function updateEOLButtonStyles() {
    document.getElementById('EOLon').style.backgroundColor = EOLToggle === 1 ? curr_color : '#3D3D3D';
    document.getElementById('EOLoff').style.backgroundColor = EOLToggle === 2 ? curr_color : '#3D3D3D';
    document.getElementById('EOLonly').style.backgroundColor = EOLToggle === 3 ? curr_color : '#3D3D3D';
}

// Apply special styles for distroToggle 9
function applySpecialStyles() {
    document.querySelectorAll('#EOLon, #EOLoff, #EOLonly, #random-button').forEach(elem => {
        elem.style.backgroundColor = "white";
    });
    const color = localStorage.dmToggle == 'light' ? "white" : "#3D3D3D";
    document.getElementById("BigTitle").style.color = color;
    document.getElementById("FMALDOTHER").style.backgroundColor = "#F5F7FA";
    document.getElementById("FMALDOTHER").style.color = "#3D3D3D";
}

// Apply theme based on localStorage dmToggle
function applyTheme() {
    if (localStorage.dmToggle == 'dark') {
        document.getElementById('random-button').style.borderColor = "#4C4C4C";
        r.style.setProperty('--main-color', 'F0F0F0');
        r.style.setProperty('--main-text-color', '#1C1C1C');
        r.style.setProperty('--main-background', "#D4D4D4");
        r.style.setProperty('--main-bigtitle', 'white');
    } else {
        document.getElementById('random-button').style.borderColor = "white";
        r.style.setProperty('--main-color', '#1C1C1C');
        r.style.setProperty('--main-text-color', 'lightgrey');
        r.style.setProperty('--main-background', "#2D2D2D");
        r.style.setProperty('--main-bigtitle', '#1C1C1C');
    }
}

// Toggle functions for EOL settings
function toggleEOL(value) {
    if (EOLToggle !== value) {
        EOLToggle = value;
        localStorage.setItem("EOLToggle", value);
        updateEOLButtonStyles();
        changeButtonColor();
    }
}

// Distro toggle functions
function toggleDistro(distro) {
    localStorage.setItem("distroToggle", distro);
    changeButtonColor();
}

// Toggle dark mode
function dmchange() {
    const currentMode = localStorage.getItem("dmToggle");
    const newMode = currentMode === 'dark' ? 'light' : 'dark';
    localStorage.setItem("dmToggle", newMode);
    changeButtonColor();
}

// Relocate functions for GitHub links
function relocateGithubHome() {
    window.open("https://github.com/MiguelCarino/findmeadistro");
}

function relocateGithub() {
    window.open("https://github.com/MiguelCarino/findmeadistro/issues");
}
