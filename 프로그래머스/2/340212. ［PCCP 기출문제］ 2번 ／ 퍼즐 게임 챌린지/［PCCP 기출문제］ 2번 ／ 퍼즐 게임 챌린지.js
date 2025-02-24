// 숙련도가 적절해 퍼즐을 틀리지 않고 풀 때
// 숙련도가 낮아 난이도-숙련도 만큼 퍼즐을 틀리고, 이전 퍼즐을 풀고, 퍼즐을 풀 때
// 전체 제한 시간 내에 풀기 위한 최솟값

// 1부터 순회하기엔 값이 너무 큼
// diff의 최대면 모두 한번에 풀 수 있음
// diff의 최대와 최소값이 숙련도인 경우 가능한지를 먼저 체크 -> 최대부터 확인할 필요 없이 최소부터 그 다음 난이도를 확인해나가자

// (!) 숙련도가 제일 낮은 문제 난이도와 같을때 가능하면, 숙련도를 빼도 1씩 빼보면서 더 낮은 값이 가능한지 체크
// (!) 숙련도가 제일 낮은 문제 난이도와 같을때 불가능하면, 다음 제일 낮은 문제 난이도로 지정 후 가능하면 숙련도를 1씩 빼보면서 더 낮은 값이 가능한지 체크
// (!) 문제에서 숙련도와 난이도의 차이만큼 다 틀리고 나면 시간을 사용해 푸는 시간을 더해줘야 함에 유의
// (!) 시간 초과 -> 1씩 줄이지 말고 이진 탐색을 하면 O(N^2)에서 O(logN)이 됨
// (!) solvedArr.push() / pop() 쓰기보다 prevTime 변수로 간단하게 관리하기
// (!) 숙련도가 제일 낮은 문제를 찾기 위해 새로 arr을 만들고 정렬하는게 오히려 더 시간을 씀

function solution(diffs, times, limit) {
    let arr = []
    for (let i = 0; i < diffs.length; i++) {
        arr.push([diffs[i],times[i]])
    }
    function checkAvailable(level) {
        let sum = 0
        let prevTime = null
        for (let j = 0; j < diffs.length; j++) {
            const diff = diffs[j]
            const time = times[j]
            if (diff <= level) {
                sum += time
                prevTime = time
            }
            else {
                const wrong = diff - level
                if (prevTime) {    
                    sum += wrong * (times[j] + prevTime) + times[j]
                    prevTime = time
                }
            } 
            if (sum > limit) return false
        }    
        return true
    }    
    
    // arr.sort((a, b) => a[0] - b[0])
    // arr.map((quiz, idx) => quiz[2] = idx)
    // let minQuiz
    // let idx = 0
    // for (let quiz of arr) {
    //   if (checkAvailable(quiz[0])) {
    //     minQuiz = quiz
    //     break
    //   }
    // }
    
    // 이진 탐색 구현
    // - 가능한 숙련도의 범위를 [이전 문제 난이도 혹은 1, max(diffs)]로 설정.
    // - mid = (low + high) / 2를 기준으로 checkAvailable(mid) 실행.
    // (!) low + high / 2 가 아닌 (low + high) / 2 여야 함
    // - checkAvailable(mid)가 true라면 high = mid - 1,그렇지 않으면 low = mid + 1로 조정.
    // 최종 검증 시 low 우선적으로 확인하고 안되면 low + 1을 리턴
    let [low, high] = [1, diffs.reduce((acc,cur) => Math.max(acc, cur)), 1]
    while (low < high) {
        mid = Math.round((low + high) / 2)
      if (checkAvailable(mid)) high = mid - 1
      else low = mid + 1
    }
    if (checkAvailable(low)) return low
    return low + 1;
}