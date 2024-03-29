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

let ArrowsPressed = false

const imgRoute = "../img/about-us/team_members/GUS_About_us_"
const imgRouteGrant = "../img/about-us/team_members/Grant/g-"
const imgRouteDig = "../img/about-us/team_members/Dig/d-"

let classDesktop = 'slider-automatic-container-slide';
let classMobile = 'slider-automatic-container-slide-mobile';
let classToApply = undefined;

let teamMembers = [
    { name: 'Omar Hernandez', charge: 'President and CEO' },
    { name: 'Nora Hernandez', charge: 'Administrative Manager' },
    { name: 'Christa Leonard', charge: 'Director of Grant Acquisition' },
    { name: 'Cinthia Iniguez', charge: 'Program Manager' },
    { name: 'Domonique Dunnick', charge: 'Grant Writer & Program Administrator' },
    { name: 'Daniela Espinoza', charge: 'Assistant Program Administrator' },
    { name: 'Lauren Hernandez', charge: 'Associate Account Executive' },
]

let teamMembers2 = [
    { name: 'Jackeline Landa', charge: 'Art Director' },
    { name: 'Kat Fuentes', charge: 'Creative Supervisor' },
    { name: 'Angie Mejia', charge: 'Proposal Specialist' },
    { name: 'Hector Suarez', charge: 'Senior Web Developer' },
    { name: 'Elena Mejia', charge: 'Social Media Strategist' },
    { name: 'Carolina Ramirez', charge: 'Motion Graphics & Press Production' },
    { name: 'Ximena Morazan', charge: 'Associate Social Media Strategist' },
    { name: 'Andrea Franconi', charge: 'Graphic Designer and Illustration' },
    { name: 'Moises Vasconcelos', charge: 'Graphic Designer and Motion Graphics' },
    {name: 'Fernando Gonzalez', charge: 'Branding and Editorial Designer'},
    { name: 'Edgardo Valencia', charge: 'Front-End Web Developer' },
    { name: 'Francisco Ortiz', charge: 'Back-End Web Developer' },
]

let children1 = new Array()
let children2 = new Array()

let slideInverval = undefined;
let slideInverval2 = undefined;
let timeoutOnLoad = 2000;

let mobileAmountLess = 0

const runSlider = (indexSlider) => {

    if (ArrowsPressed) return;

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
        const node = document.createElement("div");
        const node_img = document.createElement("img");
        node.classList.add(classToApply);
        node.id = 's-' + (teamMembers.indexOf(member)).toString();
        node_img.src = imgRouteGrant + teamMembers.indexOf(member) + '.jpeg';
        node_img.alt = 'Team member';
        node_img.style.width = "100%";
        node_img.style.height = "100%";
        node_img.style.objectFit = 'cover';
        node.appendChild(node_img);

        // Add title for hover
        let infoContainer = document.createElement("div");
        let info = document.createElement("div");
        let h3 = document.createElement("h3");
        let br = document.createElement("br");
        let span = document.createElement("span");
        infoContainer.classList.add('title-hover');
        h3.innerHTML = member.name;
        info.appendChild(h3)
        info.appendChild(br)
        info.appendChild(document.createTextNode(member.charge))
        infoContainer.appendChild(info);
        // console.log(index);
        node.appendChild(infoContainer);
        children1.push(infoContainer)
        // listeners for hover
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
        node_img.src = imgRouteDig + teamMembers2.indexOf(member) + '.jpeg';
        node_img.alt = 'Team member';
        node_img.style.width = "100%";
        node_img.style.height = "100%";
        node_img.style.objectFit = 'cover';
        node.appendChild(node_img);

        // Add title for hover
        let infoContainer = document.createElement("div");
        let info = document.createElement("div");
        let h3 = document.createElement("h3");
        let br = document.createElement("br");
        let span = document.createElement("span");
        infoContainer.classList.add('title-hover');
        h3.innerHTML = member.name;
        info.appendChild(h3)
        info.appendChild(br)
        info.appendChild(document.createTextNode(member.charge))
        infoContainer.appendChild(info);
        // console.log(index);
        node.appendChild(infoContainer);
        children2.push(infoContainer)
        // listeners for hover
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
        mobileAmountLess = 2
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

// Handlers for arrows

const handleArrows2 = (right) => {
    ArrowsPressed = true
    clearInterval(slideInverval2)
    clearInterval(slideInverval2 - 1)
    clearInterval(slideInverval2 - 2)
    clearInterval(slideInverval2 - 3)
    clearInterval(slideInverval2 - 4)

    if ((amountofmoves2 == teamMembers2.length - (4 - mobileAmountLess)) && right) {
        console.log('reached');
        amountMoved2 = amountTomoveApply;
        amountofmoves2 = -1
    }

    if (amountofmoves2 < 1 && !right) {
        amountMoved2 = amountTomoveApply * ((teamMembers2.length - (3 - mobileAmountLess)) * (-1));
        amountofmoves2 = (9 + mobileAmountLess) // Only increment this number when adding member
    }

    if (right) {
        amountMoved2 -= amountTomoveApply
        amountofmoves2 += 1
        slides2.style.transform = 'translate(' + amountMoved2 + 'vw, 0%)'
    } else {
        // 8
        if (amountofmoves2 > (9 + mobileAmountLess)) return
        amountMoved2 += amountTomoveApply
        amountofmoves2 -= 1
        slides2.style.transform = 'translate(' + amountMoved2 + 'vw, 0%)'
    }
}

const handleArrows1 = (right) => {
    ArrowsPressed = true
    clearInterval(slideInverval)
    clearInterval(slideInverval - 1)
    clearInterval(slideInverval - 2)
    clearInterval(slideInverval - 3)
    clearInterval(slideInverval - 4)

    if ((amountofmoves == teamMembers.length - (4 - mobileAmountLess)) && right) {
        console.log('reached');
        amountMoved = amountTomoveApply;
        amountofmoves = -1
        console.log({ amountofmoves, amountMoved })
    }

    if (amountofmoves < 1 && !right) {
        console.log('reached');
        amountMoved = amountTomoveApply * ((teamMembers.length - (3 - mobileAmountLess)) * (-1));
        amountofmoves = (4 + mobileAmountLess)  // Only increment this number when adding member
    }

    if (right) {
        console.log('right');
        amountMoved -= amountTomoveApply
        amountofmoves += 1
        slides.style.transform = 'translate(' + amountMoved + 'vw, 0%)'
        console.log({ amountofmoves, amountMoved })
    } else {
        if (amountofmoves > (4 + mobileAmountLess)) return
        amountMoved += amountTomoveApply
        amountofmoves -= 1
        slides.style.transform = 'translate(' + amountMoved + 'vw, 0%)'
        console.log({ amountofmoves, amountMoved })
    }


}

let slides = document.getElementById('slides')
let slides2 = document.getElementById('slides-2')

let arrosl1 = document.getElementById('slider-automatic-container-arrowl')
let arrosr1 = document.getElementById('slider-automatic-container-arrowr')
let arrosl2 = document.getElementById('slider-automatic-container-arrowl2')
let arrosr2 = document.getElementById('slider-automatic-container-arrowr2')


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

arrosr1.addEventListener('click', () => { handleArrows1(true) })
arrosl1.addEventListener('click', () => { handleArrows1(false) })
arrosr2.addEventListener('click', () => { handleArrows2(true) })
arrosl2.addEventListener('click', () => { handleArrows2(false) })

