const awsPromisify = (contex, func) => (...params) => {
  const e = new Error();
  return new Promise((resolve, reject) => {
    func.call(contex, ...params, (err, data) => {
      if (err) {
        e.message = `${func.name} ${JSON.stringify(params)}: ${err.message}`;
        reject(e);
      }
      if (data) {
        resolve(data);
      }
    });
  });
};

export default awsPromisify;
