const test = () => {
    console.log('Testing');
}
let percentageMoved = 0;
let amountTomoveApply = 25

let slideInverval = undefined;

const handleRightArrow = () => {
    stopOnHover();
    if (percentageMoved == -75) percentageMoved = amountTomoveApply
    percentageMoved -= amountTomoveApply;
    // slides.style.height = '100vh'
    slides.style.transform = 'translate(' + percentageMoved + '%, 0%)'
    setPressedStyles(Math.abs(percentageMoved))
}

const handleLeftArrow = () => {
    stopOnHover();
    if (percentageMoved == 0) percentageMoved = -100
    percentageMoved += 25;
    // slides.style.height = '100vh'
    slides.style.transform = 'translate(' + percentageMoved + '%, 0%)'
    setPressedStyles(Math.abs(percentageMoved))
}

const handleSelector = (select) => {
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

rightArrow.addEventListener('click', handleRightArrow)
leftArrow.addEventListener('click', handleLeftArrow)

selector1.addEventListener('click', () => { handleSelector(0) })
selector2.addEventListener('click', () => { handleSelector(-25) })
selector3.addEventListener('click', () => { handleSelector(-50) })
selector4.addEventListener('click', () => { handleSelector(-75) })

window.addEventListener('load', () => {setPressedStyles(0)})
window.addEventListener('load', runSlider)
window.addEventListener('load', setSrcSlider)