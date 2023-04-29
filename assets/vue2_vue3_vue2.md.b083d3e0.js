import{_ as s,c as a,o as n,N as l}from"./chunks/framework.0799945b.js";const h=JSON.parse('{"title":"面试官：vue3有了解过吗？能说说跟vue2的区别吗？","description":"","frontmatter":{},"headers":[],"relativePath":"vue2/vue3_vue2.md","lastUpdated":1680705882000}'),o={name:"vue2/vue3_vue2.md"},e=l(`<h1 id="面试官-vue3有了解过吗-能说说跟vue2的区别吗" tabindex="-1">面试官：vue3有了解过吗？能说说跟vue2的区别吗？ <a class="header-anchor" href="#面试官-vue3有了解过吗-能说说跟vue2的区别吗">¶</a></h1><p><img src="https://static.vue-js.com/774b6950-5087-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、vue3介绍" tabindex="-1">一、Vue3介绍 <a class="header-anchor" href="#一、vue3介绍">¶</a></h2><p>关于<code>vue3</code>的重构背景，尤大是这样说的：</p><p>「Vue 新版本的理念成型于 2018 年末，当时 Vue 2 的代码库已经有两岁半了。比起通用软件的生命周期来这好像也没那么久，但在这段时期，前端世界已经今昔非比了</p><p>在我们更新（和重写）Vue 的主要版本时，主要考虑两点因素：首先是新的 JavaScript 语言特性在主流浏览器中的受支持水平；其次是当前代码库中随时间推移而逐渐暴露出来的一些设计和架构问题」</p><p>简要就是：</p><ul><li>利用新的语言特性(es6)</li><li>解决架构问题</li></ul><h2 id="哪些变化" tabindex="-1">哪些变化 <a class="header-anchor" href="#哪些变化">¶</a></h2><p><img src="https://static.vue-js.com/9169a900-5087-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>从上图中，我们可以概览<code>Vue3</code>的新特性，如下：</p><ul><li>速度更快</li><li>体积减少</li><li>更易维护</li><li>更接近原生</li><li>更易使用</li></ul><h3 id="速度更快" tabindex="-1">速度更快 <a class="header-anchor" href="#速度更快">¶</a></h3><p><code>vue3</code>相比<code>vue2</code></p><ul><li><p>重写了虚拟<code>Dom</code>实现</p></li><li><p>编译模板的优化</p></li><li><p>更高效的组件初始化</p></li><li><p><code>undate</code>性能提高1.3~2倍</p></li><li><p><code>SSR</code>速度提高了2~3倍</p></li></ul><p><img src="https://static.vue-js.com/ac1d23d0-5087-11eb-ab90-d9ae814b240d.png" alt=""></p><h3 id="体积更小" tabindex="-1">体积更小 <a class="header-anchor" href="#体积更小">¶</a></h3><p>通过<code>webpack</code>的<code>tree-shaking</code>功能，可以将无用模块“剪辑”，仅打包需要的</p><p>能够<code>tree-shaking</code>，有两大好处：</p><ul><li><p>对开发人员，能够对<code>vue</code>实现更多其他的功能，而不必担忧整体体积过大</p></li><li><p>对使用者，打包出来的包体积变小了</p></li></ul><p><code>vue</code>可以开发出更多其他的功能，而不必担忧<code>vue</code>打包出来的整体体积过多</p><p><img src="https://static.vue-js.com/c01af010-5087-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h3 id="更易维护" tabindex="-1">更易维护 <a class="header-anchor" href="#更易维护">¶</a></h3><h4 id="compositon-api" tabindex="-1">compositon Api <a class="header-anchor" href="#compositon-api">¶</a></h4><ul><li>可与现有的<code>Options API</code>一起使用</li><li>灵活的逻辑组合与复用</li><li><code>Vue3</code>模块可以和其他框架搭配使用</li></ul><p><img src="https://static.vue-js.com/c5c919b0-5087-11eb-ab90-d9ae814b240d.png" alt=""></p><h4 id="更好的typescript支持" tabindex="-1">更好的Typescript支持 <a class="header-anchor" href="#更好的typescript支持">¶</a></h4><p><code>VUE3</code>是基于<code>typescipt</code>编写的，可以享受到自动的类型定义提示</p><p><img src="https://static.vue-js.com/cc688120-5087-11eb-ab90-d9ae814b240d.png" alt=""></p><h4 id="编译器重写" tabindex="-1">编译器重写 <a class="header-anchor" href="#编译器重写">¶</a></h4><p><img src="https://static.vue-js.com/fcd33800-5087-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h3 id="更接近原生" tabindex="-1">更接近原生 <a class="header-anchor" href="#更接近原生">¶</a></h3><p>可以自定义渲染 API</p><p><img src="https://static.vue-js.com/0c7d88a0-5088-11eb-ab90-d9ae814b240d.png" alt=""></p><h3 id="更易使用" tabindex="-1">更易使用 <a class="header-anchor" href="#更易使用">¶</a></h3><p>响应式 <code>Api</code> 暴露出来</p><p><img src="https://static.vue-js.com/26070260-5088-11eb-ab90-d9ae814b240d.png" alt=""></p><p>轻松识别组件重新渲染原因</p><p><img src="https://static.vue-js.com/43b2fcb0-5088-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="二、vue3新增特性" tabindex="-1">二、Vue3新增特性 <a class="header-anchor" href="#二、vue3新增特性">¶</a></h2><p>Vue 3 中需要关注的一些新功能包括：</p><ul><li>framents</li><li>Teleport</li><li>composition Api</li><li>createRenderer</li></ul><h3 id="framents" tabindex="-1">framents <a class="header-anchor" href="#framents">¶</a></h3><p>在 <code>Vue3.x</code> 中，组件现在支持有多个根节点</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;!--</span><span style="color:#E1E4E8;"> Layout.vue </span><span style="color:#F97583;">--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-bind</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;$attrs&quot;</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;!--</span><span style="color:#24292E;"> Layout.vue </span><span style="color:#D73A49;">--&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">header</span><span style="color:#24292E;">&gt;...&lt;/</span><span style="color:#22863A;">header</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">main</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-bind</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;$attrs&quot;</span><span style="color:#24292E;">&gt;...&lt;/</span><span style="color:#22863A;">main</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">footer</span><span style="color:#24292E;">&gt;...&lt;/</span><span style="color:#22863A;">footer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="teleport" tabindex="-1">Teleport <a class="header-anchor" href="#teleport">¶</a></h3><p><code>Teleport</code> 是一种能够将我们的模板移动到 <code>DOM</code> 中 <code>Vue app</code> 之外的其他位置的技术，就有点像哆啦A梦的“任意门”</p><p>在<code>vue2</code>中，像 <code>modals</code>,<code>toast</code> 等这样的元素，如果我们嵌套在 <code>Vue</code> 的某个组件内部，那么处理嵌套组件的定位、<code>z-index</code> 和样式就会变得很困难</p><p>通过<code>Teleport</code>，我们可以在组件的逻辑位置写模板代码，然后在 <code>Vue</code> 应用范围之外渲染它</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;showToast&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn&quot;</span><span style="color:#E1E4E8;">&gt;打开 toast&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- to 属性就是目标位置 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">teleport</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#teleport-target&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;visible&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;toast-wrap&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;toast-msg&quot;</span><span style="color:#E1E4E8;">&gt;我是一个 Toast 文案&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">teleport</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;showToast&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn&quot;</span><span style="color:#24292E;">&gt;打开 toast&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- to 属性就是目标位置 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">teleport</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">to</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#teleport-target&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;visible&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;toast-wrap&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;toast-msg&quot;</span><span style="color:#24292E;">&gt;我是一个 Toast 文案&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">teleport</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="createrenderer" tabindex="-1">createRenderer <a class="header-anchor" href="#createrenderer">¶</a></h3><p>通过<code>createRenderer</code>，我们能够构建自定义渲染器，我们能够将 <code>vue</code> 的开发模型扩展到其他平台</p><p>我们可以将其生成在<code>canvas</code>画布上</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da4437845ec54eb3829313c92fc81afe~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>关于<code>createRenderer</code>，我们了解下基本使用，就不展开讲述了</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createRenderer } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vue/runtime-core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">render</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">createApp</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createRenderer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  patchProp,</span></span>
<span class="line"><span style="color:#E1E4E8;">  insert,</span></span>
<span class="line"><span style="color:#E1E4E8;">  remove,</span></span>
<span class="line"><span style="color:#E1E4E8;">  createElement,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> { render, createApp }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vue/runtime-core&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createRenderer } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vue/runtime-core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">render</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">createApp</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createRenderer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  patchProp,</span></span>
<span class="line"><span style="color:#24292E;">  insert,</span></span>
<span class="line"><span style="color:#24292E;">  remove,</span></span>
<span class="line"><span style="color:#24292E;">  createElement,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> { render, createApp }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vue/runtime-core&#39;</span></span></code></pre></div><h3 id="composition-api" tabindex="-1">composition Api <a class="header-anchor" href="#composition-api">¶</a></h3><p>composition Api，也就是组合式<code>api</code>，通过这种形式，我们能够更加容易维护我们的代码，将相同功能的变量进行一个集中式的管理</p><p><img src="https://static.vue-js.com/5e0bfb70-5088-11eb-ab90-d9ae814b240d.png" alt=""></p><p>关于<code>compositon api</code>的使用，这里以下图展开</p><p><img src="https://static.vue-js.com/6f67a590-5088-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>简单使用:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">double</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> count.value </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">increment</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">            count.value</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;component mounted!&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            count,</span></span>
<span class="line"><span style="color:#E1E4E8;">            double,</span></span>
<span class="line"><span style="color:#E1E4E8;">            increment</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">count</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">double</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computed</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> count.value </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">increment</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">            count.value</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">onMounted</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;component mounted!&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            count,</span></span>
<span class="line"><span style="color:#24292E;">            double,</span></span>
<span class="line"><span style="color:#24292E;">            increment</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="三、非兼容变更" tabindex="-1">三、非兼容变更 <a class="header-anchor" href="#三、非兼容变更">¶</a></h3><h3 id="global-api" tabindex="-1">Global API <a class="header-anchor" href="#global-api">¶</a></h3><ul><li>全局 <code>Vue API</code> 已更改为使用应用程序实例</li><li>全局和内部 <code>API</code> 已经被重构为可 <code>tree-shakable</code></li></ul><h3 id="模板指令" tabindex="-1">模板指令 <a class="header-anchor" href="#模板指令">¶</a></h3><ul><li>组件上 <code>v-model</code> 用法已更改</li><li><code>&lt;template v-for&gt;</code>和 非 <code>v-for</code>节点上<code>key</code>用法已更改</li><li>在同一元素上使用的 <code>v-if</code> 和 <code>v-for</code> 优先级已更改</li><li><code>v-bind=&quot;object&quot;</code> 现在排序敏感</li><li><code>v-for</code> 中的 <code>ref</code> 不再注册 <code>ref</code> 数组</li></ul><h3 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件">¶</a></h3><ul><li>只能使用普通函数创建功能组件</li><li><code>functional</code> 属性在单文件组件 <code>(SFC) </code></li><li>异步组件现在需要 <code>defineAsyncComponent</code> 方法来创建</li></ul><h3 id="渲染函数" tabindex="-1">渲染函数 <a class="header-anchor" href="#渲染函数">¶</a></h3><ul><li>渲染函数<code>API</code>改变</li><li><code>$scopedSlots</code> property 已删除，所有插槽都通过 <code>$slots</code> 作为函数暴露</li><li>自定义指令 API 已更改为与组件生命周期一致</li><li>一些转换 <code>class</code> 被重命名了： <ul><li><code>v-enter</code> -&gt; <code>v-enter-from</code></li><li><code>v-leave</code> -&gt; <code>v-leave-from</code></li></ul></li><li>组件 <code>watch</code> 选项和实例方法 <code>$watch</code>不再支持点分隔字符串路径，请改用计算函数作为参数</li><li>在 <code>Vue 2.x</code> 中，应用根容器的 <code>outerHTML</code> 将替换为根组件模板 (如果根组件没有模板/渲染选项，则最终编译为模板)。<code>VUE3.x</code> 现在使用应用程序容器的 <code>innerHTML</code>。</li></ul><h3 id="其他小改变" tabindex="-1">其他小改变 <a class="header-anchor" href="#其他小改变">¶</a></h3><ul><li><code>destroyed</code> 生命周期选项被重命名为 <code>unmounted</code></li><li><code>beforeDestroy</code> 生命周期选项被重命名为 <code>beforeUnmount</code></li><li><code>[prop default</code>工厂函数不再有权访问 <code>this</code> 是上下文</li><li>自定义指令 API 已更改为与组件生命周期一致</li><li><code>data</code> 应始终声明为函数</li><li>来自 <code>mixin</code> 的 <code>data</code> 选项现在可简单地合并</li><li><code>attribute</code> 强制策略已更改</li><li>一些过渡 <code>class</code> 被重命名</li><li>组建 watch 选项和实例方法 <code>$watch</code>不再支持以点分隔的字符串路径。请改用计算属性函数作为参数。</li><li><code>&lt;template&gt;</code> 没有特殊指令的标记 (<code>v-if/else-if/else</code>、<code>v-for</code> 或 <code>v-slot</code>) 现在被视为普通元素，并将生成原生的 <code>&lt;template&gt;</code> 元素，而不是渲染其内部内容。</li><li>在<code> Vue 2.x</code> 中，应用根容器的 <code>outerHTML</code> 将替换为根组件模板 (如果根组件没有模板/渲染选项，则最终编译为模板)。<code>Vue 3.x</code> 现在使用应用容器的 <code>innerHTML</code>，这意味着容器本身不再被视为模板的一部分。</li></ul><h3 id="移除-api" tabindex="-1">移除 API <a class="header-anchor" href="#移除-api">¶</a></h3><ul><li><code>keyCode</code> 支持作为 <code>v-on</code> 的修饰符</li><li><code>$on</code>，<code>$off </code>和<code> $once</code> 实例方法</li><li>过滤<code>filter</code></li><li>内联模板 <code>attribute</code></li><li><code>$destroy</code> 实例方法。用户不应再手动管理单个<code> Vue</code> 组件的生命周期。</li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献">¶</a></h2><ul><li><a href="https://vue3js.cn/docs/zh/guide/migration/introduction.html#%E6%A8%A1%E6%9D%BF%E6%8C%87%E4%BB%A4" target="_blank" rel="noreferrer">https://vue3js.cn/docs/zh/guide/migration/introduction.html#模板指令</a></li><li><a href="https://composition-api.vuejs.org/zh/#api-%E4%BB%8B%E7%BB%8D" target="_blank" rel="noreferrer">https://composition-api.vuejs.org/zh/#api-介绍</a></li></ul>`,78),p=[e];function c(t,r,i,E,d,y){return n(),a("div",null,p)}const g=s(o,[["render",c]]);export{h as __pageData,g as default};
