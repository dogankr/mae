import{s as h,j as e,C as y,r as f,T as g,A as $,B as _,m as u,a as j,I as z,S as w,F as x,c as N,L as R,b as M}from"./index-fc75dee1.js";import{C as A,a as v,H,S as B,B as I,s as T,F as U,c as F,p as D}from"./constants-6c163b74.js";import{F as W,a as K,c as O,d as V}from"./index.esm-0ab70743.js";const L=()=>e.jsxs(q,{children:[e.jsxs("div",{className:"left",children:[e.jsx(y,{title:"Average Hrs",className:"elevated",value:"3,914 hrs",background:"linear-gradient(180deg, #CDEAFA 0%, #DEF4FD 100%)"}),e.jsx(y,{title:"Average Revenue",className:"elevated",value:"£1.37M",background:"linear-gradient(180deg, #F1E0FF 0%, #DEF1FC 100%)"})]}),e.jsx(y,{title:"Mode Data Plz",className:"elevated",value:"912",background:"linear-gradient(180deg, #D6CFFF 0%, #DEF1FC 100%)",children:e.jsx(A,{preset:"minimalBar",option:{xAxis:{data:["Jan","Feb","Mar","Apr","May","Jun"]},series:[{data:[5,8,2,4,6,3]}]},style:{marginTop:"50px"}})}),e.jsx(y,{title:"Average Split",className:"elevated",value:null,background:"linear-gradient(180deg, #CDF3F5 0%, #DEF1FC 100%)",children:e.jsxs("div",{style:{display:"flex"},children:[e.jsx(A,{preset:"pie",option:{series:[{data:v.map((a,i)=>({name:a.name,value:[33,20,18,14,8,7][i]*10,itemStyle:{color:a.color}}))}]},style:{width:"210px",height:"200px"}}),e.jsx("div",{className:"legend",children:v.map((a,i)=>e.jsxs("div",{children:[e.jsx("div",{className:"icon",style:{background:a.color}}),e.jsxs("div",{style:{width:"32px"},children:[[33,20,18,14,8,7][i],"%"]}),e.jsx("span",{children:a.name})]},i))})]})})]}),q=h.div`
  display: grid;
  grid-template-columns: 186px 186px 440px;
  gap: 24px;
  .left {
    display: grid;
    grid-template-rows: 120px 120px;
    gap: 24px;
  }
  .legend {
    display: grid;
    align-content: center;
    gap: 4px;
    margin-left: 24px;
    font-size: 15px;
    color: #000757;
    .icon {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      align-items: center;
      gap: 14px;
    }
  }
`,J=({})=>{const[a,i]=f.useState([]),[n,d]=f.useState("");return e.jsx(G,{children:e.jsx(g,{columns:[{title:"client",dataIndex:"client",ellipsis:!0,width:150},{title:"Matter Name",dataIndex:"matterName",ellipsis:!0,width:150},{title:"Matter Partner",dataIndex:["matterPartner","name"],width:160,render:(t,r)=>e.jsx($,{users:[r.matterPartner]})},{title:"Hrs Billed",dataIndex:"hrsBilled",ellipsis:!0,width:80},{title:"Fees Billed",dataIndex:"feesBilled",ellipsis:!0,width:90,render:t=>"£"+Intl.NumberFormat("en",{notation:"compact"}).format(t)},{title:"Outcome",dataIndex:"outcome",width:100,render:(t,r)=>{var m;return e.jsx(_,{status:r.outcome,color:r.outcome==="settled"?"#009fc2":r.outcome==="went to trial"?"#5984ff":"grey",children:(m=r.outcome)==null?void 0:m.toUpperCase()})},filters:["settled","went to trial"].map(t=>({text:t.charAt(0).toUpperCase()+t.slice(1),value:t})),onFilter:(t,r)=>r.status.includes(t)}].map((t,r)=>({...t,key:r})),dataSource:u.similarTable.filter(t=>(t.client+t.matterName+t.matterPartner.name+t.hrsBilled+t.feesBilled+t.outcome).toLowerCase().includes(n.toLowerCase())),extendHeader:{title:"Similar Matters",extra:e.jsxs(e.Fragment,{children:[e.jsxs(j,{type:"primary",danger:!0,className:"pill",disabled:a.length===0,children:["Delete",e.jsx(W,{style:{height:"14px"}})]}),e.jsx(z,{className:"pill",size:"large",placeholder:"Search",style:{width:200},prefix:e.jsx(K,{style:{fontSize:"18px",color:"#767DC5"}}),value:n,onChange:t=>d(t.target.value)})]})},rowSelection:{type:"checkbox",selectedRowKeys:a,onSelectAll:(t,r,m)=>{i(t?r.map(s=>s.key):[])}},onRow:(t,r)=>({onClick:m=>{a.includes(t.key)?i(a.filter(s=>s!==t.key)):i([...a,t.key])}}),pagination:{showTotal:(t,r)=>`${r.join("-")} of ${t}`,showSizeChanger:!1,pageSize:10,onChange:()=>{i([])}}})})},G=h.div`
  .ant-table-row {
    cursor: pointer;
  }
`,P=v.map((a,i)=>({...a,price:(v.length-i)*100.3,key:i})),E=({})=>{const[a,i]=f.useState("Standard Rates"),[n,d]=f.useState(P),[t,r]=f.useState(P.map((s,l)=>({...s,price:u.assetHours[l].value*n[l].price}))),m=v.map((s,l)=>({...s,hours:u.assetHours[l].value,key:l}));return e.jsxs(Q,{children:[e.jsx(g,{columns:[{title:"Roles",width:150,render:s=>e.jsxs("span",{children:[e.jsx("span",{style:{color:s.color,marginRight:"10px"},children:"⬤"}),s.name]})},{title:"Predicted Hours",dataIndex:"hours",width:150,render:s=>s+" Hrs"},{title:e.jsx(w,{value:a,onChange:s=>{s==="Standard Rates"&&d(P),i(s)},options:["Standard Rates","Custom Rates"].map(s=>({label:s,value:s})),style:{width:150}}),width:150,render:s=>e.jsx(z,{type:"number",prefix:"$",style:{width:150,textAlign:"right",paddingRight:"10px",color:"#000757",fontWeight:"bold"},value:n[s.key].price,onChange:l=>{a!=="Custom Rates"&&i("Custom Rates"),d(n.map((o,p)=>p===s.key?{...o,price:+l.target.value}:o)),r(t.map((o,p)=>p===s.key?{...o,price:+l.target.value*u.assetHours[p].value}:o))}})},{title:"Predicted Cost",width:150,render:(s,l,o)=>Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t[o].price)}].map((s,l)=>({...s,key:l})),dataSource:m,extendHeader:{title:"Create Price Estimate"},pagination:!1,summary:s=>e.jsxs(g.Summary.Row,{children:[e.jsx(g.Summary.Cell,{index:0,children:"Total"}),e.jsxs(g.Summary.Cell,{index:1,children:[s.reduce((l,o)=>l+o.hours,0)," Hrs"]}),e.jsx(g.Summary.Cell,{index:2,children:Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n.reduce((l,o,p)=>l+o.price,0))}),e.jsx(g.Summary.Cell,{index:3,children:Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t.reduce((l,o)=>l+o.price,0))})]})}),e.jsxs("div",{className:"footer",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Predicted Total Price"}),e.jsx("span",{children:Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t.reduce((s,l)=>s+l.price,0))})]}),e.jsxs(j,{type:"primary",className:"pill outline",style:{width:"230px"},children:["Add Another Calculation",e.jsx(O,{})]}),e.jsxs(j,{type:"primary",className:"pill outline",style:{width:"207px",background:"#fff",color:"#0116eb"},children:["Share Price Estimate",e.jsx(V,{})]})]})]})},Q=h.div`
  .ant-table-row {
    td {
      color: #000757 !important;
    }
  }
  .footer {
    height: 125px;
    background: #0116eb;
    border-radius: 0 10px 0 0;
    padding: 36px 86px 36px 36px;
    margin: 24px -86px 0 -36px;
    color: #fff;
    display: grid;
    gap: 10px;
    grid-template-columns: 400px 1fr 1fr;
    & > :first-child {
      display: grid;
      font-size: 15px;
      :nth-child(2) {
        font-size: 26px;
        font-weight: 300;
      }
    }
    button svg {
      margin-left: 10px;
    }
  }
`,X=()=>e.jsxs(Y,{children:[e.jsx(L,{}),e.jsx(J,{}),e.jsx(E,{})]}),Y=h.div`
  padding: 36px 0 0 36px;
  display: grid;
  gap: 36px;
`,{Content:Z}=R,ee=()=>{var p;const[a,i]=f.useState(["claim_value","counterclaim_value"]),[n]=x.useForm();x.useWatch("claim_value",n);const[d,t]=N(),r=d.get("client"),m=d.get("matterNumber"),s=d.get("matterName"),l=d.get("pricingType");d.get("pricingAmount");const o=c=>{const S=Object.fromEntries(Object.entries(c).filter(([C,b])=>(b.value??b.value1??b.value2??null)!==null));console.log("SimilarMatters / handleFormSubmit / values:",S)};return e.jsxs(te,{children:[e.jsx(H,{client:(p=u.clients.find(c=>c.id===+r))==null?void 0:p.client,matter:{name:s,number:m},owner:u.users[r],info:{status:"Active",lastModified:"2021-01-01",type:l},matterAssumptionList:[{id:1,name:"Assumption 1",type:"Predictive"},{id:2,name:"Assumption 2",type:"Similar Matters"}]}),e.jsxs(Z,{children:[e.jsx(B,{title:e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"20px",fontWeight:"400"},children:"Assumptions"}),e.jsx(j,{icon:e.jsx(I,{style:{fontSize:"18px"}}),size:"small",type:"text",style:{color:"#747ABA",fontSize:"14px",fontweight:500},onClick:()=>{i(["claim_value","counterclaim_value"]),n.resetFields()},children:"Clear All Filters"})]}),subtitle:e.jsx("div",{children:"Build your assumptions to find similar matters."}),children:e.jsxs(x,{name:"form",form:n,onFinish:o,initialValues:{claim_value:{operator:"eq",value:"0"},counterclaim_value:{operator:"eq",value:"0"}},children:[T.filter(c=>a.includes(c[1])).map((c,S)=>e.jsx(U,{name:c[1],form:n,handleHide:C=>{n.setFieldValue(C,void 0),i(b=>b.filter(k=>k!==C))}},S)),e.jsx(w,{className:"addAssumption",value:"Add an assumption +",options:T.filter(c=>!a.includes(c[1])).map(c=>({label:e.jsxs("span",{children:[F(c[1]),e.jsx("span",{style:{float:"right",opacity:.5},children:F(c[0])})]}),value:c[1]})),onSelect:c=>{i(S=>[...S,c])}}),e.jsx(j,{type:"primary",block:!0,className:"pill",style:{justifyContent:"center"},htmlType:"submit",children:"Find Similar Matters"})]})}),e.jsx(X,{data:{}})]})]})},te=h.div`
  .addAssumption {
    margin-bottom: 10px;
    width: 100%;
    color: #0116eb;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    &.ant-select {
      width: 100%;
      text-align: center;
      .ant-select-selector,
      .ant-select-arrow {
        border: none;
        background: transparent;
        color: #0116eb;
        svg {
          display: none;
        }
      }
    }
  }
`,se=()=>e.jsxs(ae,{children:[e.jsx(y,{title:e.jsx("span",{style:{fontSize:"20px"},children:"Number of Documents Harvested vs. Total Hours"}),className:"elevated",value:null,background:"#EBF0F6",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"},children:[e.jsx("div",{className:"left",style:{display:"grid",alignItems:"center",justifyContent:"start"},children:e.jsxs(x,{name:"basic",layout:"vertical",children:[e.jsx(x.Item,{label:"Horizontal Axis",name:"username",children:e.jsx(w,{defaultValue:"1",options:[{label:"Documents Harvested",value:"1"}],style:{width:"200px"}})}),e.jsx(x.Item,{label:"Vertical Axis",name:"password",layout:"horizontal",children:e.jsx(w,{defaultValue:"1",options:[{label:"Total Hours",value:"1"}],style:{width:"200px"}})})]})}),e.jsx(A,{option:{grid:{left:10,right:10,bottom:10,top:25,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},xAxis:{name:"",splitLine:{show:!1},axisLine:{lineStyle:{color:"#A3A9E8"}},axisLabel:{color:"#000757",formatter:a=>a+"k"},axisTick:{show:!1}},yAxis:{name:"",splitLine:{show:!1},axisLine:{lineStyle:{color:"#A3A9E8"}},axisLabel:{color:"#000757",formatter:a=>a+" Hrs"},axisTick:{show:!1}},series:[{symbolSize:8,data:[[10,8.04],[8.07,6.95],[13,7.58],[9.05,8.81],[11,8.33],[14,7.66],[13.4,6.81],[10,6.33],[14,8.96],[12.5,6.82],[9.15,7.2],[11.5,7.2],[3.03,4.23],[12.2,7.83],[2.02,4.47],[1.05,3.33],[4.05,4.96],[6.03,7.24],[12,6.26],[12,8.84],[7.08,5.82],[5.02,5.68]],itemStyle:{color:"#A3A9E8"},type:"scatter"}]},style:{width:"500px",height:"200px"}})]})}),e.jsx(y,{title:e.jsx("span",{style:{fontSize:"20px"},children:"Predicted Hours per Phase by Fee Earner"}),className:"elevated",value:null,background:"#EBF0F6",children:e.jsx(A,{option:{grid:{left:30,right:10,bottom:10,top:25,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1},xAxis:{type:"value",axisLine:{show:!0,lineStyle:{color:"#A3A9E8"}},axisLabel:{color:"#000757",formatter:a=>a+" Hrs"},axisTick:{show:!1}},yAxis:{type:"category",splitLine:{show:!1},axisLine:{lineStyle:{color:"#A3A9E8"}},axisLabel:{color:"#000757"},axisTick:{show:!1},data:["Other","Trial","Trial Preparation","Expert Reports","Witness Statements","Disclosure","CMC","ADR Settlement","Interim Applications","Issues / SOC","Pre-Action"]},series:u.assetHours.map((a,i)=>({name:a.name,type:"bar",stack:"total",itemStyle:{color:v.find(n=>n.name===a.name).color},label:{show:!1},emphasis:{focus:"series"},data:Array(11).fill(0).map((n,d)=>({value:Math.random()*a.value/5}))}))},style:{width:"750px",height:"611px"}})})]}),ae=h.div`
  display: grid;
  gap: 24px;
`,{Content:ie}=R,re=()=>{var l;const a=M();console.log("Predictive / params:",a);const[i]=x.useForm();x.useWatch("claim_value",i);const[n,d]=N(),t=n.get("client"),r=n.get("matterNumber"),m=n.get("matterName"),s=n.get("pricingType");return n.get("pricingAmount"),e.jsxs(le,{children:[e.jsx(H,{client:(l=u.matters[t])==null?void 0:l.client,matter:{name:m,number:r},owner:u.users[t],info:{status:"Active",lastModified:"2021-01-01",type:s},matterAssumptionList:[{id:1,name:"Assumption 1",type:"Predictive"},{id:2,name:"Assumption 2",type:"Similar Matters"}]}),e.jsxs(ie,{children:[e.jsx(B,{title:e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"20px",fontWeight:"400"},children:"Assumptions"}),e.jsx(j,{icon:e.jsx(I,{style:{fontSize:"18px"}}),size:"small",type:"text",style:{color:"#747ABA",fontSize:"14px",fontweight:500},onClick:()=>{setFormKeys(["claim_value","counterclaim_value"]),i.resetFields()},children:"Clear All Filters"})]}),subtitle:Array.from(new Set(D.map(o=>o[0]))).map(o=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"16px",fontWeight:500,lineHeight:"19px",color:"#000757",marginTop:"10px",marginBottom:"10px"},children:F(o)}),e.jsx("div",{style:{display:"grid"},children:D.filter(p=>p[0]===o).map((p,c)=>e.jsxs("div",{className:"row",style:{display:"grid",gridTemplateColumns:"auto  1fr auto",gap:"10px",alignItems:"center",fontSize:"14px",color:"#747ABA"},children:[F(p[1]),e.jsx("div",{style:{width:"100%",borderBottom:"1px solid #747ABA33"}}),c===0&&o==="parties"?"Defendant":o==="claim"?`$${c+Math.floor(Math.random()*10)}.${c+Math.floor(Math.random()*10)}M`:c+Math.floor(Math.random()*10)]}))})]},o))}),e.jsxs("div",{className:"pageContent",children:[e.jsx(L,{}),e.jsx(se,{}),e.jsx(E,{})]})]})]})},le=h.div`
  .pageContent {
    padding: 36px 0 0 36px;
    display: grid;
    gap: 36px;
  }
`,me=()=>{const a=M();console.log("Predictive / params:",a);const[i,n]=N(),d=i.get("client"),t=i.get("matterNumber"),r=i.get("matterName"),m=i.get("pricingType"),s=i.get("pricingAmount");return console.log("Predictive / sp:",{clientParam:d,matterNumberParam:t,matterNameParam:r,pricingTypeParam:m,pricingAmountParam:s}),e.jsx(ne,{children:a.type==="similarMatters"?e.jsx(ee,{}):e.jsx(re,{})})},ne=h.div`
  &:before {
    background: linear-gradient(#0112bc, #0116eb);
    content: "";
    position: absolute;
    width: 100%;
    height: 276px;
    z-index: -3;
    top: 0;
    left: 0;
  }

  & > div > .ant-layout-content {
    display: grid;
    grid-template-columns: 385px 1fr;
    height: 100%;
  }
`;export{me as default};
