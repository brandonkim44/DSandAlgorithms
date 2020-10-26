// Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.) 

//O(N)
const urlify = (str, length) => {
    let trueStr = str.slice(0, length);
    let resultArr = [];
    trueStr.split("").forEach(char => {
        if (char !== " ") {
            resultArr.push(char);
        } else {
            resultArr.push('%20');
        }
    });
    return resultArr.join("");
};

console.log(urlify("Mr John Smith    ", 13)); //"Mr%20John%20Smith"