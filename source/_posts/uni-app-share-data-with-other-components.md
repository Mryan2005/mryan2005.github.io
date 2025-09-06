---
title: uni-app 组件之间传输数据
date: 2025-09-06 15:58:33
tags: [uni-app, 前端, 移动端, 跨平台, 组件通信]
categories: [uni-app]
---

## 概述

无论是在Angular，还是在Vue，组件传输数据都是一个重要的功能。组件之间传输数据的方式有很多种，本文主要介绍在uni-app中常用的几种方式。

在angular里面，我大概知道存在有 3 种方式进行组件之间的数据传输：

1. **@Input() 和 @Output()**：通过输入属性和输出事件来实现父子组件之间的数据传输。
2. **服务（Service）**：通过共享服务来实现跨组件的数据共享。
3. **状态管理（如NgRx）**：通过全局状态管理来实现组件之间的状态共享。

在uni-app中，我们也可以借鉴这些思路来实现组件之间的数据传输。

## 父子组件传值

父子组件传值是最常见的组件通信方式。父组件通过`props`向子组件传递数据，子组件通过事件向父组件传递数据。

### 父组件向子组件传值

父组件通过`props`向子组件传递数据。

```vue
<!-- ParentComponent.vue -->
<template>
  <view>
    <ChildComponent :message="parentMessage" />
  </view>
</template>

<script>
import ChildComponent from './ChildComponent.vue';
export default {
    components: {
        ChildComponent
    },
    data() {
        return {
            parentMessage: 'Hello from Parent'
        };
    }
};
</script>
```

```vue
<!-- ChildComponent.vue -->
<template>
    <view>
        <text>{{ message }}</text>
    </view>
</template>

<script>
export default {
    props: {
        message: String
    }
};
</script>
```

### 子组件向父组件传值

子组件通过事件向父组件传递数据。它是使用`this.$emit`方法来触发一个事件，父组件通过监听这个事件来接收数据。

`this.$emit(a, b);`中的`a`是什么，父组件中的`@a`就是什么，`b`是什么，父组件中的回调函数的第一个参数就是什么。

```vue
<!-- ParentComponent.vue -->
<template>
  <view>
    <ChildComponent @childEvent="handleChildEvent" />
    <text>{{ childMessage }}</text>
  </view>
</template>

<script>
import ChildComponent from './ChildComponent.vue';
export default {
    components: {
        ChildComponent
    },
    data() {
        return {
            childMessage: ''
        };
    },
    methods: {
        handleChildEvent(message) {
            this.childMessage = message;
        }
    }
};
</script>
```

```vue
<!-- ChildComponent.vue -->
<template>
    <view>
        <button @click="sendMessageToParent">Send Message to Parent</button>
    </view>
</template>

<script>
export default {
    methods: {
        sendMessageToParent() {
            this.$emit('childEvent', 'Hello from Child');
        }
    }
};
</script>
```

## 兄弟组件传值

兄弟组件是指在同一个父组件中引用的两个或多个子组件。它们之间不能直接通过 props 或事件进行通信。我们可以通过一个共享的 "Service" 或 "Store" 模块来解决。

### 通过共享的 Store (类似 Service)

我们可以创建一个共享的 Store 模块，来存储和管理兄弟组件之间共享的数据。

```javascript
// store.js
import Vue from 'vue';
export const store = Vue.observable({
    sharedMessage: ''
});

export const setSharedMessage = (message) => {
    store.sharedMessage = message;
};
```

```vue
<!-- SiblingComponentA.vue -->
<template>
    <view>
        <input v-model="message" placeholder="Enter message" />
        <button @click="sendMessage">Send to Sibling B</button>
    </view>
</template>

<script>
import { setSharedMessage } from './store.js';
export default {
    data() {
        return {
            message: ''
        };
    },
    methods: {
        sendMessage() {
            setSharedMessage(this.message);
        }
    }
};
</script>
```

```vue
<!-- SiblingComponentB.vue -->
<template>
    <view>
        <text>Message from Sibling A: {{ sharedMessage }}</text>
    </view>
</template>

<script>
import { store } from './store.js';
export default {
    computed: {
        sharedMessage() {
            return store.sharedMessage;
        }
    }
};
</script>
```