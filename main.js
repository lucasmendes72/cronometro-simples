const botaoIniciar = document.getElementById('botao-iniciar');
const botaoPausar = document.getElementById('botao-pausar');
const botaoZerar = document.getElementById('botao-zerar');
var cronometro = document.querySelector('.box');
var milisegundos = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;

botaoIniciar.addEventListener('click', () => {
    contador = setInterval(mudaCronometro, 10)
    botaoIniciar.style.display = "none";
})

function mudaCronometro(){
    milisegundos++
    cronometro.innerHTML = '0'+horas+':'+'0'+minutos+':'+'0'+segundos+':'+milisegundos 
   if(milisegundos > 99){
        milisegundos = 0
        segundos += 1;
    }
    if(segundos > 9){
        cronometro.innerHTML = '0'+horas+':'+'0'+minutos+':'+segundos+':'+milisegundos
    }
    if(segundos > 59){
        segundos = 0
        minutos += 1
    }
    if(minutos > 9){
        cronometro.innerHTML = '0'+horas+':'+minutos+':'+segundos+':'+milisegundos
    }
    if(minutos > 59){
        minutos = 0
        horas += 1
    }
    if(horas > 9){
        cronometro.innerHTML = horas+':'+minutos+':'+segundos+':'+milisegundos
    }
    
}    
 
botaoPausar.addEventListener('click', () => {
    clearInterval(contador)
    botaoIniciar.style.display = "inline-block";
})

botaoZerar.addEventListener('click', () => {
    resetaContagem()
    botaoIniciar.style.display = "inline-block";
})

function resetaContagem(){
    clearInterval(contador)
    cronometro.innerHTML = '00:00:00:00'
    milisegundos = 0
    segundos = 0
    minutos = 0
    horas = 0
}


