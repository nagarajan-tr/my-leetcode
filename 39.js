// Combination Sum

var combinationSum = function(canditates, target){
    const result = [];
    canditates.sort((a, b) => a - b);

    const backtrack = (start, path, remaining) => {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }
        if (remaining < 0) return;

        for (let i = start; i < canditates.length; i++) {
            path.push(canditates[i]);
            backtrack(i, path, remaining - canditates[i]);
            path.pop();
        }
    };
    backtrack(0, [], target);
    return result;
}

console.log(combinationSum([2,3,5], 8)); // Expected output: [[2,2,2,2],[2,3,3],[3,5]]