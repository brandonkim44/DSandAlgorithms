//Given two strings, write a method to decide if one is a permutation of another
// count frequency of letters and if they're exactly the same, then they are
// anagram question?
// O(N)
const checkPermutations = (str1, str2) => {
    let obj = {};
    for (let i in str1) {
        let char = str1[i];
        if (obj[char]) {
            let count = obj[char];
            obj[char] = count+1;
        } else {
            obj[char] = 1;
        }
    }
    for (let i in str2) {
        let char = str2[i];
        if (obj[char]) {
            let count = obj[char];
          obj[char] = count-1;
        } else {
          obj[char] = 1;
        }
    }

    if (Object.values(obj).reduce((a, b) => a+b) === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(checkPermutations("abcd", "bcda"))
console.log(checkPermutations("abcaad", "abacda"))
console.log(checkPermutations("abcaad", "abacdda"))
console.log(checkPermutations("abcaad", "abacfda"))