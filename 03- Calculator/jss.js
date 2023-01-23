/*Variaveis */
let valor1 

let operador 

let valor2 

let valorOp

let resposta

/*Pegar os valores do array e passar para uma unica vaiavel */
function atualiza(){
   valorOp = array1.join('')
    console.log(valorOp)

    if(valor1 == null || valor1 < 99999999){
        valor1 = valorOp
    }else if(valor2 != null || valor2 <99999999){
        
        valor2 = valorOp
    }else if(operador == null){
        
    }



    entrada1.innerHTML = `${valor1} ${operador} ${valor2}`
}


/*Saida de dados */
let entrada1 = document.getElementById('entrada1');
let resultado = document.getElementById('resultado');


/*Armazena os dados */
let array1 = [];



/*Adiciona o numero ao array */

function num0(){
    array1.push(0)
    atualiza()
    console.log(array1)
    return array1
}

function num1(){
    array1.push(1)
    atualiza()
    console.log(array1)
    return array1
}


function num2(){
    array1.push(2)
    atualiza()
    console.log(array1)
    return array1
}


function num3(){
    array1.push(3)
    atualiza()
    console.log(array1)
    return array1
}


function num4(){
    array1.push(4)
    atualiza()
    console.log(array1)
    return array1
}


function num5(){
    array1.push(5)
    atualiza()
    console.log(array1)
    return array1
}


function num6(){
    array1.push(6)
    atualiza()
    console.log(array1)
    return array1
}


function num7(){
    array1.push(7)
    atualiza()
    console.log(array1)
    return array1
}


function num8(){
    array1.push(8)
    atualiza()
    console.log(array1)
    return array1
}


function num9(){
    array1.push(9)
    console.log(array1)
    atualiza()
    return array1
}




/*Remove um elemento (Feito) */
function numRemove(){
    array1.pop()
    atualiza()
    console.log(array1)

    return array1
}

/*Zera as entradas do usario */
function operaZera(){
    array1 = []
entrada1.innerHTML = 0
atualiza()
}




/*Operacoes */
function operaDivisao(){
    operador = `/`
atualiza()
}
function operaDiv(){
    resposta = valor1 % valor2
atualiza()
}
function operaX(){
    resposta = valor1 * valor2
atualiza()
}
function operaMenos(){
    resposta = valor1 - valor2
atualiza()
}
function operaMais(){
    resposta = valor1 + valor2
atualiza()
}
function operaDecimal(){
    
atualiza()
}



function operaResultado(){

    resultado.innerHTML = resposta

atualiza()
}





















/*let valor =  parseInt(  operadorAC.innerHTML
)    
return console.log(valor) (operadorAC.innerHTML)*/