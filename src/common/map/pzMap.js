const loadScripts = async scripts => {
  const get = src => {
    return new Promise(function(resolve, reject) {
      const el = document.createElement('script')
      el.addEventListener('load', function() {
        resolve(src)
      }, false)
      el.addEventListener('error', function() {
        reject(src)
      }, false)
      el.id = src.id
      el.src = src.url
      document.getElementsByTagName('body')[0].appendChild(el) || document.getElementsByTagName('head')[0].appendChild(el)
    })
  }

  const myPromises = scripts.map(async script => {
    if (document.getElementById(script.id) === null) {
      return await get(script)
    }
  })

  return await Promise.all(myPromises)
}

export default loadScripts