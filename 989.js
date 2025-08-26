// Add to Array-Form of Integer

function AddArrayFormofInt(num, k){
    let n = num.length;
    let carry = 0;
    let result = [];
    
    for(let i = n - 1; i >= 0 || k > 0 || carry > 0; i--){
        let digit1 = i >= 0 ? num[i] : 0;
        let digit2 = k > 0 ? k % 10 : 0;
        
        let sum = digit1 + digit2 + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
        
        k = Math.floor(k / 10);
    }
    
    return result.reverse();
}

console.log(AddArrayFormofInt([1,2,0,0], 34));