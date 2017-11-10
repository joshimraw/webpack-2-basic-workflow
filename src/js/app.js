import '../css/main.scss';
import { RandomGenerator } from './random-generator';

const outputPara = document.querySelector('#outputPara');
const outputRandomInt = () => {
    outputPara.textContent = RandomGenerator.randomInteger();
};

const outputRandomRange = () => {
    outputPara.textContent = RandomGenerator.randomRange(1, 500);
};

const buttonRndInt = document.querySelector('#randomInt');
const buttonRndRange = document.querySelector('#randomRange');

buttonRndInt.addEventListener('click', outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);