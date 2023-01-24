function insert(num){
    //*Impriindo o valor clicado */
var numero = document.getElementById('resultado').innerHTML;

/*resultado = valor atual + proximo valor clicado */
document.getElementById('resultado').innerHTML = numero + num
}

function clean(){
    document.getElementById('resultado').innerHTML = '';
}

function back(){
    /*Coetando o valor html de resultao e passando para uma variavel com o nome "resultado" */
    var resultado = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
document.getElementById('resultado').innerHTML = eval(resultado)
    }else{
        document.getElementById('resultado').innerHTML = 'Nada...'
    }
}