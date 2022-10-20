import{_ as d,r as o,o as i,c as D,a as s,w as a,b as n,d as r,e as t}from"./app.d762b748.js";const I=JSON.parse('{"title":"Breadcrumb \u9762\u5305\u5C51","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u6837\u5F0F","slug":"\u81EA\u5B9A\u4E49\u6837\u5F0F","link":"#\u81EA\u5B9A\u4E49\u6837\u5F0F","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u5206\u9694\u7B26","slug":"\u81EA\u5B9A\u4E49\u5206\u9694\u7B26","link":"#\u81EA\u5B9A\u4E49\u5206\u9694\u7B26","children":[]},{"level":2,"title":"\u81EA\u5B9A\u5C55\u793A icon","slug":"\u81EA\u5B9A\u5C55\u793A-icon","link":"#\u81EA\u5B9A\u5C55\u793A-icon","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u5C3A\u5BF8","slug":"\u81EA\u5B9A\u4E49\u5C3A\u5BF8","link":"#\u81EA\u5B9A\u4E49\u5C3A\u5BF8","children":[]},{"level":2,"title":"Breadcrumb Attractive","slug":"breadcrumb-attractive","link":"#breadcrumb-attractive","children":[]},{"level":2,"title":"Breadcrumb Slots","slug":"breadcrumb-slots","link":"#breadcrumb-slots","children":[]},{"level":2,"title":"Breadcrumb-item Slots","slug":"breadcrumb-item-slots","link":"#breadcrumb-item-slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/breadcrumb.md","lastUpdated":1666233586000}'),F={name:"components/breadcrumb.md"},y=t('<h1 id="breadcrumb-\u9762\u5305\u5C51" tabindex="-1">Breadcrumb \u9762\u5305\u5C51 <a class="header-anchor" href="#breadcrumb-\u9762\u5305\u5C51" aria-hidden="true">#</a></h1><p><code>Breadcrumb</code> \u7528\u4E8E\u7BA1\u7406\u9875\u9762\u7684\u5BFC\u822A\u94FE\u63A5</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/breadcrumb" target="_blank" rel="noreferrer">\u6E90\u4EE3\u7801</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/breadcrumb.md" target="_blank" rel="noreferrer">\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><p><code>f-breadcrumb</code> \u7684\u57FA\u672C\u4F7F\u7528</p>',5),u=t(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u9996\u9875</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6587\u7AE0</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5217\u8868</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="\u81EA\u5B9A\u4E49\u6837\u5F0F" tabindex="-1">\u81EA\u5B9A\u4E49\u6837\u5F0F <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6837\u5F0F" aria-hidden="true">#</a></h2><p><code>separator-color</code> \u53EF\u4EE5\u81EA\u5B9A\u4E49\u9694\u7B26\u989C\u8272</p><p><code>item-color</code> \u53EF\u4EE5\u914D\u7F6E\u5BFC\u822A\u6587\u5B57\u989C\u8272</p>`,4),b=t(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">separator-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#333</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">item-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u9996\u9875</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6587\u7AE0</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5217\u8868</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="\u81EA\u5B9A\u4E49\u5206\u9694\u7B26" tabindex="-1">\u81EA\u5B9A\u4E49\u5206\u9694\u7B26 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5206\u9694\u7B26" aria-hidden="true">#</a></h2><p><code>separator-icon</code> \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5206\u9694\u7B26</p>`,3),m=t(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">separator-icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">f-icon-arrow-right</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u9996\u9875</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6587\u7AE0</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5217\u8868</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="\u81EA\u5B9A\u5C55\u793A-icon" tabindex="-1">\u81EA\u5B9A\u5C55\u793A icon <a class="header-anchor" href="#\u81EA\u5B9A\u5C55\u793A-icon" aria-hidden="true">#</a></h2><p><code>f-breadcrumb-item</code> \u7EC4\u4EF6\u5185\u53EF\u4EE5\u6DFB\u52A0 <code>icon</code> \u4F5C\u4E3A\u5BFC\u822A\u540D\u3002</p>`,3),h=t(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">16px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">f-icon-collection</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6587\u7AE0</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5217\u8868</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="\u81EA\u5B9A\u4E49\u5C3A\u5BF8" tabindex="-1">\u81EA\u5B9A\u4E49\u5C3A\u5BF8 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5C3A\u5BF8" aria-hidden="true">#</a></h2><p><code>font-size</code> \u53EF\u4EE5\u81EA\u5B9A\u4E49\u4F60\u60F3\u8981\u7684\u6587\u5B57\u5927\u5C0F</p>`,3),_=t(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">font-size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">18px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u9996\u9875</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6587\u7AE0</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5217\u8868</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-breadcrumb</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="breadcrumb-attractive" tabindex="-1">Breadcrumb Attractive <a class="header-anchor" href="#breadcrumb-attractive" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>separator</code></td><td>\u5206\u9694\u7B26</td><td><code>string</code></td><td>\u2014\u2014</td><td>/</td></tr><tr><td><code>icon-separator</code></td><td>icon \u5206\u9694\u7B26</td><td><code>string</code></td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td><code>separator-color</code></td><td>\u5206\u9694\u7B26\u989C\u8272</td><td><code>string</code></td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td><code>item-color</code></td><td>\u9875\u9762\u5143\u7D20\u5206\u9694\u7B26</td><td><code>string</code></td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td><code>font-size</code></td><td>\u81EA\u5B9A\u4E49\u6587\u5B57\u5927\u5C0F</td><td><code>string</code></td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table><h2 id="breadcrumb-slots" tabindex="-1">Breadcrumb Slots <a class="header-anchor" href="#breadcrumb-slots" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td></tr></tbody></table><h2 id="breadcrumb-item-slots" tabindex="-1">Breadcrumb-item Slots <a class="header-anchor" href="#breadcrumb-item-slots" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td></tr></tbody></table><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">BreadcrumbInstance</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">BreadcrumbPropsType</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">BreadcrumbItemInstance</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,11),C={href:"https://github.com/Tyh2001",target:"_blank"},f={href:"https://github.com/onechuan",target:"_blank"};function g(A,T,v,S,k,x){const l=o("f-breadcrumb-item"),e=o("f-breadcrumb"),c=o("f-icon"),p=o("f-avatar");return i(),D("div",null,[y,s(e,null,{default:a(()=>[s(l,null,{default:a(()=>[n("\u9996\u9875")]),_:1}),s(l,null,{default:a(()=>[n("\u6587\u7AE0")]),_:1}),s(l,null,{default:a(()=>[n("\u5217\u8868")]),_:1})]),_:1}),u,s(e,{"separator-color":"#333","item-color":"blue"},{default:a(()=>[s(l,null,{default:a(()=>[n("\u9996\u9875")]),_:1}),s(l,null,{default:a(()=>[n("\u6587\u7AE0")]),_:1}),s(l,null,{default:a(()=>[n("\u5217\u8868")]),_:1})]),_:1}),b,s(e,{"separator-icon":"f-icon-arrow-right"},{default:a(()=>[s(l,null,{default:a(()=>[n("\u9996\u9875")]),_:1}),s(l,null,{default:a(()=>[n("\u6587\u7AE0")]),_:1}),s(l,null,{default:a(()=>[n("\u5217\u8868")]),_:1})]),_:1}),m,s(e,null,{default:a(()=>[s(l,null,{default:a(()=>[s(c,{size:"16px",icon:"f-icon-collection"})]),_:1}),s(l,null,{default:a(()=>[n("\u6587\u7AE0")]),_:1}),s(l,null,{default:a(()=>[n("\u5217\u8868")]),_:1})]),_:1}),h,s(e,{"font-size":"18px"},{default:a(()=>[s(l,null,{default:a(()=>[n("\u9996\u9875")]),_:1}),s(l,null,{default:a(()=>[n("\u6587\u7AE0")]),_:1}),s(l,null,{default:a(()=>[n("\u5217\u8868")]),_:1})]),_:1}),_,r("a",C,[s(p,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),r("a",f,[s(p,{round:"",src:"https://avatars.githubusercontent.com/u/98402209?v=4"})])])}const V=d(F,[["render",g]]);export{I as __pageData,V as default};
