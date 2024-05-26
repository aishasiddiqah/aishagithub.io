document.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > 0){
      header.classList.add('change')
  }
  else{
      header.classList.remove('change')
  }
}
);