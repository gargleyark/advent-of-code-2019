import data from './data';

console.log('starting day 2...');

data[1] = 12;
data[2] = 2;

let count = 0;
let stop = false;

while (!stop && data[count] !== undefined) {
    const action = data[count];
    const value1Location = data[count + 1];
    const value2Location = data[count + 2];
    const storageLocaton = data[count + 3];
    
    if (action === 1) {
        data[storageLocaton] = data[value1Location] + data[value2Location];
    } else if (action === 2) {
        data[storageLocaton] = data[value1Location] * data[value2Location];
    } else if (action === 99) {
        stop = true;
    } else {
        throw new Error(`Invalid opcode found ${action} at position ${count}`, data);
    }
    count+=4;
}


console.log(data[0]);
