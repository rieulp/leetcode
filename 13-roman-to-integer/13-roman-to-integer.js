/**
 * @param {string} s
 * @return {number}
 */
const Roman = {
  I:1,V:5,X:10,L:50,C:100,D:500,M:1000,
  IV:4,IX:9,XL:40,XC:90,CD:400,CM:900,
};

var romanToInt = function(s) {
  let result=0;
  const arr = [...s];
  let i=0;
  
  for(i=0;i<s.length-1;i++) {
    if((arr[i]+arr[i+1]) in Roman) {
      result += Roman[arr[i]+arr[i+1]];
      i++;
    }else {
      result+=Roman[arr[i]];
    }
  }
    
  if(arr[i]) result+=Roman[arr[i]];
  
  return result;
  
};