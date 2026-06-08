document
.getElementById("registerForm")
?.addEventListener("submit", async e => {

    e.preventDefault();

    const response = await fetch(
        "server-side/register-db.php",
        {
            method: "POST",
            body: new FormData(e.target)
        }
    );

    const result = await response.text();

    document.getElementById("message")
        .innerText = result;
});