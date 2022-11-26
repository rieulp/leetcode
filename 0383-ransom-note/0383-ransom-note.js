/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length>magazine.length) return false;
    const letters = new Map();
    for(let x of magazine) letters.set(x, (letters.get(x)||0) + 1)
    for(let x of ransomNote) {
        if(!letters.has(x) || letters.get(x)<1) return false;
        if(letters.has(x)) letters.set(x, letters.get(x)-1);
    }
    return true;
};