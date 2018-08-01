getRanNum = function () {
    while (true) {
        var number = Math.floor(Math.random() * 900) + 100
        var str = String(number)
        var Rnum = str.split('')
        if (Rnum[0] != Rnum[1] && Rnum[1] != Rnum[2] && Rnum[2] != Rnum[0]) {
            break;
        }
    }
    return Rnum;
}

getMyNum = function () {
    var Mnum = document.getElementById('input').value.split('')
    return Mnum;
}

isNum = function () {
    var Rnum = ran
    var Mnum = getMyNum();
    var strike = isStrike(Rnum, Mnum);
    var ball = isBall(Rnum, Mnum);
    var out = document.getElementById('output');
    if (strike === 3) return out.innerHTML = '3개의 숫자를 모두 맞추셧습니다! 게임종료!';
    return out.innerHTML = 'strike : ' + strike + '<br>ball : ' + ball;
}

isStrike = function () {
    var Rnum = ran
    var Mnum = getMyNum();
    var strike = 0;
    for (var i = 0; i < Rnum.length; i++) {
        if (Mnum[i] === Rnum[i])
        strike++;
    }
    return strike;
}

isBall = function () {
    var Rnum = ran
    var Mnum = getMyNum();
    var ball = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if ((j != i) && (Mnum[i] === Rnum[j]))
            ball++;
        }
    }
    return ball;
}

var ran = getRanNum();

play = function () {
    getMyNum();
    isNum();
    isStrike();
    isBall();
}
