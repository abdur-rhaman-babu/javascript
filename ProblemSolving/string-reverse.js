const countryName = 'Bangladesh';
// function reverse(s){
//     const splitName = s.split('')
//     const revName = splitName.reverse()
//     return revName.join('')
// }

// console.log(reverse(countryName))

// program to reverse a string

// const stringReverse = (s)=>{
//     let newString = '';
//     for(let i = s.length - 1; i >= 0; i--){
//         newString += s[i]
//     }
//     return newString
// }

// const result = stringReverse(countryName);
// console.log(result)


const stringReverse = (element)=>{
    let newString = '';
    for(let letter of element){
          newString = letter + newString
    }
    return newString
}

const result = stringReverse(countryName);
console.log(result)
