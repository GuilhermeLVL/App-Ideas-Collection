//Entrada de dados
let data = document.querySelector(`.date`)

//Passagem de dados
let dias = document.querySelector(`#dias`)
let horas = document.querySelector(`#horas`) 
let minutos = document.querySelector(`#minutos`)
let segundos = document.querySelector(`#segundos`)





function coletaData(){

  let dataValue = data.value;

console.log(dataValue)

 let arrayData = dataValue.split("-");

 let diaUsuario = arrayData[0]
 let mesUsuario = arrayData[0]
 let anoUsuario = arrayData[0]


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
