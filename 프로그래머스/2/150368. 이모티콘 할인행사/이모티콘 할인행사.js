// - 중복순열로 미리 가능한 할인율을 정의
// - 유저별 buy, subscribe를 계산
// - 할인율별 sell, user를 계산
// - maxSell, maxUser와 비교

function solution(users, emoticons) {
    const discount = [10,20,30,40]
    const discountList = getPermutations(discount, emoticons.length)
    const answer = test(discountList, users, emoticons)
    return answer;
}

 const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

    arr.forEach((fixed, index, origin) => {
      // const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      // 해당하는 fixed를 제외한 나머지 배열 
      const permutations = getPermutations(origin, selectNumber - 1); 
      // 나머지에 대해서 순열을 구한다.
      const attached = permutations.map((el) => [fixed, ...el]); 
      //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); 
      // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}

const test = (discountList, users, emoticons) => {
    let maxUser = 0
    let maxSell = 0
    for (let i = 0; i < discountList.length; i++) {
        let user = 0
        let sell = 0
        for (let j = 0; j < users.length; j++) {
            const [buyDiscount, buyMax] = users[j]
            let buy = 0
            let subscribe = false
            for (let k = 0; k < emoticons.length; k++) {
                if (discountList[i][k] >= buyDiscount) {
                    buy += emoticons[k] * (100 - discountList[i][k]) / 100
                } 
                if (buy >= buyMax) {
                    subscribe = true
                    break
                }
            }
            if (subscribe) user += 1
            else sell += buy 
        }
        if (user > maxUser || (user == maxUser && sell > maxSell)) {
            maxUser = user
            maxSell = sell
        }
    }
    return [maxUser, maxSell]
}