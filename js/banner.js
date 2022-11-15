// --------------- Banner輪播 --------------------

var slideIndex = 1;
showSlides(slideIndex);

// Start autoplaying automatically
var autoplayInterval = setInterval(function() {

    // Get element via id and click next
    document.getElementById("next").click();
    
   
  }, 6000); // Do this every 1 second, increase this!

// Stop function added to button
function stopAutoplay() {

  // Stop the autoplay
  clearInterval(autoplayInterval);

}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


