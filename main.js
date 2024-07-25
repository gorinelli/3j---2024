const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");
tempo[0].textContent = ""
const tempoObjetivo1= new Date(2023,8,11,22);
const tempoObjetivo2= new Date(2024,9,12,21);
const tempoObjetivo3= new Date(2024,10,13,20);
const tempoObjetivo4= new Date(2024,11,14,19);

function calculaTempo(tempoObjetivo){
const agora= new Date ();
let segundos;
let minutos;
let horas;
let dias;

segundos=Math.floor(tempoObjetivo-agora)/1000;
minutos=Math.floor(segundos/60);
horas=Math.floor(minutos/60);
dias=Math.floor(horas/24);
  
segundos = segundos%60
minutos = minutos%60
horas = horas%24

if(segundos >= 0){
return 'Faltam $(dias) dias, $(horas0 horas, $(minutos) minutos e $(segundos) segundos'

}
else{
    return 'Prazo Finalizado!'
}
}

tempo[0].textContent= calculaTempo(tempoObjetivo1)
tempo[0].textContent= calculaTempo(tempoObjetivo2)
tempo[0].textContent= calculaTempo(tempoObjetivo3)
tempo[0].textContent= calculaTempo(tempoObjetivo4)

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
