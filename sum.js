const sumArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        }
    return sum;
}
console.log(sumArray(numbers));

module.exports.sumArray = sumArray;