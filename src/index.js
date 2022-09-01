import apm from './apm';
import { poll, stopPoll } from './poll';
import { measureTime } from './custom-span';

var btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    measureTime().then().catch(err => apm.captureError(err));
});

var btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    const div = document.querySelector('#cat-div');
    div.innerHTML = '';
    const span = apm.startSpan('create Image element', 'resource-load', { blocking: true });
    fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg')
        .then(response => response.blob())
        .then(imageBlob => {
            // Then create a local URL for that image and print it 
            const imageObjectURL = URL.createObjectURL(imageBlob);
            const imageEl = document.createElement('img');
            imageEl.setAttribute('src', imageObjectURL);
            imageEl.setAttribute('width', 300);
            imageEl.setAttribute('height', 300);
            let div = document.querySelector('#cat-div');
            div.appendChild(imageEl);
            span.end();
        });
});

var btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    poll().then();
});

var btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', () => {
    stopPoll();
});

var btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', () => {
    window.history.pushState({}, '', '#foo');
    measureTime().then().catch(err => apm.captureError(err));
});
