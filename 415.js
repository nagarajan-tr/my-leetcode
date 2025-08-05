// 415. Addstring 

function addString(num1, num2){
    let result = [];
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;

        const sum = digit1 + digit2 + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);

        i--;
        j--;
    }

    return result.reverse().join('');
}

console.log(addString("123", "456")); // Output: "579"