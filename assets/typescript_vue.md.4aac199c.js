import{_ as s,c as n,o as a,N as p}from"./chunks/framework.0799945b.js";const F=JSON.parse('{"title":"面试官：说说如何在Vue项目中应用TypeScript？","description":"","frontmatter":{},"headers":[],"relativePath":"typescript/vue.md","lastUpdated":1680705882000}'),l={name:"typescript/vue.md"},o=p(`<h1 id="面试官-说说如何在vue项目中应用typescript" tabindex="-1">面试官：说说如何在Vue项目中应用TypeScript？ <a class="header-anchor" href="#面试官-说说如何在vue项目中应用typescript">¶</a></h1><p><img src="https://static.vue-js.com/cc658c10-1565-11ec-8e64-91fdec0f05a1.png" alt=""></p><h2 id="一、前言" tabindex="-1">一、前言 <a class="header-anchor" href="#一、前言">¶</a></h2><p>与link类似</p><p>在<code>VUE</code>项目中应用<code>typescript</code>，我们需要引入一个库<code>vue-property-decorator</code>，</p><p>其是基于<code>vue-class-component</code>库而来，这个库<code>vue</code>官方推出的一个支持使用<code>class</code>方式来开发<code>vue</code>单文件组件的库</p><p>主要的功能如下：</p><ul><li>methods 可以直接声明为类的成员方法</li><li>计算属性可以被声明为类的属性访问器</li><li>初始化的 data 可以被声明为类属性</li><li>data、render 以及所有的 Vue 生命周期钩子可以直接作为类的成员方法</li><li>所有其他属性，需要放在装饰器中</li></ul><h2 id="二、使用" tabindex="-1">二、使用 <a class="header-anchor" href="#二、使用">¶</a></h2><p>vue-property-decorator 主要提供了多个装饰器和一个函数:</p><ul><li>@Prop</li><li>@PropSync</li><li>@Model</li><li>@Watch</li><li>@Provide</li><li>@Inject</li><li>@ProvideReactive</li><li>@InjectReactive</li><li>@Emit</li><li>@Ref</li><li>@Component (由 vue-class-component 提供)</li><li>Mixins (由 vue-class-component 提供)</li></ul><h3 id="component" tabindex="-1">@Component <a class="header-anchor" href="#component">¶</a></h3><p><code>Component</code>装饰器它注明了此类为一个<code>Vue</code>组件，因此即使没有设置选项也不能省略</p><p>如果需要定义比如 <code>name</code>、<code>components</code>、<code>filters</code>、<code>directives</code>以及自定义属性，就可以在<code>Component</code>装饰器中定义，如下：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">import {Component,Vue} from &#39;vue-property-decorator&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">import {componentA,componentB} from &#39;@/components&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> @Component({</span></span>
<span class="line"><span style="color:#E1E4E8;">    components:{</span></span>
<span class="line"><span style="color:#E1E4E8;">        componentA,</span></span>
<span class="line"><span style="color:#E1E4E8;">        componentB,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    directives: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        focus: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            // 指令的定义</span></span>
<span class="line"><span style="color:#E1E4E8;">            inserted: function (el) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                el.focus()</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">export default class YourCompoent extends Vue{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">import {Component,Vue} from &#39;vue-property-decorator&#39;;</span></span>
<span class="line"><span style="color:#24292E;">import {componentA,componentB} from &#39;@/components&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> @Component({</span></span>
<span class="line"><span style="color:#24292E;">    components:{</span></span>
<span class="line"><span style="color:#24292E;">        componentA,</span></span>
<span class="line"><span style="color:#24292E;">        componentB,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    directives: {</span></span>
<span class="line"><span style="color:#24292E;">        focus: {</span></span>
<span class="line"><span style="color:#24292E;">            // 指令的定义</span></span>
<span class="line"><span style="color:#24292E;">            inserted: function (el) {</span></span>
<span class="line"><span style="color:#24292E;">                el.focus()</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">export default class YourCompoent extends Vue{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="computed、data、methods" tabindex="-1">computed、data、methods <a class="header-anchor" href="#computed、data、methods">¶</a></h3><p>这里取消了组件的data和methods属性，以往data返回对象中的属性、methods中的方法需要直接定义在Class中，当做类的属性和方法</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@Component</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HelloDecorator</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">count</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 类属性相当于以前的 data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">// 类方法就是以前的方法</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.count </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 获取计算属性</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">total</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.count </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 设置计算属性</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">total</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">param</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> param</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@Component</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HelloDecorator</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">count</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">123</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 类属性相当于以前的 data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">// 类方法就是以前的方法</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.count </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取计算属性</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">get</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">total</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.count </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 设置计算属性</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">total</span><span style="color:#24292E;">(</span><span style="color:#E36209;">param</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">number</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> param</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="props" tabindex="-1">@props <a class="header-anchor" href="#props">¶</a></h3><p>组件接收属性的装饰器，如下使用：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {Component,Vue,Prop} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> vue-property-decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">@Component</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">YourComponent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#B392F0;">Prop</span><span style="color:#E1E4E8;">(String)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">propA</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#B392F0;">Prop</span><span style="color:#E1E4E8;">([String,Number])</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">propB</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">string</span><span style="color:#F97583;">|</span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#B392F0;">Prop</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">     type: String, </span><span style="color:#6A737D;">// type: [String , Number]</span></span>
<span class="line"><span style="color:#E1E4E8;">     default: </span><span style="color:#9ECBFF;">&#39;default value&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 一般为String或Number</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//如果是对象或数组的话。默认值从一个工厂函数中返回</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// defatult: () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//     return [&#39;a&#39;,&#39;b&#39;]</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#E1E4E8;">     required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#B392F0;">validator</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;InProcess&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;Settled&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ].</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(value) </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">     }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">propC</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {Component,Vue,Prop} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> vue-property-decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">@Component</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">YourComponent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#6F42C1;">Prop</span><span style="color:#24292E;">(String)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">propA</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#6F42C1;">Prop</span><span style="color:#24292E;">([String,Number])</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">propB</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">string</span><span style="color:#D73A49;">|</span><span style="color:#005CC5;">number</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#6F42C1;">Prop</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">     type: String, </span><span style="color:#6A737D;">// type: [String , Number]</span></span>
<span class="line"><span style="color:#24292E;">     default: </span><span style="color:#032F62;">&#39;default value&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 一般为String或Number</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//如果是对象或数组的话。默认值从一个工厂函数中返回</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// defatult: () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//     return [&#39;a&#39;,&#39;b&#39;]</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#24292E;">     required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6F42C1;">validator</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;InProcess&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;Settled&#39;</span></span>
<span class="line"><span style="color:#24292E;">        ].</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(value) </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">propC</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="watch" tabindex="-1">@watch <a class="header-anchor" href="#watch">¶</a></h3><p>实际就是<code>Vue</code>中的监听器，如下：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">import { Vue, Component, Watch } from &#39;vue-property-decorator&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">@Component</span></span>
<span class="line"><span style="color:#E1E4E8;">export default class YourComponent extends Vue {</span></span>
<span class="line"><span style="color:#E1E4E8;">  @Watch(&#39;child&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">  onChildChanged(val: string, oldVal: string) {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  @Watch(&#39;person&#39;, { immediate: true, deep: true })</span></span>
<span class="line"><span style="color:#E1E4E8;">  onPersonChanged1(val: Person, oldVal: Person) {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  @Watch(&#39;person&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">  onPersonChanged2(val: Person, oldVal: Person) {}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">import { Vue, Component, Watch } from &#39;vue-property-decorator&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">@Component</span></span>
<span class="line"><span style="color:#24292E;">export default class YourComponent extends Vue {</span></span>
<span class="line"><span style="color:#24292E;">  @Watch(&#39;child&#39;)</span></span>
<span class="line"><span style="color:#24292E;">  onChildChanged(val: string, oldVal: string) {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  @Watch(&#39;person&#39;, { immediate: true, deep: true })</span></span>
<span class="line"><span style="color:#24292E;">  onPersonChanged1(val: Person, oldVal: Person) {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  @Watch(&#39;person&#39;)</span></span>
<span class="line"><span style="color:#24292E;">  onPersonChanged2(val: Person, oldVal: Person) {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="emit" tabindex="-1">@emit <a class="header-anchor" href="#emit">¶</a></h3><p><code>vue-property-decorator</code> 提供的 <code>@Emit</code> 装饰器就是代替<code>Vue </code>中的事件的触发<code>$emit</code>，如下：</p><div class="language-TS"><button title="Copy Code" class="copy"></button><span class="lang">TS</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {Vue, Component, Emit} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue-property-decorator&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;">({})</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Some</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;emit-todo&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(n)</span></span>
<span class="line"><span style="color:#E1E4E8;">            })</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emitTodo</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;world&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        @</span><span style="color:#B392F0;">Emit</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">emitTodo</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hello&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {Vue, Component, Emit} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-property-decorator&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;">({})</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Some</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;emit-todo&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">n</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(n)</span></span>
<span class="line"><span style="color:#24292E;">            })</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">emitTodo</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;world&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        @</span><span style="color:#6F42C1;">Emit</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">emitTodo</span><span style="color:#24292E;">(</span><span style="color:#E36209;">n</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hello&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span></code></pre></div><h2 id="三-、总结" tabindex="-1">三 、总结 <a class="header-anchor" href="#三-、总结">¶</a></h2><p>可以看到上述<code>typescript</code>版本的<code>vue class</code>的语法与平时<code>javascript</code>版本使用起来还是有很大的不同，多处用到<code>class</code>与装饰器，但实际上本质是一致的，只有不断编写才会得心应手</p>`,29),e=[o];function c(t,r,E,y,i,d){return a(),n("div",null,e)}const m=s(l,[["render",c]]);export{F as __pageData,m as default};
