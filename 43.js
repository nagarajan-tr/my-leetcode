// Multiply two string 
function multiplyStrings(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";
    let result = new Array(num1.length + num2.length).fill(0);
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            let product = parseInt(num1[i]) * parseInt(num2[j]);
            let sum = product + result[i + j + 1];
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    while(result.length > 1 && result[0] === 0) {
        result.shift(); 
    }

    return result.join("");
}

console.log(multiplyStrings("123", "456")); // Output: "56088"

window.onload = function() {
    let output = document.createElement('div');
    output.innerHTML = "<strong>Multiplication Result:</strong> " + multiplyStrings("123", "456");
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