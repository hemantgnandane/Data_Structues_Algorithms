/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    //make arr to stor ans
    let arr = [] ;


    // make hashmap to store strings and indexs
    let map = new Map();


    //travserase both linkedlist and add strings
        for(let i = 0; i<list1.length; i++)
        map.set(list1[i], i);

    
    console.log(map)

    //conditiong if less then sum in arr then replace if equal then add
    let j = 0;
    let min = 0;
    for(; j<list2.length; j++){
        // console.log(arr);
        if(map.has(list2[j])){
            console.log(list2[j])
            let sum = j + map.get(list2[j]);
            // console.log(sum)
            if(min == sum){
                arr.push(list2[j])
            }
           else if(min > sum){
                arr = [];
                // console.log("i am here")
                arr.push(list2[j])
                min = sum;
            }
            if (arr.length === 0) {
//   console.log("Array is empty");
  arr.push(list2[j]);
  min = sum;
}
           
            
        }

    }


    return arr;
};