const awsPromisify = (contex, func) => (params) => {
  return new Promise((resolve, reject) => {
    func.call(contex, params, (err, data) => {
      if (err) {
        reject(err);
      }
      if (data) {
        resolve(data);
      }
    });
  });
};

export default awsPromisify;
