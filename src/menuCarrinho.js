import { catalogo } from "./utilidades";

const idsProdutoCarrinhoQuantidade = {

}

//Função para abrir o carrinho
function abrirCarrinho() {
    document.getElementById("carrinho").classList.add('right-[0px]');
    document.getElementById("carrinho").classList.remove('right-[-350px]');
}
//Função para fehcar o carrinho
function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove('right-[0px]');
    document.getElementById("carrinho").classList.add('right-[-350px]');
}
//Função para visualizar o carrinho ao clicar no botao
export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
    //Executa a função ao clicar nos icones
    botaoFecharCarrinho.addEventListener('click', fecharCarrinho);
    botaoAbrirCarrinho.addEventListener('click', abrirCarrinho);
}
//Função responsavel para remover o produto do carrinho
function removerDoCarrinho(idProduto) {
    delete idsProdutoCarrinhoQuantidade[idProduto];
    renderizarProdutosCarrinho()
}

//Função responsavel para adicionar o mesmo produto no carrinho, acrescentando +1
function incrementarQuantidadeProduto(idProduto) {
    idsProdutoCarrinhoQuantidade[idProduto]++;
    atualizarInformacaoQuantidade(idProduto);
}

//Função responsavel para diminuir o mesmo produto no carrinho, removendo -1
function decrementarQuantidadeProduto(idProduto) {
    //Condição para excluir o item do carrinho caso o valor de = 1 
    if (idsProdutoCarrinhoQuantidade[idProduto] === 1) {
        removerDoCarrinho(idProduto);
        return
    }
    idsProdutoCarrinhoQuantidade[idProduto]--;
    atualizarInformacaoQuantidade(idProduto);
}
//Função responsavel para atualizar as informacções da quantidade de produtos no carrinho
function atualizarInformacaoQuantidade(idProduto) {
    document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoQuantidade[idProduto];
}


//Responsavel por renderizar todo o card do produto no carrinho
function desenharProdutoNoCarrinho(idProduto) {
    const produto = catalogo.find(p => p.id === idProduto);

    
    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");

    //Referente ao que será exibido dentro do carrinho, o que está dentro do {} é referente aos produtos. 
    const elementoArticle = document.createElement("article"); 
    const articleClasses = [
        "flex", 
        "bg-slate-300", 
        "rounded-lg", 
        "relative",
        
    ];

    for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass);
    }
    
    const cartaoProdutoCarrinho =
    `
    <button id="remover-item-${produto.id}" class="absolute top-2 right-2">
    <i class="fa-solid fa-circle-xmark fa-md text-slate-600 hover:text-slate-900"></i>
        </button>
        <img 
            class="h-26 w-24 rounded-l-lg" 
            src="./img/${produto.nomeArquivoImagem1}"
            alt="Carrinho: ${produto.nomeProduto}"
        >
        <div class="p-2 flex flex-col justify-between">
            <p class="text-slate-900 text-[11px] font-bold">${produto.nomeProduto}</p>
            <p class="text-slate-900 text-[9px]">${produto.especificacao}</p>
            <p class="text-green-500 text-[13px]">R$: ${produto.precoPromocao}</p>
        </div>
        <div class="flex text-slate-900 items-end items-center absolute bottom-2 right-2 text-sm">
            <button id="decrementar-produto-${produto.id}" class="px-2 duration-150 hover:scale-125">-</button>
            <p id="quantidade-${produto.id}" class="ml-2">${idsProdutoCarrinhoQuantidade[produto.id]}</p>
            <button id="incrementar-produto-${produto.id}" class="px-1.5 duration-150 hover:scale-125 ml-2">+</button>
        </div>
    `
    elementoArticle.innerHTML = cartaoProdutoCarrinho;

    //Vai exibir o cartão do produto no carrinho
    containerProdutosCarrinho.appendChild(elementoArticle);
    
    //Serve para Aumentar a quantidade de um produto ou diminuir a quantidade de um produto ao clicar no botão referente dentro do card no carrinho.
    document.getElementById(`decrementar-produto-${produto.id}`).addEventListener('click', () => decrementarQuantidadeProduto(produto.id));
    document.getElementById(`incrementar-produto-${produto.id}`).addEventListener('click', () => incrementarQuantidadeProduto(produto.id));

    //Serve para remover um produto do carrinho
    document.getElementById(`remover-item-${produto.id}`).addEventListener('click', () => removerDoCarrinho(produto.id))
}

//Responsavel por renderizar os produtos dentro do carrinho
function renderizarProdutosCarrinho() {
    const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
    containerProdutosCarrinho.innerHTML = "";

    for (const idProduto in idsProdutoCarrinhoQuantidade) {
        desenharProdutoNoCarrinho(idProduto)
    }
}

//Função para adiconar um produto ao carrinho
export function adicionarAoCarrinho(idProduto) {
    //Verifica se o Pruduto ja está dentro do carrinho
    if(idProduto in idsProdutoCarrinhoQuantidade) {
        incrementarQuantidadeProduto(idProduto); 
        return;
    }

    idsProdutoCarrinhoQuantidade[idProduto] = 1
    desenharProdutoNoCarrinho(idProduto);
    
}