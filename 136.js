// SingleNumber 

const singleNumber = (nums) => {
    let result = 0;
    for (let num of nums) {
        result ^= num; // XOR operation
    }
    return result;
}
console.log(singleNumber([2,2,1])) // Expected output: 1