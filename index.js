const pedra=document.getElementById("pedra");
const papel=document.getElementById("papel");
const tesoura=document.getElementById("tesoura");
const mensagem=document.getElementById("mensagem");


function escolhaComputador  (){
    const opcoes= ["pedra", "papel", "tesoura"];
    const escolhaAleatoria= Math.floor(Math.random() * 3);

    return opcoes[escolhaAleatoria];
}

function jogar(escolhaJogador){
    const escolhaComp = escolhaComputador();

    if (escolhaJogador.toLowerCase() === escolhaComp) {
        mensagem.textContent = `Empate! Ambos escolheram ${escolhaJogador}`;
    }else if(
            (escolhaJogador === "Pedra" && escolhaComp  === "Tesoura") ||
            (escolhaJogador === "Papel" && escolhaComp  === "Pedra") ||
            (escolhaJogador === "Tesoura" && escolhaComp  === "Papel")
    )
    {
        mensagem.textContent = `Você venceu! ${escolhaJogador} vence ${escolhaComp }`;
    } else{
        mensagem.textContent = `Você perdeu! ${escolhaComp } vence ${escolhaJogador}`;
    }

}

pedra.addEventListener("click", () => jogar("Pedra"));
papel.addEventListener("click", () => jogar("Papel"));
tesoura.addEventListener("click", () => jogar("Tesoura"));