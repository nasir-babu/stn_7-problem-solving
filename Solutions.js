
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