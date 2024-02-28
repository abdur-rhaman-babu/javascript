const haveAnimalPerDensity = (miles) =>{
    const firstDenseAnimalsper10 = 10;
    const secondDenseAnimalsper10 = 50;
    const restDensityAnimals = 100;
    if(miles <= 10){
        const totalAnimals = miles * firstDenseAnimalsper10
        return totalAnimals;
    }
    else if( miles <= 20){
        const firstDensityAnimals = 10 * firstDenseAnimalsper10;
        const secondDensityAnimals = miles - 10;
        const totalAnimals = secondDensityAnimals * secondDenseAnimalsper10
        return totalAnimals + firstDensityAnimals;
    }
    else{
        const firstDensityAnimals = 10 * firstDenseAnimalsper10;
        const secondDensityAnimals = 10 * secondDenseAnimalsper10;
        const reseDensityAnimals = miles - 20;
        const totalAnimals = reseDensityAnimals * restDensityAnimals
        return totalAnimals + secondDensityAnimals + firstDensityAnimals;
    }
}
const result = haveAnimalPerDensity(25)
console.log(result)