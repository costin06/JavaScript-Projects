var butonSelector=document.querySelector("#but"); //selecteaza butonul
var item=document.getElementById("inp");   ///select input
var items = document.querySelector("ul"); //select list
butonSelector.addEventListener("click",AddButtons)  
    
function AddButtons(){
    var addedItem=document.createElement("li");
    addedItem.textContent=item.value;
    items.appendChild(addedItem);
    var button = document.createElement("button");
    button.innerHTML = "delete";
    button.setAttribute("id","del");  
    button.addEventListener("click",Delete);
    addedItem.appendChild(button);
    var button2 = document.createElement("button");
        button2.innerHTML = "edit";
        button2.setAttribute("id","ed"); 
        button2.addEventListener("click",Edit)  
        addedItem.appendChild(button2);
    }
  
    function Delete(){                  //     for deleting item;
        var parent=this.parentNode;
        parent.parentNode.removeChild(parent);
        condole.log("deleted");
    }
    function Edit(){
        var parent=this.parentNode;
        var input=document.createElement("input");
        parent.firstChilde.textContent="";
       // console.log(parent.firstCild);
       //  parent.parentNode.innerHTML=input;
    }