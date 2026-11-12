/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid){
    let que = [];
    let time = 0;
    let n = grid.length;
    let m = grid[0].length; 
    let ans = false;
    
    for(let i = 0; i<n; i++){
        for(let j = 0; j<m; j++){
            if(grid[i][j] == 2){
             que.push([i, j]);
            }
            if(grid[i][j] == 1){
                ans = true;
            }
        }
    }
    if(ans == false) return 0;


    let c = [-1, 0, 1, 0];
    let r = [0, -1, 0, 1];


    while(que.length > 0){
        for(let z = 0; z<n; z++){
            console.log(grid[z]);
        }
        console.log("---------------------")
        console.log(que + " time:" +  time);
         console.log("*********************")
        let arr = [];

        while(que.length > 0){
            arr.push(que.shift());
        }
        time++;

        for(let i = 0; i<arr.length; i++){
            let two = arr[i];
            let a = two[0];
            let b = two[1];

            for(let j = 0; j<4; j++){
                s = a + r[j];
                t = b + c[j];
                

                if(s < n && t < m && s >= 0 && t >=0){
                    if(grid[s][t] === 1){
                    grid[s][t] = 2;
                    que.push([s, t]);
                    }
                }
            }
        }

    }

    if(checkRotten(grid) == 1) return time-1;
    else return -1;
    
    
};

var checkRotten = function(grid){
    let n = grid.length;
    let m = grid[0].length; 
    let stack = [] 

    for(let i = 0; i<n; i++){
        for(let j = 0; j<m; j++){
            if(grid[i][j] == 1){
               return -1;
            }
        }
    }


   return 1;
}


