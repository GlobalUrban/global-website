const styleContainer = () => {
    document.getElementById('slides').style.width = teamMembers.length * 100 + '%';
}

let amountMoved = 0
let amountofmoves = 0

let teamMembers = [
    'juan0',
    'juan1',
    'juan2',
    'juan3',
    'juan4',
    'juan5',
    'juan6',
    'juan7',
    'juan8' ,
]

let slideInverval = undefined;

const runSlider = async () => {
    slideInverval = setInterval(async () => {
        if (amountofmoves == teamMembers.length-4) {
            console.log('reached'); amountMoved = 25; amountofmoves = -1
        }
        amountMoved -= 25
        amountofmoves += 1
        slides.style.transform = 'translate(' + amountMoved + 'vw, 0%)'
    }, 3000);
}

const stopOnHover = () => {
    clearInterval(slideInverval)
}

const appendMember = () => {
    console.log('appending')
    teamMembers.map((member) => {
        console.log('-----')
        const node = document.createElement("div");
        const node_img = document.createElement("img");
        node.classList.add('slider-automatic-container-slide');
        node.id = 's-' + teamMembers.indexOf(member) + 1;
        node_img.src = './assets/img/test/GUS_About us_' + teamMembers.indexOf(member) + '.png';
        node_img.alt = 'Team member';
        node_img.style.objectFit = 'cover';
        node.style.border = 'solid';
        node.style.borderColor = 'black';
        node.appendChild(node_img);
        slides.appendChild(node);
    })
}

let slides = document.getElementById('slides')


slides.addEventListener('mouseover', stopOnHover)
slides.addEventListener('mouseleave', runSlider)
window.addEventListener('load', runSlider)
window.addEventListener('load', styleContainer)
window.addEventListener('load', appendMember)

// Creative Team Slider //
