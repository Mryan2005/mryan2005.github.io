---
title: 第二章 | Vue 开始学习前的一些准备
date: 2025-02-23 17:10:48
tags: [Vue]
categories: Vue
---

由于在[快速开始](https://cn.vuejs.org/guide/quick-start.html)这一章里面，我们通过`vue@latest`的项目生成工具生成Vue项目的基本架构，并且通过`npm run dev`命令启动项目，可以看到一个Vue的页面，尽管如此，这基本架构一键生成的页面文件对初学者来说很不友好，所以我们需要删除一些文件，从而开始学习Vue。

要删除的文件有：
- `src/views/AboutView.vue`
- `src/views/HomeView.vue`
- `src/router/index.ts`
- `src/App.vue`
- `src/main.ts`
- `src/assets/*` # 删除src/assets文件夹下的所有文件
- `src/components/*` # 删除src/components文件夹下的所有文件

删除完成之后，在`src/views`文件夹下新建一个`BlankPage.vue`文件，内容如下：
```vue
<template>
  <div>
    <!-- 空白页面内容 -->
  </div>
</template>

<script lang="ts">
export default {
  name: 'BlankPage',
};
</script>

<style scoped>
/* 添加样式 */
</style>
```

创建一个`App.vue`文件，内容如下：
```vue
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style>
/* 添加样式 */
</style>
```

在`src/router`文件夹下新建一个`index.ts`文件，内容如下：
```typescript
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BlankPage from '../views/BlankPage.vue'; // 导入新的组件

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blank', // 新的路由路径
    name: 'BlankPage',
    component: BlankPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

最后，就是修改`src/main.ts`文件，内容如下：
```typescript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 导入路由

createApp(App).use(router).mount('#app'); // 使用路由
```