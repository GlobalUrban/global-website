let formSubmitDesktop = document.getElementById('contact-id-m');
let formSubmitMobile = document.getElementById('contact-id-m-pop');

let formId = document.getElementById('form-desk');
let successDiv = document.getElementById('success-submit-id');

// Fields from 
let nameform = document.getElementById('f-name')
let email = document.getElementById('f-email')
let phone = document.getElementById('f-phone')
let text = document.getElementById('f-text')


const handleSubmit = async (e) => {

    // e.preventDefault();

    console.log("nameform.value")
    // console.log(nameform.value)
    // console.log(email.value)
    // console.log(phone.value)
    // console.log(text.value)

    window.localStorage.setItem('form-submit', true)
    
}

const checkSubmitStorage = () => {
    let submitControl = window.localStorage.getItem('form-submit')
    if(!submitControl) {
        successDiv.style.display = "none"
    } else {
        window.location.href = "#form-desk"
    };
    console.log(submitControl);
    window.localStorage.removeItem('form-submit')
    console.log(submitControl);
}

// formSubmitDesktop.addEventListener('submit', handleSubmit)
// formSubmitDesktop.addEventListener('click', handleSubmit)
formId.addEventListener('submit', handleSubmit)
window.addEventListener('load', checkSubmitStorage)