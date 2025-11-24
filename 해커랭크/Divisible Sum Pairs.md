| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.13(목) | [Divisible Sum Pairs](https://www.hackerrank.com/challenges/three-month-preparation-kit-divisible-sum-pairs/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-divisible-sum-pairs/submissions/code/454067412)

```js
function divisibleSumPairs(n, k, ar) {
    let cnt = 0
    for (let i=0; i<n; i++) {
        for (let j=i+1; j<n; j++) {
            if ((ar[i] + ar[j]) % k === 0) cnt += 1
        }
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
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    let cnt = 0
    for (let i=0; i<n; i++) {
        for (let j=i+1; j<n; j++) {
            if ((ar[i] + ar[j]) % k === 0) cnt += 1
        }
    }
    return cnt
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = divisibleSumPairs(n, k, ar);

    ws.write(result + '\n');

    ws.end();
}
  ```
 </details>