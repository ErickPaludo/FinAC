
function Login(){
    var user = document.querySelector('#user').value;
    var pass = document.querySelector('#password').value;  
    alert(`${user} / ${pass}`);
    if (user === "admin" && pass === "123") {
        alert("Senha correta");
    }
    else{
        alert("Senha Incorreta");
    }
}
