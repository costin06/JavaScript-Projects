

// declara culorile pentru background
var rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];

// ataseaza un event listener la elementul "button"
var btn =document.getElementById("button");
btn.addEventListener("click",change);
// declara event handler-ul  
function change() {
 document.body.style.background=rainbow[Math.floor(Math.random()*(rainbow.length-1))];

}