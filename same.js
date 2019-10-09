/*
* Write a function called same which accepts two arrays.
* The function should log true if every value in the array has it's corresponding
*  value squared in the second array. THE FREQUENCY OF VALUES MUST BE THE SAME
*
* */

// O(n^2)
// This is problematic with larger data sets as its a quadratic relationship
/*
function same(arr1, arr2){
    let answer;
    // If the arrays are different sizes return
    if (arr1.length !== arr2.length){
    
        return   console.log('false');
    }
    for(let i = 0; i < arr1.length; i++){ // First loop
        let correctIndex = arr2.indexOf(arr1[i] ** 2); // 2nd loop indexOf() is nested
        console.log(arr2);
        if (correctIndex === -1){
    
           return console.log('false');
            
        }
        arr2.splice(correctIndex, 1)
    }
    
    return console.log('true');
}
*/


//
function same1(arr1, arr2){
    if (arr1.length !== arr2.length){
        return   console.log('false');
    }
    // Create 2 objects to count the frequency of individual values
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    for (let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0 ) + 1;
        console.log(val);
    }
    for (let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0 ) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return console.log('false');
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return console.log('false');
        }
    }
    return console.log('true');
}
same1([2, 3,5, 1], [9, 25, 1, 4]);