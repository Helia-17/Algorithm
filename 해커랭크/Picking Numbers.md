| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.26(수) | [Picking Numbers](https://www.hackerrank.com/challenges/three-month-preparation-kit-picking-numbers/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-picking-numbers/submissions/code/455316093)

```js
function pickingNumbers(a) {
    a.sort((a,b)=>a-b)
    let max = 0
    let arr = []
    let flag = null
    for (let i=0; i < a.length; i++) {
        if (flag===null) {
            arr.push(a[i])
            flag = a[i]
            continue
        }
        if (a[i]-flag<=1) {
            arr.push(a[i])
        }
        else {
            if (max < arr.length) max = arr.length
            arr = [a[i]]
            flag = a[i]
        }
    }
    if (max < arr.length) max = arr.length
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
    a.sort((a,b)=>a-b)
    let max = 0
    let arr = []
    let flag = null
    for (let i=0; i < a.length; i++) {
        if (flag===null) {
            arr.push(a[i])
            flag = a[i]
            continue
        }
        if (a[i]-flag<=1) {
            arr.push(a[i])
        }
        else {
            if (max < arr.length) max = arr.length
            arr = [a[i]]
            flag = a[i]
        }
    }
    if (max < arr.length) max = arr.length
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