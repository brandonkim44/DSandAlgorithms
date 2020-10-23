// implement an algorithm to determine if a string has all unique characters
// what if you cannot use additional DS?

const isUnique = (str) => {
    let array = str.split("");
    let obj = {};
    array.forEach(element => {
        obj[element] = true;   
    });
    if (Object.keys(obj).length === str.length) return true;
    return false;
}

//Big O time complexity: O(n)
// space complexity: O(n)


console.log(isUnique("abcdefg"));
console.log(isUnique("aaa"));
console.log(isUnique("a2130"));
console.log(isUnique("a2132"));
