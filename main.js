var acc = document.getElementsByClassName("button");
	var i;

	for (i = 0; i < acc.length; i++) {
 		acc[i].addEventListener("click", function() {
    		this.classList.toggle("active");
    		var panel = this.nextElementSibling;
    		if (panel.style.display === "block") {
     			panel.style.display = "none";
    		} else {
      			panel.style.display = "block";
    		}
  		});
	}
		
	var acc = document.getElementsByClassName("button");
	var i;

	for (i = 0; i < acc.length; i++) {
 		acc[i].addEventListener("click", function() {
    		this.classList.toggle("active");
    		var panel = this.nextElementSibling;
    		if (panel.style.maxHeight) {
      			panel.style.maxHeight = null;
    		} else {
      			panel.style.maxHeight = panel.scrollHeight + "px";
    		}
  		});
	}
	
	let slideIndex = 1;
	showSlides(slideIndex);

	// Next/previous controls
	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}

	// Thumbnail image controls
	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	function showSlides(n) {
	  let i;
	  let slides = document.getElementsByClassName("mySlides");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	    slides[i].style.display = "none";
	  }
	  slides[slideIndex-1].style.display = "block";
	  dots[slideIndex-1].className += " active";
	}