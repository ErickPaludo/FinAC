function Login() {
    var user = document.querySelector('#user').value;
    var pass = document.querySelector('#password');
    var mot = document.querySelector('#motivo');
    var pass_v = pass.value;

    if (user.toLowerCase() === "admin") {
        if (pass_v === "123") {
            window.open("Home/inicio.html", "_self");
        } else {
            mot.innerHTML = "Senha incorreta!";
            document.querySelector('#password').style.border = '1px solid rgb(255, 0, 0)';
        }
    } else {
        mot.innerHTML = "Usuário ou senha estão inválidos";
    }
}
