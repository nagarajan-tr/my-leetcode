// 28. Find the Index of the First Occurrence in a String

function strStr(haystack, needle) {
    // way 1
    // return haystack.indexOf(needle);

    // way 2
    if (needle.length === 0) return
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let j = 0;
            while (j < needle.length && haystack[i + j] === needle[j]) {
                j++;
            }
            if (j === needle.length) {
                return i;
            }
        }
    }
    return -1;
}

const haystack = "hello";
const needle = "ll";
const result = strStr(haystack, needle);

window.onload = function() {
    let output = document.createElement('div');
    output.innerHTML = "<strong>Index of First Occurrence:</strong> " + (result !== -1 ? result : "Not Found");
    document.body.appendChild(output);
    output.style.fontSize = "20px";
    output.style.color = "#fff";
    output.style.backgroundColor = "#000";
    output.style.padding = "10px";
    output.style.borderRadius = "5px";
    output.style.textAlign = "center";
}