const path = require('path')
const { getFileHashKey, setFileHashKey, getMap } = require('../fileGraphCache')

module.exports = function(source) {
  let context = this.context
  let dirParse = path.parse(context)
  let dirName = dirParse.name
  
  let fileName = path.win32.basename(this.resourcePath).replace(/(.*)\.(jsx?)$/, '$1')
  if (fileName !== 'index') {
    return source
  }

  let hash = getFileHashKey(context)
  // let a = getMap()
  if (!hash) {
    hash = setFileHashKey(context)
  }
  
  let result = source.replace(new RegExp(`(className='.*${dirName}.*')>`, 'ig'), `$1 data-css-${hash}>`)
  // debugger

  return result
}