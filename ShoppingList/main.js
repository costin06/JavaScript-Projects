var butonSelector=document.querySelector("#but");
var item=document.getElementById("inp");
var items = document.querySelector("ul");
butonSelector.onclick=function a(){
   AddDel();
   AddEdit();

}
var del=document.getElementById("del");
del.addEventListener("click",function(){
    var parent=this.parentNode;
    parent.parentNode.removeChild(parent);
    condole.log("deleted");
})
    function AddDel(){
    var addedItem=document.createElement("li");
    addedItem.textContent=item.value;
    items.appendChild(addedItem);
    var button = document.createElement("button");
    button.innerHTML = "delete";
    button.setAttribute("id","del");   
    addedItem.appendChild(button);
    }
    function AddEdit(){
        var button2 = document.createElement("button");
        button2.innerHTML = "edit";
        button2.setAttribute("id","ed");   
        addedItem.appendChild(button2);
    }
