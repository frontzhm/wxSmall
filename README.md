# wxSmall

玩下微信小程序
做了下豆瓣电影

## 代码构成

也就是一个页面,可以有 `demo.json demo.wxml demo.wxss demo.js`

### JSON配置

#### [小程序配置app.json](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html)

app.json 是对当前小程序的全局配置，包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等

```js
{
 // pages接受一个数组，指定小程序由哪些页面组成。数组的第一项代表小程序的初始页面。新增/减少页面，都需要对 pages 数组进行修改。不需要写文件后缀，因为框架会自动去寻找路径下 .json, .js, .wxml, .wxss 四个文件进行整合。
  "pages": [
    "pages/index/index",
    "pages/logs/index"
  ],
  // window用于设置小程序的状态栏、导航条、标题、窗口背景色。上拉和下拉刷新操作
  "window": {
    "navigationBarTitleText": "Demo"
  },
  // 可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。position 为 top 时，将不会显示 icon。list的数量2-5
  "tabBar": {
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页"
    }, {
      "pagePath": "pages/logs/logs",
      "text": "日志"
    }]
  },
  // 可以设置各种网络请求的超时时间。上传,下载,请求,websocket
  "networkTimeout": {
    "request": 10000,
    "downloadFile": 10000
  },
  // 可以在开发者工具中开启 debug 模式，在开发者工具的控制台面板，调试信息以 info 的形式给出，其信息有Page的注册，页面路由，数据更新，事件触发 。
  "debug": true
}

```

#### [工具配置project.config.json](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/edit.html#Git %E7%8A%B6%E6%80%81%E5%B1%95%E7%A4%BA)

小程序开发者工具在每个项目的根目录都会生成一个 project.config.json，你在工具上做的任何配置都会写入到这个文件，当你重新安装工具或者换电脑工作时，你只要载入同一个项目的代码包，开发者工具就自动会帮你恢复到当时你开发项目时的个性化配置，其中会包括编辑器的颜色、代码上传时自动压缩等等一系列选项。

```js
{
  "miniprogramRoot": "./src",
  "qcloudRoot": "./svr",
  "setting": {
    "postcss": true,
    "es6": true,
    "minified": true,
    "urlCheck": false
  }
}
```

#### [页面配置 page.json](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html)

page.json配置项同app.json，是让开发者可以独立定义每个页面的一些属性，例如刚刚说的顶部颜色、是否允许下拉刷新等等。如 pages/logs 目录下的 logs.json

### [WXML 模板](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/)

WXML 充当的就是类似 HTML 的角色，有标签、属性等等构成。结合基础组件、事件系统，可以构建出页面的结构。

#### [基础组件](https://mp.weixin.qq.com/debug/wxadoc/dev/component/)

组件是视图层的基本组成单元。自带一些功能与微信风格的样式。通常包括开始标签和结束标签，属性用来修饰这个组件，内容在两个标签之内。注意：所有组件与属性都是小写，以连字符-连接

共同属性: id，class，style，data-\*，hidden，bind\*/catch\*
hidden表示组件是否显示，bind\*/catch\*绑定事件

```html
<tagname property="value">
  Content goes here ...
</tagname>
```

##### [组件列表](https://mp.weixin.qq.com/debug/wxadoc/dev/component/)

* 视图容器: 普通视图容器[view]/(https://mp.weixin.qq.com/debug/wxadoc/dev/component/view.html)/可滚动视图容器[scroll-view](https://mp.weixin.qq.com/debug/wxadoc/dev/component/scroll-view.html)/滑块视图容器[swiper](https://mp.weixin.qq.com/debug/wxadoc/dev/component/swiper.html)

* 基础内容: [icon](https://mp.weixin.qq.com/debug/wxadoc/dev/component/icon.html),[text](https://mp.weixin.qq.com/debug/wxadoc/dev/component/text.html),[progress]()

* 表单: [button](https://mp.weixin.qq.com/debug/wxadoc/dev/component/button.html),[form](https://mp.weixin.qq.com/debug/wxadoc/dev/component/form.html),[input](https://mp.weixin.qq.com/debug/wxadoc/dev/component/input.html),[checkbox](https://mp.weixin.qq.com/debug/wxadoc/dev/component/checkbox.html),[radio](https://mp.weixin.qq.com/debug/wxadoc/dev/component/radio.html),[picker](https://mp.weixin.qq.com/debug/wxadoc/dev/component/picker.html),[picker-view](https://mp.weixin.qq.com/debug/wxadoc/dev/component/picker-view.html),[slider](https://mp.weixin.qq.com/debug/wxadoc/dev/component/slider.html),[switch](https://mp.weixin.qq.com/debug/wxadoc/dev/component/switch.html),[label](https://mp.weixin.qq.com/debug/wxadoc/dev/component/label.html)

* 链接: [navigator](https://mp.weixin.qq.com/debug/wxadoc/dev/component/navigator.html)

* 多媒体: [image](https://mp.weixin.qq.com/debug/wxadoc/dev/component/navigator.html),[audio](https://mp.weixin.qq.com/debug/wxadoc/dev/component/audio.html),[video](https://mp.weixin.qq.com/debug/wxadoc/dev/component/video.html)

* 地图: [map](https://mp.weixin.qq.com/debug/wxadoc/dev/component/map.html)
* 画布: [canvas](https://mp.weixin.qq.com/debug/wxadoc/dev/component/canvas.html)
* 客服会话: [contact-button](https://mp.weixin.qq.com/debug/wxadoc/dev/component/contact-button.html)

##### [事件](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/event.html)

事件是视图层到逻辑层的通讯方式。可以将用户的行为反馈到逻辑层进行处理。可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。事件对象可以携带额外信息，如 id, dataset, touches。

bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡。

##### [数据绑定](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/data.html)

WXML 中的动态数据均来自对应 Page 的 data。
数据绑定使用 Mustache 语法（双大括号）将变量包起来。
注意: 花括号和引号之间如果有空格，将最终被解析成为字符串,所以严格 "{{}}"

```html
<view> {{ message }} </view>
<view id="item-{{message}}"> </view>
<view wx:if="{{condition}}"> </view>
<!-- false,true必须也用{{}} -->
<checkbox checked="{{false}}"> </checkbox>
<!-- 三元运算 -->
<view hidden="{{flag ? true : false}}"> Hidden </view>
<!-- 算数运算 -->
<view> {{a + b}} + {{c}} + d </view>
<!-- 逻辑运算 -->
<view wx:if="{{length > 5}}"> </view>
<!-- 字符串运算 -->
<view>{{"hello" + name}}</view>

<!-- 可以组合 -->
<view wx:for="{{[zero, 1, 2, 3, 4]}}"> {{item}} </view>
<template is="objectCombine" data="{{for: a, bar: b}}"></template>
<!-- 存在变量名相同的情况，后边的会覆盖前面 -->
<template is="objectCombine" data="{{...obj1, ...obj2, e: 5}}"></template>
<!-- 如果对象的 key 和 value 相同，也可以间接地表达。 -->
<template is="objectCombine" data="{{foo, bar}}"></template>
```

##### [列表渲染](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/list.html)

在组件上使用 wx:for 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。

默认数组的当前项的下标变量名默认为 index，数组当前项的变量名默认为 item
当 wx:for 的值为字符串时，会将字符串解析成字符串数组

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 `<input/>` 中的输入内容，`<switch/> `的选中状态），需要使用 wx:key 来指定列表中项目的唯一的标识符。

```html
<view wx:for="{{array}}">
  {{index}}: {{item.message}}
</view>
<!-- 也可以指定 -->
<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
  {{idx}}: {{itemName.message}}
</view>
<!-- 可以嵌套 99乘法表 -->
<view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="i">
  <view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="j">
    <view wx:if="{{i <= j}}">
      {{i}} * {{j}} = {{i * j}}
    </view>
  </view>
</view>
<!-- 可以在block -->
<block wx:for="{{[1, 2, 3]}}">
  <view> {{index}}: </view>
  <view> {{item}} </view>
</block>
<!-- key   objectArray: [ {id: 5, unique: 'unique_5'} ] -->
<switch wx:for="{{objectArray}}" wx:key="unique" style="display: block;"> {{item.id}} </switch>
<!--*this表示item本身,这个限制item 本身是一个唯一的字符串或者数字  -->
<switch wx:for="{{numberArray}}" wx:key="*this" style="display: block;"> {{item}} </switch>
```

##### [条件渲染](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/conditional.html)

在框架中，使用 wx:if="{{condition}}" 来判断是否需要渲染该代码块
频繁切换的情景下，用 hidden 更好，hidden只是简单的控制显示与隐藏。
不怎么变化 wx:if 较好。其只有true才会渲染。

```html
<view wx:if="{{length > 5}}"> 1 </view>
<view wx:elif="{{length > 2}}"> 2 </view>
<view wx:else> 3 </view>

<!-- block -->
<block wx:if="{{true}}">
  <view> view1 </view>
  <view> view2 </view>
</block>
```

##### [模板](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/template.html)

WXML提供模板（template），可以在模板中定义代码片段，然后在不同的地方调用
使用 name 属性，作为模板的名字。然后在`<template/>`内定义代码片段
使用模板的时候,is属性可以是Mustache 语法

```html
<!-- 定义 -->
<!--
  index: int
  msg: string
  time: string
-->
<template name="msgItem">
  <view>
    <text> {{index}}: {{msg}} </text>
    <text> Time: {{time}} </text>
  </view>
</template>
<!-- 使用  item: { index: 0, msg: 'this is a template', time: '2016-09-15' }-->
<template is="msgItem" data="{{...item}}"/>

<!-- import -->
<import src="item.wxml"/>
<template is="item" data="{{text: 'forbar'}}"/>
```

### [WXSS 样式](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxss.html)

WXSS 具有 CSS 大部分特性。同时为了更适合开发微信小程序，WXSS 对 CSS 进行了扩充以及修改。
定义在 app.wxss 中的样式为全局样式，作用于每一个页面。在 page 的 wxss 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 app.wxss 中相同的选择器.
新增的特性:

*  新单位rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。
* 样式导入 `@import "common.wxss";`

### js交互逻辑

一个服务仅仅只有界面展示是不够的，还需要和用户做交互：响应用户的点击、获取用户的位置等等。在小程序里边，我们就通过编写 js 脚本文件来处理用户的操作。

## 小程序的能力

### [小程序的启动  app](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/app.html)

微信客户端在打开小程序之前，

1. 会把整个小程序的代码包下载到本地。
2. 通过 app.json 的 pages 字段就可以知道你当前小程序的所有页面路径, 写在 pages 字段的第一个页面就是这个小程序的首页(打开小程序看到的第一个页面
3. 微信客户端就把首页的代码装载进来，通过小程序底层的一些机制，就可以渲染出这个首页。
4. 小程序启动之后，在 app.js 定义的 App 实例的 onLaunch 回调会被执行:

```js
App({
  onLaunch: function () {
    // 小程序启动之后 触发
  },
  onShow: function() {},
  // 全局访问的
  customKey: 'customValue'
})
```

整个小程序只有一个 App 实例，是全部页面共享的
App() 函数用来注册一个小程序。接受一个 object 参数，其指定小程序的生命周期函数等。

* App() 必须在 app.js 中注册，且不能注册多个。
* 不要在定义于 App() 内的函数中调用 getApp() ，使用 this 就可以拿到 app 实例。`this.customKey`
* 不要在 onLaunch 的时候调用 getCurrentPages()，此时 page 还没有生成。
* 通过 getApp() 获取实例之后，不要私自调用生命周期函数。`getApp().customKey`

### [程序与页面 page](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/page.html)

pages/logs/logs 下其实是包括了4种文件的，
1. 微信客户端会先根据 logs.json 配置生成一个界面，顶部的颜色和文字你都可以在这个 json 文件里边定义好。
2. 装载这个页面的 WXML 结构和 WXSS 样式。
3. 装载 logs.js，你可以看到 logs.js 的大体内容就是:

```js
Page({
  data: { // 参与页面渲染的数据
    logs: []
  },
  onLoad: function () {
    // 页面渲染后 执行
  },
  customKey: 'customValue'
})
```

Page() 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。

### [api](https://mp.weixin.qq.com/debug/wxadoc/dev/api/?t=20171227)

框架提供丰富的微信原生API，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。

要获取用户的地理位置时，只需要：

```js
wx.getLocation({
  type: 'wgs84',
  success: (res) => {
    var latitude = res.latitude // 经度
    var longitude = res.longitude // 纬度
  }
})
```

* wx.on 开头的 API 是监听某个事件发生的API接口，接受一个 CALLBACK 函数作为参数。当该事件触发时，会调用 CALLBACK 函数。
* 如未特殊约定，其他 API 接口都接受一个OBJECT作为参数。
* OBJECT中可以指定success, fail, complete来接收接口调用结果。

api接口太多,大致分类

* 网络 (发起请求 发起websocket..)
* 媒体 (选择图片 拍照 摄像 录音...)
* 文件 (文件的增删改查)
* 数据缓存 (storage 设置 获取 清除)
* 位置 (获取位置)
* 设备 (获取手机的数据 联系人 蓝牙 截屏事件 震动  剪贴板 wifi..)
* 界面 (提示框 弹出层 标题 下拉刷新 链接)
* wxml的节点信息 (获取某个节点)
* 第三方平台
* 开放接口 (微信能提供的  获取用户信 登录  授权 支付 获取二维码 设置 微信运动  附近 )
* 数据 (用户访问数据的趋势和概况)
* 调试接口 (打开和关闭调试)

[免费的api接口](https://www.zhihu.com/question/32225726)
