function Pessoa(nome, idade, sexo) {
  this.nome = nome;
  this.idade= idade;
  this.sexo= sexo;
}

var nomes = document.querySelectorAll('.nomes');
var container2 = document.querySelector('#container2');
var fechar = document.querySelector('.fechar');
var informacoes = document.querySelector('.inforacoes');


//Faz com que todos os elementos da classe "nomes" tenham a funcao [ CLICK ]
for(let i=0; i<=4; i++){
nomes[i].addEventListener("click", function(){

  /* Funcao que adiciona e remove a classe: "container2" esse aconteciento leva 5segundos */
  container2.classList.add("container2");

  setTimeout(function() {
    container2.classList.remove("container2");
  }, 5000);

})
};




var maisInfo0 = new Pessoa('Guilherme','20','Masculino');

 nomes[0].innerHTML = 'ola'



console.log(maisInfo0.idade)