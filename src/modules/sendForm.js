const sendFormFunc = (formId) => {

  const form = document.querySelector(formId);

  console.log(form);

  form.addEventListener('submit', function (event) {
    console.log(form);
    event.preventDefault();

    console.log("submit");
  });
};

export default sendFormFunc;