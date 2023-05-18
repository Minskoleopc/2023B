let x = 10
console.log(x)

//         0  1  2  3  4
let arr = [11,22,33,44,55]
console.log(arr[0])        // 11
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

// program1 

for(let i = 0 ; i < 5 ; i++){ //1 // 2 // 3 // 4 //5
    console.log(arr[i]) 
    // i  = 0 
    // i  = 1
    // i  = 2
    // i  = 3
    // i  = 4
}

// program 2
//             0          1           2       3
let cities = ["pune","bangalore","chennai","jaipur"]
console.log(cities[0])

for(let i = 0 ; i < 4 ; i++){
    //console.log(i)
    console.log(cities[i])

    // i ---   0
    // i ----  1
    // i ----- 2
    // i ----- 3

}
// program 3
//                 0         1           2          3
let countries = ["india","srilanka","bangladesh","japan"]
console.log(countries.length)
console.log(countries.length-1)

let t1 = 0
while(t1 < countries.length-1){
    console.log(countries[t1])
    t1 ++ 
  
}


let t2 = countries.length-1

while(t2 >= 0){
    //console.log(t2)
    console.log(countries[t2])
    t2 --
}






