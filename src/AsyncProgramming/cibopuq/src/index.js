var log = console.log

Promise.resolve(1)
  .then(function() {
    log('###### case 1 #####')
    // `thens` are not executed after rejection
    return Promise.resolve(1)
      .then(() => {
        log('then 1.0')
      })
      .then(() => {
        throw 'A'
      })
      .then(() => {
        log('then 1.1')
      })
      .then(() => {
        log('then 1.2')
      })
      .then(() => {
        log('then 1.3')
      })
  })
  .catch(function() {
    log('###### case 2 #####')
    // `thens` are executed after a catch
    return Promise.resolve(1)
      .then(() => {
        log('then 2.0')
      })
      .then(() => {
        throw 'A'
      })
      .then(() => {
        log('then 2.1')
      })
      .catch(e => {
        log('catch 2.0 - ' + e)
      })
      .then(() => {
        log('then 2.2')
      })
  })
  .then(function() {
    log('###### case 3 #####')
    // `catch` returns a fulfilled promise by default
    return Promise.resolve(1)
      .then(() => {
        log('then 3.0')
      })
      .then(() => {
        throw 'A'
      })
      .catch(e => {
        log('catch 3.0 - ' + e)
      })
      .then(() => {
        log('then 3.1')
      })
      .catch(e => {
        log('catch 3.1 - ' + e)
      })
  })
  .then(function() {
    log('###### case 4 #####')
    // `catch` returns a rejected promise
    return Promise.resolve(1)
      .then(() => {
        log('then 4.0')
      })
      .then(() => {
        throw 'A'
      })
      .catch(e => {
        log('catch 4.0 - ' + e)
        return Promise.reject(e)
      })
      .then(() => {
        log('then 4.1')
      })
      .catch(e => {
        log('catch 4.1 - ' + e)
      })
  })
  .then(function() {
    log('###### case 5 #####')
    // `catch` returns a promise that can be fulfilled or rejected
    return Promise.resolve(1)
      .then(() => {
        log('then 5.0')
      })
      .then(() => {
        throw 'A'
      })
      .catch(e => {
        log('catch 5.0 - ' + e)
      })
      .then(() => {
        log('then 5.1')
      })
      .then(() => {
        throw 'B'
      })
      .then(() => {
        log('then 5.2')
      })
      .catch(e => {
        log('catch 5.1 - ' + e)
      })
  })
  .then(function() {
    log('###### case 6 #####')
    // `catch` can be use to return a fallback value
    return Promise.resolve(1)
      .then(() => {
        log('then 6.0')
      })
      .then(() => {
        throw 'A'
      })
      .catch(e => {
        return 'fallback value'
      })
      .then(x => {
        log('then 6.1 - ' + x)
      })
  })
