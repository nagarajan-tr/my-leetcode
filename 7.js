var n = -987;

function reverse(n) {
    var ans = 0;

    var neg = n < 0;
    n = Math.abs(n);

    while (n > 0) {

        var r = n % 10;
        ans = ans * 10 + r;
        n = Math.floor(n / 10);
    }
    if (ans < -(2 ** 31) || ans > (2 ** 31) - 1) {
        return 0;
    }

    if(neg){
        ans = -ans;
    }
    return ans;
}

console.log(reverse(n));