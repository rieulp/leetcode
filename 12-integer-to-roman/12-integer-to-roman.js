const Roman = {1000:'M',900:'CM',500:'D',400:'CD',100:'C',90:'XC',50:'L',40:'XL',10:'X',9:'IX',5:'V',4:'IV',1:'I'};

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let result='';
  const keys = Object.keys(Roman);
  const length = keys.length;
    
  while(num>0) {
    keys.forEach((_,i)=>{
      const v = keys[length-i-1];
      const div = parseInt(num/(+v));
        
      if(div>0) {
        result+=Roman[v].repeat(div);
        num-=div*(+v);
          
        return false;
      }
    })
  }
  
  return result;
};