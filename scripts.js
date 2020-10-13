let a = document.querySelector("#bloque");

function parate(){
   document.querySelector("#bloque").src = "bloque.jpg";
}

a.addEventListener("mouseover", parate)

// cambiar en HOVER la imagen

function vuelve(){
    document.querySelector("#bloque").src = "secondary.gif";
}

a.addEventListener("mouseout", vuelve)

// devolver imagen en mouseout