import{_ as s,c as n,o as a,N as l}from"./chunks/framework.0799945b.js";const g=JSON.parse('{"title":"面试官：说说对 React 的理解？有哪些特性？","description":"","frontmatter":{},"headers":[],"relativePath":"react/index.md","lastUpdated":1680705882000}'),p={name:"react/index.md"},o=l(`<h1 id="面试官-说说对-react-的理解-有哪些特性" tabindex="-1">面试官：说说对 React 的理解？有哪些特性？ <a class="header-anchor" href="#面试官-说说对-react-的理解-有哪些特性">¶</a></h1><p><img src="https://static.vue-js.com/671f5a90-d265-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么">¶</a></h2><p>React，用于构建用户界面的 JavaScript 库，只提供了 UI 层面的解决方案</p><p>遵循组件设计模式、声明式编程范式和函数式编程概念，以使前端应用程序更高效</p><p>使用虚拟 <code>DOM</code> 来有效地操作 <code>DOM</code>，遵循从高阶组件到低阶组件的单向数据流</p><p>帮助我们将界面成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套，构成整体页面</p><p><code>react</code> 类组件使用一个名为 <code>render()</code> 的方法或者函数组件<code>return</code>，接收输入的数据并返回需要展示的内容</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HelloMessage</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;Hello {</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.props.name}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ReactDOM.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">HelloMessage</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Taylor&quot;</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hello-example&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HelloMessage</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">React</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;Hello {</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.props.name}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">ReactDOM.</span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#005CC5;">HelloMessage</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;Taylor&quot;</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">  document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hello-example&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div><p>上述这种类似 <code>XML</code> 形式就是 <code>JSX</code>，最终会被 <code>babel</code> 编译为合法的 <code>JS</code> 语句调用</p><p>被传入的数据可在组件中通过 <code>this.props</code> 在 <code>render()</code> 访问</p><h2 id="二、特性" tabindex="-1">二、特性 <a class="header-anchor" href="#二、特性">¶</a></h2><p><code>React</code> 特性有很多，如：</p><ul><li>JSX 语法</li><li>单向数据绑定</li><li>虚拟 DOM</li><li>声明式编程</li><li>Component</li></ul><p>着重介绍下声明式编程及 Component</p><h3 id="声明式编程" tabindex="-1">声明式编程 <a class="header-anchor" href="#声明式编程">¶</a></h3><p>声明式编程是一种编程范式，它关注的是你要做什么，而不是如何做</p><p>它表达逻辑而不显式地定义步骤。这意味着我们需要根据逻辑的计算来声明要显示的组件</p><p>如实现一个标记的地图：</p><p>通过命令式创建地图、创建标记、以及在地图上添加的标记的步骤如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 创建地图</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">map</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Map.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;map&quot;</span><span style="color:#E1E4E8;">), {</span></span>
<span class="line"><span style="color:#E1E4E8;">  zoom: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  center: { lat, lng },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建标记</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">marker</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Map.</span><span style="color:#B392F0;">marker</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  position: { lat, lng },</span></span>
<span class="line"><span style="color:#E1E4E8;">  title: </span><span style="color:#9ECBFF;">&quot;Hello Marker&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 地图上添加标记</span></span>
<span class="line"><span style="color:#E1E4E8;">marker.</span><span style="color:#B392F0;">setMap</span><span style="color:#E1E4E8;">(map);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 创建地图</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">map</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Map.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;map&quot;</span><span style="color:#24292E;">), {</span></span>
<span class="line"><span style="color:#24292E;">  zoom: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  center: { lat, lng },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建标记</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">marker</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Map.</span><span style="color:#6F42C1;">marker</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  position: { lat, lng },</span></span>
<span class="line"><span style="color:#24292E;">  title: </span><span style="color:#032F62;">&quot;Hello Marker&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 地图上添加标记</span></span>
<span class="line"><span style="color:#24292E;">marker.</span><span style="color:#6F42C1;">setMap</span><span style="color:#24292E;">(map);</span></span></code></pre></div><p>而用 <code>React</code> 实现上述功能则如下：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Map</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">zoom</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">} </span><span style="color:#B392F0;">center</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{(lat, lng)}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">Marker</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">position</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{(lat, lng)} </span><span style="color:#B392F0;">title</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&quot;Hello Marker&quot;</span><span style="color:#E1E4E8;">} /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#79B8FF;">Map</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">Map</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">zoom</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">} </span><span style="color:#6F42C1;">center</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{(lat, lng)}&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#005CC5;">Marker</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">position</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{(lat, lng)} </span><span style="color:#6F42C1;">title</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span><span style="color:#032F62;">&quot;Hello Marker&quot;</span><span style="color:#24292E;">} /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#005CC5;">Map</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>声明式编程方式使得 <code>React</code> 组件很容易使用，最终的代码简单易于维护</p><h3 id="component" tabindex="-1">Component <a class="header-anchor" href="#component">¶</a></h3><p>在 <code>React</code> 中，一切皆为组件。通常将应用程序的整个逻辑分解为小的单个部分。 我们将每个单独的部分称为组件</p><p>组件可以是一个函数或者是一个类，接受数据输入，处理它并返回在 <code>UI</code> 中呈现的 <code>React</code> 元素</p><p>函数式组件如下：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Header</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">Jumbotron</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{{ backgroundColor: </span><span style="color:#9ECBFF;">&quot;orange&quot;</span><span style="color:#E1E4E8;"> }}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;TODO App&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#79B8FF;">Jumbotron</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Header</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#005CC5;">Jumbotron</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{{ backgroundColor: </span><span style="color:#032F62;">&quot;orange&quot;</span><span style="color:#24292E;"> }}&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;TODO App&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#005CC5;">Jumbotron</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p>类组件（有状态组件）如下：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Dashboard</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">super</span><span style="color:#E1E4E8;">(props);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.state </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">className</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;dashboard&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">ToDoForm</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">ToDolist</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Dashboard</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">React</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">(props);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.state </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">className</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;dashboard&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#005CC5;">ToDoForm</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#005CC5;">ToDolist</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>一个组件该有的特点如下：</p><ul><li>可组合：每个组件易于和其它组件一起使用，或者嵌套在另一个组件内部</li><li>可重用：每个组件都是具有独立功能的，它可以被使用在多个 UI 场景</li><li>可维护：每个小的组件仅仅包含自身的逻辑，更容易被理解和维护</li></ul><h2 id="三、优势" tabindex="-1">三、优势 <a class="header-anchor" href="#三、优势">¶</a></h2><p>通过上面的初步了解，可以感受到 <code>React</code> 存在的优势：</p><ul><li>高效灵活</li><li>声明式的设计，简单使用</li><li>组件式开发，提高代码复用率</li><li>单向响应的数据流会比双向绑定的更安全，速度更快</li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献">¶</a></h2><ul><li><a href="https://segmentfault.com/a/1190000015924762" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000015924762</a></li><li><a href="https://react.docschina.org/" target="_blank" rel="noreferrer">https://react.docschina.org/</a></li></ul>`,38),e=[o];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{g as __pageData,h as default};
