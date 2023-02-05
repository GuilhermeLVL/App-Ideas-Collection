//Entrada de dados
let data = document.querySelector(`.date`)

//Passagem de dados
let dias = document.querySelector(`#dias`)
let horas = document.querySelector(`#horas`) 
let minutos = document.querySelector(`#minutos`)
let segundos = document.querySelector(`#segundos`)





function coletaData(){
/*Pega o valor do input */
  let dataValue = data.value;
  /*converte de string para array separando por (" - ") */
  let arrayData = dataValue.split("-");

  /*Cada parte do input [e alocada para uma variavel*/
  let anoUsuario = arrayData[0];
  let diaUsuario = arrayData[1];
  let mesUsuario = arrayData[2];
 

let dataFutura = new Date();


let diferencaDeAnos = anoUsuario - dataFutura.getFullYear();

let dias = diferencaDeAnos * 365 - mesesRestantes;

let horas =dias * 24;

let minutos = horas * 60;

let segundos = minutos * 60;


/*VALORES QUE SERAO SUBTRAIDOS */

/*Pega o valor do usario e converte para dias */
let mesesRestantes = (mesUsuario - dataFutura.getMonth()) * 30;

let diasRestante = diaUsuario - dataFutura.getDay();






console.log(`Anos:${diferencaDeAnos}`)
console.log(`Meses:${mesesRestantes}`)
console.log(`Dias:${diasRestante}`)

console.log(`Horas:${horasRestante}`)
console.log(`Minutos:${minutosRestante}`)
console.log(`Segundos:${segundosRestante}`)



}
 




function atualiza(){



    /*Dados atuais */
  let dateAt = new Date();  
  
dias.innerHTML = dateAt.getDate();
horas.innerHTML = dateAt.getHours();
minutos.innerHTML = dateAt.getMinutes();
segundos.innerHTML = dateAt.getSeconds();


//Chama a funcaaao infinitamente
setInterval(atualiza, 1000);


}

/*
atualiza();

*/
