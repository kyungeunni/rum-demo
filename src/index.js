import apm from './apm';
import { poll, stopPoll } from './poll';
import { addMockSpan } from './custom-span';

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    addMockSpan().then().catch(err => apm.captureError(err));
});

const btn2 = document.querySelector('#btn2');
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

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    poll().then();
});

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', () => {
    stopPoll();
});

const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', () => {
    window.history.pushState({}, '', '#foo');
    addMockSpan().then().catch(err => apm.captureError(err));
});

const select = document.querySelector('#dropdown');
select.addEventListener('change', (ev) => {
    ev.stopPropagation();
    const hash = ev.target.value;
    window.history.pushState({}, '', hash);
    addMockSpan().then().catch(err => apm.captureError(err));
});
