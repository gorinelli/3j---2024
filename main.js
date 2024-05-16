const botoes = document.querySelector(".botao")
console. log(botoes)
for (let i = 0; i < botoes.length ; i++){
  botoes[i]. onclik = function(){
    for(j=0; j<botoes.length;j++){
    botoes[j].classList.remove("ativo")
    }
    botoes[j].classList.add("ativo")
    }
}






