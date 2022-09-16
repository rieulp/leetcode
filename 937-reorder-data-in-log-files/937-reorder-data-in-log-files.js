/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const reg = new RegExp(' [0-9]',)
    
    const digit = [];
    const letter = [];
    
    for(log of logs) {
        if(reg.test(log)) digit.push(log);
        else letter.push(log);
    }
    
    letter.sort((a,b)=>{
        const arr1 = a.split(' ');
        const arr2 = b.split(' ');
        
        if(arr1[1] < arr2[1]) return -1;
        else if(arr1[1] > arr2[1]) return 1;
        else {
            if(arr1[2] < arr2[2]) return -1;
            else if(arr1[2] > arr2[2]) return 1;
            else {
                if(arr1.length < arr2.length) return -1;
                else if(arr1.length > arr2.length) return 1;
                if(arr1[0] < arr2[0]) return -1;
                else return 1;
            }
        }
    })
    
    return [...letter,...digit];
};