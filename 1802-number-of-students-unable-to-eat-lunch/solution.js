/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let count0 = 0;
    let count1 = 0;

    for (let j = 0; j < students.length; j++) {
        if (students[j] === 0) {
            count0++
        } else {
            count1++
        }
    }

    for (let i = 0; i < sandwiches.length; i++) {
        if (sandwiches[i] === 0) {
            if (count0 === 0) return count0 + count1
            count0--
        } else {
            if (count1 === 0) return count0 + count1
            count1--
        }
    }

    return 0;
};
