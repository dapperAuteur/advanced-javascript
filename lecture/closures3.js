let globalCounter = 0

module.exports = startingValue => {
  let localCounter = startingValue
  return {
    incrementLocalCounter() {
      localCounter++
      return localCounter
    },
    decrementLocalCounter() {
      localCounter--
      return localCounter
    },
    incrementGlobalCounter() {
      globalCounter++
      return globalCounter
    },
    decrementGlobalCounter() {
      globalCounter--
      return globalCounter
    }
  }
}