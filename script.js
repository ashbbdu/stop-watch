let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
let countDown = document.getElementById("countdown");

let timer;

let hour = 00;
let minute = 00;
let second = 00;

startBtn.addEventListener("click", () => {
  timer = true;
  stopWatch();
});

stopBtn.addEventListener("click", () => {
  timer = false;
});

resetBtn.addEventListener("click", () => {
  timer = false;
  hour = 00;
  minute = 00;
  second = 00;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
});

countDown.addEventListener("click", () => {
  countDonwn();
});

function stopWatch() {
  if (timer) {
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    let hourString = hour;
    let minuteString = minute;
    let secondString = second;

    if (secondString < 10) {
      secondString = `0${secondString}`;
    }

    if (minuteString < 10) {
      minuteString = `0${minuteString}`;
    }

    if (hourString < 10) {
      hourString = `0${hourString}`;
    }

    document.getElementById("hr").innerHTML = hourString;
    document.getElementById("min").innerHTML = minuteString;
    document.getElementById("sec").innerHTML = secondString;

    setTimeout(stopWatch, 1000);
  }
}

function countDonwn() {
  timer = false;

  second--;

  if(second == 0) {
    minute = 59;
    second = 0;
  }
minute--
  
  if (minute == 0) {
    hour--;
    minute = 0;
  }

  let hourString = hour;
  let minuteString = minute;
  let secondString = second;

  console.log(60 + minuteString, "min string");


  if(second == 0) {
    document.getElementById("sec").innerHTML = "00";
  }
  else if (second > 0) {
    document.getElementById("sec").innerHTML = secondString;
  }

  if(minute < 0) {
    document.getElementById("min").innerHTML =  minuteString;
  } else if(second == 0) {
    document.getElementById("min").innerHTML = "00";
  }


 

  setTimeout(countDonwn, 1000);
}
