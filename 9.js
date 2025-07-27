var x = 121;

var isPalindrome = function(x) {
    var ans = 0;
    var y = x;
    while( x > 0){
        var rem = x % 10;    
        ans = ans * 10 + rem;
        x = Math.floor(x/10);
    }
    if(ans == y){
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(x));