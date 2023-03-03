

// Buttons //
const grantWritingBtn = document.getElementById("granttWritingBtn");
const communicationsBtn = document.getElementById("communicationsBtn");
const designBtn = document.getElementById("designBtn");
const projectManagementBtn = document.getElementById("projectManagementBtn");
const btnBack = document.getElementsByClassName("btn-back");

// Items //
const servicesOptions = document.getElementById("services-options");
const servicesScroll = document.getElementById("services-scroll");

// Categories //
const grantWriting = document.getElementById("grant-writing");
const communications = document.getElementById("communications");
const design = document.getElementById("design");
const projectManagement = document.getElementById("project-management");

// Get Project Managment Links //
let Plink1 = document.getElementById("p-services-1");
let Plink2 = document.getElementById("p-services-2");
let Plink3 = document.getElementById("p-services-3");

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
    console.log(window.localStorage.getItem("service" + "projects"));
}

projectManagementBtn.addEventListener("click", () => {
    servicesOptions.classList.add("services-options__up");
    servicesScroll.style.marginLeft = "0%";
})

grantWritingBtn.addEventListener("click", () => {
    servicesOptions.classList.add("services-options__up");
    servicesScroll.style.marginLeft = "-100%";
});

communicationsBtn.addEventListener("click", () => {
    servicesOptions.classList.add("services-options__up");
    servicesScroll.style.marginLeft = "-200%";
})

designBtn.addEventListener("click", () => {
    servicesOptions.classList.add("services-options__up");
    servicesScroll.style.marginLeft = "-300%";
})



for (let i = 0; i < 4; i++) {
    btnBack[i].addEventListener("click", () => {
        servicesOptions.classList.remove("services-options__up");
        servicesScroll.style.marginLeft = "0%";
    })
}

// Program Management //
Plink1.addEventListener("click", () => { setProjectToOpen(0, 3) })
Plink2.addEventListener("click", () => { setProjectToOpen(0, 2) })
Plink3.addEventListener("click", () => { setProjectToOpen(0, 4) })

// Grant Writing //
Glink1.addEventListener("click", () => { setProjectToOpen(1, 1) })
Glink2.addEventListener("click", () => { setProjectToOpen(1, 2) })
Glink3.addEventListener("click", () => { setProjectToOpen(1, 4) })

// Communications //
Clink1.addEventListener("click", () => { setProjectToOpen(2, 3) })
Clink2.addEventListener("click", () => { setProjectToOpen(2, 4) })
Clink3.addEventListener("click", () => { setProjectToOpen(2, 5) })

// Digital & Print //
Dlink1.addEventListener("click", () => { setProjectToOpen(3, 5) })
Dlink2.addEventListener("click", () => { setProjectToOpen(3, 3) })
Dlink3.addEventListener("click", () => { setProjectToOpen(3, 4) })

