`use strict`;

//-----link event listeners----

function bioLink() {
    $(`.navbar`).on("click", ".bio", function(event){
        event.preventDefault();
        checkForDropdownShow()
        autoScroll('.bioSection')

    });
}

function projectLink() {
    $(`.navbar`).on("click", ".projects", function(event) {
        event.preventDefault();
        checkForDropdownShow()
        autoScroll('.projSection')   
    });
}

function contactLink() {
    $(`.navbar`).on("click", ".contact", function(event) {
        event.preventDefault();
        checkForDropdownShow()
        autoScroll('.footer') 
        
    });  
}

function hamburgerClick() {
    $(`.navbar`).on("click", ".hamburger", function(event){
        event.preventDefault();
        toggleDropdownClass();
    });
}

function dropdownLoseFocus() {
    $('.dropdown').focusout(function(event) {
        console.log("Focusout initiated");
        checkForDropdownShow();
    });
}

//-----autoscroll functions------

function autoScroll(className) {
    let elementPosition = $(className).offset().top;
    let pagePosition = $(`.header`).height();
    let xCoord = elementPosition - pagePosition;
    
    $('html, body').animate({scrollTop: xCoord}, 1000);
}

//-------mobile menu functions-------------

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleDropdownClass() {
    $('.dropdown-content').toggleClass('show');
}

function checkForDropdownShow() {
    if ($('.dropdown-content').hasClass('show')==true) {
        toggleDropdownClass();
    }
}


//-------startup functions------
function runPortfolioPage() {
    bioLink();
    projectLink();
    contactLink();
    hamburgerClick();
    dropdownLoseFocus();
}

$(runPortfolioPage);