function showImage(currIndex){
    // verifica daca se depaseste marginea / daca da merge in cerc
    if (currIndex === images.length){
        currIndex = 0;
    } else if(currIndex === -1){
        currIndex = images.length-1;
    }    

    //afiseaza imaginea dorita
    img.src = 'img/' + images[currIndex].src;
    img.alt = images[currIndex].alt;
    img.title = images[currIndex].alt;

    // if(currIndex === images.length - 1){
    //     //forward.hidden = true; 
    // } else {        
    //     //forward.hidden = false;
    // }
    
    //actualizeaza variabila globala cu valoarea locala
    index = currIndex;
    function showImage(currIndex){
        // verifica daca se depaseste marginea / daca da merge in cerc
        if (currIndex === images.length){
            currIndex = 0;
        } else if(currIndex === -1){
            currIndex = images.length-1;
        }    
    
        //afiseaza imaginea dorita
        img.src = 'img/' + images[currIndex].src;
        img.alt = images[currIndex].alt;
        img.title = images[currIndex].alt;
    
        // if(currIndex === images.length - 1){
        //     //forward.hidden = true; 
        // } else {        
        //     //forward.hidden = false;
        // }
        
        //actualizeaza variabila globala cu valoarea locala
        index = currIndex;
    }