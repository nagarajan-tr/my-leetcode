// 78. subsets

function subsets(nums){

    //way 1
    // let res = [[]];
    // for (let num of nums){
    //     let newSubsets = res.map(subsets => [...subsets, num]);
    //     res.push(...newSubsets);
    // }
    // return res;

    // way 2
    let res = [[]];
    for (let num of nums){
        let n = res.length;
        for(let i = 0; i < n; i++){
            let internal = res[i].slice(); // [...res[i], num];
            internal.push(num);
            res.push(internal);
        }
        
    }

    return res;
}

let nums = [1, 2, 3];

let result = subsets(nums);  

window.onload = function () {
    let output = document.createElement('div');
    let formatted = result.map(arr => `[${arr.join(', ')}]`).join('<br>');

    output.innerHTML = "<strong>Subsets of " + nums + ":</strong><br>" + formatted;
    output.style.fontSize = "20px";
    output.style.color = "#fff";
    output.style.background = "linear-gradient(to right, #ff6a00, #ee0979)";
    output.style.padding = "20px";
    output.style.margin = "20px";
    output.style.borderRadius = "10px";
    output.style.width = "fit-content";
    output.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    document.body.appendChild(output);
}
