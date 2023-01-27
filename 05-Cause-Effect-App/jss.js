function Pessoa(nome, idade, sexo) {
  this.nome = nome;
  this.idade= idade;
  this.sexo= sexo;
}

var nomes = document.querySelectorAll('.nomes');
var container2 = document.querySelector('.container2')

for(let i=0; i<=4; i++){
nomes[i].addEventListener('click', function(){

container2.style.display='flex'

})
}






var maisInfo0 = new Pessoa('Guilherme','20','Masculino');

 nomes[0].innerHTML = 'ola'



console.log(maisInfo0.idade)