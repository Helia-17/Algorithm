| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.23(일) | [Subarray Division 2](https://www.hackerrank.com/challenges/three-month-preparation-kit-the-birthday-bar/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-the-birthday-bar/submissions/code/455048762)

```js
function birthday(s, d, m) {
    let cnt = 0
    if (s.length <= 1) return s.length
    for (let i=0; i<=s.length - m; i++) {
        let sum = s.slice(i,i+m).reduce((acc,cur) => acc+cur, 0)
        if (sum === d) cnt++
    }
    return cnt
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
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    let cnt = 0
    if (s.length <= 1) return s.length
    for (let i=0; i<=s.length - m; i++) {
        let sum = s.slice(i,i+m).reduce((acc,cur) => acc+cur, 0)
        if (sum === d) cnt++
    }
    return cnt
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const result = birthday(s, d, m);

    ws.write(result + '\n');

    ws.end();
}
  ```
 </details>