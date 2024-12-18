function criaHoraSegundos(segundos){
    const data = new Date(segundos *1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone:'UTC'
    });
}


const relogio = document.querySelector('.relogio');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let segundos = 0;
let timer;

function iniciaRelogio(){
     timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraSegundos(segundos);
    },1000);
}

start.addEventListener('click',function(event){
    relogio.classList.remove('pausado');
 iniciaRelogio();
});

pause.addEventListener('click',function(){
    clearInterval(timer);
    relogio.classList.add('pausado');
})

reset.addEventListener('click', function(event){
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
});



