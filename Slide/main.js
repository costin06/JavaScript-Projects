

var images = [
    { "src": "img1.jpg", "alt": "Nature" },
    { "src": "img2.jpg", "alt": "Fjords" }, 
    { "src": "img3.jpg", "alt": "Mountains" },
    { "src": "img4.jpg", "alt": "Lights" }
];

for(var i =0;i<images.length-1;i++)
{
    console.log(images[i].alt);
    console.log(images[i].src);
}
var idx=0;
function showImage(ab){
   var x = document.getElementById("slide");
   if(ab===images.length)
   {
    document.getElementById("inainte").hidden=true;
       ab=0;
   }
   else if(ab===-1)
   {
    document.getElementById("inapoi").hidden=true;

       ab=images.length-1;
   }
      x.alt=images[ab].alt;
      x.src=images[ab].src;
      idx=ab;
   
}
var c=0;
function meniuBilute(){
for(x=1;x<images.length+1;x++)
{
   var a= document.querySelector("div");
   var y=document.createElement("span");
   y.className="biluta";
   y.id="biluta"+x;
   a.appendChild(y);
   document.addEventListener('click',factory(x));

   c=x;
}
}
for(el in document.querySelector("div"))
{   
    
}

function factory(idx){
    return showImage(idx);
}
window.addEventListener('onload',showImage(1));
window.addEventListener('onload',meniuBilute());
document.getElementById("inainte").addEventListener('click',function (){showImage(++idx)});
document.getElementById("inapoi").addEventListener('click',function (){showImage(--idx)});
    