/*                  1º CARROSSEL              */
var slideIndex = 1;
showSlides(slideIndex);
window.location = "#pg1";

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