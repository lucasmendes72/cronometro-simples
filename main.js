const botaoIniciar = document.getElementById('botao-iniciar');
const botaoPausar = document.getElementById('botao-pausar');
var cronometro = document.querySelector('.box');
var segundos = 0;

botaoIniciar.addEventListener('click', () => {
    contador = setInterval(mudaCronometro, 1000)
})

function mudaCronometro(){
    segundos++
    cronometro.innerHTML = '00:'+'00:'+'0'+segundos
    if(segundos > 9){
        cronometro.innerHTML = '00:'+'00:'+segundos
    }
    if(segundos > 59){
        cronometro.innerHTML = '00:'+'0'+'1'
    }
}


botaoPausar.addEventListener('click', () => {
    clearInterval(contador)
})




