const styleContainer = () => {
    document.getElementById('slides').style.width = teamMembers.length * 100 + '%';
    document.getElementById('slides-2').style.width = teamMembers2.length * 100 + '%';
}

let amountMoved = 0
let amountofmoves = 0
let amountMoved2 = 0
let amountofmoves2 = 0
const imgRoute = "/dist/assets/img/about-us/team_members/GUS_About_us_"

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

let slideInverval = undefined;
let slideInverval2 = undefined;

const runSlider = (indexSlider) => {
    if (indexSlider == 0) {
        slideInverval = setInterval(() => {
            if (amountofmoves == teamMembers.length - 4) {
                console.log('reached'); amountMoved = 25; amountofmoves = -1
            }
            amountMoved -= 25
            amountofmoves += 1
            slides.style.transform = 'translate(' + amountMoved + 'vw, 0%)'
        }, 3000);
    } else {
        setTimeout(() => {
            slideInverval2 = setInterval(() => {
                if (amountofmoves2 == teamMembers2.length - 4) {
                    console.log('reached'); amountMoved2 = 25; amountofmoves2 = -1
                }
                amountMoved2 -= 25
                amountofmoves2 += 1
                slides2.style.transform = 'translate(' + amountMoved2 + 'vw, 0%)'
            }, 3000);
        }, 2000);
    
    }

}

const stopOnHover = (indexSlider) => {
    if (indexSlider == 0) clearInterval(slideInverval)
    else clearInterval(slideInverval2)
}

const appendMember = () => {
    console.log('appending')
    teamMembers.map((member) => {
        console.log('-----')
        const node = document.createElement("div");
        const node_img = document.createElement("img");
        node.classList.add('slider-automatic-container-slide');
        node.id = 's-' + (teamMembers.indexOf(member)).toString();
        node_img.src = imgRoute + teamMembers.indexOf(member) + '.png';
        node_img.alt = 'Team member';
        node_img.style.objectFit = 'cover';
        node.appendChild(node_img);
        slides.appendChild(node);
    })
    teamMembers2.map((member) => {
        console.log('-----')
        const node = document.createElement("div");
        const node_img = document.createElement("img");
        node.classList.add('slider-automatic-container-slide');
        node.id = 's-' + (teamMembers.indexOf(member)).toString();
        node_img.src = imgRoute + teamMembers.indexOf(member) + '.png';
        node_img.alt = 'Team member';
        node_img.style.objectFit = 'cover';
        node.appendChild(node_img);
        slides2.appendChild(node);
    })
}

let slides = document.getElementById('slides')
let slides2 = document.getElementById('slides-2')


slides.addEventListener('mouseover', () => { stopOnHover(0) })
slides2.addEventListener('mouseover', () => { stopOnHover(1) })
slides.addEventListener('mouseleave', () => { runSlider(0) })
slides2.addEventListener('mouseleave', () => { runSlider(1) })
window.addEventListener('load', () => { runSlider(0) })
window.addEventListener('load', () => { runSlider(1) })
window.addEventListener('load', styleContainer)
window.addEventListener('load', appendMember)
