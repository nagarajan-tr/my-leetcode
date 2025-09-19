// Single Number II 

function singleNumberII(nums){
    let ones = 0, twos = 0;
    for(let num of nums){
        ones = (ones ^ num) & ~twos;
        twos = (twos ^ num) & ~ones;
    }
    return ones;
}

console.log(singleNumberII([2,2,3,2]));