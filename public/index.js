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
const c=document.getElementById('c');
const f=document.getElementById('f');
const current=document.getElementById('current');
const currentValue=document.getElementById('currentValue');
c.addEventListener('click',function(){
  if(current.innerHTML!='C'){
  const temp = currentValue.innerHTML;
  const convertedTemp = ((parseFloat(temp) - 32) * 5/9).toFixed(2);
  currentValue.innerHTML = convertedTemp;
  current.innerHTML = 'C';
  } 
})
f.addEventListener('click',function(){
  if(current.innerHTML!='F'){
  const temp = currentValue.innerHTML;
  const convertedTemp = ((parseFloat(temp) * 9/5) + 32).toFixed(2);
  currentValue.innerHTML = convertedTemp;
  current.innerHTML = 'F';
  } 
})

const form = document.getElementById('myForm');
const wholeContent = document.getElementById('wholeContent');
const popUp = document.getElementById('popUp');
      
form.addEventListener('submit', function(event) {
  const city = document.querySelector('.my-input').value;
  const apiKey = 'b456cfb58c7d75ead761554bbb535f64';
  // https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b456cfb58c7d75ead761554bbb535f64&units=metric`)
  .then(response => response.json())
  .then(data => {
    if (data.cod != '200') {
      event.preventDefault();
      wholeContent.classList.add('blur-sm');
      popUp.classList.remove('pointer-events-none','opacity-0');
    }
  })
});

const buttonForm = document.getElementById('buttonForm');
buttonForm.addEventListener('click', function() {
  wholeContent.classList.remove('blur-sm');
  popUp.classList.add('pointer-events-none','opacity-0');
})
