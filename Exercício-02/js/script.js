

  const captura = document.querySelectorAll(".item__imagem");

  for (let i=0; i<captura.length; i++) 
  { 
    captura[i].addEventListener("click", function(){
      // captura[i].classList.add("invisivel");
        if (captura[i].classList.contains("invisivel")===true) {
                  captura[i].classList.remove("invisivel");
                } else{
                  captura[i].classList.add("invisivel");
                }
         
    })
}
    



