import{_ as s,c as a,o as n,N as l}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"面试官：说说webpack中常见的Loader？解决了什么问题？","description":"","frontmatter":{},"headers":[],"relativePath":"webpack/loader.md","lastUpdated":null}'),p={name:"webpack/loader.md"},o=l(`<h1 id="面试官-说说webpack中常见的loader-解决了什么问题" tabindex="-1">面试官：说说webpack中常见的Loader？解决了什么问题？ <a class="header-anchor" href="#面试官-说说webpack中常见的loader-解决了什么问题">¶</a></h1><p><img src="https://static.vue-js.com/5660fc40-a6ff-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么">¶</a></h2><p><code>loader</code> 用于对模块的&quot;源代码&quot;进行转换，在 <code>import</code> 或&quot;加载&quot;模块时预处理文件</p><p><code>webpack</code>做的事情，仅仅是分析出各种模块的依赖关系，然后形成资源列表，最终打包生成到指定的文件中。如下图所示：</p><p><img src="https://static.vue-js.com/7b8d9640-a6ff-11eb-ab90-d9ae814b240d.png" alt=""></p><p>在<code>webpack</code>内部中，任何文件都是模块，不仅仅只是<code>js</code>文件</p><p>默认情况下，在遇到<code>import</code>或者<code>require</code>加载模块的时候，<code>webpack</code>只支持对<code>js</code> 和 <code>json</code> 文件打包</p><p>像<code>css</code>、<code>sass</code>、<code>png</code>等这些类型的文件的时候，<code>webpack</code>则无能为力，这时候就需要配置对应的<code>loader</code>进行文件内容的解析</p><p>在加载模块的时候，执行顺序如下：</p><p><img src="https://static.vue-js.com/9c2c43b0-a6ff-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>当 <code>webpack</code> 碰到不识别的模块的时候，<code>webpack</code> 会在配置的中查找该文件解析规则</p><p>关于配置<code>loader</code>的方式有三种：</p><ul><li>配置方式（推荐）：在 webpack.config.js文件中指定 loader</li><li>内联方式：在每个 import 语句中显式指定 loader</li><li>CLI 方式：在 shell 命令中指定它们</li></ul><h3 id="配置方式" tabindex="-1">配置方式 <a class="header-anchor" href="#配置方式">¶</a></h3><p>关于<code>loader</code>的配置，我们是写在<code>module.rules</code>属性中，属性介绍如下：</p><ul><li><p><code>rules</code>是一个数组的形式，因此我们可以配置很多个<code>loader</code></p></li><li><p>每一个<code>loader</code>对应一个对象的形式，对象属性<code>test</code> 为匹配的规则，一般情况为正则表达式</p></li><li><p>属性<code>use</code>针对匹配到文件类型，调用对应的 <code>loader</code> 进行处理</p></li></ul><p>代码编写，如下形式：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          { loader: </span><span style="color:#9ECBFF;">&#39;style-loader&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            loader: </span><span style="color:#9ECBFF;">&#39;css-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              modules: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { loader: </span><span style="color:#9ECBFF;">&#39;sass-loader&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  module: {</span></span>
<span class="line"><span style="color:#24292E;">    rules: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        use: [</span></span>
<span class="line"><span style="color:#24292E;">          { loader: </span><span style="color:#032F62;">&#39;style-loader&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            loader: </span><span style="color:#032F62;">&#39;css-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            options: {</span></span>
<span class="line"><span style="color:#24292E;">              modules: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          { loader: </span><span style="color:#032F62;">&#39;sass-loader&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="二、特性" tabindex="-1">二、特性 <a class="header-anchor" href="#二、特性">¶</a></h2><p>这里继续拿上述代码，来讲讲<code>loader</code>的特性</p><p>从上述代码可以看到，在处理<code>css</code>模块的时候，<code>use</code>属性中配置了三个<code>loader</code>分别处理<code>css</code>文件</p><p>因为<code>loader </code>支持链式调用，链中的每个<code>loader</code>会处理之前已处理过的资源，最终变为<code>js</code>代码。顺序为相反的顺序执行，即上述执行方式为<code>sass-loader</code>、<code>css-loader</code>、<code>style-loader</code></p><p>除此之外，<code>loader</code>的特性还有如下：</p><ul><li>loader 可以是同步的，也可以是异步的</li><li>loader 运行在 Node.js 中，并且能够执行任何操作</li><li>除了常见的通过 <code>package.json</code> 的 <code>main</code> 来将一个 npm 模块导出为 loader，还可以在 module.rules 中使用 <code>loader</code> 字段直接引用一个模块</li><li>插件(plugin)可以为 loader 带来更多特性</li><li>loader 能够产生额外的任意文件</li></ul><p>可以通过 loader 的预处理函数，为 JavaScript 生态系统提供更多能力。用户现在可以更加灵活地引入细粒度逻辑，例如：压缩、打包、语言翻译和更多其他特性</p><h2 id="三、常见的loader" tabindex="-1">三、常见的loader <a class="header-anchor" href="#三、常见的loader">¶</a></h2><p>在页面开发过程中，我们经常性加载除了<code>js</code>文件以外的内容，这时候我们就需要配置响应的<code>loader</code>进行加载</p><p>常见的<code>loader</code>如下：</p><ul><li>style-loader: 将css添加到DOM的内联样式标签style里</li><li>css-loader :允许将css文件通过require的方式引入，并返回css代码</li><li>less-loader: 处理less</li><li>sass-loader: 处理sass</li><li>postcss-loader: 用postcss来处理CSS</li><li>autoprefixer-loader: 处理CSS3属性前缀，已被弃用，建议直接使用postcss</li><li>file-loader: 分发文件到output目录并返回相对路径</li><li>url-loader: 和file-loader类似，但是当文件小于设定的limit时可以返回一个Data Url</li><li>html-minify-loader: 压缩HTML</li><li>babel-loader :用babel来转换ES6文件到ES</li></ul><p>下面给出一些常见的<code>loader</code>的使用：</p><h3 id="css-loader" tabindex="-1">css-loader <a class="header-anchor" href="#css-loader">¶</a></h3><p>分析 <code>css</code> 模块之间的关系，并合成⼀个 <code>css</code></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">css-loader</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save-dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">css-loader</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">rules</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    use: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      loader: </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#6A737D;">// 启用/禁用 url() 处理</span></span>
<span class="line"><span style="color:#E1E4E8;">     url: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#6A737D;">// 启用/禁用 @import 处理</span></span>
<span class="line"><span style="color:#E1E4E8;">     import: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 启用/禁用 Sourcemap</span></span>
<span class="line"><span style="color:#E1E4E8;">        sourceMap: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">rules</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    use: {</span></span>
<span class="line"><span style="color:#24292E;">      loader: </span><span style="color:#032F62;">&quot;css-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      options: {</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">// 启用/禁用 url() 处理</span></span>
<span class="line"><span style="color:#24292E;">     url: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">// 启用/禁用 @import 处理</span></span>
<span class="line"><span style="color:#24292E;">     import: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 启用/禁用 Sourcemap</span></span>
<span class="line"><span style="color:#24292E;">        sourceMap: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>如果只通过<code>css-loader</code>加载文件，这时候页面代码设置的样式并没有生效</p><p>原因在于，<code>css-loader</code>只是负责将<code>.css</code>文件进行一个解析，而并不会将解析后的<code>css</code>插入到页面中</p><p>如果我们希望再完成插入<code>style</code>的操作，那么我们还需要另外一个<code>loader</code>，就是<code>style-loader</code></p><h3 id="style-loader" tabindex="-1">style-loader <a class="header-anchor" href="#style-loader">¶</a></h3><p>把 <code>css-loader</code> 生成的内容，用 <code>style</code> 标签挂载到页面的 <code>head</code> 中</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">style-loader</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save-dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">style-loader</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">rules</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    use: [</span><span style="color:#9ECBFF;">&quot;style-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">rules</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    use: [</span><span style="color:#032F62;">&quot;style-loader&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;css-loader&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>同一个任务的 <code>loader</code> 可以同时挂载多个，处理顺序为：从右到左，从下往上</p><h3 id="less-loader" tabindex="-1">less-loader <a class="header-anchor" href="#less-loader">¶</a></h3><p>开发中，我们也常常会使用<code>less</code>、<code>sass</code>、<code>stylus</code>预处理器编写<code>css</code>样式，使开发效率提高，这里需要使用<code>less-loader</code></p><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm install less</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">loader </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm install less</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">loader </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">D</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">rules</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    use: [</span><span style="color:#9ECBFF;">&quot;style-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;less-loader&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">rules</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    use: [</span><span style="color:#032F62;">&quot;style-loader&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;css-loader&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;less-loader&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><h3 id="raw-loader" tabindex="-1">raw-loader <a class="header-anchor" href="#raw-loader">¶</a></h3><p>在 <code>webpack </code>中通过 <code>import </code>方式导入文件内容，该<code>loader </code>并不是内置的，所以首先要安装</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">raw-loader</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save-dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">raw-loader</span></span></code></pre></div><p>然后在 webpack.config.js 中进行配置</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(txt</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">md)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: </span><span style="color:#9ECBFF;">&#39;raw-loader&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">     }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  module: {</span></span>
<span class="line"><span style="color:#24292E;">      rules: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(txt</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">md)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        use: </span><span style="color:#032F62;">&#39;raw-loader&#39;</span></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="file-loader" tabindex="-1">file-loader <a class="header-anchor" href="#file-loader">¶</a></h3><p>把识别出的资源模块，移动到指定的输出⽬目录，并且返回这个资源在输出目录的地址(字符串)</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file-loader</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save-dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file-loader</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">rules</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jpe</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">g</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    use: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      loader: </span><span style="color:#9ECBFF;">&quot;file-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// placeholder 占位符 [name] 源资源模块的名称</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// [ext] 源资源模块的后缀</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&quot;[name]_[hash].[ext]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//打包后的存放位置</span></span>
<span class="line"><span style="color:#E1E4E8;">        outputPath: </span><span style="color:#9ECBFF;">&quot;./images&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 打包后文件的 url</span></span>
<span class="line"><span style="color:#E1E4E8;">        publicPath: </span><span style="color:#9ECBFF;">&#39;./images&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">rules</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(png</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">jpe</span><span style="color:#D73A49;">?</span><span style="color:#032F62;">g</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">gif)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    use: {</span></span>
<span class="line"><span style="color:#24292E;">      loader: </span><span style="color:#032F62;">&quot;file-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      options: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// placeholder 占位符 [name] 源资源模块的名称</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// [ext] 源资源模块的后缀</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&quot;[name]_[hash].[ext]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//打包后的存放位置</span></span>
<span class="line"><span style="color:#24292E;">        outputPath: </span><span style="color:#032F62;">&quot;./images&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 打包后文件的 url</span></span>
<span class="line"><span style="color:#24292E;">        publicPath: </span><span style="color:#032F62;">&#39;./images&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><h3 id="url-loader" tabindex="-1">url-loader <a class="header-anchor" href="#url-loader">¶</a></h3><p>可以处理理 <code>file-loader</code> 所有的事情，但是遇到图片格式的模块，可以选择性的把图片转成 <code>base64</code> 格式的字符串，并打包到 <code>js</code> 中，对小体积的图片比较合适，大图片不合适。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">url-loader</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save-dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">url-loader</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">rules</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jpe</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">g</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    use: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      loader: </span><span style="color:#9ECBFF;">&quot;url-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// placeholder 占位符 [name] 源资源模块的名称</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// [ext] 源资源模块的后缀</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&quot;[name]_[hash].[ext]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//打包后的存放位置</span></span>
<span class="line"><span style="color:#E1E4E8;">        outputPath: </span><span style="color:#9ECBFF;">&quot;./images&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 打包后文件的 url</span></span>
<span class="line"><span style="color:#E1E4E8;">        publicPath: </span><span style="color:#9ECBFF;">&#39;./images&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 小于 100 字节转成 base64 格式</span></span>
<span class="line"><span style="color:#E1E4E8;">        limit: </span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">rules</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(png</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">jpe</span><span style="color:#D73A49;">?</span><span style="color:#032F62;">g</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">gif)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    use: {</span></span>
<span class="line"><span style="color:#24292E;">      loader: </span><span style="color:#032F62;">&quot;url-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      options: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// placeholder 占位符 [name] 源资源模块的名称</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// [ext] 源资源模块的后缀</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&quot;[name]_[hash].[ext]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//打包后的存放位置</span></span>
<span class="line"><span style="color:#24292E;">        outputPath: </span><span style="color:#032F62;">&quot;./images&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 打包后文件的 url</span></span>
<span class="line"><span style="color:#24292E;">        publicPath: </span><span style="color:#032F62;">&#39;./images&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 小于 100 字节转成 base64 格式</span></span>
<span class="line"><span style="color:#24292E;">        limit: </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献">¶</a></h2><ul><li><a href="https://webpack.docschina.org/concepts/loaders/" target="_blank" rel="noreferrer">https://webpack.docschina.org/concepts/loaders/</a></li><li><a href="https://segmentfault.com/a/1190000018680530" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000018680530</a></li><li><a href="https://vue3js.cn/interview/" target="_blank" rel="noreferrer">https://vue3js.cn/interview/</a></li></ul>`,62),e=[o];function c(t,r,E,y,i,d){return n(),a("div",null,e)}const h=s(p,[["render",c]]);export{u as __pageData,h as default};