| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.23(일) | [Drawing Book](https://www.hackerrank.com/challenges/three-month-preparation-kit-drawing-book/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-drawing-book/submissions/code/455057455)

```js
function pageCount(n, p) {
    let page = p
    let num = n
    if (p % 2 === 0) page += 1
    if (num % 2 === 0) num += 1
    return Math.min(parseInt(page/2), parseInt(num/2)-parseInt(page/2)) 
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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    let page = p
    let num = n
    if (p % 2 === 0) page += 1
    if (num % 2 === 0) num += 1
    return Math.min(parseInt(page/2), parseInt(num/2)-parseInt(page/2)) 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}
  ```
 </details>