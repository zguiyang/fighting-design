import{d as p,c as e,b as C,F as i,a as A}from"./chunks/f-icon-sun.61df2e0d.js";import{j as g,k as l,r as E,o as q,c as b,a as n,u as s,d as m,e as o,_ as B}from"./app.d243255d.js";import{F as h}from"./chunks/f-icon-face-smile.dbd4ba14.js";const I=o('<h1 id="swap-\u5207\u6362" tabindex="-1" data-v-c705f496>Swap \u5207\u6362 <a class="header-anchor" href="#swap-\u5207\u6362" aria-hidden="true" data-v-c705f496>#</a></h1><p data-v-c705f496>\u7CBE\u81F4\u7684\u5207\u6362\u7EC4\u4EF6</p><ul data-v-c705f496><li data-v-c705f496><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/swap" target="_blank" rel="noreferrer" data-v-c705f496>\u6E90\u4EE3\u7801</a></li><li data-v-c705f496><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/swap.md" target="_blank" rel="noreferrer" data-v-c705f496>\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1" data-v-c705f496>\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true" data-v-c705f496>#</a></h2><p data-v-c705f496>\u9700\u8981\u4F7F\u7528 <code data-v-c705f496>v-model</code> \u7ED1\u5B9A\u4E00\u4E2A\u503C</p><p data-v-c705f496><code data-v-c705f496>icon-on</code> \u548C <code data-v-c705f496>icon-off</code> \u5206\u522B\u63A7\u5236\u5207\u6362\u7684\u4E0D\u540C\u56FE\u6807</p>',6),_=o(`<details class="details custom-block" data-v-c705f496><summary data-v-c705f496>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-c705f496><button title="Copy Code" class="copy" data-v-c705f496></button><span class="lang" data-v-c705f496>html</span><pre data-v-c705f496><code data-v-c705f496><span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>&lt;</span><span style="color:#F07178;" data-v-c705f496>template</span><span style="color:#89DDFF;" data-v-c705f496>&gt;</span></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#89DDFF;" data-v-c705f496>&lt;</span><span style="color:#F07178;" data-v-c705f496>f-swap</span><span style="color:#89DDFF;" data-v-c705f496> </span><span style="color:#C792EA;" data-v-c705f496>v-model</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>value1</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#89DDFF;" data-v-c705f496> </span><span style="color:#C792EA;" data-v-c705f496>:icon-on</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>FIconSun</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#89DDFF;" data-v-c705f496> </span><span style="color:#C792EA;" data-v-c705f496>:icon-off</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>FIconMoon</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#89DDFF;" data-v-c705f496> /&gt;</span></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#89DDFF;" data-v-c705f496>&lt;</span><span style="color:#F07178;" data-v-c705f496>f-swap</span><span style="color:#89DDFF;" data-v-c705f496> </span><span style="color:#C792EA;" data-v-c705f496>v-model</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>value2</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#89DDFF;" data-v-c705f496> </span><span style="color:#C792EA;" data-v-c705f496>:icon-on</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>FIconSun</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#89DDFF;" data-v-c705f496> </span><span style="color:#C792EA;" data-v-c705f496>:icon-off</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>FIconMoon</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#89DDFF;" data-v-c705f496> /&gt;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>&lt;/</span><span style="color:#F07178;" data-v-c705f496>template</span><span style="color:#89DDFF;" data-v-c705f496>&gt;</span></span>
<span class="line" data-v-c705f496></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>&lt;</span><span style="color:#F07178;" data-v-c705f496>script</span><span style="color:#89DDFF;" data-v-c705f496> </span><span style="color:#C792EA;" data-v-c705f496>lang</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>ts</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#89DDFF;" data-v-c705f496> </span><span style="color:#C792EA;" data-v-c705f496>setup</span><span style="color:#89DDFF;" data-v-c705f496>&gt;</span></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#89DDFF;" data-v-c705f496>import</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>{</span><span style="color:#F07178;" data-v-c705f496> </span><span style="color:#A6ACCD;" data-v-c705f496>FIconSun</span><span style="color:#89DDFF;" data-v-c705f496>,</span><span style="color:#F07178;" data-v-c705f496> </span><span style="color:#A6ACCD;" data-v-c705f496>FIconMoon</span><span style="color:#F07178;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>}</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>from</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>&#39;</span><span style="color:#C3E88D;" data-v-c705f496>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-c705f496>&#39;</span></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#89DDFF;" data-v-c705f496>import</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>{</span><span style="color:#F07178;" data-v-c705f496> </span><span style="color:#A6ACCD;" data-v-c705f496>ref</span><span style="color:#F07178;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>}</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>from</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>&#39;</span><span style="color:#C3E88D;" data-v-c705f496>vue</span><span style="color:#89DDFF;" data-v-c705f496>&#39;</span></span>
<span class="line" data-v-c705f496></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#C792EA;" data-v-c705f496>const</span><span style="color:#A6ACCD;" data-v-c705f496> value1 </span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#82AAFF;" data-v-c705f496>ref</span><span style="color:#A6ACCD;" data-v-c705f496>(</span><span style="color:#FF9CAC;" data-v-c705f496>true</span><span style="color:#A6ACCD;" data-v-c705f496>)</span></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#C792EA;" data-v-c705f496>const</span><span style="color:#A6ACCD;" data-v-c705f496> value2 </span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#82AAFF;" data-v-c705f496>ref</span><span style="color:#A6ACCD;" data-v-c705f496>(</span><span style="color:#FF9CAC;" data-v-c705f496>false</span><span style="color:#A6ACCD;" data-v-c705f496>)</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>&lt;/</span><span style="color:#F07178;" data-v-c705f496>script</span><span style="color:#89DDFF;" data-v-c705f496>&gt;</span></span>
<span class="line" data-v-c705f496></span></code></pre></div></details><h2 id="\u4E0D\u540C\u5C3A\u5BF8" tabindex="-1" data-v-c705f496>\u4E0D\u540C\u5C3A\u5BF8 <a class="header-anchor" href="#\u4E0D\u540C\u5C3A\u5BF8" aria-hidden="true" data-v-c705f496>#</a></h2><p data-v-c705f496><code data-v-c705f496>size</code> \u5C5E\u6027\u53EF\u914D\u7F6E\u4E0D\u540C\u7684\u5C3A\u5BF8</p>`,3),w=o(`<details class="details custom-block" data-v-c705f496><summary data-v-c705f496>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-c705f496><button title="Copy Code" class="copy" data-v-c705f496></button><span class="lang" data-v-c705f496>html</span><pre data-v-c705f496><code data-v-c705f496><span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>&lt;</span><span style="color:#F07178;" data-v-c705f496>template</span><span style="color:#89DDFF;" data-v-c705f496>&gt;</span></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#89DDFF;" data-v-c705f496>&lt;</span><span style="color:#F07178;" data-v-c705f496>f-swap</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>v-model</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>value5</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>:size</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>50</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>:icon-on</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>:icon-off</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>  /&gt;</span></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#89DDFF;" data-v-c705f496>&lt;</span><span style="color:#F07178;" data-v-c705f496>f-swap</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>v-model</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>value6</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>size</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>30px</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>:icon-on</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>FIconEye</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>:icon-off</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>FIconEyeSlash</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>  /&gt;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>&lt;/</span><span style="color:#F07178;" data-v-c705f496>template</span><span style="color:#89DDFF;" data-v-c705f496>&gt;</span></span>
<span class="line" data-v-c705f496></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>&lt;</span><span style="color:#F07178;" data-v-c705f496>script</span><span style="color:#89DDFF;" data-v-c705f496> </span><span style="color:#C792EA;" data-v-c705f496>lang</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>ts</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#89DDFF;" data-v-c705f496> </span><span style="color:#C792EA;" data-v-c705f496>setup</span><span style="color:#89DDFF;" data-v-c705f496>&gt;</span></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#89DDFF;" data-v-c705f496>import</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>{</span></span>
<span class="line" data-v-c705f496><span style="color:#F07178;" data-v-c705f496>    </span><span style="color:#A6ACCD;" data-v-c705f496>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-c705f496>,</span></span>
<span class="line" data-v-c705f496><span style="color:#F07178;" data-v-c705f496>    </span><span style="color:#A6ACCD;" data-v-c705f496>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-c705f496>,</span></span>
<span class="line" data-v-c705f496><span style="color:#F07178;" data-v-c705f496>    </span><span style="color:#A6ACCD;" data-v-c705f496>FIconEye</span><span style="color:#89DDFF;" data-v-c705f496>,</span></span>
<span class="line" data-v-c705f496><span style="color:#F07178;" data-v-c705f496>    </span><span style="color:#A6ACCD;" data-v-c705f496>FIconEyeSlash</span></span>
<span class="line" data-v-c705f496><span style="color:#F07178;" data-v-c705f496>  </span><span style="color:#89DDFF;" data-v-c705f496>}</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>from</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>&#39;</span><span style="color:#C3E88D;" data-v-c705f496>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-c705f496>&#39;</span></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#89DDFF;" data-v-c705f496>import</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>{</span><span style="color:#F07178;" data-v-c705f496> </span><span style="color:#A6ACCD;" data-v-c705f496>ref</span><span style="color:#F07178;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>}</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>from</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>&#39;</span><span style="color:#C3E88D;" data-v-c705f496>vue</span><span style="color:#89DDFF;" data-v-c705f496>&#39;</span></span>
<span class="line" data-v-c705f496></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#C792EA;" data-v-c705f496>const</span><span style="color:#A6ACCD;" data-v-c705f496> value3 </span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#82AAFF;" data-v-c705f496>ref</span><span style="color:#A6ACCD;" data-v-c705f496>(</span><span style="color:#FF9CAC;" data-v-c705f496>true</span><span style="color:#A6ACCD;" data-v-c705f496>)</span></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#C792EA;" data-v-c705f496>const</span><span style="color:#A6ACCD;" data-v-c705f496> value4 </span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#82AAFF;" data-v-c705f496>ref</span><span style="color:#A6ACCD;" data-v-c705f496>(</span><span style="color:#FF9CAC;" data-v-c705f496>true</span><span style="color:#A6ACCD;" data-v-c705f496>)</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>&lt;/</span><span style="color:#F07178;" data-v-c705f496>script</span><span style="color:#89DDFF;" data-v-c705f496>&gt;</span></span>
<span class="line" data-v-c705f496></span></code></pre></div></details><h2 id="\u4E0D\u540C\u52A8\u753B" tabindex="-1" data-v-c705f496>\u4E0D\u540C\u52A8\u753B <a class="header-anchor" href="#\u4E0D\u540C\u52A8\u753B" aria-hidden="true" data-v-c705f496>#</a></h2><p data-v-c705f496><code data-v-c705f496>type</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u52A8\u753B\u7C7B\u578B</p>`,3),V=o(`<details class="details custom-block" data-v-c705f496><summary data-v-c705f496>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-c705f496><button title="Copy Code" class="copy" data-v-c705f496></button><span class="lang" data-v-c705f496>html</span><pre data-v-c705f496><code data-v-c705f496><span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>&lt;</span><span style="color:#F07178;" data-v-c705f496>template</span><span style="color:#89DDFF;" data-v-c705f496>&gt;</span></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#89DDFF;" data-v-c705f496>&lt;</span><span style="color:#F07178;" data-v-c705f496>f-swap</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>v-model</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>value5</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>type</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>default</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>:icon-on</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>FIconEye</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>:icon-off</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>FIconEyeSlash</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>  /&gt;</span></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#89DDFF;" data-v-c705f496>&lt;</span><span style="color:#F07178;" data-v-c705f496>f-swap</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>v-model</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>value6</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>type</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>sound</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>:icon-on</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>FIconSun</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>:icon-off</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>FIconMoon</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>  /&gt;</span></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#89DDFF;" data-v-c705f496>&lt;</span><span style="color:#F07178;" data-v-c705f496>f-swap</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>v-model</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>value7</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>type</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>swap</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>:icon-on</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>    </span><span style="color:#C792EA;" data-v-c705f496>:icon-off</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>  /&gt;</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>&lt;/</span><span style="color:#F07178;" data-v-c705f496>template</span><span style="color:#89DDFF;" data-v-c705f496>&gt;</span></span>
<span class="line" data-v-c705f496></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>&lt;</span><span style="color:#F07178;" data-v-c705f496>script</span><span style="color:#89DDFF;" data-v-c705f496> </span><span style="color:#C792EA;" data-v-c705f496>lang</span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#C3E88D;" data-v-c705f496>ts</span><span style="color:#89DDFF;" data-v-c705f496>&quot;</span><span style="color:#89DDFF;" data-v-c705f496> </span><span style="color:#C792EA;" data-v-c705f496>setup</span><span style="color:#89DDFF;" data-v-c705f496>&gt;</span></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#89DDFF;" data-v-c705f496>import</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>{</span></span>
<span class="line" data-v-c705f496><span style="color:#F07178;" data-v-c705f496>    </span><span style="color:#A6ACCD;" data-v-c705f496>FIconSun</span><span style="color:#89DDFF;" data-v-c705f496>,</span></span>
<span class="line" data-v-c705f496><span style="color:#F07178;" data-v-c705f496>    </span><span style="color:#A6ACCD;" data-v-c705f496>FIconMoon</span><span style="color:#89DDFF;" data-v-c705f496>,</span></span>
<span class="line" data-v-c705f496><span style="color:#F07178;" data-v-c705f496>    </span><span style="color:#A6ACCD;" data-v-c705f496>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-c705f496>,</span></span>
<span class="line" data-v-c705f496><span style="color:#F07178;" data-v-c705f496>    </span><span style="color:#A6ACCD;" data-v-c705f496>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-c705f496>,</span></span>
<span class="line" data-v-c705f496><span style="color:#F07178;" data-v-c705f496>    </span><span style="color:#A6ACCD;" data-v-c705f496>FIconEye</span><span style="color:#89DDFF;" data-v-c705f496>,</span></span>
<span class="line" data-v-c705f496><span style="color:#F07178;" data-v-c705f496>    </span><span style="color:#A6ACCD;" data-v-c705f496>FIconEyeSlash</span></span>
<span class="line" data-v-c705f496><span style="color:#F07178;" data-v-c705f496>  </span><span style="color:#89DDFF;" data-v-c705f496>}</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>from</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>&#39;</span><span style="color:#C3E88D;" data-v-c705f496>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-c705f496>&#39;</span></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#89DDFF;" data-v-c705f496>import</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>{</span><span style="color:#F07178;" data-v-c705f496> </span><span style="color:#A6ACCD;" data-v-c705f496>ref</span><span style="color:#F07178;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>}</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>from</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>&#39;</span><span style="color:#C3E88D;" data-v-c705f496>vue</span><span style="color:#89DDFF;" data-v-c705f496>&#39;</span></span>
<span class="line" data-v-c705f496></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#C792EA;" data-v-c705f496>const</span><span style="color:#A6ACCD;" data-v-c705f496> value5 </span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#82AAFF;" data-v-c705f496>ref</span><span style="color:#A6ACCD;" data-v-c705f496>(</span><span style="color:#FF9CAC;" data-v-c705f496>true</span><span style="color:#A6ACCD;" data-v-c705f496>)</span></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#C792EA;" data-v-c705f496>const</span><span style="color:#A6ACCD;" data-v-c705f496> value6 </span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#82AAFF;" data-v-c705f496>ref</span><span style="color:#A6ACCD;" data-v-c705f496>(</span><span style="color:#FF9CAC;" data-v-c705f496>true</span><span style="color:#A6ACCD;" data-v-c705f496>)</span></span>
<span class="line" data-v-c705f496><span style="color:#A6ACCD;" data-v-c705f496>  </span><span style="color:#C792EA;" data-v-c705f496>const</span><span style="color:#A6ACCD;" data-v-c705f496> value7 </span><span style="color:#89DDFF;" data-v-c705f496>=</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#82AAFF;" data-v-c705f496>ref</span><span style="color:#A6ACCD;" data-v-c705f496>(</span><span style="color:#FF9CAC;" data-v-c705f496>true</span><span style="color:#A6ACCD;" data-v-c705f496>)</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>&lt;/</span><span style="color:#F07178;" data-v-c705f496>script</span><span style="color:#89DDFF;" data-v-c705f496>&gt;</span></span>
<span class="line" data-v-c705f496></span></code></pre></div></details><h2 id="attributes" tabindex="-1" data-v-c705f496>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-c705f496>#</a></h2><table data-v-c705f496><thead data-v-c705f496><tr data-v-c705f496><th data-v-c705f496>\u53C2\u6570</th><th data-v-c705f496>\u8BF4\u660E</th><th data-v-c705f496>\u7C7B\u578B</th><th data-v-c705f496>\u53EF\u9009\u503C</th><th data-v-c705f496>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-c705f496><tr data-v-c705f496><td data-v-c705f496><code data-v-c705f496>v-model</code></td><td data-v-c705f496>\u7ED1\u5B9A\u503C</td><td data-v-c705f496>boolean</td><td data-v-c705f496>\u2014\u2014</td><td data-v-c705f496>false</td></tr><tr data-v-c705f496><td data-v-c705f496><code data-v-c705f496>size</code></td><td data-v-c705f496>\u7EC4\u4EF6\u5C3A\u5BF8</td><td data-v-c705f496>string / number</td><td data-v-c705f496>\u2014\u2014</td><td data-v-c705f496>40</td></tr><tr data-v-c705f496><td data-v-c705f496><code data-v-c705f496>type</code></td><td data-v-c705f496>\u52A8\u753B\u7C7B\u578B</td><td data-v-c705f496>string</td><td data-v-c705f496><code data-v-c705f496>sound</code> <code data-v-c705f496>swap</code> <code data-v-c705f496>default</code></td><td data-v-c705f496>default</td></tr><tr data-v-c705f496><td data-v-c705f496><code data-v-c705f496>icon-on</code></td><td data-v-c705f496>\u6253\u5F00\u5C55\u793A\u7684\u56FE\u6807</td><td data-v-c705f496>object (VNode / Component)</td><td data-v-c705f496>\u2014\u2014</td><td data-v-c705f496>null</td></tr><tr data-v-c705f496><td data-v-c705f496><code data-v-c705f496>icon-off</code></td><td data-v-c705f496>\u5173\u95ED\u5C55\u793A\u7684\u56FE\u6807</td><td data-v-c705f496>object (VNode / Component)</td><td data-v-c705f496>\u2014\u2014</td><td data-v-c705f496>null</td></tr><tr data-v-c705f496><td data-v-c705f496><code data-v-c705f496>on-change</code></td><td data-v-c705f496>\u5F53\u7ED1\u5B9A\u503C\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td data-v-c705f496>Function</td><td data-v-c705f496>\u2014\u2014</td><td data-v-c705f496>null</td></tr></tbody></table><h2 id="interface" tabindex="-1" data-v-c705f496>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-c705f496>#</a></h2><p data-v-c705f496>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts" data-v-c705f496><button title="Copy Code" class="copy" data-v-c705f496></button><span class="lang" data-v-c705f496>ts</span><pre data-v-c705f496><code data-v-c705f496><span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>import</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>type</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>{</span></span>
<span class="line" data-v-c705f496><span style="color:#F07178;" data-v-c705f496>  </span><span style="color:#A6ACCD;" data-v-c705f496>SwapInstance</span><span style="color:#89DDFF;" data-v-c705f496>,</span></span>
<span class="line" data-v-c705f496><span style="color:#F07178;" data-v-c705f496>  </span><span style="color:#A6ACCD;" data-v-c705f496>SwapPropsType</span><span style="color:#89DDFF;" data-v-c705f496>,</span></span>
<span class="line" data-v-c705f496><span style="color:#F07178;" data-v-c705f496>  </span><span style="color:#A6ACCD;" data-v-c705f496>SwapType</span><span style="color:#89DDFF;" data-v-c705f496>,</span></span>
<span class="line" data-v-c705f496><span style="color:#F07178;" data-v-c705f496>  </span><span style="color:#A6ACCD;" data-v-c705f496>SwapOnChangeInterface</span></span>
<span class="line" data-v-c705f496><span style="color:#89DDFF;" data-v-c705f496>}</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>from</span><span style="color:#A6ACCD;" data-v-c705f496> </span><span style="color:#89DDFF;" data-v-c705f496>&#39;</span><span style="color:#C3E88D;" data-v-c705f496>fighting-design</span><span style="color:#89DDFF;" data-v-c705f496>&#39;</span></span>
<span class="line" data-v-c705f496></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-c705f496>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-c705f496>#</a></h2>`,7),S={href:"https://github.com/Tyh2001",target:"_blank"},k={href:"https://github.com/ChetSerenade",target:"_blank"},O=JSON.parse('{"title":"Swap \u5207\u6362","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u4E0D\u540C\u5C3A\u5BF8","slug":"\u4E0D\u540C\u5C3A\u5BF8","link":"#\u4E0D\u540C\u5C3A\u5BF8","children":[]},{"level":2,"title":"\u4E0D\u540C\u52A8\u753B","slug":"\u4E0D\u540C\u52A8\u753B","link":"#\u4E0D\u540C\u52A8\u753B","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/swap.md","lastUpdated":1666939123000}'),x={name:"components/swap.md"},U=g({...x,setup(z){const d=l(!0),f=l(!1),v=l(!0),r=l(!0),F=l(!0),D=l(!0),y=l(!0);return(M,a)=>{const c=E("f-swap"),u=E("f-avatar");return q(),b("div",null,[I,n(c,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=t=>d.value=t),"icon-on":s(p),"icon-off":s(e)},null,8,["modelValue","icon-on","icon-off"]),n(c,{modelValue:f.value,"onUpdate:modelValue":a[1]||(a[1]=t=>f.value=t),"icon-on":s(p),"icon-off":s(e)},null,8,["modelValue","icon-on","icon-off"]),_,n(c,{modelValue:v.value,"onUpdate:modelValue":a[2]||(a[2]=t=>v.value=t),size:50,"icon-on":s(h),"icon-off":s(C)},null,8,["modelValue","icon-on","icon-off"]),n(c,{modelValue:r.value,"onUpdate:modelValue":a[3]||(a[3]=t=>r.value=t),size:"30px","icon-on":s(i),"icon-off":s(A)},null,8,["modelValue","icon-on","icon-off"]),w,n(c,{modelValue:F.value,"onUpdate:modelValue":a[4]||(a[4]=t=>F.value=t),type:"default","icon-on":s(i),"icon-off":s(A)},null,8,["modelValue","icon-on","icon-off"]),n(c,{modelValue:D.value,"onUpdate:modelValue":a[5]||(a[5]=t=>D.value=t),type:"sound","icon-on":s(p),"icon-off":s(e)},null,8,["modelValue","icon-on","icon-off"]),n(c,{modelValue:y.value,"onUpdate:modelValue":a[6]||(a[6]=t=>y.value=t),type:"swap","icon-on":s(h),"icon-off":s(C)},null,8,["modelValue","icon-on","icon-off"]),V,m("a",S,[n(u,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),m("a",k,[n(u,{round:"",src:"https://avatars.githubusercontent.com/u/44160015?v=4"})])])}}});const P=B(U,[["__scopeId","data-v-c705f496"]]);export{O as __pageData,P as default};
