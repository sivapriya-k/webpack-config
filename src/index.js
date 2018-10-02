import './styles.scss';

function component() {
    var element = document.createElement('div');

    element.innerHTML = "welcome to my app";
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());