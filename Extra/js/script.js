const formulario = document.getElementById("formulario-de-comentarios"); // localiza o elemento que desejo modificar no HTML

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    let entrada = document.querySelector(".input-de-texto");
    
    let mensagem = entrada.value.trim(); //variável mensagem armazena a entrada digitada


    //Esta parte do código faz a verificação e validação do conteúdo digitado  
    if (mensagem === " ") {
        erro.textContent = "Escreva Algo";
    } else {
            erro.textContent = " ";
     


            let comentariosAnteriores = document.getElementById("todos-os-comentarios");
            let comentario = document.createElement("p");
            comentariosAnteriores.appendChild(comentario);
            comentario.textContent = mensagem;
    
            comentario.classList.add("comentario"); //adiciona o comentário na classe css que cria uma caixa de texto.


    }
    // comentario.verificar = function(){
    //     if (comentario == (String)){
    //         document.getElementById("todos-os-comentarios").style.borderColor("green")
    //     } else {
    //         alert("conteúdo inadequado")
    //     }
    // }


                                                                                                                                        

});  

 

















































 
                                                                                                      