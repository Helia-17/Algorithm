| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.13(목) | [Plus Minus](https://www.hackerrank.com/challenges/three-month-preparation-kit-plus-minus/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-plus-minus/submissions/code/454051751)

```js
function plusMinus(arr) {
    const len = arr.length
    let plus = 0
    let zero = 0
    let minus = 0
    for (let num of arr) {
        if (num < 0) minus++
        if (num === 0) zero++
        if (num > 0) plus++
    }
    console.log((plus/len).toFixed(6))
    console.log((minus/len).toFixed(6))
    console.log((zero/len).toFixed(6))

}
```


<details>
  <summary>전체코드</summary>

  ```js
  'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    const len = arr.length
    let plus = 0
    let zero = 0
    let minus = 0
    for (let num of arr) {
        if (num < 0) minus++
        if (num === 0) zero++
        if (num > 0) plus++
    }
    console.log((plus/len).toFixed(6))
    console.log((minus/len).toFixed(6))
    console.log((zero/len).toFixed(6))

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
<details>

  ```
  
