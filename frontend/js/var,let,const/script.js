// 중복 선언 불가, 재할당은 가능
//let greeting = 'hello';
//console.log(greeting);


// 중복 선언 불가, 재할당도 불가
//const greeting = 'hello';
//console.log(greeting);

//greeting = 'hi';

// 유효한 참조 범위
// var => 함수 레벨 스코프
// function func(){
//     if(true){
//         var a ='a';
//         console.log(a);
//     }
//     console.log(a);
// }

//func();

// let, const => 블록 레벨 스코프

//function func(){
//    if(true){
//        let a = 'a';
//        console.log(a);
//    }
//    console.log(a);
//}

// func();

func();


function fun(){
    console.log('hoisting test');
}