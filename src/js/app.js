import 'jquery';
import '../css/main.scss';
import '../users.html';
import { RandomGenerator } from './random-generator';

const outputPara = $('#outputPara');
const outputRandomInt = () => {
    outputPara.text(RandomGenerator.randomInteger());
};

const outputRandomRange = () => {
    outputPara.text(RandomGenerator.randomRange(1, 500));
};

const buttonRndInt = jQuery('#randomInt');
const buttonRndRange = document.querySelector('#randomRange');

buttonRndInt.click(outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);