
// 시간조작은 시를 분으로 바꾼 뒤, 분을 초로 바꾼 뒤 계산 후 다시 포맷팅하는게 나을 수도 있다.
// Math.max / min을 쓰면 범위를 초과하는 케이스에 대해 대응이 쉽다

function timeToSeconds(time) {
    const [minute, second] = time.split(":").map(Number);
    return minute * 60 + second;
}

function solution(video_len, pos, op_start, op_end, commands) {
    let current = timeToSeconds(pos);
    const videoEnd = timeToSeconds(video_len);
    const openingStart = timeToSeconds(op_start);
    const openingEnd = timeToSeconds(op_end);

    commands.forEach(cmd => {
        if (openingStart <= current && current <= openingEnd) current = openingEnd;
        if (cmd === "prev") current = Math.max(0, current - 10);
        if (cmd === "next") current = Math.min(videoEnd, current + 10);
    });

    if (openingStart <= current && current <= openingEnd) current = openingEnd;
    return `${String(Math.floor(current / 60)).padStart(2, '0')}:${String(current % 60).padStart(2, '0')}`
}

