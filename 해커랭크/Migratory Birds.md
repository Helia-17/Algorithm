| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.23(일) | [Migratory Birds](https://www.hackerrank.com/challenges/three-month-preparation-kit-migratory-birds/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-migratory-birds/submissions/code/455052789)

```js
function migratoryBirds(arr) {
    let cnt = {}
    let max = 0
    for (let bird of arr) {
        cnt[bird] = (cnt[bird] || 0) + 1
        if (max < cnt[bird]) max = cnt[bird]
    }
    return Object.keys(cnt).find(key => cnt[key] === max)
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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    let cnt = {}
    let max = 0
    for (let bird of arr) {
        cnt[bird] = (cnt[bird] || 0) + 1
        if (max < cnt[bird]) max = cnt[bird]
    }
    return Object.keys(cnt).find(key => cnt[key] === max)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
  ```
 </details>