
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const newArr = [];
    if(matrix) {
        for (let x = 0; x < matrix.length; x++) {
            if(x % 2 != 0) {
                for(let y = (matrix[x].length - 1); y >= 0; y--) {
                    newArr.push(matrix[x][y]);
                }
            } else {
                for(let y = 0; y < matrix[x].length; y++) {    
                    newArr.push(matrix[x][y]);
                }
            }  
        }
    }
    
    return newArr;  
}
