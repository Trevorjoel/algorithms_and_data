/*
*  SPACE COMPLEXITY
* */

// Examples

arr = [100, 4 ,65, 1, 34, 20, 10];
// Space complexity of O(1) because the space needed never changes according to the
// input
function sum(arr) {
    let total = 0; // Variable 1
    for(let i = 0; i < arr.length; i++){ // Variable two (i)
        total += arr[i];
    }
    console.log(total);
    return total;
}

// sum(arr);
// Space complexity O(n)
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(2 * arr[i]); // This gets longer directly in proportion to the input (n)
    }
    console.log(newArr);
}
double(arr);