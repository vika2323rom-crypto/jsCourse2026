const isThreePower = (num) => {
    if (num <= 0) {
        return false;
    }
    while(num % 3 === 0) {
        num = num / 3;
    }
    return num === 1;

};
console.log(isThreePower(1)); // true
console.log(isThreePower(2)); // false
console.log(isThreePower(27)); // true
console.log(isThreePower(0)); // false
console.log(isThreePower(-3)); // false
export default isThreePower;