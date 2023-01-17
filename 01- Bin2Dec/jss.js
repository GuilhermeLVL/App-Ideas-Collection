let entrada = document.getElementById(`entrada`);

let submit = document.querySelector(`submit`);

// Seleciona o formulário
const form = document.querySelector("form");

form.addEventListener("click", (e) => {
  e.preventDefault();



  // Pegando o valor do input para o JS
  const value = entrada.value;
  
  //Mensagem de erro
  const error0 = document.getElementById(`error0`);


    if (!/^[01]*$/.test(value)) {

      return error0.innerHTML = "Entrada inválida, a entrada deve conter apenas 0 e 1"

    }else{

      function converteBinario(binary){
    return parseInt(binary,2) }

  const resposta = document.getElementById(`resposta`);

  resposta.innerHTML = converteBinario(value);

  return error0.innerHTML = "";

  }

})
