//Pegando elemento
const panels = document.querySelectorAll(`.panel`);


// forEach adiciona a funcao para todos os elementos do array(panels)


/*Primeiro remove depois adiciona a funcao `active` */
panels.forEach( panel => {
    /* Ao clicar aciona a funcao "removeActiveClasses()"
    Adiciona ao elemento clicado a classe `active`. */
    panel.addEventListener(`click`,() => {
        removeActiveClasses()
       panel.classList.add(`active`)
    })
})
/*Funcao remove a classe `active` */
function removeActiveClasses(){
    panels.forEach( panel => {
        panel.classList.remove(`active`)
    })
}


