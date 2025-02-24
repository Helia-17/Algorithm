
// [1] 조합이라고 생각했을 때
// 전부 1로 채우는 것부터 생각했는데 3으로 채우는 것 부터 생각하는게 맞는 것 같다.
// 1. 전부 3으로 채우고 1 또는 2로 짝/홀을 맞추는 경우. 2로 맞춘다면 + 2 (1로 바꿀 경우까지 생각)
// (!) 1 또는 2로 채울 필요가 없이 3으로만 채워지는게 가능함에 주의
// -> 나머지가 0이나 1일때 0개, 2일때 (2 또는 1 + 1) 2개
// 2. 3을 1 + 2로 바꾸는 경우, 이때 3이 없어지는 경우는 제함 (-1).
// 3. (!) 2번에서 2를 전부 1+1로 바꾸는 경우
// 4. 전부 2로 채우고 1로 짝/홀을 맞추는 경우
// 5. 2를 1 + 1로 바꾸는 경우

// (!) 조합이 아니라 순열임
// [2] 순열, 재귀 사용
// 1, 11, 111, 112(o), 12, 121(o), 13(o)
// 2, 21, 211(o), 22(o)
// 3, 31(o)
// 첫번째 숫자를 넣고, 정수num이 됐는지 확인 (1,2,3에 대해 진행)
// 안됐다면 두번째 숫자를 넣고, 정수num이 됐는지 확인(1,2,3에 대해 진행)
// ... 반복
// 합을 만족하면 그 반복문은 더 진행할 필요가 없음 (진행하면 합을 넘게 됨)
// for문이나 while문으로 하게 되면 depth가 길어지고, 반복문이 몇개 생겨야할지도 추정 어려움
// 재귀 사용

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [len,...arr] = input.map(Number);
const nodeArr = [1, 2, 3]
for (let n of arr) {
  cnt = 0
  const findPermutations = (num, sum, perArr) => {
    if (sum > num) return false
    if (sum === num) {
      cnt += 1
      return true
    }
    for (let node of nodeArr) {
      const newPerArr = [...perArr, node]
      const newSum = sum + node
      if (findPermutations(num, newSum, newPerArr)) break
    }
  }
  findPermutations(n, 0, [])
  console.log(cnt)
}
