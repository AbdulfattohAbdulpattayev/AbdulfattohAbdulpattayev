document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeToggle = document.getElementById("theme-toggle");
    const colorChangeButton = document.getElementById("color-change");
    const terminal = document.getElementById("terminal");

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

    // Function to generate a random RGB color
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Animate words in the terminal by changing their colors
    function animateTerminalColors() {
        const words = terminal.innerText.split(" ");

        terminal.innerHTML = words
            .map(
                (word) =>
                    `<span style="color: ${getRandomColor()}">${word}</span>`
            )
            .join(" ");

        // Keep the cursor at the end of the text
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(terminal);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
    }

    // Run the animation every second
    setInterval(animateTerminalColors, 1000);
});
