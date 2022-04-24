const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const close = document.getElementById("close");

hamburger.addEventListener('click', function(){
    navList.classList.add('show')
});
close.addEventListener('click', function(){
    navList.classList.remove('show')
});