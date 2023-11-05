var camp = document.createElement("input")
var camp2 = document.createElement("input")
var camp3 = document.createElement("input")
var text = document.createElement("p")
var text2 = document.createElement("p")
var text3 = document.createElement("p")
function background() {
  // Fundo
  var fundo = document.createElement("div");
  fundo.style.position = "fixed";
  fundo.style.top = "0";
  fundo.style.left = "0";
  fundo.style.width = "100%";
  fundo.style.height = "100%";
  fundo.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  document.body.appendChild(fundo);
  //----------------------------------------
  //Fundo 2
  var element = document.createElement("div");
  element.style.position = "fixed";
  element.style.display = "flex";
  element.style.alignItems = "center";
  element.style.justifyContent = "center";
  element.style.top = "50%";
  element.style.left = "50%";
  element.style.transform = "translate(-50%, -50%)";
  element.style.width = "80%";
  element.style.height = "80%";
  element.style.backgroundColor = "rgba(36, 33, 33)";
  element.style.borderRadius = "25px";
  document.body.appendChild(element);
  var logo = document.createElement("img");
  logo.src = "img/ico.png"
  logo.style.height = "90px"
  logo.style.top = "15%"
  logo.style.position = "fixed"
  document.body.appendChild(logo);
  //----------------------------------------
  //botão sair
  var buton = document.createElement("button");
  buton.innerHTML = "X"
  buton.style.position = "fixed";
  buton.style.display = "flex";
  buton.style.alignItems = "center";
  buton.style.justifyContent = "center";
  buton.style.top = "55px";
  buton.style.left = "90%";
  buton.style.transform = "translate(-50%, -50%)";
  buton.style.width = "35px";
  buton.style.height = "35px";
  buton.style.backgroundColor = "rgb(22, 22, 22)";
  buton.style.borderRadius = "50%";
  buton.style.border = "1px solid rgba(0, 0, 0,0.6)";
  buton.style.color = "white";
  document.body.appendChild(buton);
  buton.addEventListener("click", function () {
    element.parentNode.removeChild(element);
    fundo.parentNode.removeChild(fundo);
    logo.parentNode.removeChild(logo);
    buton.parentNode.removeChild(buton);
    text.parentNode.removeChild(text);
    text2.parentNode.removeChild(text2);
    text3.parentNode.removeChild(text3);
    camp.parentNode.removeChild(camp);
    camp2.parentNode.removeChild(camp2);
    camp3.parentNode.removeChild(camp3);

    
  })
  //----------------------------------------
  //ENTRADA DE DADOS
  //----------------------------------------
  //text 1

  text.innerHTML = "Item"
  text.style.position = "fixed"
  text.style.top = "250px"
  text.style.color = "white"
  document.body.appendChild(text);
  //----------------------------------------
  //text 2

  text2.innerHTML = "Valor"
  text2.style.position = "fixed"
  text2.style.top = "310px"
  text2.style.color = "white"
  document.body.appendChild(text2);
  //----------------------------------------
  //text 3

  text3.innerHTML = "Data"
  text3.style.position = "fixed"
  text3.style.top = "360px"
  text3.style.color = "white"
  document.body.appendChild(text3);
  //----------------------------------------
  //input 1

  document.body.appendChild(camp);
  camp.style.position = "fixed"
  camp.placeholder = "Teste"
  camp.style.top = "300px";
  //----------------------------------------
  //input 2

  document.body.appendChild(camp2);
  camp2.style.position = "fixed"
  camp2.placeholder = "R$ 0,00"
  camp2.style.top = "350px";
  //----------------------------------------
  //input 3
  
  document.body.appendChild(camp3);
  camp3.style.position = "fixed"
  camp3.placeholder = ""
  camp3.style.top = "400px";
  //----------------------------------------

}
background();
function Reg_Saldo() {
  background();
  camp3.placeholder = "teste"
}
function Reg_Div() {
  background();
  camp3.placeholder = "teste2"
}