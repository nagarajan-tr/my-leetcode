// single Number III

function singleNumberIII(nums){
    // solution 1

    let xor = 0;
    for(let num of nums){
        xor ^= num;
    }
    console.log(1,xor);
    let diff = xor & -xor;
    console.log(2,diff);
    console.log(3,xor & diff);
    let a = 0;
    let b = 0;
    for(let num of nums){
        console.log(4,num);
        if(num & diff){
            console.log(5,num);
            a ^= num;
            console.log(6,a);
        } else {
            b ^= num;
            console.log(7,b);
        }
    }
    console.log(8,a,b);
    return [a, b];

    // solution 2

    // let xor = 0;
    // for(let num of nums){
    //     xor ^= num;
    // }
    // let diff = 1;
    // while((xor & diff) === 0){
    //     diff <<= 1;
    // }
    // let a = 0;
    // let b = 0;
    // for(let num of nums){
    //     if((num & diff) ===  0){
    //         a ^= num;
    //     }   else {
    //         b ^= num;
    //     }
    // }
    // return [a, b];
}

console.log(singleNumberIII([1,2,1,3,2,5]));
console.log(singleNumberIII([0,1]));