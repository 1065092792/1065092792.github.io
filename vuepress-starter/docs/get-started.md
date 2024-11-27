# 函数文档

欢迎您使用my-tools 函数库:tada:!

## 防抖函数(debounce)

确保一个函数在一定时间间隔内不会被重复调用，只有在经过规定的等待时间后没有再次触发事件，函数才会执行。

### 1.引入该方法
```ts title="App.vue"
import {debounce} from '@gg233o-x/my-tools/dist/index';
```

### 2.使用示例如下
```ts title="App.vue"
const logFn = () => {
  console.log('控制台输出啦');
}
// 第一个参数为 要添加防抖的函数
// 第二个参数规定防抖时间

const debounceFn = debounce(logFn,1000)  //返回一个防抖函数
```

See [routing][] for more details.

## 节流函数(throttle)

确保一个函数在一定时间间隔内不会被重复调用，只有在经过规定的等待时间后没有再次触发事件，函数才会执行。

### 1.引入该方法
```ts title="App.vue"
import {throttle} from '@gg233o-x/my-tools/dist/index';
```

### 2.使用示例如下
```ts title="App.vue"
const logFn = () => {
  console.log('控制台输出啦');
}
// 第一个参数为 要添加节流的函数
// 第二个参数规定节流时间

const throttleFn = throttle(logFn,1000)  //返回一个节流函数
```

## 深拷贝(deepCopy)

确保一个函数在一定时间间隔内不会被重复调用，只有在经过规定的等待时间后没有再次触发事件，函数才会执行。

### 1.引入该方法
```ts title="App.vue"
import {deepCopy} from '@gg233o-x/my-tools/dist/index';
```

### 2.使用示例如下
```ts title="App.vue"
const obj1 = {son:{one:'base'}}
const obj2 = deepCopy(obj1) // 将obj1 copy 赋值给obj2
obj1.son.one = 'dataChange'
console.log(obj2,'obj2');  //输出结果为 base
console.log(obj1,'obj1'); // 输出结果为 dataChange

//
```
## Configuration

VuePress use a `.vuepress/config.js`(or .ts) file as [site configuration][config], you can use it to config your site.

For [client side configuration][client-config], you can create `.vuepress/client.js`(or .ts).

Meanwhile, you can also add configuration per page with [frontmatter][].

## Layouts and customization

Here are common configuration controlling layout of `@vuepress/theme-default`:

- [navbar][]
- [sidebar][]

Check [default theme docs][default-theme] for full reference.

You can [add extra style][style] with `.vuepress/styles/index.scss` file.

[routing]: https://vuejs.press/guide/page.html#routing
[content]: https://vuejs.press/guide/page.html#content
[synatex-extensions]: https://vuejs.press/guide/markdown.html#syntax-extensions
[vue-feature]: https://vuejs.press/guide/markdown.html#using-vue-in-markdown
[config]: https://vuejs.press/guide/configuration.html#client-config-file
[client-config]: https://vuejs.press/guide/configuration.html#client-config-file
[frontmatter]: https://vuejs.press/guide/page.html#frontmatter
[navbar]: https://vuejs.press/reference/default-theme/config.html#navbar
[sidebar]: https://vuejs.press/reference/default-theme/config.html#sidebar
[default-theme]: https://vuejs.press/reference/default-theme/
[style]: https://vuejs.press/reference/default-theme/styles.html#style-file
