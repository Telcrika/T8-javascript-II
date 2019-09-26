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
        "titulo": "Calibã e a Bruxa: mulheres, corpo e acumulação primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }
}


const ulMae = document.getElementById("lista-do-catalogo");



for (let titulos in livros) {
    let prateleira = document.createElement("h3");
    ulMae.appendChild(prateleira);
    prateleira.textContent = livros[titulos]["titulo"];

    const escritor = document.createElement("p");
    ulMae.appendChild(escritor);
    escritor.textContent = livros[titulos]["quemEscreveu"];

    const site = document.createElement("a");
    ulMae.appendChild(site);
    site.textContent = livros[titulos]["link"];

}

   