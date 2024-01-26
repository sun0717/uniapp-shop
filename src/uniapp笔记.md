## 记一些事件

```typescript
onChange 轮播图变化:
<swiper circular @change="onChange">
    <swiper-item v-for="item in goods?.mainPictures" :key="item">
        <image mode="aspectFill" :src="item" />
            </swiper-item>
</swiper>
const onChange:UniHelper.SwiperOnChange = (ev) => {
    // ev.detail?.current：获取轮播图下标
  currentIndex.value = ev.detail?.current
}
tap: 点击
uni.previewImage: 大图预览

```

## 总结

会员中心-个人信息页

- 静态结构
  - 分包
  - 自定义导航
- 上传头像
  - 拍照/选择照片
  - 上传文件
- 表单
  - input 双向绑定
  - radio 单选按钮
  - picker 选择器（日期/城市）
- 头像昵称信息同步
  - pinia 状态管理

生命周期

- onShow: 每次页面显示的时候都会执行。

- onLoad: 仅初始化时执行。



uniapp 学习：

技术栈

![image-20240114132544398](https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240114132544398.png)

40+接口



pages.json: 配置页面路由、导航栏、tabBar等页面类信息

![image-20240114140240910](https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240114140240910.png)

![image-20240114140815931](https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240114140815931.png)

manifest.json 配置微信小程序预览



**uni-app 和 原生小程序开发区别：**

1. 属性绑定 src="{{ url }}" 升级成 **:src="url"**

2. 事件绑定 bindtap="eventName" 升级成 **@tap="eventName", 支持（）传参**
3. 支持 Vue 常用指令 v-for、v-if、v-show、v-model

小程序中占满：

![image-20240114141602298](C:\Users\78684\AppData\Roaming\Typora\typora-user-images\image-20240114141602298.png)

全屏预览图片：

![image-20240114141824207](https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240114141824207.png)

建议前缀wx 替换为 **uni**，从而支持多端开发

 

uni-app 支持两种方式创建项目：

- 通过 HBuilderX 创建
- 通过命令行创建（不必依赖 HBuilderX）

![image-20240114142140674](https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240114142140674.png)



​	命令行编译：

<img src="https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240114142505394.png" alt="image-20240114142505394" style="zoom:50%;" />

<img src="https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240114142540444.png" alt="image-20240114142540444" style="zoom:50%;" />

<img src="https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240114142750534.png" alt="image-20240114142750534" style="zoom:50%;" />





**vscode 安装 uni-app 插件**

<img src="https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240114143322857.png" alt="image-20240114143322857" style="zoom:50%;" />

![image-20240114144210592](https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240114144210592.png)

设置 -> 文件关联



**uni-ui 组件库**：https://uniapp.dcloud.net.cn/component/uniui/quickstart.html#npm%E5%AE%89%E8%A3%85

组件自动导入： easycom: pages.json 中配 

```json
 "easycom": {

  "autoscan": true,

  "custom": {

   // uni-ui 规则如下配置

   "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"

  }

 },
```



**unit-ui-types**：提供 uni-ui 组件类型。



持久化：

![image-20240114153149049](https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240114153149049.png)

发请求：

![image-20240114153409368](https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240114153409368.png)

请求函数 - 获取数据失败

- uni.request 的 success 回调函数只是表示服务器响应成功，没处理响应状态码
- axios 函数是只有响应状态码是 2xx 才调用 resolve 函数，表示获取数据成功。



刘海屏

样式适配 -> **安全区域**

```typescript
const { safeAreaInsets } = uni.getSystemInfoSync()
```

![image-20240114162940739](https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240114162940739.png)



全局组件

![image-20240114163851285](https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240114163851285.png)

<img src="https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240114163900326.png" alt="image-20240114163900326" style="zoom:50%;" />

修改完 easycom 需重启服务



<img src="https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240114175254259.png" alt="image-20240114175254259" style="zoom:50%;" />

1. UniHelper 提供事件类型
2. **?** (可选链)允许前面表达式为空值
3. **!**(非空断言)主观上排除掉空值情况



首页——猜你喜欢组件

1. 准备组件(通用组件)
2. 定义组件类型
3. 准备 scroll-view 滚动容器
4. 设置 page 和 scroll-view 样式



`pages.json`中以 Xtx 开头的组件，自动导入

```json
"easycom": {
    "autoscan": true,
    "custom": {
        // uni-ui 规则如下配置
        "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue",
        // 以 Xtx 开头的组件，在 components 文件夹中查找引入
        "Xtx(.*)": "@/components/Xtx$1.vue"
    }
},
```

给组件.vue 定义类型

```typescript
import 'vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    //
    XtxSwiper: typeof XtxSwiper,
    XtxGuess: typeof XtxGuess
  }
}
```

![image-20240117150850660](https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240117150850660.png)

![image-20240117184023504](https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240117184023504.png)



// 分页追加： 调用API传参 -> 数组追加 -> 页码累加

```typescript
const getHomeGoodsGuessLikeData = async () => {
    const res: any = await getHomeGoodsGuessLikeAPI(pageParams)
    guessList.value = res.result.items
    // 分页追加： 调用API传参 -> 数组追加 -> 页码累加
    // 数组追加：展开
    guessList.value.push(...res.result.items)
    // 这里会报错：page可能不存在，解决方法如下：Required 将可选属性变为必选属性
    pageParams.page++
}

const pageParams: Required<PageParams> = {
    page: 1,
    pageSize: 10,
}
```



下拉刷新开启：

`refresher-enabled`  刷新事件触发`refresherrefresh`

```typescript
// 当前下拉刷新状态
const isTriggered = ref(false)
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  isTriggered.value = true
  // await getHomeBanner()
  // await getHomeCategoryData()
  // await getHotData()
  await Promise.all([getHomeBanner(), getHomeCategoryData(), getHotData()])
  // 关闭动画
  isTriggered.value = false
}
```

```vue
<scroll-view refresher-enabled @refresherrefresh="onRefresherrefresh" @scrolltolower="onScrolltolower"></scroll-view>

refresher-enabled 是否开启刷新
onRefresherrefresh 刷新触发时间
```



![image-20240117191637747](https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240117191637747.png)

猜你喜欢：下拉刷新



生成骨架屏：生成骨架屏文件

<img src="https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240117194517914.png" alt="image-20240117194517914" style="zoom:33%;" />



首页模块完成。

做跳转：

热门推荐

![image-20240117200513879](https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240117200513879.png)

绑定滚动触底事件：

```typescript
<scroll-view scroll-y class="scroll-view" v-for="(item, index) in subTypes" :key="item.id" v-show="activeIndex === index" @scrolltolower="onScrolltolower">
```

**新的写法：subTypes上本身不存在 finish 属性，用联合类型可以加入一个**

![](https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240119181223237.png)



商品详情页 -> 轮播图交互（轮播图变化更新下标，点击图片，大屏预览）

轮播图变化事件绑定`change`

```typescript
<swiper circular @change="onChange">
    <swiper-item v-for="item in goods?.mainPictures" :key="item">
        <image mode="aspectFill" :src="item" />
            </swiper-item>
</swiper>
```

对于标签的类型事件：

```typescript
UniHelper.Swiper
```

![image-20240119212855917](https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240119212855917.png)



<img src="https://sunchenrui666.oss-cn-guangzhou.aliyuncs.com/img/image-20240119221028494.png" alt="image-20240119221028494" style="zoom:50%;" />

登录： 

```typescript
import { postLoginWxMin } from '@/services/login';
import { onLoad } from '@dcloudio/uni-app'
// 获取 code 登陆凭证
let code = ''
onLoad(async () => {
  const res = await wx.login()
  code = res.code
})
// 获取用户手机号码
const onGetphonenumber: UniHelper.ButtonOnGetphonenumber = async (ev) => {
  const encryptedData = ev.detail.encryptedData!
  const iv = ev.detail!.iv!
  const res = await postLoginWxMin({
    code,
    encryptedData,
    iv
  })
  console.log(res);
}
```

小程序模块-小程序快捷登录

获取手机号功能针对非个人开发者，且完成认证的小程序开放

工作场景：使用企业小程序appid, 且把微信号添加到开发者列表中



```typescript
// 跳转
uni.switchTab()
unit.navigateTo()
```



会员中心-封装组合式函数：首页里的也可以用到。

**会员中心-设置页分包和预下载**

**小程序分包**：将小程序的**代码分割成多个部分**，分别打包成多个小程序包，**减少**小程序的**加载时间**，提高用户体验。

**分包预下载：**在进入小程序某个页面时，由框架自动预下载可能需要的分包，**提升**进入后续分包页面时的**启动速度**。



模态弹窗

```typescript
uni.showModal({
    content: '是否退出登录?',
})
```

```typescript
// 调用拍照以及选择照片：
uni.chooseMedia()
// 文件上传
uni.uploadFile()
```



用户信息表单：

ts类型中在一个类型中挑出部分：

```typescript
export type ProfileParams = Pick<
  ProfileDetail,
  'nickname' | 'gender' | 'birthday' | 'profession'
> & {
  /** 省份编码 */
  provinceCode?: string
  /** 城市编码 */
  cityCode?: string
  /** 区/县编码 */
  countyCode?: string
}
```



小程序生命周期

onShow: 每次页面显示的时候都会执行。

onLoad: 仅初始化时执行。



表单校验：

```html
<uni-forms ref="formRef">
	<uni-forms-item name='receiver'></uni-forms-item>
</uni-forms>
<script>
const formRef = ref<UniHelper.UniFormsInstance>()
const onSubmit = () => {
    await formRef.value?.validate?.()
}
// 定义校验规则
const rules: UniHelper.UniFormsRules = {
    receiver: {
        rules: [
            { required: true, errorMessage: '请输入收货人姓名' }
        ]
    },
    contact: {
        rules: [
            { required: true, errorMessage: '请输入联系方式' },
            { pattern: /^1[3-9]\d{9}$/, errorMessage: '手机号格式不正确' },
        ],
    },
    fullLocation: {
        rules: [{ required: true, errorMessage: '请选择所在地区' }],
    },
    address: {
        rules: [{ required: true, errorMessage: '请选择详细地址' }],
    },
}
</script>
```



SKU模块：库存管理



订单详情 - 订单支付

生产环境 -> 获取支付参数API -> 发起微信支付 -> 跳转支付结果页

开发环境 -> 模拟支付API -> 跳转支付结果页



条件编译（wx开头的）：

> #ifdef 或 #ifndef 加 平台名称开头，以 #endif 结尾

有的**按钮**是小程序中才有的，这种按钮的特征是包含`open-type`



绝对路径改为相对路径的方法：`src/manifest.json`:

```json
{
    ...
    "h5": {
        "router": {
            "base": "./"
        }
    }
}
```



项目打包 — Android APP 端预览和调试

`HBuilderX`—— `Android手机`

导入 HBuilderX -> 运行到手机或模拟器 -> 运行到 Android App基座

`Android手机`：数据线连接手机 -> 开启开发者模式 -> 开启USB调试



跨端兼容：

- 小程序端**不支持** * 选择器(view, text)

- 页面**视口差异**

  - 高度
  - 定位底部会遮挡tabbar

- H5端 默认开启**scoped**

  - H5端是单页面应用，scoped 隔离样式

  - App 端默认是系统 webview 渲染

  - 经测试App端组件样式也会默认隔离

  - 骨架屏出问题了————解决方法：

  ```typescript
  // pages/index/components/PageSkeleton.vue
  <style lang="scss">
  /* #ifdef APP-PLUS || H5 */
  /* 修复H5端、App端组件样式被隔离 */
  @import '@/components/styles/XtxSwiper.scss';
  @import './styles/CategoryPanel.scss';
  @import './styles/HotPanel.scss';
  /* #endif */
  // ...省略骨架屏样式
  </style>
  ```

  组件兼容：

  - uni-app 内置组件借鉴小程序组件
  - 注意 平台差异说明

  JS API 兼容：

  - 非 H5 端，不支持 window、document等浏览器的 JS API
  - uni-app 扩展 uni对象，封装大量支持跨端的 JS API
  - 使用各端专有JS API，如 微信支付 需添加条件编译
  - 注意平台差异说明

- uniapp 跨端注意

- uniapp css支持

- uniaoo 条件编译



### unicloud 云开发 - 基础概念

- uniCloud 可以通过 JS 开发服务端，包括云数据库，云函数，云存储等功能
- uniCloud 可结合 uni-ui 组件库使用

