const products = [
    { name: 'Huawei P40 Pro', price: 999.99 },
    { name: 'Xiaomi Mi Band 6', price: 49.99 },
    { name: 'OnePlus 9', price: 799.99 },
    { name: 'Fitbit Versa 3', price: 229.99 },
    { name: 'Google Pixel 6', price: 699.99 },
    { name: 'Garmin Forerunner 945', price: 599.99 },
    { name: 'Sony Xperia 5 III', price: 1099.99 },
    { name: 'Samsung Galaxy Watch 4', price: 349.99 },
    { name: 'Apple iPhone 13 Pro Max', price: 1099.99 },
    { name: 'Oppo Find X5 Pro', price: 1199.99 }
];

const searchProduct = ( products, searchText ) =>{
    const choosenProduct = []
    for ( let product of products){
        if ( product.name.indexOf(searchText) !== -1){
            choosenProduct.push(product)
        }
    }
    return choosenProduct;
}

const result = searchProduct(products, 'Pro')
console.log(result)