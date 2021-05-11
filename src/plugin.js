const RuleSet = require('webpack/lib/RuleSet')

class ScopedCssPlugin {
  constructor(options = {}) {
    console.log('scoped css plugin11=========')
    console.log(options);
  }

  apply(compiler) {
    // debugger
    console.log('apply 11');
    // compilation
    // compiler.hooks.compilation.tap('MyPlugin', (compilation, compilationParams) => {
    //   console.log(compiler)
    //   console.log(compilation)
    // });
    // compiler.hooks.make.tap('MyPlugin', (compilation, compilationParams) => {
    //   console.log(compiler)
    //   console.log(compilation)
    // });
    compiler.hooks.afterCompile.tap('MyPlugin', (compilation, compilationParams) => {
      // console.log(compiler)
      // console.log(compilation)
    });
    // compiler.hooks.shouldEmit.tap('MyPlugin', (compilation, compilationParams) => {
    //   console.log(compiler)
    //   console.log(compilation)
    // });
    // compiler.hooks.emit.tap('self-plugin', (compilation) => {
    //   console.log(compilation)
      // compilation.chunks.forEach(chunk => {
      //   chunk.files.forEach(file => {
      //     let asset = compilation.assets[file]
      //     console.log(asset)
      //   })
      // })
    // })


    // =========

    // 注入loader
    // use webpack's RuleSet utility to normalize user rules
    debugger
    const rawRules = compiler.options.module.rules
    const { rules } = new RuleSet(rawRules)

    console.log(rules)
  }
}

module.exports = ScopedCssPlugin