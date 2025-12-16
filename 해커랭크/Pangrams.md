| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.12.14(일) | [Pangrams](https://www.hackerrank.com/challenges/three-month-preparation-kit-pangrams/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-pangrams/submissions/code/454227132)

```js
function pangrams(s) {
    const check = new Array(24).fill(0)
    for (let v of s) {
        const uni = v.toLowerCase().charCodeAt()
        check[uni-97] += 1
    }
    return check.some(v => v===0)?'not pangram': 'pangram'

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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    const check = new Array(24).fill(0)
    for (let v of s) {
        const uni = v.toLowerCase().charCodeAt()
        check[uni-97] += 1
    }
    return check.some(v => v===0)?'not pangram': 'pangram'

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}
  ```
 </details>