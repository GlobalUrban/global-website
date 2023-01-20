let counter0 = document.getElementById('index-counter-0')
let counter1 = document.getElementById('index-counter-1')
let counter2 = document.getElementById('index-counter-2')

let workingOnScreen = document.getElementById('working')

console.log(counter0)
console.log(counter1)
console.log(counter2)

let timeout = 20;

let runned = false;
let runned1 = false;
let runned2 = false;


const setNumber0 = () => {
    if (runned) return;
    let c0 = 0
    let counterInverval = setInterval(() => {
        c0 += 3
        counter0.innerHTML = c0
        if (c0 >= 249) {
            clearInterval(counterInverval)
            counter0.innerHTML = '249'
            let br = document.createElement('br')
            let text = document.createTextNode('Days')
            counter0.appendChild(br)
            counter0.appendChild(text)
        }
    }, timeout);
    runned = true;
}

const setNumber1 = () => {
    if (runned1) return;
    let c0 = 0
    let counterInverval = setInterval(() => {
        c0 += 400
        counter1.innerHTML = c0
        if (c0 >= 39420) {
            clearInterval(counterInverval)
            counter1.innerHTML = '39,429'
            let br = document.createElement('br')
            let text = document.createTextNode('Pots of Coffee')
            counter1.appendChild(br)
            counter1.appendChild(text)
        }
    }, timeout);
    runned1 = true;
}

const setNumber2 = () => {
    if (runned2) return;
    let c0 = 0
    let counterInverval = setInterval(() => {
        c0 += 2
        counter2.innerHTML = c0
        if (c0 >= 150) {
            clearInterval(counterInverval)
            counter2.innerHTML = '150+'
            let br = document.createElement('br')
            let text = document.createTextNode('Happy Clients')
            counter2.appendChild(br)
            counter2.appendChild(text)
        }
    }, timeout);
    runned2 = true;
}


// window.addEventListener('load', setNumber0);
// window.addEventListener('load', setNumber1);
// window.addEventListener('load', setNumber2);

workingOnScreen.addEventListener('mouseover', setNumber0)
workingOnScreen.addEventListener('mouseover', setNumber1)
workingOnScreen.addEventListener('mouseover', setNumber2)