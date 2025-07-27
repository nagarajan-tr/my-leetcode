// Remove duplicate elements from a sorted array

function removeDuplicates(nums) {
   let k = 1;

   for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
   }

    // return k;
    return nums.slice(0, k);
}

console.log(removeDuplicates([1, 1, 2, 2, 4, 5, 5])); 