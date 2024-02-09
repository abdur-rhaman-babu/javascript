const arr = [1,2,3,4,5,6,7,8,9,10];

// const result = arr.find((arr)=>arr>5)
// console.log(result)

const arrayFind = (num,cb) =>{
    let newArray = []
    for(let i = 0; i<num.length; i++){
        if(cb(num[i]))
        newArray.push(num[i])
    }
    return newArray;
}

const result = arrayFind(arr,(v)=>{
    return v === 5
})

console.log(result)