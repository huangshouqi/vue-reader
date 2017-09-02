# vue-reader
初学vue2.0，花几天时间模仿了一个小说阅读的WebApp，样式比较粗糙，参考了 [慕课网课程](http://coding.imooc.com/class/13.html) 和 [tgxhx](https://github.com/tgxhx/vue-reader/) 的项目，在其基础上进行了学习和改造。自我感觉代码还是有点混乱，仅仅实现了基本的功能，后期有时间的话会进行重构。

> [在线预览](http://iwen.tianyan.hk)
（手机预览和Chrome下f12效果最佳）

>[源码地址](https://github.com/huangshouqi/vue-reader)

> [api地址](https://github.com/tgxhx/node-book-api)

## 二维码扫描
![](http://ovh9m465i.bkt.clouddn.com/QRcode.png)


## 使用说明

``` bash
# 克隆项目
git clone git@github.com:huangshouqi/vue-reader.git
# 安装依赖
npm install
# 本地开发环境 访问http://localhost:8080
npm run dev
# 构建生产
npm run build
```


## 技术栈
- vue2.0+vue-router+vuex（vue全家桶）
- mint-ui（使用了swipe和pull-down组件）
- es6（javascript核心规范）
- stylus （css预处理器）
- axios（数据请求）
- localStorage （HTML5本地存储）

## 功能
- [x] 首页推荐
- [x] 分类查看
- [x] 书籍详情
- [x] 相似推荐
- [x] 目录跳转
- [x] 下拉刷新
- [x] 加载动画
- [x] 更改字体
- [x] 更换主题
- [x] 夜间模式
- [x] 记忆个性化设置
## 待加入功能
- [ ] 书架
- [ ] 搜索
- [ ] 滑动翻页

## 预览图
### 首页
![](http://ovh9m465i.bkt.clouddn.com/1.png?imageMogr2/auto-orient/thumbnail/414x736!/blur/1x0/quality/75|imageslim)

### 分类页
![](http://ovh9m465i.bkt.clouddn.com/2.png?imageMogr2/auto-orient/thumbnail/414x736!/blur/1x0/quality/75|imageslim)

### 书籍详情页
![](http://ovh9m465i.bkt.clouddn.com/3.png?imageMogr2/auto-orient/thumbnail/414x736!/blur/1x0/quality/75|imageslim)

### 目录
![](http://ovh9m465i.bkt.clouddn.com/4.png?imageMogr2/auto-orient/thumbnail/414x736!/blur/1x0/quality/75|imageslim)

### 阅读器
![](http://ovh9m465i.bkt.clouddn.com/5.png?imageMogr2/auto-orient/thumbnail/414x736!/blur/1x0/quality/75|imageslim)

## More
欢迎大家提出不足与建议，我会进行改正
