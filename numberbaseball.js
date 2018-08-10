// Number baseball game
// Mrdoo
// 2018. 08. 10

// get random number
function getRanNum() {
    const allNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const answer = [];
    for (let i = 0; i < 3; i++) {
        let ranNum = Math.floor(Math.random() * (allNumbers.length - i));
        answer[i] = allNumbers[ranNum];
        allNumbers.splice(ranNum, 1);
    }
    return answer;
}

var a = getRanNum();

// get user number
function getUserNum() {
    const input = document.getElementById('input').value;
    const userNumber = input.split('')
    return userNumber;
}

// print progress
function isNum(strikeNum, ballNum, progress) {
    if (strikeNum === 3) {
        progress.innerHTML = '당신이 이겻습니다. 게임종료! 다시하려면 숫자를 다시 받아 주세요'
    } else if (strikeNum > 0 || ballNum > 0) {
        progress.innerHTML = strikeNum + '스트라이크 <br> ' + ballNum + '볼'
    } else {
        progress.innerHTML = '포볼'
    }
}

// cheking strike
function isStrike(ranNum, userNum) {
    var strikeNum = 0;
    for (var i = 0; i < userNum.length; i++) {
        if (userNum[i] === ranNum[i]) {
            strikeNum++
        }
    }
    return strikeNum;
}

// checking ball
function isBall(ranNum, userNum) {
    var ballNum = 0;
    for (var i = 0; i < userNum.length; i++) {
        if (ranNum[i] === userNum[i + 1] || ranNum[i] === userNum[i + 2] || ranNum[i] === userNum[i - 1] || ranNum[i] === userNum[i -2]) {
            ballNum++
        }
    }
    return ballNum;
}

// play button
function play() {
    var progress = document.getElementById('progress');
    var nowNum = getUserNum();
    if (nowNum[0] === nowNum[1] || nowNum[1] === nowNum[2] || nowNum[2] === nowNum[0]) {
        alert('같은 숫자를 입력하지 마세요!')
    }
    var strikeNum = isStrike(a, nowNum);
    var ballNum = isBall(a, nowNum);
    isNum(strikeNum, ballNum, progress);
}
