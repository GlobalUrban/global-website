let aboutusButton = document.getElementById('contact-us');

const IndexAbouts = async () => {
    console.log('testing');
    window.location = 'assets/html/services.html';
    setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
        console.log('testing');
    }, 1000);
}

const scrollToBottom = (id) => {
    console.log('testing');
    let aboutusButton = document.getElementById('contact-us');
    aboutusButton.scrollTop = aboutusButton.scrollHeight;
    console.log(aboutusButton.scrollTop);
    console.log(aboutusButton.scrollHeight);
}

aboutusButton.addEventListener('click', IndexAbouts);