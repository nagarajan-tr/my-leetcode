// Paskal's Traingle 

function getRow(rowIndex) {
    let row = [];
    // console.log(1,row);
    for (let i = 0; i <= rowIndex; i++) {
        row[i] = 1;
        // console.log(2,row);
        for (let j = i - 1; j > 0; j--) {
            // console.log(2,j,row);
            row[j] = row[j] + row[j - 1];
            // console.log(3,row);
        }
    }
    return row;
}

console.log(getRow(3)); // [1, 3, 3, 1]