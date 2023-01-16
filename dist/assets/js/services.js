

// Buttons //
const grantWritingBtn = document.getElementById("granttWritingBtn");
const communicationsBtn = document.getElementById("communicationsBtn");
const designBtn = document.getElementById("designBtn");
const btnBack = document.getElementsByClassName("btn-back");

// Items //
const servicesOptions = document.getElementById("services-options");
const servicesScroll = document.getElementById("services-scroll");

// Categories //
const grantWriting = document.getElementById("grant-writing");
const communications = document.getElementById("communications");
const design = document.getElementById("design");




grantWritingBtn.addEventListener("click", ()=>{
    servicesOptions.classList.add("services-options__up");
    servicesScroll.style.marginLeft = "100%";
});

communicationsBtn.addEventListener("click", ()=>{
    servicesOptions.classList.add("services-options__up");
    servicesScroll.style.marginLeft = "0%";
})

designBtn.addEventListener("click", ()=>{
    servicesOptions.classList.add("services-options__up");
    servicesScroll.style.marginLeft = "-100%";
})


for(let i = 0; i < 3; i++){
    btnBack[i].addEventListener("click", ()=>{
        servicesOptions.classList.remove("services-options__up");
        servicesScroll.style.marginLeft = "0%";
    })
}
