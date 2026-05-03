/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let q = [];
    let l = grid.length;
    let b = grid[0].length;
    for(let i = 0;i< l; i++){
        for(let j = 0; j<b; j++){

            if(grid[i][j] == 2){
                q.push([i, j, 0]);
            }
        }
    }
   let level = 0; 

    let r = [0, -1, 0, +1];
    let c = [-1, 0, +1, 0];
 

  while(q.length){
    console.log(q);
    let arr = q.shift();

    
    let ro = arr[0];
    let co = arr[1];
    for(let j =0; j<4; j++){
       rn = (ro + r[j]);
       cn = (co + c[j]);

       if(rn<l && rn>=0 && cn<b && cn>=0)
        if(grid[rn][cn] == 1){
            q.push([rn, cn, arr[2] + 1]);
            grid[rn][cn] = 2;
        }
    }
    level = Math.max(level, arr[2]);
    
  }
  for(let i = 0;i< l; i++){
        for(let j = 0; j<b; j++){
            if(grid[i][j] == 1){
              return -1;
            }
        }
    }
    
    return level;
    
};