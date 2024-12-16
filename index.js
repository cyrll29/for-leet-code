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

const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 !== 10) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
        if (i === 0) {
            digits.unshift(1);
            return digits;
        }
    }    
}

const mySqrt = (x) => {
    return Math.floor(Math.sqrt(x));;
};

const merge = (nums1, m, nums2, n) => {
    let midx = m - 1;
    let nidx = n - 1;
    let right = m + n - 1;

    while (nidx >= 0) {
        if (midx >= 0 && nums1[midx] > nums2[nidx]) {
            nums1[right] = nums1[midx];
            midx--;
        } else {
            nums1[right] = nums2[nidx];
            nidx--;
        }
        right--;
    }    
}

const getOneBits = (decimal) => {
    let binary = '';
    let res = [0];

    if(decimal === 0) return;

    while(decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }

    for (let i = 0; i < binary.length; i++) {
        if(binary[i] === '1') {
            res[0]++;
            res.push(i + 1);
        } else {
            continue;
        }
    }

    return res;
}

const alphabet = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J',
    11: 'K',
    12: 'L',
    13: 'M',
    14: 'N',
    15: 'O',
    16: 'P',
    17: 'Q',
    18: 'R',
    19: 'S',
    20: 'T',
    21: 'U',
    22: 'V',
    23: 'W',
    24: 'X',
    25: 'Y',
    26: 'Z',
}

const majorityElement = (nums) => {
    const hash = {};
    let res = 0;
    let majority = 0;

    for(let n of nums) {
        hash[n] = 1 + (hash[n] || 0);
        console.log(hash);
        if (hash[n] > majority) {
            res = n;
            majority = hash[n];
        }
    }
    return res;
}

const factorial = (k) => {
    let product = BigInt(1);
    for(let i = 2; i <= k; i++) {
        product *= BigInt(i);
    }
    let newProduct = product.toString();
    let res = 0;

    for(let i = 1; i < newProduct.length; i++) {
        if(newProduct[newProduct.length - i] === '0') {
            res += 1;
        } else {
            return res;
        }
    }

    return res;
}

const maxProfit = (prices) => {
    let buyPrice = prices[0];
    let profit = 0;

    for(let i = 1; i < prices.length; i++) {
        if(buyPrice > prices[i]) {
            buyPrice = prices[i]
        }

        profit += Math.max(profit, prices[i] - buyPrice);
    }

    return profit;
}

const maxProfitTwo = (prices) => {
    let buyPrice = prices[0];
    let profit = 0;

    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < prices[i - 1]) {
            buyPrice = prices[i];
            continue;
        }
        if(prices[i] > prices[i - 1]) {
            profit += (prices[i] - prices[i - 1]);
        }

        console.log(profit)
    }

    return profit;
}

function diagonalDifference(arr) {
    // Write your code here
    let firstNum = 0;
    let secondNum = 0;
    let pseudoNum = arr.length - 1;
    
    for(let i = 0; i < arr.length; i++) {
        firstNum += arr[i][i];
    }

    for(let i = 0; i < arr.length; i++) {
        secondNum += arr[i][pseudoNum]
        pseudoNum--
    }

    return Math.abs(firstNum - secondNum);
}

const plusMinus = (arr) => {
    const res = {
        positive: 0,
        negative: 0,
        zeroes: 0,
    }

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            res['positive']++;
        } else if(arr[i] === 0) {
            res['zeroes']++;
        } else {
            res['negative']++;
        }
    }
    console.log(Object.keys(res).length)

    for(let key in res) {
        console.log(key + ": " + res[key])
        console.log(res[key]/arr.length)
    }
}

plusMinus([1, 1, 0, -1, -1]);



