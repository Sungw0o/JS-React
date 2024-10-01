function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log('Outer function :' + outerVariable);
        console.log('Inner function :' + innerVariable);
    }
}

const newFunction = outerFunction('outside')
newFunction('inside')


let a=  'a';

function functionB(){
    let c = 'c';
    console.log(a,b,c);
}

function functionA(){
    let b= 'b';
    functionB();
    console.log(a,b);
}
functionA();