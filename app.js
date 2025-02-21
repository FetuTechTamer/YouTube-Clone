const menuButton = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".screen-overlay");
const themeButton = document.querySelector(".theme-button");

// Check if dark mode is enabled in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    themeButton.classList.replace("fa-moon", "fa-sun"); 
} else {
    themeButton.classList.replace("fa-sun", "fa-moon");
}

// Toggle dark mode on button click
themeButton.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");

    // Update theme button icon
    if (isDarkMode) {
        themeButton.classList.replace("fa-moon", "fa-sun");
    } else {
        themeButton.classList.replace("fa-sun", "fa-moon");
    }
});

// Toggle sidebar visibility when menu buttons are clicked
menuButton.forEach(button => {
    button.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-hidden");
    });
});

// Toggle sidebar visibility when screen overlay is clicked
screenOverlay.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
});

// Show sidebar on large screens by default
if (window.innerWidth >= 768) {
    document.body.classList.remove("sidebar-hidden");
}