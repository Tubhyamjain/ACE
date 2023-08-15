// Inside your scripts.js file or within <script> tags in your HTML
document.addEventListener("DOMContentLoaded", function () {
    const optionsToggle = document.querySelectorAll(".options-toggle");

    optionsToggle.forEach(function (toggle) {
        const icon = toggle.querySelector("i");
        const options = toggle.querySelector(".options");

        icon.addEventListener("click", function () {
            options.classList.toggle("show-options");
        });
    });
});