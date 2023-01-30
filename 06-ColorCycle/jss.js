let cores = document.querySelector(`.cores`)

let red =  document.getElementById(`red`);
let blue =  document.getElementById(`blue`);
let green =  document.getElementById(`green`);


red.style.backgroundColor = `blue`;




function numAleatorio(){
 red = Math.round(Math.random() * 255);
 green = Math.round(Math.random() * 255);
 blue = Math.round(Math.random() * 255);

 cores.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"

}