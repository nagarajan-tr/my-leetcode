// Contains Duplicate III 

function containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff){
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        let bucket = Math.floor(num / (valueDiff + 1));
        if(map.has(bucket) || map.has(bucket - 1)
              || map.has(bucket + 1)){
                return true;
          }
        map.set(bucket, num);
        if(i - indexDiff >= 0){
            map.delete(Math.floor(nums[i - indexDiff] / (valueDiff + 1)));

        }
    }
    return false;
}

console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0)); // true