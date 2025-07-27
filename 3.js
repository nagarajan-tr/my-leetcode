var s = "abcbcabbcc";
var count = new Map();
var start = 0;
var end = 0;
var ans = 0;

function substring(s) {
    while (end < s.length) {

        count.set(s[end], (count.get(s[end]) || 0) + 1);

        while (count.get(s[end]) > 1) {
            count.set(s[start], count.get(s[start]) - 1);
            start++;
        }

        ans = Math.max(ans, end - start + 1);
        end++;
    }
    return ans;
}

console.log(substring(s));
        

// var map = new Map();
// for (var i = 0; i < s.length; i++) {
//     var com = s[i];
//     if (!map.has(com)) {
//         count++;
//         map.set(com, true);
//     }
// }

// console.log(count);


