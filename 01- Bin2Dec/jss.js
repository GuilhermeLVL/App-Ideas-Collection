let entrada = document.getElementById(`entrada`);

let submit = document.querySelector(`submit`);

// Seleciona o formulário
const form = document.querySelector("form");

form.addEventListener("click", (e) => {
  e.preventDefault();
  // Recupera o valor do input
  const value = entrada.value;

  function converteBinario(binary){
    return parseInt(binary,2)
  }


  
(converteBinario(value));

//let resposta = document.getElementById(`resposta`);

})
