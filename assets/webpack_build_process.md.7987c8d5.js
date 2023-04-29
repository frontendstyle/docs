import{_ as s,c as n,o as a,N as l}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"面试官：说说webpack的构建流程?","description":"","frontmatter":{},"headers":[],"relativePath":"webpack/build_process.md","lastUpdated":1680705882000}'),p={name:"webpack/build_process.md"},o=l(`<h1 id="面试官-说说webpack的构建流程" tabindex="-1">面试官：说说webpack的构建流程? <a class="header-anchor" href="#面试官-说说webpack的构建流程">¶</a></h1><p><img src="https://static.vue-js.com/96cf6840-a658-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、运行流程" tabindex="-1">一、运行流程 <a class="header-anchor" href="#一、运行流程">¶</a></h2><p><code>webpack</code> 的运行流程是一个串行的过程，它的工作流程就是将各个插件串联起来</p><p>在运行过程中会广播事件，插件只需要监听它所关心的事件，就能加入到这条<code>webpack</code>机制中，去改变<code>webpack</code>的运作，使得整个系统扩展性良好</p><p>从启动到结束会依次执行以下三大步骤：</p><ul><li>初始化流程：从配置文件和 <code>Shell</code> 语句中读取与合并参数，并初始化需要使用的插件和配置插件等执行环境所需要的参数</li><li>编译构建流程：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理</li><li>输出流程：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统</li></ul><p><img src="https://static.vue-js.com/b566d400-a658-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h3 id="初始化流程" tabindex="-1">初始化流程 <a class="header-anchor" href="#初始化流程">¶</a></h3><p>从配置文件和 <code>Shell</code> 语句中读取与合并参数，得出最终的参数</p><p>配置文件默认下为<code>webpack.config.js</code>，也或者通过命令的形式指定配置文件，主要作用是用于激活<code>webpack</code>的加载项和插件</p><p>关于文件配置内容分析，如下注释：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> node_modules </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;node_modules&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> pathToReact </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(node_modules, </span><span style="color:#9ECBFF;">&#39;react/dist/react.min.js&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 入口文件，是模块构建的起点，同时每一个入口文件对应最后生成的一个 chunk。</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: </span><span style="color:#9ECBFF;">&#39;./path/to/my/entry/file.js&#39;</span><span style="color:#E1E4E8;">，</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 文件路径指向(可加快打包过程)。</span></span>
<span class="line"><span style="color:#E1E4E8;">  resolve: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    alias: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;react&#39;</span><span style="color:#E1E4E8;">: pathToReact</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 生成文件，是模块构建的终点，包括输出文件与输出路径。</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;build&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&#39;[name].js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 这里配置了处理各模块的 loader ，包括 css 预处理 loader ，es6 编译 loader，图片处理 loader。</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    loaders: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        loader: </span><span style="color:#9ECBFF;">&#39;babel&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        query: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          presets: [</span><span style="color:#9ECBFF;">&#39;es2015&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;react&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    noParse: [pathToReact]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// webpack 各插件对象，在 webpack 的事件流中执行对应的方法。</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> webpack.</span><span style="color:#B392F0;">HotModuleReplacementPlugin</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> path </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> node_modules </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;node_modules&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> pathToReact </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(node_modules, </span><span style="color:#032F62;">&#39;react/dist/react.min.js&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 入口文件，是模块构建的起点，同时每一个入口文件对应最后生成的一个 chunk。</span></span>
<span class="line"><span style="color:#24292E;">  entry: </span><span style="color:#032F62;">&#39;./path/to/my/entry/file.js&#39;</span><span style="color:#24292E;">，</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 文件路径指向(可加快打包过程)。</span></span>
<span class="line"><span style="color:#24292E;">  resolve: {</span></span>
<span class="line"><span style="color:#24292E;">    alias: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;react&#39;</span><span style="color:#24292E;">: pathToReact</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 生成文件，是模块构建的终点，包括输出文件与输出路径。</span></span>
<span class="line"><span style="color:#24292E;">  output: {</span></span>
<span class="line"><span style="color:#24292E;">    path: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;build&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    filename: </span><span style="color:#032F62;">&#39;[name].js&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 这里配置了处理各模块的 loader ，包括 css 预处理 loader ，es6 编译 loader，图片处理 loader。</span></span>
<span class="line"><span style="color:#24292E;">  module: {</span></span>
<span class="line"><span style="color:#24292E;">    loaders: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        loader: </span><span style="color:#032F62;">&#39;babel&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        query: {</span></span>
<span class="line"><span style="color:#24292E;">          presets: [</span><span style="color:#032F62;">&#39;es2015&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;react&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    noParse: [pathToReact]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// webpack 各插件对象，在 webpack 的事件流中执行对应的方法。</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> webpack.</span><span style="color:#6F42C1;">HotModuleReplacementPlugin</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p><code>webpack</code> 将 <code>webpack.config.js</code> 中的各个配置项拷贝到 <code>options</code> 对象中，并加载用户配置的 <code> plugins</code></p><p>完成上述步骤之后，则开始初始化<code>Compiler</code>编译对象，该对象掌控者<code>webpack</code>声明周期，不执行具体的任务，只是进行一些调度工作</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Compiler</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Tapable</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">context</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.hooks </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            beforeCompile: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AsyncSeriesHook</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&quot;params&quot;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">            compile: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SyncHook</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&quot;params&quot;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">            afterCompile: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AsyncSeriesHook</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&quot;compilation&quot;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">            make: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AsyncParallelHook</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&quot;compilation&quot;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">            entryOption: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SyncBailHook</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&quot;context&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;entry&quot;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 定义了很多不同类型的钩子</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">webpack</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> compiler </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Compiler</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#6A737D;">// 检查options,若watch字段为true,则开启watch线程</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> compiler;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Compiler</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Tapable</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">context</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.hooks </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            beforeCompile: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AsyncSeriesHook</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&quot;params&quot;</span><span style="color:#24292E;">]),</span></span>
<span class="line"><span style="color:#24292E;">            compile: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SyncHook</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&quot;params&quot;</span><span style="color:#24292E;">]),</span></span>
<span class="line"><span style="color:#24292E;">            afterCompile: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AsyncSeriesHook</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&quot;compilation&quot;</span><span style="color:#24292E;">]),</span></span>
<span class="line"><span style="color:#24292E;">            make: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AsyncParallelHook</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&quot;compilation&quot;</span><span style="color:#24292E;">]),</span></span>
<span class="line"><span style="color:#24292E;">            entryOption: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SyncBailHook</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&quot;context&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;entry&quot;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 定义了很多不同类型的钩子</span></span>
<span class="line"><span style="color:#24292E;">        };</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">webpack</span><span style="color:#24292E;">(</span><span style="color:#E36209;">options</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> compiler </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Compiler</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span><span style="color:#6A737D;">// 检查options,若watch字段为true,则开启watch线程</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> compiler;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span></code></pre></div><p><code>Compiler</code> 对象继承自 <code>Tapable</code>，初始化时定义了很多钩子函数</p><h3 id="编译构建流程" tabindex="-1">编译构建流程 <a class="header-anchor" href="#编译构建流程">¶</a></h3><p>根据配置中的 <code>entry</code> 找出所有的入口文件</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: </span><span style="color:#9ECBFF;">&#39;./src/file.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  entry: </span><span style="color:#032F62;">&#39;./src/file.js&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>初始化完成后会调用<code>Compiler</code>的<code>run</code>来真正启动<code>webpack</code>编译构建流程，主要流程如下：</p><ul><li><code>compile</code> 开始编译</li><li><code>make</code> 从入口点分析模块及其依赖的模块，创建这些模块对象</li><li><code>build-module</code> 构建模块</li><li><code>seal</code> 封装构建结果</li><li><code>emit</code> 把各个chunk输出到结果文件</li></ul><h4 id="compile-编译" tabindex="-1">compile 编译 <a class="header-anchor" href="#compile-编译">¶</a></h4><p>执行了<code>run</code>方法后，首先会触发<code>compile</code>，主要是构建一个<code>Compilation</code>对象</p><p>该对象是编译阶段的主要执行者，主要会依次下述流程：执行模块创建、依赖收集、分块、打包等主要任务的对象</p><h4 id="make-编译模块" tabindex="-1">make 编译模块 <a class="header-anchor" href="#make-编译模块">¶</a></h4><p>当完成了上述的<code>compilation</code>对象后，就开始从<code>Entry</code>入口文件开始读取，主要执行<code>_addModuleChain()</code>函数，如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">_addModuleChain</span><span style="color:#E1E4E8;">(context, dependency, onModule, callback) {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// 根据依赖查找对应的工厂函数</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Dep</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">/** </span><span style="color:#F97583;">@type</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{DepConstructor}</span><span style="color:#6A737D;"> */</span><span style="color:#E1E4E8;"> (dependency.</span><span style="color:#79B8FF;">constructor</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">moduleFactory</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.dependencyFactories.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(Dep);</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// 调用工厂函数NormalModuleFactory的create来生成一个空的NormalModule对象</span></span>
<span class="line"><span style="color:#E1E4E8;">   moduleFactory.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">       dependencies: [dependency]</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">   }, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">module</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">afterBuild</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">processModuleDependencies</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">callback</span><span style="color:#E1E4E8;">(err);</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#B392F0;">callback</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">           });</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">buildModule</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#B392F0;">afterBuild</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">       })</span></span>
<span class="line"><span style="color:#E1E4E8;">   })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">_addModuleChain</span><span style="color:#24292E;">(context, dependency, onModule, callback) {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// 根据依赖查找对应的工厂函数</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Dep</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">/** </span><span style="color:#D73A49;">@type</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{DepConstructor}</span><span style="color:#6A737D;"> */</span><span style="color:#24292E;"> (dependency.</span><span style="color:#005CC5;">constructor</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">moduleFactory</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.dependencyFactories.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(Dep);</span></span>
<span class="line"><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// 调用工厂函数NormalModuleFactory的create来生成一个空的NormalModule对象</span></span>
<span class="line"><span style="color:#24292E;">   moduleFactory.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">       dependencies: [dependency]</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">   }, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">module</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">afterBuild</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">processModuleDependencies</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">module</span><span style="color:#24292E;">, </span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">callback</span><span style="color:#24292E;">(err);</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6F42C1;">callback</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">module</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">           });</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">       </span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">buildModule</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">module</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#6F42C1;">afterBuild</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">       })</span></span>
<span class="line"><span style="color:#24292E;">   })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>过程如下：</p><p><code>_addModuleChain</code>中接收参数<code>dependency</code>传入的入口依赖，使用对应的工厂函数<code>NormalModuleFactory.create</code>方法生成一个空的<code>module</code>对象</p><p>回调中会把此<code>module</code>存入<code>compilation.modules</code>对象和<code>dependencies.module</code>对象中，由于是入口文件，也会存入<code>compilation.entries</code>中</p><p>随后执行<code>buildModule</code>进入真正的构建模块<code>module</code>内容的过程</p><h4 id="build-module-完成模块编译" tabindex="-1">build module 完成模块编译 <a class="header-anchor" href="#build-module-完成模块编译">¶</a></h4><p>这里主要调用配置的<code>loaders</code>，将我们的模块转成标准的<code>JS</code>模块</p><p>在用<code> Loader</code> 对一个模块转换完后，使用 <code>acorn</code> 解析转换后的内容，输出对应的抽象语法树（<code>AST</code>），以方便 <code>Webpack </code>后面对代码的分析</p><p>从配置的入口模块开始，分析其 <code>AST</code>，当遇到<code>require</code>等导入其它模块语句时，便将其加入到依赖的模块列表，同时对新找出的依赖模块递归分析，最终搞清所有模块的依赖关系</p><h3 id="输出流程" tabindex="-1">输出流程 <a class="header-anchor" href="#输出流程">¶</a></h3><h4 id="seal-输出资源" tabindex="-1">seal 输出资源 <a class="header-anchor" href="#seal-输出资源">¶</a></h4><p><code>seal</code>方法主要是要生成<code>chunks</code>，对<code>chunks</code>进行一系列的优化操作，并生成要输出的代码</p><p><code>webpack</code> 中的 <code>chunk</code> ，可以理解为配置在 <code>entry</code> 中的模块，或者是动态引入的模块</p><p>根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 <code>Chunk</code>，再把每个 <code>Chunk</code> 转换成一个单独的文件加入到输出列表</p><h4 id="emit-输出完成" tabindex="-1">emit 输出完成 <a class="header-anchor" href="#emit-输出完成">¶</a></h4><p>在确定好输出内容后，根据配置确定输出的路径和文件名</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">output</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;build&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">filename</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;[name].js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">output</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;build&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">filename</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;[name].js&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在 <code>Compiler</code> 开始生成文件前，钩子 <code>emit</code> 会被执行，这是我们修改最终文件的最后一个机会</p><p>从而<code>webpack</code>整个打包过程则结束了</p><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结">¶</a></h3><p><img src="https://static.vue-js.com/d77fc560-a658-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献">¶</a></h2><ul><li><a href="https://github.com/Cosen95/blog/issues/48" target="_blank" rel="noreferrer">https://github.com/Cosen95/blog/issues/48</a></li><li><a href="https://developer.aliyun.com/article/61047" target="_blank" rel="noreferrer">https://developer.aliyun.com/article/61047</a></li></ul>`,50),e=[o];function c(t,r,E,y,i,d){return a(),n("div",null,e)}const h=s(p,[["render",c]]);export{u as __pageData,h as default};
