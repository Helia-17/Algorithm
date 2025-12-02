| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.14(금) | [Flipping bits](https://www.hackerrank.com/challenges/three-month-preparation-kit-flipping-bits/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-flipping-bits/submissions/code/454225293)

```js
// decimal -> binary -> flip -> decimal
// 32bit, unshift, order
function flippingBits(n) {
    const two = n.toString(2)
    const arr = new Array(32).fill('0')
    for (let i=0; i<two.length; i++){
        arr[32 - two.length + i] = two[i]
    }
    const flip = arr.map(v => v==='1'?'0':'1').join("")
    const ten = parseInt(flip, 2)
    return ten
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
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

// decimal -> binary -> flip -> decimal
// 32bit, unshift, order
function flippingBits(n) {
    const two = n.toString(2)
    const arr = new Array(32).fill('0')
    for (let i=0; i<two.length; i++){
        arr[32 - two.length + i] = two[i]
    }
    const flip = arr.map(v => v==='1'?'0':'1').join("")
    const ten = parseInt(flip, 2)
    return ten
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
  ```
 </details>