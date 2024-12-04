# 函数文档

欢迎您使用my-tools 函数库:tada:!

### 防抖(debounce)

`debounce` 函数的作用是确保一个函数在特定的时间间隔内不会被重复调用。只有当经过规定的等待时间后且没有再次触发相关事件时，该函数才会被执行。这在处理例如用户频繁点击按钮、文本输入实时搜索等场景时，能够有效减少不必要的函数执行次数，提升性能和用户体验。

#### 1.引入该方法
在 Vue 项目（以 `App.vue` 文件为例）中，若要使用防抖函数，按如下方式从 @gg233o-x/my-tools 包中引入：
```ts title="App.vue"
import {debounce} from '@gg233o-x/my-tools';
```

#### 2.使用示例如下
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
### 节流(throttle)

`throttle` 函数用于确保一个函数在特定的时间间隔内不会被过度频繁地调用。具体而言，只有在经过规定的等待时间后且在此期间没有再次触发相关事件时，该函数才会执行。这在处理诸如窗口大小调整、滚动事件等可能频繁触发的场景中非常有用，可以有效避免函数执行过于频繁而导致的性能问题。

#### 1.引入该方法
在 Vue 项目（以 `App.vue` 文件为例）中，若要使用节流函数，需先从 @gg233o-x/my-tools 包中引入它。示例代码如下：
```ts title="App.vue"
import {throttle} from '@gg233o-x/my-tools';
```

#### 2.使用示例如下
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

### 深拷贝(deepCopy)

`deepCopy` 函数用于创建一个原始对象的全新副本，新副本与原始对象在内存中完全独立，对原始对象的任何修改都不会影响到深拷贝后的对象，反之亦然。这在处理复杂数据结构（如嵌套对象、数组等）时非常关键，能够避免数据的意外篡改和副作用。


#### 1.引入该方法
在 Vue 项目（以 `App.vue` 文件为例）中，引入深拷贝函数的方式如下：
```ts title="App.vue"
import {deepCopy} from '@gg233o-x/my-tools';
```

#### 2.使用示例如下
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

### 判断设备类型（checkDeviceType）

`checkDeviceType` 函数用于精准识别用户当前所使用设备的操作系统类别，其返回值明确区分设备是运行 `Android` 系统、`iOS` 系统还是属于`桌面端环境`。这在开发多端适配应用或根据不同设备类型提供特定功能与体验的场景中极为关键，能够帮助开发者依据设备特性灵活调整应用逻辑与界面展示。

#### 1.引入该方法
在 Vue 项目（以 `App.vue` 文件为例）中，引入判断设备类型函数的方式如下：

```ts title="App.vue"
import { checkDeviceType } from '@gg233o-x/my-tools';
```

#### 2.使用示例如下
```ts title="App.vue"
// 调用 checkDeviceType 函数来获取设备类型
const deviceType = checkDeviceType();

// 根据返回的设备类型进行不同的操作
if (deviceType === 'Android') {
  console.log('当前设备为 Android 系统。');
} else if (deviceType === 'iOS') {
  console.log('当前设备为 iOS 系统。');
} else {
  console.log('当前设备为桌面端。');
}
```


### 生成随机数（getRandom）

`getRandom` 函数用于在指定的数值范围内生成一个随机整数，可满足项目中各种需要随机取值的场景，比如随机生成索引、模拟随机数据等。

#### 1.引入该方法
在 Vue 项目（以 `App.vue` 文件为例）中，引入生成随机数函数的方式如下：

```ts title="App.vue"
import { getRandom } from '@gg233o-x/my-tools';
```

#### 2.使用示例如下
```ts title="App.vue" 
// 调用getRandom函数来生成一个介于1（包含）和10（包含）之间的随机整数
const randomNumber = getRandom(1, 10);

console.log(`生成的随机数为: ${randomNumber}`);

// 也可以根据生成的随机数进行不同的操作，以下是一个简单示例，假设根据随机数决定是否显示某个元素
if (randomNumber % 2 === 0) {
  console.log('随机数为偶数，执行相关操作，比如显示某个元素。');
} else {
  console.log('随机数为奇数，执行其他相关操作，比如隐藏某个元素。');
}
```

### 扁平转树（toTree）

`toTree` 函数用于将给定的扁平数据结构高效地转换为树状数据结构，使得数据呈现出清晰的父子层级关系。。
#### 1.引入该方法
在 Vue 项目（以 `App.vue` 文件为例）中，引入扁平转树函数的方式如下：

```ts title="App.vue"
import { toTree } from '@gg233o-x/my-tools';
```

#### 2.输入参数
##### `data` 参数
- **类型**：`Array`
- **描述**：需要用户传入一个扁平化数据。

##### `idKey` 参数（可选）
- **类型**：`string`
- **默认值**：`id`
- **描述**：用于指定在扁平数据节点对象中作为节点唯一标识的键名。

##### `parentIdKey` 参数（可选）
- **类型**：`string`
- **默认值**：`parentId`
- **描述**：用于指定在扁平数据节点对象中作为父节点标识的键名。


#### 3.使用示例如下

```ts title="App.vue" 
const data = [
{ "id": 1, "name": "用户中心", "orderNum": 1, "parentId": 0 },
{ "id": 2, "name": "订单中心", "orderNum": 2, "parentId": 0 },
{ "id": 3, "name": "系统管理", "orderNum": 3, "parentId": 0 },
{ "id": 12, "name": "所有订单", "orderNum": 1, "parentId": 2 },
{ "id": 14, "name": "待发货", "orderNum": 1.2, "parentId": 2 },
{ "id": 15, "name": "订单导出", "orderNum": 2, "parentId": 2 },
{ "id": 18, "name": "菜单设置", "orderNum": 1, "parentId": 3 },
{ "id": 19, "name": "权限管理", "orderNum": 2, "parentId": 3 },
{ "id": 21, "name": "系统权限", "orderNum": 1, "parentId": 19 },
{ "id": 22, "name": "角色设置", "orderNum": 2, "parentId": 19 },
];

console.log(toTree(data)); // 打印转树后的数据
```

::: tip
用户自定义节点 代码实例如下：
:::
```ts title="App.vue" 

const data = [
{ "ID": 1, "name": "用户中心", "orderNum": 1, "pid": 0 },
{ "ID": 2, "name": "订单中心", "orderNum": 2, "pid": 0 },
{ "ID": 3, "name": "系统管理", "orderNum": 3, "pid": 0 },
{ "ID": 12, "name": "所有订单", "orderNum": 1, "pid": 2 },
{ "ID": 14, "name": "待发货", "orderNum": 1.2, "pid": 2 },
{ "ID": 15, "name": "订单导出", "orderNum": 2, "pid": 2 },
{ "ID": 18, "name": "菜单设置", "orderNum": 1, "pid": 3 },
{ "ID": 19, "name": "权限管理", "orderNum": 2, "pid": 3 },
{ "ID": 21, "name": "系统权限", "orderNum": 1, "pid": 19 },
{ "ID": 22, "name": "角色设置", "orderNum": 2, "pid": 19 },
];

console.log(toTree(data,'ID','pid')); // 打印转树后的数据
```


 
## 数组方法

### 数组乱序（disorderArray）

`disorderArray` 函数旨在对给定的数组进行随机打乱操作，改变数组元素原本的顺序，使其呈现出无序的状态，方便在诸如随机排序、模拟随机情况等场景下使用。

#### 1.引入该方法
在 Vue 项目（以 `App.vue` 文件为例）中，引入数组乱序函数的方式如下：

```ts title="App.vue"
import { disorderArray } from '@gg233o-x/my-tools';
```

#### 2.输入参数
##### `arr` 参数
- **类型**：`Array`
- **描述**：用户需要传入一个希望进行乱序操作的数组。无论数组元素是何种类型，函数都会尝试对其顺序进行打乱处理。

#### 3.使用示例如下

```ts title="App.vue" 
const arr = [1,2,3,4,5,6,7,8,9,undefined,null,function fn(){},'str']
console.log(disorderArray(arr)); // 打印乱序后的数组
```


### 数组滤假值（compactArray）

`compactArray` 函数旨在对输入的数组进行过滤处理，它会精准地去除数组中那些在 JavaScript 里被视作 “假值” 的元素，包含 `false`、`null`、`0`、`""`（空字符串）、`undefined` 和 `NaN` 等，只留下 “真值” 元素，以此生成一个新的数组。

#### 1.引入该方法
在基于 Vue 的项目中（以 `App.vue` 文件为例），引入 `compactArray` 函数的方式如下：

```ts title="App.vue"
import { compactArray } from '@gg233o-x/my-tools';
```

#### 2.输入参数
##### `arr` 参数
- **类型**：`Array`
- **描述**：用户需要向函数提供一个想要进行滤假值操作的目标数组。

#### 3.使用示例如下

```ts title="App.vue" 
  const arr = ['',false,null,undefined,0,10,20]
  console.log(compactArray(arr)); // 输出结果 [10,20]
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
