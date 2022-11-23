const botaoIniciar = document.getElementById('botao-iniciar');
const botaoPausar = document.getElementById('botao-pausar');
var cronometro = document.querySelector('.box');
var segundos = 0;
var minutos = 0;
var horas = 0;

botaoIniciar.addEventListener('click', () => {
    // lembrar de alterar o tempo de execução da função para milisegundos
    contador = setInterval(mudaCronometro, 1000)
})

function mudaCronometro(){
    segundos++
    cronometro.innerHTML = horas+':'+minutos+':'+segundos
    //lembrar de consertar para > 59 segundos quando arrumar o contador
    if(segundos > 58){
        segundos = 0
        minutos += 1
    }
    
}    
 
botaoPausar.addEventListener('click', () => {
    clearInterval(contador)
})




