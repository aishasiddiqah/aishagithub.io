var index = 1;
show(index);

function open() { //CHANGE LIGHTBOX TO GALLERY
  document.getElementById('lightbox').style.display = 'block';
}

function close() {
  document.getElementById('lightbox').style.display = 'none';
}

function change(n) { // CHANGE NAME TO CURRENT SLIDE 
	show(index += n);
}

function nextSlide(n) { //NEXT SLIDE
	show(index = n);
}

function show(n) {

  const slides = document.getElementsByClassName('slide');
  let largePreviews = document.getElementsByClassName('large-preview');

  if (n > slides.length) {
    index = 1;	
  }
  
  if (n < 1) {
    index = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (let i = 0; i < largePreviews.length; i++) {
      largePreviews[i].className = largePreviews[i].className.replace(' active', '');
  }
  
  slides[index - 1].style.display = 'block';
  largePreviews[index - 1].className += ' active';
}