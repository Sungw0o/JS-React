// Methos => Object

// const audio = {
//     title: 'a',
//     play(){
//         console.log('play this',this);
//     }
// }
//
// audio.play();
//
// audio.stop = function(){
//     console.log('stop this',this);
// }
// audio.stop();

//Function. => Window Object
// function playAudio(){
//     console.log(this);
// }
//
// playAudio();

// Constructor Function = {} 빈 객체
// function Audio(title){
//     this.title = title;
//     console.log(this);
// }
//
// const audio = new Audio('a');

// 화살표 함수에서는 this 항상 상위 스코프의 this를 가르키게됨
const audio = {
    title: 'audio',
    categories: ['rock', 'pop', 'hiphop'],
    displayCategories() {
        this.categories.forEach(category => {
            console.log(`title: ${this.title}, category: ${category}`);
        })
    }
}

audio.displayCategories();
