const path = require('path')
const { getFileHashKey, setFileHashKey, getMap } = require('../fileGraphCache')

module.exports = function(source) {
  
  let context = this.context
  let dirParse = path.parse(context)
  let dirName = dirParse.name
  
  let fileName = path.win32.basename(this.resourcePath).replace(/(.*)\.(css|less)$/, '$1')
  if (fileName !== 'style') {
    return source
  }
  
  let hash = getFileHashKey(context)
  // let a = getMap()
  if (hash) {
    return source
  }

  hash = setFileHashKey(context)
  let result = source.replace(new RegExp(`\.${dirName}`), className => `${className}[data-css-${hash}]`)
  // debugger
  return result
}