| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.14(금) | [Diagonal Difference](https://www.hackerrank.com/challenges/three-month-preparation-kit-diagonal-difference/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-diagonal-difference/submissions/code/454128673)

```js
function diagonalDifference(arr) {
    let x = 0
    let y = 0
    let a = 0
    let b = arr.length - 1
    
    for (let i = 0; i < arr.length; i++) {
        x+=arr[i][a]
        y+=arr[i][b]
        a+=1
        b-=1
    }
    return Math.abs(x - y)
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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let x = 0
    let y = 0
    let a = 0
    let b = arr.length - 1
    
    for (let i = 0; i < arr.length; i++) {
        x+=arr[i][a]
        y+=arr[i][b]
        a+=1
        b-=1
    }
    return Math.abs(x - y)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
  ```
 </details>