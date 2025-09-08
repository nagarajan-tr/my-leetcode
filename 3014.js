// Minimum number of pushes type word I 

function minPushes(word) {
    let len = word.length, keypress = 0, f = 1;
    while(len !== 0){

        // let curr = word.charCodeAt(f);
        // let next = word.charCodeAt((f + 1) % word.length);
        // let diff = Math.abs(curr - next);
        // keypress += Math.min(diff, 26 - diff);
        // f++;
        // len--;

        if(len <= 8){
            return keypress+(len*f);
        }

        len -= 8;
        keypress += 8*f;
        f++;
    }

}

console.log(minPushes("xycdefghij"));