document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Sende die Daten an das Backend, um die Anmeldung zu verarbeiten
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Erfolgreich eingeloggt!");
        } else {
            alert("Fehler beim Login!");
        }
    })
    .catch(error => console.error("Fehler:", error));
});
