
class ScopedCssPlugin {
  constructor(options = {}) {
    console.log('scoped css plugin11=========')
    console.log(options);
  }

  apply(compiler) {
    console.log('apply');
    compiler.hooks.compilation.tap('MyPlugin', (compilation, compilationParams) => {

      compilation.hooks.buildModule.tap('MyPpp', module => {
        debugger
        console.log('==========');
        console.log(compilation);
        console.log('==========');
        console.log(compilationParams);
        console.log('==========');
        console.log(module);
        console.log('==========');
      })
    });
  }
}

// export default ScopedCssPlugin
module.exports = ScopedCssPlugin