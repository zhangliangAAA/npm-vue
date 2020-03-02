# zlh-vue-component

> Vue私有npm组件

## 使用

``` bash
# install dependencies
npm i zlh-vue-component

```

``` js
//main.js
import ZlhUi from "zlh-vue-component";
Vue.use(ZlhUi);

```

``` js
// 在页面或组件中直接使用
<ZlhSwitch></ZlhSwitch>
<ZlhList :items="list"></ZlhList>

```

## npm发布
1. 创建简洁vue项目，推荐使用webpack-simple构建一个项目
``` bash
vue init webpack-simple your-project
```
2. src下建packages文件夹，写自己的组件，注意name
3. 组件.vue同级建index.js
``` js
import ZlhList from "./list.vue";
ZlhList.install = Vue => Vue.component(ZlhList.name, ZlhList);
export default ZlhList;
```
4. 集中全部导出，在App.vue同级目录我新建了一个index.js文件
``` js
import ZlhSwitch from "./packages/switch";
import ZlhList from "./packages/list";

const components = [ZlhSwitch,ZlhList];

const install = function(Vue, opts = {}) {
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
  });
};

/* 支持使用标签的方式引入 */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ZlhSwitch,
  ZlhList
};

```
5. 修改配置文件 webpack.config.js
``` js
const NODE_ENV = process.env.NODE_ENV
module.exports = {
  // 改变入口
  entry: NODE_ENV == 'development' ? './src/main.js' : './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'zlh-ui.min.js',
    library: 'zlhVueUI', // 指定的就是你使用require时的模块名
    libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },
}
```
6. 修改  package.json 
``` js
// 发布开源因此需要将这个字段改为 false
"private": false,
// 这个指 import ZlhUI 的时候它会去检索的路径,即 library
"main": "dist/zlh-ui.min.js",
```
7. 打包 
``` bash
npm run build
```
8. 发布npm
``` bash
# 登陆你的用户，密码
npm login  
# 进行发布
npm publish  
```