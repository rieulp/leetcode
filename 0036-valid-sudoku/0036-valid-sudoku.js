/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const n = board.length;
    const SIZE = 9;
    
    const hasMap = new Map();
    
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            
            if(board[i][j]!=='.') {
                if(hasMap.has(rowKey(i,board[i][j]))) return false;
                if(hasMap.has(colKey(j,board[i][j]))) return false;
                if(hasMap.has(boxKey(i,j,board[i][j]))) return false;

                hasMap.set(rowKey(i,board[i][j]), true);
                hasMap.set(colKey(j,board[i][j]), true);
                hasMap.set(boxKey(i,j,board[i][j]), true);
            }
        }
    }
    
    return true;
};
        
const rowKey = (row,value) => `row${row}-${value}`;
const colKey = (col,value) => `col${col}-${value}`;
const boxKey = (row,col,value) => `box${Math.floor(row/3)}-${Math.floor(col/3)}-${value}`;