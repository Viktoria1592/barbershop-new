var link = document.querySelector('.login');
var popup = document.querySelector('.pop-up');
var close = popup.querySelector('.modal-close');
var overLay = document.querySelector('.modal-overlay');
var login = popup.querySelector('[name=login]');
var form = popup.querySelector('form');
var password = popup.querySelector('[name=password]');
var storage = localStorage.getItem('login');
var openMap = document.querySelector('.btn-map');
var modalMap = document.querySelector('.modal-map');
if (modalMap) {
    var closeMap = modalMap.querySelector('.modal-close')
};
link.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.add('pop-up-active');
    overLay.classList.add('modal-overlay-active');
    if (storage) {
        login.value = storage;
        password.focus();
    }
    else {
        login.focus();
    }
});
close.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.remove('pop-up-active');
    popup.classList.remove('pop-up-error');
    overLay.classList.remove('modal-overlay-active');
});
form.addEventListener('submit', function (event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add('pop-up-error');
    }
    else {
        localStorage.setItem('login', login.value);
    }
});
if (openMap) {
    openMap.addEventListener('click', function (event) {
        event.preventDefault();
        modalMap.classList.add('modal-map-active');
        overLay.classList.add('modal-overlay-active');
    })
};
if (closeMap) {
    closeMap.addEventListener('click', function (event) {
        event.preventDefault();
        modalMap.classList.remove('modal-map-active');
        overLay.classList.remove('modal-overlay-active');
    })
};
window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains('pop-up-active')) {
            popup.classList.remove('pop-up-active');
        }
        if (overLay.classList.contains('modal-overlay-active')) {
            overLay.classList.remove('modal-overlay-active');
        }
        if (modalMap.classList.contains('modal-map-active')) {
            modalMap.classList.remove('modal-map-active');
        }
    }
});