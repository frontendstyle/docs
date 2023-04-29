import{_ as s,c as a,o as p,N as n}from"./chunks/framework.0799945b.js";const F=JSON.parse('{"title":"面试官：说说webpack proxy工作原理？为什么能解决跨域?","description":"","frontmatter":{},"headers":[],"relativePath":"webpack/proxy.md","lastUpdated":1680705882000}'),l={name:"webpack/proxy.md"},o=n(`<h1 id="面试官-说说webpack-proxy工作原理-为什么能解决跨域" tabindex="-1">面试官：说说webpack proxy工作原理？为什么能解决跨域? <a class="header-anchor" href="#面试官-说说webpack-proxy工作原理-为什么能解决跨域">¶</a></h1><p><img src="https://static.vue-js.com/5b871600-ace5-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么">¶</a></h2><p><code>webpack proxy</code>，即<code>webpack</code>提供的代理服务</p><p>基本行为就是接收客户端发送的请求后转发给其他服务器</p><p>其目的是为了便于开发者在开发模式下解决跨域问题（浏览器安全策略限制）</p><p>想要实现代理首先需要一个中间服务器，<code>webpack</code>中提供服务器的工具为<code>webpack-dev-server</code></p><h4 id="webpack-dev-server" tabindex="-1">webpack-dev-server <a class="header-anchor" href="#webpack-dev-server">¶</a></h4><p><code>webpack-dev-server</code>是 <code>webpack</code> 官方推出的一款开发工具，将自动编译和自动刷新浏览器等一系列对开发友好的功能全部集成在了一起</p><p>目的是为了提高开发者日常的开发效率，<strong>只适用在开发阶段</strong></p><p>关于配置方面，在<code>webpack</code>配置对象属性中通过<code>devServer</code>属性提供，如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// ./webpack.config.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">    devServer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        contentBase: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        compress: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        port: </span><span style="color:#79B8FF;">9000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        proxy: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;/api&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                target: </span><span style="color:#9ECBFF;">&#39;https://api.github.com&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// ./webpack.config.js</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">    devServer: {</span></span>
<span class="line"><span style="color:#24292E;">        contentBase: path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;dist&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        compress: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        port: </span><span style="color:#005CC5;">9000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        proxy: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;/api&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                target: </span><span style="color:#032F62;">&#39;https://api.github.com&#39;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><code>devServetr</code>里面<code>proxy</code>则是关于代理的配置，该属性为对象的形式，对象中每一个属性就是一个代理的规则匹配</p><p>属性的名称是需要被代理的请求路径前缀，一般为了辨别都会设置前缀为<code> /api</code>，值为对应的代理匹配规则，对应如下：</p><ul><li>target：表示的是代理到的目标地址</li><li>pathRewrite：默认情况下，我们的 /api-hy 也会被写入到URL中，如果希望删除，可以使用pathRewrite</li><li>secure：默认情况下不接收转发到https的服务器上，如果希望支持，可以设置为false</li><li>changeOrigin：它表示是否更新代理后请求的 headers 中host地址</li></ul><h2 id="二、工作原理" tabindex="-1">二、工作原理 <a class="header-anchor" href="#二、工作原理">¶</a></h2><p><code>proxy</code>工作原理实质上是利用<code>http-proxy-middleware</code> 这个<code>http</code>代理中间件，实现请求转发给其他服务器</p><p>举个例子：</p><p>在开发阶段，本地地址为<code>http://localhost:3000</code>，该浏览器发送一个前缀带有<code>/api</code>标识的请求到服务端获取数据，但响应这个请求的服务器只是将请求转发到另一台服务器中</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">express</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;express&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;http-proxy-middleware&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">express</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">proxy</span><span style="color:#E1E4E8;">({target: </span><span style="color:#9ECBFF;">&#39;http://www.example.org&#39;</span><span style="color:#E1E4E8;">, changeOrigin: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">}));</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// http://localhost:3000/api/foo/bar -&gt; http://www.example.org/api/foo/bar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">express</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;express&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">proxy</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;http-proxy-middleware&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">express</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/api&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">proxy</span><span style="color:#24292E;">({target: </span><span style="color:#032F62;">&#39;http://www.example.org&#39;</span><span style="color:#24292E;">, changeOrigin: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">}));</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// http://localhost:3000/api/foo/bar -&gt; http://www.example.org/api/foo/bar</span></span></code></pre></div><h2 id="三、跨域" tabindex="-1">三、跨域 <a class="header-anchor" href="#三、跨域">¶</a></h2><p>在开发阶段， <code>webpack-dev-server</code> 会启动一个本地开发服务器，所以我们的应用在开发阶段是独立运行在 <code>localhost </code>的一个端口上，而后端服务又是运行在另外一个地址上</p><p>所以在开发阶段中，由于浏览器同源策略的原因，当本地访问后端就会出现跨域请求的问题</p><p>通过设置<code>webpack proxy</code>实现代理请求后，相当于浏览器与服务端中添加一个代理者</p><p>当本地发送请求的时候，代理服务器响应该请求，并将请求转发到目标服务器，目标服务器响应数据后再将数据返回给代理服务器，最终再由代理服务器将数据响应给本地</p><p><img src="https://static.vue-js.com/65b5e5c0-ace5-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>在代理服务器传递数据给本地浏览器的过程中，两者同源，并不存在跨域行为，这时候浏览器就能正常接收数据</p><p>注意：<strong>服务器与服务器之间请求数据并不会存在跨域行为，跨域行为是浏览器安全策略限制</strong></p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献">¶</a></h2><ul><li><a href="https://webpack.docschina.org/configuration/dev-server/#devserverproxy" target="_blank" rel="noreferrer">https://webpack.docschina.org/configuration/dev-server/#devserverproxy</a></li></ul>`,30),e=[o];function c(r,t,E,y,i,d){return p(),a("div",null,e)}const b=s(l,[["render",c]]);export{F as __pageData,b as default};
