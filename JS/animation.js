const background = document.querySelector(".background-circle");

if(background){

    window.addEventListener("scroll", function(){

        background.style.transform =
            `translateY(${window.scrollY * (-0.2)}px)`;

    });

}