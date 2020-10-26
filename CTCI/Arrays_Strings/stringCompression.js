//  Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z). 

// const strComp = (str) => {
//     //iterate through and get obj of letters pointing to count
//     //if counts are all equal to 1, return original string
//     // else 
//     // turn object into array of keys and iterate through each char
//     // push char and count into result array
//     // returned joined array
//     let freq = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         let count = freq[char];
//         if (freq[char]) {
//             freq[char] = count+1;
//         } else {
//             freq[char] = 1;
//         }
//     }
//     let chars = Object.keys(freq);
//     let compressed = [];

//     if (chars.length === str.length) {
//         return str;
//     } else {
//         for (let i = 0; i < chars.length; i++) {
//             let letter = chars[i];
//             let count = freq[letter];
//             compressed.push(letter);
//             compressed.push(count);
//         }
//         return compressed.join("");
//     }
// };

const strComp = (str) => {
    let freq = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let count = freq[char];
        if (freq[char]) {
        freq[char] = count + 1;
        } else {
        freq[char] = 1;
        }
    }
    let chars = Object.keys(freq);
    if (chars.length === str.length) return str;
    
    let compressed = [];
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        let nextChar = str[i+1];
        if (currentChar === nextChar) {
            count++;
        } else {
            compressed.push(currentChar);
            compressed.push(count);
            count = 1;
        }
    }
    return compressed.join("");
};

console.log(strComp("aabcccccaaa")); //a2b1c5a3
console.log(strComp("abcdefg")); //abcdefg
console.log(strComp("AAbcc")); //A2b1c2