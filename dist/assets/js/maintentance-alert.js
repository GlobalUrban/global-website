const maintenanceAlert = document.querySelector('.maintenance-alert');
const maintenanceAlertClose = document.querySelector('.maintenance-alert__close');

if (maintenanceAlert) {
    maintenanceAlertClose.addEventListener('click', () => {
        maintenanceAlert.classList.add('maintenance-alert--hide');
        console.log('close');
    });
}


window.addEventListener('load', () => {
    setTimeout(() => {
        maintenanceAlert.classList.remove('maintenance-alert--hide');
    }, 200);
})


