// 46. Permutations

function permute(nums) {
    const result = [];
    
    function backtrack(start) {
        if (start === nums.length) {
            result.push(nums.slice());
            return;
        }
        
        for (let i = start; i < nums.length; i++) {
            swap(start, i);
            backtrack(start + 1);
            swap(start, i);
        }
    }
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    backtrack(0);
    return result;
}

console.log(permute([1,2,3]));
console.log(permute([0,1]));
console.log(permute([1]));

window.onload = function() {
    let output = document.createElement('div');
    output.innerHTML = "<strong>Permutations:</strong> " + JSON.stringify(permute([1, 2, 3]));
    document.body.appendChild(output);
    output.style.fontSize = "20px";
    output.style.color = "#fff";
    output.style.backgroundColor = "#000";
    output.style.padding = "10px";
    output.style.borderRadius = "5px";
    output.style.textAlign = "center";
}