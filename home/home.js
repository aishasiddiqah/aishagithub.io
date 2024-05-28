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