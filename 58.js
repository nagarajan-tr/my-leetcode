// 58. length of last word

function lengthOfLastWord(s) {
    // way 1
    // let words = s.trim().split(/\s+/);
    // return words[words.length - 1].length;

    // way 2
    s = s.trim();
    let length = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            if (length > 0) break; 
        } else {
            length++;
        }
    }
    return length;
}

lengthOfLastWord("Hello World"); // 5

window.onload = function() {
    let output = document.createElement('div');
    output.innerHTML = "<strong>Length of Last Word:</strong> " + lengthOfLastWord("Hello World");
    document.body.appendChild(output);
    output.style.fontSize = "20px";
    output.style.color = "#fff";
    output.style.backgroundColor = "#000";
    output.style.padding = "10px";
    output.style.borderRadius = "5px";
    output.style.textAlign = "center";
    output.style.marginTop = "20px";
    output.style.width = "300px";
}