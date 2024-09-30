// window.onload = function() {
//     // 문서가 load 될 떄 이 함수를 실행
//     let text = document.getElementById("text");
//     // 아이디가 'text'인 요소를 return
//     text.innerText ='HTML 문서 loeaded';
// }
//
// // addEventListener 를 사용
//
// const aElement = document.querySelector('a');
//
// aElement.addEventListener('click', () => {
//     alert('a element clicked');
// });

// const buttonElement = document.querySelector('.btn2');
//
// buttonElement.addEventListener('click', (event) => {
//     let val;
//     val = event.target;
//     val = event.target.id;
//     val = event.target.className;
//     val = event.target.classList;
//
//     val = event.type;
//     val = event.clientY;
//     val = event.offsetY;
//     console.log(val);
// })

// const submitBtn = document.querySelector('.submit-btn');
// const form = document.querySelector('.form');
// const title = document.querySelector('h2');

// 이벤트
// submitBtn.addEventListener('click', handleEvent);
// submitBtn.addEventListener('dblclick', handleEvent);
// submitBtn.addEventListener('mousedown', handleEvent);
// submitBtn.addEventListener('mouseup', handleEvent);
// submitBtn.addEventListener('mouseleave', handleEvent);

const form = document.querySelector('form');
const emailInput = document.querySelector('email');
const title = document.querySelector('h2');
// Form event
form.addEventListener('submit', handleEvent);
emailInput.addEventListener('keyup', handleEvent);

function handleEvent(e) {
    if(e.type ==='submit') {
        e.preventDefault();
    }// form submit event default action canc
    console.log(`Event type: ${e.type}`);
    // title.textContent = e.target.value;
}
