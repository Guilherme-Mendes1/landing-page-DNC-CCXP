const dia= window.document.getElementById('dia')
const hora= window.document.getElementById('hora')
const minuto= window.document.getElementById('minuto')
const segundo= window.document.getElementById('segundo')

const viagem = "23 jan 2023"

function countDown(){
   const dataviagem = new Date(viagem)
   const hoje = new Date()

   const segTotal = (dataviagem - hoje)/1000;

   const finalDias = Math.floor(segTotal / 60 / 60 / 24);
   const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
   const finalMinutos = Math.floor(segTotal / 60 ) % 60;
   const finalSegundos = Math.floor(segTotal)% 60 ;

   dia.innerHTML =  ` <strong>${finalDias}D</strong>`
   hora.innerHTML = ` <strong>${finalHoras}H</strong>`
   minuto.innerHTML = ` <strong>${finalMinutos}M</strong>`
   segundo.innerHTML = ` <strong>${finalSegundos}S</strong>`

}

function horas (tempo){
    return tempo < 10? `0${tempo}` : tempo ;
}

countDown();
setInterval(countDown, 1000) 