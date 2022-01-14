# scoped-css-plugin

## 说明

该插件是webpack插件。依据文件目录检查`组件index.js和style.less的className`，统一转换为大驼峰格式文件夹名称，并添加包含hash的类名，提供样式作用域的功能

假设有如下文件结构

```
-- LoginManager
  - index.js
  - style.less
```

index.js 中的className将被转换

```javascript
// react class component
...
  render() {
    return <div className='LoginManager'></div>
    // 或
    return <div className='loginManager'></div>
    // 或
    return <div className='login-manager'></div>
    // 或
    return <div className={`login-manager ${this.data.loading ? 'loading' : ''}`}></div>
  }
...

  // 'login-manager ....' 这个className都将转换为 'LoginManager LoginManager-css-hash-[hash] ....'
  return <div className='LoginManager LoginManager-css-hash-2e4c9uwd'></div>
  // or
  return <div className={`LoginManager LoginManager-css-hash-2e4c9uwd ${this.data.loading ? 'loading' : ''}`}></div>
```

style.less 中的className将被转换

```style.less
.loginManager {
.login-manager {

<!-- 转换为如下 -->
<!-- .LoginManager-css-hash-[hash] { -->
.LoginManager-css-hash-2e4c9uwd {
```

## todo-list
- [ ] 添加hash的工作，尝试对js的编译后代码中进行
- [ ] 通过插件向配置信息加入loader
- [ ] 提供可配置项