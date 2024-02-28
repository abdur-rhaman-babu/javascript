// inchTofeet
const inchTofeet = (inches)=>{
    const result = inches/12
    return result
}
const totalFeet = inchTofeet(48)
// console.log(totalFeet)//4 feet

// centimeterTometer
const centimeterTometer = (centimerer) =>{
    const result = centimerer / 100;
    return result;
}
const totalMeter = centimeterTometer(500)
console.log(totalMeter)//5

// pageRequirement
const pageRequirement = (book1, book2, book3) =>{
    const totalPageofbook1 = book1 * 3;
    const totalPageofbook2 = book2 * 5;
    const totalPageofbook3 = book3 * 4;
    return totalPageofbook1 + totalPageofbook2 + totalPageofbook3
}
const totalPagesOfAllBook = pageRequirement(100, 200, 300)
console.log(totalPagesOfAllBook)

// findLagreString
const name = ['mubin', 'Abdur Rhaman Babu', "FM hadiuzzaman Hadi Nahid"]
const getLarestString = (name) =>{
    let longest = ''

    for( let n of name){
        if ( n.length > longest.length){
            longest = n
        }
    }
    return longest
}
const largestString = getLarestString(name);
console.log(largestString.length, largestString)


// return positive number
const number = [1,2,5,7,10,-5,10,23,12]
const getPositiveNumber = (number) =>{
    const beforePositive = []
    for (let num of number) {
        if (num < 0) {
           break;
        }
        else {
            beforePositive.push(num)
        }
    }
    return beforePositive;
}
const positiveNumber = getPositiveNumber(number)
// console.log(positiveNumber)

