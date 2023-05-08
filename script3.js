// let 
let x = 10
console.log(x)
x = 1000
console.log(x)

// const
const h = 1000
console.log(h)
//h = 99999


let a = 10
let b = 5

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)


let f = 6
let o = 3

console.log(f+o)
console.log(f-o)
console.log(f*o)
console.log(f/o)
console.log(f%o)


function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,6)
Calculator(12,3)


function Add(){
    console.log(8+8)
}
Add()
Add()
Add()
Add()


function AddB(x,y){
    console.log(x+y)
}
AddB(23,4)

function AddC(x,y){
    return x + y
}
let a1 = AddC(23,5)
console.log(a1)
console.log(a1+a1)


// function declaration 

function Cal(x,y){
    return x + y
}

let a2  = Cal(3,4)
console.log(a2)

// function expression
let CalB = function(x,y){
    return x + y
}
let a3 = CalB(34,5)
console.log(a3)

// arroe function

let CalC = (x,y)=>{
    return x+y 
}
let a4  = CalC(123,6)
console.log(a4)










