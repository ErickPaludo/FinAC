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
    buton.style.color= "white";
    document.body.appendChild(buton);
    buton.addEventListener("click", function(){
    element.parentNode.removeChild(element);
    fundo.parentNode.removeChild(fundo); 
    buton.parentNode.removeChild(buton);  
    camp.parentNode.removeChild(camp);  
    camp2.parentNode.removeChild(camp2);  
    })
    //----------------------------------------
    //ENTRADA DE DADOS
    var camp = document.createElement("input")
    document.body.appendChild(camp);
    camp.style.position = "fixed"
    camp.placeholder = "Teste"
    camp.style.top = "110px";
    var camp2 = document.createElement("input")
    document.body.appendChild(camp2);
    camp2.style.position = "fixed"
    camp2.placeholder = "Teste2"

  }
background();
  function Reg_Saldo() {
  background();

  }
  function Reg_Div(){
    background();
  }