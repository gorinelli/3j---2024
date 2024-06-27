const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");
tempo[0].textContent = ""
const tempoObjetivo1= new Date(2024,8,11,22);
const tempoObjetivo2= new Date(2024,9,12,21);
const tempoObjetivo3= new Date(2024,10,13,20);
const tempoObjetivo4= new Date(2024,11,14,19);
const agora= new Date ();
let segundos;
let minutos;
let horas;
let dias;
tempo[0].textContent = tempoObjetivo1-agora;
segundos=(tempoObjetivo1-agora)/100
minutos=segundos/60
horas=minutos/60
dias=horas/60
segundos=Math.floor(segundos);
minutos=Math.floor(minutos);
horas=Math.floor(horas);
dias=Math.floor(dias);
tempo[0].textContent=`Falta ${dias} dias, ${horas}horas, ${minutos} minutos e ${segundos} segundos`
console.log(tempo);

let segundos1;
let minutos1;
let horas1;
let dias1;
tempo[0].textContent = tempoObjetivo2-agora;
segundos1=(tempoObjetivo2-agora)/100
minutos1=segundos1/60
horas1=minutos1/60
dias1=horas1/60
segundos1=Math.floor(segundos1);
minutos1=Math.floor(minutos1);
horas1=Math.floor(horas1);
dias1=Math.floor(dias1);
tempo[0].textContent=`Falta ${dias1} dias, ${horas1}horas, ${minutos1} minutos e ${segundos1} segundos`
console.log(tempo);

let segundos2;
let minutos2;
let horas2;
let dias2;
tempo[0].textContent = tempoObjetivo3-agora;
segundos2=(tempoObjetivo3-agora)/100
minutos2=segundos2/60
horas2=minutos2/60
dias2=horas2/60
segundos2=Math.floor(segundos2);
minutos2=Math.floor(minutos2);
horas2=Math.floor(horas2);
dias2=Math.floor(dias2);
tempo[0].textContent=`Falta ${dias2} dias, ${horas2}horas, ${minutos2} minutos e ${segundos2} segundos`
console.log(tempo);

let segundos3;
let minutos3;
let horas3;
let dias3;
tempo[0].textContent = tempoObjetivo4-agora;
segundos3=(tempoObjetivo4-agora)/100
minutos3=segundos3/60
horas3=minutos3/60
dias3=horas3/60
segundos3=Math.floor(segundos3);
minutos3=Math.floor(minutos3);
horas3=Math.floor(horas3);
dias3=Math.floor(dias3);
tempo[0].textContent=`Falta ${dias3} dias, ${horas3}horas, ${minutos3} minutos e ${segundos3} segundos`
console.log(tempo);

for(let i = 0; 1 < botoes.length ; i++){ 
    botoes[i].onclick = function() {
        for (j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
