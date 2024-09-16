//selecionar a imagem principal
const imagem = document.getElementById('imagem');

//selecionar os botoes
const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const botao3 = document.getElementById('botao3');

//função para trocar a imagem
function trocarImagem(img){
    imagem.src = img;
}

//adicionar eventos aos botoes para trocar a imagem
botao1.addEventListener('click',function(){
    trocarImagem('imagem1.jpg');
})
botao2.addEventListener('click',function(){
    trocarImagem('imagem2.jpg');
})
botao3.addEventListener('click',function(){
    trocarImagem('imagem3.jpg');
})
const botoes = document.querySelectorAll('.botoes button');
//funcao para ativar o botao e remover a ativacao dos outros
function ativarBotao() {
    botoes.forEach(b => b.classList.remove('ativo'));
    botoes.classList.add('ativo')
}
//adicionar eventos aos botoes para trocar a imagem e mudar a cor do botao
botoes.forEach((botao, index) => {
    botao.addEventListener('click',function() {
        trocarImagem(`imagem${index+1}.jpg`);
        ativarBotao(botao);
    })
})