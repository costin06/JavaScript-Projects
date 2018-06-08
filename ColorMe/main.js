function changeBackround(){
   this.style.backgroundColor="yellow";
}

document.getElementById("word").addEventListener("focus",changeBackround);
document.querySelector("input").addEventListener("focusout",function(){
 var a=this.value.toUpperCase();
 this.value=a;
})

function changeColor(color , element){
element.style.color=color;


}

document.getElementById("b1").addEventListener("click",function(){
     
    var a=document.querySelector("input").value;
  //  var c=a;
    var b= document.getElementById("s1");//.style.color=a;
    changeColor(a,b);
})

document.getElementById("b1").addEventListener("click",makeNumber(document.querySelector("input")))

function makeNumber(element){
 let i=0;
 return function(){
     element.value+=i;
     i++;
 }
}

document.querySelector("select").addEventListener("change",function(){
    var b = document.querySelector("select");
   var c= b.options[b.selectedIndex].value;

    document.getElementById("b1").style.color=c;


})