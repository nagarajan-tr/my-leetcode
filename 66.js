// Plus one

var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0; // Set current digit to 0 if it was 9
        if (i === 0) {
            digits.unshift(1); // If we are at the first digit, add 1 at the start
        }
    }
    return digits;
};

console.log(plusOne([9,9])); // [1,2,4]