// conditional statements 

//numT
// 1 to 5    ---- 10 %
// 6 to 10   ---- 20 %
// > 10      ---- 30 %



// let numT = 11

// if(numT > 0 && numT <= 5){
//     console.log('10 % discount')
// }

// if(numT > 5 && numT <=10){
//     console.log('20 % discount')
// }

// if(numT > 10){
//     console.log('30 % discount')
// }

// program 2

let numB = -1

if (numB > 0 && numB <= 5) {
    console.log('10 % discount')
}
else if (numB > 5 && numB <= 10) {
    console.log('20 % discount')
}
else if (numB > 10) {
    console.log('30 % discount')
}
else {
    console.log('incorrect input')
}

// program 3

let marks = 44

// if(marks > 90){
//     console.log('Grade A')
// }
// if(marks > 75){
//     console.log('Grade B')
// }
// if(marks > 65){
//     console.log('Grade C')
// }



if (marks > 90) {
    console.log('Grade A')
}
else if (marks > 75) {
    console.log('Grade B')
}
else if (marks > 65) {
    console.log('Grade C')
}
else {
    console.log('Try again')
}


// program 4 

let a = 10
let b = 50

// if(a > b){
//     console.log('a is greater')
// }
// else {
//     console.log('b is greater')
// }


// Tenary operator
a > b ? console.log('a is greater'):console.log('b is greater')


// program 5

let age = 17

let q1 = age >= 18 ? "can drive":"cannot drive"

console.log(q1)