var totalSlides = 1;

function mostrarSlide(slide) {
  var i;
  var slides = document.getElementsByClassName("slide");

  if (slide > slides.length) {
    totalSlides = 1
  };

  if (slide < 1) {
    totalSlides = slides.length
  };

  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("mostrar");
  };

  slides[totalSlides-1].classList.add("mostrar");
}

mostrarSlide(totalSlides);

function mudaSlide(slide) {
  mostrarSlide(totalSlides += slide);
}

var video = document.getElementById("video");
var btn = document.getElementById("mostrarVideo");
var fechar = document.getElementsByClassName("fechar")[0];

btn.onclick = function(e) {
  e.preventDefault();
  video.style.display = "block";
}

fechar.onclick = function() {
  video.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == video) {
    video.style.display = "none";
  }
}
