const Plugin = require('./plugin.js')

Plugin.ScopedJsLoader = require.resolve('./loaders/js.js')
Plugin.ScopedCssLoader = require.resolve('./loaders/css.js')

module.exports = Plugin