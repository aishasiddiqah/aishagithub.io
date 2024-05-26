document.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > 0){
      header.classList.add('scrolled') //change scrolled name and add it as a class in css
  }
  else{
      header.classList.remove('scrolled')
  }
}
);