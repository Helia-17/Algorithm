| 시작날짜 | 문제 | 솔루션 및 해결여부| 
|--|--|--|
| 2025.11.13(목) | [Camel Case 4](https://www.hackerrank.com/challenges/three-month-preparation-kit-camel-case/problem) | ✅ [Link](https://www.hackerrank.com/challenges/three-month-preparation-kit-camel-case/submissions/code/454065493)

```js
function processData(input) {
    const arr = input.split(/\r?\n/)
    for (let line of arr) {
    let [opr, mthd, str] = line.split(';')
    if (opr === 'S') {
        let strArr = str.split("")
        if (mthd === 'M') strArr = strArr.slice(0, strArr.length-2)
        console.log(strArr.map(s => s.charCodeAt(0) < 97? ' '+s.toLowerCase() : s).join("").trim())
    }
    if (opr === 'C') {
        const prtlArr = str.split(" ").map(s => s[0].toUpperCase() + s.slice(1))
        if (mthd === 'V' || mthd === 'M') prtlArr[0] = prtlArr[0][0].toLowerCase() + prtlArr[0].slice(1)
        if (mthd === 'M') console.log(prtlArr.join("") + '()')
        else console.log(prtlArr.join(""))
    }
    }
}
```


<details>
  <summary>전체코드</summary>

  ```js
  function processData(input) {
    const arr = input.split(/\r?\n/)
    for (let line of arr) {
    let [opr, mthd, str] = line.split(';')
    if (opr === 'S') {
        let strArr = str.split("")
        if (mthd === 'M') strArr = strArr.slice(0, strArr.length-2)
        console.log(strArr.map(s => s.charCodeAt(0) < 97? ' '+s.toLowerCase() : s).join("").trim())
    }
    if (opr === 'C') {
        const prtlArr = str.split(" ").map(s => s[0].toUpperCase() + s.slice(1))
        if (mthd === 'V' || mthd === 'M') prtlArr[0] = prtlArr[0][0].toLowerCase() + prtlArr[0].slice(1)
        if (mthd === 'M') console.log(prtlArr.join("") + '()')
        else console.log(prtlArr.join(""))
    }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
  ```
 </details>