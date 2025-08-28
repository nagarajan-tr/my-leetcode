// Check if every row and column contains all number 

const checkValid = function (mat){
    const n = mat.length;
    const expectedSet = new Set();

    // console.log(1,n);
    // console.log(2, expectedSet);
    
    for (let i = 1; i <= n; i++) {
        expectedSet.add(i);
        // console.log(3, expectedSet);
    }

    // console.log(4, expectedSet);

    for (let i = 0; i < n; i++) {
        // console.log(5, i);
        const rowSet = new Set();
        // console.log(6, rowSet);
        const colSet = new Set();
        // console.log(7, colSet);
        
        for (let j = 0; j < n; j++) {
            // console.log(8, j);
            rowSet.add(mat[i][j]);
            // console.log(9, mat[i][j]);
            // console.log(10, rowSet);
            colSet.add(mat[j][i]);
            // console.log(11, mat[j][i]);
            // console.log(12, colSet);

        }
        
        // console.log(13, rowSet);
        // console.log(14, colSet);
        if (rowSet.size !== n || colSet.size !== n) {
            // console.log(15, rowSet);
            // console.log(16, colSet);
            return false;
        }
        // console.log(17, expectedSet);
        // console.log(18, rowSet);
        // console.log(19, colSet);

        for (let num of expectedSet) {
            // console.log(20, num);
            // console.log(21, rowSet);
            // console.log(22, colSet);
            if (!rowSet.has(num) || !colSet.has(num)) {
                return false;
            }
        }
    }
    
    return true;
}

console.log(checkValid([[1,2,3],[3,1,2],[2,3,1]])); 