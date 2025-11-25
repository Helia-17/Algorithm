| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.13(목) | [Sparse Arrays](https://www.hackerrank.com/challenges/three-month-preparation-kit-sparse-arrays/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-sparse-arrays/submissions/code/454069285)

```js
function matchingStrings(strings, queries) {
    const arr = []
    for (let q of queries) {
        let cnt = 0
        for (let str of strings) {
            if (str === q) cnt++
        }
        arr.push(cnt)
    }
    return arr
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
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    const arr = []
    for (let q of queries) {
        let cnt = 0
        for (let str of strings) {
            if (str === q) cnt++
        }
        arr.push(cnt)
    }
    return arr
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringsCount = parseInt(readLine().trim(), 10);

    let strings = [];

    for (let i = 0; i < stringsCount; i++) {
        const stringsItem = readLine();
        strings.push(stringsItem);
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    const res = matchingStrings(strings, queries);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
  ```
 </details>