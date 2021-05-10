const path = require('path')

module.exports = function(source) {
  debugger
  let context = this.context
  let fileParse = path.parse(context)
  let fileName = fileParse.name
  let result = source.replace(new RegExp(`\.${fileName}`), className => `${className}_111`)
  return result
}