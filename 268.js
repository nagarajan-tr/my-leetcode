// 268. Missing Number

var MisingNumber = function(nums){
    let n = nums.length;

    // way 1
    let expectedSum = (n * (n + 1)) / 2; 
    let actualSum = nums.reduce((acc, num) => acc + num, 0); 
    return expectedSum - actualSum; 

    // way 2
    // let ans = 0;
    // for(let i = 0; i <= n; i++){
    //     ans ^= i;
    // }
    // for(let i = 0; i < n; i++){
    //     ans ^= nums[i];
    // }
    // return ans;
}

console.log(MisingNumber([4,6,3,7,5,0,1])); // Expected output: 2