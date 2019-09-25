const alunas = ["Raquel Pereira", "Talita Barbosa", "Lia Lobo", "Daiana Moraes","Telma Cristina"];

for (i=0; i<=alunas.length ; i++) { //laço que percorrerá a lista alunas
       let nomes = document.createElement ('li'); //cria o elemnto <li> e armazena na variavel nome
        nomes.textContent = alunas[i]//
        let  lista = document.getElementById("lista-alunas");// chama a mãe
        lista.appendChild(nomes); //mostra o nome da filha

        
}
//Adicionando um evento

const meuTitulo = document.querySelector(".titulo");
meuTitulo.addEventListener("click", function() {
    meuTitulo.style.color = "red";
});


let mensagem = document.querySelector("li");
mensagem.addEventListener("click", function() { 
    console.log("Bem vinda") //saída no meu console
}) ;