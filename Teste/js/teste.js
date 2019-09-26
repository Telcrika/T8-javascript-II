const objeto = {

    nome:"Telma",
    profissao:"Desenvolvedora",
    idade: 37,
    site:"https://giphy.com/gifs/JbJVwiMsCumQw/html5" ,
    contaBancaria: "4723-65238-8"

}

const divMae = document.getElementById("sou-a-mae");

// const titulo = document.createElement("h3");
// divMae.appendChild(titulo);
// titulo.textContent = objeto["nome"];

// const idade = document.createElement("span");
// divMae.appendChild(idade);
// idade.textContent = objeto["idade"];

// const profissao = document.createElement("p");
// divMae.appendChild(profissao);
// profissao.textContent = objeto["profissao"];


// const meuSite = document.createElement("a");
// divMae.appendChild(meuSite);
// meuSite.textContent = "Acessar meu Site";
// meuSite.setAttribute("href",objeto.site);
// meuSite.setAttribute("target", "Blank");


// const gatinho = document.createElement("img");
// divMae.appendChild(gatinho);
// gatinho.setAttribute("src", objeto["site"]);


//let exibir = document.querySelector("pessoa");

for (let propriedade in objeto) { //condição proposta

    let info = document.createElement("h3");
    divMae.appendChild(info);
    info.textContent = (objeto[propriedade]);
    //Console.log(propriedade[objeto]);
}