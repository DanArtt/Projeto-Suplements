import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarCarrinho } from "./src/menuCarrinho";

//mudança de imagem do carrossel ---------------------------------

let slideImagem = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("carrossel-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideImagem++;
  if (slideImagem > slides.length) {
    slideImagem = 1;
  }
  slides[slideImagem - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Troca de slide a cada 3 segundos (3000 milissegundos)
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

renderizarCatalogo()
inicializarCarrinho()


