let pinguim = { //meu objeto
    nome: "Mônfred", //atributo
    idade: 4, //atributo
    origem: "Antártida", //atributo
}

pinguim.andar = function(){  //função
    Console.log("Andou");
}

pinguim.podeVoar = false //declarando uma propriedade

pinguim.voar = function() {  // checa se o método é verdadeiro.
    if (pinguim.podeVoar == true){
            return  true;
    } else {
            return  false;
    }
}