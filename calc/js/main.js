const btnNumber = document.querySelectorAll('.btn');
const numberInput = document.querySelector('.numberInput');
const sum = document.querySelector('.somma');
const iqualsValue = document.querySelector('.iquals');
const clearDisplay = document.querySelector('.clear');
const ac = document.querySelector('.ac');
const square = document.querySelector('.sqr');
const powerOfTwo = document.querySelector('.pow');


function resetDisplay() {
    numberInput.value = '0';
}
resetDisplay();
// operation Math
btnNumber.forEach((item) => {
    item.addEventListener('click', function() {
        if (numberInput.value === '0') {
            numberInput.value = '';
        }
        numberInput.value += item.textContent;
    });
})
ac.addEventListener('click', () => {
    let help = numberInput.value;
    help = help.split('');
    help.pop();
    numberInput.value = help.join('');
});
clearDisplay.addEventListener('click', resetDisplay);

iqualsValue.addEventListener('click', () => {
    if (numberInput.value === '') {
        numberInput.value = '0';
    }
    const help = numberInput.value;
    const value = help.split('');
    for (let i = 0; i < value.length; ++i) {
        if (value[i] === '×') {
            value.splice(i, 1, '*');
        } else if (value[i] === '÷') {
            value.splice(i, 1, '/');
        }
    }
    numberInput.value = eval(value.join(''));
});
powerOfTwo.addEventListener('click', () => {
    numberInput.value = Math.pow(Number(numberInput.value), 2);
});
square.addEventListener('click', () => {
    numberInput.value = Math.sqrt(Number(numberInput.value));
})