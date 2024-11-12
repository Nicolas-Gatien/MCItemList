document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        navigator.clipboard.writeText(document.querySelector("pre").textContent);
        button.textContent = "Copied!";
    });
});