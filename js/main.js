const btnOpenFaq = document.querySelectorAll('.btn-open');
const textForClose = document.querySelectorAll('.faq__text');
const showContent = document.querySelector('.show');
const removeBtn = document.querySelector('.removeBtn');
const openMenu = document.querySelector('.sidebar__hambuger');
const hidden = document.querySelector('.hidden');
const menuMobile = document.querySelector('.menu__mobile');

for (let i = 0; i < btnOpenFaq.length; i++) {
    btnOpenFaq[i].addEventListener('click', () => {
        if ((textForClose[i].classList.contains('show'))) {
            textForClose[i].classList.remove('show');
            btnOpenFaq[i].classList.remove('removeBtn');
        } else {
            textForClose[i].classList.add('show');
            btnOpenFaq[i].classList.add('removeBtn');
        }
    })
}

openMenu.addEventListener('click', () => {

    if (menuMobile.classList.contains('hidden')) {
        menuMobile.classList.remove('hidden');
        document.body.style.overflow = "hidden";
    } else {
        menuMobile.classList.add('hidden');
        document.body.style.overflow = "auto";
    }
})