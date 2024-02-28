// for(let i = 1; i<=6; i++){
//     console.log(i)
// }

// for (let i = 6; i >= 1; i--){
//     console.log(i)
// }

const recursionSumition = ( i ) =>{
    if( i === 1){
        return 1;
    }
    return  i + recursionSumition (i - 1);
}

// 6 + 5 + 4 + 3 + 2 + 1
const result = recursionSumition(6)
// console.log(result)

// factorial 

const recursionaFactorial = (i) =>{
    if ( i === 1 ){
        return 1;
    }
    return i * recursionaFactorial( i - 1)
} 
// console.log(recursionaFactorial(6))

// fibonacci
const fibo = (i) =>{
    if ( i === 0){
        return 0;
    }
    if( i === 1 ){
        return 1;
    }
    return fibo( i - 1) + fibo( i - 2)
}
// console.log(fibo(6))
