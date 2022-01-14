const path = require('path')
const humps = require('humps')
const _ = require('lodash')
const { getFileHashKey, setFileHashKey, getMap } = require('../fileHashMap')

module.exports = function(source) {
  let context = this.context
  let dirParse = path.parse(context)
  let dirName = dirParse.name

  // ignore node_modules/**
  if (_.includes(context, 'node_modules')) {
    return source
  }
  
  // check if fileName is 'style'
  let fileName = path.win32.basename(this.resourcePath).replace(/(.*)\.(css|less)$/, '$1')
  if (fileName !== 'style') {
    return source
  }
  
  // calculate hash
  let hash = getFileHashKey(context)
  if (!hash) {
    hash = setFileHashKey(context)
  }

  let formatClassName = humps.decamelize(dirName, { separator: '-' })
  let camelClassName = humps.pascalize(dirName)

  /**
   * match:
   * 1. .className.subClassName
   * 2. .className. 
   * 3. .className{
   * 4. .className,
   * 
   * will transform to '.className .className-data-css-${hash}'
   */
  let result = source.replace(new RegExp(`\\.(${camelClassName}|${formatClassName})(\\.| |{|,)`, 'ig'), `.${camelClassName}-css-hash-${hash}$2`)

  return result
}