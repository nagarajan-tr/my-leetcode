// majorityElement II 

var majorityElement = function(nums) {
    let count1 = 0, count2 = 0;
    let candidate1 = null, candidate2 = null;
    for(let num of nums){
        if(candidate1 !== null && num === candidate1){
            count1++;
        } else if(candidate2 !== null && num === candidate2){
            count2++;
        } else if(count1 === 0){
            candidate1 = num;
            count1 = 1;
        } else if(count2 === 0){
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    count1 = 0;
    count2 = 0;
    for(let num of nums){
        if(num === candidate1){
            count1++;
        } else if(num === candidate2){
            count2++;
        }
    }
    const result = [];
    if(count1 > Math.floor(nums.length / 3)){
        result.push(candidate1);
    }
    if(count2 > Math.floor(nums.length / 3)){
        result.push(candidate2);
    }

    return result;
}

console.log(majorityElement([3,2,3]));
console.log(majorityElement([1]));