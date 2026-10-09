document.addEventListener("DOMContentLoaaded"), function (){

    alert("Shop Just JvaSript is working!");
    console.log("Welcome to Shop Just!");

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    if(menuButton && navigation) {

        menuButton.addEventListener("click", function (){
            navigation.classList.toggle("active");
        });
    }

    const contactForm = document.querySelector(".contact-form");

    if (contactForm){
        contactForm.addEventListener("submit", function (event){
            event.preventionDefault();

            alert("Thank you for contacting Shop Just!");

            contactForm.reset();
        });
    }
    
});