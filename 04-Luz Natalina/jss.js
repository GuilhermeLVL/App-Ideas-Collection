let luz01 = document.querySelectorAll('.luz01')
let luz02 = document.querySelectorAll('.luz02')
let luz03 = document.querySelectorAll('.luz03')
let luz04 = document.querySelectorAll('.luz04')



function luzOffs(){
for(let i=0; i<=2; i++){
    luz01[i].style.animation = "none";
    luz02[i].style.animation = "none";
    luz03[i].style.animation = "none";
    luz04[i].style.animation = "none";
}
}

function luzOn() {
    for(let i=0; i<=2; i++){
        luz01[i].style.animation =  "luzVermelha 1s infinite 1s";
        luz02[i].style.animation =  "luzAmarela 1.5s infinite 1.5s";
        luz03[i].style.animation =  "luzVerde 1s infinite 1s";
        luz04[i].style.animation =  "luzAzul 1.5s infinite 1.5s";
    }
}

function velo(){
let velocidade = document.getElementById('velocidade').value;

for(let i=0; i<=2; i++){
    luz01[i].style.animation =  `luzVermelha ${velocidade}s infinite 1s`;
    luz02[i].style.animation =  `luzAmarela ${velocidade}s infinite 1.5s`;
    luz03[i].style.animation =  `luzVerde ${velocidade}s infinite 1s`;
    luz04[i].style.animation =  `luzAzul ${velocidade}s infinite 1.5s`;
}

console.log(velocidade)

}

