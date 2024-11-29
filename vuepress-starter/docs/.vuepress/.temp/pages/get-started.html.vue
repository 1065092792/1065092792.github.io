<template><div><h1 id="函数文档" tabindex="-1"><a class="header-anchor" href="#函数文档"><span>函数文档</span></a></h1>
<p>欢迎您使用my-tools 函数库🎉!</p>
<h2 id="防抖函数-debounce" tabindex="-1"><a class="header-anchor" href="#防抖函数-debounce"><span>防抖函数(debounce)</span></a></h2>
<p>防抖函数的作用是确保一个函数在特定的时间间隔内不会被重复调用。只有当经过规定的等待时间后且没有再次触发相关事件时，该函数才会被执行。这在处理例如用户频繁点击按钮、文本输入实时搜索等场景时，能够有效减少不必要的函数执行次数，提升性能和用户体验。</p>
<h3 id="_1-引入该方法" tabindex="-1"><a class="header-anchor" href="#_1-引入该方法"><span>1.引入该方法</span></a></h3>
<p>在 Vue 项目（以 App.vue 文件为例）中，若要使用防抖函数，按如下方式从 @gg233o-x/my-tools 包中引入：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="App.vue"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>debounce<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@gg233o-x/my-tools'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-使用示例如下" tabindex="-1"><a class="header-anchor" href="#_2-使用示例如下"><span>2.使用示例如下</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="App.vue"><pre v-pre><code><span class="line"><span class="token comment">// 首先定义一个普通函数，这里是简单的控制台输出函数</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">logFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'控制台输出啦'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 第一个参数为要添加防抖的函数，即上面定义的 logFn</span></span>
<span class="line"><span class="token comment">// 第二个参数规定防抖时间，单位为毫秒，这里设置为 1000 毫秒（即 1 秒）</span></span>
<span class="line"><span class="token keyword">const</span> debounceFn <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>logFn<span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 当调用 debounceFn 时，它会等待 1000 毫秒，如果在这期间没有再次调用 debounceFn，才会执行 logFn 函数</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="节流函数-throttle" tabindex="-1"><a class="header-anchor" href="#节流函数-throttle"><span>节流函数(throttle)</span></a></h2>
<p>节流函数用于确保一个函数在特定的时间间隔内不会被过度频繁地调用。具体而言，只有在经过规定的等待时间后且在此期间没有再次触发相关事件时，该函数才会执行。这在处理诸如窗口大小调整、滚动事件等可能频繁触发的场景中非常有用，可以有效避免函数执行过于频繁而导致的性能问题。</p>
<h3 id="_1-引入该方法-1" tabindex="-1"><a class="header-anchor" href="#_1-引入该方法-1"><span>1.引入该方法</span></a></h3>
<p>在 Vue 项目（以 App.vue 文件为例）中，若要使用节流函数，需先从 @gg233o-x/my-tools 包中引入它。示例代码如下：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="App.vue"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>throttle<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@gg233o-x/my-tools'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-使用示例如下-1" tabindex="-1"><a class="header-anchor" href="#_2-使用示例如下-1"><span>2.使用示例如下</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="App.vue"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">logFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'控制台输出啦'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 第一个参数为要添加节流的函数，即我们刚刚定义的logFn</span></span>
<span class="line"><span class="token comment">// 第二个参数规定节流时间，单位为毫秒。这里设置为1000毫秒（即1秒）</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> throttleFn <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span>logFn<span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 此时，throttleFn就是经过节流处理后的函数</span></span>
<span class="line"><span class="token comment">// 当我们触发相关事件（例如某个按钮点击事件或者页面滚动事件等，具体取决于实际应用场景）调用throttleFn时，</span></span>
<span class="line"><span class="token comment">// 它会按照节流规则执行，即每隔1000毫秒才会真正执行一次logFn函数</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="深拷贝-deepcopy" tabindex="-1"><a class="header-anchor" href="#深拷贝-deepcopy"><span>深拷贝(deepCopy)</span></a></h2>
<p>深拷贝函数用于创建一个原始对象的全新副本，新副本与原始对象在内存中完全独立，对原始对象的任何修改都不会影响到深拷贝后的对象，反之亦然。这在处理复杂数据结构（如嵌套对象、数组等）时非常关键，能够避免数据的意外篡改和副作用。</p>
<h3 id="_1-引入该方法-2" tabindex="-1"><a class="header-anchor" href="#_1-引入该方法-2"><span>1.引入该方法</span></a></h3>
<p>在 Vue 项目（以 App.vue 文件为例）中，引入深拷贝函数的方式如下：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="App.vue"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>deepCopy<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@gg233o-x/my-tools'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-使用示例如下-2" tabindex="-1"><a class="header-anchor" href="#_2-使用示例如下-2"><span>2.使用示例如下</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="App.vue"><pre v-pre><code><span class="line"><span class="token comment">// 首先创建一个包含嵌套对象的示例对象 obj1</span></span>
<span class="line"><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>son<span class="token operator">:</span><span class="token punctuation">{</span>one<span class="token operator">:</span><span class="token string">'base'</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用 deepCopy 函数对 obj1 进行深拷贝，将结果赋值给 obj2</span></span>
<span class="line"><span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 对原始对象 obj1 的嵌套属性进行修改</span></span>
<span class="line">obj1<span class="token punctuation">.</span>son<span class="token punctuation">.</span>one <span class="token operator">=</span> <span class="token string">'dataChange'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 输出深拷贝后的对象 obj2，其嵌套属性的值仍然为 'base'，因为它是独立的副本</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span><span class="token string">'obj2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"></span>
<span class="line"><span class="token comment">// 输出原始对象 obj1，其嵌套属性的值已被修改为 'dataChange'</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span><span class="token string">'obj1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判断设备类型-checkdevicetype" tabindex="-1"><a class="header-anchor" href="#判断设备类型-checkdevicetype"><span>判断设备类型（checkDeviceType）</span></a></h2>
<p>判断设备类型函数用于精准识别用户当前所使用设备的操作系统类别，其返回值明确区分设备是运行 Android 系统、iOS 系统还是属于桌面端环境。这在开发多端适配应用或根据不同设备类型提供特定功能与体验的场景中极为关键，能够帮助开发者依据设备特性灵活调整应用逻辑与界面展示。</p>
<h3 id="_1-引入该方法-3" tabindex="-1"><a class="header-anchor" href="#_1-引入该方法-3"><span>1.引入该方法</span></a></h3>
<p>在 Vue 项目（以 App.vue 文件为例）中，引入判断设备类型函数的方式如下：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="App.vue"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> checkDeviceType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@gg233o-x/my-tools'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-使用示例如下-3" tabindex="-1"><a class="header-anchor" href="#_2-使用示例如下-3"><span>2.使用示例如下</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="App.vue"><pre v-pre><code><span class="line"><span class="token comment">// 调用 checkDeviceType 函数来获取设备类型</span></span>
<span class="line"><span class="token keyword">const</span> deviceType <span class="token operator">=</span> <span class="token function">checkDeviceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 根据返回的设备类型进行不同的操作，例如在控制台输出相应信息</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>deviceType <span class="token operator">===</span> <span class="token string">'Android'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'当前设备为 Android 系统。'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>deviceType <span class="token operator">===</span> <span class="token string">'iOS'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'当前设备为 iOS 系统。'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'当前设备为桌面端。'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2>
<p>VuePress use a <code v-pre>.vuepress/config.js</code>(or .ts) file as <a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">site configuration</a>, you can use it to config your site.</p>
<p>For <a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">client side configuration</a>, you can create <code v-pre>.vuepress/client.js</code>(or .ts).</p>
<p>Meanwhile, you can also add configuration per page with <a href="https://vuejs.press/guide/page.html#frontmatter" target="_blank" rel="noopener noreferrer">frontmatter</a>.</p>
<h2 id="layouts-and-customization" tabindex="-1"><a class="header-anchor" href="#layouts-and-customization"><span>Layouts and customization</span></a></h2>
<p>Here are common configuration controlling layout of <code v-pre>@vuepress/theme-default</code>:</p>
<ul>
<li><a href="https://vuejs.press/reference/default-theme/config.html#navbar" target="_blank" rel="noopener noreferrer">navbar</a></li>
<li><a href="https://vuejs.press/reference/default-theme/config.html#sidebar" target="_blank" rel="noopener noreferrer">sidebar</a></li>
</ul>
<p>Check <a href="https://vuejs.press/reference/default-theme/" target="_blank" rel="noopener noreferrer">default theme docs</a> for full reference.</p>
<p>You can <a href="https://vuejs.press/reference/default-theme/styles.html#style-file" target="_blank" rel="noopener noreferrer">add extra style</a> with <code v-pre>.vuepress/styles/index.scss</code> file.</p>
</div></template>


