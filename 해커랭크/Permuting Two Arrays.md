| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.21(금) | [Permuting Two Arrays](https://www.hackerrank.com/challenges/three-month-preparation-kit-two-arrays/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-two-arrays/submissions/code/454925942)

```js
function twoArrays(k, A, B) {
    A.sort((a,b) => a-b)
    B.sort((a,b) => b-a)
    let arr = []
    for (let i = 0; i < A.length; i++) {
        let eleFlag = false
        for (let j=0; j < B.length; j++) {
            if (arr.some(v => v===j)) continue
            if (A[i] + B[j] >= k) {
                arr.push(j)
                eleFlag = true
                break
            }
        }
        if (eleFlag === false) return "NO"
    }
    return "YES"
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
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
    A.sort((a,b) => a-b)
    B.sort((a,b) => b-a)
    let arr = []
    for (let i = 0; i < A.length; i++) {
        let eleFlag = false
        for (let j=0; j < B.length; j++) {
            if (arr.some(v => v===j)) continue
            if (A[i] + B[j] >= k) {
                arr.push(j)
                eleFlag = true
                break
            }
        }
        if (eleFlag === false) return "NO"
    }
    return "YES"
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const k = parseInt(firstMultipleInput[1], 10);

        const A = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

        const B = readLine().replace(/\s+$/g, '').split(' ').map(BTemp => parseInt(BTemp, 10));

        const result = twoArrays(k, A, B);

        ws.write(result + '\n');
    }

    ws.end();
}
  ```
 </details>