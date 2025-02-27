// (!) 함수에 필요한 props 다 들어갔는지 체크, 특히 재귀때는 들어가는 값이 매번 달라져야 함
// boolean 변수 true false 뒤집을 때 주의
const [n, ...arr] = input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
paper = arr.map(row => row.split(" "))
let cnt = [0, 0]

function hasToCut(paper, n) {
  let flag = false
  let color = -1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (color === -1) color = paper[i][j]
      if (paper[i][j] !== color) {
        flag = true
        break
      }
    }
    if (flag) break
  }
  if (flag) return true
  else {
    cnt[color] += 1
    return false
  }
}

function cut(paper, n) {
  if (!hasToCut(paper, n)) return 
  let len = n / 2
  cut(paper.slice(0, len).map(row => row.slice(0, len)), len)
  cut(paper.slice(0, len).map(row => row.slice(len)), len)
  cut(paper.slice(len).map(row => row.slice(0, len)), len)
  cut(paper.slice(len).map(row => row.slice(len)), len)
}

cut(paper, n)
console.log(cnt.join("\n"))