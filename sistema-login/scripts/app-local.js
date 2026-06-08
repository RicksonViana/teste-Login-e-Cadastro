// =======================RESGISTRO=======================
const registerForm = document.getElementById("registerForm") ;

if (registerForm) {
    registerForm.addEventListener ("submit", e => {
        e.preventDefault();

        const user = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };

        localStorage.setItem("user", JSON.stringify(user));

        document.getElementById("message").innerText = "Cadastro realizado com sucesso!";
    });
}

//Login//
const LoginForm = document.getElementById("loginForm");

if (LoginForm) {
    LoginForm.addEventListener("submit", e=> {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const user = JSON.parse(localStorage.getItem("user"));
        
        if (user && email === user.email && password === user.password) {
            localStorage.setItem("logged", "true");
            document.getElementById("message").innerText = "Login válido!";
        } else {
            document.getElementById("message").innerText = "Login inválido!";
        }
    });
}

//STATUS//
const status = document.getElementById("status");
if (status) {
    const logged = localStorage.getItem("logged");
    status.innerText = logged ? "Usuário logado" : "Usuários não logado";
}

//LOGOUT//
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("logged");
        Location.reload();
    });
}