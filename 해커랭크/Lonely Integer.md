| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.14(금) | [Lonely Integer](https://www.hackerrank.com/challenges/three-month-preparation-kit-lonely-integer/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-lonely-integer/submissions/code/454121750)

```js
function lonelyinteger(a) {
    let cnt = {}
    for (let num of a) {
        cnt[num] = (cnt[num] || 0) + 1
    }
    const lonely = Object.keys(cnt).find(a => cnt[a] === 1)
    return lonely
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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    let cnt = {}
    for (let num of a) {
        cnt[num] = (cnt[num] || 0) + 1
    }
    const lonely = Object.keys(cnt).find(a => cnt[a] === 1)
    return lonely
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}
  ```
 </details>