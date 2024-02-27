// Balance Calculator
// const arr = [100,200,-50,500,-250];
// const total = arr.reduce((acc,curr)=>{
//     return acc+=curr;
// },0)

// console.log(`Your Balance is ${total}`)

// const incomes = arr.filter((v)=>{
//     return v >= 0
// })

// console.log(`Income ${incomes}`)

// const expense = arr.filter((v)=>{
//     return v <= 0
// })

// console.log(`Expense ${expense}`)

// const totalExpense = expense.reduce((acc,curr)=>{
//     return acc+=curr
// })
// console.log(`Total Expense ${totalExpense}`);

// const totalIncome = incomes.reduce((acc,curr)=>{
//     return acc+=curr
// })

// console.log(`Total Income ${totalIncome}`);

// const str = 'hello';
// const spiltStr = str.split('')
// const reverse = spiltStr.reverse().join('')
// console.log(reverse)

const students = [
  { id: 1, name: "John Doe", age: 18, grade: "12th", address: "123 Main St" },
  { id: 2, name: "Jane Smith", age: 17, grade: "11th", address: "456 Elm St" },
  {
    id: 3,
    name: "Michael Johnson",
    age: 16,
    grade: "10th",
    address: "789 Oak St",
  },
  {
    id: 4,
    name: "Emily Brown",
    age: 17,
    grade: "11th",
    address: "321 Maple St",
  },
  {
    id: 5,
    name: "Alex Rodriguez",
    age: 18,
    grade: "12th",
    address: "654 Pine St",
  },
];

// const deleteItem = (students, id) => {
//   const filtered = students.filter((student) => {
//     return student.id !== id;
//   });

//   return filtered;
// };

// const result = deleteItem(students, 4);
// console.log(result)

// update Item
// const students1 = [
//   { id: 1, name: "John Doe", age: 18, grade: "12th", address: "123 Main St" },
//   { id: 2, name: "Jane Smith", age: 17, grade: "11th", address: "456 Elm St" },
//   {
//     id: 3,
//     name: "Michael Johnson",
//     age: 16,
//     grade: "10th",
//     address: "789 Oak St",
//   },
//   {
//     id: 4,
//     name: "Emily Brown",
//     age: 17,
//     grade: "11th",
//     address: "321 Maple St",
//   },
//   {
//     id: 5,
//     name: "Alex Rodriguez",
//     age: 18,
//     grade: "12th",
//     address: "654 Pine St",
//   },
// ];

// const newStudent = {
//   id: 4,
//   name: "Abdur Rahman",
//   age: 23,
//   grade: "11th",
//   address: "321 Maple St",
// };
// const updateItem = (students, id) => {
//   const updated = students.map((student) => {
//     if (student.id === id) {
//       return newStudent;
//     }else{
//         return student
//     }
//   });

//   return updated;
// };

// const result1 = updateItem(students1, 4);
// console.log(result1);

// const inchToFeet = (inch)=>{
//   const feet = inch/12;
//   return `${inch} inches = ${feet} foot`;
// }

// const results = inchToFeet(132)
// console.log(result)

// leap year
// program to check leap year
// function checkLeapYear(year) {

  //three conditions to find out the leap year
//   if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//       console.log(year + ' is a leap year');
//   } else {
//       console.log(year + ' is not a leap year');
//   }
// }

// take input
// const year = prompt('Enter a year:');

// checkLeapYear(year);

// factorial
// const arr = [1,2,3,4,5]
// const factorialNumber = (num)=>{
//  let newFactorial = 1;
//   for(let i= 1; i<=num; i++){
//     newFactorial *= i
//   }
//   return newFactorial
// }
// const result5 = factorialNumber(5)
// console.log(result5)

// const factorialNumber = (num)=>{
//  let newFactorial = 1;
//  let i= num;
//   while( i >= 1){
//     newFactorial *= i
//     i--;
//   }
//   return newFactorial
// }
// const result5 = factorialNumber(5)
// console.log(result5)


const getFactorial = (n)=>{
  if(n === 1){
    return 1
  }
  return n * getFactorial((n - 1))
}

const resultFact = getFactorial(5);
// console.log(resultFact)

// swap

var a = 10;
var b = 20;

// console.log(a,b)
var c = a;
a = b;
b = c;

// console.log(a,b)

// largest number from 3 number
// const army = 1500;
// const minister = 1400;
// const mp = 800;

// if(army > minister && army > mp){
//   console.log('army is bigger')
// }else if(minister > mp){
//   console.log('minis is bigger')
// }else{
//   console.log('mp is bigger')
// }

const findLargeNumber = (number)=>{
  let large = number[0];
  for(let i = 1; i<number.length; i++){
      if(large > number[i]){
        large = number[i]
      }
    }
    return large;
}
const result9 = findLargeNumber([10,5,12,8,14,200,25])
// console.log(result9)

// const number = [100,20,30,400,50,5];
// let largestNumber = number[0];
// for(let i = 1; i<number.length; i++){
//     if(largestNumber < number[i] ){
//       largestNumber = number[i]
//     }
// }
// console.log(largestNumber)


// Fibonacci
// nth = (n - 1) + (n - 2)
let fibo = [0,1]
for(let i = 2; i<=10; i++){
  fibo[i] = fibo[i - 1] + fibo[i -2]
}
// console.log(fibo)

// remove duplicate item


