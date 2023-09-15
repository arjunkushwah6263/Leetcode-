/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    console.log(x)
    var numArray = Array.from(String(x));
    console.log(numArray)
    
    if (numArray[0] === "-") {
        var negative = numArray.shift();
        numArray.push(negative)
    }
    
    var reversedArray = numArray.reverse();
    
    console.log(reversedArray);
    
    var solution = reversedArray.join('');
    
    console.log(solution);
    
    
    if(solution > Math.pow(2,31) || solution < Math.pow(-2,31)) {
        return 0;
    }  
    
    return solution
};