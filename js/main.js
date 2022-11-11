
function Encender(){
var Bombilla = document.getElementById('foco');
Bombilla.src='img/pic_bulbon.gif' ;
}


function Apagar(){
    var Bombilla = document.getElementById('foco');
    Bombilla.src='img/pic_bulboff.gif' ;
    }

function Ocultar(){
    var Bombilla = document.getElementById ('foco');
    Bombilla.style.display='none';
}

function Mostrar(){
    var Bombilla = document.getElementById ('foco');
    Bombilla.style.display='block';
}

function cambiar(){
    var  fondo = document.getElementById('body');
    color = prompt ("escriba un color")
    fondo.style.backgroundColor= color
}

function cambiarTamaño(){

        var selector = document.getElementById('foco');
        selector.style.cssText="transition: 3s;background-color:white; width:420px;"
}

function Circulo(){
    var figura = document.getElementById('figura');
    figura.classList.toggle('Circulo');
}

function Rombo(){
    var figura = document.getElementById('figura');
    figura.classList.toggle('Rombo');
}

function Triangulo() {
    var figura= document.getElementById('figura');
    figura.classList.toggle("Triangulo")}



function arriba(){
    var figura = document.getElementById('figura');
    figura.classList.toggle("top");
}

function izquierda(){
    var figura = document.getElementById('figura');
    figura.classList.toggle("Left");
}

function abajo(){
    var figura = document.getElementById('figura');
    figura.classList.toggle("Butom");
}

function derecha(){
    var figura = document.getElementById('figura');
    figura.classList.toggle("Right");
}

function DiagonalIz(){
    var figura = document.getElementById('figura');
    figura.classList.toggle("DiagonalIz");
}
function DiagonalDe(){
    var figura = document.getElementById('figura');
    figura.classList.toggle("DiagonalDe");
}

function gif(){
    var figura = document.getElementById('figura');
    figura.classList.toggle("gif");
}

function ovalo(){
    var figura = document.getElementById('figura');
    figura.classList.toggle("ovalo");
}

function T(){
    var figura = document.getElementById('figura');
    figura.classList.toggle("T");
}