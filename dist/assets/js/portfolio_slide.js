
// Projects
const projects1 = ['p1', 'Lorem Ipsum', 'p3', 'p4', 'p5']
const projects2 = ['t1', 't2', 't3']
const projects3 = ['s1', 's2', 's3', 's4', 's5']

// Descriptions
const d1 = ['mambru se fue a la guerra', 
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus
suscipit veniam consequuntur veritatis sit earum consequatur? Corporis voluptatibus soluta
tenetur suscipit sint iusto nulla pariatur, nihil dolorum recusandae aperiam?`
, 'wqerqwer', 'pzxcvzxcv']
const d2 = [
    'I will command a great and terrible army, and we will sail to a billion worlds. We will sail until every light has been extinguished',
     'You are strong, child, but I am beyond strength', 
     'I am the end, and I have come for you, Finn.']
const d3 = ['Befor there was time', 'Before there was everything', 'there were monsters', '-The lich', 'Adventure time']

// Controllers for movement
let amountMoved1 = 1;
let amountMoved2 = 1;
let amountMoved3 = 1;
let portfolioSelected = 0;

// Image routes //
const imgRouteCover = "/dist/assets/img/portfolio/cover/GUS_About_us_"
const imgRouteContent = "/dist/assets/img/portfolio/content/GUS_About_us_"

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
        node.appendChild(span)


        // Img for inner slides
        const node_img = document.createElement("img");
        node_img.src = imgRouteCover + projects1.indexOf(project) + '.png';
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
        node.appendChild(span)


        // Img for inner slides
        const node_img = document.createElement("img");
        node_img.src = imgRouteCover + projects2.indexOf(project) + '.png';
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
        node.appendChild(span)


        // Img for inner slides
        const node_img = document.createElement("img");
        node_img.src = imgRouteCover + projects3.indexOf(project) + '.png';
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
    if (amountMoved1 > projects1.length - 2) amountMoved1 = -1;
    amountMoved1 += 1;
    innerslides1.style.transform = 'translate(-' + (80 * amountMoved1 / projects1.length) + '%, 0%)'
    // console.log(amountMoved1)
    setOnInfoField();
}
const innerSlideLeft1 = () => {
    if (amountMoved1 < 1) amountMoved1 = 1;
    amountMoved1 -= 1;
    innerslides1.style.transform = 'translate(-' + (80 * amountMoved1 / projects1.length) + '%, 0%)'
    // console.log(amountMoved1)
    setOnInfoField();
}

const innerSlideRight2 = () => {
    if (amountMoved2 > projects2.length - 2) amountMoved2 = -1;
    amountMoved2 += 1;
    innerslides2.style.transform = 'translate(-' + (80 * amountMoved2 / projects2.length) + '%, 0%)'
    // console.log(amountMoved2);
    setOnInfoField();
}
const innerSlideLeft2 = () => {
    if (amountMoved2 < 1) amountMoved2 = 1;
    amountMoved2 -= 1;
    innerslides2.style.transform = 'translate(-' + (80 * amountMoved2 / projects2.length) + '%, 0%)'
    // console.log(amountMoved2);
    setOnInfoField();
}

const innerSlideRight3 = () => {
    if (amountMoved3 > projects3.length - 2) amountMoved3 = -1;
    amountMoved3 += 1;
    innerslides3.style.transform = 'translate(-' + (80 * amountMoved3 / projects3.length) + '%, 0%)'
    // console.log(amountMoved3);
    setOnInfoField();
}
const innerSlideLeft3 = () => {
    if (amountMoved3 < 1) amountMoved3 = 1;
    amountMoved3 -= 1;
    innerslides3.style.transform = 'translate(-' + (80 * amountMoved3 / projects3.length) + '%, 0%)'
    // console.log(amountMoved3);
    setOnInfoField();
}

const setOnInfoField = (project, inner) => {
    if (portfolioSelected == 0) {
        tittle.innerHTML = projects1[amountMoved1]
        p.innerHTML = d1[amountMoved1]
        img.src =  imgRouteContent + amountMoved1 + '.png';
    }

    if (portfolioSelected == 1) {
        tittle.innerHTML = projects2[amountMoved2]
        p.innerHTML = d2[amountMoved2]
        img.src =  imgRouteContent + amountMoved2 + '.png';
    }

    if (portfolioSelected == 2) {
        tittle.innerHTML = projects3[amountMoved3]
        p.innerHTML = d3[amountMoved3]
        img.src =  imgRouteContent + amountMoved3 + '.png';
    }
}

const setPressedStyle = (index) => {
    let generalButtons = document.getElementsByClassName('portfolio-slider-projects-btn');
    generalButtons[0].classList.remove('btn-general-pressed')
    generalButtons[1].classList.remove('btn-general-pressed')
    generalButtons[2].classList.remove('btn-general-pressed')
    generalButtons[index].classList.add('btn-general-pressed')
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
