window.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const menuBar = document.getElementById("menu-bar");
    const menuIcon = document.getElementById("menu-icon");

    if (!menuToggle || !menuBar || !menuIcon) {
        return;
    }

    menuBar.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menuToggle.checked = false;
        });
    });

    document.addEventListener("click", (event) => {
        const target = event.target;

        if (!(target instanceof Node)) {
            return;
        }

        if (
            !menuBar.contains(target) &&
            target !== menuToggle &&
            target !== menuIcon &&
            !menuIcon.contains(target)
        ) {
            menuToggle.checked = false;
        }
    });
});
