
function Login(){
    var user = document.querySelector('#user').value;
    var pass = document.querySelector('#password').value;  
    alert(`${user} / ${pass}`);
    if (user.toLowerCase() === "admin" && pass === "123") {
        window.open("Home/inicio.html", "_self");
    }
    else{
        alert("Senha Incorreta");
    }
}
