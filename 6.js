var numRows = 3;
var s = "PAYPALISHIRING";

function convertZig(s, numRows) {
    if (numRows === 1) return s;

    var all = Array.from({ length: numRows }, () => Array(s.length).fill(""));
    var row = 0;
    var cur = 0;
    var col = 0;

    while (cur < s.length) {
        while (row < numRows && cur < s.length) {
            all[row++][col] = s[cur++];
        }
        row = Math.max(0, row - 2);
        while (row > 0 && cur < s.length) {
            all[row--][++col] = s[cur++];
        }
        col++;
    }
    var ans = "";
    for (var i = 0; i < numRows; i++) {
        for (var j = 0; j < s.length; j++) {
            if (all[i][j] !== "") {
                ans += all[i][j];
            }
        }
    }
    return ans;
}

console.log(convertZig(s, numRows));