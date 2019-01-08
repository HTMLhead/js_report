// Number baseball game
// Mrdoo
// 2018. 08. 22

// get random number
class NumberBaseballGame {
  constructor() {
    this.answer = this.getRanNum();
    this.progress = document.getElementById("progress");
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
    const userString = document.getElementById("input").value;
    const userArr = userString.split("");
    return userArr;
  }

  getStrikeNum(ranNum, userNum) {
    let strikeNum = 0;
    for (let i = 0; i < userNum.length; i++) {
      if (userNum[i] === ranNum[i]) {
        strikeNum++;
      }
    }
    return strikeNum;
  }

  getBallNum(ranNum, userNum) {
    let ballNum = 0;
    for (let i = 0; i < userNum.length; i++) {
      if (userNum[i] !== ranNum[i] && ranNum.includes(userNum[i])) {
        ballNum++;
      }
    }
    return ballNum;
  }

  isCorrect(strikeNum, ballNum) {
    if (strikeNum === 3) {
      this.progress.innerHTML = "홈러어어어언 승리!";
    } else if (strikeNum > 0 || ballNum > 0) {
      this.progress.innerHTML = `${strikeNum}<br>${ballNum}`;
    } else {
      this.progress.innerHTML = "그리고 아무것도 없었다.";
    }
  }

  checkRuleBreak(nowNum) {
    if (
      nowNum[0] === nowNum[1] ||
      nowNum[1] === nowNum[2] ||
      nowNum[2] === nowNum[0]
    ) {
      alert("같은 숫자를 입력하지 마세요!");
      return true;
    } else if (nowNum.length != 3) {
      alert("3자리의 숫자만 입력해 주세요!");
      return true;
    }
  }

  play() {
    let nowNum = this.getUserNum();
    if (this.checkRuleBreak(nowNum)) return;
    let strikeNum = this.getStrikeNum(this.answer, nowNum);
    let ballNum = this.getBallNum(this.answer, nowNum);
    this.isCorrect(strikeNum, ballNum);
  }
}

const baseballGame = new NumberBaseballGame();
