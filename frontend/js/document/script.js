let val;

// val = document;

// val = document.baseURI;
// val = document.head;
// val = document.body;
// val = document.forms;

// val = document.scripts;

const headerContainer = document.getElementById('header-container');

console.log(headerContainer);

headerContainer.textContent = 'Text Content';
headerContainer.innerText = 'Inner Text'
headerContainer.innerHTML = '<span>Inner HTML</span>';


const items = document.getElementsByClassName('list-group-item');
console.log(items);

items[0].style.color = 'blue';
items[3].textContent = 'Hi';

let list = document.getElementsByTagName('li')

list = Array.from(list)

const li0dd = document.getSelectorAll('li:nth-child(odd)');

