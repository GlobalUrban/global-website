let formSubmitDesktop = document.getElementById('contact-id-m');
let formSubmitMobile = document.getElementById('contact-id-m-pop');
let successDiv = document.getElementById('success-submit-id');

// Button for closing pop up submitted Button
let closeSubmitButton = document.getElementById('pop-up-submitted-form-close')
let closeDinnerSubmitButton = document.getElementById('pop-up-dinner-submitted-form-close')

let popUpSubmittedForm = document.getElementById('pop-up-submitted-form')
let popUpDinnerSubmittedForm = document.getElementById('pop-up-dinner-submitted-form')

let btnGetInTouch = document.getElementById('contact-form__mobile-btn')

const handleSubmit = async (e) => {
    const name = document.getElementById('f-name-desk')
    const email = document.getElementById('f-email-desk')
    const phone = document.getElementById('f-phone-desk')
    const textArea = document.getElementById('f-text-desk')

    console.log(name.value)

    if (!name.value || !email.value || !phone.value || !textArea.value) {
        console.log('All fields must be filled in')
        return
    }
    window.localStorage.setItem('form-submit', true)
}

const checkSubmitStorage = () => {
    let submitControl = window.localStorage.getItem('form-submit')
    let submitDinnerControl = window.localStorage.getItem('form-dinner-submit')
    if (!!submitDinnerControl) popUpDinnerSubmittedForm.style.display = "flex"
    if (!submitControl) {
        successDiv.style.display = "none"
    } else {
        successDiv.style.display = "none"
        // window.location.href = "#contact-form__mobile-btn"
        console.log("entered")
        popUpSubmittedForm.style.display = "flex"
        // window.location.href = "#form-desk"
        // btnGetInTouch.innerHTML = "Thanks. Your message has been received."
        // btnGetInTouch.style.background = "transparent"
        // btnGetInTouch.style.color = "white"
    };


    window.localStorage.removeItem('form-submit')
    window.localStorage.removeItem('form-dinner-submit')
}

const handleCloseSubmitButton = () => {
    popUpSubmittedForm.style.display = "none"
}

const handleCloseDinnerSubmitButton = () => {
    popUpDinnerSubmittedForm.style.display = "none"
}

// formSubmitDesktop.addEventListener('submit', handleSubmit)
formSubmitDesktop.addEventListener('click', handleSubmit)
formSubmitMobile.addEventListener('click', handleSubmit)
closeSubmitButton.addEventListener('click', handleCloseSubmitButton)
closeDinnerSubmitButton.addEventListener('click', handleCloseDinnerSubmitButton)
window.addEventListener('load', checkSubmitStorage)