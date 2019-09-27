const livros = {
    1: {
        "titulo": "Javascript Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-java"
    },
    2: {
        "titulo": "Voce nao sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    3: {
        "titulo": "Caliba e a Bruxa: mulheres, corpo e acumulacao primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }
}


const ulMae = document.getElementById("lista-do-catalogo");



for (let propriedade in livros) {

    let prateleira = document.createElement("li");
    ulMae.appendChild(prateleira);
    prateleira.classList.add("livros");
    
    const titulo = document.createElement("h3");
    ulMae.appendChild(titulo);
    titulo.textContent = livros[propriedade]["titulo"];
    titulo.classList.add("livro__titulo");


    const escritor = document.createElement("p");
    ulMae.appendChild(escritor);
    escritor.textContent = livros[propriedade]["quemEscreveu"];
    escritor.classList.add("livro__autoria");

    const site = document.createElement("href");
    ulMae.appendChild(site);
    site.textContent = "clique aqui";
    site.setAttribute = 'a',  livros[propriedade]["link"];
    site.classList.add("livro__link");

    const botao = document.createElement("button");
    ulMae.appendChild(botao);
    botao.textContent = ["Ja li"];
    botao.classList.add("botao-lido");

    const botaoDesfazer = document.createElement("button");
    ulMae.appendChild(botaoDesfazer);
    botaoDesfazer.textContent = ["Desfazer"];
    botaoDesfazer.classList.add("botao-desfazer");

}

 // Toggle =  quando o botão executa duas funções diferentes quando aperta e desaperta  

//FUNÇÃO CALLBACK = Função que é passada para um aoutra como parametro uma função
