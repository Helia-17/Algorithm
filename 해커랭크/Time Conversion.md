| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.13(목) | [Time Conversion](https://www.hackerrank.com/challenges/three-month-preparation-kit-time-conversion/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-time-conversion/submissions/code/454056138)

```js
function timeConversion(s) {
    let hh = s.slice(0, 2)
    const str = s.slice(8)
    if (str === 'PM') {
        hh = String((Number(hh) + 12))
        if (hh === '24') hh = '12'
    }
    else if (hh === '12') hh = '00'
    return hh + s.slice(2, 8)
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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let hh = s.slice(0, 2)
    const str = s.slice(8)
    if (str === 'PM') {
        hh = String((Number(hh) + 12))
        if (hh === '24') hh = '12'
    }
    else if (hh === '12') hh = '00'
    return hh + s.slice(2, 8)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
  ```
 </details>