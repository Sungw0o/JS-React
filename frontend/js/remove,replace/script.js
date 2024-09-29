const listParent = document.querySelector('ul');
const list = document.querySelectorAll('li');

// 요소 지우기
// listParent.removeChild(list[i]);

// 요소 교체하기
const oldElement = document.getElementById('A');
const newElement = document.createElement('spen');

newElement.textContent = 'Hi';

oldElement.parentNode.removeChild(newElement, oldElement);