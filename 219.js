// 219 contain duplicate II 

function containNearbyDuplicate(nums, k){
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i]) && i - map.get(nums[i]) <= k){
            return true;
        }

        map.set(nums[i], i);
    }

    return false;
}

let nums = [1,2,3,1];
let k = 3;
let result = containNearbyDuplicate(nums,k);

window.onload = function () {
    let output = document.createElement('div');
    output.innerHTML = "<strong>Contains Duplicate II:</strong> " + (result ? "Yes" : "No");
    document.body.appendChild(output);
    output.style.fontSize = "20px";
    output.style.color = "#fff";
    output.style.backgroundColor = "#000";
    output.style.padding = "10px";
    output.style.borderRadius = "5px";
    output.style.textAlign = "center";
}