const path = require('path')
const { setFileHashKey } = require('../fileGraphCache')

module.exports = function(source) {
  // debugger

  let context = this.context
  let dirParse = path.parse(context)
  let dirName = dirParse.name
  
  let filePath = this.resourcePath

  let hashStr = setFileHashKey(filePath)
  
  let result = source.replace(new RegExp(`\.${dirName}`), className => `${className}_${hashStr}`)
  return result
}