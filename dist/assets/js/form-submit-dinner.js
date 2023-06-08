let formSubmitDinner = document.getElementById('dinner-form-btn');

// Button for closing pop up submitted Button
let closeDinnerSubmitButton = document.getElementById('pop-up-dinner-submitted-form-close')
let popUpDinnerSubmittedForm = document.getElementById('pop-up-dinner-submitted-form')

const handleSubmitDinner = async (e) => {
    window.localStorage.setItem('form-dinner-submit', true)
}

const checkSubmitStorage = () => {
    let submitDinnerControl = window.localStorage.getItem('form-dinner-submit')
    if (!!submitDinnerControl) popUpDinnerSubmittedForm.style.display = "flex"
    window.localStorage.removeItem('form-dinner-submit')
}

const handleCloseDinnerSubmitButton = () => {
    popUpDinnerSubmittedForm.style.display = "none"
}

formSubmitDinner.addEventListener('click', handleSubmitDinner)
closeDinnerSubmitButton.addEventListener('click', handleCloseDinnerSubmitButton)
window.addEventListener('load', checkSubmitStorage)