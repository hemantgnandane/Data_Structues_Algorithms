
var MinStack = function() {
    this.stack = [];
    // console.log(this.stack);
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let arr = [];
    if(this.stack.length == 0) {
        arr[0] = val;
        arr[1] = val;
    }
    else{
        if(val < this.getMin()) arr[1] = val;
        else{ arr[1] = this.getMin()}

        arr[0] = val;

        
    }

    this.stack.push(arr);
    // console.log(this.stack);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
   let ans  = this.stack[this.stack.length - 1][0];
   this.stack.pop();
    // console.log(this.stack);
    
};
// console.log(this.stack);
/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // console.log(this.stack);
    return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // console.log(this.stack);
    return this.stack[this.stack.length - 1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */