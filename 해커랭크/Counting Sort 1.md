| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.14(금) | [Counting Sort 1](https://www.hackerrank.com/challenges/three-month-preparation-kit-countingsort1/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-countingsort1/submissions/code/454225911)

```js
function countingSort(arr) {
    const res = new Array(100).fill(0)
    for (let i of arr) {
        res[i] += 1
    }
    return res

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
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    const res = new Array(100).fill(0)
    for (let i of arr) {
        res[i] += 1
    }
    return res

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
  ```
 </details>