const arr = [1,2,3,4,5,6,7,8,9,10]
const arrayMap = (arr,cb) =>{
    let newArray = []
    for(let i = 0; i<arr.length; i++){
        newArray.push(cb(arr[i]))
    }
    return newArray;
}

const result = arrayMap(arr,(v)=>{
    return v
})

console.log(result)