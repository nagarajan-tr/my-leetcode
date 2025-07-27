//Remove Elements

function removeElements(nums, val){
    let i = 0; 
    for(let j = 0; j < nums.length; j++){
        if(nums[j] !== val){
            nums[i] = nums[j];
            i++;
        } 
    }

    // return nums.slice(0, i);
    return i;
}

console.log(removeElements([3,2,2,3], 3))