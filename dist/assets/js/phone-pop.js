const mobileBtn = document.getElementById("contact-mobile");
const contPopUp = document.getElementById("cont-pop-up");
const popUp = document.getElementById("pop-up");
let bool = false;

mobileBtn.addEventListener("click", ()=> {
    contPopUp.classList.toggle("mobile-pop-up__show");
    popUp.style.transform = "translateY(0%) translateX(0%)";
    popUp.style.width = "90%";
    popUp.style.height = "250px";
})

contPopUp.addEventListener("click", ()=> {
    contPopUp.classList.remove("mobile-pop-up__show");  
})





