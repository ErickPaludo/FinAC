function background() {
    var fundo = document.createElement("div");
    fundo.style.position = "fixed";
    fundo.style.top = "0";
    fundo.style.left = "0";
    fundo.style.width = "100%";
    fundo.style.height = "100%";
    fundo.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; 
    document.body.appendChild(fundo);
    // Fundo
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
    element.style.backgroundColor = "white";
    element.style.borderRadius = "25px";
    document.body.appendChild(element);
    //Fundo 2
    var buton = document.createElement("button");
    buton.innerHTML = "X"
    buton.style.position = "fixed";
    buton.style.display = "flex";
    buton.style.alignItems = "center";
    buton.style.justifyContent = "center";
    buton.style.top = "60px";  
    buton.style.left = "90%"; 
    buton.style.transform = "translate(-50%, -50%)"; 
    buton.style.width = "35px";
    buton.style.height = "35px";
    buton.style.backgroundColor = "red";
    buton.style.borderRadius = "50%";
    buton.style.border = "none";
    document.body.appendChild(buton);
    buton.addEventListener("click", function(){
    element.parentNode.removeChild(element);
    fundo.parentNode.removeChild(fundo); 
    buton.parentNode.removeChild(buton);    
    })
    //botão sair
  }

  function Reg_Saldo() {
background();
  }
  function Reg_Div(){
    background();
  }