`use strict`;

//-----link event listeners----

function bioLink() {
    $(`.navbar`).on("click", ".bio", function(event){
        event.preventDefault();
        autoScroll('.bioSection') 
    });
}

function projectLink() {
    $(`.navbar`).on("click", ".projects", function(event) {
        event.preventDefault();
        autoScroll('.projSection')   
    });
}

function contactLink() {
    $(`.navbar`).on("click", ".contact", function(event) {
        event.preventDefault();
        window.alert('!!');
        autoScroll('.footer') 
        
    });  
}

//-----autoscroll functions------

function autoScroll(className) {
    let elementPosition = $(className).offset().top;
    let pagePosition = $(`.header`).height();
    let xCoord = elementPosition - pagePosition;
    
    $('html, body').animate({scrollTop: xCoord}, 1000);
}


//-------startup functions------
function runPortfolioPage() {
    bioLink();
    projectLink();
    contactLink();
}

$(runPortfolioPage);