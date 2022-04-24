/**
 *  In main file
 *  let kmp = require('./kmp');
 *  console.log(kmp.find('informatika', 'mati'));
 */

 function find(text, pattern) {
    const n = text.length;
    const m = pattern.length;
    
    function computeFail(pattern){
      let fail = [];
      fail.push(0);
      
      const m = pattern.length;
      let j = 0;
      let i = 1;
      
      while(i<m){
        if(pattern[j] == pattern[i]){
          fail.push(j+1);
          i++;
          j++;
        }else if(j>0){
          j = fail[j-1];
        }else{
          fail.push(0);
          i++;
        }
      }
      return fail;
    }
    
    const fail = computeFail(pattern);
    let i = 0;
    let j = 0;
    
    while (i<n){
      if(pattern[j] == text[i]){
        if(j == m-1){
          return i - m + 1;
        }
        i++;
        j++;
      }else if (j>0){
        j = fail[j-1];
      }else{
        i++;
      }
    }
    return -1;
}

module.exports = { find };