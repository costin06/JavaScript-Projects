var x=document.querySelector("#but");
x.onclick=function a(){
    var item=document.getElementById("inp");
    var items=document.querySelector("ul");
    var addedItem=document.createElement("li");
    addedItem.textContent=item.value;
    items.appendChild(addedItem);
    var button = document.createElement("button");
button.innerHTML = "delete";
items.appendChild(button);
items.setAttribute("id","del");   
}
var s=document.querySelector("#del");
s.onclick=function b(){
    var myList = document.getElementById('list');
myList.innerHTML = '';
}
    
