---
title: uni-app 样式设计
date: 2025-09-03 15:29:01
tags: [uni-app, 前端, 移动端, 跨平台, scss, css]
categories: uni-app
---

## 概述

uni-app 支持标准的 CSS 样式属性，本文档整理了常用的 CSS 属性，按功能分类便于查阅。

## 布局相关属性

### Flexbox 布局

| 属性              | 说明                           |
| ----------------- | ------------------------------ |
| `display`         | 设置元素显示类型               |
| `flex`            | flex 项目的缩放比例            |
| `flex-basis`      | flex 项目的初始主尺寸          |
| `flex-direction`  | flex 容器主轴方向              |
| `flex-flow`       | flex-direction 和 flex-wrap 的简写 |
| `flex-grow`       | flex 项目的放大比例            |
| `flex-shrink`     | flex 项目的缩小比例            |
| `flex-wrap`       | flex 项目换行方式              |
| `justify-content` | 主轴上的对齐方式               |
| `align-items`     | 交叉轴上的对齐方式             |
| `align-content`   | 多行在交叉轴上的对齐方式       |
| `align-self`      | 单个项目在交叉轴上的对齐方式   |

### 定位属性

| 属性       | 说明                     |
| ---------- | ------------------------ |
| `position` | 元素定位方式             |
| `top`      | 元素距离顶部的距离       |
| `right`    | 元素距离右侧的距离       |
| `bottom`   | 元素距离底部的距离       |
| `left`     | 元素距离左侧的距离       |
| `z-index`  | 元素的堆叠顺序           |

## 尺寸属性

| 属性         | 说明                     |
| ------------ | ------------------------ |
| `width`      | 元素宽度                 |
| `height`     | 元素高度                 |
| `max-width`  | 最大宽度                 |
| `min-width`  | 最小宽度                 |
| `max-height` | 最大高度                 |
| `min-height` | 最小高度                 |
| `box-sizing` | 盒模型计算方式           |

## 外边距和内边距

| 属性             | 说明                     |
| ---------------- | ------------------------ |
| `margin`         | 外边距（简写）           |
| `margin-top`     | 上外边距                 |
| `margin-right`   | 右外边距                 |
| `margin-bottom`  | 下外边距                 |
| `margin-left`    | 左外边距                 |
| `padding`        | 内边距（简写）           |
| `padding-top`    | 上内边距                 |
| `padding-right`  | 右内边距                 |
| `padding-bottom` | 下内边距                 |
| `padding-left`   | 左内边距                 |

## 边框属性

### 边框基础属性

| 属性           | 说明                     |
| -------------- | ------------------------ |
| `border`       | 边框（简写）             |
| `border-width` | 边框宽度                 |
| `border-style` | 边框样式                 |
| `border-color` | 边框颜色                 |

### 分边设置

| 属性                 | 说明                     |
| -------------------- | ------------------------ |
| `border-top`         | 上边框（简写）           |
| `border-top-width`   | 上边框宽度               |
| `border-top-style`   | 上边框样式               |
| `border-top-color`   | 上边框颜色               |
| `border-right`       | 右边框（简写）           |
| `border-right-width` | 右边框宽度               |
| `border-right-style` | 右边框样式               |
| `border-right-color` | 右边框颜色               |
| `border-bottom`      | 下边框（简写）           |
| `border-bottom-width`| 下边框宽度               |
| `border-bottom-style`| 下边框样式               |
| `border-bottom-color`| 下边框颜色               |
| `border-left`        | 左边框（简写）           |
| `border-left-width`  | 左边框宽度               |
| `border-left-style`  | 左边框样式               |
| `border-left-color`  | 左边框颜色               |

### 圆角属性

| 属性                        | 说明                     |
| --------------------------- | ------------------------ |
| `border-radius`             | 边框圆角（简写）         |
| `border-top-left-radius`    | 左上角圆角               |
| `border-top-right-radius`   | 右上角圆角               |
| `border-bottom-left-radius` | 左下角圆角               |
| `border-bottom-right-radius`| 右下角圆角               |

## 背景属性

| 属性               | 说明                     |
| ------------------ | ------------------------ |
| `background`       | 背景（简写）             |
| `background-color` | 背景颜色                 |
| `background-image` | 背景图片                 |
| `background-clip`  | 背景绘制区域             |

## 文本属性

### 字体相关

| 属性          | 说明                     |
| ------------- | ------------------------ |
| `font-family` | 字体族                   |
| `font-size`   | 字体大小                 |
| `font-style`  | 字体样式                 |
| `font-weight` | 字体粗细                 |
| `color`       | 文字颜色                 |

### 文本布局

| 属性             | 说明                     |
| ---------------- | ------------------------ |
| `text-align`     | 文本对齐方式             |
| `line-height`    | 行高                     |
| `letter-spacing` | 字符间距                 |
| `text-overflow`  | 文本溢出处理             |
| `white-space`    | 空白字符处理             |
| `lines`          | 显示行数限制             |

### 文本装饰

| 属性                        | 说明                     |
| --------------------------- | ------------------------ |
| `text-decoration`           | 文本装饰（简写）         |
| `text-decoration-line`      | 装饰线类型               |
| `text-decoration-color`     | 装饰线颜色               |
| `text-decoration-style`     | 装饰线样式               |
| `text-decoration-thickness` | 装饰线粗细               |

## 视觉效果

### 阴影效果

| 属性          | 说明                     |
| ------------- | ------------------------ |
| `box-shadow`  | 盒子阴影                 |
| `text-shadow` | 文字阴影                 |

### 变换和过渡

| 属性                          | 说明                     |
| ----------------------------- | ------------------------ |
| `transform`                   | 2D/3D 变换               |
| `transform-origin`            | 变换原点                 |
| `transition`                  | 过渡效果（简写）         |
| `transition-property`         | 过渡属性                 |
| `transition-duration`         | 过渡持续时间             |
| `transition-timing-function`  | 过渡时间函数             |
| `transition-delay`            | 过渡延迟时间             |

### 显示控制

| 属性             | 说明                     |
| ---------------- | ------------------------ |
| `opacity`        | 透明度                   |
| `visibility`     | 可见性                   |
| `overflow`       | 溢出处理                 |
| `pointer-events` | 指针事件                 |

## 使用示例

```css
/* Flexbox 布局示例 */
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

/* 边框和圆角示例 */
.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 文本样式示例 */
.title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
}

/* 过渡效果示例 */
.button {
  transition: all 0.3s ease;
  transform: scale(1);
}

.button:hover {
  transform: scale(1.05);
  opacity: 0.8;
}
```

***

## 参考资料

[uvue css使用 | uni-app-x](https://doc.dcloud.net.cn/uni-app-x/css)