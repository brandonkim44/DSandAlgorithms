// Assumeyou have a method isSubstringwhich checks if oneword is a substring
// of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
// call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat"). 

const stringRot = (str1, str2) => {
    //rotate string by 1
    // if string = rotated string, return true
    // if you go through entire length of string and rotated each char and did not return true, return false

    //time is O(s1^2), space O(s1)
    let i = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1 === str2) return true;
        let arr = str1.split("");
        let char = arr.shift();
        arr.push(char);
        str1 = arr.join("");
        console.log(str1);
    }
    return false;
};

// time is O(s2), space is O(s2)
const stringRotBetter = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    if ((str2 + str2).includes(str1)) {
        return true;
    } else {
        return false;
    }
};

const subStr = (str1, str2) => {
    if (str1.includes(str2)) return true;
    return false;
};

console.log(stringRot("waterbottle", "erbottlewat")); //true
console.log(stringRot("waterbottle", "erbottlewta")); //false
console.log(stringRotBetter("waterbottle", "erbottlewat")); //true
console.log(stringRotBetter("waterbottle", "erbottlewta")); //false