const arr = [25,36,100,7,8,22,1,55,99,88,102,12,105]

// array sum
let sum = 0;
for(let i=0; i<arr.length; i++){
    sum+=arr[i]
}
// console.log(sum)

// find largest number 
let largestNumber = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>largestNumber){
        largestNumber = arr[i]
        // console.log(largestNumber)
    }
}
console.log(`largest numer is ${largestNumber}`)

// find smallest number 
let smallestNumber = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]<smallestNumber){
        smallestNumber = arr[i]
        // console.log(smallestNumber)
    }
}
console.log(`smallest number is ${smallestNumber}`)



  