// Number baseball game
// Mrdoo
// 2018. 08. 22

// get random number
function getRanNum() {
    const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const answer = [];
    for (let i = 0; i < 3; i++) {
        let ranNum = Math.floor(Math.random() * allNumbers.length);
        answer[i] = allNumbers[ranNum];
        allNumbers.splice(ranNum, 1);
    }
    saveAnswer = answer
    return saveAnswer
}
getRanNum();

// get user number
function getUserNum() {
    const input = document.getElementById('input').value;
    const userNumber = input.split('')
    for (let i = 0; i < userNumber.length; i++) {
        userNumber[i] = Number(userNumber[i]);
    }
    return userNumber;
}

// print progress
function isNum(strikeNum, ballNum, progress) {
    if (strikeNum === 3) {
        progress.innerHTML = '스트라이크 : ' + strikeNum + '<br> 볼 : ' + ballNum + '<br> 승리!'
    } else if (strikeNum > 0 || ballNum > 0) {
        progress.innerHTML = '스트라이크 : ' + strikeNum + '<br> 볼 : ' + ballNum
    } else {
        progress.innerHTML = '스트라이크 : ' + strikeNum + '<br> 볼 : ' + ballNum + '<br> 포볼'
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

function rule(nowNum) {
    if (nowNum[0] === nowNum[1] || nowNum[1] === nowNum[2] || nowNum[2] === nowNum[0]) {
        return alert('같은 숫자를 입력하지 마세요!');
    } else if (nowNum.length != 3) {
        return alert('3자리의 숫자만 입력해 주세요!');
    } 
}

// play button
function play() {
    var progress = document.getElementById('progress');
    var answer = saveAnswer
    var nowNum = getUserNum();
    rule(nowNum);
    var strikeNum = isStrike(answer, nowNum);
    var ballNum = isBall(answer, nowNum);
    isNum(strikeNum, ballNum, progress);
}
