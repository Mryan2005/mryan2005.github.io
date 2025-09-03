---
title: uni-app 容器组件
date: 2025-09-03 08:02:40
tags: [uni-app, 前端, 移动端, 跨平台]
categories: uni-app
---

## 概述

在 uni-app 中，容器组件用于布局和组织页面内容。

| 组件               | 说明                                      |
| ------------------ | ----------------------------------------- |
| `<view>`           | 基本的视图容器，类似于 HTML 的 `<div>`    |
| `<scroll-view>`    | 可滚动的视图容器，支持横向和纵向滚动      |
| `<swiper>`         | 轮播图容器，用于实现图片或内容的轮播效果  |
| `<movable-view>`   | 可移动的视图容器，支持拖拽操作            |
| `<cover-view>`     | 覆盖在地图或视频等组件上的视图容器        |
| `<cover-image>`    | 覆盖在地图或视频等组件上的图片容器        |

## `<view>` 组件

如果使用nvue，则需注意，包裹文字应该使用 `<text>` 组件。

```html
<view class="container">
    <text>Hello, uni-app!</text>
</view>
```

### 属性

| 属性                    | 类型    | 默认值 | 说明                                                                                          |
| ----------------------- | ------- | ------ | --------------------------------------------------------------------------------------------- |
| hover-class             | String  | none   | 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果                                 |
| hover-start-time        | Number  | 50     | 按住后多久出现点击态，单位毫秒。默认 50ms，ios 上建议设置为 0ms，安卓上建议设置为 50ms       |
| hover-stay-time         | Number  | 400    | 手指松开后点击态保留时间，单位毫秒。默认 400ms，ios 上建议设置为 300ms，安卓上建议设置为 400ms |
| hover-stop-propagation  | Boolean | false  | 是否阻止本节点的祖先节点出现点击态                                                            |

## `<scroll-view>` 组件

需注意在webview渲染的页面中，区域滚动的性能不及页面滚动。

### 属性

| 属性                     | 类型        | 默认值 | 说明                                                                                           |
| ------------------------ | ----------- | ------ | ---------------------------------------------------------------------------------------------- |
| scroll-x                 | Boolean     | false  | 设置横向滚动                                                                                   |
| scroll-y                 | Boolean     | false  | 设置纵向滚动                                                                                   |
| upper-threshold          | Number      | 50     | 距顶部/左边多远时（单位px），触发 scrolltoupper 事件                                          |
| lower-threshold          | Number      | 50     | 距底部/右边多远时（单位px），触发 scrolltolower 事件                                          |
| scroll-top               | Number      |        | 设置竖向滚动条位置                                                                             |
| scroll-left              | Number      |        | 设置横向滚动条位置                                                                             |
| scroll-into-view         | String      |        | 将某个子元素滚动到可见区域，值为子元素的 id                                                    |
| scroll-with-animation    | Boolean     | false  | 设置滚动动画                                                                                   |
| enable-back-to-top       | Boolean     | false  | 是否启用回到顶部功能，设置为 true 时，点击状态栏会回到顶部                                     |
| show-scrollbar           | Boolean     | true   | 是否显示滚动条                                                                                 |
| refresher-enabled        | Boolean     | false  | 是否启用下拉刷新                                                                               |
| refresher-threshold      | Number      | 45     | 下拉刷新阈值，单位 px                                                                          |
| refresher-default-style  | String      | circle | 下拉刷新的样式，目前仅支持 circle 和 arrow 两种样式                                           |
| refresher-background     | String      | "#FFF" | 设置自定义下拉刷新区域背景颜色                                                                 |
| refresher-triggered      | Boolean     | false  | 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发                  |
| enable-flex              | Boolean     | false  | 启用 flexbox 布局。开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其孩子节点 |
| scroll-anchoring         | Boolean     | false  | 开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS overflow-anchor 属性 |
| @scrolltoupper           | EventHandle |        | 滚动到顶部/左边时触发                                                                          |
| @scrolltolower           | EventHandle |        | 滚动到底部/右边时触发                                                                          |
| @scroll                  | EventHandle |        | 滚动时触发                                                                                     |
| @refresherpulling        | EventHandle |        | 处于下拉状态时触发                                                                             |
| @refresherrefresh        | EventHandle |        | 处于刷新状态时触发                                                                             |
| @refresherrestore        | EventHandle |        | 自定义下拉刷新被复位                                                                           |
| @refresherabort          | EventHandle |        | 自定义下拉刷新被中止                                                                           |

## `<swiper>` 组件

一般用于左右滑动或上下滑动，比如banner轮播图。

swiper下的每个swiper-item是一个滑动切换区域，不能停留在2个滑动区域之间。

### easing-function

| 值              | 说明           |
| --------------- | -------------- |
| default         | 默认的缓动函数 |
| linear          | 线性函数       |
| easeInCubic     | 缓入动画       |
| easeOutCubic    | 缓出动画       |
| easeInOutCubic  | 缓入缓出动画   |

### swiper-item

仅可放置在 `<swiper>` 组件中，宽高自动设置为100%。注意：宽高100%是相对于其父组件，不是相对于子组件，不能被子组件自动撑开。

```html
<swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" duration="500">
    <swiper-item>
        <image class="slide-image" src="/static/slide1.jpg"></image>
    </swiper-item>
    <swiper-item>
        <image class="slide-image" src="/static/slide2.jpg"></image>
    </swiper-item>
</swiper>
```

### 属性

| 属性名                          | 类型        | 默认值            | 说明                                                                                      | 平台差异说明                                      |
| ------------------------------- | ----------- | ----------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------- |
| indicator-dots                  | Boolean     | false             | 是否显示面板指示点                                                                        |                                                   |
| indicator-color                 | Color       | rgba(0, 0, 0, .3) | 指示点颜色                                                                                |                                                   |
| indicator-active-color          | Color       | #000000           | 当前选中的指示点颜色                                                                      |                                                   |
| active-class                    | String      |                   | swiper-item 可见时的 class                                                                | 支付宝小程序                                      |
| changing-class                  | String      |                   | acceleration 设置为 true 时且处于滑动过程中，中间若干屏处于可见时的class                  | 支付宝小程序                                      |
| autoplay                        | Boolean     | false             | 是否自动切换                                                                              |                                                   |
| current                         | Number      | 0                 | 当前所在滑块的 index                                                                      |                                                   |
| current-item-id                 | String      |                   | 当前所在滑块的 item-id ，不能与 current 被同时指定                                       | 支付宝小程序不支持、小红书小程序不支持            |
| interval                        | Number      | 5000              | 自动切换时间间隔                                                                          |                                                   |
| duration                        | Number      | 500               | 滑动动画时长                                                                              | app-nvue不支持                                    |
| circular                        | Boolean     | false             | 是否采用衔接滑动，即播放到末尾后重新回到开头                                              |                                                   |
| vertical                        | Boolean     | false             | 滑动方向是否为纵向                                                                        |                                                   |
| previous-margin                 | String      | 0px               | 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值                                     | app-nvue、抖音小程序、飞书小程序不支持            |
| next-margin                     | String      | 0px               | 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值                                     | app-nvue、抖音小程序、飞书小程序不支持            |
| acceleration                    | Boolean     | false             | 当开启时，会根据滑动速度，连续滑动多屏                                                    | 支付宝小程序                                      |
| disable-programmatic-animation  | Boolean     | false             | 是否禁用代码变动触发 swiper 切换时使用动画                                                | 支付宝小程序                                      |
| display-multiple-items          | Number      | 1                 | 同时显示的滑块数量                                                                        | app-nvue、支付宝小程序不支持、小红书小程序不支持  |
| skip-hidden-item-layout         | Boolean     | false             | 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息 | App、微信小程序、京东小程序                       |
| disable-touch                   | Boolean     | false             | 是否禁止用户 touch 操作                                                                   | App 2.5.5+、H5 2.5.5+、支付宝小程序              |
| easing-function                 | String      | default           | 指定 swiper 切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic | 微信小程序、快手小程序、京东小程序                |
| @change                         | EventHandle |                   | current 改变时会触发 change 事件，event.detail = {current: current, source: source}       |                                                   |
| @transition                     | EventHandle |                   | swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}，支付宝小程序暂不支持dx, dy | App、H5、微信小程序、支付宝小程序、抖音小程序、飞书小程序、QQ小程序、快手小程序 |
| @animationfinish                | EventHandle |                   | 动画结束时会触发 animationfinish 事件，event.detail = {current: current, source: source}  | 抖音小程序、飞书小程序与小红书小程序不支持        |

***

## 参考资料

[组件 | uni-app-x](https://uniapp.dcloud.net.cn/component/)