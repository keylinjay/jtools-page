import{c as C,a as w,an as m,b as d,L as r,d as $,u as y,e as g,f as k,i as z,h as l,aH as x,a4 as D,x as B,a5 as N,m as R,bv as p,o as I,br as P,l as c,w as h,bs as b,y as f,n as S,bt as T,bu as V}from"./index-1e93b464.js";const F=e=>{const{textColor1:o,dividerColor:n,fontWeightStrong:s}=e;return{textColor:o,color:n,fontWeight:s}},j={name:"Divider",common:C,self:F},L=j,E=w("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[m("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[m("no-title",`
 display: flex;
 align-items: center;
 `)]),d("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),r("title-position-left",[d("line",[r("left",{width:"28px"})])]),r("title-position-right",[d("line",[r("right",{width:"28px"})])]),r("dashed",[d("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),r("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),d("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),m("dashed",[d("line",{backgroundColor:"var(--n-color)"})]),r("dashed",[d("line",{borderColor:"var(--n-color)"})]),r("vertical",{backgroundColor:"var(--n-color)"})]),O=Object.assign(Object.assign({},g.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),W=$({name:"Divider",props:O,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=y(e),s=g("Divider","-divider",E,L,e,o),a=k(()=>{const{common:{cubicBezierEaseInOut:t},self:{color:u,textColor:v,fontWeight:_}}=s.value;return{"--n-bezier":t,"--n-color":u,"--n-text-color":v,"--n-font-weight":_}}),i=n?z("divider",void 0,a,e):void 0;return{mergedClsPrefix:o,cssVars:n?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:o,titlePlacement:n,vertical:s,dashed:a,cssVars:i,mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),l("div",{role:"separator",class:[`${t}-divider`,this.themeClass,{[`${t}-divider--vertical`]:s,[`${t}-divider--no-title`]:!o.default,[`${t}-divider--dashed`]:a,[`${t}-divider--title-position-${n}`]:o.default&&n}],style:i},s?null:l("div",{class:`${t}-divider__line ${t}-divider__line--left`}),!s&&o.default?l(x,null,l("div",{class:`${t}-divider__title`},this.$slots),l("div",{class:`${t}-divider__line ${t}-divider__line--right`})):null)}});const H={name:"Root",data(){return{isFetching:!1,content:"马之千里者，一食或尽粟一石。食马者不知其能千里而食也。是马也，虽有千里之能，食不饱，力不足，才美不外见，且欲与常马等不可得，安求其能千里也？",author:"韩愈 - 「马说」"}},methods:{fetchData(){this.isFetching||(this.isFetching=!0,fetch("https://v1.hitokoto.cn").then(e=>e.json()).then(e=>{setTimeout(()=>{this.isFetching=!1},3e3),this.content=e.hitokoto,this.author=(e.from_who?e.from_who:"")+" - 「"+e.from+"」"}))}},created(){},mounted(){setInterval(()=>{this.fetchData()},6e3)},components:{NGradientText:B,NCard:N,NDivider:W,NButton:R}},M=e=>(T("data-v-069a5e7a"),e=e(),V(),e),G={class:"wrap"},q=M(()=>b("a",{href:"/publish.html",target:"_blank"},"安装wps的jtools加载项",-1));function A(e,o,n,s,a,i){const t=p("n-gradient-text"),u=p("n-divider"),v=p("n-card"),_=p("n-button");return I(),P(x,null,[c(v,{onClick:i.fetchData},{default:h(()=>[c(t,{size:24,type:"success"},{default:h(()=>[b("p",G,'"'+f(a.content)+'"',1)]),_:1}),c(u,{"title-placement":"right"},{default:h(()=>[c(t,{size:14,type:"success"},{default:h(()=>[S(f(a.author),1)]),_:1})]),_:1})]),_:1},8,["onClick"]),c(_,null,{default:h(()=>[q]),_:1})],64)}const K=D(H,[["render",A],["__scopeId","data-v-069a5e7a"]]);export{K as default};
