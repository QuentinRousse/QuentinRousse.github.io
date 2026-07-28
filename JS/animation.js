const background = document.querySelector(".background-circle");

window.addEventListener("scroll", function(){

    const scroll = window.scrollY;

    background.style.transform =
        `translateY(${scroll * (-0.2)}px)`;

});