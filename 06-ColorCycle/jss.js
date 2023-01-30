let cores = document.querySelector(`.cores`);
let valor = document.querySelector(`.valor`)

let red =  document.getElementById(`red`);
let blue =  document.getElementById(`blue`);
let green =  document.getElementById(`green`);


function retunColor(){
    cores.style.backgroundColor = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
    valor.innerHTML = `#${red.value},${green.value},${blue.value}`;

}


function numAleatorio(){

 let red2 = Math.round(Math.random() * 255);
 let green2 = Math.round(Math.random() * 255);
 let blue2 = Math.round(Math.random() * 255);

 cores.style.backgroundColor = "rgb(" + red2 + "," + green2 + "," + blue2 + ")";
 valor.innerHTML = `#${red2},${green2},${blue2}`;
}