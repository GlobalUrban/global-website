let globalDinnerSubmitBtn = document.getElementById('global-dinner-submit')
let globalDinnerForm = document.getElementById('global-dinner-form')
// Form fields
let globalDinnerFormName = document.getElementById('global-dinner-form-name')
let globalDinnerFormEmail = document.getElementById('global-dinner-form-email')
let globalDinnerFormPhone = document.getElementById('global-dinner-form-phone')
let globalDinnerFormGuests = document.getElementById('global-dinner-form-guests')

const handleDinnerSubmit = (e) => {
    globalDinnerForm.submit();
    e.stopPropagation();
    e.preventDefault();
    // setTimeout(() => {
    //     window.location.href = '../html/global-dinner-invite.html'   
        
    // }, 300);
}


// globalDinnerSubmitBtn.addEventListener('click', handleDinnerSubmit)