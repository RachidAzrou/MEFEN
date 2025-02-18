document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simpele inloglogica (kan later vervangen worden door een API-call)
    if (username === "admin" && password === "admin123") {
        window.location.href = "admin.html"; // Doorsturen naar admin-dashboard
    } else if (username === "vrijwilliger" && password === "vrijwilliger123") {
        window.location.href = "vrijwilliger.html"; // Doorsturen naar vrijwilliger-dashboard
    } else {
        alert("Ongeldige inloggegevens!");
    }
});