let nums = [-1, 0, 1, 2, -1, -4];

function threeSum(nums) {
    nums.sort((a, b) => a - b);  
    if (nums.length < 3) return [];

    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

let result = threeSum(nums);  

window.onload = function () {
    let output = document.createElement('div');
    let formatted = result.map(arr => `[${arr.join(', ')}]`).join('<br>');

    output.innerHTML = "<strong>Three Sum Results:</strong><br>" + formatted;
    output.style.fontSize = "20px";
    output.style.color = "#fff";
    output.style.background = "linear-gradient(to right, #ff6a00, #ee0979)";
    output.style.padding = "20px";
    output.style.margin = "20px";
    output.style.borderRadius = "10px";
    output.style.width = "fit-content";
    output.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    document.body.appendChild(output);
}
