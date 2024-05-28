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


function goBackUp() {
  window.scrollTo(0,0);
}

//dark mode
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark");
}