import{i,e as N,o as D,C as O,l as u,w as n,k as r,F as _,D as E,m as A,n as J,h as T,H as W}from"./index-c2b83a87.js";import{a as p,N as q}from"./FormItem-eada1399.js";import{a as g,b as R}from"./DataTable-b78340aa.js";import"./Checkbox-c13f9e35.js";const X=Object.assign({name:"IndicatorComparision"},{__name:"index",setup(K){const S=i(null),F=i("medium"),e=i({selectValueProjectName:"广州粤芯半导体技术有限公司12英寸集成电路生产线项目总承包",selectValueProjectNames:["京东方B17项目180K扩产设计项目"],selectValueFilter1:"专业名称",selectValueFilter2:"",selectValueLv1:"",selectValueLv2:"",selectValueItemLv1:"",selectValueItemLv2:"",selectValueBuildingCategory:"",selectValueBuildingName:"",selectValuePackageName:"",selectValueFilterName1:"",selectValueFilterName2:"",selectValueFloorage:"建筑面积"}),y=N(()=>"分类1:"+(e.value.selectValueFilter1||"请先选择分类1")),C=N(()=>"分类2:"+(e.value.selectValueFilter2||"请先选择分类2")),z={selectValueProjectName:[{required:!0,trigger:["blur","change"],message:"请选择至少一个项目",validator:(l,a)=>(console.log("触发验证ProjectName",a),a.length==0?(console.log("触发验证ProjectName",a),new Error("需要选择至少一个项目")):!0)}]},t=i({filter1:["栋号名称","包名称","专业名称","一级系统","二级系统","一级物料","二级物料"].map(l=>({label:l,value:l})),filter2:["栋号名称","包名称","专业名称","一级系统","二级系统","一级物料","二级物料"].map(l=>({label:l,value:l})),floorageNames:["建筑面积","洁净面积","核心面积","精装面积","普装面积"].map(l=>({label:l,value:l}))}),I=N(()=>{let l=t.value.buildingNames;switch(console.log("当前分类1选择的是：",e.value.selectValueFilter1),e.value.selectValueFilter1){case"栋号名称":l=t.value.buildingNames;break;case"包名称":l=t.value.packageNames;break;case"专业名称":l=t.value.majorNames;break;case"一级系统":l=t.value.lv1;break;case"二级系统":l=t.value.lv2;break;case"一级物料":l=t.value.itemLv1;break;case"二级物料":l=t.value.itemLv2;break}return l}),L=N(()=>{let l=t.value.buildingNames;switch(console.log("当前分类2选择的是：",e.value.selectValueFilter2),e.value.selectValueFilter2){case"栋号名称":l=t.value.buildingNames;break;case"包名称":l=t.value.packageNames;break;case"专业名称":l=t.value.majorNames;break;case"一级系统":l=t.value.lv1;break;case"二级系统":l=t.value.lv2;break;case"一级物料":l=t.value.itemLv1;break;case"二级物料":l=t.value.itemLv2;break}return l});i([{label:"在这里选择要查询的项目的名称",value:"",disabled:!0}]);const c=({node:l,option:a})=>T(W,{placement:"right"},{trigger:()=>l,default:()=>a.label}),B=()=>{var l=[];return l};let U=i(0),x=i(0);const f=i(B()),v=i({page:1,pageSize:15,showSizePicker:!0,pageSizes:[15,30,50],prefix({itemCount:l}){return`共计 ${l}条数据`},onUpdatePageSize:l=>{v.value.pageSize=l,v.value.page=1}}),h=new Intl.NumberFormat("en-US"),V=i([]);async function b(l){const a=await E.post("/DataTools/IndicatorComparision",{projectName:e.value.selectValueProjectName||"",projectNames:e.value.selectValueProjectNames||["京东方B17项目180K扩产设计项目"],buildingCategory:e.value.selectValueBuildingCategory||"",filter1:e.value.selectValueFilter1||"",filter2:e.value.selectValueFilter2||"",filterName1:e.value.selectValueFilterName1||"",filterName2:e.value.selectValueFilterName2||"",areaCategory:e.value.selectValueFloorage||"建筑面积",page:l,pageSize:v.value.pageSize});v.value.itemCount=a.total,v.value.page=a.page,v.value.pageSize=a.pageSize,v.value.pageCount=a.pageCount,console.log("res data is",a),console.log("当前返回数据是：",JSON.parse(a.data));let o=JSON.parse(a.data);f.value=[],U.value=a.total_price_sum,x.value=a.total_floorage_sum,console.log("当前选择的面积类型是：",e.value.selectValueFloorage),V.value=[{title:"分类1",key:"filter1",minWidth:60,titleAlign:"center"},{title:"分类2",key:"filter2",minWidth:60,titleAlign:"center"},{title:e.value.selectValueProjectName+"单方造价（元/m2）",key:"costIndicator",minWidth:100,titleAlign:"center",align:"right",render:s=>h.format(s.costIndicator)}];for(let s=0;s<e.value.selectValueProjectNames.length;s++)V.value.push({title:e.value.selectValueProjectNames[s]+"单方造价（元/m2）",key:"costIndicator"+s,minWidth:100,titleAlign:"center",align:"right",render:m=>h.format(m["costIndicator"+s])});o.forEach(s=>{var j,P;let m={filter1:s[e.value.selectValueFilter1],filter2:s[e.value.selectValueFilter2],costIndicator:((j=s[e.value.selectValueProjectName+"单方造价"])==null?void 0:j.toFixed(2))||0};for(let d=0;d<e.value.selectValueProjectNames.length;d++)console.log("当前数据的项目是：",e.value.selectValueProjectNames[d]),m["costIndicator"+d]=((P=s[e.value.selectValueProjectNames[d]+"单方造价"])==null?void 0:P.toFixed(2))||0;f.value.push(m)}),["projectNames","lv1","lv2","itemLv1","itemLv2","majorNames","packageNames","buildingNames","buildingCategory"].forEach(s=>{t.value[s]=[],JSON.parse(a[s]).forEach(m=>{m&&t.value[s].push({label:m,value:m})})})}b(1);async function k(){b(1)}async function w(l){b(l)}return(l,a)=>(D(),O(_,null,[u(r(q),{inline:"",ref_key:"formRef",ref:S,model:e.value,rules:z,"require-mark-placement":"right-hanging",size:F.value},{default:n(()=>[u(r(p),{label:"项目名称",path:"selectValueProjectName"},{default:n(()=>[u(r(g),{filterable:"",value:e.value.selectValueProjectName,"onUpdate:value":a[0]||(a[0]=o=>e.value.selectValueProjectName=o),placeholder:"Select",options:t.value.projectNames,"render-option":c},null,8,["value","options"])]),_:1}),u(r(p),{label:"栋号分类",path:"selectValueBuildingCategory"},{default:n(()=>[u(r(g),{filterable:"",value:e.value.selectValueBuildingCategory,"onUpdate:value":a[1]||(a[1]=o=>e.value.selectValueBuildingCategory=o),placeholder:"Select",options:t.value.buildingCategory,"render-option":c,clearable:""},null,8,["value","options"])]),_:1}),u(r(p),{label:"分类1",path:"selectValueFilter1"},{default:n(()=>[u(r(g),{filterable:"",value:e.value.selectValueFilter1,"onUpdate:value":a[2]||(a[2]=o=>e.value.selectValueFilter1=o),placeholder:"Select",options:t.value.filter1,"render-option":c},null,8,["value","options"])]),_:1}),u(r(p),{label:y.value,path:"selectValueFilterName1"},{default:n(()=>[u(r(g),{filterable:"",value:e.value.selectValueFilterName1,"onUpdate:value":a[3]||(a[3]=o=>e.value.selectValueFilterName1=o),placeholder:"Select",options:I.value,"render-option":c,clearable:""},null,8,["value","options"])]),_:1},8,["label"]),u(r(p),{label:"面积",path:"selectValueFloorage"},{default:n(()=>[u(r(g),{filterable:"",value:e.value.selectValueFloorage,"onUpdate:value":a[4]||(a[4]=o=>e.value.selectValueFloorage=o),placeholder:"Select",options:t.value.floorageNames,"render-option":c},null,8,["value","options"])]),_:1}),u(r(p),{label:"分类2",path:"selectValueFilter2"},{default:n(()=>[u(r(g),{filterable:"",value:e.value.selectValueFilter2,"onUpdate:value":a[5]||(a[5]=o=>e.value.selectValueFilter2=o),placeholder:"Select",options:t.value.filter2,"render-option":c,clearable:""},null,8,["value","options"])]),_:1}),u(r(p),{label:C.value,path:"selectValueFilterName2"},{default:n(()=>[u(r(g),{filterable:"",value:e.value.selectValueFilterName2,"onUpdate:value":a[6]||(a[6]=o=>e.value.selectValueFilterName2=o),placeholder:"Select",options:L.value,"render-option":c,clearable:""},null,8,["value","options"]),u(r(A),{disabled:e.value.selectValueProjectName.length==0,type:"primary",onClick:k},{default:n(()=>[J(" 搜索 ")]),_:1},8,["disabled"])]),_:1},8,["label"])]),_:1},8,["model","size"]),u(r(p),{label:"添加对比项目",path:"selectValueProjectNames","label-placement":"left"},{default:n(()=>[u(r(g),{filterable:"",value:e.value.selectValueProjectNames,"onUpdate:value":[a[7]||(a[7]=o=>e.value.selectValueProjectNames=o),k],placeholder:"Select",multiple:"",options:t.value.projectNames,"render-option":c,"max-tag-count":1,clearable:""},null,8,["value","options"])]),_:1}),u(r(R),{remote:"",ref:"table",columns:V.value,data:f.value,pagination:v.value,size:F.value,"single-line":!1,"onUpdate:page":w,"max-height":"380"},null,8,["columns","data","pagination","size"])],64))}});export{X as default};