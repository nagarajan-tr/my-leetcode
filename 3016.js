// Minimum number of pushes type word II

var minimumPushes = function(word) {
    let freq = {};
    for(let ch of word){
        freq[ch] = (freq[ch] || 0) + 1;
        // console.log(1, freq[ch]);
    }

    let counts = Object.values(freq).sort((a, b) => b - a);
    // console.log(2, counts);
    let totalPushes = 0;
    // console.log(3, totalPushes);
    for(let i = 0; i < counts.length; i++){

        // console.log(4, i);
        let cost = Math.floor(i / 8) + 1;
        // console.log(5, cost);
        // console.log(6, counts[i]);
        totalPushes += counts[i] * cost;
        // console.log(7, totalPushes);
    }

    return totalPushes;
};