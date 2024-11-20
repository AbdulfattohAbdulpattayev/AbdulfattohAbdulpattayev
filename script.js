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

    // Change word colors as you type in the terminal
    terminal.addEventListener("input", () => {
        const colors = ["red", "blue", "green", "orange", "purple"];
        const words = terminal.innerText.split(" ");

        terminal.innerHTML = words
            .map(
                (word, index) =>
                    `<span style="color: ${colors[index % colors.length]}">${word}</span>`
            )
            .join(" ");

        // Place the cursor at the end of the text
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(terminal);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
    });
});
