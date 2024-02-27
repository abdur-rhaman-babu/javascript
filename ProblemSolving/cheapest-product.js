const product = [
    {"name": "Laptop", "price": 999, "year": 2023},
    {"name": "Smartphone", "price": 799, "year": 2022},
    {"name": "Headphones", "price": 149, "year": 2024},
    {"name": "Tablet", "price": 499, "year": 2023},
    {"name": "Smartwatch", "price": 299, "year": 2022},
    {"name": "Camera", "price": 599, "year": 2023},
    {"name": "Gaming Console", "price": 399, "year": 2024},
    {"name": "Bluetooth Speaker", "price": 79, "year": 2022},
    {"name": "Fitness Tracker", "price": 129, "year": 2023},
    {"name": "External Hard Drive", "price": 129, "year": 2024}
  ]

  let cheapestProduct = product[0]
  
  for(let p of product){
    if(p.price < cheapestProduct.price){
        cheapestProduct = p
    }
  }

  console.log(cheapestProduct)