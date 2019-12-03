import data from './data';

console.log('starting day 1.5...');

const calculateFuel = item => {
    const fuel = (parseInt(item / 3) - 2);
    return fuel > 0 ? fuel : 0;
};

const result = data.reduce((acc, item) => {
    let totalFuelRequired = 0;
    let fuel = calculateFuel(item);

    while (fuel) {
        totalFuelRequired+=fuel;
        fuel = calculateFuel(fuel);
    }
    
    return acc + totalFuelRequired;
}, 0);

console.log(result);