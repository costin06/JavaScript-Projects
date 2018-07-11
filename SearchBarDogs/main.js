var search = document.getElementById("search");
var rowDogs = document.getElementById("dogs");


search.addEventListener("keyup", function () {
    
    if(search.value.length>1){
    arrFilter(this.value);
    }
});

function arrFilter(query) {
    var fBreeds = breeds.filter(element => element.indexOf(query) !== -1);
    createEndPoint(fBreeds);
}

function createEndPoint(fBreeds) {

    const end = [];
    fBreeds.forEach(element => {
        var promise = fetch("https://dog.ceo/api/breed/" + element + "/images")
            .then(res => res.json());
        end.push(promise);
    });
    Promise.all(end)
        .then(values => {
            var final = concatRes(values);
            final = randomElements(final, 8);

            printImages(final);
        });
}


function printImages(arr) {
    var html = "";
    arr.forEach(item => {
        reg = /[\w-]+(?=\/n)/g;
        let rasa = item.match(reg);
        html += '<div class="col-md-3"><img src="' + item + '" class="img-fluid">';
        html += '<br>' + (rasa ? rasa : rasa[0]) + '</div>';
    })
    rowDogs.innerHTML = html;


}

function randomElements(arr1, n) {

    var imageArr = [];
    for (var i = 0; i < n; i++) {
        let rand = arr1[Math.floor(Math.random() * arr1.length)];
        if (rand !== null && typeof rand !== 'undefined') {
            imageArr.push(rand);
        }
    }

    return imageArr;
}

function concatRes(values) {

    var finalArr = [];

    values.forEach(element => {
        element.message
        finalArr = finalArr.concat(element.message);
    });

    return finalArr;
}