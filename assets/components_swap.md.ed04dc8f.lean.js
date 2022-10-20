import{h as m,j as n,r as E,o as h,c as g,a as t,d,e as v,p as f,f as q,b as p,_ as b}from"./app.09f743d7.js";const c=e=>(f("data-v-d1879a94"),e=e(),q(),e),_=c(()=>d("h1",{id:"swap-\u5207\u6362",tabindex:"-1"},[p("Swap \u5207\u6362 "),d("a",{class:"header-anchor",href:"#swap-\u5207\u6362","aria-hidden":"true"},"#")],-1)),V=c(()=>d("p",null,[d("code",null,"Swap"),p(" \u662F\u4E00\u4E2A\u5207\u6362\u7EC4\u4EF6")],-1)),B=c(()=>d("h2",{id:"\u57FA\u672C\u4F7F\u7528",tabindex:"-1"},[p("\u57FA\u672C\u4F7F\u7528 "),d("a",{class:"header-anchor",href:"#\u57FA\u672C\u4F7F\u7528","aria-hidden":"true"},"#")],-1)),w=c(()=>d("p",null,[d("code",null,"Swap"),p(" \u7684\u57FA\u672C\u4F7F\u7528\uFF0C\u9700\u8981\u4F7F\u7528 "),d("code",null,"v-model"),p(" \u7ED1\u5B9A\u4E00\u4E2A\u503C")],-1)),z=v(`<details class="details custom-block" data-v-d1879a94><summary data-v-d1879a94>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-d1879a94><button title="Copy Code" class="copy" data-v-d1879a94></button><span class="lang" data-v-d1879a94>html</span><pre data-v-d1879a94><code data-v-d1879a94><span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>template</span><span style="color:#89DDFF;" data-v-d1879a94>&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>f-swap</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>v-model</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>value1</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> /&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>f-swap</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>v-model</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>value2</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> /&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>&lt;/</span><span style="color:#F07178;" data-v-d1879a94>template</span><span style="color:#89DDFF;" data-v-d1879a94>&gt;</span></span>
<span class="line" data-v-d1879a94></span>
<span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>script</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>lang</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>ts</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>setup</span><span style="color:#89DDFF;" data-v-d1879a94>&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#89DDFF;" data-v-d1879a94>import</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>{</span><span style="color:#F07178;" data-v-d1879a94> </span><span style="color:#A6ACCD;" data-v-d1879a94>ref</span><span style="color:#F07178;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>}</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>from</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>&#39;</span><span style="color:#C3E88D;" data-v-d1879a94>vue</span><span style="color:#89DDFF;" data-v-d1879a94>&#39;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#C792EA;" data-v-d1879a94>const</span><span style="color:#A6ACCD;" data-v-d1879a94> value1 </span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#82AAFF;" data-v-d1879a94>ref</span><span style="color:#A6ACCD;" data-v-d1879a94>(</span><span style="color:#FF9CAC;" data-v-d1879a94>true</span><span style="color:#A6ACCD;" data-v-d1879a94>)</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#C792EA;" data-v-d1879a94>const</span><span style="color:#A6ACCD;" data-v-d1879a94> value2 </span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#82AAFF;" data-v-d1879a94>ref</span><span style="color:#A6ACCD;" data-v-d1879a94>(</span><span style="color:#FF9CAC;" data-v-d1879a94>false</span><span style="color:#A6ACCD;" data-v-d1879a94>)</span></span>
<span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>&lt;/</span><span style="color:#F07178;" data-v-d1879a94>script</span><span style="color:#89DDFF;" data-v-d1879a94>&gt;</span></span>
<span class="line" data-v-d1879a94></span></code></pre></div></details><h2 id="\u4E0D\u540C\u5927\u5C0F" tabindex="-1" data-v-d1879a94>\u4E0D\u540C\u5927\u5C0F <a class="header-anchor" href="#\u4E0D\u540C\u5927\u5C0F" aria-hidden="true" data-v-d1879a94>#</a></h2><p data-v-d1879a94><code data-v-d1879a94>size</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u5927\u5C0F\u7684 <code data-v-d1879a94>swap</code></p>`,3),k=v(`<details class="details custom-block" data-v-d1879a94><summary data-v-d1879a94>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-d1879a94><button title="Copy Code" class="copy" data-v-d1879a94></button><span class="lang" data-v-d1879a94>html</span><pre data-v-d1879a94><code data-v-d1879a94><span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>template</span><span style="color:#89DDFF;" data-v-d1879a94>&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>f-swap</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>v-model</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>value3</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>size</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>large</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> /&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>f-swap</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>v-model</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>value3</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>size</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>middle</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> /&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>f-swap</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>v-model</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>value3</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>size</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>small</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> /&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>&lt;/</span><span style="color:#F07178;" data-v-d1879a94>template</span><span style="color:#89DDFF;" data-v-d1879a94>&gt;</span></span>
<span class="line" data-v-d1879a94></span>
<span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>script</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>lang</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>ts</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>setup</span><span style="color:#89DDFF;" data-v-d1879a94>&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#89DDFF;" data-v-d1879a94>import</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>{</span><span style="color:#F07178;" data-v-d1879a94> </span><span style="color:#A6ACCD;" data-v-d1879a94>ref</span><span style="color:#F07178;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>}</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>from</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>&#39;</span><span style="color:#C3E88D;" data-v-d1879a94>vue</span><span style="color:#89DDFF;" data-v-d1879a94>&#39;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#C792EA;" data-v-d1879a94>const</span><span style="color:#A6ACCD;" data-v-d1879a94> value3 </span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#82AAFF;" data-v-d1879a94>ref</span><span style="color:#A6ACCD;" data-v-d1879a94>(</span><span style="color:#FF9CAC;" data-v-d1879a94>false</span><span style="color:#A6ACCD;" data-v-d1879a94>)</span></span>
<span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>&lt;/</span><span style="color:#F07178;" data-v-d1879a94>script</span><span style="color:#89DDFF;" data-v-d1879a94>&gt;</span></span>
<span class="line" data-v-d1879a94></span></code></pre></div></details><h2 id="\u4E0D\u540C\u7C7B\u578B" tabindex="-1" data-v-d1879a94>\u4E0D\u540C\u7C7B\u578B <a class="header-anchor" href="#\u4E0D\u540C\u7C7B\u578B" aria-hidden="true" data-v-d1879a94>#</a></h2><p data-v-d1879a94><code data-v-d1879a94>type</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7C7B\u578B\u7684 <code data-v-d1879a94>swap</code></p>`,3),x=v(`<details class="details custom-block" data-v-d1879a94><summary data-v-d1879a94>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-d1879a94><button title="Copy Code" class="copy" data-v-d1879a94></button><span class="lang" data-v-d1879a94>html</span><pre data-v-d1879a94><code data-v-d1879a94><span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>template</span><span style="color:#89DDFF;" data-v-d1879a94>&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>f-swap</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>v-model</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>value4</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>size</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>middle</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>type</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>sound</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> /&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>f-swap</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>v-model</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>value5</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>size</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>middle</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>type</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>theme</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> /&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>f-swap</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>v-model</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>value6</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>size</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>middle</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>type</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>flip</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> /&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>f-swap</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>v-model</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>value7</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>size</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>middle</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>type</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>favorites</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> /&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>&lt;/</span><span style="color:#F07178;" data-v-d1879a94>template</span><span style="color:#89DDFF;" data-v-d1879a94>&gt;</span></span>
<span class="line" data-v-d1879a94></span>
<span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>script</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>lang</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>ts</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>setup</span><span style="color:#89DDFF;" data-v-d1879a94>&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#89DDFF;" data-v-d1879a94>import</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>{</span><span style="color:#F07178;" data-v-d1879a94> </span><span style="color:#A6ACCD;" data-v-d1879a94>ref</span><span style="color:#F07178;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>}</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>from</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>&#39;</span><span style="color:#C3E88D;" data-v-d1879a94>vue</span><span style="color:#89DDFF;" data-v-d1879a94>&#39;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#C792EA;" data-v-d1879a94>const</span><span style="color:#A6ACCD;" data-v-d1879a94> value4 </span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#82AAFF;" data-v-d1879a94>ref</span><span style="color:#A6ACCD;" data-v-d1879a94>(</span><span style="color:#FF9CAC;" data-v-d1879a94>true</span><span style="color:#A6ACCD;" data-v-d1879a94>)</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#C792EA;" data-v-d1879a94>const</span><span style="color:#A6ACCD;" data-v-d1879a94> value5 </span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#82AAFF;" data-v-d1879a94>ref</span><span style="color:#A6ACCD;" data-v-d1879a94>(</span><span style="color:#FF9CAC;" data-v-d1879a94>true</span><span style="color:#A6ACCD;" data-v-d1879a94>)</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#C792EA;" data-v-d1879a94>const</span><span style="color:#A6ACCD;" data-v-d1879a94> value6 </span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#82AAFF;" data-v-d1879a94>ref</span><span style="color:#A6ACCD;" data-v-d1879a94>(</span><span style="color:#FF9CAC;" data-v-d1879a94>true</span><span style="color:#A6ACCD;" data-v-d1879a94>)</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#C792EA;" data-v-d1879a94>const</span><span style="color:#A6ACCD;" data-v-d1879a94> value7 </span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#82AAFF;" data-v-d1879a94>ref</span><span style="color:#A6ACCD;" data-v-d1879a94>(</span><span style="color:#FF9CAC;" data-v-d1879a94>true</span><span style="color:#A6ACCD;" data-v-d1879a94>)</span></span>
<span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>&lt;/</span><span style="color:#F07178;" data-v-d1879a94>script</span><span style="color:#89DDFF;" data-v-d1879a94>&gt;</span></span>
<span class="line" data-v-d1879a94></span></code></pre></div></details><h2 id="\u56FE\u6807\u8F6C\u6362" tabindex="-1" data-v-d1879a94>\u56FE\u6807\u8F6C\u6362 <a class="header-anchor" href="#\u56FE\u6807\u8F6C\u6362" aria-hidden="true" data-v-d1879a94>#</a></h2><p data-v-d1879a94><code data-v-d1879a94>type</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7C7B\u578B\u7684 <code data-v-d1879a94>swap</code></p>`,3),S=v(`<details class="details custom-block" data-v-d1879a94><summary data-v-d1879a94>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-d1879a94><button title="Copy Code" class="copy" data-v-d1879a94></button><span class="lang" data-v-d1879a94>html</span><pre data-v-d1879a94><code data-v-d1879a94><span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>template</span><span style="color:#89DDFF;" data-v-d1879a94>&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>f-swap</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>v-model</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>value9</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>size</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>middle</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>type</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>rotate</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> /&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>&lt;/</span><span style="color:#F07178;" data-v-d1879a94>template</span><span style="color:#89DDFF;" data-v-d1879a94>&gt;</span></span>
<span class="line" data-v-d1879a94></span>
<span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>&lt;</span><span style="color:#F07178;" data-v-d1879a94>script</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>lang</span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#C3E88D;" data-v-d1879a94>ts</span><span style="color:#89DDFF;" data-v-d1879a94>&quot;</span><span style="color:#89DDFF;" data-v-d1879a94> </span><span style="color:#C792EA;" data-v-d1879a94>setup</span><span style="color:#89DDFF;" data-v-d1879a94>&gt;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#89DDFF;" data-v-d1879a94>import</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>{</span><span style="color:#F07178;" data-v-d1879a94> </span><span style="color:#A6ACCD;" data-v-d1879a94>ref</span><span style="color:#F07178;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>}</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>from</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>&#39;</span><span style="color:#C3E88D;" data-v-d1879a94>vue</span><span style="color:#89DDFF;" data-v-d1879a94>&#39;</span></span>
<span class="line" data-v-d1879a94><span style="color:#A6ACCD;" data-v-d1879a94>  </span><span style="color:#C792EA;" data-v-d1879a94>const</span><span style="color:#A6ACCD;" data-v-d1879a94> value9 </span><span style="color:#89DDFF;" data-v-d1879a94>=</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#82AAFF;" data-v-d1879a94>ref</span><span style="color:#A6ACCD;" data-v-d1879a94>(</span><span style="color:#FF9CAC;" data-v-d1879a94>true</span><span style="color:#A6ACCD;" data-v-d1879a94>)</span></span>
<span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>&lt;/</span><span style="color:#F07178;" data-v-d1879a94>script</span><span style="color:#89DDFF;" data-v-d1879a94>&gt;</span></span>
<span class="line" data-v-d1879a94></span></code></pre></div></details><h2 id="attributes" tabindex="-1" data-v-d1879a94>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-d1879a94>#</a></h2><table data-v-d1879a94><thead data-v-d1879a94><tr data-v-d1879a94><th data-v-d1879a94>\u53C2\u6570</th><th data-v-d1879a94>\u8BF4\u660E</th><th data-v-d1879a94>\u7C7B\u578B</th><th data-v-d1879a94>\u53EF\u9009\u503C</th><th data-v-d1879a94>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-d1879a94><tr data-v-d1879a94><td data-v-d1879a94><code data-v-d1879a94>v-model</code></td><td data-v-d1879a94>\u7ED1\u5B9A\u503C</td><td data-v-d1879a94>string</td><td data-v-d1879a94>\u2014\u2014</td><td data-v-d1879a94>false</td></tr><tr data-v-d1879a94><td data-v-d1879a94><code data-v-d1879a94>size</code></td><td data-v-d1879a94>\u7EC4\u4EF6\u5C3A\u5BF8</td><td data-v-d1879a94>string</td><td data-v-d1879a94><code data-v-d1879a94>large</code> <code data-v-d1879a94>middle</code> <code data-v-d1879a94>small</code></td><td data-v-d1879a94>middle</td></tr><tr data-v-d1879a94><td data-v-d1879a94><code data-v-d1879a94>type</code></td><td data-v-d1879a94>\u7C7B\u578B</td><td data-v-d1879a94>string</td><td data-v-d1879a94><code data-v-d1879a94>sound</code> <code data-v-d1879a94>theme</code> <code data-v-d1879a94>rotate</code> <code data-v-d1879a94>flip</code> <code data-v-d1879a94>favorites</code></td><td data-v-d1879a94>sound</td></tr></tbody></table><h2 id="interface" tabindex="-1" data-v-d1879a94>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-d1879a94>#</a></h2><p data-v-d1879a94>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts" data-v-d1879a94><button title="Copy Code" class="copy" data-v-d1879a94></button><span class="lang" data-v-d1879a94>ts</span><pre data-v-d1879a94><code data-v-d1879a94><span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>import</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>type</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>{</span><span style="color:#F07178;" data-v-d1879a94> </span></span>
<span class="line" data-v-d1879a94><span style="color:#F07178;" data-v-d1879a94>  </span><span style="color:#A6ACCD;" data-v-d1879a94>SwapPropsType</span><span style="color:#89DDFF;" data-v-d1879a94>,</span></span>
<span class="line" data-v-d1879a94><span style="color:#F07178;" data-v-d1879a94>  </span><span style="color:#A6ACCD;" data-v-d1879a94>SwapInstance</span><span style="color:#89DDFF;" data-v-d1879a94>,</span><span style="color:#F07178;" data-v-d1879a94> </span></span>
<span class="line" data-v-d1879a94><span style="color:#89DDFF;" data-v-d1879a94>}</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>from</span><span style="color:#A6ACCD;" data-v-d1879a94> </span><span style="color:#89DDFF;" data-v-d1879a94>&#39;</span><span style="color:#C3E88D;" data-v-d1879a94>fighting-design</span><span style="color:#89DDFF;" data-v-d1879a94>&#39;</span></span>
<span class="line" data-v-d1879a94></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-d1879a94>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-d1879a94>#</a></h2>`,7),U={href:"https://github.com/Tyh2001",target:"_blank"},I={href:"https://github.com/ChetSerenade",target:"_blank"},J=JSON.parse('{"title":"Swap \u5207\u6362","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u4E0D\u540C\u5927\u5C0F","slug":"\u4E0D\u540C\u5927\u5C0F","link":"#\u4E0D\u540C\u5927\u5C0F","children":[]},{"level":2,"title":"\u4E0D\u540C\u7C7B\u578B","slug":"\u4E0D\u540C\u7C7B\u578B","link":"#\u4E0D\u540C\u7C7B\u578B","children":[]},{"level":2,"title":"\u56FE\u6807\u8F6C\u6362","slug":"\u56FE\u6807\u8F6C\u6362","link":"#\u56FE\u6807\u8F6C\u6362","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/swap.md","lastUpdated":1666269107000}'),N={name:"components/swap.md"},T=m({...N,setup(e){const r=n(!0),F=n(!1),o=n(!1),D=n(!0),u=n(!0),y=n(!0),C=n(!0);n(!0);const A=n(!0);return(P,a)=>{const l=E("f-swap"),i=E("f-avatar");return h(),g("div",null,[_,V,B,w,t(l,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=s=>r.value=s)},null,8,["modelValue"]),t(l,{modelValue:F.value,"onUpdate:modelValue":a[1]||(a[1]=s=>F.value=s)},null,8,["modelValue"]),z,t(l,{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=s=>o.value=s),size:"large"},null,8,["modelValue"]),t(l,{modelValue:o.value,"onUpdate:modelValue":a[3]||(a[3]=s=>o.value=s),size:"middle"},null,8,["modelValue"]),t(l,{modelValue:o.value,"onUpdate:modelValue":a[4]||(a[4]=s=>o.value=s),size:"small"},null,8,["modelValue"]),k,t(l,{modelValue:D.value,"onUpdate:modelValue":a[5]||(a[5]=s=>D.value=s),size:"middle",type:"sound"},null,8,["modelValue"]),t(l,{modelValue:u.value,"onUpdate:modelValue":a[6]||(a[6]=s=>u.value=s),size:"middle",type:"theme"},null,8,["modelValue"]),t(l,{modelValue:y.value,"onUpdate:modelValue":a[7]||(a[7]=s=>y.value=s),size:"middle",type:"flip"},null,8,["modelValue"]),t(l,{modelValue:C.value,"onUpdate:modelValue":a[8]||(a[8]=s=>C.value=s),size:"middle",type:"favorites"},null,8,["modelValue"]),x,t(l,{modelValue:A.value,"onUpdate:modelValue":a[9]||(a[9]=s=>A.value=s),size:"middle",type:"rotate"},null,8,["modelValue"]),S,d("a",U,[t(i,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),d("a",I,[t(i,{round:"",src:"https://avatars.githubusercontent.com/u/44160015?v=4"})])])}}});const O=b(T,[["__scopeId","data-v-d1879a94"]]);export{J as __pageData,O as default};
