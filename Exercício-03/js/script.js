let usuario = 10

// document.addEventListener("scroll", function() {
//     let usuario = document.addEventListener("click", function() {
//         usuario.style.color = "blue";
        
//     }

// });


const primeiraSection = document.getElementById("primeira-section");
const segundaSection = document.getElementById("segunda-section");
const terceiraSection = document.getElementById("terceira-section");

document.addEventListener("scroll", function() {

    
        if (document.documentElement.scrollTop > 200){
            primeiraSection.classList.add("yellow");
        } 
        
        if (document.documentElement.scrollTop > 410){
            segundaSection.classList.add("pink");
        }

        if (document.documentElement.scrollTop > 400){
            terceiraSection.classList.add("greenyellow");
        }
        
    
});