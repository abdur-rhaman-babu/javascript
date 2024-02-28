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
// console.log(totalMeter)//5

// pageRequirement
const pageRequirement = (book1, book2, book3) =>{
    const totalPageofbook1 = book1 * 3;
    const totalPageofbook2 = book2 * 5;
    const totalPageofbook3 = book3 * 4;
    return totalPageofbook1 + totalPageofbook2 + totalPageofbook3
}
const totalPagesOfAllBook = pageRequirement(100, 200, 300)
// console.log(totalPagesOfAllBook)

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
// console.log(largestString.length, largestString)


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


// seerToMon
const seerToMon = (seer) =>{
    const result = seer / 40
    return result;
}
const totalMon = seerToMon(120)
// console.log(totalMon)

// probelm 1 done

const friendName = ['Abdullah', 'Sahidul', 'Abdur Rhaman', 'Mubin', 'Rana Gazi'];
const bestFriend  = (names) =>{
  
    for( let name of names){
        if ( name.length === 5 ){
            return bestName = name;
        }
    }

}
const bestFriendname = bestFriend(friendName);
// console.log(bestFriendname)

// deliveryCost 
const deliveryCost = (pieces) =>{
    const first100Pieces = 100;
    const second100Pieces = 80;
    const restOfPiecesAll = 50;
    if(pieces <= 100){
        const totalPrice = pieces * first100Pieces;
        return totalPrice;
    }
    else if ( pieces <= 200) {
        const costOfFirst100 = 100 * first100Pieces;
        const costOfSecond100 = pieces - 100;
        const secondPieces = costOfSecond100 * second100Pieces;
        const  totalPrice = costOfFirst100 + secondPieces
        return totalPrice;
    }
    else{
        const costOfFirst100 = 100 * first100Pieces;
        const costOfSecond100 = 100 * second100Pieces;
        const restOfPieces = pieces - 200;
        const secondPieces = restOfPieces * restOfPiecesAll;
        const  totalPrice = costOfFirst100 + secondPieces + costOfSecond100
        return totalPrice;
    }
}
const totalPrice = deliveryCost(210);
// console.log(totalPrice)




