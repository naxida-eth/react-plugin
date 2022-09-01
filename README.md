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
### 2022-09-01 qrcode.react

二维码生成插件

```cmd  
yarn add qrcode.react
```

[qrcode.react](https://github.com/zpao/qrcode.react)


### 2022-08-30 yup

yup 数据校验插件

```cmd  
yarn add yup
```

[yup](https://github.com/jquense/yup#stringuppercasemessage-string--function-schema)

[api](https://github.com/jquense/yup#api)

### 2022-08-30 react-hook-form

react form 表单处理组件可以配合yup 进行输入验证

```cmd  
yarn add react-hook-form
```

[react-hook-form](https://github.com/react-hook-form/react-hook-form)

[api](https://react-hook-form.com/api)

```cmd
yarn add @hookform/resolvers yup
```
[与yup配合](https://react-hook-form.com/get-started/#SchemaValidation)

### 2022-08-18 react-rating

评分插件  ⭐️⭐️⭐️⭐️⭐️

```cmd  
yarn add react-rating
```

[react-rating](https://github.com/smastrom/react-rating)

[demo](https://react-rating.onrender.com/)

### 2022-08-17 gapi-script

谷歌第三方登录 这个插件可以获取id_token

```cmd  
yarn add gapi-script
```

[md](https://github.com/GoogleCloudPlatform/web-docs-samples/blob/HEAD/endpoints-frameworks/main.js)

### 2022-08-16 twittersignin

twitter第三方登录，这是个nodejs插件

```cmd  
yarn add twittersignin
```

[twittersignin](https://github.com/shalvah/twittersignin)

### 2022-08-12 react-facebook-login

facebook第三方登录插件

```cmd  
yarn add react-facebook-login
```

[react-facebook-login](https://github.com/keppelen/react-facebook-login)

### 2022-08-12 react-oauth

谷歌第三方登录插件

```cmd  
yarn add react-oauth
```

[react-oauth](https://github.com/MomenSherif/react-oauth)

[demo](https://react-oauth.vercel.app/)

### 2022-08-10 rc-tabs

rc-tab 从antd中抽离出来的经典tab组件

```cmd  
yarn add rc-tabs
```

[rc-tabs](https://github.com/react-component/tabs)

[demo](https://tabs.react-component.vercel.app/)

### 2022-08-09 monaco-react

将vscode编辑器内置到网页中的插件

```cmd
yarn add monaco-react
```

[monaco-react](https://github.com/suren-atoyan/monaco-react)

[demo](https://monaco-react.surenatoyan.com/)

### 2022-08-08 use-clipboard-copy
轻量级的react剪切板插件

```cmd
yarn add use-clipboard-copy
```

[use-clipboard-copy](https://github.com/wsmd/use-clipboard-copy)

### 2022-08-05 react-datasheet
创建电子表格的组件

```cmd
yarn add react-datasheet
```

[react-datasheet](https://github.com/nadbm/react-datasheet)

[demo](https://nadbm.github.io/react-datasheet/)


### 2022-08-04 react-error-boundary
错误边界捕获组件

```cmd
yarn add react-error-boundary
```

[react-error-boundary](https://github.com/bvaughn/react-error-boundary)

### 2022-08-03 react-chrono

时间旅行组件 时间轴，带轮播和扩展文本

```cmd
yarn add react-chrono
```

[react-chrono](https://github.com/prabhuignoto/react-chrono)

### 2022-07-27 react-switch

react switch组件 开关组件

```cmd
yarn add react-switch
```

[react-switch](https://github.com/markusenglund/react-switch)

[demo](https://react-switch.netlify.app/)

### 2022-07-26 react-super-responsive-table

兼容移动端table组件

```cmd
yarn add react-super-responsive-table
```

[react-super-responsive-table](https://github.com/coston/react-super-responsive-table)

[demo](https://user-images.githubusercontent.com/7424180/55982530-baab9900-5c5e-11e9-97c0-0336c5889504.gif)

### 2022-07-25 react-hot-toast

可自定义的通知组件

```cmd
yarn add react-hot-toast
```

[react-hot-toast](https://github.com/timolins/react-hot-toast)

[demo](https://react-hot-toast.com/)

### 2022-07-19 rc-select

经典的select组件

```cmd
yarn add rc-select
```

[react-component/select](https://github.com/react-component/select)

### 2022-07-18 react-click-away-listener

监听何时点击组件外部的组件

```cmd
yarn add react-click-away-listener
```

[react-click-away-listener](https://github.com/ooade/react-click-away-listener)

### 2022-07-14 react-search-autocomplete

带模糊搜索和定制过滤，自动补全的搜索组件

```cmd
yarn add react-search-autocomplete
```

[react-search-autocomplete](https://github.com/sickdyd/react-search-autocomplete)

[demo](https://github.com/sickdyd/react-search-autocomplete/tree/demo)

### 2022-07-13 react-use-websocket

react中的websocket插件

```cmd
yarn add react-use-websocket
```

[react-use-websocket](https://github.com/robtaussig/react-use-websocket)

[demo](https://robtaussig.com/socket/)

### 2022-07-12 react-toastify

样式很好看的通知组件

```cmd
yarn add react-toastify
```

[react-toastify](https://github.com/fkhadra/react-toastify)

[demo](https://fkhadra.github.io/react-toastify/introduction/)

### 2022-07-11 react-countup

数字变换的显示组件 

```cmd
yarn add react-countup
```

[react-countup](https://github.com/glennreyes/react-countup)

### 2022-07-11 reactime

chrome的时间调试工具

[reactime](https://github.com/open-source-labs/reactime/releases/tag/v14.0.0)

### 2022-07-07 rc-image

antd中抽离的图像组件

```cmd
yarn add rc-image
```

[rc-image](https://github.com/react-component/image)

[api](https://image-sepia.vercel.app/#example)

### 2022-07-05 react-easy-crop

图片裁剪组件

```cmd
yarn add react-easy-crop
```

[react-easy-crop](https://github.com/ValentinH/react-easy-crop)

[demo](https://valentinh.github.io/react-easy-crop/)

### 2022-07-04 react-timeago

时间处理组件

```cmd
yarn add react-timeago
```

传入任意格式的时间,会与当前时间对比后返回 例如 3 天前 等时间格式.

[react-timeago](https://github.com/nmn/react-timeago)

### 2022-06-28 react-range

react 滑动条，接到需求需要做一个双向滑动条的筛选，体验不错的滑动插件。

```cmd
yarn add react-range
```

[react-range](https://github.com/tajo/react-range)

### 2022-06-21 react-pin-field

验证码输入插件

```cmd
yarn add react-pin-field
```

[react-pin-field](https://github.com/soywod/react-pin-field)

### 2022-06-16 react-collapsible

文本折叠插件

```cmd
yarn add react-collapsible
```

[react-collapsible](https://github.com/glennflanagan/react-collapsible)

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

图片缩放插件

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

敏捷开发样式的插件。非常快！ css-in-js库中的经典插件

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
