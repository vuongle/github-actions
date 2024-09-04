function add(numbers) {
    return numbers
        .split(',')
        .map(x => parseInt(x))
        .reduce((a, b) => a + b)
}

function minus(numbers) {
    return numbers
        .split(',')
        .map(x => parseInt(x))
        .reduce((a, b) => a - b)
}

function multiply(numbers) {
    return numbers
        .split(',')
        .map(x => parseInt(x))
        .reduce((a, b) => a * b)
}

exports.add = add;
exports.minus = minus;
exports.multiply = multiply;