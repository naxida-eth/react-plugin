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

移动端适配解决方案之一

```ts
yarn add react-media@next
```

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

### 2022-04-27  react-popper

消息提示库

```ts
yarn add react-popper @popperjs/core
```

[react-popper](https://popper.js.org/react-popper/v2/)
[wiki](https://popper.js.org/docs/v2/modifiers/compute-styles/)

code: https://github.com/WuMing1998/react-plugin/blob/main/src/components/Skeleton/index.tsx


### 2022-04-28  react-loading-skeleton

react 骨架屏插件

```ts
yarn add react-loading-skeleton
```

[react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton)

code: https://github.com/WuMing1998/react-plugin/blob/main/src/components/Popper/index.tsx

### 2022-05-04  react-quick-pinch-zoom

图片双指缩放插件 

```ts
yarn add react-quick-pinch-zoom
```

[react-quick-pinch-zoom](https://github.com/retyui/react-quick-pinch-zoom)

[api](https://github.com/retyui/react-quick-pinch-zoom/blob/master/docs/api/README.md)

coding...

### 2022-05-05  react-transition-group

react动画插件，可以比较自由的定制自己的动画

```ts
yarn add react-transition-group
```

[react-transition-group](https://github.com/reactjs/react-transition-group)

[api](https://reactcommunity.org/react-transition-group/transition)

coding...