// Valid Palindrome II

function ValidPalindrome(s) {
    function isPalindrome(str) {
      let left = 0;
      let right = str.length - 1;

      while (left < right) {
        if (str[left] !== str[right]) {
          return false
        }
      }
      return true
    }

    let left = 0; 
    let right = s.length - 1;


    while (left < right) {
      if (s[left] !== s[right]) {        // Check by removing either left or right character
        return isPalindrome(s.slice(left + 1, right + 1)) || isPalindrome(s.slice(left, right));
      }
      left++;
      right--;
    }

    return true;

}

console.log(ValidPalindrome("abca")); // Output: true
