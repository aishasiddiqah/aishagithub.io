var index = 1;
show(index);

function open() {
  document.getElementById('lightbox').style.display = 'block';
}

function close() {
  document.getElementById('lightbox').style.display = 'none';
}

function change(n) {
	show(index += n);
}

function nextSlide(n) {
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