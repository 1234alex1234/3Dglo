const calcFunc = (price) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const total = document.querySelector('#total');

  const countCalc = (e) => {
    let calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    let calcSquareValue = +calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
      console.log(calcCountValue);
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue = price * calcTypeValue * calcCountValue * calcDayValue * calcSquareValue;
    } else {
      totalValue = 0;
    }

    total.textContent = totalValue;
  };

  const handleCalc = (e) => {
    if (e.target == calcType || e.target == calcCount || e.target == calcDay || e.target == calcSquare) {
      countCalc();
    }
  };

  calcBlock.addEventListener("input", handleCalc);
};

export default calcFunc