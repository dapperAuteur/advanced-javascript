const go = url => {
  return new Promise(resolve => {
    const obj = { data: `result from ${url}` }
    setTimeout(() => resolve(obj), 100)
  })
}

module.exports = {
  get: go,
  post: go,
}
