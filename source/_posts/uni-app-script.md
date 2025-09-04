---
title: uni-app 脚本
date: 2025-09-03 16:09:13
tags: [uni-app, 前端, 移动端, 跨平台, js, javascript]
categories: uni-app
---

`export default {}` 里的内容，是页面的主要逻辑代码。包括几部分：

1. data：template模板中需要使用的数据。
2. 页面生命周期：如页面加载、隐藏、关闭，具体 见下
3. methods方法，如按钮点击、屏幕滚动

```vue
<script>
export default {
    data() {
        return {
            title: "点我", // 定义绑定在页面上的data数据
            // 多个data在这里继续定义。逗号分隔
        }
    },
    onLoad() {
        // 页面启动的生命周期，这里编写页面加载时的逻辑
        this.helloWorld();
    },
    // 多个页面生命周期监听，在这里继续写。逗号分隔
    methods: {
        buttonClick: function () {
            this.title = "被点了"
        },
        helloWorld: function () {
            alert("Hello World");
            this.test();
        },
        test() {
            alert("hello");
        }
        // 多个方法，在这里继续写。逗号分隔
    }
};
</script>
```

## 生命周期

| 函数名                                 | 说明                                                                                                                            | 平台差异说明                                      | 最低版本   |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|--------|
| onInit                              | 监听页面初始化，其参数同 onLoad 参数，为上个页面传递的数据，参数类型为 Object（用于页面传参），触发时机早于 onLoad                                                          | 百度小程序                                       | 3.1.0+ |
| onLoad                              | 监听页面加载，该钩子被调用时，响应式数据、计算属性、方法、侦听器、props、slots 已设置完成，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参），参考示例。                                   |                                             |        |
| onShow                              | 监听页面显示，页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面                                                                                         |                                             |        |
| onReady                             | 监听页面初次渲染完成，此时组件已挂载完成，DOM 树($el)已可用，注意如果渲染速度快，会在页面进入动画完成前触发                                                                    |                                             |        |
| onHide                              | 监听页面隐藏                                                                                                                        |                                             |        |
| onUnload                            | 监听页面卸载                                                                                                                        |                                             |        |
| onResize                            | 监听窗口尺寸变化                                                                                                                      | App、微信小程序、快手小程序                             |        |
| onPullDownRefresh                   | 监听用户下拉动作，一般用于下拉刷新，参考示例                                                                                                        |                                             |        |
| onReachBottom                       | 页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据。具体见下方注意事项                                                                             |                                             |        |
| onTabItemTap                        | 点击 tab 时触发，参数为Object，具体见下方注意事项                                                                                                | 微信小程序、QQ小程序、支付宝小程序、百度小程序、H5、App、快手小程序、京东小程序 |        |
| onShareAppMessage                   | 用户点击右上角分享                                                                                                                     | 微信小程序、QQ小程序、支付宝小程序、抖音小程序、飞书小程序、快手小程序、京东小程序  |        |
| onPageScroll                        | 监听页面滚动，参数为Object                                                                                                              | nvue不支持                                     |        |
| onNavigationBarButtonTap            | 监听原生标题栏按钮点击事件，参数为Object                                                                                                       | App、H5                                      |        |
| onBackPress                         | 监听页面返回，返回 event = {from:backbutton、 navigateBack} ，backbutton 表示来源是左上角返回按钮或 android 返回键；navigateBack表示来源是 uni.navigateBack；详见 | app、H5、支付宝小程序                               |        |
| onNavigationBarSearchInputChanged   | 监听原生标题栏搜索输入框输入内容变化事件                                                                                                          | App、H5                                      | 1.6.0  |
| onNavigationBarSearchInputConfirmed | 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。                                                                                          | App、H5                                      | 1.6.0  |
| onNavigationBarSearchInputClicked   | 监听原生标题栏搜索输入框点击事件（pages.json 中的 searchInput 配置 disabled 为 true 时才会触发）                                                          | App、H5                                      | 1.6.0  |
| onShareTimeline                     | 监听用户点击右上角转发到朋友圈                                                                                                               | 微信小程序                                       | 2.8.1+ |
| onAddToFavorites                    | 监听用户点击右上角收藏                                                                                                                   | 微信小程序、QQ小程序                                 | 2.8.1+ |

***

## 参考资料

1. [页面 | uni-app官网](https://uniapp.dcloud.net.cn/tutorial/page.html)