import{h,j as d,r as D,o as u,c as i,a as s,w as o,b as F,F as b,d as a,e as C}from"./app.d762b748.js";const g=a("h3",null,"\u6C81\u56ED\u6625\xB7\u96EA",-1),E=a("p",null,"\u5317\u56FD\u98CE\u5149\uFF0C\u5343\u91CC\u51B0\u5C01\uFF0C\u4E07\u91CC\u96EA\u98D8\u3002",-1),f=a("p",null,"\u671B\u957F\u57CE\u5185\u5916\uFF0C\u60DF\u4F59\u83BD\u83BD\uFF1B\u5927\u6CB3\u4E0A\u4E0B\uFF0C\u987F\u5931\u6ED4\u6ED4\u3002",-1),m=a("p",null,"\u5C71\u821E\u94F6\u86C7\uFF0C\u539F\u9A70\u8721\u8C61\uFF0C\u6B32\u4E0E\u5929\u516C\u8BD5\u6BD4\u9AD8\u3002",-1),v=a("p",null,"\u987B\u6674\u65E5\uFF0C\u770B\u7EA2\u88C5\u7D20\u88F9\uFF0C\u5206\u5916\u5996\u5A06\u3002",-1),q=a("br",null,null,-1),w=a("p",null,"\u6C5F\u5C71\u5982\u6B64\u591A\u5A07\uFF0C\u5F15\u65E0\u6570\u82F1\u96C4\u7ADE\u6298\u8170\u3002",-1),k=a("p",null,"\u60DC\u79E6\u7687\u6C49\u6B66\uFF0C\u7565\u8F93\u6587\u91C7\uFF1B\u5510\u5B97\u5B8B\u7956\uFF0C\u7A0D\u900A\u98CE\u9A9A\u3002",-1),T=a("p",null,"\u4E00\u4EE3\u5929\u9A84\uFF0C\u6210\u5409\u601D\u6C57\uFF0C\u53EA\u8BC6\u5F2F\u5F13\u5C04\u5927\u96D5\u3002",-1),B=a("p",null,"\u4FF1\u5F80\u77E3\uFF0C\u6570\u98CE\u6D41\u4EBA\u7269\uFF0C\u8FD8\u770B\u4ECA\u671D\u3002",-1),S=h({__name:"demo1",setup(A){const t=d(!1),e=d("right"),p=l=>{e.value=l,t.value=!0};return(l,n)=>{const r=D("f-button"),c=D("f-space"),_=D("f-drawer");return u(),i(b,null,[s(c,null,{default:o(()=>[s(r,{type:"primary",onClick:n[0]||(n[0]=y=>p("left"))},{default:o(()=>[F("\u4ECE\u5DE6\u5F80\u53F3\u5F00")]),_:1}),s(r,{type:"primary",onClick:n[1]||(n[1]=y=>p("right"))},{default:o(()=>[F("\u4ECE\u53F3\u5F80\u5DE6\u5F00")]),_:1}),s(r,{type:"primary",onClick:n[2]||(n[2]=y=>p("top"))},{default:o(()=>[F("\u4ECE\u4E0A\u5F80\u4E0B\u5F00")]),_:1}),s(r,{type:"primary",onClick:n[3]||(n[3]=y=>p("bottom"))},{default:o(()=>[F("\u4ECE\u4E0B\u5F80\u4E0A\u5F00")]),_:1})]),_:1}),s(_,{visible:t.value,"onUpdate:visible":n[4]||(n[4]=y=>t.value=y),title:"Title",direction:e.value},{default:o(()=>[g,E,f,m,v,q,w,k,T,B]),_:1},8,["visible","direction"])],64)}}}),x=h({__name:"demo2",setup(A){const t=d(!1),e=d(!1);return(p,l)=>{const n=D("f-button"),r=D("f-drawer");return u(),i(b,null,[s(n,{type:"primary",onClick:l[0]||(l[0]=c=>t.value=!0)},{default:o(()=>[F("\u6253\u5F00")]),_:1}),s(r,{visible:t.value,"onUpdate:visible":l[3]||(l[3]=c=>t.value=c),title:"Title",size:"50%","append-to-body":""},{default:o(()=>[s(n,{type:"primary",onClick:l[1]||(l[1]=c=>e.value=!0)},{default:o(()=>[F("\u6253\u5F00\u5185\u5C42 drawer")]),_:1}),s(r,{visible:e.value,"onUpdate:visible":l[2]||(l[2]=c=>e.value=c),title:"Title"},{default:o(()=>[F(" \u5185\u5C42 drawer ")]),_:1},8,["visible"])]),_:1},8,["visible"])],64)}}}),$=C("",5),I=C("",3),V=C("",9),N={href:"https://github.com/Tyh2001",target:"_blank"},P={href:"https://github.com/wang-zhixin",target:"_blank"},R=JSON.parse('{"title":"Drawer \u62BD\u5C49","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u591A\u5C42\u5D4C\u5957","slug":"\u591A\u5C42\u5D4C\u5957","link":"#\u591A\u5C42\u5D4C\u5957","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/drawer.md","lastUpdated":1666233586000}'),z={name:"components/drawer.md"},j=Object.assign(z,{setup(A){return(t,e)=>{const p=D("f-avatar");return u(),i("div",null,[$,s(S),I,s(x),V,a("a",N,[s(p,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),a("a",P,[s(p,{round:"",src:"https://avatars.githubusercontent.com/u/50623519?v=4"})])])}}});export{R as __pageData,j as default};
