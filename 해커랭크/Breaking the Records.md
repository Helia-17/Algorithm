| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.13(목) | [Breaking the Records](https://www.hackerrank.com/challenges/three-month-preparation-kit-breaking-best-and-worst-records/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-breaking-best-and-worst-records/submissions/code/454058365)

```js
function breakingRecords(scores) {
    let cntArr = [0, 0]
    let min = scores[0]
    let max = scores[0]
    for (let score of scores) {
        if (score > max) {
            cntArr[0] += 1
            max = score
        }
        if (score < min) {
            cntArr[1] += 1
            min = score
        }
    }
    return cntArr
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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    let cntArr = [0, 0]
    let min = scores[0]
    let max = scores[0]
    for (let score of scores) {
        if (score > max) {
            cntArr[0] += 1
            max = score
        }
        if (score < min) {
            cntArr[1] += 1
            min = score
        }
    }
    return cntArr
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
  ```
 </details>