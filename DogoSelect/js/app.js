/**
 * RESURSE:
 * imagine random: https://dog.ceo/api/breeds/image/random
 * toate rasele: https://dog.ceo/api/breeds/list
 * imagine random dintr-o rasa anume: https://dog.ceo/api/breed/hound/images/random
 */

const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

// PAS 1 - obtinem informatii despre o imagine random si 
// exploram functionalitatea de baza a fetch

//parm1= param1 : param1:"something"

// PAS 2 - obtinem url-ul unei imagini random si o printam
fetch('https://dog.ceo/api/breeds/image/random')
.then(response=>response.json())
.then(function (data){
    generateImage(data.message);
})
// PAS 3 - obtinem lista de rase si completam lista de optiuni a selectului
// Ce tip de data obtinem prin parsarea raspunsului?
fetch('https://dog.ceo/api/breeds/list')
.then(response =>response.json())
.then(function (data){
    generateOptions(data.message);
})

// PAS 4 - obtinem o imagine in functie de rasa selectata
// 4.1 - cream un event listner pe <select> care sa reactioneze la schimbarea optiunii
//       (valoarea unui <select> se obtine din proprietatea .value)
select.addEventListener("change",onChanged);
// 4.2 - cream event handler-ul: functie care primeste numele rasei si face schimbari in DOM
//     - obtinem de la API o imagine random din rasa respectiva
//     - afisam imaginea respectiva in locul imaginii initiale; 
//       ii schimbam si alt-ul si title-ul 
// 4.3 - mai punem un event listner, care sa reactioneze la click in <div>-ul cu clasa .card
//       folosim acelasi event handler ca mai sus ca sa afisam o alta imagine random
//       din rasa selectata 
card.addEventListener("click",onChanged)


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
/**
 * generateImage
 * Afiseaza o imagine in interiorul div-ului cu clasa .card 
 *
 * 
 * @param {string} src - URL-ul imaginii
 */
function generateImage(src){
 var img= document.createElement("img");
 img.id="imgId";
 img.src=src;
 card.appendChild(img);

}


/**
 * generateOptions
 * Completeaza optiunile din <select> cu rasele obtinute de la API
 * 
 * @param {Array} data - lista de rase
 */
function generateOptions(data){
     data.forEach(element => {
       var op= document.createElement("option");
       op.value=element;
       op.innerText=element;
       select.appendChild(op);
    });
  
}


// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
function onChanged(){
    var name = select.value;
    fetch('https://dog.ceo/api/breed/'+name +'/images/random')
    .then(response=>response.json())
    .then(function (data){
        var image= document.getElementById("imgId");
       image.src=data.message;    
    });


}

// seteaza un event listner pentru schimbarea optiunii din <select>

// seteaza un event listner pentru click in interiorul div-ului cu clasa .card

// ------------------------------------------
//  POST DATA
// ------------------------------------------

