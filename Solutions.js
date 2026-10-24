
// ============================================================================
// TN-7 Problem Solving Assessment List - Solutions.js
// Written in JavaScript (ES6)
// ============================================================================


// ----------------------------------------------------------------------------
// Problem 1: Staircase
// ----------------------------------------------------------------------------

const staircase = function(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        const spaces = ' '.repeat(n - i);
        const hashes = '#'.repeat(i);
        result.push(spaces + hashes);
    }
    return result.join('\n');
};

console.log(staircase(4))

// ----------------------------------------------------------------------------
// Problem 2: Grading Students
// ----------------------------------------------------------------------------

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

;
console.log(gradingStudents([73, 67, 38, 33]));


// ----------------------------------------------------------------------------
// Problem 3: Time Conversion
// ----------------------------------------------------------------------------

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

console.log(timeConversion("07:05:45PM"));




//----------------------------------------------------------------------------
// Problem 4: String Repeat
// ----------------------------------------------------------------------------

const repeatStr = function (n, s) {
  return s.repeat(n);
};

console.log(repeatStr(3, "ha"));



// ----------------------------------------------------------------------------
// Problem 5: Reversed Strings
// ----------------------------------------------------------------------------

const solution = function (str) {
  return str.split("").reverse().join("");
};

console.log(solution("world"));


// ----------------------------------------------------------------------------
// Problem 6: Sum of Positive
// ----------------------------------------------------------------------------

const positiveSum = function (arr) {
  return arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
};

console.log(positiveSum([1, -4, 7, 12]));

// ----------------------------------------------------------------------------
// Problem 7: Grasshopper — Summation
// ----------------------------------------------------------------------------

const summation = function (num) {
  return (num * (num + 1)) / 2;
};

console.log(summation(8));

// ----------------------------------------------------------------------------
// Problem 8: Convert a Boolean to a String
// ----------------------------------------------------------------------------

const booleanToString = function (b) {
  return b.toString();
};

console.log(booleanToString(true));

// ----------------------------------------------------------------------------
// Problem 9: Fizz Buzz
// ----------------------------------------------------------------------------

const fizzBuzz = function (n) {
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

console.log(fizzBuzz(15));
// ----------------------------------------------------------------------------
// Problem 10: Running Sum of 1D Array
// ----------------------------------------------------------------------------

const runningSum = function (nums) {
  const result = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }
  return result;
};

console.log(runningSum([1, 2, 3, 4]));
// ----------------------------------------------------------------------------
// Problem 11: Richest Customer Wealth
// ----------------------------------------------------------------------------

const maximumWealth = function (accounts) {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    const currentWealth = accounts[i].reduce((sum, val) => sum + val, 0);
    if (currentWealth > maxWealth) {
      maxWealth = currentWealth;
    }
  }
  return maxWealth;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ]),
);


// ----------------------------------------------------------------------------
// Problem 12: Remove Duplicates from Sorted Array
// ----------------------------------------------------------------------------

const removeDuplicates = function (nums) {
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
const nums12 = [1, 1, 2];
const k12 = removeDuplicates(nums12);
console.log(
  "Unique count (k):",
  k12,
  "| Modified Array:",
  nums12.slice(0, k12),
);

// ----------------------------------------------------------------------------
// Problem 13: Contains Duplicate
// ----------------------------------------------------------------------------

const containsDuplicate = function (nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
// ----------------------------------------------------------------------------
// Problem 14: Move Zeroes
// ----------------------------------------------------------------------------

const moveZeroes = function (nums) {
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

const nums14 = [0, 1, 0, 3, 12, 0];
moveZeroes(nums14);
console.log(nums14);

// ----------------------------------------------------------------------------
// Problem 15: Merge Sorted Array
// ----------------------------------------------------------------------------

const merge = function (nums1, m, nums2, n) {
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

const nums15 = [1, 2, 3, 0, 0, 0];
merge(nums15, 3, [2, 5, 6], 3);
console.log(nums15);
// ----------------------------------------------------------------------------
// Problem 16: 3Sum
// ----------------------------------------------------------------------------

const threeSum = function (nums) {
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

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// ----------------------------------------------------------------------------
// Problem 17: Plus One
// ----------------------------------------------------------------------------

const plusOne = function (digits) {
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

console.log(plusOne([1, 2, 9]));
// ----------------------------------------------------------------------------
// Problem 18: Reverse String
// ----------------------------------------------------------------------------

const reverseString = function (s) {
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
const s18 = ["h", "e", "l", "l", "o"];
reverseString(s18);
console.log(s18);

// ----------------------------------------------------------------------------
// Problem 19: Length of Last Word
// ----------------------------------------------------------------------------

const lengthOfLastWord = function (s) {
  let length = 0;
  let i = s.length - 1;

  while (i >= 0 && s[i] === " ") {
    i--;
  }

  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length;
};

console.log(lengthOfLastWord("Hello World"));
// ----------------------------------------------------------------------------
// Problem 20: Longest Common Prefix
// ----------------------------------------------------------------------------

const longestCommonPrefix = function (strs) {
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

console.log(longestCommonPrefix(["flower", "flow", "flight"]));