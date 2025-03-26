# 函数文档

欢迎您使用tools-pad 函数库:tada:!

## 快速开始

### 安装

```bash
npm install toolspad
# 或者
yarn add toolspad
```

### 使用

```ts
// 按需引入
import { debounce, throttle } from 'toolspad';

// 或者全量引入
import toolspad from 'toolspad';
```

### 示例

```ts
// 防抖示例
const debouncedFn = debounce(() => {
  console.log('执行防抖函数');
}, 1000);

// 节流示例
const throttledFn = throttle(() => {
  console.log('执行节流函数');
}, 1000);
```

::: tip 提示
toolspad 提供了丰富的工具函数，您可以根据实际需求按需引入使用。每个函数都经过精心设计和测试，确保其可靠性和易用性。
:::

::: warning 注意
在使用某些函数时，请注意查看具体的参数要求和返回值说明，以确保正确使用。
:::

## 函数控制类

### 防抖(debounce)

`debounce` 函数的作用是确保一个函数在特定的时间间隔内不会被重复调用。只有当经过规定的等待时间后且没有再次触发相关事件时，该函数才会被执行。这在处理例如用户频繁点击按钮、文本输入实时搜索等场景时，能够有效减少不必要的函数执行次数，提升性能和用户体验。

#### 1.引入该方法
在 Vue 项目（以 `App.vue` 文件为例）中，若要使用防抖函数，按如下方式从 toolspad 包中引入：
```ts title="App.vue"
import {debounce} from 'toolspad';
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
在 Vue 项目（以 `App.vue` 文件为例）中，若要使用节流函数，需先从 toolspad 包中引入它。示例代码如下：
```ts title="App.vue"
import {throttle} from 'toolspad';
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

### 函数调用次数限制执行（callNExec）

`callNExec` 函数能够限制另一个函数的执行时机，仅当该函数被调用达到指定次数后，才会触发预先设定的函数执行操作，从而有效控制函数的调用频率与执行逻辑。

#### 1.引入该方法
在基于 Vue 的项目中（以 `App.vue` 文件为例），引入 `callNExec` 函数的方式如下：

```ts title="App.vue"
import { callNExec } from 'toolspad';
```

#### 2.输入参数
##### `threshold` 参数
- **类型**：`Number`
- **描述**：设定的函数被调用次数阈值。

##### `func` 参数
- **类型**：`Function`
- **描述**：当函数被调用 n 次后需要执行的函数。

#### 3.使用示例如下

```ts title="App.vue" 
const fn = () => {
  console.log('执行');
}
const testFn = callNExec(10, fn)   // 每调用10次执行 则执行一次fn函数

for (let index = 0; index <= 30; index++) {
  testFn()
}
```

### 可配置时间间隔的函数包装器（createIntervalFn）

`createIntervalFn` 函数用于创建一个可配置时间间隔的函数包装器，支持本地持久化存储上次执行时间，确保函数按照指定的时间间隔执行。这对于需要定期执行某些操作（如数据同步、状态检查等）的场景非常有用。

#### 1.引入该方法
在基于 Vue 的项目中（以 `App.vue` 文件为例），引入 `createIntervalFn` 函数的方式如下：

```ts title="App.vue"
import { createIntervalFn } from 'toolspad';
```

#### 2.输入参数
##### `func` 参数
- **类型**：`Function | null`
- **描述**：需要定期执行的函数，可以为 null。

##### `options` 参数
- **类型**：`Object`
- **描述**：配置选项对象，包含以下属性：
  - `key`（必填）：用于本地存储的唯一标识符
  - `interval`（可选）：间隔数值，默认为 1
  - `unit`（可选）：时间单位，可选值包括：'second'、'minute'、'hour'、'day'、'month'、'year'，默认为 'day'

#### 3.使用示例如下

```ts title="App.vue" 
// 创建一个每天执行一次的函数
const dailyTask = createIntervalFn(() => {
  console.log('执行每日任务');
}, {
  key: 'dailyTask',
  interval: 1,
  unit: 'day'
});

// 创建一个每小时执行一次的函数
const hourlyTask = createIntervalFn(() => {
  console.log('执行每小时任务');
}, {
  key: 'hourlyTask',
  interval: 1,
  unit: 'hour'
});

// 创建一个每30分钟执行一次的函数
const halfHourTask = createIntervalFn(() => {
  console.log('执行每30分钟任务');
}, {
  key: 'halfHourTask',
  interval: 30,
  unit: 'minute'
});

// 调用这些函数
dailyTask();
hourlyTask();
halfHourTask();
```

## 数据处理类

### 深拷贝(deepCopy)

`deepCopy` 函数用于创建一个原始对象的全新副本，新副本与原始对象在内存中完全独立，对原始对象的任何修改都不会影响到深拷贝后的对象，反之亦然。这在处理复杂数据结构（如嵌套对象、数组等）时非常关键，能够避免数据的意外篡改和副作用。


#### 1.引入该方法
在 Vue 项目（以 `App.vue` 文件为例）中，引入深拷贝函数的方式如下：
```ts title="App.vue"
import {deepCopy} from 'toolspad';
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

### 扁平转树（toTree）

`toTree` 函数用于将给定的扁平数据结构高效地转换为树状数据结构，使得数据呈现出清晰的父子层级关系。。
#### 1.引入该方法
在 Vue 项目（以 `App.vue` 文件为例）中，引入扁平转树函数的方式如下：

```ts title="App.vue"
import { toTree } from 'toolspad';
```

#### 2.输入参数
##### `data` 参数
- **类型**：`Array`
- **描述**：需要用户传入一个扁平化数据。

##### `idKey` 参数（可选）
- **类型**：`String`
- **默认值**：`id`
- **描述**：用于指定在扁平数据节点对象中作为节点唯一标识的键名。

##### `parentIdKey` 参数（可选）
- **类型**：`String`
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


### 数组乱序（disorderArray）

`disorderArray` 函数旨在对给定的数组进行随机打乱操作，改变数组元素原本的顺序，使其呈现出无序的状态，方便在诸如随机排序、模拟随机情况等场景下使用。

#### 1.引入该方法
在 Vue 项目（以 `App.vue` 文件为例）中，引入数组乱序函数的方式如下：

```ts title="App.vue"
import { disorderArray } from 'toolspad';
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

`compactArray` 函数旨在对输入的数组进行过滤处理，它会精准地去除数组中那些在 JavaScript 里被视作 "假值" 的元素，包含 `false`、`null`、`0`、`""`（空字符串）、`undefined` 和 `NaN` 等，只留下 "真值" 元素，以此生成一个新的数组。

#### 1.引入该方法
在基于 Vue 的项目中（以 `App.vue` 文件为例），引入 `compactArray` 函数的方式如下：

```ts title="App.vue"
import { compactArray } from 'toolspad';
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

## 工具类

### 时间格式化函数（formatDate）

`formatDate` 函数是一个用于对日期时间进行灵活格式化，并可按需进行时间偏移操作的实用函数，它能帮助开发者方便地将 Date 对象按照指定格式转化为符合要求的字符串表示形式，同时支持根据给定的时间偏移量获取相对的过去或未来的时间后再进行格式化。
#### 1.引入该方法
在 Vue 项目（以 `App.vue` 文件为例）中，引入时间格式化函数的方式如下：

```ts title="App.vue"
import { formatDate } from 'toolspad';
```

#### 2.输入参数
##### `date` 参数
- **类型**：`Date`
- **描述**：需要用户传入一个要进行格式化以及可能的时间偏移操作的日期时间对象。

##### `format` 参数
- **类型**：`String`
- **描述**：用于指定日期时间最终的输出格式，格式字符串中可以包含特定的占位符（如 `YYYY`、`MM`、`DD`、`hh`、`mm`、`ss`），这些占位符会在函数内部被替换为对应的实际时间分量的字符串表示形式。例如，`'YYYY-MM-DD    hh:mm:ss'` 表示输出的格式会是类似 `2024-12-09 15:30:00` 的形式，展示完整的年、月、日、时、分、秒信息；而 `'MM/DD/YYYY'` 则会输出如 `12/09/2024` 的格式，按照月、日、年的顺序展示日期部分并用 `/` 进行分隔。

##### `offset` 参数（可选）
- **类型**：`Object`
- **默认值**：`{}`
- **描述**：此参数是可选的，用于指定相对于传入的 date 的时间偏移情况，正数表示未来的时间，负数表示过去的时间。包含以下四个可选属性：

    | 属性名 | 类型 | 描述 |
    | ---- | ---- | ---- |
    | `days` | `number`（可选） | 用于指定日数的偏移量。`{ days: 3 }` 会使日期往后推 3 天。 |
    | `weeks` | `number`（可选） | 用于指定周数的偏移量。例如，`{ weeks: 1 }` 表示时间往后推一周（即获取下一周对应的时间），`{ weeks: -1 }` 则表示往前推一周（获取上一周对应的时间）。|
    | `months` | `number`（可选） | 用于指定月数的偏移量。像 `{ months: 2 }` 会使日期往后推 2 个月，传入负数则获取过去月份对应的日期。|
    | `years` | `number`（可选） | 用于指定年数的偏移量。比如 `{ years: 1 }` 能获取到明年对应的日期，传入负数则获取过去年份对应的日期。 |
    | `hours` | `number`（可选） | 用于指定小时数的偏移量。比如 `{ hours: 1 }` 能获取到下个小时对应的时间，传入负数则获取上个小时对应的时间。 |
    | `minutes` | `number`（可选） | 用于指定分钟的偏移量。比如 `{ minutes: 1 }` 能获取到下一分钟对应的时间，传入负数则获取上一分钟对应的时间。 |
    | `seconds` | `number`（可选） | 用于指定秒的偏移量。比如 `{ seconds: 30 }` 能获取到三十秒后对应的时间，传入负数则获取三十秒前对应的时间。 |

#### 3.使用示例如下

```ts title="App.vue" 
// 示例1：格式化当前时间，无偏移量，格式为 'YYYY-MM-DD'
const now = new Date();
const formattedNow = formatDate(now, 'YYYY-MM-DD');
console.log('当前时间格式化：', formattedNow);

// 示例2：获取上一周的今天，格式为 'YYYY-MM-DD'
const lastWeek = formatDate(now, 'YYYY-MM-DD', { weeks: -1 });
console.log('上一周的今天：', lastWeek);

// 示例3：获取下个月的今天，格式为 'YYYY-MM-DD'
const nextMonth = formatDate(now, 'YYYY-MM-DD', { months: 1 });
console.log('下个月的今天：', nextMonth);

// 示例4：获取明年的今天，格式为 'YYYY-MM-DD'
const nextYear = formatDate(now, 'YYYY-MM-DD', { years: 1 });
console.log('明年的今天：', nextYear);

// 示例5：自定义格式并进行时间偏移，包含日数偏移
const customFormatAndOffset = formatDate(now, 'MM/DD/YYYY hh:mm', { weeks: 2, months: 3, years: 1, days: 5 });
console.log('自定义格式及偏移量的结果：', customFormatAndOffset);

// 示例6：仅格式化时间中的时分秒部分，无时间偏移，格式为 'hh:mm:ss'
const timeOnly = formatDate(new Date(), 'hh:mm:ss');
console.log('仅时间部分格式化：', timeOnly);
```

### 判断设备类型（checkDeviceType）

`checkDeviceType` 函数用于精准识别用户当前所使用设备的操作系统类别，其返回值明确区分设备是运行 `Android` 系统、`iOS` 系统还是属于`桌面端环境`。这在开发多端适配应用或根据不同设备类型提供特定功能与体验的场景中极为关键，能够帮助开发者依据设备特性灵活调整应用逻辑与界面展示。

#### 1.引入该方法
在 Vue 项目（以 `App.vue` 文件为例）中，引入判断设备类型函数的方式如下：

```ts title="App.vue"
import { checkDeviceType } from 'toolspad';
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
import { getRandom } from 'toolspad';
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