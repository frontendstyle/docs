import{_ as s,c as n,o as a,N as l}from"./chunks/framework.a7bfe727.js";const u=JSON.parse('{"title":"面试官：说说对Nodejs中的事件循环机制理解?","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/event_loop.md","lastUpdated":1680705882000}'),p={name:"nodejs/event_loop.md"},e=l(`<h1 id="面试官-说说对nodejs中的事件循环机制理解" tabindex="-1">面试官：说说对Nodejs中的事件循环机制理解? <a class="header-anchor" href="#面试官-说说对nodejs中的事件循环机制理解">¶</a></h1><p><img src="https://static.vue-js.com/e0faf3c0-c90e-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么">¶</a></h2><p>在<a href="https://github.com/febobo/web-interview/issues/73" target="_blank" rel="noreferrer">浏览器事件循环</a>中，我们了解到<code>javascript</code>在浏览器中的事件循环机制，其是根据<code>HTML5</code>定义的规范来实现</p><p>而在<code>NodeJS</code>中，事件循环是基于<code>libuv</code>实现，<code>libuv</code>是一个多平台的专注于异步IO的库，如下图最右侧所示：</p><p><img src="https://static.vue-js.com/ea690b90-c90e-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>上图<code>EVENT_QUEUE</code> 给人看起来只有一个队列，但<code>EventLoop</code>存在6个阶段，每个阶段都有对应的一个先进先出的回调队列</p><h2 id="二、流程" tabindex="-1">二、流程 <a class="header-anchor" href="#二、流程">¶</a></h2><p>上节讲到事件循环分成了六个阶段，对应如下：</p><p><img src="https://static.vue-js.com/f2e34d80-c90e-11eb-ab90-d9ae814b240d.png" alt=""></p><ul><li>timers阶段：这个阶段执行timer（setTimeout、setInterval）的回调</li><li>定时器检测阶段(timers)：本阶段执行 timer 的回调，即 setTimeout、setInterval 里面的回调函数</li><li>I/O事件回调阶段(I/O callbacks)：执行延迟到下一个循环迭代的 I/O 回调，即上一轮循环中未被执行的一些I/O回调</li><li>闲置阶段(idle, prepare)：仅系统内部使用</li><li>轮询阶段(poll)：检索新的 I/O 事件;执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，那些由计时器和 setImmediate() 调度的之外），其余情况 node 将在适当的时候在此阻塞</li><li>检查阶段(check)：setImmediate() 回调函数在这里执行</li><li>关闭事件回调阶段(close callback)：一些关闭的回调函数，如：socket.on(&#39;close&#39;, ...)</li></ul><p>每个阶段对应一个队列，当事件循环进入某个阶段时, 将会在该阶段内执行回调，直到队列耗尽或者回调的最大数量已执行, 那么将进入下一个处理阶段</p><p>除了上述6个阶段，还存在<code>process.nextTick</code>，其不属于事件循环的任何一个阶段，它属于该阶段与下阶段之间的过渡, 即本阶段执行结束, 进入下一个阶段前, 所要执行的回调，类似插队</p><p>流程图如下所示：</p><p><img src="https://static.vue-js.com/fbe731d0-c90e-11eb-ab90-d9ae814b240d.png" alt=""></p><p>在<code>Node</code>中，同样存在宏任务和微任务，与浏览器中的事件循环相似</p><p>微任务对应有：</p><ul><li>next tick queue：process.nextTick</li><li>other queue：Promise的then回调、queueMicrotask</li></ul><p>宏任务对应有：</p><ul><li>timer queue：setTimeout、setInterval</li><li>poll queue：IO事件</li><li>check queue：setImmediate</li><li>close queue：close事件</li></ul><p>其执行顺序为：</p><ul><li>next tick microtask queue</li><li>other microtask queue</li><li>timer queue</li><li>poll queue</li><li>check queue</li><li>close queue</li></ul><h2 id="三、题目" tabindex="-1">三、题目 <a class="header-anchor" href="#三、题目">¶</a></h2><p>通过上面的学习，下面开始看看题目</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">async1</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;async1 start&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">async2</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;async1 end&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">async2</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;async2&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;script start&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setTimeout0&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setTimeout2&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">setImmediate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setImmediate&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">process.</span><span style="color:#B392F0;">nextTick</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;nextTick1&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">async1</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">process.</span><span style="color:#B392F0;">nextTick</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;nextTick2&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;promise1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;promise2&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;promise3&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;script end&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">async1</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;async1 start&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">async2</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;async1 end&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">async2</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;async2&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;script start&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;setTimeout0&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;setTimeout2&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">setImmediate</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;setImmediate&#39;</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">process.</span><span style="color:#6F42C1;">nextTick</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;nextTick1&#39;</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">async1</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">process.</span><span style="color:#6F42C1;">nextTick</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;nextTick2&#39;</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;promise1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;promise2&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;promise3&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;script end&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>分析过程：</p><ul><li><p>先找到同步任务，输出script start</p></li><li><p>遇到第一个 setTimeout，将里面的回调函数放到 timer 队列中</p></li><li><p>遇到第二个 setTimeout，300ms后将里面的回调函数放到 timer 队列中</p></li><li><p>遇到第一个setImmediate，将里面的回调函数放到 check 队列中</p></li><li><p>遇到第一个 nextTick，将其里面的回调函数放到本轮同步任务执行完毕后执行</p></li><li><p>执行 async1函数，输出 async1 start</p></li><li><p>执行 async2 函数，输出 async2，async2 后面的输出 async1 end进入微任务，等待下一轮的事件循环</p></li><li><p>遇到第二个，将其里面的回调函数放到本轮同步任务执行完毕后执行</p></li><li><p>遇到 new Promise，执行里面的立即执行函数，输出 promise1、promise2</p></li><li><p>then里面的回调函数进入微任务队列</p></li><li><p>遇到同步任务，输出 script end</p></li><li><p>执行下一轮回到函数，先依次输出 nextTick 的函数，分别是 nextTick1、nextTick2</p></li><li><p>然后执行微任务队列，依次输出 async1 end、promise3</p></li><li><p>执行timer 队列，依次输出 setTimeout0</p></li><li><p>接着执行 check 队列，依次输出 setImmediate</p></li><li><p>300ms后，timer 队列存在任务，执行输出 setTimeout2</p></li></ul><p>执行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">script start</span></span>
<span class="line"><span style="color:#e1e4e8;">async1 start</span></span>
<span class="line"><span style="color:#e1e4e8;">async2</span></span>
<span class="line"><span style="color:#e1e4e8;">promise1</span></span>
<span class="line"><span style="color:#e1e4e8;">promise2</span></span>
<span class="line"><span style="color:#e1e4e8;">script end</span></span>
<span class="line"><span style="color:#e1e4e8;">nextTick1</span></span>
<span class="line"><span style="color:#e1e4e8;">nextTick2</span></span>
<span class="line"><span style="color:#e1e4e8;">async1 end</span></span>
<span class="line"><span style="color:#e1e4e8;">promise3</span></span>
<span class="line"><span style="color:#e1e4e8;">setTimeout0</span></span>
<span class="line"><span style="color:#e1e4e8;">setImmediate</span></span>
<span class="line"><span style="color:#e1e4e8;">setTimeout2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">script start</span></span>
<span class="line"><span style="color:#24292e;">async1 start</span></span>
<span class="line"><span style="color:#24292e;">async2</span></span>
<span class="line"><span style="color:#24292e;">promise1</span></span>
<span class="line"><span style="color:#24292e;">promise2</span></span>
<span class="line"><span style="color:#24292e;">script end</span></span>
<span class="line"><span style="color:#24292e;">nextTick1</span></span>
<span class="line"><span style="color:#24292e;">nextTick2</span></span>
<span class="line"><span style="color:#24292e;">async1 end</span></span>
<span class="line"><span style="color:#24292e;">promise3</span></span>
<span class="line"><span style="color:#24292e;">setTimeout0</span></span>
<span class="line"><span style="color:#24292e;">setImmediate</span></span>
<span class="line"><span style="color:#24292e;">setTimeout2</span></span></code></pre></div><p>最后有一道是关于<code>setTimeout</code>与<code>setImmediate</code>的输出顺序</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;setTimeout&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">setImmediate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;setImmediate&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;setTimeout&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">setImmediate</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;setImmediate&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>输出情况如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">情况一：</span></span>
<span class="line"><span style="color:#E1E4E8;">setTimeout</span></span>
<span class="line"><span style="color:#E1E4E8;">setImmediate</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">情况二：</span></span>
<span class="line"><span style="color:#E1E4E8;">setImmediate</span></span>
<span class="line"><span style="color:#E1E4E8;">setTimeout</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">情况一：</span></span>
<span class="line"><span style="color:#24292E;">setTimeout</span></span>
<span class="line"><span style="color:#24292E;">setImmediate</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">情况二：</span></span>
<span class="line"><span style="color:#24292E;">setImmediate</span></span>
<span class="line"><span style="color:#24292E;">setTimeout</span></span></code></pre></div><p>分析下流程：</p><ul><li>外层同步代码一次性全部执行完，遇到异步API就塞到对应的阶段</li><li>遇到<code>setTimeout</code>，虽然设置的是0毫秒触发，但实际上会被强制改成1ms，时间到了然后塞入<code>times</code>阶段</li><li>遇到<code>setImmediate</code>塞入<code>check</code>阶段</li><li>同步代码执行完毕，进入Event Loop</li><li>先进入<code>times</code>阶段，检查当前时间过去了1毫秒没有，如果过了1毫秒，满足<code>setTimeout</code>条件，执行回调，如果没过1毫秒，跳过</li><li>跳过空的阶段，进入check阶段，执行<code>setImmediate</code>回调</li></ul><p>这里的关键在于这1ms，如果同步代码执行时间较长，进入<code>Event Loop</code>的时候1毫秒已经过了，<code>setTimeout</code>先执行，如果1毫秒还没到，就先执行了<code>setImmediate</code></p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献">¶</a></h2><ul><li><a href="https://segmentfault.com/a/1190000012258592" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000012258592</a></li><li><a href="https://juejin.cn/post/6844904100195205133" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904100195205133</a></li><li><a href="https://vue3js.cn/interview/" target="_blank" rel="noreferrer">https://vue3js.cn/interview/</a></li></ul>`,38),o=[e];function c(t,r,i,E,y,d){return a(),n("div",null,o)}const F=s(p,[["render",c]]);export{u as __pageData,F as default};
