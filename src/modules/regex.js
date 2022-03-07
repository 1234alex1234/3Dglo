const regexFunc = () => {

  const mainForms = document.querySelectorAll('.main-form');
  const footerForm = document.querySelector('.footer-form');

  mainForms.forEach((mainForm) => {

    mainForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let isError = false;
      const inputText = this.querySelector('input[type=text]');
      const inputEmail = this.querySelector('input[type=email]');
      const inputTel = this.querySelector('input[type=tel]');

      if (!/[^а-яА-Я\-]/gi.test(inputText.value) && inputText.value !== '') {

      } else {
        alert("Ввод неверный!");
        isError = true;
      }

      if (/\w+@([\w]+\.)[\w]+/gi.test(inputEmail.value)) {

      } else {
        alert("Email неверный!");
        isError = true;
      }

      if (!/[^\d\-]+/gi.test(inputTel.value)) {

      } else {
        alert("Телефон не верный!");
        isError = true;
      }

      if (isError == true) {
        alert("Заполните данные верно!");
      }
    });
  });

  footerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let isError = false;
    const inputText = this.querySelector('input[type=text]');
    const inputEmail = this.querySelector('input[type=email]');
    const inputTel = this.querySelector('input[type=tel]');


    if (!/[^а-яА-Я\-]/gi.test(inputText.value) && inputText.value !== '') {

    } else {
      alert("Ввод неверный!");
      isError = true;
    }

    if (/\w+@([\w]+\.)[\w]+/gi.test(inputEmail.value)) {

    } else {
      alert("Email неверный!");
      isError = true;
    }

    if (!/[^\d\-]+/gi.test(inputTel.value)) {

    } else {
      alert("Телефон не верный!");
      isError = true;
    }

    if (isError == true) {
      alert("Данные введены неверно!");
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