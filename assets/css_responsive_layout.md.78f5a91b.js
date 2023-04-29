import{_ as s,c as n,o as a,N as l}from"./chunks/framework.0799945b.js";const F=JSON.parse('{"title":"面试官：什么是响应式设计？响应式设计的基本原理是什么？如何做？","description":"","frontmatter":{},"headers":[],"relativePath":"css/responsive_layout.md","lastUpdated":1680705882000}'),p={name:"css/responsive_layout.md"},o=l(`<h1 id="面试官-什么是响应式设计-响应式设计的基本原理是什么-如何做" tabindex="-1">面试官：什么是响应式设计？响应式设计的基本原理是什么？如何做？ <a class="header-anchor" href="#面试官-什么是响应式设计-响应式设计的基本原理是什么-如何做">¶</a></h1><p><img src="https://static.vue-js.com/a57e2e40-9dba-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么">¶</a></h2><p>响应式网站设计（Responsive Web design）是一种网络页面设计布局，页面的设计与开发应当根据用户行为以及设备环境(系统平台、屏幕尺寸、屏幕定向等)进行相应的响应和调整</p><p>描述响应式界面最著名的一句话就是“Content is like water”</p><p>大白话便是“如果将屏幕看作容器，那么内容就像水一样”</p><p>响应式网站常见特点：</p><ul><li><p>同时适配PC + 平板 + 手机等</p></li><li><p>标签导航在接近手持终端设备时改变为经典的抽屉式导航</p></li><li><p>网站的布局会根据视口来调整模块的大小和位置</p></li></ul><p><img src="https://static.vue-js.com/ae68be30-9dba-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="二、实现方式" tabindex="-1">二、实现方式 <a class="header-anchor" href="#二、实现方式">¶</a></h2><p>响应式设计的基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理，为了处理移动端，页面头部必须有<code>meta</code>声明<code>viewport</code></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no”&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;viewport&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no”&gt;</span></span></code></pre></div><p>属性对应如下：</p><ul><li><p>width=device-width: 是自适应手机屏幕的尺寸宽度</p></li><li><p>maximum-scale:是缩放比例的最大值</p></li><li><p>inital-scale:是缩放的初始化</p></li><li><p>user-scalable:是用户的可以缩放的操作</p></li></ul><p>实现响应式布局的方式有如下：</p><ul><li>媒体查询</li><li>百分比</li><li>vw/vh</li><li>rem</li></ul><h3 id="媒体查询" tabindex="-1">媒体查询 <a class="header-anchor" href="#媒体查询">¶</a></h3><p><code>CSS3 </code>中的增加了更多的媒体查询，就像<code>if</code>条件表达式一样，我们可以设置不同类型的媒体条件，并根据对应的条件，给相应符合条件的媒体调用相对应的样式表</p><p>使用<code>@Media</code>查询，可以针对不同的媒体类型定义不同的样式，如：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">screen</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1920</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) { ... }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">screen</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">and</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">max-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1920</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) { ... }</span></span></code></pre></div><p>当视口在375px - 600px之间，设置特定字体大小18px</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">screen</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">375</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">600</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">18</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">screen</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">min-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">375</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">and</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">max-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">600</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">body</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">18</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>通过媒体查询，可以通过给不同分辨率的设备编写不同的样式来实现响应式的布局，比如我们为不同分辨率的屏幕，设置不同的背景图片</p><p>比如给小屏幕手机设置@2x图，为大屏幕手机设置@3x图，通过媒体查询就能很方便的实现</p><h3 id="百分比" tabindex="-1">百分比 <a class="header-anchor" href="#百分比">¶</a></h3><p>通过百分比单位 &quot; % &quot; 来实现响应式的效果</p><p>比如当浏览器的宽度或者高度发生变化时，通过百分比单位，可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果</p><p><code>height</code>、<code>width</code>属性的百分比依托于父标签的宽高，但是其他盒子属性则不完全依赖父元素：</p><ul><li><p>子元素的top/left和bottom/right如果设置百分比，则相对于直接非static定位(默认定位)的父元素的高度/宽度</p></li><li><p>子元素的padding如果设置百分比，不论是垂直方向或者是水平方向，都相对于直接父亲元素的width，而与父元素的height无关。</p></li><li><p>子元素的margin如果设置成百分比，不论是垂直方向还是水平方向，都相对于直接父元素的width</p></li><li><p>border-radius不一样，如果设置border-radius为百分比，则是相对于自身的宽度</p></li></ul><p>可以看到每个属性都使用百分比，会照成布局的复杂度，所以不建议使用百分比来实现响应式</p><h3 id="vw-vh" tabindex="-1">vw/vh <a class="header-anchor" href="#vw-vh">¶</a></h3><p><code>vw</code>表示相对于视图窗口的宽度，<code>vh</code>表示相对于视图窗口高度。 任意层级元素，在使用<code>vw</code>单位的情况下，<code>1vw</code>都等于视图宽度的百分之一</p><p>与百分比布局很相似，在以前文章提过与<code>%</code>的区别，这里就不再展开述说</p><h3 id="rem" tabindex="-1">rem <a class="header-anchor" href="#rem">¶</a></h3><p>在以前也讲到，<code>rem</code>是相对于根元素<code>html</code>的<code>font-size</code>属性，默认情况下浏览器字体大小为<code>16px</code>，此时<code>1rem = 16px</code></p><p>可以利用前面提到的媒体查询，针对不同设备分辨率改变<code>font-size</code>的值，如下：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">screen</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">414</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">18</span><span style="color:#F97583;">px</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">screen</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">375</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">16</span><span style="color:#F97583;">px</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">screen</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">320</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">12</span><span style="color:#F97583;">px</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">screen</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">and</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">max-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">414</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">html</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">18</span><span style="color:#D73A49;">px</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">screen</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">and</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">max-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">375</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">html</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">16</span><span style="color:#D73A49;">px</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">screen</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">and</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">max-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">320</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">html</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">12</span><span style="color:#D73A49;">px</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>为了更准确监听设备可视窗口变化，我们可以在<code>css</code>之前插入<code>script</code>标签，内容如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//动态为根元素设置字体大小</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 获取屏幕宽度</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> width </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.documentElement.clientWidth</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 设置根元素字体大小。此时为宽的10等分</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.documentElement.style.fontSize </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> width </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;px&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//首次加载应用，设置一次</span></span>
<span class="line"><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">// 监听手机旋转的事件的时机，重新设置</span></span>
<span class="line"><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;orientationchange&#39;</span><span style="color:#E1E4E8;">, init)</span></span>
<span class="line"><span style="color:#6A737D;">// 监听手机窗口变化，重新设置</span></span>
<span class="line"><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;resize&#39;</span><span style="color:#E1E4E8;">, init)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//动态为根元素设置字体大小</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">init</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取屏幕宽度</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> width </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.documentElement.clientWidth</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 设置根元素字体大小。此时为宽的10等分</span></span>
<span class="line"><span style="color:#24292E;">    document.documentElement.style.fontSize </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> width </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;px&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//首次加载应用，设置一次</span></span>
<span class="line"><span style="color:#6F42C1;">init</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">// 监听手机旋转的事件的时机，重新设置</span></span>
<span class="line"><span style="color:#24292E;">window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;orientationchange&#39;</span><span style="color:#24292E;">, init)</span></span>
<span class="line"><span style="color:#6A737D;">// 监听手机窗口变化，重新设置</span></span>
<span class="line"><span style="color:#24292E;">window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;resize&#39;</span><span style="color:#24292E;">, init)</span></span></code></pre></div><p>无论设备可视窗口如何变化，始终设置<code>rem</code>为<code>width</code>的1/10，实现了百分比布局</p><p>除此之外，我们还可以利用主流<code>UI</code>框架，如：<code>element ui</code>、<code>antd</code>提供的栅格布局实现响应式</p><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结">¶</a></h3><p>响应式设计实现通常会从以下几方面思考：</p><ul><li>弹性盒子（包括图片、表格、视频）和媒体查询等技术</li><li>使用百分比布局创建流式布局的弹性UI，同时使用媒体查询限制元素的尺寸和内容变更范围</li><li>使用相对单位使得内容自适应调节</li><li>选择断点，针对不同断点实现不同布局和内容展示</li></ul><h2 id="三、总结" tabindex="-1">三、总结 <a class="header-anchor" href="#三、总结">¶</a></h2><p>响应式布局优点可以看到：</p><ul><li>面对不同分辨率设备灵活性强</li><li>能够快捷解决多设备显示适应问题</li></ul><p>缺点：</p><ul><li>仅适用布局、信息、框架并不复杂的部门类型网站</li><li>兼容各种设备工作量大，效率低下</li><li>代码累赘，会出现隐藏无用的元素，加载时间加长</li><li>其实这是一种折中性质的设计解决方案，多方面因素影响而达不到最佳效果</li><li>一定程度上改变了网站原有的布局结构，会出现用户混淆的情况</li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献">¶</a></h2><ul><li><a href="https://baike.baidu.com/item/%E5%93%8D%E5%BA%94%E5%BC%8F%E7%BD%91%E9%A1%B5%E8%AE%BE%E8%AE%A1" target="_blank" rel="noreferrer">https://baike.baidu.com/item/响应式网页设计</a></li><li><a href="https://juejin.cn/post/6844904082751111176" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904082751111176</a></li><li><a href="https://vue3js.cn/interview" target="_blank" rel="noreferrer">https://vue3js.cn/interview</a></li></ul>`,51),e=[o];function c(t,r,i,E,y,d){return a(),n("div",null,e)}const u=s(p,[["render",c]]);export{F as __pageData,u as default};
