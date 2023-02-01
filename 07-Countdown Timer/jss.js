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
 

 console.log(mesUsuario)

 

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


atualiza();


