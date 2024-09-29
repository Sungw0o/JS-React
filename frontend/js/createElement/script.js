// element를 js에서 생성
const li = document.createElement('li');

// 클래스 추가하기
li.className = 'list-group-item';

// id 추가하기
li.id = 'new-item';


li.setAttribute('name', 'New list item');

// link element 생성하기
const link = document.createElement('a');

link.className = 'alarm-item';

link.innerHTML = '<i class="bi-alarm"></i>';

li.appendChild(link);


// 마지막 자식으로 추가
document.querySelector('ul.list-group').appendChild(li);

