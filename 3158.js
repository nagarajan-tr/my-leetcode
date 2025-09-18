// Find XOR of Numbers Which appear Twice

function duplicateNumbersXOR(nums){
    let xor = 0;
    let seen = new Set();

    for(let num of nums){
        if(seen.has(num)){
            xor ^= num;
        } else {
            seen.add(num);
        }
    }

    return xor;
}

console.log(duplicateNumbersXOR([1,2,3,2,1,4])); // 3