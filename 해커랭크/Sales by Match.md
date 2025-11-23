| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.23(일) | [Sales by Match](https://www.hackerrank.com/challenges/three-month-preparation-kit-sock-merchant/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-sock-merchant/submissions/code/455051882)

```js
function sockMerchant(n, ar) {
    let cnt = {}
    for (let sock of ar) {
        cnt[sock] = (cnt[sock] || 0) + 1
    }
    return Object.values(cnt).map(v=>parseInt(v/2)).reduce((acc,cur)=>acc+cur)
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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    let cnt = {}
    for (let sock of ar) {
        cnt[sock] = (cnt[sock] || 0) + 1
    }
    return Object.values(cnt).map(v=>parseInt(v/2)).reduce((acc,cur)=>acc+cur)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
  ```
 </details>