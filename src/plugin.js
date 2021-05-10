
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
      console.log(compiler)
      console.log(compilation)
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
  }
}

module.exports = ScopedCssPlugin