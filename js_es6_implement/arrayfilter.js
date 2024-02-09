const products = [
    {
      name: 'Laptop',
      category: 'Electronics',
      price: 1200,
      brand: 'Apple',
      inStock: true
    },
    {
      name: 'Running Shoes',
      category: 'Footwear',
      price: 80,
      brand: 'Nike',
      inStock: false
    },
    {
      name: 'Smartphone',
      category: 'Electronics',
      price: 800,
      brand: 'Samsung',
      inStock: true
    },
    {
      name: 'T-shirt',
      category: 'Apparel',
      price: 20,
      brand: 'Adidas',
      inStock: true
    },
    {
      name: 'Coffee Maker',
      category: 'Appliances',
      price: 50,
      brand: 'Keurig',
      inStock: false
    }
  ];


//   const result = products.filter((product)=>{
//     if(product.category === 'Electronics'){
//         return product;
//     }
//   })

//   console.log(result)

const arrayFilter = (arr,cb) =>{
    let newArray = []
    for(let i = 0; i<arr.length; i++){
       if(cb(arr[i])){
        newArray.push(arr[i])
       }
    }
    return newArray;
}

const result = arrayFilter(products,(v)=>{
    return v.category === 'Electronics';
});
console.log(result)


