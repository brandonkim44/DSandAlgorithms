// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away. 

const oneAway = (str1, str2) => {
    let diff = 0;
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if (!str2.includes(char)) diff++;
    }
    if (diff <= 1) {
        return true;
    } else {
        return false;
    }
};

console.log(oneAway("pale", "ple")); //true;
console.log(oneAway("pales", "pale")); //true;
console.log(oneAway("pale", "bale")); //true;
console.log(oneAway("pale", "eale")); //true;
console.log(oneAway("pale", "bake")); //false;