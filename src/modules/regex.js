const regexFunc = () => {

  const mainForms = document.querySelectorAll('.main-form');
  const footerForm = document.querySelector('.footer-form');

  mainForms.forEach((mainForm) => {

    mainForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputText = this.querySelector('input[type=text]');
      const inputEmail = this.querySelector('input[type=email]');
      const inputTel = this.querySelector('input[type=tel]');

      if (!/[^а-яА-Я\-]/gi.test(inputText.value) && inputText.value !== '') {
        alert("Ввод верный!");
      } else {
        alert("Ввод неверный!");
      }

      if (/\w+@([\w]+\.)[\w]+/gi.test(inputEmail.value)) {
        alert("Email верный!");
      } else {
        alert("Email неверный!");
      }

      if (!/[^\d\-]+/gi.test(inputTel.value)) {
        alert("Телефон валидный!");
      } else {
        alert("Телефон не валидный!");
      }
    });
  });

  footerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputText = this.querySelector('input[type=text]');
    const inputEmail = this.querySelector('input[type=email]');
    const inputTel = this.querySelector('input[type=tel]');


    if (!/[^а-яА-Я\-]/gi.test(inputText.value) && inputText.value !== '') {
      alert("Ввод верный!");
    } else {
      alert("Ввод неверный!");
    }

    if (/\w+@([\w]+\.)[\w]+/gi.test(inputEmail.value)) {
      alert("Email верный!");
    } else {
      alert("Email неверный!");
    }

    if (!/[^\d\-]+/gi.test(inputTel.value)) {
      alert("Телефон валидный!");
    } else {
      alert("Телефон не валидный!");
    }
  });

  const inputTexts = document.querySelectorAll('input[type=text]');

  inputTexts.forEach(function (inputText) {

    inputText.addEventListener("input", function (e) {

      if (inputText.classList.contains('calc-item')) {
        e.target.value = e.target.value.replace(/\D+/, "");
      }
    });
  });
};

export default regexFunc;