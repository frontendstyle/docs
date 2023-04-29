import{_ as s,c as n,o as a,N as l}from"./chunks/framework.0799945b.js";const F=JSON.parse('{"title":"面试官：JavaScript中执行上下文和执行栈是什么？","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/context_stack.md","lastUpdated":1680705882000}'),p={name:"javascript/context_stack.md"},o=l(`<h1 id="面试官-javascript中执行上下文和执行栈是什么" tabindex="-1">面试官：JavaScript中执行上下文和执行栈是什么？ <a class="header-anchor" href="#面试官-javascript中执行上下文和执行栈是什么">¶</a></h1><p><img src="https://static.vue-js.com/8652b710-74c1-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、执行上下文" tabindex="-1">一、执行上下文 <a class="header-anchor" href="#一、执行上下文">¶</a></h2><p>简单的来说，执行上下文是一种对<code>Javascript</code>代码执行环境的抽象概念，也就是说只要有<code>Javascript</code>代码运行，那么它就一定是运行在执行上下文中</p><p>执行上下文的类型分为三种：</p><ul><li>全局执行上下文：只有一个，浏览器中的全局对象就是 <code>window </code>对象，<code>this</code> 指向这个全局对象</li><li>函数执行上下文：存在无数个，只有在函数被调用的时候才会被创建，每次调用函数都会创建一个新的执行上下文</li><li>Eval 函数执行上下文： 指的是运行在 <code>eval</code> 函数中的代码，很少用而且不建议使用</li></ul><p>下面给出全局上下文和函数上下文的例子：</p><p><img src="https://static.vue-js.com/90dd3b60-74c1-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>紫色框住的部分为全局上下文，蓝色和橘色框起来的是不同的函数上下文。只有全局上下文（的变量）能被其他任何上下文访问</p><p>可以有任意多个函数上下文，每次调用函数创建一个新的上下文，会创建一个私有作用域，函数内部声明的任何变量都不能在当前函数作用域外部直接访问</p><h2 id="二、生命周期" tabindex="-1">二、生命周期 <a class="header-anchor" href="#二、生命周期">¶</a></h2><p>执行上下文的生命周期包括三个阶段：创建阶段 → 执行阶段 → 回收阶段</p><h3 id="创建阶段" tabindex="-1">创建阶段 <a class="header-anchor" href="#创建阶段">¶</a></h3><p>创建阶段即当函数被调用，但未执行任何其内部代码之前</p><p>创建阶段做了三件事：</p><ul><li>确定 this 的值，也被称为 <code>This Binding</code></li><li>LexicalEnvironment（词法环境） 组件被创建</li><li>VariableEnvironment（变量环境） 组件被创建</li></ul><p>伪代码如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">ExecutionContext </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {  </span></span>
<span class="line"><span style="color:#E1E4E8;">  ThisBinding </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">this</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">&gt;,     // 确定this </span></span>
<span class="line"><span style="color:#E1E4E8;">  LexicalEnvironment = { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> },   // 词法环境</span></span>
<span class="line"><span style="color:#E1E4E8;">  VariableEnvironment = { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> },  // 变量环境</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">ExecutionContext </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {  </span></span>
<span class="line"><span style="color:#24292E;">  ThisBinding </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">this</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">&gt;,     // 确定this </span></span>
<span class="line"><span style="color:#24292E;">  LexicalEnvironment = { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> },   // 词法环境</span></span>
<span class="line"><span style="color:#24292E;">  VariableEnvironment = { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> },  // 变量环境</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="this-binding" tabindex="-1">This Binding <a class="header-anchor" href="#this-binding">¶</a></h4><p>确定<code>this</code>的值我们前面讲到，<code>this</code>的值是在执行的时候才能确认，定义的时候不能确认</p><h4 id="词法环境" tabindex="-1">词法环境 <a class="header-anchor" href="#词法环境">¶</a></h4><p>词法环境有两个组成部分：</p><ul><li><p>全局环境：是一个没有外部环境的词法环境，其外部环境引用为<code> null</code>，有一个全局对象，<code>this</code> 的值指向这个全局对象</p></li><li><p>函数环境：用户在函数中定义的变量被存储在环境记录中，包含了<code>arguments</code> 对象，外部环境的引用可以是全局环境，也可以是包含内部函数的外部函数环境</p></li></ul><p>伪代码如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">GlobalExectionContext </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {  </span><span style="color:#6A737D;">// 全局执行上下文</span></span>
<span class="line"><span style="color:#E1E4E8;">  LexicalEnvironment: {       </span><span style="color:#6A737D;">// 词法环境</span></span>
<span class="line"><span style="color:#E1E4E8;">    EnvironmentRecord: {     </span><span style="color:#6A737D;">// 环境记录</span></span>
<span class="line"><span style="color:#E1E4E8;">      Type: </span><span style="color:#9ECBFF;">&quot;Object&quot;</span><span style="color:#E1E4E8;">,           </span><span style="color:#6A737D;">// 全局环境</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 标识符绑定在这里 </span></span>
<span class="line"><span style="color:#E1E4E8;">      outer: &lt;</span><span style="color:#85E89D;">null</span><span style="color:#E1E4E8;">&gt;           // 对外部环境的引用</span></span>
<span class="line"><span style="color:#E1E4E8;">  }  </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">FunctionExectionContext = { </span><span style="color:#6A737D;">// 函数执行上下文</span></span>
<span class="line"><span style="color:#E1E4E8;">  LexicalEnvironment: {     </span><span style="color:#6A737D;">// 词法环境</span></span>
<span class="line"><span style="color:#E1E4E8;">    EnvironmentRecord: {    </span><span style="color:#6A737D;">// 环境记录</span></span>
<span class="line"><span style="color:#E1E4E8;">      Type: </span><span style="color:#9ECBFF;">&quot;Declarative&quot;</span><span style="color:#E1E4E8;">,      </span><span style="color:#6A737D;">// 函数环境</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 标识符绑定在这里      // 对外部环境的引用</span></span>
<span class="line"><span style="color:#E1E4E8;">      outer: &lt;</span><span style="color:#79B8FF;">Global</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">or</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">outer</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">environment</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reference</span><span style="color:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="color:#E1E4E8;">  }  </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">GlobalExectionContext </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {  </span><span style="color:#6A737D;">// 全局执行上下文</span></span>
<span class="line"><span style="color:#24292E;">  LexicalEnvironment: {       </span><span style="color:#6A737D;">// 词法环境</span></span>
<span class="line"><span style="color:#24292E;">    EnvironmentRecord: {     </span><span style="color:#6A737D;">// 环境记录</span></span>
<span class="line"><span style="color:#24292E;">      Type: </span><span style="color:#032F62;">&quot;Object&quot;</span><span style="color:#24292E;">,           </span><span style="color:#6A737D;">// 全局环境</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 标识符绑定在这里 </span></span>
<span class="line"><span style="color:#24292E;">      outer: &lt;</span><span style="color:#22863A;">null</span><span style="color:#24292E;">&gt;           // 对外部环境的引用</span></span>
<span class="line"><span style="color:#24292E;">  }  </span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">FunctionExectionContext = { </span><span style="color:#6A737D;">// 函数执行上下文</span></span>
<span class="line"><span style="color:#24292E;">  LexicalEnvironment: {     </span><span style="color:#6A737D;">// 词法环境</span></span>
<span class="line"><span style="color:#24292E;">    EnvironmentRecord: {    </span><span style="color:#6A737D;">// 环境记录</span></span>
<span class="line"><span style="color:#24292E;">      Type: </span><span style="color:#032F62;">&quot;Declarative&quot;</span><span style="color:#24292E;">,      </span><span style="color:#6A737D;">// 函数环境</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 标识符绑定在这里      // 对外部环境的引用</span></span>
<span class="line"><span style="color:#24292E;">      outer: &lt;</span><span style="color:#005CC5;">Global</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">or</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">outer</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">environment</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reference</span><span style="color:#24292E;">&gt;  </span></span>
<span class="line"><span style="color:#24292E;">  }  </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="变量环境" tabindex="-1">变量环境 <a class="header-anchor" href="#变量环境">¶</a></h4><p>变量环境也是一个词法环境，因此它具有上面定义的词法环境的所有属性</p><p>在 ES6 中，词法环境和变量环境的区别在于前者用于存储函数声明和变量（ <code>let</code> 和 <code>const</code> ）绑定，而后者仅用于存储变量（ <code>var</code> ）绑定</p><p>举个例子</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">;  </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">b</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">;  </span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> c;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">multiply</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">f</span><span style="color:#E1E4E8;">) {  </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> g </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">;  </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> e </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> f </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> g;  </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">c </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">multiply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">;  </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">b</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">;  </span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> c;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">multiply</span><span style="color:#24292E;">(</span><span style="color:#E36209;">e</span><span style="color:#24292E;">, </span><span style="color:#E36209;">f</span><span style="color:#24292E;">) {  </span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> g </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">;  </span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> e </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> f </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> g;  </span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">c </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">multiply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">);</span></span></code></pre></div><p>执行上下文如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">GlobalExectionContext </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  ThisBinding: &lt;</span><span style="color:#79B8FF;">Global</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Object</span><span style="color:#E1E4E8;">&gt;,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  LexicalEnvironment: {  </span><span style="color:#6A737D;">// 词法环境</span></span>
<span class="line"><span style="color:#E1E4E8;">    EnvironmentRecord: {  </span></span>
<span class="line"><span style="color:#E1E4E8;">      Type: </span><span style="color:#9ECBFF;">&quot;Object&quot;</span><span style="color:#E1E4E8;">,  </span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 标识符绑定在这里  </span></span>
<span class="line"><span style="color:#E1E4E8;">      a: &lt; </span><span style="color:#85E89D;">uninitialized</span><span style="color:#E1E4E8;"> &gt;,  </span></span>
<span class="line"><span style="color:#E1E4E8;">      b: &lt; </span><span style="color:#85E89D;">uninitialized</span><span style="color:#E1E4E8;"> &gt;,  </span></span>
<span class="line"><span style="color:#E1E4E8;">      multiply: &lt; </span><span style="color:#85E89D;">func</span><span style="color:#E1E4E8;"> &gt;  </span></span>
<span class="line"><span style="color:#E1E4E8;">    }  </span></span>
<span class="line"><span style="color:#E1E4E8;">    outer: &lt;</span><span style="color:#85E89D;">null</span><span style="color:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  VariableEnvironment: {  </span><span style="color:#6A737D;">// 变量环境</span></span>
<span class="line"><span style="color:#E1E4E8;">    EnvironmentRecord: {  </span></span>
<span class="line"><span style="color:#E1E4E8;">      Type: </span><span style="color:#9ECBFF;">&quot;Object&quot;</span><span style="color:#E1E4E8;">,  </span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 标识符绑定在这里  </span></span>
<span class="line"><span style="color:#E1E4E8;">      c: </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">,  </span></span>
<span class="line"><span style="color:#E1E4E8;">    }  </span></span>
<span class="line"><span style="color:#E1E4E8;">    outer: &lt;</span><span style="color:#85E89D;">null</span><span style="color:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="color:#E1E4E8;">  }  </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">FunctionExectionContext = {  </span></span>
<span class="line"><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#E1E4E8;">  ThisBinding: &lt;</span><span style="color:#79B8FF;">Global</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Object</span><span style="color:#E1E4E8;">&gt;,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  LexicalEnvironment: {  </span></span>
<span class="line"><span style="color:#E1E4E8;">    EnvironmentRecord: {  </span></span>
<span class="line"><span style="color:#E1E4E8;">      Type: </span><span style="color:#9ECBFF;">&quot;Declarative&quot;</span><span style="color:#E1E4E8;">,  </span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 标识符绑定在这里  </span></span>
<span class="line"><span style="color:#E1E4E8;">      Arguments: {</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">, length: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">},  </span></span>
<span class="line"><span style="color:#E1E4E8;">    },  </span></span>
<span class="line"><span style="color:#E1E4E8;">    outer: &lt;</span><span style="color:#79B8FF;">GlobalLexicalEnvironment</span><span style="color:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  VariableEnvironment: {  </span></span>
<span class="line"><span style="color:#E1E4E8;">    EnvironmentRecord: {  </span></span>
<span class="line"><span style="color:#E1E4E8;">      Type: </span><span style="color:#9ECBFF;">&quot;Declarative&quot;</span><span style="color:#E1E4E8;">,  </span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 标识符绑定在这里  </span></span>
<span class="line"><span style="color:#E1E4E8;">      g: </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">    },  </span></span>
<span class="line"><span style="color:#E1E4E8;">    outer: &lt;</span><span style="color:#79B8FF;">GlobalLexicalEnvironment</span><span style="color:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="color:#E1E4E8;">  }  </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">GlobalExectionContext </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  ThisBinding: &lt;</span><span style="color:#005CC5;">Global</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object</span><span style="color:#24292E;">&gt;,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  LexicalEnvironment: {  </span><span style="color:#6A737D;">// 词法环境</span></span>
<span class="line"><span style="color:#24292E;">    EnvironmentRecord: {  </span></span>
<span class="line"><span style="color:#24292E;">      Type: </span><span style="color:#032F62;">&quot;Object&quot;</span><span style="color:#24292E;">,  </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 标识符绑定在这里  </span></span>
<span class="line"><span style="color:#24292E;">      a: &lt; </span><span style="color:#22863A;">uninitialized</span><span style="color:#24292E;"> &gt;,  </span></span>
<span class="line"><span style="color:#24292E;">      b: &lt; </span><span style="color:#22863A;">uninitialized</span><span style="color:#24292E;"> &gt;,  </span></span>
<span class="line"><span style="color:#24292E;">      multiply: &lt; </span><span style="color:#22863A;">func</span><span style="color:#24292E;"> &gt;  </span></span>
<span class="line"><span style="color:#24292E;">    }  </span></span>
<span class="line"><span style="color:#24292E;">    outer: &lt;</span><span style="color:#22863A;">null</span><span style="color:#24292E;">&gt;  </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  VariableEnvironment: {  </span><span style="color:#6A737D;">// 变量环境</span></span>
<span class="line"><span style="color:#24292E;">    EnvironmentRecord: {  </span></span>
<span class="line"><span style="color:#24292E;">      Type: </span><span style="color:#032F62;">&quot;Object&quot;</span><span style="color:#24292E;">,  </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 标识符绑定在这里  </span></span>
<span class="line"><span style="color:#24292E;">      c: </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">,  </span></span>
<span class="line"><span style="color:#24292E;">    }  </span></span>
<span class="line"><span style="color:#24292E;">    outer: &lt;</span><span style="color:#22863A;">null</span><span style="color:#24292E;">&gt;  </span></span>
<span class="line"><span style="color:#24292E;">  }  </span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">FunctionExectionContext = {  </span></span>
<span class="line"><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#24292E;">  ThisBinding: &lt;</span><span style="color:#005CC5;">Global</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object</span><span style="color:#24292E;">&gt;,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  LexicalEnvironment: {  </span></span>
<span class="line"><span style="color:#24292E;">    EnvironmentRecord: {  </span></span>
<span class="line"><span style="color:#24292E;">      Type: </span><span style="color:#032F62;">&quot;Declarative&quot;</span><span style="color:#24292E;">,  </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 标识符绑定在这里  </span></span>
<span class="line"><span style="color:#24292E;">      Arguments: {</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">, length: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">},  </span></span>
<span class="line"><span style="color:#24292E;">    },  </span></span>
<span class="line"><span style="color:#24292E;">    outer: &lt;</span><span style="color:#005CC5;">GlobalLexicalEnvironment</span><span style="color:#24292E;">&gt;  </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  VariableEnvironment: {  </span></span>
<span class="line"><span style="color:#24292E;">    EnvironmentRecord: {  </span></span>
<span class="line"><span style="color:#24292E;">      Type: </span><span style="color:#032F62;">&quot;Declarative&quot;</span><span style="color:#24292E;">,  </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 标识符绑定在这里  </span></span>
<span class="line"><span style="color:#24292E;">      g: </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">    },  </span></span>
<span class="line"><span style="color:#24292E;">    outer: &lt;</span><span style="color:#005CC5;">GlobalLexicalEnvironment</span><span style="color:#24292E;">&gt;  </span></span>
<span class="line"><span style="color:#24292E;">  }  </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>留意上面的代码，<code>let</code>和<code>const</code>定义的变量<code>a</code>和<code>b</code>在创建阶段没有被赋值，但<code>var</code>声明的变量从在创建阶段被赋值为<code>undefined</code></p><p>这是因为，创建阶段，会在代码中扫描变量和函数声明，然后将函数声明存储在环境中</p><p>但变量会被初始化为<code>undefined</code>(<code>var</code>声明的情况下)和保持<code>uninitialized</code>(未初始化状态)(使用<code>let</code>和<code>const</code>声明的情况下)</p><p>这就是变量提升的实际原因</p><h3 id="执行阶段" tabindex="-1">执行阶段 <a class="header-anchor" href="#执行阶段">¶</a></h3><p>在这阶段，执行变量赋值、代码执行</p><p>如果 <code>Javascript</code> 引擎在源代码中声明的实际位置找不到变量的值，那么将为其分配 <code>undefined</code> 值</p><h3 id="回收阶段" tabindex="-1">回收阶段 <a class="header-anchor" href="#回收阶段">¶</a></h3><p>执行上下文出栈等待虚拟机回收执行上下文</p><h2 id="二、执行栈" tabindex="-1">二、执行栈 <a class="header-anchor" href="#二、执行栈">¶</a></h2><p>执行栈，也叫调用栈，具有 LIFO（后进先出）结构，用于存储在代码执行期间创建的所有执行上下文</p><p><img src="https://static.vue-js.com/9eda0310-74c1-11eb-ab90-d9ae814b240d.png" alt=""></p><p>当<code>Javascript</code>引擎开始执行你第一行脚本代码的时候，它就会创建一个全局执行上下文然后将它压到执行栈中</p><p>每当引擎碰到一个函数的时候，它就会创建一个函数执行上下文，然后将这个执行上下文压到执行栈中</p><p>引擎会执行位于执行栈栈顶的执行上下文(一般是函数执行上下文)，当该函数执行结束后，对应的执行上下文就会被弹出，然后控制流程到达执行栈的下一个执行上下文</p><p>举个例子：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Hello World!&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">first</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Inside first function&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">second</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Again inside first function&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">second</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Inside second function&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">first</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Inside Global Execution Context&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Hello World!&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">first</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Inside first function&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">second</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Again inside first function&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">second</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Inside second function&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">first</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Inside Global Execution Context&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><p>转化成图的形式</p><p><img src="https://static.vue-js.com/ac11a600-74c1-11eb-ab90-d9ae814b240d.png" alt=""></p><p>简单分析一下流程：</p><ul><li>创建全局上下文请压入执行栈</li><li><code>first</code>函数被调用，创建函数执行上下文并压入栈</li><li>执行<code>first</code>函数过程遇到<code>second</code>函数，再创建一个函数执行上下文并压入栈</li><li><code>second</code>函数执行完毕，对应的函数执行上下文被推出执行栈，执行下一个执行上下文<code>first</code>函数</li><li><code>first</code>函数执行完毕，对应的函数执行上下文也被推出栈中，然后执行全局上下文</li><li>所有代码执行完毕，全局上下文也会被推出栈中，程序结束</li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献">¶</a></h2><ul><li><a href="https://zhuanlan.zhihu.com/p/107552264" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/107552264</a></li></ul>`,55),e=[o];function c(t,r,E,y,i,d){return a(),n("div",null,e)}const h=s(p,[["render",c]]);export{F as __pageData,h as default};
