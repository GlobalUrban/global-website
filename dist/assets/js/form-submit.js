let formSubmitDesktop = document.getElementById('contact-id-m');
let formSubmitMobile = document.getElementById('contact-id-m-pop');

let formId = document.getElementById('form-desk');
let formIdMobile = document.getElementById('form-mobile');
let successDiv = document.getElementById('success-submit-id');

let btnGetInTouch = document.getElementById('contact-form__mobile-btn')

const handleSubmit = async (e) => {
    window.localStorage.setItem('form-submit', true)
}

const checkSubmitStorage = () => {
    let submitControl = window.localStorage.getItem('form-submit')
    if (!submitControl) {
        successDiv.style.display = "none"
    } else {
        window.location.href = "#contact-form__mobile-btn"
        window.location.href = "#form-desk"
        btnGetInTouch.innerHTML = "Thanks. Your message has been received."
        btnGetInTouch.style.background = "transparent"
        btnGetInTouch.style.color = "white"
    };
    window.localStorage.removeItem('form-submit')
}

// formSubmitDesktop.addEventListener('submit', handleSubmit)
// formSubmitDesktop.addEventListener('click', handleSubmit)
formId.addEventListener('submit', handleSubmit)
formIdMobile.addEventListener('submit', handleSubmit)
window.addEventListener('load', checkSubmitStorage)