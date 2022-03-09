const promiseFunc = () => {

  const getData = fetch('db.json');

  console.log(getData);
};

export default promiseFunc;