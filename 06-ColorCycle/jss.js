let cores = document.querySelector(`.cores`);
let valor = document.querySelector(`.valor`)

let red =  document.getElementById(`red`);
let blue =  document.getElementById(`blue`);
let green =  document.getElementById(`green`);







function numAleatorio(){
 red = Math.round(Math.random() * 255);
 green = Math.round(Math.random() * 255);
 blue = Math.round(Math.random() * 255);

 cores.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
 valor.innerHTML = `#${red},${green},${blue}` 
}