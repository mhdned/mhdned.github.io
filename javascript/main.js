feather.replace();

// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check for saved theme preference or use preferred color scheme
const currentTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

// Apply the current theme
body.setAttribute("data-theme", currentTheme === "dark" ? "" : "light");
updateToggleText();

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  if (body.getAttribute("data-theme") === "light") {
    body.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
  } else {
    body.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
  updateToggleText();
});

function updateToggleText() {
  themeToggle.textContent =
    body.getAttribute("data-theme") === "light" ? "DARK MODE" : "LIGHT MODE";
}
