/*                  1º CARROSSEL              */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

/*                  CARROSSEL DEPOIMENTOS              */
var slideIndexDepoimentos = 1;
showSlidesDepoimentos(slideIndexDepoimentos);

function plusSlidesDepoimentos(n) {
  showSlidesDepoimentos(slideIndexDepoimentos += n);
}

function currentSlideDepoimentos(n) {
  showSlidesDepoimentos(slideIndexDepoimentos = n);
}

function showSlidesDepoimentos(n) {
  var i;
  var slidesDepoimentos = document.getElementsByClassName("slidesDepoimentos");
  var dotsDepoimentos = document.getElementsByClassName("dotDepoimentos");
  if (n > slidesDepoimentos.length) {slideIndexDepoimentos = 1} 
  if (n < 1) {slideIndexDepoimentos = slidesDepoimentos.length}
  for (i = 0; i < slidesDepoimentos.length; i++) {
      slidesDepoimentos[i].style.display = "none"; 
  }
  for (i = 0; i < dotsDepoimentos.length; i++) {
      dotsDepoimentos[i].className = dotsDepoimentos[i].className.replace(" activeDepoimentos", "");
  }
  slidesDepoimentos[slideIndexDepoimentos-1].style.display = "block"; 
  dotsDepoimentos[slideIndexDepoimentos-1].className += " activeDepoimentos";
}

var slideIndexMembros = 1;
showSlidesMembros(slideIndexMembros);

function plusSlidesMembros(n) {
  showSlidesMembros(slideIndexMembros += n);
}

function currentSlideMembros(n) {
  showSlidesMembros(slideIndexMembros = n);
}

function showSlidesMembros(n) {
  var i;
  var slidesMembros = document.getElementsByClassName("slidesMembros");
  var dotsMembros = document.getElementsByClassName("dotMembros");
  if (n > slidesMembros.length) {slideIndexMembros = 1} 
  if (n < 1) {slideIndexMembros = slidesMembros.length}
  for (i = 0; i < slidesMembros.length; i++) {
      slidesMembros[i].style.display = "none"; 
  }
  for (i = 0; i < dotsMembros.length; i++) {
      dotsMembros[i].className = dotsMembros[i].className.replace(" activeMembros", "");
  }
  slidesMembros[slideIndexMembros-1].style.display = "block"; 
  dotsMembros[slideIndexMembros-1].className += " activeMembros";
}

$('#formForm').trigger("reset");

var sanduba = $("#sanduba");
var itemMenu = $(".itemMenu");
var menu = $("#menu");
sanduba.click(function () {
  menu.toggleClass("resp");
});
itemMenu.click(function () {
  menu.addClass("resp");
});
var modal=$("#contatoModal");
var fechar = $("#closeModal");
  fechar.click(function(){
    modal.addClass("not");
  });
  
var title = $("#title");
var paragrafo1 = $("#paragrafo1"); 
var paragrafo2 = $("#paragrafo2");
var paragrafo3 = $("#paragrafo3");
var pl1 = $("#pl1");
var pl2 = $("#pl2");
var botaoServ = $(".service-button");
var adequacao = $("#adequacao");
var calculo = $("#calculo");
var correcao = $("#correcao");
var eficiencia = $("#eficiencia");
var projeto = $("#projeto");
var vistoria = $("#vistoria");

botaoServ.click(function(){
  modal.removeClass("not");
});

adequacao.click(function(){
  title.html("ADEQUAÇÃO TARIFÁRIA");
  paragrafo1.html("O serviço consiste na readequação do quadro tarifário de energia elétrica do consumidor visando reduzir o consumo de energia elétrica e consequentemente diminuir as despesas mensais.");
});

calculo.click(function(){
  title.html("CÁLCULO LUMINOTÉCNICO");
  paragrafo1.html("Com este serviço, nosso cliente terá o mais adequado projeto de iluminação artificial em ambientes internos e externos, visando melhor uso da iluminação ambiente, maior conforto para os que circulam pelo local, melhor distribuição dos pontos de iluminação e uso eficiente das lâmpadas, garantindo assim sua melhor utilização e maior vida útil.");

});

correcao.click(function(){
  title.html("CORREÇÃO DO FATOR DE POTÊNCIA");
  paragrafo1.html("Este serviço resume-se a projetar banco de capacitores para otimizar o sistema elétrico, evitar o surgimento de harmônicos na rede, evitar problemas com equipamentos instalados no local, garantir melhor dimensionamento de condutores.");

});

eficiencia.click(function(){
  title.html("EFICIÊNCIA ENERGÉTICA");
  paragrafo1.html("A Watt Consultoria fornece ao cliente uma otimização no uso dos equipamentos e no consumo de energia elétrica garantindo qualidade e eficiência. Incluem-se no serviço: Análise tarifária, levantamento e análise do sistema elétrico, elaboração de plano de utilização dos equipamentos, análise de conforto térmico (apenas para ar-condicionado).");

});

projeto.click(function(){
  title.html("PROJETO DE INSTALAÇÕES ELÉTRICAS");
  paragrafo1.html("Visando segurança, qualidade e adequação às normas brasileiras de segurança, nosso serviço de instalações elétricas propõe verificação e atualização do projeto elétrico, correção de falhas no sistema elétrico (caso o mesmo seja de um estabelecimento antigo), alocação de pontos de iluminação, dimensionamento de eletrodutos e cabos de alimentação, determinação de quadros e equipamentos de proteção, execução e acompanhamento do projeto.");

});

vistoria.click(function(){
  title.html("VISTORIA ELÉTRICA");
  paragrafo1.html("Realiza-se elaboração de um laudo técnico apresentando a avaliação e determinando a atual situação a qual se encontram as instalações elétricas do cliente. O escopo do serviço consiste em analisar os componentes do sistema elétrico, qualificá-los e identificar quais as necessidades para que sejam feitas as correções.");

});