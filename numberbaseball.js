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

	getBallNum(ranNum, userNum) {
		let ballNum = 0;
		for(let i = 0; i < userNum.length; i++) {
			if (userNum[i] !== ranNum[i] && ranNum.includes(userNum[i])) {
				ballNum++;
			}
		}
		return ballNum;
	}

	isCorrect(strikeNum, ballNum) {
		if(strikeNum === 3) {
			alert('homeRUN!')
		} else if( strikeNum > 0 || ballNum > 0) {
			alert(`${strikeNum} 스트라이크, ${ballNum} 볼`)
		} else {
			alert(`포볼`)
		}
	}

	rule(nowNum) {
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
	
	play() {
		let nowNum = getUserNum();
		this.rule(nowNum)
		let strikeNum = isStrike(this.answer, nowNum)
		let ballNum = isBall(this.answer, nowNum)
		this.isCorrect(strikeNum, ballNum)
	}
}
