document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.greedy-nav__toggle');
  const menu = document.querySelector('.visible-links');
 
  toggle.addEventListener('click', function() {
    menu.classList.toggle('show');
    toggle.classList.toggle('close');
  });
}); 