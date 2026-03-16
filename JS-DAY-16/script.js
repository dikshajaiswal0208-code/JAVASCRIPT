
/* Apply saved theme on page load */
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.className = savedTheme;
}

/* Function to change theme */
function setTheme(node){
    document.body.className = node;
    localStorage.setItem("x",node);
}