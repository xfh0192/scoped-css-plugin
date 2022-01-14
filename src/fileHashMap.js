const hash = require('hash-sum')

let fileHashMap = {
  // format -> filePath: hash
  // exp: dist/src/index: 9e3c5t
}

module.exports.getMap = function() {
  return fileHashMap
}
module.exports.getFileHashKey = function(filePath) {
  return fileHashMap[filePath]
}

module.exports.setFileHashKey = function(filePath) {
  if (fileHashMap[filePath]) {
    console.warn(`duplicate file hash key: ${filePath}, invalid setting`)
    return
  }
  let hashStr = hash(filePath)
  fileHashMap[filePath] = hashStr
  return hashStr
}