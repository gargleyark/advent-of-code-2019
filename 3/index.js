import data from './data'

console.log('starting day 3...')

const center = [['o']]

const setWireLocation = (x, y, wire) => {
    center[x] = center[x] || []

    center[x][y] = (!center[x][y] || center[x][y] === wire) ? wire : 3
}

let x = 0
let y = 0

const drawWire = (directionString, wireType) => {
    let stepCount = parseInt(directionString.replace(/\w/, ''))
    let direction = directionString[0]

    if (direction === 'R') {
        for (let i = 1; i <= stepCount; i++) {
            setWireLocation(x + i, y, wireType)
        }
    }

    if (direction === 'L') {
        for (let i = 1; i <= stepCount; i++) {
            setWireLocation(x - i, y, wireType)
        }
    }

    if (direction === 'U') {
        for (let i = 1; i <= stepCount; i++) {
            setWireLocation(x, y - i, wireType)
        }
    }

    if (direction === 'D') {
        for (let i = 1; i <= stepCount; i++) {
            setWireLocation(x, y + i, wireType)
        }
    }
}

data[0].split(',').forEach(direction => drawWire(direction, 1))
data[1].split(',').forEach(direction => drawWire(direction, 2))

console.log((center[0].length))
