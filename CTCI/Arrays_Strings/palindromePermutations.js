//Given a string, write a function to check if it is a permutation of a palindrome. 
// A palindrome is a word or phrase that is the same forwards and backwards. 
// A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 

const isPP = (str) => {
    //O(N)
    let arr = str.toLowerCase().split("");
    while (arr.includes(" ")) {
        let index = arr.indexOf(" ");
        if (index > -1) arr.splice(index, 1);
    }
    let numOfChars = arr.length;
    let obj = countChars(arr);
    let totalCount = Object.values(obj).reduce((a,b) => a+b);
    if (numOfChars % 2 === 0) {
        if (totalCount % 2 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        let freqs = Object.values(obj);
        let oddCount = 0;
        let i = 0;
        for (let i = 0; i < freqs.length; i++) {
            if (freqs[i] % 2 !== 0) {
                oddCount++;
            }
        }
        if (oddCount === 1) {
            return true;
        } else {
            return false;
        }
    }
};

const countChars = (arr) => {
    let freq = {};
    for (let char of arr) {
      let count = freq[char];
      if (freq[char]) {
        freq[char] = count + 1;
      } else {
        freq[char] = 1;
      }
    }
    delete freq[" "];
    return freq;
}

console.log(isPP("Tact Coa")); // true
console.log(isPP("Tact Boa")); // false
console.log(isPP("DTact Boad")); // false
console.log(isPP("AA BB")); // true
console.log(isPP("c cc")); // true
console.log(isPP("kaya hkoo")); // true
console.log(isPP("kaya hkool")); // false