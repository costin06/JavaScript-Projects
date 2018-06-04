var addItemButton = document.querySelector("#but"); //selecteaza buton
var inputSelector = document.getElementById("inp"); ///select input
var listSelector = document.querySelector("ul"); //select list
var arrayList = [];
addItemButton.addEventListener("click", AddButtons);
//if the enter key has been pressed AddButtons has triggered
inputSelector.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        AddButtons();
    }
})

//Add Delete and Edit Buttons
function AddButtons() {
    var spanChilde = document.createElement("span");
    spanChilde.textContent = inputSelector.value;
    var addedItem = document.createElement("li"); //create list element
    //Create and set attribute for Delete button
    var delButton = document.createElement("button");
    delButton.innerHTML = "delete";
    delButton.setAttribute("id", "del");
    delButton.addEventListener("click", Delete);
    delButton.style.marginLeft = "4px";

    //Create and set attribute for Edit button
    var editButton = document.createElement("button");
    editButton.innerHTML = "edit";
    editButton.setAttribute("id", "ed");
    editButton.addEventListener("click", Edit)
    editButton.style.marginLeft = "4px";

    //Create and set attribute for Submit button
    var submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";
    submitButton.setAttribute("id", "sub");
    submitButton.addEventListener("click", Submit)
    submitButton.style.marginLeft = "4px";

    //Append span to li
    addedItem.appendChild(spanChilde);

    //Append all buttons to li
    addedItem.appendChild(delButton);
    addedItem.appendChild(editButton);
    addedItem.appendChild(submitButton);
    listSelector.appendChild(addedItem);
    inputSelector.value = "";

}
//function for deleting a li
function Delete() {
    var parent = this.parentNode;
    parent.parentNode.removeChild(parent);
}

//function for editing a li
function Edit(event) {
    var parent = this.parentNode;
    var input = document.createElement("input");
    parent.firstChild.style.display = "none";
    input.value=parent.firstChild.textContent;
    parent.insertBefore(input, parent.firstChild);
    input.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) { //verification if key ENTER is press
            var tempValue = input.value;
            parent.removeChild(parent.firstChild);
            var tempSpan = document.createElement("span");
            tempSpan.textContent = tempValue;
            parent.insertBefore(tempSpan, parent.firstChild);
            parent.firstChild.style.display = "inline";

        }
    });
}

//function for submiting a li
function Submit() {
    var parent = this.parentNode;
    var finalList = document.getElementById("finalList");
    var liElement = document.createElement("li");
    liElement.innerHTML = parent.firstChild.innerHTML;
    arrayList.push(liElement);
    arrayList.sort(function (a, b) { //sort array alfabetical
        return a.innerHTML > b.innerHTML ? 1 : -1;
    })
    arrayList.forEach(function (element) { //append element from array to li
        finalList.appendChild(element);
    })
    list.removeChild(this.parentNode); //after we press "Submit" button,the current elemen will be deleted


}