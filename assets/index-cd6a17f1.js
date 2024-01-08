import{c as x,a as b,an as f,b as d,L as s,d as C,u as w,e as g,f as $,i as y,h as l,aH as k,a4 as z,x as D,a5 as B,bv as m,o as N,j as R,w as c,l as p,bs as P,y as u,n as T}from"./index-b63eef77.js";const V=e=>{const{textColor1:n,dividerColor:o,fontWeightStrong:r}=e;return{textColor:n,color:o,fontWeight:r}},F={name:"Divider",common:x,self:V},j=F,L=b("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[f("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[f("no-title",`
 display: flex;
 align-items: center;
 `)]),d("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),s("title-position-left",[d("line",[s("left",{width:"28px"})])]),s("title-position-right",[d("line",[s("right",{width:"28px"})])]),s("dashed",[d("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),s("vertical",`
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
 `),f("dashed",[d("line",{backgroundColor:"var(--n-color)"})]),s("dashed",[d("line",{borderColor:"var(--n-color)"})]),s("vertical",{backgroundColor:"var(--n-color)"})]),I=Object.assign(Object.assign({},g.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),O=C({name:"Divider",props:I,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=w(e),r=g("Divider","-divider",L,j,e,n),a=$(()=>{const{common:{cubicBezierEaseInOut:t},self:{color:h,textColor:v,fontWeight:_}}=r.value;return{"--n-bezier":t,"--n-color":h,"--n-text-color":v,"--n-font-weight":_}}),i=o?y("divider",void 0,a,e):void 0;return{mergedClsPrefix:n,cssVars:o?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:n,titlePlacement:o,vertical:r,dashed:a,cssVars:i,mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),l("div",{role:"separator",class:[`${t}-divider`,this.themeClass,{[`${t}-divider--vertical`]:r,[`${t}-divider--no-title`]:!n.default,[`${t}-divider--dashed`]:a,[`${t}-divider--title-position-${o}`]:n.default&&o}],style:i},r?null:l("div",{class:`${t}-divider__line ${t}-divider__line--left`}),!r&&n.default?l(k,null,l("div",{class:`${t}-divider__title`},this.$slots),l("div",{class:`${t}-divider__line ${t}-divider__line--right`})):null)}});const S={name:"Root",data(){return{isFetching:!1,content:"马之千里者，一食或尽粟一石。食马者不知其能千里而食也。是马也，虽有千里之能，食不饱，力不足，才美不外见，且欲与常马等不可得，安求其能千里也？",author:"韩愈 - 「马说」"}},methods:{fetchData(){this.isFetching||(this.isFetching=!0,fetch("https://v1.hitokoto.cn").then(e=>e.json()).then(e=>{setTimeout(()=>{this.isFetching=!1},3e3),this.content=e.hitokoto,this.author=(e.from_who?e.from_who:"")+" - 「"+e.from+"」"}))}},created(){},mounted(){setInterval(()=>{this.fetchData()},6e3)},components:{NGradientText:D,NCard:B,NDivider:O}},W={class:"wrap"};function E(e,n,o,r,a,i){const t=m("n-gradient-text"),h=m("n-divider"),v=m("n-card");return N(),R(v,{onClick:i.fetchData},{default:c(()=>[p(t,{size:24,type:"success"},{default:c(()=>[P("p",W,'"'+u(a.content)+'"',1)]),_:1}),p(h,{"title-placement":"right"},{default:c(()=>[p(t,{size:14,type:"success"},{default:c(()=>[T(u(a.author),1)]),_:1})]),_:1})]),_:1},8,["onClick"])}const M=z(S,[["render",E],["__scopeId","data-v-51269965"]]);export{M as default};
