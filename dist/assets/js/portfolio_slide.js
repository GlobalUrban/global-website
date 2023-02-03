
// Projects
const projects1 = [
    'Valley Vista Grant Writing Services',
    'City of Bell Garden’s Grant Writing Services',
    'City of Azusa’s Calhome Program Administration and Grant Writing Services',
    'Valley Vista Grant Writing Services',
    'City of Bell Garden’s Grant Writing Services',
]
const projects2 = [
    'Stantec Stakeholder Engagement and Community Outreach Services',
    'City of Cudahy Crisis Management and Public Relations Services',
    'City of Hawaiians Gardens Community Outreach Services',
    'Stantec Stakeholder Engagement and Community Outreach Services',
    'City of Cudahy Crisis Management and Public Relations Services',
]
const projects3 = [
    'City of Huntington Park Social Media, Web Development and Graphic Design Services',
    'City of La Puente Social Media, Web Development and Graphic Designs Services',
    'City of San Luis Obispo Graphic Design and Motion Graphics Services',
    'City of Huntington Park Social Media, Web Development and Graphic Design Services',
    'City of La Puente Social Media, Web Development and Graphic Designs Services',
]

// Descriptions
const d1 = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
]
const d2 = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
]

const d3 = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
]


// Controllers for movement
let amountMoved1 = 1;
let amountMoved2 = 1;
let amountMoved3 = 1;
let portfolioSelected = 0;

// Image routes //
const imgRouteCover = "../img/portfolio/cover/GUS_About_us_"
// const imgRouteCover = "../img/portfolio/cover/Portfolio-grant-writing-client-"
const imgRouteCoverGrant = "../img/portfolio/cover/Portfolio-grant-writing-client-"
const imgRouteCoverCom = "../img/portfolio/cover/Portfolio-communications-client-"
const imgRouteCoverDig = "../img/portfolio/cover/Portfolio-design-client-"

const imgRouteContent = "../img/portfolio/content/GUS_About_us_"
const imgRouteContentGrant = "../img/portfolio/content/Portfolio-grant-writing-client-pic-"
const imgRouteContentCom = "../img/portfolio/content/Portfolio-communications-client-"
const imgRouteContentDig = "../img/portfolio/content/Portfolio-design-client-"

// Buttons for general slides
let btn1 = document.getElementById('btn-1')
let btn2 = document.getElementById('btn-2')
let btn3 = document.getElementById('btn-3')

// Buttons for inner slides
let btnl1 = document.getElementById('btn-left-1')
let btnr1 = document.getElementById('btn-right-1')

let btnl2 = document.getElementById('btn-left-2')
let btnr2 = document.getElementById('btn-right-2')

let btnl3 = document.getElementById('btn-left-3')
let btnr3 = document.getElementById('btn-right-3')


// Handlers for slides containers
let projectSlides = document.getElementById('p-slides')

let innerslides1 = document.getElementById('innerslides-1');
let innerslides2 = document.getElementById('innerslides-2');
let innerslides3 = document.getElementById('innerslides-3');

// Handlers for info
let inforContainer = document.getElementById('info-container');
let tittle = document.getElementById('info-title')
let p = document.getElementById('info-p')
let img = document.getElementById('info-img')


// Functions handlers
const projectPressed = (position, portfolio) => {
    portfolioSelected = portfolio;
    // console.log(portfolioSelected)
    projectSlides.style.transform = 'translate(' + position + '%, 0%)'
    setOnInfoField()
    setPressedStyle(portfolioSelected);
}

const fillProjectSlides = () => {
    projects1.map((project) => {
        const node = document.createElement("div");
        node.classList.add('portfolio-slider-projects-slide-innerslides-slide');
        node.id = 'iner-' + projects1.indexOf(project);
        node.style.border = 'solid';
        node.style.borderColor = 'black';

        //  span for inner text
        const span = document.createElement("span");
        span.classList.add('inner-slides-text-styles')
        const text = document.createTextNode(project)
        span.appendChild(text)
        // node.appendChild(span)


        // Img for inner slides
        const node_img = document.createElement("img");
        node_img.src = imgRouteCoverGrant + projects1.indexOf(project) + '.png';
        node_img.alt = 'Team member';
        node_img.style.objectFit = 'cover';
        node_img.style.width = '100%';
        node_img.style.height = '100%';
        node.appendChild(node_img)

        innerslides1.appendChild(node);
    })
    projects2.map((project) => {
        const node = document.createElement("div");
        node.classList.add('portfolio-slider-projects-slide-innerslides-slide');
        node.id = 'iner-' + projects2.indexOf(project);
        node.style.border = 'solid';
        node.style.borderColor = 'black';

        //  span for inner text
        const span = document.createElement("span");
        span.classList.add('inner-slides-text-styles')
        const text = document.createTextNode(project)
        span.appendChild(text)
        // node.appendChild(span)


        // Img for inner slides
        const node_img = document.createElement("img");
        node_img.src = imgRouteCoverCom + projects2.indexOf(project) + '.png';
        node_img.alt = 'Team member';
        node_img.style.objectFit = 'cover';
        node_img.style.width = '100%';
        node_img.style.height = '100%';
        node.appendChild(node_img)

        innerslides2.appendChild(node);
    })
    projects3.map((project) => {
        const node = document.createElement("div");
        node.classList.add('portfolio-slider-projects-slide-innerslides-slide');
        node.id = 'iner-' + projects3.indexOf(project);
        node.style.border = 'solid';
        node.style.borderColor = 'black';

        //  span for inner text
        const span = document.createElement("span");
        span.classList.add('inner-slides-text-styles')
        const text = document.createTextNode(project)
        span.appendChild(text)
        // node.appendChild(span)


        // Img for inner slides
        const node_img = document.createElement("img");
        node_img.src = imgRouteCoverDig + projects3.indexOf(project) + '.png';
        node_img.alt = 'Team member';
        node_img.style.objectFit = 'cover';
        node_img.style.width = '100%';
        node_img.style.height = '100%';
        node.appendChild(node_img)

        innerslides3.appendChild(node);
    })
}

const styleInnerSlidesContainer = () => {
    document.getElementById('innerslides-1').style.width = projects1.length * 100 + '%';
    document.getElementById('innerslides-1').style.transform = 'translate(-' + 80 * amountMoved1 / projects1.length + '%, 0%)'

    document.getElementById('innerslides-2').style.width = projects2.length * 100 + '%';
    document.getElementById('innerslides-2').style.transform = 'translate(-' + 80 * amountMoved2 / projects2.length + '%, 0%)'

    document.getElementById('innerslides-3').style.width = projects3.length * 100 + '%';
    document.getElementById('innerslides-3').style.transform = 'translate(-' + 80 * amountMoved3 / projects3.length + '%, 0%)'

}

const innerSlideRight1 = () => {
    // if (amountMoved1 > projects1.length - 4) btnr1.style.display = 'none'
    if (amountMoved1 > projects1.length - 3) {
        amountMoved1 = 0
    };
    amountMoved1 += 1;
    innerslides1.style.transform = 'translate(-' + (80 * amountMoved1 / projects1.length) + '%, 0%)'
    // console.log(amountMoved1)
    setOnInfoField();
}
const innerSlideLeft1 = () => {
    // if (amountMoved1 <= projects1.length - 2) btnr1.style.display = 'block'
    if (amountMoved1 == 1) {
        amountMoved1 = 4;
        btnl1.style.display = 'hidden'
    }
    amountMoved1 -= 1;
    innerslides1.style.transform = 'translate(-' + (80 * amountMoved1 / projects1.length) + '%, 0%)'
    // console.log(amountMoved1)
    setOnInfoField();
}

const innerSlideRight2 = () => {
    if (amountMoved2 > projects2.length - 3) amountMoved2 = 0;
    amountMoved2 += 1;
    innerslides2.style.transform = 'translate(-' + (80 * amountMoved2 / projects2.length) + '%, 0%)'
    // console.log(amountMoved2);
    setOnInfoField();
}
const innerSlideLeft2 = () => {
    if (amountMoved2 == 1) amountMoved2 = 4;
    amountMoved2 -= 1;
    innerslides2.style.transform = 'translate(-' + (80 * amountMoved2 / projects2.length) + '%, 0%)'
    // console.log(amountMoved2);
    setOnInfoField();
}

const innerSlideRight3 = () => {
    if (amountMoved3 > projects3.length - 3) amountMoved3 = -0;
    amountMoved3 += 1;
    innerslides3.style.transform = 'translate(-' + (80 * amountMoved3 / projects3.length) + '%, 0%)'
    // console.log(amountMoved3);
    setOnInfoField();
}
const innerSlideLeft3 = () => {
    if (amountMoved3 == 1) amountMoved3 = 4;
    amountMoved3 -= 1;
    innerslides3.style.transform = 'translate(-' + (80 * amountMoved3 / projects3.length) + '%, 0%)'
    // console.log(amountMoved3);
    setOnInfoField();
}

const setOnInfoField = (project, inner) => {
    if (portfolioSelected == 0) {
        tittle.innerHTML = projects1[amountMoved1]
        p.innerHTML = d1[amountMoved1]
        let index = amountMoved1 + 1;
        img.src = imgRouteContentGrant + index + '.png';
    }

    if (portfolioSelected == 1) {
        tittle.innerHTML = projects2[amountMoved2]
        p.innerHTML = d2[amountMoved2]
        let index = amountMoved2 + 1;
        img.src = imgRouteContentCom + index + '.png';
    }

    if (portfolioSelected == 2) {
        tittle.innerHTML = projects3[amountMoved3]
        p.innerHTML = d3[amountMoved3]
        let index = amountMoved3 + 1;
        img.src = imgRouteContentDig + index + '.png';
    }
}

const setPressedStyle = (index) => {
    let generalButtons = document.getElementsByClassName('portfolio-slider-projects-btn');
    generalButtons[0].classList.remove('btn-general-pressed')
    generalButtons[1].classList.remove('btn-general-pressed')
    generalButtons[2].classList.remove('btn-general-pressed')
    generalButtons[index].classList.add('btn-general-pressed')

    let underlinePressed = document.getElementById('underline-pressed');
    underlinePressed.classList.remove('btn-general-pressed-0')
    underlinePressed.classList.remove('btn-general-pressed-1')
    underlinePressed.classList.remove('btn-general-pressed-2')
    underlinePressed.classList.add('btn-general-pressed-' + index)
}

// Check storage for service set from services 
const checkStorage = () => {
    let serviceSet = window.localStorage.getItem("service")
    let projectSet = window.localStorage.getItem("project")
    if (serviceSet && projectSet) {
        projectPressed(-33.333 * serviceSet, serviceSet);
        setProject(serviceSet, projectSet);
    }
    window.localStorage.removeItem("service")
    window.localStorage.removeItem("project")
}

const setProject = (serviceSet, projectSet) => {
    if (serviceSet == 0) {
        if (projectSet == 2) innerSlideRight1();
        if (projectSet == 3) {
            innerSlideRight1();
            innerSlideRight1();
        }
    }
    if (serviceSet == 1) {
        if (projectSet == 2) innerSlideRight2();
        if (projectSet == 3) {
            innerSlideRight2();
            innerSlideRight2();
        }
    }
    if (serviceSet == 2) {
        if (projectSet == 2) innerSlideRight3();
        if (projectSet == 3) {
            innerSlideRight3();
            innerSlideRight3();
        }
    }
}

// Geenal buttons
btn1.addEventListener('click', () => { projectPressed(-0, 0) })
btn2.addEventListener('click', () => { projectPressed(-33.333, 1) })
btn3.addEventListener('click', () => { projectPressed(-33.333 * 2, 2) })

// Inner buttons
btnr1.addEventListener('click', innerSlideRight1)
btnl1.addEventListener('click', innerSlideLeft1)

btnr2.addEventListener('click', innerSlideRight2)
btnl2.addEventListener('click', innerSlideLeft2)

btnr3.addEventListener('click', innerSlideRight3)
btnl3.addEventListener('click', innerSlideLeft3)

window.addEventListener('load', styleInnerSlidesContainer)
window.addEventListener('load', fillProjectSlides)
window.addEventListener('load', setOnInfoField)
window.addEventListener('load', checkStorage);