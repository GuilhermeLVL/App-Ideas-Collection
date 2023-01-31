//Entrada de dados
let data = document.querySelector(`.date`)

//Passagem de dados
let dias = document.querySelector(`#dias`)
let horas = document.querySelector(`#horas`) 
let minutos = document.querySelector(`#minutos`)
let segundos = document.querySelector(`#segundos`)



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
atualiza()


function coletaData(){

    console.log(dateAt.getDate())
    console.log(dateAt.getHours())
    console.log(dateAt.getMinutes())
    console.log(dateAt.getSeconds())

}
