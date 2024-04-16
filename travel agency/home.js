let togglebar = document.querySelector('.togglebar');
let nav = document.querySelector('nav')
togglebar.addEventListener('click',()=>{
   nav.classList.toggle('active')
})