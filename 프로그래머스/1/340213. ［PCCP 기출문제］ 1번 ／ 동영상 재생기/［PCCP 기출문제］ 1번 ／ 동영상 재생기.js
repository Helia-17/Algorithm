// (!) 처음이나 끝보다 더 이동해야하는 경우 처음이나 끝이 되어야 함
// (!) 변수의 값을 바꿀 때는 미치는 범위를 더 넓게 보자
// (!) arr[0], arr[1]인지 헷갈릴 땐 변수명 바꾸기
function pad(num) {return String(num).padStart(2, '0')}

function solution(video_len, pos, op_start, op_end, commands) {
    function moveTime(pos, plus) {
        const arr = pos.split(":").map(Number)
        const lenArr = video_len.split(":").map(Number)
        if (plus) {
            arr[1] += 10
            if (arr[1] >= 60) {
                arr[0] += 1
                arr[1] -= 60
            }
            if (arr[0] >= lenArr[0] && arr[1] > lenArr[1]) return video_len
        } else {
            if (arr[1] < 10) {
                arr[0] -= 1
                arr[1] += 50
            } else {
                arr[1] -= 10
            }
            if (arr[0] < 0) return "00:00"
        }
        return `${pad(arr[0])}:${pad(arr[1])}`
    }
    
    
    if (op_start <= pos && pos < op_end) {
        pos = op_end
    }
    for (let com of commands) {
        if (com === "next") {
            pos = moveTime(pos, true)
        } else if (com === "prev") {
            pos = moveTime(pos, false)  
        }
        if (op_start <= pos && pos < op_end) {
            pos = op_end
        }
    }
    return pos
}