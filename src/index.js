import './styles.scss';
import home from './img/home.png';

function component() {
    var element = document.createElement('div');

    element.innerHTML = "welcome to my app";
    element.classList.add('hello');

    return element;
}

function img() {
    var element = document.createElement('img');

    element.src = home;
    return element;
}

document.body.appendChild(component());
document.body.appendChild(img());