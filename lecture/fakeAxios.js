const go = url => {
  return new Promise(resolve => {
    const obj = { data: `result from ${url}` };
    setTimeout(() => resolve(obj), 2000);
  });
};

module.exports = {
  get: go,
  post: go
};
