import{i,e as f,o as _,C as B,l as u,w as r,k as t,F as O,D as E,n as g,x as b,m as C,G as T,h as q,H as J}from"./index-c2b83a87.js";import{N,a as m,b as R}from"./DataTable-b78340aa.js";import{a as n,N as K}from"./FormItem-eada1399.js";import{N as P}from"./Checkbox-c13f9e35.js";const I=["index","唯一ID","所属工程","ID","更新状态","清单编号","清单项目名称","项目特征描述","计量单位","工程量","综合单价a","主材/设备b","安装c","人工d","机械e","辅材f","(管理+利润)g","品牌","产地","栋号名称","区域","价格类型","变更编号","专业名称","包名称","一级系统","二级系统","一级物料","二级物料","包商名称","发生时间","修改时间","添加时间","录入人","编号","合价","分摊措施费","分摊其他费","分摊规费","分摊税金","合价含措施费","合价含措施费、其他费","合价含措施费、其他费、规费","合价含措施费、其他费、规费、税金"],Q=Object.assign({name:"queryData"},{__name:"index",setup(A){const x=i(null),j=i("small"),l=i({selectValueProjectName:"",selectValueProjectNames:["京东方B17项目180K扩产设计项目"],selectValueFilter1:"栋号名称",selectValueFilter2:"专业名称",selectValueLv1:"",selectValueLv2:"",selectValueItemLv1:"",selectValueItemLv2:"",selectValueBuildingCategory:"",selectValueBuildingName:"",selectValuePackageName:"",selectValueFilterName1:"",selectValueFilterName2:"",selectValueFloorage:"建筑面积",inputValue:{itemName:"",itemCharacteristic:""}});f(()=>"分类1:"+(l.value.selectValueFilter1||"请先选择分类1")),f(()=>"分类2:"+(l.value.selectValueFilter2||"请先选择分类2"));const z={selectValueProjectName:{trigger:["blur","change"],message:"请选择 selectValue"}},s=i({filter1:["栋号名称","包名称","专业名称","一级系统","二级系统","一级物料","二级物料"].map(e=>({label:e,value:e})),filter2:["栋号名称","包名称","专业名称","一级系统","二级系统","一级物料","二级物料"].map(e=>({label:e,value:e})),floorageNames:["建筑面积","洁净面积","核心面积","精装面积","普装面积"].map(e=>({label:e,value:e}))});f(()=>{let e=s.value.buildingNames;switch(console.log(l.value.selectValueFilter1),l.value.selectValueFilter1){case"栋号名称":e=s.value.buildingNames;break;case"包名称":e=s.value.packageNames;break;case"专业名称":e=s.value.majorNames;break;case"一级系统":e=s.value.lv1;break;case"二级系统":e=s.value.lv2;break;case"一级物料":e=s.value.itemLv1;break;case"二级物料":e=s.value.itemLv2;break}return e}),f(()=>{let e=s.value.buildingNames;switch(console.log(l.value.selectValueFilter2),l.value.selectValueFilter2){case"栋号名称":e=s.value.buildingNames;break;case"包名称":e=s.value.packageNames;break;case"专业名称":e=s.value.majorNames;break;case"一级系统":e=s.value.lv1;break;case"二级系统":e=s.value.lv2;break;case"一级物料":e=s.value.itemLv1;break;case"二级物料":e=s.value.itemLv2;break}return e}),i([{label:"在这里选择要查询的项目的名称",value:"",disabled:!0}]);const v=({node:e,option:a})=>q(J,{placement:"right"},{trigger:()=>e,default:()=>a.label}),w=()=>{var e=[];return e};let V=i(0),h=i(0);const k=i(w()),c=i({page:1,pageSize:15,showSizePicker:!0,pageSizes:[15,30,50],prefix({itemCount:e}){return`共计 ${e}条数据`},onUpdatePageSize:e=>{c.value.pageSize=e,c.value.page=1}}),L=new Intl.NumberFormat("en-US"),F=[];console.log("表格的字段列表columnNames is",I),I.forEach(e=>{let a={title:e,key:e,name:e,minWidth:100,titleAlign:"center",align:"right"};e=="项目特征描述"&&(console.log("项目特征描述字段为：",e),a.align="left",a.width=400),e=="所属工程"&&(console.log("项目特征描述字段为：",e),a.align="left",a.width=200),e=="清单项目名称"&&(console.log("项目特征描述字段为：",e),a.align="center",a.width=200),F.push(a)});async function y(e){const a=await E.post("/DataTools/queryData",{projectName:l.value.selectValueProjectName||"",projectNames:l.value.selectValueProjectNames||["京东方B17项目180K扩产设计项目"],buildingCategory:l.value.selectValueBuildingCategory||"",itemName:l.value.inputValue.itemName||"",itemCharacteristic:l.value.inputValue.itemCharacteristic||"",packageName:l.value.selectValuePackageName||"",lv1:l.value.selectValueLv1||"",lv2:l.value.selectValueLv2||"",itemLv1:l.value.selectValueItemLv1||"",itemLv2:l.value.selectValueItemLv2||"",page:e,pageSize:c.value.pageSize});c.value.itemCount=a.total,c.value.page=a.page,c.value.pageSize=a.pageSize,c.value.pageCount=a.pageCount,console.log("查询返回res is",a),console.log("查询结果的json数据对象化：",JSON.parse(a.data));let o=JSON.parse(a.data);k.value=[],V.value=a.total_price_sum,h.value=a.total_floorage_sum,console.log("查询结果的数据字段为：",Object.keys(o[0])),o.forEach(d=>{let p={};Object.keys(o[0]).forEach(S=>{p[S]=d[S]}),k.value.push(p)}),["projectNames","lv1","lv2","itemLv1","itemLv2","majorNames","packageNames","buildingNames"].forEach(d=>{s.value[d]=[],JSON.parse(a[d]).forEach(p=>{p&&s.value[d].push({label:p,value:p})})})}y(1);async function D(){y(1)}async function U(e){y(e)}return(e,a)=>(_(),B(O,null,[u(t(T),{justify:"space-between",align:"center"},{default:r(()=>[u(t(N),{type:"info",style:{"min-width":"10rem"}},{default:r(()=>[g(b(l.value.selectValueProjectName?l.value.selectValueProjectName:"这里仅用于显示当前项目名称"),1)]),_:1}),u(t(C),{bordered:!1},{default:r(()=>[u(t(N),{bordered:!1,type:"success"},{default:r(()=>[g(" 总价:"+b(t(L).format((t(V)/1e4).toFixed(2)))+"（万元） ",1)]),_:1}),u(t(N),{bordered:!1,type:"success"},{default:r(()=>[g(" 总面积:"+b(t(L).format(t(h).toFixed(2)))+"（m2） ",1)]),_:1}),u(t(N),{bordered:!1,type:"info"},{default:r(()=>[g(" 单平米指标:"+b(t(L).format((t(V)/t(h)).toFixed(2)))+"（元/m2） ",1)]),_:1})]),_:1})]),_:1}),u(t(K),{inline:"",ref_key:"formRef",ref:x,model:l.value,rules:z,"label-width":"auto","require-mark-placement":"right-hanging",size:j.value},{default:r(()=>[u(t(n),{label:"项目名称",path:"selectValueProjectName"},{default:r(()=>[u(t(m),{filterable:"",value:l.value.selectValueProjectName,"onUpdate:value":a[0]||(a[0]=o=>l.value.selectValueProjectName=o),placeholder:"Select",options:s.value.projectNames,"render-option":v,clearable:""},null,8,["value","options"])]),_:1}),u(t(n),{label:"栋号名称",path:"selectValueBuildingName"},{default:r(()=>[u(t(m),{filterable:"",value:l.value.selectValueBuildingCategory,"onUpdate:value":a[1]||(a[1]=o=>l.value.selectValueBuildingCategory=o),placeholder:"Select",options:s.value.buildingNames,"render-option":v,clearable:""},null,8,["value","options"])]),_:1}),u(t(n),{label:"项目名称",path:"inputValue.itemName"},{default:r(()=>[u(t(P),{value:l.value.inputValue.itemName,"onUpdate:value":a[2]||(a[2]=o=>l.value.inputValue.itemName=o),placeholder:"请输入",clearable:""},null,8,["value"])]),_:1}),u(t(n),{label:"项目特征",path:"inputValue.itemCharacteristic"},{default:r(()=>[u(t(P),{value:l.value.inputValue.itemCharacteristic,"onUpdate:value":a[3]||(a[3]=o=>l.value.inputValue.itemCharacteristic=o),placeholder:"请输入",clearable:""},null,8,["value"])]),_:1}),u(t(n),{label:"包名称",path:"selectValuePackageName"},{default:r(()=>[u(t(m),{filterable:"",value:l.value.selectValuePackageName,"onUpdate:value":a[4]||(a[4]=o=>l.value.selectValuePackageName=o),placeholder:"Select",options:s.value.packageNames,"render-option":v,clearable:""},null,8,["value","options"])]),_:1}),u(t(n),{label:"一级系统",path:"selectValueLv1"},{default:r(()=>[u(t(m),{filterable:"",value:l.value.selectValueLv1,"onUpdate:value":a[5]||(a[5]=o=>l.value.selectValueLv1=o),placeholder:"Select",options:s.value.lv1,"render-option":v,clearable:""},null,8,["value","options"])]),_:1}),u(t(n),{label:"二级系统",path:"selectValueLv2"},{default:r(()=>[u(t(m),{filterable:"",value:l.value.selectValueLv2,"onUpdate:value":a[6]||(a[6]=o=>l.value.selectValueLv2=o),placeholder:"Select",options:s.value.lv2,"render-option":v,clearable:""},null,8,["value","options"])]),_:1}),u(t(n),{label:"一级物料",path:"selectValueItemLv1"},{default:r(()=>[u(t(m),{filterable:"",value:l.value.selectValueItemLv1,"onUpdate:value":a[7]||(a[7]=o=>l.value.selectValueItemLv1=o),placeholder:"Select",options:s.value.itemLv1,"render-option":v,clearable:""},null,8,["value","options"])]),_:1}),u(t(n),{label:"二级物料",path:"selectValueItemLv2"},{default:r(()=>[u(t(m),{filterable:"",value:l.value.selectValueItemLv2,"onUpdate:value":a[8]||(a[8]=o=>l.value.selectValueItemLv2=o),placeholder:"Select",options:s.value.itemLv2,"render-option":v,clearable:""},null,8,["value","options"]),u(t(C),{type:"primary",onClick:D},{default:r(()=>[g(" 搜索 ")]),_:1})]),_:1})]),_:1},8,["model","size"]),u(t(R),{remote:"",ref:"table",columns:F,data:k.value,pagination:c.value,size:j.value,"scroll-x":4e3,"single-line":!1,"onUpdate:page":U,"max-height":"450"},null,8,["data","pagination","size"])],64))}});export{Q as default};
