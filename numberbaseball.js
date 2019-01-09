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
      this.progress.innerHTML = "홈런,승리!";
    } else if (strikeNum > 0 || ballNum > 0) {
      this.progress.innerHTML = `${strikeNum}<br>${ballNum}`;
    } else {
      this.progress.innerHTML = "낫씽";
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

class BaseballAnimation {
  constructor() {}
  playSwing() {
    const selectorArr = [];
    for(let i = 1; i < 13; i++) {
      selectorArr.push(document.querySelector(`.image${i}`))
    }
    console.log(selectorArr);
    // one.classList.add('show')
    // setTimeout(_ => {
    //   twelve.classList.remove('show')
    //   one.classList.remove('show')
    //   two.classList.add('show')
    // }, 100)
    // setTimeout(_ => {
    //   two.classList.remove('show')
    //   three.classList.add('show')
    // }, 200)
    // setTimeout(_ => {
    //   three.classList.remove('show')
    //   four.classList.add('show')
    // }, 300)
    // setTimeout(_ => {
    //   four.classList.remove('show')
    //   five.classList.add('show')
    // }, 400)
    // setTimeout(_ => {
    //   five.classList.remove('show')
    //   six.classList.add('show')
    // }, 500)
    // setTimeout(_ => {
    //   six.classList.remove('show')
    //   seven.classList.add('show')
    // }, 600)
    // setTimeout(_ => {
    //   seven.classList.remove('show')
    //   eight.classList.add('show')
    // }, 700)
    // setTimeout(_ => {
    //   eight.classList.remove('show')
    //   nine.classList.add('show')
    // }, 800)
    // setTimeout(_ => {
    //   nine.classList.remove('show')
    //   ten.classList.add('show')
    // }, 900)
    // setTimeout(_ => {
    //   ten.classList.remove('show')
    //   eleven.classList.add('show')
    // }, 1000)
    // setTimeout(_ => {
    //   eleven.classList.remove('show')
    //   twelve.classList.add('show')
    // }, 1100)
    
  }
}
const baseballGame = new NumberBaseballGame();
const baseballAnimation = new BaseballAnimation