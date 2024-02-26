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

const deleteItem = (students, id) => {
  const filtered = students.filter((student) => {
    return student.id !== id;
  });

  return filtered;
};

const result = deleteItem(students, 4);
// console.log(result)

// update Item
const students1 = [
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

const newStudent = {
  id: 4,
  name: "Abdur Rahman",
  age: 23,
  grade: "11th",
  address: "321 Maple St",
};
const updateItem = (students, id) => {
  const updated = students.map((student) => {
    if (student.id === id) {
      return newStudent;
    }else{
        return student
    }
  });

  return updated;
};

const result1 = updateItem(students1, 4);
console.log(result1);
