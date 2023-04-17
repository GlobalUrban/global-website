

// Phone Linsk || Call now & Get Directions //
const mobileBtn = document.getElementById("contact-mobile");
const contPopUp = document.getElementById("cont-pop-up");
const popUp = document.getElementById("pop-up");
const stopPropagation = document.getElementById("mobile-form-pop-up");


mobileBtn.addEventListener("click", ()=> {
    contPopUp.classList.toggle("mobile-pop-up__show");
    popUp.style.transform = "translateY(0%) translateX(0%)";
    popUp.style.width = "90%";
    popUp.style.height = "250px";
})

contPopUp.addEventListener("click", ()=> {
    contPopUp.classList.remove("mobile-pop-up__show");  
})


// Mobile Contact Form Pop up //
// Phone Linsk || Call now & Get Directions //
const contactBtn = document.getElementById("contact-form__mobile-btn");
const contactContPopUp = document.getElementById("contact__pop-up");
// const contactPopUp = document.getElementById("pop-up");


contactBtn.addEventListener("click", ()=> {
    contactContPopUp.classList.add("mobile-pop-up__show");
    popUp.style.transform = "translateY(0%) translateX(0%)";
    popUp.style.width = "90%";
    popUp.style.height = "250px";
})

contactContPopUp.addEventListener("click", ()=> {
    contactContPopUp.classList.remove("mobile-pop-up__show");  
})

stopPropagation.addEventListener("click", (e)=> {
    e.stopPropagation()
})



