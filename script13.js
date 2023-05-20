
let x = 10
console.log(x)

//             0  1  2  3   4
let numbers = [11,22,33,44,55]
console.log(numbers[0])
console.log(numbers[3])
console.log(numbers[6])

// Array stores the value by index


// Object 
// Object - properties and method

//              0       1         2       3
let cities = ["pune","nagpur","wardha","nashik"]
console.log(cities[0])
console.log(cities.length)
console.log(cities.length-1)

for(let i = 0 ; i < 4; i++){ // 1 // 2 // 3 // 4
    console.log(cities[i])  
    // i - 0
    // i - 1
    // i - 2
    // i - 3
}

for(let i = cities.length-1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(cities[i])
}

let country = ["india","srilanka","nepal"]

let i = 0

while(i < country.length){
    console.log(country[i])
    i++
}

let i2 = country.length-1

while(i2 >= 0){
    console.log(country[i2])
    i2 --
}

// ----- Array---------------------------------------------
let state = ["MH","UP","MP","RJ"]

// property - length
console.log(state.length)


let q1 = state.push("GOA")
console.log(q1)
console.log(state)

let q2 = state.unshift('HP')
console.log(q2)
console.log(state)

let q3 = state.pop()
console.log(q3)
console.log(state)


let q4 = state.shift()
console.log(q4)
console.log(state)

//              0        1       2       3 
let fruits = ["apple","mango","banana","grapes"]
let q5 = fruits.includes("Apple")
console.log(q5)

//------------------------------------------------------------




























