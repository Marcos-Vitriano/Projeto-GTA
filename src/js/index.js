/*
Objetivo 1 - Quando o usuário clicar no botão de seleção de plataforma deve abrir uma caixa com os botões de seleção de plataforma
        Passo 1 - Pegar o botão de seleção de plataforma no JS para verificar quando o usuário clicar em cima dele.
        Passo 2 - Pegar o elemento do conteúdo que precisa ser mostrado
        Passo 3 - Pegar o clique do usuário no JS
        Passo 4 - Quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão para que o conteúdo apareça
*/

//Passo 1
const botao = document.querySelector(".btn-plataforma");

//Passo 2
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//Passo 3
botao.addEventListener("click", () => {
        /*
        Objetivo 2 - Caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar no botão de fechar, o conteúdo deve ser escondido.
                Passo 1 - Verificar se o botão já fo ativado pelo usuário, se sim, devemos remover a classe ativo para que ele esconnda o conteúdo novamente.
        */
        //const botaoEstaAberto = elementoPlataformas.classList.contains("ativo"); 
        // if (botaoEstaAberto){
        //         elementoPlataformas.classList.remove("ativo")
        
        // } else {
        //         //Passo 4
        //         elementoPlataformas.classList.add("ativo")
        // }
        //Refatorando:
        elementoPlataformas.classList.toggle("ativo");
});





