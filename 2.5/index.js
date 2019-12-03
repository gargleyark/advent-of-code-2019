import data from './data';

console.log('starting day 2.5...');

let noun = 0;
let verb = 0;
let result = 0;

while (noun < 100 && !result) {
    while (verb < 100 && !result) {
        let mutatedData = [...data];

        mutatedData[1] = noun;
        mutatedData[2] = verb;

        let count = 0;
        let stop = false;
        
        while (!stop && mutatedData[count] !== undefined) {
            const action = mutatedData[count];
            const value1Location = mutatedData[count + 1];
            const value2Location = mutatedData[count + 2];
            const storageLocaton = mutatedData[count + 3];
            
            if (action === 1) {
                mutatedData[storageLocaton] = mutatedData[value1Location] + mutatedData[value2Location];

            } else if (action === 2) {
                mutatedData[storageLocaton] = mutatedData[value1Location] * mutatedData[value2Location];
            } else {
                stop = true;
            }

            count+=4;
        }

        if (mutatedData[0] === 19690720) {
            result = 100 * noun + verb
        }

        verb++;
    }
    verb = 0;
    noun++;
}


console.log(result);
