import{_ as s,c as n,o as a,N as p}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"面试官：你在React项目中是如何使用Redux的? 项目结构是如何划分的？","description":"","frontmatter":{},"headers":[],"relativePath":"react/how_to_use_redux.md","lastUpdated":1680705882000}'),l={name:"react/how_to_use_redux.md"},o=p(`<h1 id="面试官-你在react项目中是如何使用redux的-项目结构是如何划分的" tabindex="-1">面试官：你在React项目中是如何使用Redux的? 项目结构是如何划分的？ <a class="header-anchor" href="#面试官-你在react项目中是如何使用redux的-项目结构是如何划分的">¶</a></h1><p><img src="https://static.vue-js.com/31a4aff0-e7dc-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、背景" tabindex="-1">一、背景 <a class="header-anchor" href="#一、背景">¶</a></h2><p>在前面文章了解中，我们了解到<code>redux</code>是用于数据状态管理，而<code>react</code>是一个视图层面的库</p><p>如果将两者连接在一起，可以使用官方推荐<code>react-redux</code>库，其具有高效且灵活的特性</p><p><code>react-redux</code>将组件分成：</p><ul><li>容器组件：存在逻辑处理</li><li>UI 组件：只负责现显示和交互，内部不处理逻辑，状态由外部控制</li></ul><p>通过<code>redux</code>将整个应用状态存储到<code>store</code>中，组件可以派发<code>dispatch</code>行为<code>action</code>给<code>store</code></p><p>其他组件通过订阅<code>store</code>中的状态<code>state</code>来更新自身的视图</p><h2 id="二、如何做" tabindex="-1">二、如何做 <a class="header-anchor" href="#二、如何做">¶</a></h2><p>使用<code>react-redux</code>分成了两大核心：</p><ul><li>Provider</li><li>connection</li></ul><h3 id="provider" tabindex="-1">Provider <a class="header-anchor" href="#provider">¶</a></h3><p>在<code>redux</code>中存在一个<code>store</code>用于存储<code>state</code>，如果将这个<code>store</code>存放在顶层元素中，其他组件都被包裹在顶层元素之上</p><p>那么所有的组件都能够受到<code>redux</code>的控制，都能够获取到<code>redux</code>中的数据</p><p>使用方式如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Provider</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">store</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {store}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">App</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Provider</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">Provider</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">store</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {store}&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#005CC5;">App</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">Provider</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="connection" tabindex="-1">connection <a class="header-anchor" href="#connection">¶</a></h3><p><code>connect</code>方法将<code>store</code>上的<code>getState </code>和 <code>dispatch </code>包装成组件的<code>props</code></p><p>导入<code>conect</code>如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { connect } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;react-redux&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { connect } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;react-redux&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><p>用法如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">(mapStateToProps, mapDispatchToProps)(MyComponent)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">(mapStateToProps, mapDispatchToProps)(MyComponent)</span></span></code></pre></div><p>可以传递两个参数：</p><ul><li><p>mapStateToProps</p></li><li><p>mapDispatchToProps</p></li></ul><h3 id="mapstatetoprops" tabindex="-1">mapStateToProps <a class="header-anchor" href="#mapstatetoprops">¶</a></h3><p>把<code>redux</code>中的数据映射到<code>react</code>中的<code>props</code>中去</p><p>如下：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mapStateToProps</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// prop : state.xxx  | 意思是将state中的某个数据映射到props中</span></span>
<span class="line"><span style="color:#E1E4E8;">        foo: state.bar</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mapStateToProps</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">state</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// prop : state.xxx  | 意思是将state中的某个数据映射到props中</span></span>
<span class="line"><span style="color:#24292E;">        foo: state.bar</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>组件内部就能够通过<code>props</code>获取到<code>store</code>中的数据</p><div class="language-cons"><button title="Copy Code" class="copy"></button><span class="lang">cons</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Foo extends Component {</span></span>
<span class="line"><span style="color:#e1e4e8;">    constructor(props){</span></span>
<span class="line"><span style="color:#e1e4e8;">        super(props);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    render(){</span></span>
<span class="line"><span style="color:#e1e4e8;">        return(</span></span>
<span class="line"><span style="color:#e1e4e8;">         // 这样子渲染的其实就是state.bar的数据了</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;div&gt;this.props.foo&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">Foo = connect()(Foo)</span></span>
<span class="line"><span style="color:#e1e4e8;">export default Foo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Foo extends Component {</span></span>
<span class="line"><span style="color:#24292e;">    constructor(props){</span></span>
<span class="line"><span style="color:#24292e;">        super(props);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    render(){</span></span>
<span class="line"><span style="color:#24292e;">        return(</span></span>
<span class="line"><span style="color:#24292e;">         // 这样子渲染的其实就是state.bar的数据了</span></span>
<span class="line"><span style="color:#24292e;">            &lt;div&gt;this.props.foo&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">Foo = connect()(Foo)</span></span>
<span class="line"><span style="color:#24292e;">export default Foo</span></span></code></pre></div><h3 id="mapdispatchtoprops" tabindex="-1">mapDispatchToProps <a class="header-anchor" href="#mapdispatchtoprops">¶</a></h3><p>将<code>redux</code>中的<code>dispatch</code>映射到组件内部的<code>props</code>中</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mapDispatchToProps</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">dispatch</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">// 默认传递参数就是dispatch</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onClick</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;increatment&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mapDispatchToProps</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dispatch</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">// 默认传递参数就是dispatch</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onClick</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">dispatch</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;increatment&#39;</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Foo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">super</span><span style="color:#E1E4E8;">(props);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span></span>
<span class="line"><span style="color:#E1E4E8;">             &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onClick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.props.onClick}&gt;点击increase&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        )</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">Foo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">()(Foo);</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> Foo;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Foo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">(props);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">         </span></span>
<span class="line"><span style="color:#24292E;">             &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onClick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.props.onClick}&gt;点击increase&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        )</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">Foo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">()(Foo);</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> Foo;</span></span></code></pre></div><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结">¶</a></h3><p>整体流程图大致如下所示：</p><p><img src="https://static.vue-js.com/3e47db10-e7dc-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="三、项目结构" tabindex="-1">三、项目结构 <a class="header-anchor" href="#三、项目结构">¶</a></h2><p>可以根据项目具体情况进行选择，以下列出两种常见的组织结构</p><h4 id="按角色组织-mvc" tabindex="-1">按角色组织（MVC） <a class="header-anchor" href="#按角色组织-mvc">¶</a></h4><p>角色如下：</p><ul><li>reducers</li><li>actions</li><li>components</li><li>containers</li></ul><p>参考如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">reducers</span><span style="color:#F97583;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">  todoReducer.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  filterReducer.js</span></span>
<span class="line"><span style="color:#E1E4E8;">actions</span><span style="color:#F97583;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">  todoAction.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  filterActions.js</span></span>
<span class="line"><span style="color:#E1E4E8;">components</span><span style="color:#F97583;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">  todoList.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  todoItem.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  filter.js</span></span>
<span class="line"><span style="color:#E1E4E8;">containers</span><span style="color:#F97583;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">  todoListContainer.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  todoItemContainer.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  filterContainer.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">reducers</span><span style="color:#D73A49;">/</span></span>
<span class="line"><span style="color:#24292E;">  todoReducer.js</span></span>
<span class="line"><span style="color:#24292E;">  filterReducer.js</span></span>
<span class="line"><span style="color:#24292E;">actions</span><span style="color:#D73A49;">/</span></span>
<span class="line"><span style="color:#24292E;">  todoAction.js</span></span>
<span class="line"><span style="color:#24292E;">  filterActions.js</span></span>
<span class="line"><span style="color:#24292E;">components</span><span style="color:#D73A49;">/</span></span>
<span class="line"><span style="color:#24292E;">  todoList.js</span></span>
<span class="line"><span style="color:#24292E;">  todoItem.js</span></span>
<span class="line"><span style="color:#24292E;">  filter.js</span></span>
<span class="line"><span style="color:#24292E;">containers</span><span style="color:#D73A49;">/</span></span>
<span class="line"><span style="color:#24292E;">  todoListContainer.js</span></span>
<span class="line"><span style="color:#24292E;">  todoItemContainer.js</span></span>
<span class="line"><span style="color:#24292E;">  filterContainer.js</span></span></code></pre></div><h4 id="按功能组织" tabindex="-1">按功能组织 <a class="header-anchor" href="#按功能组织">¶</a></h4><p>使用<code>redux</code>使用功能组织项目，也就是把完成同一应用功能的代码放在一个目录下，一个应用功能包含多个角色的代码</p><p><code>Redux</code>中，不同的角色就是<code>reducer</code>、<code>actions</code>和视图，而应用功能对应的就是用户界面的交互模块</p><p>参考如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">todoList</span><span style="color:#F97583;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  actionTypes.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  reducer.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  views</span><span style="color:#F97583;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">    components.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    containers.js</span></span>
<span class="line"><span style="color:#E1E4E8;">filter</span><span style="color:#F97583;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  actionTypes.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  reducer.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  views</span><span style="color:#F97583;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">    components.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    container.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">todoList</span><span style="color:#D73A49;">/</span></span>
<span class="line"><span style="color:#24292E;">  actions.js</span></span>
<span class="line"><span style="color:#24292E;">  actionTypes.js</span></span>
<span class="line"><span style="color:#24292E;">  index.js</span></span>
<span class="line"><span style="color:#24292E;">  reducer.js</span></span>
<span class="line"><span style="color:#24292E;">  views</span><span style="color:#D73A49;">/</span></span>
<span class="line"><span style="color:#24292E;">    components.js</span></span>
<span class="line"><span style="color:#24292E;">    containers.js</span></span>
<span class="line"><span style="color:#24292E;">filter</span><span style="color:#D73A49;">/</span></span>
<span class="line"><span style="color:#24292E;">  actions.js</span></span>
<span class="line"><span style="color:#24292E;">  actionTypes.js</span></span>
<span class="line"><span style="color:#24292E;">  index.js</span></span>
<span class="line"><span style="color:#24292E;">  reducer.js</span></span>
<span class="line"><span style="color:#24292E;">  views</span><span style="color:#D73A49;">/</span></span>
<span class="line"><span style="color:#24292E;">    components.js</span></span>
<span class="line"><span style="color:#24292E;">    container.js</span></span></code></pre></div><p>每个功能模块对应一个目录，每个目录下包含同样的角色文件：</p><ul><li>actionTypes.js 定义action类型</li><li>actions.js 定义action构造函数</li><li>reducer.js 定义这个功能模块如果响应actions.js定义的动作</li><li>views 包含功能模块中所有的React组件，包括展示组件和容器组件</li><li>index.js 把所有的角色导入，统一导出</li></ul><p>其中<code>index</code>模块用于导出对外的接口</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> actions </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./actions.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> reducer </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./reducer.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> view </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./views/container.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> { actions, reducer, view };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> actions </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./actions.js&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> reducer </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./reducer.js&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> view </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./views/container.js&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> { actions, reducer, view };</span></span></code></pre></div><p>导入方法如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { actions, reducer, view </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> TodoList } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./xxxx&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { actions, reducer, view </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> TodoList } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./xxxx&#39;</span></span></code></pre></div><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献">¶</a></h2><ul><li><a href="https://www.redux.org.cn/docs/basics/UsageWithReact.html" target="_blank" rel="noreferrer">https://www.redux.org.cn/docs/basics/UsageWithReact.html</a></li><li><a href="https://segmentfault.com/a/1190000010384268" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000010384268</a></li></ul>`,58),e=[o];function c(t,r,i,E,y,d){return a(),n("div",null,e)}const F=s(l,[["render",c]]);export{u as __pageData,F as default};
