/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;
    
    if(m*n!==r*c) return mat;
    
    const matrix = Array.from({length:r},()=>[]);

    mat.flat().forEach((v,i)=>{
        const row = Math.floor(i/c);
        matrix[row].push(v);
    })
    
    return matrix;
};