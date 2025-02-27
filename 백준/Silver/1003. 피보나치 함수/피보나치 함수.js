// 각 노드는 두 개의 하위 문제로 나뉘며, 트리의 깊이는 O(n)
// 각 단계에서 노드 개수는 증가하며, 총 노드 개수는 O(2^n)에 비례
// 시간 초과 -> 메모이제이션(DP) 기법 사용
// 메모이제이션 사용 시 memo 객체에 최대 O(n)개의 값을 저장, 재귀 호출 스택도 O(n)까지 쌓일 수 있음
// 타뷸레이션 사용 시 dp 배열에 O(n)개의 값을 저장 -  재귀 호출 오버헤드가 없어서 더 빠른 경우가 많음
// (!) 문자열 연결 (+) 연산은 O(길이) 의 시간복잡도를 가지므로 비효율적 -> 0과 1의 개수만 관리

const [len, ...numArr] = input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function fibonacci(n) {
  let dp = new Array(n + 1).fill([0, 0])
  dp[0] = [1, 0]
  dp[1] = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = [dp[i-1][0] + dp[i-2][0], dp[i-1][1] + dp[i-2][1]] 
  }
  return dp[n]
} 

for (let i = 0; i < len; i++) {
  const num = Number(numArr[i])
  console.log(fibonacci(num).join(' '))
}