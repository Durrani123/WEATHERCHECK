const navButton = document.getElementById('navButton');
const ul = document.querySelector('ul');

navButton.addEventListener('click', function() {
    ul.classList.add('transition-all', 'ease-in', 'duration-500');
    ul.classList.toggle('opacity-100');
    if (navButton.classList.contains('fa-times')) {
        navButton.classList.remove('fa-times');
        navButton.classList.add('fa-icon');
      }
      else{
        navButton.classList.remove('fa-icon');
        navButton.classList.add('fa-times');  
      }
});
