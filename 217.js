// 217 - Contain duplicate

function containsDuplicate(nums) {
    let set = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (set.get(nums[i])) {
            return true;
        }
        set.set(nums[i], true);
    }
    return false;
}

let result = containsDuplicate([1, 2, 3, 1]);

window.onload = function () {
    let output = document.createElement('div');
    output.innerHTML = "<strong>Contains Duplicate:</strong> " + (result ? "Yes" : "No");
    document.body.appendChild(output);
    output.style.fontSize = "20px";
    output.style.color = "#fff";
    output.style.backgroundColor = "#000";
    output.style.padding = "10px";
    output.style.borderRadius = "5px";
    output.style.textAlign = "center";
}