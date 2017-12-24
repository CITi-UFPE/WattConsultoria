/*                  1º CARROSSEL              */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  tempo=0;
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  tempo=0;
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
  tempo=0;
}

function currentSlideDepoimentos(n) {
  showSlidesDepoimentos(slideIndexDepoimentos = n);
  tempo=0;
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
  tempo=0;
}

function currentSlideMembros(n) {
  showSlidesMembros(slideIndexMembros = n);
  tempo=0;
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
var wid = $(window).width();
var hei = $(window).height();
var widAn = wid;
var heiAn = hei;
var resp = false;

function verificaRes(){
  if(wid>=hei){
    menu.show();
    resp = false;
  }
  else{
    menu.hide();
    resp = true;
  }
}
verificaRes();
sanduba.click(function () {
  menu.removeClass("resp");
  menu.slideToggle("slow");
});
itemMenu.click(function () {
  if(resp){
    menu.slideToggle("slow");
  }
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
var atual;

botaoServ.click(function(){
  modal.removeClass("not");
});

adequacao.click(function(){
  title.html("ADEQUAÇÃO TARIFÁRIA");
  atual="ADEQUAÇÃO TARIFÁRIA";
  paragrafo1.html("O serviço consiste na readequação do quadro tarifário de energia elétrica do consumidor visando reduzir o consumo de energia elétrica e consequentemente diminuir as despesas mensais.");
});

calculo.click(function(){
  title.html("CÁLCULO LUMINOTÉCNICO");
  atual="CÁLCULO LUMINOTÉCNICO";
  paragrafo1.html("Com este serviço, nosso cliente terá o mais adequado projeto de iluminação artificial em ambientes internos e externos, visando melhor uso da iluminação ambiente, maior conforto para os que circulam pelo local, melhor distribuição dos pontos de iluminação e uso eficiente das lâmpadas, garantindo assim sua melhor utilização e maior vida útil.");

});

correcao.click(function(){
  title.html("CORREÇÃO DO FATOR DE POTÊNCIA");
  atual="CORREÇÃO DO FATOR DE POTÊNCIA";
  paragrafo1.html("Este serviço resume-se a projetar banco de capacitores para otimizar o sistema elétrico, evitar o surgimento de harmônicos na rede, evitar problemas com equipamentos instalados no local, garantir melhor dimensionamento de condutores.");

});

eficiencia.click(function(){
  title.html("EFICIÊNCIA ENERGÉTICA");
  atual="EFICIÊNCIA ENERGÉTICA"
  paragrafo1.html("A Watt Consultoria fornece ao cliente uma otimização no uso dos equipamentos e no consumo de energia elétrica garantindo qualidade e eficiência. Incluem-se no serviço: Análise tarifária, levantamento e análise do sistema elétrico, elaboração de plano de utilização dos equipamentos, análise de conforto térmico (apenas para ar-condicionado).");

});

projeto.click(function(){
  title.html("PROJETO DE INSTALAÇÕES ELÉTRICAS");
  atual="PROJETO DE INSTALAÇÕES ELÉTRICAS";
  paragrafo1.html("Visando segurança, qualidade e adequação às normas brasileiras de segurança, nosso serviço de instalações elétricas propõe verificação e atualização do projeto elétrico, correção de falhas no sistema elétrico (caso o mesmo seja de um estabelecimento antigo), alocação de pontos de iluminação, dimensionamento de eletrodutos e cabos de alimentação, determinação de quadros e equipamentos de proteção, execução e acompanhamento do projeto.");

});

vistoria.click(function(){
  title.html("VISTORIA ELÉTRICA");
  atual="VISTORIA ELÉTRICA";
  paragrafo1.html("Realiza-se elaboração de um laudo técnico apresentando a avaliação e determinando a atual situação a qual se encontram as instalações elétricas do cliente. O escopo do serviço consiste em analisar os componentes do sistema elétrico, qualificá-los e identificar quais as necessidades para que sejam feitas as correções.");

});

var botaoModal = $("#botaoModal");
var nomeModal = $("#nomeModal");
var emailModal = $("#emailModal");
var telefoneModal = $("#telefoneModal");
var botao = $("#submit");
var nome = $("#nome");
var email = $("#email");
var telefone = $("#telefone");
var assunto = $("#assunto");
var mensagem = $("#mensagem");

botaoModal.click(function() {
    nome.value = nomeModal.val();
    email.value = emailModal.val();
    telefone.value = telefoneModal.val();
    assunto.value = atual;
    mensagem.value = atual + "  :  REQUEST BY MODAL";
    botao.click();
});

botao.click(function() {
    console.log("click");
});
var tempo=0;

var carrossel1H = false;
var carrossel2H = false;
var carrossel3H = false;

$("#carrosselInicial").hover(function(){
  carrossel1H = true;
},function(){
  carrossel1H = false;
});

$(".carrosselMembros").hover(function(){
  carrossel2H = true;
},function(){
  carrossel2H = false;
});

$(".carrosselDepoimentos").hover(function(){
  carrossel3H = true;
},function(){
  carrossel3H = false;
});

setInterval(function(){
  if(carrossel1H || carrossel2H || carrossel3H){
    tempo=0;
  }
  else{
    tempo=tempo+1;
  }
  if(tempo>=400){
    tempo=0;
    plusSlides(1)
    plusSlidesDepoimentos(1)
    plusSlidesMembros(1);
  }
  console.log($(document).scrollTop());
  wid = $(window).width();
  hei = $(window).height();
  if((wid!=widAn)||(hei!=heiAn)){
    verificaRes();
    widAn=wid;
    heiAn=hei;
  }
},10);

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});