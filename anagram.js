/*
* Given two strings, write a function to determine if the second string in an anagram of the first
* An anagram is a word, phrase or name formed by rearranging the letters of another.
* Example: cinema is an anagram of iceman.
*
*
Problem solving template:

UNDERSTAND THE PROBLEM!

1) Can I restate the problem in my own words?
 check that all the caracters in string 1 matches string 2
 *
2) What are the inputs that go into the problem?
Two strings
3) What are the outputs that should come from the solution to the problem?
the function returns true of false
4) Can the outputs be determined from the inputs? In other words do I have enough information to solve the problem? ( You may not be able to answer this initially but it’s worth consideration).
yes
5) How do I label the important pieces of data that are a part of the problem?
*
* */

let str1 = 'ahatsoff';
let str2 = 'offhats';

/*function validAnagram(str1, str2){
    
    if (str1.length !== str2.length){
        return   console.log('false');
    }
    // declare objects to store the characters
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    for(let i = 0; i < str1.length; i++){
      frequencyCounter1[str1[i]] = (frequencyCounter1[str1[i]] || 0 ) + 1;
        console.log(frequencyCounter1);
    }
    for(let i = 0; i < str2.length; i++){
        frequencyCounter2[str2[i]] = (frequencyCounter2[str2[i]] || 0 ) + 1;
        console.log(frequencyCounter2);
    }
    for (let i = 0; i < str1.length; i++){
        if (!(str1[i] in frequencyCounter2)){
            return console.log('false');
        }
    }
    return console.log('true');
}*/
validAnagram1(str1, str2);

// Better solution

function validAnagram1(first, second){
    if (first.length !== second.length){
        return false;
    }
    const lookup = {};
    for (let i = 0; i < first.length; i ++){
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < second.length; i++){
        let letter = second[i];
        if (!lookup[letter]) {
            return false;
        }else{
            lookup[letter] -= 1;
        }
    }
    return true;
}