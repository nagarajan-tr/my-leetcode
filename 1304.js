// Find N Unique Integer Sum up to Zero 

function sumZero(n) {
    let arr = [];
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        arr.push(i);
        arr.push(-i);
    }
    if (n % 2 !== 0) {
        arr.push(0);
    }
    return arr;
}


console.log(sumZero(5));