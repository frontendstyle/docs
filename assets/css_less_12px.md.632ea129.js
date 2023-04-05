import{_ as s,c as a,o as n,N as l}from"./chunks/framework.0799945b.js";const F=JSON.parse('{"title":"面试官：让Chrome支持小于12px 的文字方式有哪些？区别？","description":"","frontmatter":{},"headers":[],"relativePath":"css/less_12px.md","lastUpdated":1680705882000}'),p={name:"css/less_12px.md"},o=l(`<h1 id="面试官-让chrome支持小于12px-的文字方式有哪些-区别" tabindex="-1">面试官：让Chrome支持小于12px 的文字方式有哪些？区别？ <a class="header-anchor" href="#面试官-让chrome支持小于12px-的文字方式有哪些-区别">¶</a></h1><p><img src="https://static.vue-js.com/62945fd0-a334-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、背景" tabindex="-1">一、背景 <a class="header-anchor" href="#一、背景">¶</a></h2><p>Chrome 中文版浏览器会默认设定页面的最小字号是12px，英文版没有限制</p><p>原由 Chrome 团队认为汉字小于12px就会增加识别难度</p><ul><li>中文版浏览器</li></ul><p>与网页语言无关，取决于用户在Chrome的设置里（chrome://settings/languages）把哪种语言设置为默认显示语言</p><ul><li>系统级最小字号</li></ul><p>浏览器默认设定页面的最小字号，用户可以前往 chrome://settings/fonts 根据需求更改</p><p>而我们在实际项目中，不能奢求用户更改浏览器设置</p><p>对于文本需要以更小的字号来显示，就需要用到一些小技巧</p><h2 id="二、解决方案" tabindex="-1">二、解决方案 <a class="header-anchor" href="#二、解决方案">¶</a></h2><p>常见的解决方案有：</p><ul><li>zoom</li><li>-webkit-transform:scale()</li><li>-webkit-text-size-adjust:none</li></ul><h3 id="zoom" tabindex="-1">Zoom <a class="header-anchor" href="#zoom">¶</a></h3><p><code>zoom</code> 的字面意思是“变焦”，可以改变页面上元素的尺寸，属于真实尺寸</p><p>其支持的值类型有：</p><ul><li>zoom:50%，表示缩小到原来的一半</li><li>zoom:0.5，表示缩小到原来的一半</li></ul><p>使用 <code>zoom</code> 来”支持“ 12px 以下的字体</p><p>代码如下：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text/css&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.span1</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">12</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">inline-block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">zoom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0.8</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.span2</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">inline-block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">12</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;span1&quot;</span><span style="color:#E1E4E8;">&gt;测试10px&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;span2&quot;</span><span style="color:#E1E4E8;">&gt;测试12px&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;text/css&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.span1</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">12</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">inline-block</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">zoom</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.8</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.span2</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">inline-block</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">12</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;span1&quot;</span><span style="color:#24292E;">&gt;测试10px&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;span2&quot;</span><span style="color:#24292E;">&gt;测试12px&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>效果如下：</p><p><img src="https://static.vue-js.com/d5243980-a334-11eb-ab90-d9ae814b240d.png" alt=""></p><blockquote><p>需要注意的是，<code>Zoom</code> 并不是标准属性，需要考虑其兼容性</p></blockquote><p><img src="https://static.vue-js.com/3defe3c0-a343-11eb-85f6-6fac77c0c9b3.png" alt="image.png"></p><h3 id="webkit-transform-scale" tabindex="-1">-webkit-transform:scale() <a class="header-anchor" href="#webkit-transform-scale">¶</a></h3><p>针对<code>chrome</code>浏览器,加<code>webkit</code>前缀，用<code>transform:scale()</code>这个属性进行放缩</p><p>注意的是，使用<code>scale</code>属性只对可以定义宽高的元素生效，所以，下面代码中将<code>span</code>元素转为行内块元素</p><p>实现代码如下：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text/css&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.span1</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">12</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">inline-block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">-webkit-transform</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">scale</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.8</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.span2</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">inline-block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">12</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;span1&quot;</span><span style="color:#E1E4E8;">&gt;测试10px&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;span2&quot;</span><span style="color:#E1E4E8;">&gt;测试12px&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;text/css&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.span1</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">12</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">inline-block</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">-webkit-transform</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">scale</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0.8</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.span2</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">inline-block</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">12</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;span1&quot;</span><span style="color:#24292E;">&gt;测试10px&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;span2&quot;</span><span style="color:#24292E;">&gt;测试12px&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>效果如下：</p><p><img src="https://static.vue-js.com/d5243980-a334-11eb-ab90-d9ae814b240d.png" alt=""></p><h3 id="webkit-text-size-adjust-none" tabindex="-1">-webkit-text-size-adjust:none <a class="header-anchor" href="#webkit-text-size-adjust-none">¶</a></h3><p>该属性用来设定文字大小是否根据设备(浏览器)来自动调整显示大小</p><p>属性值：</p><ul><li>percentage：字体显示的大小；</li><li>auto：默认，字体大小会根据设备/浏览器来自动调整；</li><li>none:字体大小不会自动调整</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">-webkit-text-size-adjust</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">html</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">-webkit-text-size-adjust</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">; }</span></span></code></pre></div><p>这样设置之后会有一个问题，就是当你放大网页时，一般情况下字体也会随着变大，而设置了以上代码后，字体只会显示你当前设置的字体大小，不会随着网页放大而变大了</p><p>所以，我们不建议全局应用该属性，而是单独对某一属性使用</p><blockquote><p>需要注意的是，自从<code>chrome 27</code>之后，就取消了对这个属性的支持。同时，该属性只对英文、数字生效，对中文不生效</p></blockquote><h2 id="三、总结" tabindex="-1">三、总结 <a class="header-anchor" href="#三、总结">¶</a></h2><p><code>Zoom</code> 非标属性，有兼容问题，缩放会改变了元素占据的空间大小，触发重排</p><p><code>-webkit-transform:scale()</code> 大部分现代浏览器支持，并且对英文、数字、中文也能够生效，缩放不会改变了元素占据的空间大小，页面布局不会发生变化</p><p><code>-webkit-text-size-adjust</code>对谷歌浏览器有版本要求，在27之后，就取消了该属性的支持，并且只对英文、数字生效</p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献">¶</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-size-adjust" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-size-adjust</a></li><li><a href="https://vue3js.cn/interview" target="_blank" rel="noreferrer">https://vue3js.cn/interview</a></li></ul>`,46),e=[o];function t(c,r,E,y,i,d){return n(),a("div",null,e)}const C=s(p,[["render",t]]);export{F as __pageData,C as default};
