const palindromeNumber = (num) => {
    // Convert number into array then reverses it then converting it to array again
    let y = parseInt(num.toString().split('').map(Number).reverse().join(''))

    return y === num ? true : false;
}

const romanToInt = (s) => {
    let res = 0;
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for (let i = 0; i < s.length - 1; i++) {
        if (roman[s[i]] < roman[s[i + 1]]) {
            res -= roman[s[i]];
        } else {
            res += roman[s[i]];
        }
    }

    return res + roman[s[s.length - 1]]; 
}

const removeDuplicate = (arr) => {
    let i = 1; // Pivot

    for(let j = 1; j < arr.length; j++) {
        if(nums[j] !== nums[i + 1]) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i;
}

const removeElement = (nums, val) => {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            nums.splice(i, 1); // Splice for removing specific item in array. It takes 2 parameters, index and how many should be removed
            i--;
        }
    }

    return nums;
}

const strStr = (haystack, needle) => {
    let int = -1;
    for(let i = 0; i < haystack.length; i++) {
        let sliced = haystack.substr(i, needle.length); // Extract a substring then compare the extracted string to the needle
        if (sliced === needle) {
            int = i;
            break;
        }
    }

    return int;
}

const searchInsert = (nums, target) => {
    let result = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < target) {
            result = i + 1;
        } else if(nums[i] === target) {
            result = i;
        } else {
            continue;
        }
    }

    return result;
}

const lengthOfLastWord = (s) => {
    const arr = s.trim().split(' ');
    return arr[arr.length - 1].length;
}
