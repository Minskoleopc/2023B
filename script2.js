// // let 

// let x = 10
// console.log(x)
// x = 200
// console.log(x)


// // const 
// const h = 100
// console.log(h)
// //h = 300

// // Arithmetic 
// let s  = 10
// let t = 5

// console.log(s+t)
// console.log(s-t)
// console.log(s*t)
// console.log(s/t)
// console.log(s%t)

// let d = 18
// let e = 9

// console.log(d+e)
// console.log(d-e)
// console.log(d*e)
// console.log(d/e)
// console.log(d%e)

// function Calculator(x,y){
//     console.log(x+y)
//     console.log(x-y)
//     console.log(x*y)
//     console.log(x/y)
//     console.log(x%y)
// }
// Calculator(12,6)
// Calculator(8,4)


// function without parameter and without return type

function addition(){
    console.log(9+9)
}
addition()
addition()
addition()
addition()
addition()

// function with parameter and without return type


function subtraction(x,y){
    console.log(x-y)
}
subtraction(12,6)
subtraction(20,10)


// function with parameter and with return type

// 100 ---  show 
// 100 ---  given

function multiplication(x,y){
    return x  * y
}
let q1 = multiplication(4,3)
console.log(q1)
console.log(q1-6)
console.log(q1+6)
console.log(q1+q1+q1)
console.log(q1 * 0.10)


//  3 ways to define function 
// function declaration 

function add(x,y){
    return x + y
}
let q11 = add(22,3)
console.log(q11)

// function expression 

let addB = function(x,y){
    return x + y
}
let q22 = addB(22,3)
console.log(q22)


// arrow function
let addC = (x,y)=>{
    return x + y
}
let q44 = addC(13,4)
console.log(q44)






