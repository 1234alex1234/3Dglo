"use strick";

const timerFunc = (deadLine) => {
  const timerNumbers = document.querySelector('.timer-numbers');
  const timerHours = document.querySelector('#timer-hours');
  const timerMinutes = document.querySelector('#timer-minutes');
  const timerSeconds = document.querySelector('#timer-seconds');
  let timerDays = document.querySelector('#timer-day');

  const getTimeRemaining = () => {
    timerDays = document.querySelector('#timer-day');

    let dateStop = new Date(deadLine).getTime();
    let nowDate = new Date().getTime();
    let timeRemaining = (dateStop - nowDate) / 1000;

    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor(timeRemaining / 60 / 60) % 24;
    let minutes = Math.floor(timeRemaining / 60) % 60;
    let seconds = Math.floor(timeRemaining) % 60;

    return {
      timeRemaining: timeRemaining,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  const noneZero = (number) => {
    if (number < 10) {
      return '0' + number;
    } else {
      return number;
    }
  };

  const daysNumber = () => {
    let span = document.createElement('span');
    span.id = 'timer-day';
    span.textContent = '00' + ' дней ';
    timerNumbers.prepend(span);
  };


  const upDateClock = () => {
    let getTime = getTimeRemaining('15 march 2022');

    timerDays.textContent = noneZero(getTime.days + ' дней ');
    timerHours.textContent = noneZero(getTime.hours);
    timerMinutes.textContent = noneZero(getTime.minutes);
    timerSeconds.textContent = noneZero(getTime.seconds);
  };


  daysNumber();
  let getTime = getTimeRemaining();
  if (getTime.timeRemaining > 0) {
    setInterval(upDateClock, 1000);
  } else {
    timerDays.textContent = '00';
    timerHours.textContent = '00';
    timerMinutes.textContent = '00';
    timerSeconds.textContent = '00';
  }
};

export default timerFunc;