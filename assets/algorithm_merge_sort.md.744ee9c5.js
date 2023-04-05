import{_ as s,c as n,o as a,N as l}from"./chunks/framework.0799945b.js";const F=JSON.parse('{"title":"面试官：说说你对归并排序的理解？如何实现？应用场景？","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/merge_sort.md","lastUpdated":1680705882000}'),p={name:"algorithm/merge_sort.md"},o=l(`<h1 id="面试官-说说你对归并排序的理解-如何实现-应用场景" tabindex="-1">面试官：说说你对归并排序的理解？如何实现？应用场景？ <a class="header-anchor" href="#面试官-说说你对归并排序的理解-如何实现-应用场景">¶</a></h1><p><img src="https://static.vue-js.com/fa1d5720-26ac-11ec-8e64-91fdec0f05a1.png" alt=""></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么">¶</a></h2><p>归并排序（Merge Sort）是建立归并操作上的一种有效，稳定的排序算法，该算法是采用分治法的一个非常典型的应用</p><p>将已有序的子序列合并，得到完全有序的序列，即先使每个子序列有序，再使子序列段间有序</p><p>例如对于含有 <code>n</code> 个记录的无序表，首先默认表中每个记录各为一个有序表（只不过表的长度都为 1）</p><p>然后进行两两合并，使 <code>n</code> 个有序表变为<code>n/2</code> 个长度为 2 或者 1 的有序表（例如 4 个小有序表合并为 2 个大的有序表）</p><p>通过不断地进行两两合并，直到得到一个长度为 <code>n</code> 的有序表为止</p><p>例如对无序表{49，38，65，97，76，13，27}进行归并排序分成了分、合两部分：</p><p>如下图所示：</p><p><img src="https://static.vue-js.com/05f14b60-26ad-11ec-a752-75723a64e8f5.png" alt=""></p><p>归并合过程中，每次得到的新的子表本身有序，所以最终得到有序表</p><p>上述分成两部分，则称为二路归并，如果分成三个部分则称为三路归并，以此类推</p><h2 id="二、如何实现" tabindex="-1">二、如何实现 <a class="header-anchor" href="#二、如何实现">¶</a></h2><p>关于归并排序的算法思路如下：</p><ul><li><p>分：把数组分成两半，再递归对子数组进行分操作，直至到一个个单独数字</p></li><li><p>合：把两个数合成有序数组，再对有序数组进行合并操作，直到全部子数组合成一个完整的数组</p><ul><li>合并操作可以新建一个数组，用于存放排序后的数组</li><li>比较两个有序数组的头部，较小者出队并且推入到上述新建的数组中</li><li>如果两个数组还有值，则重复上述第二步</li><li>如果只有一个数组有值，则将该数组的值出队并推入到上述新建的数组中</li></ul></li></ul><p><img src="https://www.runoob.com/wp-content/uploads/2019/03/mergeSort.gif" alt=""></p><p>用代码表示则如下图所示：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mergeSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">arr</span><span style="color:#E1E4E8;">) {  </span><span style="color:#6A737D;">// 采用自上而下的递归方法</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arr.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(len </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> arr;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> middle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(len </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arr.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, middle),</span></span>
<span class="line"><span style="color:#E1E4E8;">        right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arr.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(middle);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">merge</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">mergeSort</span><span style="color:#E1E4E8;">(left), </span><span style="color:#B392F0;">mergeSort</span><span style="color:#E1E4E8;">(right));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">merge</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">left</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">right</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (left.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> right.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (left[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> right[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            result.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(left.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            result.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(right.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (left.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        result.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(left.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (right.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        result.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(right.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mergeSort</span><span style="color:#24292E;">(</span><span style="color:#E36209;">arr</span><span style="color:#24292E;">) {  </span><span style="color:#6A737D;">// 采用自上而下的递归方法</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">len</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(len </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> arr;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> middle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">floor</span><span style="color:#24292E;">(len </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        left </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, middle),</span></span>
<span class="line"><span style="color:#24292E;">        right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(middle);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">merge</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">mergeSort</span><span style="color:#24292E;">(left), </span><span style="color:#6F42C1;">mergeSort</span><span style="color:#24292E;">(right));</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">merge</span><span style="color:#24292E;">(</span><span style="color:#E36209;">left</span><span style="color:#24292E;">, </span><span style="color:#E36209;">right</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (left.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> right.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (left[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> right[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]) {</span></span>
<span class="line"><span style="color:#24292E;">            result.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(left.</span><span style="color:#6F42C1;">shift</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            result.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(right.</span><span style="color:#6F42C1;">shift</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (left.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        result.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(left.</span><span style="color:#6F42C1;">shift</span><span style="color:#24292E;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (right.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        result.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(right.</span><span style="color:#6F42C1;">shift</span><span style="color:#24292E;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>上述归并分成了分、合两部分，在处理分过程中递归调用两个分的操作，所花费的时间为2乘<code>T(n/2)</code>，合的操作时间复杂度则为<code>O(n)</code>，因此可以得到以下公式：</p><p>总的执行时间 = 2 × 输入长度为<code>n/2</code>的<code>sort</code>函数的执行时间 + <code>merge</code>函数的执行时间<code>O(n)</code></p><p>当只有一个元素时，<code>T(1) = O(1)</code></p><p>如果对<code>T(n) = 2 * T(n/2) + O(n) </code>进行左右 / n的操作，得到 <code>T(n) / n = (n / 2) * T(n/2) + O(1)</code></p><p>现在令 <code>S(n) = T(n)/n</code>，则<code>S(1) = O(1)</code>，然后利用表达式带入得到<code>S(n) = S(n/2) + O(1)</code></p><p>所以可以得到：<code>S(n) = S(n/2) + O(1) = S(n/4) + O(2) = S(n/8) + O(3) = S(n/2^k) + O(k) = S(1) + O(logn) = O(logn)</code></p><p>综上可得，<code>T(n) = n * log(n) = nlogn</code></p><p>关于归并排序的稳定性，在进行合并过程，在1个或2个元素时，1个元素不会交换，2个元素如果大小相等也不会交换，由此可见归并排序是稳定的排序算法</p><h2 id="三、应用场景" tabindex="-1">三、应用场景 <a class="header-anchor" href="#三、应用场景">¶</a></h2><p>在外排序中通常使用排序-归并的策略，外排序是指处理超过内存限度的数据的排序算法，通常将中间结果放在读写较慢的外存储器，如下分成两个阶段：</p><ul><li>排序阶段：读入能够放进内存中的数据量，将其排序输出到临时文件，一次进行，将带排序数据组织为多个有序的临时文件</li><li>归并阶段：将这些临时文件组合为大的有序文件</li></ul><p>例如，使用100m内存对900m的数据进行排序，过程如下：</p><ul><li>读入100m数据内存，用常规方式排序</li><li>将排序后的数据写入磁盘</li><li>重复前两个步骤，得到9个100m的临时文件</li><li>将100m的内存划分为10份，将9份为输入缓冲区，第10份为输出缓冲区</li><li>进行九路归并排序，将结果输出到缓冲区 <ul><li>若输出缓冲区满，将数据写到目标文件，清空缓冲区</li><li>若缓冲区空，读入相应文件的下一份数据</li></ul></li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献">¶</a></h2><ul><li><a href="https://baike.baidu.com/item/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F/1639015" target="_blank" rel="noreferrer">https://baike.baidu.com/item/归并排序/1639015</a></li><li><a href="https://chowdera.com/2021/09/20210920201630258d.html#_127" target="_blank" rel="noreferrer">https://chowdera.com/2021/09/20210920201630258d.html#_127</a></li><li><a href="https://juejin.cn/post/6844904007899561998" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904007899561998</a></li></ul>`,34),e=[o];function t(c,r,E,y,i,h){return a(),n("div",null,e)}const g=s(p,[["render",t]]);export{F as __pageData,g as default};
