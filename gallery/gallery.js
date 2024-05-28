//function to change the header when the page is scrolled
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
  
    if (window.scrollY > 0){ //the header will change once the user scrolls the page
        header.classList.add('change')
    }
    else{ //the header will return back once the user scrolls back up
        header.classList.remove('change')
    }
}
);
  
  //function for scrolling all the way to the top by pressing a button
function goBackUp() {
    window.scrollTo(0,0);
}
  
  //function for enabling and disabling dark mode
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark");
}

//for the popup images in the gallery (Lightbox)
var slideIndex = 1;
showSlide(slideIndex);

function openLightbox() { //function for enabling the lighbox (the popup wil appear)
  document.getElementById('Lightbox').style.display = 'block';
}

function closeLightbox() { //function for closing the lighbox (the popup wil disappear)
  document.getElementById('Lightbox').style.display = 'none';
}

function changeSlide(n) { //function for switching between slides
	showSlide(slideIndex += n);
}

function toSlide(n) { //function for going to the next slide
	showSlide(slideIndex = n);
}

function showSlide(n) { //function detailing the location of the next slide and the previous slide

  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');

  if (n > slides.length) {
    slideIndex = 1;	
  }
  
  if (n < 1) {
  	slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (let i = 0; i < modalPreviews.length; i++) {
      modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  }
  
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
}