const sendFormFunc = ({
  formId1,
  formId2,
  formId3,
  someElem = []
}) => {

  const form1 = document.querySelector(formId1);
  const form2 = document.querySelector(formId2);
  const form3 = document.querySelector(formId3);
  const stutusBlock = document.createElement('div');
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Наш менеджер с Вами свяжется!';
  const forms = document.querySelectorAll('form');
  const modal = document.querySelector('.popup');

  const validate = (lists) => {
    let isError = false;

    lists.forEach(list => {

      if (list.type === 'text') {
        if (!/[^а-яА-Я\-' ']/gi.test(list.value) && list.value !== '') {

        } else {
          isError = true;
        }
      }

      if (list.type === 'email') {
        if (/\w+@([\w]+\.)[\w]+/gi.test(list.value)) {

        } else {
          isError = true;
        }
      }

      if (list.type === 'tel') {
        if (!/[^\d\-+()]+/gi.test(list.value)) {

        } else {
          isError = true;
        }
      }

      //======================================
      if (list.name == 'user_message') {
        if (/[а-яА-Я\!,.?]+/.test(list.value)) {

        } else {
          isError = true;
        }
      }

      //=====================================
    });

    return isError;
  };

  const clearStatus = () => {
    stutusBlock.textContent = '';
  };

  const popupClose = () => {
    modal.style.display = 'none';
  };

  function submitForm(e) {
    e.preventDefault();

    const formElements = this.querySelectorAll('input');
    let formData = new FormData(this);
    let formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id);

      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'value') {
        formBody[elem.id] = element.value;
      }
    });

    stutusBlock.textContent = loadText;
    stutusBlock.style.color = 'white';
    this.append(stutusBlock);

    if (!validate(formElements)) {
      sendData(formBody).then(data => {
        stutusBlock.textContent = successText;
        formElements.forEach(elem => {
          elem.value = '';
          setTimeout(popupClose, 3500);
          setTimeout(clearStatus, 3500);
        });
      }).catch(error => {
        stutusBlock.textContent = errorText;
        setTimeout(clearStatus, 3500);
      });
    } else {
      alert("Данные не валидны!");
    }
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }

    }).then(res => res.json());
  };

  forms.forEach(form => {
    form.addEventListener('submit', submitForm);
  });
};

export default sendFormFunc;