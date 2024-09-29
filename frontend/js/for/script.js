// for(let i =0; i<10; i++){
//     if (i ===3){
//         console.log('It is 3');
//     }
//     if (i ===5){
//         console.log('5 Stop the loop');
//     }
//     console.log('Number '+ i);
// }


// const user = {
//     name: 'Han',
//     province: '경기도',
//     city : '성남시'
// }

// for (let x in user){
//     console.log(`${x} : ${user[x]}`);
// }

// let i = 0;

// while( i< 10){
//     console.log('Number '+ i);
//     i++
// }

// let i = 0;

// do {
//     console.log('Number '+ i);
//     i++;
// }

// while(i<10);

const locations = ['서울', '부산', '경기도', '대구'];

for(let i=0; i<locations.length;i++){
    console.log(locations[i]);
}

locations.forEach(function (locations,index, array){
    console.log(`${index}: ${location}`);
    console.log(array);
});

locations.map(function (location){
    console.log(location);
})

//for 루프가 foreach보다 더 빠름