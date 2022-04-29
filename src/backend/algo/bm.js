/**
 *  In main file
 *  let bm = require('./bm');
 *  console.log(bm.find('informatika', 'mati'));
 */

 function find(text, pattern) {
    function buildLast(pattern){
      let last = [];
      for(let i=0; i<128; i++){
        last.push(-1);
      }
      
      for(let i=0; i<pattern.length; i++){
        last[pattern.charCodeAt(i)] = i;
      }
      return last;
    }
    
    const last = buildLast(pattern);
    const n = text.length;
    const m = pattern.length;
    
    let i = m-1;
    if(i > n-1){
      return -1;
    }
    
    let j = m-1;
    do{
      if(pattern[j] == text[i]){
        if(j==0){
          return i;
        }else{
          i--;
          j--;
        }
      }else{
        let lo = last[text.charCodeAt(i)];
        i = i + m - Math.min(j, 1+lo);
        j = m-1;
      }
    }while(i<=n-1);
    
    return -1;
  }
  
  module.exports = { find };