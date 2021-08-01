const dateInput = document.querySelector(".input-date");
const luckyNumInput = document.querySelector(".input-lucky-num");
const btnCheck = document.querySelector(".btn");
const outputDiv = document.querySelector(".container-output");
const successImg = document.querySelector(".success-img");
const failureImg = document.querySelector(".failure-img");

const clickHandler = () => {
  const doB = dateInput.value;
  const luckyNum = luckyNumInput.value;

  if (doB && luckyNum) {
    checkIfLuckyNum(doB, luckyNum);
  } else if (!doB && !luckyNum) {
    showErroMsg("Please input your date of birth & lucky number!");
  } else if (!doB) {
    showErroMsg("Please input your date of birth!");
  } else if (!luckyNum) {
    showErroMsg("Please input your lucky number!");
  }
};

const checkIfLuckyNum = (doB, luckyNum) => {
  const dateArr = doB.split("-");
  var sumOfDoB = 0;

  for (var i = 0; i < dateArr.length; i++) {
    sumOfDoB = sumOfDoB + parseInt(dateArr[i]);
  }
  const divRes = sumOfDoB % luckyNum;
  if (divRes) {
    showFailureMsg();
  } else {
    showSuccessMsg();
  }
};

const showMsg = (msg) => {
  outputDiv.innerText = "";
  const para = document.createElement("p");
  const textNode = document.createTextNode(msg);
  para.appendChild(textNode);
  outputDiv.appendChild(para);
};

const showSuccessMsg = () => {
  outputDiv.style.height = "50px";
  successImg.style.display = "block";
  failureImg.style.display = "none";
  showMsg("Yay! Your birth date is a lucky number");
};

const showFailureMsg = () => {
  outputDiv.style.height = "50px";
  successImg.style.display = "none";
  failureImg.style.display = "block";
  showMsg("Sorry! Your birth date is not a lucky number!");
};

const showErroMsg = (msg) => {
  outputDiv.innerText = "";
  outputDiv.style.height = "150px";
  successImg.style.display = "none";
  failureImg.style.display = "none";
  showMsg(msg);
};

btnCheck.addEventListener("click", clickHandler);
