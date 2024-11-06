function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    let img = document.createElement('img');
    img.src = '../assets/img/bg-desktop.webp';

    cartao.innerHTML = `
    <div class="cartao_conteudo">
    <div class="cartao_conteudo_pergunta">

    </div>
    <div class="cartao_conteudo_resposta">

    </div>
    </div>
`

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)


    container.appendChild(cartao)

}