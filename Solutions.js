
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
