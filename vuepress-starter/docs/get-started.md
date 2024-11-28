# 函数文档

欢迎您使用my-tools 函数库:tada:!

## 防抖函数(debounce)

防抖函数的作用是确保一个函数在特定的时间间隔内不会被重复调用。只有当经过规定的等待时间后且没有再次触发相关事件时，该函数才会被执行。这在处理例如用户频繁点击按钮、文本输入实时搜索等场景时，能够有效减少不必要的函数执行次数，提升性能和用户体验。

### 1.引入该方法
在 Vue 项目（以 App.vue 文件为例）中，若要使用防抖函数，按如下方式从 @gg233o-x/my-tools 包中引入：
```ts title="App.vue"
import {debounce} from '@gg233o-x/my-tools';
```

### 2.使用示例如下
```ts title="App.vue"
// 首先定义一个普通函数，这里是简单的控制台输出函数
const logFn = () => {
  console.log('控制台输出啦');
}

// 第一个参数为要添加防抖的函数，即上面定义的 logFn
// 第二个参数规定防抖时间，单位为毫秒，这里设置为 1000 毫秒（即 1 秒）
const debounceFn = debounce(logFn,1000)
// 当调用 debounceFn 时，它会等待 1000 毫秒，如果在这期间没有再次调用 debounceFn，才会执行 logFn 函数
```


## 节流函数(throttle)

节流函数用于确保一个函数在特定的时间间隔内不会被过度频繁地调用。具体而言，只有在经过规定的等待时间后且在此期间没有再次触发相关事件时，该函数才会执行。这在处理诸如窗口大小调整、滚动事件等可能频繁触发的场景中非常有用，可以有效避免函数执行过于频繁而导致的性能问题。

### 1.引入该方法
在 Vue 项目（以 App.vue 文件为例）中，若要使用节流函数，需先从 @gg233o-x/my-tools 包中引入它。示例代码如下：
```ts title="App.vue"
import {throttle} from '@gg233o-x/my-tools';
```

### 2.使用示例如下
```ts title="App.vue"
const logFn = () => {
  console.log('控制台输出啦');
}
// 第一个参数为要添加节流的函数，即我们刚刚定义的logFn
// 第二个参数规定节流时间，单位为毫秒。这里设置为1000毫秒（即1秒）

const throttleFn = throttle(logFn,1000)
// 此时，throttleFn就是经过节流处理后的函数
// 当我们触发相关事件（例如某个按钮点击事件或者页面滚动事件等，具体取决于实际应用场景）调用throttleFn时，
// 它会按照节流规则执行，即每隔1000毫秒才会真正执行一次logFn函数
```

## 深拷贝(deepCopy)

深拷贝函数用于创建一个原始对象的全新副本，新副本与原始对象在内存中完全独立，对原始对象的任何修改都不会影响到深拷贝后的对象，反之亦然。这在处理复杂数据结构（如嵌套对象、数组等）时非常关键，能够避免数据的意外篡改和副作用。


### 1.引入该方法
在 Vue 项目（以 App.vue 文件为例）中，引入深拷贝函数的方式如下：
```ts title="App.vue"
import {deepCopy} from '@gg233o-x/my-tools';
```

### 2.使用示例如下
```ts title="App.vue"
// 首先创建一个包含嵌套对象的示例对象 obj1
const obj1 = {son:{one:'base'}};

// 使用 deepCopy 函数对 obj1 进行深拷贝，将结果赋值给 obj2
const obj2 = deepCopy(obj1);

// 对原始对象 obj1 的嵌套属性进行修改
obj1.son.one = 'dataChange';

// 输出深拷贝后的对象 obj2，其嵌套属性的值仍然为 'base'，因为它是独立的副本
console.log(obj2,'obj2');  

// 输出原始对象 obj1，其嵌套属性的值已被修改为 'dataChange'
console.log(obj1,'obj1'); 
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
