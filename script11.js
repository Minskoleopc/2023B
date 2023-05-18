for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
    console.log(i)
    if(i == 3){
        break
    }

}

// 1 <= 5  - T
// 2 <= 5  -T
// 3 <= 5 - T
// 4 <= 5 - T
// i <= 5 - T

for(let i = 1 ; i <= 5 ; i++){  // 2 // 3
    console.log(i) //1 // 2 // 3
    if(i == 3){
        break
    }
}


for(let i = 1 ; i <= 5 ; i++){   // 2 // 3
    if(i == 3){
        break
    }
    console.log(i)  //1 // 2
}






