import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

//Função feita para renderizar os produtos dentro da pagina.
export function renderizarCatalogo() {
//O for está sendo utilizado para fazer a renderização dos produtos
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class="rounded-lg shadow-xl shadow-sky-700 w-56 m-4 flex flex-col p-2 gap-2 justify-between group" id="card-produto-${produtoCatalogo.id}">
        <img 
        src="./img/${produtoCatalogo.nomeArquivoImagem1}" 
        alt=""
        class="group-hover:scale-105 duration-300 mb-3 rounded-lg h-52 w-60"
        />
        <p class="text-md font-bold">${produtoCatalogo.nomeProduto}</p>
        <p class="text-xs">${produtoCatalogo.especificacao}</p>
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
        <p class="text-green-700 text-lg font-bold" id="precoPromocao">R$${produtoCatalogo.precoPromocao}</p>
        <p class="text-red-500 text-sm font-bold line-through" id="precoReal">R$${produtoCatalogo.precoReal}</p>
        </li>
        <button id="adicionar-${produtoCatalogo.id}" class="mt-2 rounded-2xl bg-sky-700 hover:bg-sky-400 h-6 text-slate-100 flex justify-center items-center gap-2">
        <i class="fa-solid fa-cart-plus text-[12px]"></i>
        </button>
        </div>`;
        
        document.getElementById('container-produto').innerHTML += cartaoProduto;
        
    }
    
    //Vai adiconar o produto no carrinho assim que o usuario clicar no botão
    for (const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id));

    }
}