

// Buttons //
const grantWritingBtn = document.getElementById("granttWritingBtn");
const communicationsBtn = document.getElementById("communicationsBtn");
const designBtn = document.getElementById("designBtn");
const fourthBtn = document.getElementById("fourthBtn");
const btnBack = document.getElementsByClassName("btn-back");

// Items //
const servicesOptions = document.getElementById("services-options");
const servicesScroll = document.getElementById("services-scroll");

// Categories //
const grantWriting = document.getElementById("grant-writing");
const communications = document.getElementById("communications");
const design = document.getElementById("design");
const fourth = document.getElementById("fourth");

// Get Grant Writting links for projects
let Glink1 = document.getElementById("g-services-1")
let Glink2 = document.getElementById("g-services-2")
let Glink3 = document.getElementById("g-services-3")
// Get communication links for projects
let Clink1 = document.getElementById("c-services-1")
let Clink2 = document.getElementById("c-services-2")
let Clink3 = document.getElementById("c-services-3")
// Get Digital links for projects
let Dlink1 = document.getElementById("d-services-1")
let Dlink2 = document.getElementById("d-services-2")
let Dlink3 = document.getElementById("d-services-3")

const setProjectToOpen = (service, project) => {
    window.localStorage.setItem("service", service)
    window.localStorage.setItem("project", project)
}

grantWritingBtn.addEventListener("click", ()=>{
    servicesOptions.classList.add("services-options__up");
    servicesScroll.style.marginLeft = "0%";
});

communicationsBtn.addEventListener("click", ()=>{
    servicesOptions.classList.add("services-options__up");
    servicesScroll.style.marginLeft = "-100%";
})

designBtn.addEventListener("click", ()=>{
    servicesOptions.classList.add("services-options__up");
    servicesScroll.style.marginLeft = "-200%";
})

fourthBtn.addEventListener("click", ()=>{
    servicesOptions.classList.add("services-options__up");
    servicesScroll.style.marginLeft = "-300%";
})


for(let i = 0; i < 4; i++){
    btnBack[i].addEventListener("click", ()=>{
        servicesOptions.classList.remove("services-options__up");
        servicesScroll.style.marginLeft = "0%";
    })
}

Glink1.addEventListener("click", ()=>{setProjectToOpen(0, 1)})
Glink2.addEventListener("click", ()=>{setProjectToOpen(0, 2)})
Glink3.addEventListener("click", ()=>{setProjectToOpen(0, 3)})

Clink1.addEventListener("click", ()=>{setProjectToOpen(1, 1)})
Clink2.addEventListener("click", ()=>{setProjectToOpen(1, 2)})
Clink3.addEventListener("click", ()=>{setProjectToOpen(1, 3)})

Dlink1.addEventListener("click", ()=>{setProjectToOpen(2, 1)})
Dlink2.addEventListener("click", ()=>{setProjectToOpen(2, 2)})
Dlink3.addEventListener("click", ()=>{setProjectToOpen(2, 3)})
