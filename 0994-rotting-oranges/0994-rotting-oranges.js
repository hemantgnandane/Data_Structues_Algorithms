/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let q = [];
    let l = grid.length;
    let b = grid[0].length;
    let fresh = 0;
    for(let i = 0;i< l; i++){
        for(let j = 0; j<b; j++){

            if(grid[i][j] == 2){
                q.push([i, j]);
            }
            if(grid[i][j] == 1) fresh++;
        }
    }
    if(fresh==0) return 0;

    let r = [0, -1, 0, +1];
    let c = [-1, 0, +1, 0];

   let k = q.length; 
   let time = -1; 

  while(q.length){
    console.log(q);
    time++;
    let arr = [];

    while(q.length){
        arr.push(q.shift())
    }

    for(let m = 0; m< arr.length; m++){
    let ro = arr[m][0];
    let co = arr[m][1];
    for(let j =0; j<4; j++){
       rn = (ro + r[j]);
       cn = (co + c[j]);

       if(rn<l && rn>=0 && cn<b && cn>=0)
        if(grid[rn][cn] == 1){
            q.push([rn, cn]);
            grid[rn][cn] = 2;
        }
    }
    }
  }
  for(let i = 0;i< l; i++){
        for(let j = 0; j<b; j++){
            if(grid[i][j] == 1){
              return -1;
            }
        }
    }
    
    return time;
    
};