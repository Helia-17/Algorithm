| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.26(수) | [Picking Numbers](https://www.hackerrank.com/challenges/three-month-preparation-kit-picking-numbers/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-picking-numbers/submissions/code/455318563)

```js
function pickingNumbers(a) {
    const freq = new Array(100).fill(0)
    for (let v of a) {
        freq[v] += 1
    }
    
    let max = 0
    for (let i=0; i < freq.length-1; i++) {
        max = Math.max(max , freq[i]+freq[i+1])
    }
    return max
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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    const freq = new Array(100).fill(0)
    for (let v of a) {
        freq[v] += 1
    }
    
    let max = 0
    for (let i=0; i < freq.length-1; i++) {
        max = Math.max(max , freq[i]+freq[i+1])
    }
    return max
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
  ```
 </details>