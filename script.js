document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-mode");
    const body = document.body;

    // Cek apakah user sebelumnya mengaktifkan mode gelap
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️";
    }

    // Toggle Mode Gelap
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Simpan status di localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleButton.textContent = "☀️";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleButton.textContent = "🌙";
        }
    });
});