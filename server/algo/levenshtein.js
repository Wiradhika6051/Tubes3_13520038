/**
 *  In main file
 *  let levenshtein = require('./levenshtein.js');
 *  console.log(kmp.levenshtein('informatika', 'matematika'));
 */

 function lev(a, b){
    const n = a.length;
    const m = b.length;
    var mat = [];
    for(var i=0; i<=n; i++) {
      mat[i] = new Array(m+1);
    }
    for(let i=0; i<=n; i++){
        for(let j=0; j<=m; j++){
            if(Math.min(i,j) == 0){ 
              mat[i][j] = Math.max(i, j);
            }
            else{
                let lev1 = mat[i-1][j] + 1;
                let lev2 = mat[i][j-1] + 1;
                let lev3 = mat[i-1][j-1] + (a[i-1] == b[j-1] ? 0 : 1) ;
                mat[i][j] = Math.min(lev1, lev2, lev3);
            }
        }
    }
    return mat[n][m];
}

module.exports = { lev };