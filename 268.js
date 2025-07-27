// 268. Missing Number

function missingNumber(nums) {
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

let result = missingNumber([3, 0, 1]);

window.onload = function () {
    let output = document.createElement('div');
    output.innerText = "Missing Number: " + result;
    output.style.fontSize = "24px";
    output.style.color = "#fff";
    output.style.background = "linear-gradient(to right, #00c6ff, #0072ff)";
    output.style.padding = "20px";
    output.style.margin = "20px";
    output.style.borderRadius = "10px";
    output.style.width = "fit-content";
    output.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    document.body.appendChild(output);
}