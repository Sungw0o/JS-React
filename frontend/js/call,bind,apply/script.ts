// Call();

// const fullName = function(city,country){
//     console.log(this.firstName + ' ' + this.lastName, city, country);
// }
//
// const person1 = {
//     firstName: 'John',
//     lastName: 'Smith',
// }
//
// fullName.call(person1, 'Oslo', 'Norway');

// const fullName = function(city,country){
//     console.log(this.firstName + ' ' + this.lastName, city, country);
// }
//
// const person1 = {
//     firstName: 'John',
//     lastName: 'Smith',
// }
//
// fullName.apply(person1,['Oslo', 'Norway']);

// bind()
function func(language){
    if(language === "Kor"){
        console.log(`language: ${this.korGreeting}`);
    } else{
        console.log(`language: ${this.engGreeting}`);
    }
}

const greeting = {
    korGreeting: '안녕',
    engGreeting: 'Hello',
}

// 실행이 아니라 바인딩만 시켜줌 (할당을 해주고 다시 호출해주어야 함)
const boundFunc = func.bind(greeting);
boundFunc('eng');