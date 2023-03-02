const test = () => {
    console.log('Testing');
}
let percentageMoved = 0;
let amountTomoveApply = 25

let slideInverval = undefined;

const handleRightArrow = (e) => {
    e.stopPropagation();
    stopOnHover();
    if (percentageMoved == -75) percentageMoved = amountTomoveApply
    percentageMoved -= amountTomoveApply;
    // slides.style.height = '100vh'
    slides.style.transform = 'translate(' + percentageMoved + '%, 0%)'
    setPressedStyles(Math.abs(percentageMoved))
}

const handleLeftArrow = (e) => {
    e.stopPropagation();
    stopOnHover();
    if (percentageMoved == 0) percentageMoved = -100
    percentageMoved += 25;
    // slides.style.height = '100vh'
    slides.style.transform = 'translate(' + percentageMoved + '%, 0%)'
    setPressedStyles(Math.abs(percentageMoved))
}

const handleSelector = (select, e) => {
    e.stopPropagation()
    stopOnHover();
    slides.style.transform = 'translate(' + select + '%, 0%)';
    percentageMoved = select;
    setPressedStyles(Math.abs(select))
}

const runSlider = () => {
    for (let i = 0; i < 10; i++) {
        clearInterval(slideInverval - i);
    }
    slideInverval = setInterval(() => {
        if (percentageMoved == -75) percentageMoved = amountTomoveApply
        percentageMoved -= amountTomoveApply
        slides.style.transform = 'translate(' + percentageMoved + '%, 0%)'
        setPressedStyles(Math.abs(percentageMoved));
    }, 6000);
}

const stopOnHover = () => {
    clearInterval(slideInverval)
    try {
        clearInterval(slideInverval - 1)
        clearInterval(slideInverval - 2)
    } catch (error) {
    }

}

const setPressedStyles = (index) => {
    let indexSet = index/25;
    let selectors = document.getElementsByClassName('home-slider-container-selectors-selector');
    selectors[0].classList.remove('selector-pressed')
    selectors[1].classList.remove('selector-pressed')
    selectors[2].classList.remove('selector-pressed')
    selectors[3].classList.remove('selector-pressed')
    selectors[indexSet].classList.add('selector-pressed')
}

const setSrcSlider = () => {
    const windowSize = window.innerWidth;
    // if (windowSize <= 768) {
    //     let url = "assets/img/portfolio/content/GUS_About_us_";
    //     // let url = "assets/img/home/test/testmobile.png";
    //     let img1= document.getElementById('slide-1');
    //     let img2= document.getElementById('slide-2');
    //     let img3= document.getElementById('slide-3');
    //     let img4= document.getElementById('slide-4');
    //     let vide0 = document.getElementsByClassName('videos');
    //     vide0[0].style.display = 'none';
    //     vide0[1].style.display = 'none';
    //     vide0[2].style.display = 'none';
    //     vide0[3].style.display = 'none';
    //     // img1.src = url + 0 + ".png";
    //     // img2.src = url + 1 + ".png";
    //     // img3.src = url + 2 + ".png";
    //     // img4.src = url + 3 + ".png";
    //     // img1.src = url;
    //     // img2.src = url;
    //     // img3.src = url;
    //     // img4.src = url;
    // }
}

const setProjectToOpen = (service, project) => {
    window.localStorage.setItem("service", service)
    window.localStorage.setItem("project", project)
}

const setProjectToOpen2 = () => {
    console.log(percentageMoved)
    if (percentageMoved == 0) setProjectToOpen(3, 5)
    if (percentageMoved == -25) setProjectToOpen(1, 5)
    if (percentageMoved == -50) setProjectToOpen(2, 5)
    if (percentageMoved == -75) setProjectToOpen(0, 3)
    window.location.href = "./assets/html/portfolio.html#portfolio-slider-id"
} 

//  see more functions
const handleSeeMore = (index, e) => {
    e.stopPropagation();
    moreArray[index].style.display = "inline"
    linksSeeMore[index].style.display = "none"
}

const handleSeeLess = (index, e) => {
    e.stopPropagation();
    linksSeeMore[index].style.display = "inline"
    moreArray[index].style.display = "none"
}


// Get elements =================================================================

let leftArrow = document.getElementById('la')
let rightArrow = document.getElementById('ra')
let slides = document.getElementById('slides')
let slide1 = document.getElementById('slide-1')
let slide2 = document.getElementById('slide-2')
let slide3 = document.getElementById('slide-3')
let slide4 = document.getElementById('slide-4')

// Selectors
let selector1 = document.getElementById('s1')
let selector2 = document.getElementById('s2')
let selector3 = document.getElementById('s3')
let selector4 = document.getElementById('s4')

// Selectors for see more link
let linksSeeMore = [
    document.getElementById('seemore-1'),
    document.getElementById('seemore-2'),
    document.getElementById('seemore-3'),
    document.getElementById('seemore-4'),
];
let containerButtonsToLink = document.getElementById('container-buttons-tolink')

// more information elements
const moreArray = [
    document.getElementById('more1'),
    document.getElementById('more2'),
    document.getElementById('more3'),
    document.getElementById('more4'),
]

// p elements
let ps = document.getElementsByClassName('info-p')

rightArrow.addEventListener('click', handleRightArrow)
leftArrow.addEventListener('click', handleLeftArrow)

selector1.addEventListener('click', (e) => { handleSelector(0, e) })
selector2.addEventListener('click', (e) => { handleSelector(-25, e) })
selector3.addEventListener('click', (e) => { handleSelector(-50, e) })
selector4.addEventListener('click', (e) => { handleSelector(-75, e) })

// listeners for see more buttons
linksSeeMore.map ( (link, index) =>  {
    link.addEventListener('click', (e) => {handleSeeMore(index, e) })
})

// listeners for see less buttons
moreArray.map ( (more, index) =>  {
    more.addEventListener('click', (e) => {handleSeeLess(index, e) })
})

for (let i = 0; i < ps.length; i++) {
    ps[i].addEventListener('click', (e) => e.stopPropagation())   
}

// Event listener for set project to localstorage
containerButtonsToLink.addEventListener("click", setProjectToOpen2)

window.addEventListener('load', () => {setPressedStyles(0)})
window.addEventListener('load', runSlider)
window.addEventListener('load', setSrcSlider)