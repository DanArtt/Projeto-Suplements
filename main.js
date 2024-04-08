import { inicializarCarrinho } from "./menuCarrinho";

const catalogo = [
  {
      id: 1,
      nomeProduto: "Whey Protein MaxTitanium 1kg",
      especificacao: "Sabor Baunilha",
      precoPromocao: 119.99,
      precoReal: 89.99,
      nomeArquivoImagem1: "whey-frente.jpeg",
      quantiVendas: 1298,
      estrela: "estrela.png",
      nota: 4.5,
  },
  {
      id: 2,
      nomeProduto: "Blusa Preta MaxTitanium Masculina",
      especificacao: "100% Poliéster",
      precoPromocao: 129.99,
      precoReal: 99.99,
      nomeArquivoImagem1: "blusa-max-masculina.jpeg",
      quantiVendas: 423,
      estrela: "estrela.png",
      nota: 4.9,
  },
  {
      id: 3,
      nomeProduto: "Cinturão para Agachamento",
      especificacao: "100% couro",
      precoPromocao: 149.99,
      precoReal: 119.99,
      nomeArquivoImagem1: "cinturao.jpeg",
      quantiVendas: 187,
      estrela: "estrela.png",
      nota: 4.3,
  },
  {
      id: 4,
      nomeProduto: "Coqueteleira Preta Dark Lab",
      especificacao: "Tampa e Peneira",
      precoPromocao: 79.99,
      precoReal: 49.99,
      nomeArquivoImagem1: "coqueteleiraDark.jpeg",
      quantiVendas: 745,
      estrela: "estrela.png",
      nota: 4.7,
  },
  {
      id: 5,
      nomeProduto: "Coqueteleira Preta Growth",
      especificacao: "Tampa e Peneira",
      precoPromocao: 39.99,
      precoReal: 19.99,
      nomeArquivoImagem1: "coqueteleiraGrowth.png",
      quantiVendas: 457,
      estrela: "estrela.png",
      nota: 4.5,
  },
  {
      id: 6,
      nomeProduto: "Creatina Probiotica Monohidratada",
      especificacao: "300g sem sabor",
      precoPromocao: 79.99,
      precoReal: 49.99,
      nomeArquivoImagem1: "creatina-frente.jpeg",
      quantiVendas: 1232,
      estrela: "estrela.png",
      nota: 4.8,
  },
  {
      id: 7,
      nomeProduto: "Cropped Preto Growth Feminino",
      especificacao: "100% Poliéster",
      precoPromocao: 99.99,
      precoReal: 69.99,
      nomeArquivoImagem1: "cropped-growth-feminino.jpeg",
      quantiVendas: 659,
      estrela: "estrela.png",
      nota: 4.2,
  },
  {
      id: 8,
      nomeProduto: "Faixa de Joelho",
      especificacao: "Faixa Elástica com 2 Metros",
      precoPromocao: 119.99,
      precoReal: 99.99,
      nomeArquivoImagem1: "faixa-de-joelho.jpeg",
      quantiVendas: 379,
      estrela: "estrela.png",
      nota: 4.4,
  },
  {
      id: 9,
      nomeProduto: "Hipercalórico Growth 3kg",
      especificacao: "Big Mass Ultra Premium Blend",
      precoPromocao: 149.99,
      precoReal: 119.99,
      nomeArquivoImagem1: "hipercalorico-frente.jpeg",
      quantiVendas: 1289,
      estrela: "estrela.png",
      nota: 4.9,
  },
  {
      id: 10,
      nomeProduto: "Pré Treino MaxTitauim Hórus 150g",
      especificacao: "Sabor Frutas Vermelhas",
      precoPromocao: 89.99,
      precoReal: 69.99,
      nomeArquivoImagem1: "pretreino-frente.jpeg",
      quantiVendas: 781,
      estrela: "estrela.png",
      nota: 4.7,
  },
  {
      id: 11,
      nomeProduto: "Regata Preta Growth Masculina",
      especificacao: "100% Algodão",
      precoPromocao: 89.99,
      precoReal: 59.99,
      nomeArquivoImagem1: "regata-growth-masculina.jpeg",
      quantiVendas: 459,
      estrela: "estrela.png",
      nota: 4.2,
  },
  {
      id: 12,
      nomeProduto: "Short Preto Growth Feminino",
      especificacao: "100% Algodão",
      precoPromocao: 129.99,
      precoReal: 99.99,
      nomeArquivoImagem1: "short-growth-feminino.jpeg",
      quantiVendas: 379,
      estrela: "estrela.png",
      nota: 4.5,
  },
  {
      id: 13,
      nomeProduto: "Short Preto Growth Masculino",
      especificacao: "100% Algodão",
      precoPromocao: 119.99,
      precoReal: 89.99,
      nomeArquivoImagem1: "short-growth-masculino.jpeg",
      quantiVendas: 587,
      estrela: "estrela.png",
      nota: 4.8,
  },
  {
      id: 14,
      nomeProduto: "Short Branco Growth Masculino",
      especificacao: "100% Algodão",
      precoPromocao: 129.99,
      precoReal: 99.99,
      nomeArquivoImagem1: "short-growth-masculino2.jpeg",
      quantiVendas: 678,
      estrela: "estrela.png",
      nota: 4.9,
  },
  {
      id: 15,
      nomeProduto: "Par Strap",
      especificacao: "100% Algodão",
      precoPromocao: 59.99,
      precoReal: 39.99,
      nomeArquivoImagem1: "strap.jpeg",
      quantiVendas: 290,
      estrela: "estrela.png",
      nota: 4.7,
  },



];

for (const produtoCatalogo of catalogo) {
  const cartaoProduto = `<div class="border-solid border-2 border-sky-500 w-72 m-4" id="card-produto-${produtoCatalogo.id}">
  <img src="./img/${produtoCatalogo.nomeArquivoImagem1}" alt="" style="height:300px"/>
  <p>${produtoCatalogo.nomeProduto}</p>
  <p>${produtoCatalogo.especificacao}</p>
  <li">
      <p>${produtoCatalogo.nota}</p>
      <img src="./img/${produtoCatalogo.estrela}" alt="">
      <img src="./img/${produtoCatalogo.estrela}" alt="">
      <img src="./img/${produtoCatalogo.estrela}" alt="">
      <img src="./img/${produtoCatalogo.estrela}" alt="">
      <img src="./img/${produtoCatalogo.estrela}" alt="">
      <p>(${produtoCatalogo.quantiVendas})</p>
  </li>
  <li">
    <p id="precoPromocao">R$${produtoCatalogo.precoPromocao}</p>
    <p id="precoReal">R$${produtoCatalogo.precoReal}</p>
  </li>
  <button>Adicionar</button>
  </div>`;

  document.getElementById('container-produto').innerHTML += cartaoProduto;

}

inicializarCarrinho()


