//Entrada de dados
let data = document.querySelector(`.date`)

//Passagem de dados
let dias = document.querySelector(`#dias`)
let horas = document.querySelector(`#horas`) 
let minutos = document.querySelector(`#minutos`)
let segundos = document.querySelector(`#segundos`)



/*Dados atuais */
let dateAt = new Date();



function coletaData(){

    console.log(dateAt.getDate())
    console.log(dateAt.getHours())
    console.log(dateAt.getMinutes())
    console.log(dateAt.getSeconds())

}
