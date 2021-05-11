const hash = require('hash-sum')

let fileGraph = {
  // filePath: hash
}

module.exports.getFileHashKey = function(filePath) {
  return fileGraph[filePath]
}

module.exports.setFileHashKey = function(filePath) {
  if (fileGraph[filePath]) {
    console.warn(`duplicate file hash key: ${filePath}, invalid setting`)
    return
  }
  let hashStr = hash(filePath)
  fileGraph[filePath] = hashStr
  return hashStr
}