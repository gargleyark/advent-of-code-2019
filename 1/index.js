import data from './data';

console.log('starting day 1...');

const result = data.reduce((acc, item) => acc + (parseInt(item / 3) - 2), 0);

console.log(result);
