const btnOpenFaq = document.querySelectorAll('.btn-open');
const textForClose = document.querySelectorAll('.faq__text');
const showContent = document.querySelector('.show');
const removeBtn = document.querySelector('.removeBtn');

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