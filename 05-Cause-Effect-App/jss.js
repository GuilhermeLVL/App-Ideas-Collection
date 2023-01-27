
//Pegando do HTML
var nomes = document.querySelectorAll('.nomes');
var container2 = document.querySelector('#container2');
var fechar = document.querySelector('.fechar');

//Declarando objetos


//Faz com que todos os elementos da classe "nomes" tenham a funcao [ CLICK ]
for(let i=0; i<=4; i++){
nomes[i].addEventListener("click", function(){

  /* Funcao que adiciona e remove a classe: "container2" esse aconteciento leva 5segundos */
  container2.classList.add("container2");

  setTimeout(function() {
    container2.classList.remove("container2");
  }, 5000);

  if(nomes[i] == nomes[0]){
  container2.innerHTML = 'Nome:Guilherme <br>Idade:20 <br>Sexo:Masculino';
  }
  else if(nomes[i] == nomes[1]){
    container2.innerHTML = 'Nome:Amanda <br>Idade:20 <br>Sexo:Feminino';
  }
  else if(nomes[i] == nomes[2]){
    container2.innerHTML = 'Nome:Melzinha <br>Idade:3.5 <br>Sexo:Feminino';
  }
  else if(nomes[i] == nomes[3]){
    container2.innerHTML = 'Nome:Emanuel Gomes <br>Idade:53 <br>Sexo:Masculino';
  }
})
};










console.log(maisInfo0.idade)