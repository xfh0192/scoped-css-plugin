const RuleSet = require('webpack/lib/RuleSet')

class ScopedCssPlugin {
  constructor(options = {}) {
    console.log('====== scoped css plugin=========')
    console.log(options);
  }

  apply(compiler) {
    // =========

    // 注入loader
    // use webpack's RuleSet utility to normalize user rules
    // debugger
    console.log(12354)
    // const rawRules = compiler.options.module.rules
    // const ruleset = new RuleSet(rawRules)
    
    // debugger
    // let lessRuleIndex = rules.findIndex(createMatcher('style.less'))
    // const lessRule = rules[lessRuleIndex]

    // if (!lessRule) {
    //   throw new Error(
    //     `[scopedCssPlugin Error] No matching rule for .vue files found.\n`
    //   )
    // }

    // // get the normlized "use" for vue files
    // const lessUse = lessRule.use
    // // get vue-loader options
    // const lessLoaderUseIndex = lessUse.findIndex(u => {
    //   return /^less-loader|(\/|\\|@)less-loader/.test(u.loader)
    // })

    // if (lessLoaderUseIndex < 0) {
    //   throw new Error(
    //     `[lessLoaderPlugin Error] No matching use for less-loader is found.\n`
    //   )
    // }

    // const lessLoaderUse = lessUse[lessLoaderUseIndex]
    // // vueLoaderUse.ident = 'vue-loader-options'
    // lessLoaderUse.options = lessLoaderUse.options || {}

    // function createMatcher (fakeFile) {
    //   return (rule, i) => {
    //     const clone = Object.assign({}, rule)
    //     delete clone.include
    //     const normalized = RuleSet.normalizeRule(clone, {}, '')
    //     return (
    //       !rule.enforce &&
    //       normalized.resource &&
    //       normalized.resource(fakeFile)
    //     )
    //   }
    // }

  }
}

module.exports = ScopedCssPlugin