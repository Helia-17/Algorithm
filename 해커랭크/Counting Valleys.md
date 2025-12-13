| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.14(금) | [Counting Valleys](https://www.hackerrank.com/challenges/three-month-preparation-kit-counting-valleys/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-counting-valleys/submissions/code/454134004)

```js
function countingValleys(steps, path) {
    const arr = path.split("")
    let now = 0
    let cnt = 0 
    let flag = false
    for (let i = 0; i < steps; i++) {
        if (arr[i] === "D") {
            now -= 1
        } else if (arr[i] === "U") {
            now += 1
        } 
        if (now < 0 && flag === false) {
            cnt +=1
            flag = true
        }
        if (now >= 0 && flag === true) flag = false 
    }
    return cnt

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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    const arr = path.split("")
    let now = 0
    let cnt = 0 
    let flag = false
    for (let i = 0; i < steps; i++) {
        if (arr[i] === "D") {
            now -= 1
        } else if (arr[i] === "U") {
            now += 1
        } 
        if (now < 0 && flag === false) {
            cnt +=1
            flag = true
        }
        if (now >= 0 && flag === true) flag = false 
    }
    return cnt

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
  ```
 </details>