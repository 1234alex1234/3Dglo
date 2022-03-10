const promiseFunc = () => {

  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })


    .then(responce => responce.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
};

export default promiseFunc;