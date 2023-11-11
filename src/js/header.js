const burgerBtn = document.querySelector('.js-open-menu');
const closeBtn = document.querySelector('.js-close-menu');
const modal = document.querySelector('.js-modal');

const modalChannel = new BroadcastChannel('modal-channel');

burgerBtn.addEventListener('click', function () {
    modal.style.display = 'block';
    burgerBtn.classList.add('hidden');
    modalChannel.postMessage({ action: 'openModal' });
});

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    burgerBtn.classList.remove('hidden');
});

modalChannel.addEventListener('message', function (event) {
    if (event.data.action === 'openModal') {
        modal.style.display = 'block';
        burgerBtn.classList.add('hidden');
    }
});

window.addEventListener('beforeunload', function () {
    modalChannel.close();
});
// light-dark theme
const inputTheme = document.querySelector('.div-theme');
const spanTheme = document.querySelector('.span-theme');

const body = document.querySelector('body');
let indexTheme = false;

inputTheme.addEventListener('change', () => {
    if (indexTheme) {
        indexTheme = false;
        localStorage.setItem('userTheme', 'light');
    } else {
        indexTheme = true;
        localStorage.setItem('userTheme', 'dark');
    }

    currentTheme();
});

function currentTheme() {
    try {
        indexTheme = localStorage.getItem('userTheme') === 'dark' ? true : false;
    } catch (error) {
        indexTheme = false;
    }

    const logo = document.querySelector('.header-logo-icon');
    const logo1 = document.querySelector('.header-logo-icon1');
    if (indexTheme) {
        body.classList.add('dark-theme');
        spanTheme.style.left = '20px';
        logo.style.width = '0px';
        logo1.style.width = '109px';
    } else {
        body.classList.remove('dark-theme');
        spanTheme.style.left = '2px';
        logo1.style.width = '0px';
        logo.style.width = '109px';
    }
}

currentTheme();


const headerNavLinks = document.querySelector('.header-nav-item').querySelectorAll('a');
const headerNavLinksModal = document.querySelector('.header-nav-item-modal').querySelectorAll('a');
if (document.querySelector('.home-page') === null) {
    for (let index = 0; index < headerNavLinks.length; index++) {
        headerNavLinks[index].classList.toggle("heder-active");
        headerNavLinksModal[index].classList.toggle("heder-active");
    }
}