# GA JGDJ site

## update Log
### 2022-10-18
- 将首页栏目名称和版块 id 提取出来，放在 store 里，如要修改版块调用的内容，修改 store 的配置即可
  - columnTypeAState
  - columnTypeBState
  - columnTypeCState
### 2022-10-05
- 新增组件，homeColListTypeC
- 新增组件，homeLinks
- 新增组件，foot
- 修改头图，增加顶部 ad 标语
- 新增视图，List/Article/Search，及对应组件
- 重新规划组件，将视图专属组件移至视图目录下
### 2022-10-04
- 修改组件，homeColListTypeA
- 新增组件，homeColListTypeB
- 新增组件，homeGuideEntry
- 新增组件，homeColSideTotal
- 新增组件，homeColSideFeature
- 新增组件，homeColListTypeImg
- 修改部分组件样式
### 2022-10-02
- 新增组件，homeColListMinimal，首页列表栏目板块，类型 1
- 新增组件，homeColNotice，首页通知公告版块
### 2022-09-30
- 创建项目
- 新增组件 topCover，头图封面
- 新增组件，mainNav，主导航
- 新增组件，homeColSlider，首页轮播图栏目
- 新增组件，homeColTopNews，首页头条新闻栏目

## 遗留问题
- v2.0 版本的头图设计修改
- 列表和标题需要做字数限制样式

## Project setup
```
yarn install
```
### Compiles and hot-reloads for development
```
yarn serve
```
### Compiles and minifies for production
```
yarn build
```
### Lints and fixes files
```
yarn lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
