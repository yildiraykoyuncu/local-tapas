'use strict';
console.log('--- loading listener: _');

document.querySelector('.add-items')
    .addEventListener('submit', addItem);

document.querySelector('.plates').addEventListener('click', toggleDone)

document.querySelector('.plates').addEventListener('click', deleteItemHandler)