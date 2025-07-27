// Logest comman prefix

const input = ["flower", "flow", "flight"];

function longestCommonPrefix(strs) {
    strs.sort();
    if(strs.legth === 0) return "";

    let prefix = strs[0];
    let strlast = strs[strs.length - 1];
    let index = 0;

    while(index < prefix.length) {
        if(prefix[index] == strlast[index]){
            index ++;
        }else{
            break;
        }      
    }
    return index == 0 ? "" : prefix.substring(0, index);
}   
console.log("Longest common prefix is: "+longestCommonPrefix(input)); 