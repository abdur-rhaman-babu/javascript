// const products = [
//     {"name": "Laptop", "price": 999, "year": 2023},
//     {"name": "Smartphone", "price": 799, "year": 2022},
//     {"name": "Headphones", "price": 149, "year": 2024},
//     {"name": "Tablet", "price": 499, "year": 2023},
//     {"name": "Smartwatch", "price": 299, "year": 2022},
//     {"name": "Camera", "price": 599, "year": 2023},
//     {"name": "Gaming Console", "price": 399, "year": 2024},
//     {"name": "Bluetooth Speaker", "price": 79, "year": 2022},
//     {"name": "Fitness Tracker", "price": 129, "year": 2023},
//     {"name": "External Hard Drive", "price": 129, "year": 2024}
//   ]

//   let cheapestProduct = product[0]
  
//   for(let p of product){
//     if(p.price < cheapestProduct.price){
//         cheapestProduct = p
//     }
//   }

//   console.log(cheapestProduct)

// const arr = [1,2,3,4]
// let total = 0;
// for(let t of arr){
//     total += t
// }

// console.log(total)

// const productPrice = []
// for(let product of products){
//     productPrice.push(product.price)
// }

// let totalPrice = 0;
// for(let price of productPrice){
//     totalPrice += price
// }
// console.log(totalPrice)

// let sum = 0;
// for(let p of products){
//     sum += p.price
// }

// console.log(sum)

const products = [
    {name: 'Samsung', price: 10, quantity: 2},//20 
    {name: 'iPhone', price: 10, quantity: 5},//50 = 70
    {name: 'Dell Laptop', price: 10, quantity: 3},// 70 + 30 = 100
    {name: 'Sony Headphones', price: 10, quantity: 10},// 100 + 100 = 200
    {name: 'LG TV', price: 10, quantity: 1}// 200 + 10 = 210
];


let totalPrice = 0;
for(let product of products){
    totalPrice += product.price * product.quantity
}

console.log(totalPrice)