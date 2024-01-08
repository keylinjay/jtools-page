import{r,f as d,o as U,j as O,w as o,k as l,D as E,l as u,n as p,y as g,m as C,v as x,t as T,A as J,h as q,F as R}from"./index-b63eef77.js";import{N as f,a as S,b as K}from"./DataTable-b9c5313b.js";import{N as A,a as v}from"./FormItem-9113f445.js";import{a as L,N as H}from"./LayoutContent-a3968ff6.js";const w=["编号","唯一ID","所属工程","ID","更新状态","清单编号","清单项目名称","项目特征描述","计量单位","工程量","综合单价a","主材/设备b","安装c","人工d","机械e","辅材f","(管理+利润)g","合价","品牌","产地","栋号名称","区域","价格类型","变更编号","专业名称","包名称","一级系统","二级系统","一级物料","二级物料","包商名称","发生时间","修改时间","添加时间","录入人"],Y={__name:"index",setup(W){const z=r(null),k=r("small"),t=r({selectValueProjectName:"",selectValueProjectNames:["京东方B17项目180K扩产设计项目"],selectValueFilter1:"栋号名称",selectValueFilter2:"专业名称",selectValueLv1:"",selectValueLv2:"",selectValueItemLv1:"",selectValueItemLv2:"",selectValueBuildingCategory:"",selectValueBuildingName:"",selectValuePackageName:"",selectValueFilterName1:"",selectValueFilterName2:"",selectValueFloorage:"建筑面积",inputValue:{itemName:"",itemCharacteristic:""}});d(()=>"分类1:"+(t.value.selectValueFilter1||"请先选择分类1")),d(()=>"分类2:"+(t.value.selectValueFilter2||"请先选择分类2"));const P={selectValueProjectName:{trigger:["blur","change"],message:"请选择 selectValue"}},s=r({filter1:["栋号名称","包名称","专业名称","一级系统","二级系统","一级物料","二级物料"].map(e=>({label:e,value:e})),filter2:["栋号名称","包名称","专业名称","一级系统","二级系统","一级物料","二级物料"].map(e=>({label:e,value:e})),floorageNames:["建筑面积","洁净面积","核心面积","精装面积","普装面积"].map(e=>({label:e,value:e}))});d(()=>{let e=s.value.buildingNames;switch(console.log(t.value.selectValueFilter1),t.value.selectValueFilter1){case"栋号名称":e=s.value.buildingNames;break;case"包名称":e=s.value.packageNames;break;case"专业名称":e=s.value.majorNames;break;case"一级系统":e=s.value.lv1;break;case"二级系统":e=s.value.lv2;break;case"一级物料":e=s.value.itemLv1;break;case"二级物料":e=s.value.itemLv2;break}return e}),d(()=>{let e=s.value.buildingNames;switch(console.log(t.value.selectValueFilter2),t.value.selectValueFilter2){case"栋号名称":e=s.value.buildingNames;break;case"包名称":e=s.value.packageNames;break;case"专业名称":e=s.value.majorNames;break;case"一级系统":e=s.value.lv1;break;case"二级系统":e=s.value.lv2;break;case"一级物料":e=s.value.itemLv1;break;case"二级物料":e=s.value.itemLv2;break}return e}),r([{label:"在这里选择要查询的项目的名称",value:"",disabled:!0}]);const j=({node:e,option:a})=>q(R,{placement:"right"},{trigger:()=>e,default:()=>a.label}),B=()=>{var e=[];return e};let N=r(0),b=r(0);const V=r(B()),n=r({page:1,pageSize:15,showSizePicker:!0,pageSizes:[15,30,50],prefix({itemCount:e}){return`共计 ${e}条数据`},onUpdatePageSize:e=>{n.value.pageSize=e,n.value.page=1}}),h=new Intl.NumberFormat("en-US"),_=[];console.log("表格的字段列表columnNames is",w),w.forEach(e=>{let a={title:e,key:e,name:e,minWidth:100,align:"right"};e=="项目特征描述"&&(console.log("项目特征描述字段为：",e),a.align="left",a.width=400),e=="所属工程"&&(console.log("项目特征描述字段为：",e),a.align="left",a.width=200),e=="清单项目名称"&&(console.log("项目特征描述字段为：",e),a.align="center",a.width=200),_.push(a)});async function y(e){const a=await E.post("/DataTools/queryData",{projectName:t.value.selectValueProjectName||"",projectNames:t.value.selectValueProjectNames||["京东方B17项目180K扩产设计项目"],buildingCategory:t.value.selectValueBuildingCategory||"",itemName:t.value.inputValue.itemName||"",itemCharacteristic:t.value.inputValue.itemCharacteristic||"",page:e,pageSize:n.value.pageSize});n.value.itemCount=a.total,n.value.page=a.page,n.value.pageSize=a.pageSize,n.value.pageCount=a.pageCount,console.log("查询返回res is",a),console.log("查询结果的json数据对象化：",JSON.parse(a.data));let i=JSON.parse(a.data);V.value=[],N.value=a.total_price_sum,b.value=a.total_floorage_sum,console.log("查询结果的数据字段为：",Object.keys(i[0])),i.forEach(m=>{let c={};Object.keys(i[0]).forEach(F=>{c[F]=m[F]}),V.value.push(c)}),["projectNames","lv1","lv2","itemLv1","itemLv2","majorNames","packageNames","buildingNames"].forEach(m=>{s.value[m]=[],JSON.parse(a[m]).forEach(c=>{c&&s.value[m].push({label:c,value:c})})})}y(1);async function D(){y(1)}async function I(e){y(e)}return(e,a)=>(U(),O(l(J),{position:"absolute"},{default:o(()=>[u(l(x),{justify:"space-between",align:"center",style:{height:"48px",padding:"12px"}},{default:o(()=>[u(l(f),{type:"info",style:{"min-width":"10rem"}},{default:o(()=>[p(g(t.value.selectValueProjectName?t.value.selectValueProjectName:"这里仅用于显示当前项目名称"),1)]),_:1}),u(l(C),null,{default:o(()=>[u(l(f),{bordered:!1,type:"success"},{default:o(()=>[p(" 总价:"+g(l(h).format((l(N)/1e4).toFixed(2)))+"（万元） ",1)]),_:1}),u(l(f),{bordered:!1,type:"success"},{default:o(()=>[p(" 总面积:"+g(l(h).format(l(b).toFixed(2)))+"（m2） ",1)]),_:1}),u(l(f),{bordered:!1,type:"info"},{default:o(()=>[p(" 单平米指标:"+g(l(h).format((l(N)/l(b)).toFixed(2)))+"（元/m2） ",1)]),_:1})]),_:1})]),_:1}),u(l(T),{style:{height:"104px",padding:"12px"},bordered:""},{default:o(()=>[u(l(x),{justify:"space-between",align:"center"},{default:o(()=>[u(l(A),{inline:"",ref_key:"formRef",ref:z,model:t.value,rules:P,"label-width":"auto","require-mark-placement":"right-hanging",size:k.value},{default:o(()=>[u(l(v),{label:"项目名称",path:"selectValueProjectName"},{default:o(()=>[u(l(S),{filterable:"",value:t.value.selectValueProjectName,"onUpdate:value":a[0]||(a[0]=i=>t.value.selectValueProjectName=i),placeholder:"Select",options:s.value.projectNames,"render-option":j,clearable:""},null,8,["value","options"])]),_:1}),u(l(v),{label:"栋号名称",path:"selectValueBuildingName"},{default:o(()=>[u(l(S),{filterable:"",value:t.value.selectValueBuildingCategory,"onUpdate:value":a[1]||(a[1]=i=>t.value.selectValueBuildingCategory=i),placeholder:"Select",options:s.value.buildingNames,"render-option":j,clearable:""},null,8,["value","options"])]),_:1}),u(l(v),{label:"项目名称",path:"inputValue.itemName"},{default:o(()=>[u(l(L),{value:t.value.inputValue.itemName,"onUpdate:value":a[2]||(a[2]=i=>t.value.inputValue.itemName=i),placeholder:"请输入",clearable:""},null,8,["value"])]),_:1}),u(l(v),{label:"项目特征",path:"inputValue.itemCharacteristic"},{default:o(()=>[u(l(L),{value:t.value.inputValue.itemCharacteristic,"onUpdate:value":a[3]||(a[3]=i=>t.value.inputValue.itemCharacteristic=i),placeholder:"请输入",clearable:""},null,8,["value"])]),_:1}),u(l(v),null,{default:o(()=>[u(l(C),{type:"primary",onClick:D},{default:o(()=>[p(" 搜索 ")]),_:1})]),_:1})]),_:1},8,["model","size"])]),_:1})]),_:1}),u(l(H),{position:"absolute",style:{top:"152px",bottom:"0px"},"native-scrollbar":!1,"content-style":"padding: 12px;"},{default:o(()=>[u(l(K),{remote:"",ref:"table",columns:_,data:V.value,pagination:n.value,size:k.value,"scroll-x":4e3,"single-line":!1,"onUpdate:page":I,"max-height":"450"},null,8,["data","pagination","size"])]),_:1})]),_:1}))}};export{Y as default};
