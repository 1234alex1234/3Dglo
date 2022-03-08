const regexFunc = () => {

  const mainForms = document.querySelectorAll('.main-form');
  const footerForm = document.querySelector('.footer-form');

  mainForms.forEach((mainForm) => {

    mainForm.addEventListener("input", function (e) {

      const inputText = this.querySelector('input[type=text]');
      const inputEmail = this.querySelector('input[type=email]');
      const inputTel = this.querySelector('input[type=tel]');

      if (e.target == inputText) {
        e.target.value = e.target.value.replace(/[^а-яА-Я\-' ']/gi, "");
      }

      if (e.target == inputEmail) {
        e.target.value = e.target.value.replace(/[^\w\@-_.!~*']+/, "");
      }

      if (e.target == inputTel) {
        e.target.value = e.target.value.replace(/[^\d\-()]+/gi, "");
      }
    });
  });

  footerForm.addEventListener("input", function (e) {

    const inputText = this.querySelector('input[type=text]');
    const inputEmail = this.querySelector('input[type=email]');
    const inputTel = this.querySelector('input[type=tel]');

    if (e.target == inputText) {
      e.target.value = e.target.value.replace(/[^а-яА-Я\-' ']/gi, "");
    }

    if (e.target == inputEmail) {
      e.target.value = e.target.value.replace(/[^\w\@-_.!~*']+/, "");
    }

    if (e.target == inputTel) {
      e.target.value = e.target.value.replace(/[^\d\-()]+/gi, "");
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