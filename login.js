var user = document.querySelector('#user').value;
var pass = document.querySelector('#password').value;

function Login() {
    if (user === "admin" && pass === "123") {
        window.open("Home/inicio.html", "_self");
    } else {
        alert("Senha Incorreta");
    }
}

export { user };