// Pegar os personagens
const personagens = document.querySelectorAll('.personagem');

// Adicionar a classe 'selecionado' no personagem
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // Verificar se já existe algum personagem selecionado
        removerSelecaoDoPersonagem();
        
        // Continuação do segundo passo
        personagem.classList.add('selecionado');

        // Adicionar personagem grande junto com a sua descrição
        alterarImagemPersonagemSelecionado(personagem);

        // Alterar nome 
        alterarNomePersonagemSelecionado(personagem);

        // Altera descrição
        alteraDescricaoPersonagemSelecionado(personagem);

    })
})


function alteraDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    // Alterar imagem
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

