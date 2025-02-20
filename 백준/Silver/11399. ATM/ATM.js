const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const [n,...arr] = input.map(Number);

arr.sort((a,b) => a-b);
let sum = 0;
for (let i = 0; i < n; i++) {
  sum += arr[i] * (n - i) 
}
console.log(sum)