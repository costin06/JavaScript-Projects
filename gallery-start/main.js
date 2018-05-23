var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

/* Begin looping through images */
//...your code here
for(var i=1;i<=5;i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg'); // change here
  thumbBar.appendChild(newImage);

  //attach an event listener to each new element
  newImage.onclick = function(e) {
    var newsrc = e.target.getAttribute('src');
    displayedImage.setAttribute('src', newsrc);
  }
  };



