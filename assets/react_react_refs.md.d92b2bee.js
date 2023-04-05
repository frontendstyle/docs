import{_ as s,c as n,o as a,N as p}from"./chunks/framework.0799945b.js";const F=JSON.parse('{"title":"面试官：说说对React refs 的理解？应用场景？","description":"","frontmatter":{},"headers":[],"relativePath":"react/react_refs.md","lastUpdated":1680705882000}'),l={name:"react/react_refs.md"},o=p(`<h1 id="面试官-说说对react-refs-的理解-应用场景" tabindex="-1">面试官：说说对React refs 的理解？应用场景？ <a class="header-anchor" href="#面试官-说说对react-refs-的理解-应用场景">¶</a></h1><p><img src="https://static.vue-js.com/25162040-de02-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么">¶</a></h2><p><code>Refs</code> 在计算机中称为弹性文件系统（英语：Resilient File System，简称ReFS）</p><p><code>React</code> 中的 <code>Refs</code>提供了一种方式，允许我们访问 <code>DOM </code>节点或在 <code>render </code>方法中创建的 <code>React </code>元素</p><p>本质为<code>ReactDOM.render()</code>返回的组件实例，如果是渲染组件则返回的是组件实例，如果渲染<code>dom</code>则返回的是具体的<code>dom</code>节点</p><h2 id="二、如何使用" tabindex="-1">二、如何使用 <a class="header-anchor" href="#二、如何使用">¶</a></h2><p>创建<code>ref</code>的形式有三种：</p><ul><li>传入字符串，使用时通过 this.refs.传入的字符串的格式获取对应的元素</li><li>传入对象，对象是通过 React.createRef() 方式创建出来，使用时获取到创建的对象中存在 current 属性就是对应的元素</li><li>传入函数，该函数会在 DOM 被挂载时进行回调，这个函数会传入一个 元素对象，可以自己保存，使用时，直接拿到之前保存的元素对象即可</li><li>传入hook，hook是通过 useRef() 方式创建，使用时通过生成hook对象的 current 属性就是对应的元素</li></ul><h3 id="传入字符串" tabindex="-1">传入字符串 <a class="header-anchor" href="#传入字符串">¶</a></h3><p>只需要在对应元素或组件中<code>ref</code>属性</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyComponent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">super</span><span style="color:#E1E4E8;">(props);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.myRef </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> React.</span><span style="color:#B392F0;">createRef</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;myref&quot;</span><span style="color:#E1E4E8;"> /&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyComponent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">React</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">(props);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.myRef </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> React.</span><span style="color:#6F42C1;">createRef</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;myref&quot;</span><span style="color:#24292E;"> /&gt;;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>访问当前节点的方式如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.refs.myref.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;hello&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.refs.myref.innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;hello&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="传入对象" tabindex="-1">传入对象 <a class="header-anchor" href="#传入对象">¶</a></h3><p><code>refs</code>通过<code>React.createRef()</code>创建，然后将<code>ref</code>属性添加到<code>React</code>元素中，如下：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyComponent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">super</span><span style="color:#E1E4E8;">(props);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.myRef </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> React.</span><span style="color:#B392F0;">createRef</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.myRef} /&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyComponent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">React</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">(props);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.myRef </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> React.</span><span style="color:#6F42C1;">createRef</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.myRef} /&gt;;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>当 <code>ref</code> 被传递给 <code>render</code> 中的元素时，对该节点的引用可以在 <code>ref</code> 的 <code>current</code> 属性中访问</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">node</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.myRef.current;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">node</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.myRef.current;</span></span></code></pre></div><h3 id="传入函数" tabindex="-1">传入函数 <a class="header-anchor" href="#传入函数">¶</a></h3><p>当<code>ref</code>传入为一个函数的时候，在渲染过程中，回调函数参数会传入一个元素对象，然后通过实例将对象进行保存</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyComponent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">super</span><span style="color:#E1E4E8;">(props);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.myRef </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> React.</span><span style="color:#B392F0;">createRef</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.myref </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element} /&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyComponent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">React</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">(props);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.myRef </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> React.</span><span style="color:#6F42C1;">createRef</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span><span style="color:#E36209;">element</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.myref </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element} /&gt;;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>获取<code>ref</code>对象只需要通过先前存储的对象即可</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">node</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.myref</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">node</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.myref</span></span></code></pre></div><h3 id="传入hook" tabindex="-1">传入hook <a class="header-anchor" href="#传入hook">¶</a></h3><p>通过<code>useRef</code>创建一个<code>ref</code>，整体使用方式与<code>React.createRef</code>一致</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">App</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">myref</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useRef</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{myref}&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">App</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">myref</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useRef</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">    &lt;&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{myref}&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292E;">  )</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>获取<code>ref</code>属性也是通过<code>hook</code>对象的<code>current</code>属性</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">node</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> myref.current;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">node</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> myref.current;</span></span></code></pre></div><p>上述三种情况都是<code>ref</code>属性用于原生<code>HTML</code>元素上，如果<code>ref</code>设置的组件为一个类组件的时候，<code>ref</code>对象接收到的是组件的挂载实例</p><p>注意的是，不能在函数组件上使用<code>ref</code>属性，因为他们并没有实例</p><h2 id="三、应用场景" tabindex="-1">三、应用场景 <a class="header-anchor" href="#三、应用场景">¶</a></h2><p>在某些情况下，我们会通过使用<code>refs</code>来更新组件，但这种方式并不推荐，更多情况我们是通过<code>props</code>与<code>state</code>的方式进行去重新渲染子元素</p><p>过多使用<code>refs</code>，会使组件的实例或者是<code>DOM</code>结构暴露，违反组件封装的原则</p><p>例如，避免在 <code>Dialog</code> 组件里暴露 <code>open()</code> 和 <code>close()</code> 方法，最好传递 <code>isOpen</code> 属性</p><p>但下面的场景使用<code>refs</code>非常有用：</p><ul><li>对Dom元素的焦点控制、内容选择、控制</li><li>对Dom元素的内容设置及媒体播放</li><li>对Dom元素的操作和对组件实例的操作</li><li>集成第三方 DOM 库</li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献">¶</a></h2><ul><li><a href="https://zh-hans.reactjs.org/docs/refs-and-the-dom.html" target="_blank" rel="noreferrer">https://zh-hans.reactjs.org/docs/refs-and-the-dom.html</a></li><li><a href="https://segmentfault.com/a/1190000020842342" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000020842342</a></li><li><a href="https://vue3js.cn/interview" target="_blank" rel="noreferrer">https://vue3js.cn/interview</a></li></ul>`,39),e=[o];function c(t,r,E,y,i,d){return a(),n("div",null,e)}const f=s(l,[["render",c]]);export{F as __pageData,f as default};
