let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

console.log('list', list);
console.log('listItem', listItem);

val = list.childNodes; // NodelIst 반환, line break도 포함
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1- Element
// 2- Attribute (deprecated)
// 3- Text node
// 8- Comment node
// 9- Documnet itself
// 10 = Doctype

//child element nodes 반환
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hi';

//First child
val = list.firstChild;

val = list.firstElementChild;

//Last Child
val = list.lastChild

// child 요소 count
val = list.childElementCount;

// parent node 반환
val = listItem.parentNode;


//next sibling 반환 == 다음 요소?
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling

for(let node of list.childNodes){
    console.log(node);
}

console.log(array.filter);


console.log('val',val);