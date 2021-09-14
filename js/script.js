'use strict'

const homeBtn = document.querySelector('.home__btn');
homeBtn.addEventListener('click', e => {
    e.preventDefault();
    console.log('Button clicked');
})

const footerBtn = document.querySelector('.footer__btn'),
      modalWindow = document.querySelector('.modal__window'),
      modalCloseBtn = document.querySelector('.modal__close'),
      header = document.querySelector('.header');


footerBtn.addEventListener('click', e => {
    e.preventDefault();
    modalWindow.classList.add('show');
    fixBody()
})

modalCloseBtn.addEventListener('click', e => {
    e.preventDefault();
    closeModal()
})

modalWindow.addEventListener('click', e => {
    if (e.target === modalWindow) {
        closeModal()
    }
})

function closeModal() {
    modalWindow.classList.remove('show');
    fixBody()
}

function fixBody(){
    let wrapper = window.innerWidth - document.querySelector('.wrapper').offsetWidth
    if (document.body.classList.contains('fix')) {
        document.body.classList.remove('fix');
        document.body.style.paddingRight = '';
        // fix bag header
        header.style.paddingRight = '';
    } else {
        document.body.classList.add('fix')
        document.body.style.paddingRight = wrapper + 'px';
        // fix bag header
        header.style.paddingRight = wrapper + 'px';
    }
}
