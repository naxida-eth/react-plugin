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


### 2022-04-25  react-media

yarn add react-media@next

[react-media](https://github.com/ReactTraining/react-media)

const.ts
```ts
export const GLOBAL_MEDIA_QUERIES = {
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
} as const
```

PMedia.tsx
```tsx
import { useMedia } from 'react-media'
import { GLOBAL_MEDIA_QUERIES } from '../const';

const PMedia = () => {
    const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

    const getNowMedia = () => {
        if (matches.large) {
            return 'large'
        } else if (matches.medium) {
            return 'medium'
        } else if (matches.small) {
            return 'small'
        }
    }
    return <>
        now media?  {getNowMedia()}
    </>
}
export default PMedia
```
