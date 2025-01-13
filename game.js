/*REGLAS 
- Es necesario primero definir los estilos luego colocar el texto


*/
const canvas = document.querySelector('canvas');
const game = canvas.getContext('2d'); //Le decimos que es un juego bidimensional

//El juego inicializar apenas termine de cargar la pagina
window.addEventListener('load',startGame); 

//Funcion para inicializar juego
function startGame(){
    let canvasSize;
    if(window.innerWidth< window.innerHeight){
        canvasSize= window.innerWidth *0.8;
    }
    else{
        canvasSize = window.innerHeight*0.8;
    }

    canvas.setAttribute('width',canvasSize);
    canvas.setAttribute('height',canvasSize);

    /*
    game.fillRect(0,0,100,100); //Creamos un rectangulo de 100x100px
    game.clearRect(0,0, 100,50);//Borra una parte del rectangulo de 100x50px
    game.font = '20px Verdana'; //Cambia el tamaño de la fuente
    game.fillStyle = 'red'; //Cambia el color de la fuente
    game.textAlign = 'left'; //Alinea el texto 
    game.fillText('Jueguito Js',20,20);//Escribe texto segun coordenadas
    */
}