// 47. permutation II

function permuteUnique(nums) {
    let result = [];
    nums.sort((a, b) => a - b); // Sort to handle duplicates
    backtrack(nums, [], new Set(), result);
    return result;

    function backtrack(nums, path, used, result) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (used.has(i)) continue; 
            if (i > 0 && nums[i] === nums[i - 1] && !used.has(i - 1)) continue; 
            
            used.add(i);
            path.push(nums[i]);
            backtrack(nums, path, used, result);
            path.pop();
            used.delete(i);
        }
    }
}

let result= permuteUnique([1, 1, 2]);

console.log(result);

window.onload = function() {
    let output = document.createElement('div');
    output.innerHTML = "<strong>Permutations II:</strong> " + JSON.stringify(result);
    document.body.appendChild(output);
    output.style.fontSize = "20px";
    output.style.color = "#fff";
    output.style.backgroundColor = "#000";
    output.style.padding = "10px";
    output.style.borderRadius = "5px";
    output.style.textAlign = "center";
}