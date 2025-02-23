---
title: 第三章 | Vue中引入SCSS
date: 2025-02-23 20:13:28
tags: [Vue, SCSS]
categories: Vue
---

在Vue中引入SCSS，需要安装`sass-embedded`，然后在`vue.config.js`中配置`scss`。

<!-- more -->

## 配置SCSS

首先，安装`sass-embedded`：

```bash
npm install sass-embedded -D
```

然后，在`vue.config.js`中配置`scss`：

```json
{
  // ……（省略）
  "devDependencies": {
    // ……（省略）
    // 添加sass-embedded
    "sass-embedded": "^1.85.0",     // 添加sass-embedded
    // ……（省略）
  }
}
```

## 从外部引入SCSS

我们要在`assets`文件夹下新建一个`style.scss`文件，然后在`main.ts`中引入，最终，文件如下：

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 导入路由
import './assets/styles.scss'; // 引入全局SCSS文件

createApp(App).use(router).mount('#app'); // 使用路由
```

## 在Vue组件中引入SCSS

在Vue组件中引入SCSS，只需要在`<style>`标签中添加`lang="scss"`即可，如下：

```vue
<template>
  <div>
    <!-- 页面内容 -->
  </div>
</template>

<script lang="ts">
export default {
    name: 'BlankPage',
};
</script>


<style lang="scss">
/* 添加样式 */
</style>
```

如果，我们不想要SCSS影响到全局，可以添加`scoped`属性，如下：

```vue
<template>
  <div>
    <!-- 页面内容 -->
  </div>
</template>

<script lang="ts">
export default {
    name: 'BlankPage',
};
</script>


<style lang="scss" scoped>
/* 添加样式 */
</style>
```
