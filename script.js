
const text = document.querySelector('.text');
const number = document.querySelector('.number');
let vse = 0;
let otr = 0;
let rasschet = 0;

const addNumber = (a) => {
    number.textContent = number.textContent += a;
};

const reset = () => {
    vse = 0;
    otr = 0;
    rasschet = 0;
    resetScreen();
};

const resetScreen = () => {
    number.textContent = null;
};

const next= () => {
    rasschet = otr/(vse/100);
    number.textContent = rasschet + '%';
};

const minusans = () => {
    otr = Number(number.textContent);
    resetScreen();
};

const allans = () => {
    vse = Number(number.textContent);
    resetScreen();
};

