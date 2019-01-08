// Number baseball game
// Mrdoo
// 2018. 08. 22

// get random number
class NumberBaseballGame {
  constructor() {
    this.answer = this.getRanNum();
  }

  getRanNum() {
    const allNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const answer = [];
    for (let i = 0; i < 3; i++) {
      let ranNum = Math.floor(Math.random() * allNumbers.length);
      let oneNum = allNumbers.splice(ranNum, 1);
      answer.push(oneNum[0]);
    }
    return answer;
	}
	
	getUserNum() {
		const userString = document.getElementById('input').value;
		const userArr = userString.split('');
		return userArr
	}

	getStrikeNum(ranNum, userNum) {
		let strikeNum = 0;
		for (let i = 0; i < userNum.length; i++) {
			if(useNum[i] === ranNum[i]) {
				strikeNum++;
			}
		}
		return strikeNum;
	}

}
// cheking strike
function isStrike(ranNum, userNum) {
  let strikeNum = 0;
  for (let i = 0; i < userNum.length; i++) {
    if (userNum[i] === ranNum[i]) {
      strikeNum++;
    }
  }
  return strikeNum;
}

// checking ball
function isBall(ranNum, userNum) {
  let ballNum = 0;
  for (let i = 0; i < userNum.length; i++) {
    if (userNum[i] !== ranNum[i] && ranNum.includes(userNum[i])) {
      ballNum++;
    }
  }
  return ballNum;
}
// print progress //divide
function isCorrect(strikeNum, ballNum, progress) {
  if (strikeNum === 3) {
    progress.innerHTML = "스트라이크 아웃!";
  } else if (strikeNum > 0 || ballNum > 0) {
    output(strikeNum, ballNum, progress);
  } else {
    progress.innerHTML = "포볼";
  }
}

function output(strikeNum, ballNum, progress) {
  return (progress.innerHTML =
    "스트라이크 : " + strikeNum + "<br> 볼 : " + ballNum);
}



function rule(nowNum) {
  if (
    nowNum[0] === nowNum[1] ||
    nowNum[1] === nowNum[2] ||
    nowNum[2] === nowNum[0]
  ) {
    return alert("같은 숫자를 입력하지 마세요!");
  } else if (nowNum.length != 3) {
    return alert("3자리의 숫자만 입력해 주세요!");
  }
}

// play button
function play() {
  var progress = document.getElementById("progress");
  var answer = saveAnswer;
  var nowNum = getUserNum();
  rule(nowNum);
  var strikeNum = isStrike(answer, nowNum);
  var ballNum = isBall(answer, nowNum);
  isCorrect(strikeNum, ballNum, progress);
}
