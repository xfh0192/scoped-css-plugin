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

  // check if fileName is 'index'
  let fileName = path.win32.basename(this.resourcePath).replace(/(.*)\.(jsx?)$/, '$1')
  if (fileName !== 'index') {
    return source
  }

  // calculate hash
  let hash = getFileHashKey(context)
  if (!hash) {
    hash = setFileHashKey(context)
  }
  
  let decamelClassName = humps.decamelize(dirName, { separator: '-' })  // main-component
  let camelClassName = humps.pascalize(dirName) // MainComponent
  let targetClassName = `${camelClassName}|${decamelClassName}`

  let normalClassStr = `('.*(${targetClassName}).*')` // className='class'
  let dynamicClassStr = `({\`.*(${targetClassName}).*\`})`  // className={`ModelViewer ${this.data.loading ? 'loading' : ''}`}
  let result = source.replace(new RegExp(`className=(${normalClassStr}|${dynamicClassStr})`, 'ig'), str => {

    // 统一className为大驼峰格式, exp: ModelViewer
    str = str.replace(new RegExp(`( |')(${targetClassName})( |')`, 'ig'), `$1${camelClassName}$3`)
    /**
     * 假如出现：
     * <div className='header'>
     *  <div className='header-left'></div>
     * </div>
     * 
     * 需要检查后，确定是否加hash
     */
    let checkClassName = new RegExp(`( |'|\`)(${dirName})( |'|\`)`, 'ig').test(str)
    if (checkClassName) {
      // will transform to 'className className-data-css-${hash}'
      str = str.replace(new RegExp(`${camelClassName}`, 'ig'), `${camelClassName} ${camelClassName}-css-hash-${hash} `)
    }
    return str
  })

  return result
}