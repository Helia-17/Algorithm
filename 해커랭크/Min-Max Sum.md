| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.13(목) | [Min-Max Sum](https://www.hackerrank.com/challenges/three-month-preparation-kit-mini-max-sum/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-mini-max-sum/submissions/code/454055187)

```js
function miniMaxSum(arr) {
    const asc = arr.toSorted((a,b) => a-b)
    const desc = arr.toSorted((a,b) => b-a)
    const min = asc.slice(0, 4).reduce((acc, cur) => acc + cur, 0)
    const max = desc.slice(0, 4).reduce((acc, cur) => acc + cur, 0)
    console.log(min + ' ' + max)

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
   * Complete the 'miniMaxSum' function below.
   *
   * The function accepts INTEGER_ARRAY arr as parameter.
   */
  
  function miniMaxSum(arr) {
      const asc = arr.toSorted((a,b) => a-b)
      const desc = arr.toSorted((a,b) => b-a)
      const min = asc.slice(0, 4).reduce((acc, cur) => acc + cur, 0)
      const max = desc.slice(0, 4).reduce((acc, cur) => acc + cur, 0)
      console.log(min + ' ' + max)
  
  }
  
  function main() {
  
      const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
  
      miniMaxSum(arr);
  }


  ```
 </details> 
