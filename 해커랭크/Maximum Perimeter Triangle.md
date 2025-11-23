| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.23(일) | [Maximum Perimeter Triangle](https://www.hackerrank.com/challenges/three-month-preparation-kit-maximum-perimeter-triangle/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-maximum-perimeter-triangle/submissions/code/455055337)

```js
function maximumPerimeterTriangle(sticks) {
    sticks.sort((a,b) => a-b)
    const arr = []
    let perimeter = 0
    for (let i = 0; i < sticks.length-2; i++) {
        for (let j = i+1; j < sticks.length-1; j++) {
            for (let l = j+1; l < sticks.length; l++) {
                const two = sticks[i]+sticks[j]
                if (two > sticks[l]) {
                    const sum = two + sticks[l]
                    arr.push([sum, [sticks[i],sticks[j],sticks[l]]])
                    if (perimeter < sum) {
                        perimeter = sum
                    }
                }
            }
        }
    }
    const res = arr.filter((arr) => arr[0] === perimeter)
    if (res.length === 0) return [-1]
    if (res.length === 1) return res[0][1]
    else return res[0][1]
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
 * Complete the 'maximumPerimeterTriangle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

function maximumPerimeterTriangle(sticks) {
    sticks.sort((a,b) => a-b)
    const arr = []
    let perimeter = 0
    for (let i = 0; i < sticks.length-2; i++) {
        for (let j = i+1; j < sticks.length-1; j++) {
            for (let l = j+1; l < sticks.length; l++) {
                const two = sticks[i]+sticks[j]
                if (two > sticks[l]) {
                    const sum = two + sticks[l]
                    arr.push([sum, [sticks[i],sticks[j],sticks[l]]])
                    if (perimeter < sum) {
                        perimeter = sum
                    }
                }
            }
        }
    }
    const res = arr.filter((arr) => arr[0] === perimeter)
    if (res.length === 0) return [-1]
    if (res.length === 1) return res[0][1]
    else return res[0][1]
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const sticks = readLine().replace(/\s+$/g, '').split(' ').map(sticksTemp => parseInt(sticksTemp, 10));

    const result = maximumPerimeterTriangle(sticks);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
  ```
 </details>