// ============================================================================
// TN-7 Problem Solving Assessment List - Solutions.js
// Written in JavaScript (ES6)
// ============================================================================


// ----------------------------------------------------------------------------
// Problem 1: Staircase
// ----------------------------------------------------------------------------
/**
 * @param {number} n
 * @return {string}
 */
const staircase = function(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        const spaces = ' '.repeat(n - i);
        const hashes = '#'.repeat(i);
        result.push(spaces + hashes);
    }
    return result.join('\n');
};


// ----------------------------------------------------------------------------
// Problem 2: Grading Students
// ----------------------------------------------------------------------------
/**
 * @param {number[]} grades
 * @return {number[]}
 */
const gradingStudents = function(grades) {
    return grades.map(grade => {
        if (grade < 38) {
            return grade;
        }
        const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        if (nextMultipleOf5 - grade < 3) {
            return nextMultipleOf5;
        }
        return grade;
    });
};


// ----------------------------------------------------------------------------
// Problem 3: Time Conversion
// ----------------------------------------------------------------------------
/**
 * @param {string} s
 * @return {string}
 */
const timeConversion = function(s) {
    const modifier = s.slice(-2);
    let hours = parseInt(s.slice(0, 2), 10);
    const minutesSeconds = s.slice(2, 8);
    
    if (modifier === 'AM') {
        if (hours === 12) {
            hours = '00';
        } else {
            hours = hours < 10 ? '0' + hours : hours.toString();
        }
    } else {
        if (hours !== 12) {
            hours = hours + 12;
        }
        hours = hours.toString();
    }
    
    return hours + minutesSeconds;
};


// ----------------------------------------------------------------------------
// Problem 4: String Repeat
// ----------------------------------------------------------------------------
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
const repeatStr = function(n, s) {
    return s.repeat(n);
};


// ----------------------------------------------------------------------------
// Problem 5: Reversed Strings
// ----------------------------------------------------------------------------
/**
 * @param {string} str
 * @return {string}
 */
const solution = function(str) {
    return str.split('').reverse().join('');
};


// ----------------------------------------------------------------------------
// Problem 6: Sum of Positive
// ----------------------------------------------------------------------------
/**
 * @param {number[]} arr
 * @return {number}
 */
const positiveSum = function(arr) {
    return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
};


// ----------------------------------------------------------------------------
// Problem 7: Grasshopper — Summation
// ----------------------------------------------------------------------------
/**
 * @param {number} num
 * @return {number}
 */
const summation = function(num) {
    return (num * (num + 1)) / 2;
};


// ----------------------------------------------------------------------------
// Problem 8: Convert a Boolean to a String
// ----------------------------------------------------------------------------
/**
 * @param {boolean} b
 * @return {string}
 */
const booleanToString = function(b) {
    return b.toString();
};


// ----------------------------------------------------------------------------
// Problem 9: Fizz Buzz
// ----------------------------------------------------------------------------
/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    return result;
};


// ----------------------------------------------------------------------------
// Problem 10: Running Sum of 1D Array
// ----------------------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
    const result = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result.push(sum);
    }
    return result;
};


// ----------------------------------------------------------------------------
// Problem 11: Richest Customer Wealth
// ----------------------------------------------------------------------------
/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        const currentWealth = accounts[i].reduce((sum, val) => sum + val, 0);
        if (currentWealth > maxWealth) {
            maxWealth = currentWealth;
        }
    }
    return maxWealth;
};


// ----------------------------------------------------------------------------
// Problem 12: Remove Duplicates from Sorted Array
// ----------------------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let k = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k]) {
            k++;
            nums[k] = nums[i];
        }
    }
    return k + 1;
};


// ----------------------------------------------------------------------------
// Problem 13: Contains Duplicate
// ----------------------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
};


// ----------------------------------------------------------------------------
// Problem 14: Move Zeroes
// ----------------------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {void}
 */
const moveZeroes = function(nums) {
    let insertPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos++] = nums[i];
        }
    }
    for (let i = insertPos; i < nums.length; i++) {
        nums[i] = 0;
    }
};


// ----------------------------------------------------------------------------
// Problem 15: Merge Sorted Array
// ----------------------------------------------------------------------------
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
const merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;
    
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p--] = nums1[p1--];
        } else {
            nums1[p--] = nums2[p2--];
        }
    }
    
    while (p2 >= 0) {
        nums1[p--] = nums2[p2--];
    }
};


// ----------------------------------------------------------------------------
// Problem 16: 3Sum
// ----------------------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};


// ----------------------------------------------------------------------------
// Problem 17: Plus One
// ----------------------------------------------------------------------------
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};


// ----------------------------------------------------------------------------
// Problem 18: Reverse String
// ----------------------------------------------------------------------------
/**
 * @param {string[]} s
 * @return {void}
 */
const reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};


// ----------------------------------------------------------------------------
// Problem 19: Length of Last Word
// ----------------------------------------------------------------------------
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    let length = 0;
    let i = s.length - 1;
    
    while (i >= 0 && s[i] === ' ') {
        i--;
    }
    
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }
    
    return length;
};


// ----------------------------------------------------------------------------
// Problem 20: Longest Common Prefix
// ----------------------------------------------------------------------------
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) return "";
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    
    return prefix;
};