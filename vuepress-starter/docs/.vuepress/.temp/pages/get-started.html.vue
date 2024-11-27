<template><div><h1 id="函数文档" tabindex="-1"><a class="header-anchor" href="#函数文档"><span>函数文档</span></a></h1>
<p>欢迎您使用my-tools 函数库🎉!</p>
<h2 id="防抖函数-debounce" tabindex="-1"><a class="header-anchor" href="#防抖函数-debounce"><span>防抖函数(debounce)</span></a></h2>
<p>确保一个函数在一定时间间隔内不会被重复调用，只有在经过规定的等待时间后没有再次触发事件，函数才会执行。</p>
<h3 id="_1-引入该方法" tabindex="-1"><a class="header-anchor" href="#_1-引入该方法"><span>1.引入该方法</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="App.vue"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>debounce<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@gg233o-x/my-tools/dist/index'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-使用示例如下" tabindex="-1"><a class="header-anchor" href="#_2-使用示例如下"><span>2.使用示例如下</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="App.vue"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">logFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'控制台输出啦'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 第一个参数为 要添加防抖的函数</span></span>
<span class="line"><span class="token comment">// 第二个参数规定防抖时间</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> debounceFn <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>logFn<span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>  <span class="token comment">//返回一个防抖函数</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>See <a href="https://vuejs.press/guide/page.html#routing" target="_blank" rel="noopener noreferrer">routing</a> for more details.</p>
<h2 id="节流函数-throttle" tabindex="-1"><a class="header-anchor" href="#节流函数-throttle"><span>节流函数(throttle)</span></a></h2>
<p>确保一个函数在一定时间间隔内不会被重复调用，只有在经过规定的等待时间后没有再次触发事件，函数才会执行。</p>
<h3 id="_1-引入该方法-1" tabindex="-1"><a class="header-anchor" href="#_1-引入该方法-1"><span>1.引入该方法</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="App.vue"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>throttle<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@gg233o-x/my-tools/dist/index'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-使用示例如下-1" tabindex="-1"><a class="header-anchor" href="#_2-使用示例如下-1"><span>2.使用示例如下</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="App.vue"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">logFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'控制台输出啦'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 第一个参数为 要添加节流的函数</span></span>
<span class="line"><span class="token comment">// 第二个参数规定节流时间</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> throttleFn <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span>logFn<span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>  <span class="token comment">//返回一个节流函数</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="深拷贝-deepcopy" tabindex="-1"><a class="header-anchor" href="#深拷贝-deepcopy"><span>深拷贝(deepCopy)</span></a></h2>
<p>确保一个函数在一定时间间隔内不会被重复调用，只有在经过规定的等待时间后没有再次触发事件，函数才会执行。</p>
<h3 id="_1-引入该方法-2" tabindex="-1"><a class="header-anchor" href="#_1-引入该方法-2"><span>1.引入该方法</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="App.vue"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>deepCopy<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@gg233o-x/my-tools/dist/index'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-使用示例如下-2" tabindex="-1"><a class="header-anchor" href="#_2-使用示例如下-2"><span>2.使用示例如下</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="App.vue"><pre v-pre><code><span class="line"><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>son<span class="token operator">:</span><span class="token punctuation">{</span>one<span class="token operator">:</span><span class="token string">'base'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span> <span class="token comment">// 将obj1 copy 赋值给obj2</span></span>
<span class="line">obj1<span class="token punctuation">.</span>son<span class="token punctuation">.</span>one <span class="token operator">=</span> <span class="token string">'dataChange'</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span><span class="token string">'obj2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//输出结果为 base</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span><span class="token string">'obj1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出结果为 dataChange</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2>
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


