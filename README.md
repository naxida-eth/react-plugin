### 关于

hello,这里是记录自己常用的 react 插件库

### UI

使用 antd

```ts
yarn add antd react-app-rewired customize-cra babel-plugin-import
```

创建 config-overriders.js

```js
const { override, fixBabelImports } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  })
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
### 2022-06-15 react-stick

悬浮插件、比较原始，自定义比较好

```cmd
yarn add react-stick
```

[react-stick](https://github.com/signavio/react-stick)

[demo](https://react-stick.vercel.app/)

### 2022-06-15 react-smooth-corners

圆角插件，设计的很好看

```cmd
yarn add react-smooth-corners
```

[react-smooth-corners](https://github.com/DJanoskova/react-smooth-corners)

[demo](https://react-smooth-corners.netlify.app/)

### 2022-06-07 react-query

接口请求插件，省心

```cmd
yarn add react-query
```

[react-query](https://github.com/TanStack/query)

[api](https://tanstack.com/query/v4/docs/overview)
### 2022-06-06 react-medium-image-zoom

日期选择插件

```cmd
yarn add react-medium-image-zoom
```

[react-medium-image-zoom](https://github.com/rpearce/react-medium-image-zoom)

[code](https://rpearce.github.io/react-medium-image-zoom/?path=/story/zoom--gallery)

### 2022-06-01 react-datepicker

日期选择插件

```cmd
yarn add react-datepicker
```

[react-datepicker](https://github.com/any86/any-touch)

[code](https://reactdatepicker.com/)

### 2022-06-01 any-touch

页面手势插件：点击、拖拽、滑动、双指缩放、双指旋转等。

```cmd
yarn add any-touch
```

[any-touch](https://github.com/any86/any-touch)

### 2022-05-24 react-page-transition

很好看的页面加载动画插件

```cmd
yarn add @steveeeie/react-page-transition
```

[react-page-transition](https://github.com/Steveeeie/react-page-transition)

[code](https://codesandbox.io/s/advanced-react-page-transition-demo-z8hmd)

### 2022-05-24 styled-components

敏捷开发样式的插件。非常快！

```ts
yarn add styled-components
```

[react-spring](https://github.com/styled-components/styled-components)

[api](https://styled-components.com/docs/api)

### 2022-05-20 react-spring

好用的 react 动画组件

```ts
yarn add react-spring
```

[react-spring](https://github.com/pmndrs/react-spring)

[api](https://react-spring.io/)

### 2022-05-19 react-gridsheet

简易表格组件

```ts
yarn add react-gridsheet
```

[react-gridsheet](https://github.com/walkframe/react-gridsheet)

code: https://codesandbox.io/s/react-gridsheet-with-formula-forked-27ztur?file=/src/App.tsx

### 2022-05-16 react-simply-carousel

轻量化的轮播图组件，可定制，支持 SSR

```ts
yarn add react-simply-carousel
```

[react-simply-carousel](https://github.com/vadymshymko/react-simply-carousel)

code: https://github.com/WuMing1998/react-plugin/blob/main/src/pages/CarouselPage/index.tsx

### 2022-05-12 react-dropzone

图片拖拽上传插件

```ts
yarn add react-dropzone
```

[react-dropzone](https://github.com/react-dropzone/react-dropzone)

code: https://github.com/WuMing1998/react-plugin/blob/main/src/pages/Dropzone/index.tsx

### 2022-05-09 use-clamp-text

react 多行文本处理的 hook

```ts
yarn add use-clamp-text
```

[use-clamp-text](https://github.com/drenther/use-clamp-text)

code: https://github.com/WuMing1998/react-plugin/blob/main/src/components/ClampText/index.tsx

### 2022-05-05 react-transition-group

react 动画插件，可以比较自由的定制自己的动画

```ts
yarn add react-transition-group
```

[react-transition-group](https://github.com/reactjs/react-transition-group)

[api](https://reactcommunity.org/react-transition-group/transition)

code: https://github.com/WuMing1998/react-plugin/blob/main/src/components/Transition/index.tsx

### 2022-05-04 react-quick-pinch-zoom

图片双指缩放插件

```ts
yarn add react-quick-pinch-zoom
```

[react-quick-pinch-zoom](https://github.com/retyui/react-quick-pinch-zoom)

[api](https://github.com/retyui/react-quick-pinch-zoom/blob/master/docs/api/README.md)

code: https://github.com/WuMing1998/react-plugin/blob/main/src/components/QuickPinch/index.tsx

### 2022-04-28 react-loading-skeleton

react 骨架屏插件

```ts
yarn add react-loading-skeleton
```

[react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton)

code: https://github.com/WuMing1998/react-plugin/blob/main/src/components/Popper/index.tsx

### 2022-04-27 react-popper

消息提示库

```ts
yarn add react-popper @popperjs/core
```

[react-popper](https://popper.js.org/react-popper/v2/)
[wiki](https://popper.js.org/docs/v2/modifiers/compute-styles/)

code: https://github.com/WuMing1998/react-plugin/blob/main/src/components/Skeleton/index.tsx

### 2022-04-25 react-media

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
  large: "(min-width: 1200px)",
} as const;
```

PMedia.tsx

```tsx
import { useMedia } from "react-media";
import { GLOBAL_MEDIA_QUERIES } from "../const";

const PMedia = () => {
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

  const getNowMedia = () => {
    if (matches.large) {
      return "large";
    } else if (matches.medium) {
      return "medium";
    } else if (matches.small) {
      return "small";
    }
  };
  return <>now media? {getNowMedia()}</>;
};
export default PMedia;
```
