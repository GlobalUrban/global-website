const styleContainer = () => {
    document.getElementById('slides').style.width = teamMembers.length * 100 + '%';
    document.getElementById('slides-2').style.width = teamMembers2.length * 100 + '%';
}

let amountMoved = 0
let amountofmoves = 0
let amountMoved2 = 0
let amountofmoves2 = 0

// amounts depending on screen size
let amountTomoveDesktop = 25;
let amountTomoveMobile = 50;
let amountTomoveApply = undefined;

const imgRoute = "/dist/assets/img/about-us/team_members/GUS_About_us_"

let classDesktop = 'slider-automatic-container-slide';
let classMobile = 'slider-automatic-container-slide-mobile';
let classToApply = undefined;

let teamMembers = [
    'juan0',
    'juan1',
    'juan2',
    'juan3',
    'juan4',
    'juan5',
    'juan6',
    'juan7',
    'juan8',
]

let teamMembers2 = [
    'pedro0',
    'pedro1',
    'pedro2',
    'pedro3',
    'pedro4',
    'pedro5',
    'pedro6',
    'pedro7',
    'pedro8',
]

let children1 = new Array()
let children2 = new Array()

let slideInverval = undefined;
let slideInverval2 = undefined;
let timeoutOnLoad = 2000;

const runSlider = (indexSlider) => {
    console.log({ timeoutOnLoad })
    if (indexSlider == 0) {
        for (let i = 0; i < 10; i++) {
            clearInterval(slideInverval - i);
        }
        slideInverval = setInterval(() => {
            if (amountofmoves == teamMembers.length - 4) {
                console.log('reached'); amountMoved = amountTomoveApply; amountofmoves = -1
            }
            amountMoved -= amountTomoveApply
            amountofmoves += 1
            slides.style.transform = 'translate(' + amountMoved + 'vw, 0%)'
        }, 3000);
    } else {
        for (let i = 0; i < 10; i++) {
            clearInterval(slideInverval2 - i);
        }
        var timeout = setTimeout(() => {
            slideInverval2 = setInterval(() => {
                if (amountofmoves2 == teamMembers2.length - 4) {
                    console.log('reached'); amountMoved2 = amountTomoveApply; amountofmoves2 = -1
                }
                amountMoved2 -= amountTomoveApply
                amountofmoves2 += 1
                slides2.style.transform = 'translate(' + amountMoved2 + 'vw, 0%)'
            }, 3000);
        }, timeoutOnLoad);
        timeoutOnLoad = 0;
    }
    console.log({ timeoutOnLoad })

}

const stopOnHover = (indexSlider) => {
    if (indexSlider == 0) {
        clearInterval(slideInverval)
        try {
            clearInterval(slideInverval - 1)
            clearInterval(slideInverval - 2)
        } catch (error) {
        }
    }
    else {
        clearInterval(slideInverval2)
        try {
            clearInterval(slideInverval2 - 1)
            clearInterval(slideInverval2 - 2)
        } catch (error) {
        }
    }
}

const appendMember = () => {
    console.log('appending')
    clearMembers();
    teamMembers.map((member, index) => {
        console.log('-----')
        const node = document.createElement("div");
        const node_img = document.createElement("img");
        node.classList.add(classToApply);
        node.id = 's-' + (teamMembers.indexOf(member)).toString();
        node_img.src = imgRoute + teamMembers.indexOf(member) + '.png';
        node_img.alt = 'Team member';
        node_img.style.objectFit = 'cover';
        node.appendChild(node_img);

        // Add title for hover
        const title = document.createElement("div");
        title.classList.add('title-hover');
        title.innerHTML = member
        // console.log(member);
        // console.log(index);
        node.appendChild(title);
        children1.push(title)
        node.addEventListener('mouseover', () => { titleHover(index, true) })
        node.addEventListener('mouseleave', () => { titleHoverLeave(index, true) })


        slides.appendChild(node);
    })
    teamMembers2.map((member, index) => {
        console.log('-----')
        const node = document.createElement("div");
        const node_img = document.createElement("img");
        node.classList.add(classToApply);
        node.id = 's-' + (teamMembers2.indexOf(member)).toString();
        node_img.src = imgRoute + teamMembers2.indexOf(member) + '.png';
        node_img.alt = 'Team member';
        node_img.style.objectFit = 'cover';
        node.appendChild(node_img);

        // Add title for hover
        const title = document.createElement("div");
        title.classList.add('title-hover');
        title.innerHTML = member
        // console.log(member);
        // console.log(index);
        node.appendChild(title);
        children2.push(title)
        node.addEventListener('mouseover', () => { titleHover(index) })
        node.addEventListener('mouseleave', () => { titleHoverLeave(index) })

        slides2.appendChild(node);
    })
}

const clearMembers = () => {
    try {
        while (slides.firstChild) {
            slides.removeChild(slides.firstChild);
        }
        while (slides2.firstChild) {
            slides2.removeChild(slides2.firstChild);
        }
    } catch (error) {
        console.log(error);
    }
}

const setClassforWindow = () => {
    const windowSize = window.innerWidth;
    console.log(windowSize)
    classToApply = classDesktop;
    amountTomoveApply = amountTomoveDesktop
    if (windowSize <= 768) {
        classToApply = classMobile
        amountTomoveApply = amountTomoveMobile
    };
    console.log(classToApply)
    console.log(amountTomoveApply)
}

const titleHover = (index, first = false) => {
    if (first) children1[index].classList.add("title-hover-hover")
    else children2[index].classList.add("title-hover-hover")
}
const titleHoverLeave = (index, first = false) => {
    if (first) children1[index].classList.remove("title-hover-hover")
    else children2[index].classList.remove("title-hover-hover")
}

let slides = document.getElementById('slides')
let slides2 = document.getElementById('slides-2')


window.addEventListener('load', styleContainer)
window.addEventListener('load', setClassforWindow)
// window.addEventListener('resize', setClassforWindow)
// window.addEventListener('resize', () => { stopOnHover(0) })
// window.addEventListener('resize', () => { stopOnHover(1) })
// window.addEventListener('resize', appendMember)
window.addEventListener('load', appendMember)
window.addEventListener('load', () => { runSlider(0) })
window.addEventListener('load', () => { runSlider(1) })
slides.addEventListener('mouseover', () => { stopOnHover(0) })
slides2.addEventListener('mouseover', () => { stopOnHover(1) })
slides.addEventListener('mouseleave', () => { runSlider(0) })
slides2.addEventListener('mouseleave', () => { runSlider(1) })

