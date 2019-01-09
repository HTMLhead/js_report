// Number baseball game
// Mrdoo
// 2018. 08. 22

// get random number
class NumberBaseballGame {
  constructor(baseballAnimation) {
    this.answer = this.getRanNum();
    this.progress = document.getElementById("progress");
    this.victoryImg = document.querySelector('.victory-img')
    this.baseballAnimation = baseballAnimation;
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
      this.progress.innerHTML =
        "!HomE RuN YoU WiN! <br>this page will restart in 3second";
      this.victoryImg.classList.add('victory-animation');
      setTimeout(_ => {
        location.reload();
      }, 3500);
    } else if (strikeNum > 0 || ballNum > 0) {
      this.progress.innerHTML = `${strikeNum}<br>${ballNum}`;
    } else {
      this.progress.innerHTML = "Nothing";
    }
  }

  checkRuleBreak(nowNum) {
    if (nowNum.length !== 3) {
      this.progress.innerHTML = `Please enter only 3 numbers`;
      return true;
    } else if (
      nowNum[0] === nowNum[1] ||
      nowNum[1] === nowNum[2] ||
      nowNum[2] === nowNum[0]
    ) {
      this.progress.innerHTML = `Do not input same numbers`;
      return true;
    }
  }

  play() {
    let nowNum = this.getUserNum();
    if (this.checkRuleBreak(nowNum)) return;
    this.baseballAnimation.playSwing();
    let strikeNum = this.getStrikeNum(this.answer, nowNum);
    let ballNum = this.getBallNum(this.answer, nowNum);
    this.isCorrect(strikeNum, ballNum);
  }
}

class BaseballAnimation {
  constructor() {}

  getImgElArr() {
    const selectorArr = [];
    for (let i = 1; i < 13; i++) {
      selectorArr.push(document.querySelector(`.image${i}`));
    }
    return selectorArr;
  }

  playSwing() {
    const selectorArr = this.getImgElArr();
    selectorArr[0].classList.add("show");
    selectorArr.forEach((v, i) => {
      if (i === 0) return selectorArr[11].classList.remove("show");
      setTimeout(_ => {
        selectorArr[i - 1].classList.remove("show");
        v.classList.add("show");
      }, i * 100);
    });
  }
}
const baseballAnimation = new BaseballAnimation();
const baseballGame = new NumberBaseballGame(baseballAnimation);
