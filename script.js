const menuToggle = document.querySelector('.menu-toggle input');
const nav =document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

// var loading = document.getElementById("loading");

// window.addEventListener("load", function(){
//     loading.style.display="none";
// })
// setTimeout(() => {

// }, 4000)
