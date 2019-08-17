`use strict`;

//-----link event listeners----

function bioLink() {
    $(`.navbar`).on("click", ".bio", function(event){
        event.preventDefault();
        window.alert("it's working!!");
        bioAutoScroll();
    });
}

function projectLink() {
    $(`.project`).click(function(event) {
        event.preventDefault();
        projectsAutoScroll();   
    });
}

//-----autoscroll functions------
function bioAutoScroll() {
    $('html, body').animate({
        scrollTop: $(`.projSection`).offset().top
    }, 1000);
}

function projectsAutoScroll() {

}

function contactAutoScroll() {

}


//-------startup functions------
function runPortfolioPage() {
    bioLink();
    projectLink();
}

$(runPortfolioPage);