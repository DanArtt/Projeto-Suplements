import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

//Função feita para renderizar os produtos dentro da pagina.
export function renderizarCatalogo() {
//O for está sendo utilizado para fazer a renderização dos produtos
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class="rounded-lg shadow-sm shadow-slate-700 dark:shadow-zinc-100 w-56 m-4 flex flex-col p-2 gap-2 justify-between group" id="card-produto-${produtoCatalogo.id}">
        <div class="flex flex-col justify-center text-center items-center gap-2">
        <img 
        src="./img/${produtoCatalogo.nomeArquivoImagem1}" 
        alt=""
        class="group-hover:scale-105 duration-300 mb-3 rounded-lg h-52 w-60"
        />
        <p class="text-md dark:text-zinc-50">${produtoCatalogo.nomeProduto}</p>
        <li class="flex gap-0.5 items-center">
        <p class="text-sm">${produtoCatalogo.nota}</p>
        <img class="h-3.5" src="./img/${produtoCatalogo.estrela}" alt="">
        <img class="h-3.5" src="./img/${produtoCatalogo.estrela}" alt="">
        <img class="h-3.5" src="./img/${produtoCatalogo.estrela}" alt="">
        <img class="h-3.5" src="./img/${produtoCatalogo.estrela}" alt="">
        <img class="h-3.5" src="./img/${produtoCatalogo.estrela}" alt="">
        <p class="text-sm">(${produtoCatalogo.quantiVendas})</p>
        </li>
        <li class="flex flex-col gap-2">
        <p class="text-slate-700 dark:text-zinc-950 text-lg font-bold" id="precoPromocao">R$${produtoCatalogo.precoPromocao}</p>
        <p class="text-slate-500 dark:text-zinc-300 text-sm font-bold line-through" id="precoReal">R$${produtoCatalogo.precoReal}</p>
        </li>
        <button id="adicionar-${produtoCatalogo.id}" class="mt-2 py-6 border-solid border-slate-700 dark:border-zinc-100 border-2 rounded-md h-6 text-slate-100 flex justify-center items-center px-2 hover:bg-red-600 hover:text-zinc-950 duration-150"><p class="text-black dark:text-zinc-100 text-center justify-center uppercase">Adicionar ao Carrinho</p></button>
        </div>
        </div>`;
        
        document.getElementById('container-produto').innerHTML += cartaoProduto;
        
    }
    
    //Vai adiconar o produto no carrinho assim que o usuario clicar no botão
    for (const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id));

    }
}