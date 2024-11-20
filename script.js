document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeToggle = document.getElementById("theme-toggle");
    const colorChangeButton = document.getElementById("color-change");

    // Theme toggle functionality
    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
        } else {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
        }
    });

    // Button color change on click
    colorChangeButton.addEventListener("click", () => {
        colorChangeButton.style.backgroundColor =
            colorChangeButton.style.backgroundColor === "red" ? "#333" : "red";
        colorChangeButton.style.color = "white";
    });
});
