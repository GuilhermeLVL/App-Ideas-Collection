
function valor(){
//Superior
let esquerdaS = document.getElementById('esquerda-S').value;
let direitaS = document.getElementById('direita-S').value;
//Inferior
let esquerdaI = document.getElementById('esquerda-I').value;
let direitaI = document.getElementById('direita-I').value;

//Coletando o valor



console.log(esquerdaS)
console.log(direitaS)
console.log(esquerdaI)
console.log(direitaI)


//Borda
let borda = document.querySelector(".borda");
borda.style.borderRadius = `${esquerdaS}px ${direitaS}px ${esquerdaI}px ${direitaI}px`;



const valoresPX = document.getElementById(`valoresPx`);

valoresPX.innerHTML = borda.style.borderRadius;

console.log(borda.style.borderRadius)


}
