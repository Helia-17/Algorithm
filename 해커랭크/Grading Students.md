| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.14(금) | [Grading Students](https://www.hackerrank.com/challenges/three-month-preparation-kit-grading/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-grading/submissions/code/454122822)

```js
function gradingStudents(grades) {
    for (let i=0; i < grades.length; i++) {
        let grade = grades[i]
        if (grade < 38) continue
        const q = parseInt(grade/5)
        const round = 5*(q+1)
        if ((round - grade) < 3) grades[i] = round
    }
    return grades
}
```


<details>
  <summary>전체코드</summary>

  ```js
  'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    for (let i=0; i < grades.length; i++) {
        let grade = grades[i]
        if (grade < 38) continue
        const q = parseInt(grade/5)
        const round = 5*(q+1)
        if ((round - grade) < 3) grades[i] = round
    }
    return grades
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
  ```
 </details>