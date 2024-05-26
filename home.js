//to change the header when the page is scrolled
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

history.back(); //for going back a page

function reload() { //for reloading pg automatically
  window.location.reload();
}