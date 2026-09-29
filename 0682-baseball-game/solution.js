/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    var record = [];

    for (let i = 0; i < operations.length; i++) {
        var op = operations[i]

        if (op === 'C') {
            record.pop()
        } else if (op === 'D') {
            record.push(record[record.length - 1] * 2)
        } else if (op === '+') {
            let n = record.length
            record.push(record[n - 1] + record[n - 2])
        } else {
            record.push(parseInt(op, 10))
        }
    }

    var sum = 0;
    for (let j = 0; j < record.length; j++) {
        sum += record[j]
    }

    return sum;
};
