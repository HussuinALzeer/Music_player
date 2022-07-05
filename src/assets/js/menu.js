
function active() {
   
   var menu = document.querySelector(".menu");
   var side_nav = document.querySelector(".side-nav");
   
   menu.classList.add("active");
   side_nav.classList.add("active")
}

function disactive() {

   
   var side_nav = document.querySelector(".side-nav");
   
   side_nav.classList.remove("active")
}





$(document).ready(function(){
   const music = new Audio('1.mp3');

music.play();
})