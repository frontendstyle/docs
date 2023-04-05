import{_ as s,c as a,o as n,N as p}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"面试官：说说你对webpack的理解？解决了什么问题？","description":"","frontmatter":{},"headers":[],"relativePath":"webpack/index.md","lastUpdated":1680705882000}'),o={name:"webpack/index.md"},l=p(`<h1 id="面试官-说说你对webpack的理解-解决了什么问题" tabindex="-1">面试官：说说你对webpack的理解？解决了什么问题？ <a class="header-anchor" href="#面试官-说说你对webpack的理解-解决了什么问题">¶</a></h1><p><img src="https://static.vue-js.com/898ed570-a578-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、背景" tabindex="-1">一、背景 <a class="header-anchor" href="#一、背景">¶</a></h2><p><code>Webpack</code> 最初的目标是实现前端项目的模块化，旨在更高效地管理和维护项目中的每一个资源</p><h4 id="模块化" tabindex="-1">模块化 <a class="header-anchor" href="#模块化">¶</a></h4><p>最早的时候，我们会通过文件划分的形式实现模块化，也就是将每个功能及其相关状态数据各自单独放到不同的<code> JS</code> 文件中</p><p>约定每个文件是一个独立的模块，然后再将这些<code>js</code>文件引入到页面，一个<code>script</code>标签对应一个模块，然后调用模块化的成员</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;module-a.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;module-b.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;module-a.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;module-b.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>但这种模块弊端十分的明显，模块都是在全局中工作，大量模块成员污染了环境，模块与模块之间并没有依赖关系、维护困难、没有私有空间等问题</p><p>项目一旦变大，上述问题会尤其明显</p><p>随后，就出现了命名空间方式，规定每个模块只暴露一个全局对象，然后模块的内容都挂载到这个对象中</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">window.moduleA </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">method1</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;moduleA#method1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">window.moduleA </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">method1</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;moduleA#method1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这种方式也并没有解决第一种方式的依赖等问题</p><p>再后来，我们使用立即执行函数为模块提供私有空间，通过参数的形式作为依赖声明，如下</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// module-a.js</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">$</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;module-a&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">method1</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(name </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;#method1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;body&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">animate</span><span style="color:#E1E4E8;">({ margin: </span><span style="color:#9ECBFF;">&#39;200px&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  window.moduleA </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    method1: method1</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})(jQuery)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// module-a.js</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">$</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;module-a&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">method1</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(name </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;#method1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">$</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;body&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">animate</span><span style="color:#24292E;">({ margin: </span><span style="color:#032F62;">&#39;200px&#39;</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  window.moduleA </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    method1: method1</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})(jQuery)</span></span></code></pre></div><p>上述的方式都是早期解决模块的方式，但是仍然存在一些没有解决的问题。例如，我们是用过<code>script</code>标签在页面引入这些模块的，这些模块的加载并不受代码的控制，时间一久维护起来也十分的麻烦</p><p>理想的解决方式是，在页面中引入一个<code>JS</code>入口文件，其余用到的模块可以通过代码控制，按需加载进来</p><p>除了模块加载的问题以外，还需要规定模块化的规范，如今流行的则是<code>CommonJS </code>、<code>ES Modules</code></p><h2 id="二、问题" tabindex="-1">二、问题 <a class="header-anchor" href="#二、问题">¶</a></h2><p>从后端渲染的<code>JSP</code>、<code>PHP</code>，到前端原生<code>JavaScript</code>，再到<code>jQuery</code>开发，再到目前的三大框架<code>Vue</code>、<code>React</code>、<code>Angular</code></p><p>开发方式，也从<code>javascript</code>到后面的<code>es5</code>、<code>es6、7、8、9、10</code>，再到<code>typescript</code>，包括编写<code>CSS</code>的预处理器<code>less</code>、<code>scss</code>等</p><p>现代前端开发已经变得十分的复杂，所以我们开发过程中会遇到如下的问题：</p><ul><li>需要通过模块化的方式来开发</li><li>使用一些高级的特性来加快我们的开发效率或者安全性，比如通过ES6+、TypeScript开发脚本逻辑，通过sass、less等方式来编写css样式代码</li><li>监听文件的变化来并且反映到浏览器上，提高开发的效率</li><li>JavaScript 代码需要模块化，HTML 和 CSS 这些资源文件也会面临需要被模块化的问题</li><li>开发完成后我们还需要将代码进行压缩、合并以及其他相关的优化</li></ul><p>而<code>webpack</code>恰巧可以解决以上问题</p><h2 id="三、是什么" tabindex="-1">三、是什么 <a class="header-anchor" href="#三、是什么">¶</a></h2><p><code>webpack</code> 是一个用于现代<code>JavaScript</code>应用程序的静态模块打包工具</p><ul><li>静态模块</li></ul><p>这里的静态模块指的是开发阶段，可以被 <code>webpack</code> 直接引用的资源（可以直接被获取打包进<code>bundle.js</code>的资源）</p><p>当 <code>webpack </code>处理应用程序时，它会在内部构建一个依赖图，此依赖图对应映射到项目所需的每个模块（不再局限<code>js</code>文件），并生成一个或多个 <code>bundle</code></p><p><img src="https://static.vue-js.com/9ce194a0-a578-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h4 id="webpack的能力" tabindex="-1"><code>webpack</code>的能力： <a class="header-anchor" href="#webpack的能力">¶</a></h4><p><strong>编译代码能力</strong>，提高效率，解决浏览器兼容问题 <img src="https://static.vue-js.com/c5c2d360-a592-11eb-ab90-d9ae814b240d.png" alt=""><strong>模块整合能力</strong>，提高性能，可维护性，解决浏览器频繁请求文件的问题 <img src="https://static.vue-js.com/d306d260-a592-11eb-ab90-d9ae814b240d.png" alt=""><strong>万物皆可模块能力</strong>，项目维护性增强，支持不同种类的前端模块类型，统一的模块化方案，所有资源文件的加载都可以通过代码控制 <img src="https://static.vue-js.com/e3c5a040-a592-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献">¶</a></h2><ul><li><a href="https://webpack.docschina.org/concepts/" target="_blank" rel="noreferrer">https://webpack.docschina.org/concepts/</a></li><li><a href="https://zhuanlan.zhihu.com/p/267875652" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/267875652</a></li></ul>`,34),e=[l];function c(t,r,E,d,i,y){return n(),a("div",null,e)}const m=s(o,[["render",c]]);export{u as __pageData,m as default};
