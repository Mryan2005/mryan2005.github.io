---
title: uni-app 脚本
date: 2025-09-03 16:09:13
tags: [uni-app, 前端, 移动端, 跨平台, js, javascript]
categories: uni-app
---

目前，我将其分为这几个部分：
1. data
2. methods
3. 生命周期

```vue
<script>
export default {
    data() {
        return {
            message: 'Hello, uni-app!'
        };
    },
    methods: {
        showMessage() {
            console.log(this.message);
        }
    },
    onLoad() {
        this.showMessage();
    }
};
</script>
```
