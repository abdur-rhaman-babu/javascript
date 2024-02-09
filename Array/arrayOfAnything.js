// function getRndIntegers(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
//   }
//   console.log(getRndIntegers(1,6))


// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// console.log(getRndInteger(1,6))

// const stName = ['Abdu Tah', 'Hasan','Imrul','Jahid','Badsha','sumon']

// stName.sort()
// // console.log(stName)

// const students = [
//     { name: 'John', roll: 110 },
//     { name: 'Alice', roll: 108 },
//     { name: 'Bob', roll: 103 },
//     { name: 'Eva', roll: 106 },
//     { name: 'Charlie', roll: 107 },
//     { name: 'David', roll: 101 },
//     { name: 'Emma', roll: 102 },
//     { name: 'Frank', roll: 109 },
//     { name: 'Grace', roll: 104 },
//     { name: 'Henry', roll: 105 }
//   ];

//   students.sort((a,b)=>{
//     return a.roll - b.roll
//   })
//   console.log(students)

// finde leap year--------------------->>>>>>>>>>>

// const getLeapYear = (year)=>{
//     if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !==0)){
//         console.log(year + " " + 'is leap year')
//     }
//     else{ 
//         console.log(year + " " + 'is leap not year')
//     }
// }

// getLeapYear(322)

// find vowel

// const vowel = ['a','e','i','o','u','A','E','I','O','U']

// const getVowel = (sentence)=>{
//     const newVowel = []
//     const letter = Array.from(sentence)
//     letter.forEach((value)=>{
//         if(vowel.includes(value)){
//             newVowel.push(value)
//         }
//     })
//     console.log(newVowel.length)
//     // return count
// }

// getVowel('I love Bangladesh. Bangladesh is a small country')

// var i = 5;
// for(var i=0; i<10; i++){
//   console.log(i)
// }

// console.log(i++)
// console.log(++i)


const arr = [1,2,3,null, undefined, '',5,'test']

for(let i=0; i<arr.length; i++){
  if(typeof arr[i] !== 'number'){
    arr[i] !== undefined
  }
}

// console.log(arr)

