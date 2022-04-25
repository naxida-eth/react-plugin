### 关于
hello,这里是记录自己的react插件库

### UI

使用antd

```ts
yarn add antd react-app-rewired customize-cra babel-plugin-import
```

创建 config-overriders.js
```js
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
);
```

修改 package.json
```json
"scripts": {
   "start": "react-app-rewired start",
   "build": "react-app-rewired build",
   "test": "react-app-rewired test",
}
```
