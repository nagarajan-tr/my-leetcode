// reversString

var reversString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Swap characters at left and right indices
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        // Move towards the middle
        left++;
        right--;
    }

    return s;
}

console.log(reversString(['h', 'e', 'l', 'l', 'o'])); // Expected output: ['o', 'l', 'l', 'e', 'h']