import{s as F,j as e,C as M,R as ie,r as x,T as C,A as ne,m as A,a as le,B as z,F as oe,I as q,b as ce,S as H,e as de,f as ue,g as J,h as pe,i as N,k as W,L as K,c as Y,d as me}from"./index-b6a7d676.js";import{C as B,a as k,s as L,r as R,i as U,H as G,S as Q,B as he,b as $,F as xe,c as O,p as ge,d as V}from"./constants-8c9f65b1.js";import{u as X}from"./useAPI-989904ff.js";const Z=({effort:l,revenue:n,split:p})=>e.jsxs(fe,{children:[e.jsxs("div",{className:"left",children:[e.jsx(M,{title:"Predicted Effort",className:"elevated",value:l?l+" hrs":"-",background:"linear-gradient(180deg, #CDEAFA 0%, #DEF4FD 100%)"}),e.jsx(M,{title:"Revenue Opportunity",className:"elevated",value:n?Intl.NumberFormat("en",{notation:"compact",style:"currency",currency:"USD",maximumFractionDigits:2,currencyDisplay:"symbol"}).format(n):"-",background:"linear-gradient(180deg, #F1E0FF 0%, #DEF1FC 100%)"})]}),e.jsx(M,{title:"Role Contribution",className:"elevated",value:p&&l?e.jsxs("span",{children:[(p.reduce((i,c)=>c+i,0)/6).toFixed(0),e.jsx("span",{style:{fontSize:"16px",marginLeft:"2px"},children:"hrs avg"})]}):"-",background:"linear-gradient(180deg, #D6CFFF 0%, #DEF1FC 100%)",children:e.jsx(B,{preset:"minimalBar",option:{xAxis:{data:k.map(i=>i.name)},series:[{name:"",data:p?p.map((i,c)=>({value:i,itemStyle:{color:k[c].color}})):[20,0,0,0,0,0],tooltip:{valueFormatter:i=>i+" hrs"}}]},style:{marginTop:"50px"}})}),e.jsx(M,{title:"Role Split",className:"elevated",value:null,background:"linear-gradient(180deg, #CDF3F5 0%, #DEF1FC 100%)",children:e.jsxs("div",{style:{display:"flex"},children:[e.jsx(B,{preset:"pie",option:{series:[{data:k.map((i,c)=>({name:i.name,value:(p||[0,0,0,0,0,0])[c],itemStyle:{color:i.color}}))}]},style:{width:"210px",height:"200px"}}),e.jsx("div",{className:"legend",children:k.map((i,c)=>e.jsxs(ie.Fragment,{children:[e.jsx("div",{className:"icon",style:{background:i.color}}),e.jsxs("div",{style:{},children:[l?Math.floor((p||[0,0,0,0,0,0])[c]/l*100):0,"%"]}),e.jsx("span",{children:i.name})]},c))})]})})]}),fe=F.div`
  display: grid;
  grid-template-columns: 200px 180px 1fr;
  gap: 24px;
  .left {
    display: grid;
    grid-template-rows: 120px 120px;
    gap: 24px;
  }
  .legend {
    display: grid;
    grid-template-columns: 18px 64px 1fr;
    align-content: center;
    align-items: center;
    gap: 8px 4px;
    margin-left: 10px;
    font-size: 15px;
    color: #000757;
    .icon {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    & > * {
      display: grid;
      align-items: center;
      gap: 14px;
    }
  }
`,ye=({data:l,loading:n})=>{const[p,i]=x.useState([]),[c,j]=x.useState("");return e.jsx(je,{children:e.jsx(C,{columns:[{title:"Client",dataIndex:"client_name",ellipsis:!0,width:150},{title:"Matter Name",dataIndex:"primary_matter_name",ellipsis:!0,width:150},{title:"Matter Partner",dataIndex:"aaMock_userID",width:150,render:(r,t)=>e.jsx(ne,{users:[A.users[r||0]]})},{title:"Hrs Billed",dataIndex:"aaMock_totalHours",ellipsis:!0,width:80,align:"right"},{title:"Fees Billed",dataIndex:"aaMock_feesBilled",ellipsis:!0,width:90,align:"right",render:(r,t)=>Intl.NumberFormat("en",{notation:"compact",style:"currency",currency:"USD",maximumFractionDigits:1}).format(r)},{title:"Outcome",dataIndex:"aaMock_outcome",width:100,render:(r,t)=>e.jsx(le,{status:r,color:r==="settled"?"#009fc2":r==="went to trial"?"#5984ff":"grey",children:r==null?void 0:r.toUpperCase()}),filters:["settled","went to trial"].map(r=>({text:r.charAt(0).toUpperCase()+r.slice(1),value:r})),onFilter:(r,t)=>t.aaMock_outcome.includes(r)}].map((r,t)=>({...r,key:t})),loading:n,dataSource:(l==null?void 0:l.filter(r=>(r.client_name+r.primary_matter_name+A.users[r.aaMock_userID||0].name+r.aaMock_totalHours+r.aaMock_feesBilled+r.aaMock_outcome).toLowerCase().includes(c.toLowerCase())))||[],extendHeader:{title:"Matters in Sample",extra:e.jsxs(e.Fragment,{children:[e.jsxs(z,{type:"primary",danger:!0,className:"pill",disabled:p.length===0,children:["Delete",e.jsx(oe,{style:{height:"14px"}})]}),e.jsx(q,{className:"pill",size:"large",placeholder:"Search",style:{width:200},prefix:e.jsx(ce,{style:{fontSize:"18px",color:"#767DC5"}}),value:c,onChange:r=>j(r.target.value)})]})},rowSelection:{type:"checkbox",selectedRowKeys:p,onSelectAll:(r,t,o)=>{i(r?t.map(s=>s.key):[])},onSelect:(r,t)=>{i(t?[...p,r.key]:p.filter(o=>o!==r.key))}},pagination:{showTotal:(r,t)=>`${t.join("-")} of ${r}`,showSizeChanger:!1,pageSize:10,onChange:()=>{i([])}}})})},je=F.div`
  .ant-table-row {
    cursor: pointer;
  }
`,ee=({hours:l,onCalculate:n})=>{const[p,i]=x.useState("Standard Rates"),[c,j]=x.useState(L),[r,t]=x.useState(L.map((s,a)=>({...s,price:A.assetHours[a].value*c[a].price})));x.useEffect(()=>{n&&n(r.reduce((s,a)=>s+a.price,0))},[r]),x.useEffect(()=>{t(c.map((s,a)=>({...s,price:(l?l[R.find(d=>d[0]===s.name)[1]]:A.assetHours[a].value)*c[a].price})))},[l,c]);const o=k.map((s,a)=>({...s,hours:l?l[R.find(d=>d[0]===s.name)[1]]:A.assetHours[a].value,key:a}));return e.jsxs(Se,{children:[e.jsx(C,{columns:[{title:"Roles",render:s=>e.jsxs("span",{children:[e.jsx("span",{style:{color:s.color,marginRight:"10px"},children:"⬤"}),s.name]})},{title:"Predicted Hours",dataIndex:"hours",align:"center",width:200,render:s=>s+" hrs"},{title:e.jsx(H,{value:p,onChange:s=>{s==="Standard Rates"&&j(L),i(s)},options:["Standard Rates","Custom Rates"].map(s=>({label:s,value:s})),style:{width:200}}),align:"center",width:100,render:s=>e.jsx(q,{type:"number",min:0,className:"ratesColumn",style:{width:120,textAlign:"right",paddingRight:"10px",color:"#000757",fontWeight:"bold"},value:c[s.key].price,onChange:a=>{p!=="Custom Rates"&&i("Custom Rates"),j(c.map((d,S)=>S===s.key?{...d,price:Math.floor(+a.target.value)}:d))}})},{title:"Predicted Revenue",width:200,align:"right",render:(s,a,d)=>e.jsx("span",{style:{marginRight:"7px"},children:Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(r[d].price)})}].map((s,a)=>({...s,key:a})),dataSource:o,extendHeader:{title:"Create Price Estimate"},pagination:!1,summary:s=>e.jsxs(C.Summary.Row,{children:[e.jsx(C.Summary.Cell,{index:0,children:"Total"}),e.jsxs(C.Summary.Cell,{index:1,children:[s.reduce((a,d)=>a+d.hours,0)," hrs"]}),e.jsx(C.Summary.Cell,{index:2,children:Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(c.reduce((a,d)=>a+d.price,0))}),e.jsx(C.Summary.Cell,{index:3,align:"right",children:Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(r.reduce((a,d)=>a+d.price,0))})]})}),e.jsxs("div",{className:"footer",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Predicted Total Price"}),e.jsx("span",{children:Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(r.reduce((s,a)=>s+a.price,0))})]}),e.jsxs(z,{type:"primary",className:"pill outline",style:{width:"230px"},children:["Add Another Calculation",e.jsx(de,{})]}),e.jsxs(z,{type:"primary",className:"pill outline",style:{width:"207px",background:"#fff",color:"#0116eb"},children:["Share Price Estimate",e.jsx(ue,{})]})]})]})},Se=F.div`
  .ant-table-row {
    td {
      color: #000757 !important;
    }
    .ant-table-cell:has(.ratesColumn)::before {
      content: "$";
      position: absolute;
      width: 20px;
      color: #000757;
      left: 30px;
      line-height: 30px;
      font-weight: 500;
    }
  }
  .footer {
    height: 125px;
    background: #0116eb;
    border-radius: 0 10px 0 0;
    padding: 36px 36px 36px 36px;
    margin: 24px 0 0 -36px;
    color: #fff;
    display: grid;
    gap: 10px;
    grid-template-columns: 364px 1fr 1fr;
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
`,be=({loading:l,data:n,filters:p})=>{const[i,c]=x.useState([]);x.useEffect(()=>{if(n){const o=n.results.filter(s=>{let a=!0;return Object.entries(p).forEach(([d,S])=>{const h=U.find(m=>d===m[0])[1];switch(S.operator){case"eq":a=a&&s[h]===+S.value;break;case"lt":a=a&&s[h]<+S.value;break;case"gt":a=a&&s[h]>+S.value;break;case"bw":a=a&&s[h]>+S.value1&&s[h]<+S.value2;break}}),a});c(o)}},[p,n]);const j=i.reduce((o,s)=>o+s.aaMock_totalHours,0),r=i.reduce((o,s)=>o+s.aaMock_feesBilled,0),t=i.reduce((o,s)=>(["Partner","Senior","Mid","Junior","Counsel","Paralegal"].forEach((a,d,S)=>{var h;o[d]=(o[d]||0)+(((h=s.aaMock_roleHours)==null?void 0:h[a])||0)}),o),[]).map(o=>Math.floor(o/i.length));return e.jsx(J,{spinning:l,children:e.jsxs(ve,{children:[e.jsx(Z,{effort:Math.floor(j/i.length),revenue:Math.floor(r/i.length),split:t}),e.jsx(ye,{data:i,loading:l}),e.jsx(ee,{hours:Object.fromEntries(["Partner","SeniorAssociate","MidAssociate","JuniorAssociate","Counsel","TraineeParalegal"].map((o,s)=>[o,t[s]]))})]})})},ve=F.div`
  padding: 36px 0 0 36px;
  display: grid;
  gap: 36px;
`,{Content:_e}=K,we=()=>{var T;pe();const[l,n]=x.useState(["claim_value","counterclaim_value"]),[p,i]=x.useState({claim_value:{operator:"eq",value:"0"},counterclaim_value:{operator:"eq",value:"0"}}),[c,j]=x.useState(null),[r,t]=x.useState(!1),[o]=N.useForm(),[s,a]=W(),d=s.get("client"),S=s.get("matterNumber"),h=s.get("matterName"),m=s.get("pricingType");s.get("pricingAmount");const[y,_]=x.useState(null),v=u=>Array(6).fill(0).map((g,f)=>f===0?Math.floor(Math.random()*(9-1))+1:[2,3,4].includes(f)?Math.floor(Math.random()*(30-10))+10:Math.floor(Math.random()*(35-18))+18).sort((g,f)=>g-f).reduce((g,f,b,w)=>{const te=["Counsel","Partner","Mid","Senior","Paralegal","Junior"],se=100-w.reduce((ae,re)=>ae+re,0);return g[te[b]]=Math.floor((b!==w.length-1?f:f+se)/100*u),g},{}),{data:D,isFetching:E}=X().query("/historicals",{},{onSuccess:async u=>{_({...u,results:u==null?void 0:u.results.map(g=>{const f=Math.floor(Object.entries(g).filter(([b,w])=>b.includes("hours")).reduce((b,w)=>b+w[1],0));return{...g,aaMock_userID:+(Math.random()*9).toFixed(0),aaMock_totalHours:f,aaMock_feesBilled:+(Object.entries(g).filter(([b,w])=>b.includes("hours")).reduce((b,w)=>b+w[1],0)*(350*(Math.random()*(1.3-.85)+.85))).toFixed(1),aaMock_outcome:f>400?"went to trial":"settled",aaMock_roleHours:v(f)}})})}});x.useEffect(()=>{t(!0);const u=setTimeout(()=>{j(o.getFieldsValue()),t(!1)},1e3);return()=>clearTimeout(u)},[l,p]);const I=u=>{Object.fromEntries(Object.entries(u).filter(([g,f])=>(f.value??f.value1??f.value2??null)!==null))},P=()=>{i(o.getFieldsValue())};return e.jsxs(Ae,{children:[e.jsx(G,{client:(T=A.clients[+d%10])==null?void 0:T.client,matter:{name:h,number:S},owner:A.users[d],info:{status:"Active",lastModified:"2021-01-01",type:m.charAt(0).toUpperCase()+m.slice(1)},matterAssumptionList:[{id:1,name:"Assumption 1",type:"Predictive"},{id:2,name:"Assumption 2",type:"Similar Matters"}]}),e.jsxs(_e,{children:[e.jsx(Q,{title:e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"20px",fontWeight:"400"},children:"Assumptions"}),e.jsx(z,{icon:e.jsx(he,{style:{fontSize:"18px"}}),size:"small",type:"text",style:{color:"#747ABA",fontSize:"14px",fontweight:500},onClick:()=>{n(["claim_value","counterclaim_value"]),o.resetFields()},children:"Clear All Filters"})]}),subtitle:e.jsx("div",{children:"Build your assumptions to find similar matters."}),children:e.jsxs(N,{name:"form",form:o,onFinish:I,initialValues:{claim_value:{operator:"eq",value:"0"},counterclaim_value:{operator:"eq",value:"0"}},children:[$.filter(u=>l.includes(u[1])).map((u,g)=>e.jsx(xe,{name:u[1],form:o,handleHide:f=>{o.setFieldValue(f,void 0),n(b=>b.filter(w=>w!==f)),P()},onChange:P},g)),e.jsx(H,{className:"addAssumption",value:"Add an assumption +",options:$.filter(u=>!l.includes(u[1])&&U.find(g=>g[0]===u[1])[1]!=="NOT_FOUND").map(u=>({label:e.jsxs("span",{children:[O(u[1]),e.jsx("span",{style:{float:"right",opacity:.5},children:O(u[0])})]}),value:u[1]})),onSelect:u=>{n(g=>[...g,u])}})]})}),e.jsx(be,{loading:E||r,data:y,filters:c})]})]})},Ae=F.div`
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
`,Fe=({output:l})=>(console.log("GraphTiles / output:",l),e.jsxs(Ce,{children:[e.jsx(M,{title:e.jsx("span",{style:{fontSize:"20px"},children:"Sensibility Check"}),value:null,background:"#EBF0F6",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"},children:[e.jsx("div",{className:"left",style:{display:"grid",alignItems:"center",justifyContent:"start"},children:e.jsxs(N,{name:"basic",layout:"vertical",children:[e.jsx(N.Item,{label:"Horizontal Axis",name:"username",children:e.jsx(H,{defaultValue:"1",options:[{label:"Documents Harvested",value:"1"}],style:{width:"200px"}})}),e.jsx(N.Item,{label:"Vertical Axis",name:"password",layout:"horizontal",children:e.jsx(H,{defaultValue:"1",options:[{label:"Total Hours",value:"1"}],style:{width:"200px"}})})]})}),e.jsx(B,{option:{grid:{left:10,right:10,bottom:10,top:25,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},xAxis:{name:"",splitLine:{show:!1},axisLine:{lineStyle:{color:"#A3A9E8"}},axisLabel:{color:"#000757",formatter:n=>n+"k"},axisTick:{show:!1}},yAxis:{name:"",splitLine:{show:!1},axisLine:{lineStyle:{color:"#A3A9E8"}},axisLabel:{color:"#000757",formatter:n=>n+" hrs"},axisTick:{show:!1}},series:[{symbolSize:8,data:[[10,8.04],[8.07,6.95],[13,7.58],[9.05,8.81],[11,8.33],[14,7.66],[13.4,6.81],[10,6.33],[14,8.96],[12.5,6.82],[9.15,7.2],[11.5,7.2],[3.03,4.23],[12.2,7.83],[2.02,4.47],[1.05,3.33],[4.05,4.96],[6.03,7.24],[12,6.26],[12,8.84],[7.08,5.82],[5.02,5.68]],itemStyle:{color:"#A3A9E8"},type:"scatter"}]},style:{width:"500px",height:"200px"}})]})}),e.jsx(M,{title:e.jsx("span",{style:{fontSize:"20px"},children:"Predicted Hours per Phase by Fee Earner"}),value:null,background:"#EBF0F6",children:e.jsx(B,{option:{grid:{left:30,right:10,bottom:10,top:25,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1},xAxis:{type:"value",axisLine:{show:!0,lineStyle:{color:"#A3A9E8"}},axisLabel:{color:"#000757",formatter:n=>n+" hrs"},axisTick:{show:!1}},yAxis:{type:"category",splitLine:{show:!1},axisLine:{lineStyle:{color:"#A3A9E8"}},axisLabel:{color:"#000757"},axisTick:{show:!1},data:["Other","Trial","Trial Preparation","Expert Reports","Witness Statements","Disclosure","CMC","ADR Settlement","Interim Applications","Issues / SOC","Pre-Action"]},series:A.assetHours.map((n,p)=>({name:n.name,type:"bar",stack:"total",itemStyle:{color:k.find(i=>i.name===n.name).color},label:{show:!1},emphasis:{focus:"series"},data:["Other","Trial","Trial Preparation","Expert Reports","Witness Statements","Disclosure","CMC","ADR Settlement","Interim Applications","Issues / SOC","Pre-Action"].map(i=>{var j;const c=ge.find(r=>r[0]===i)[1];return((j=l==null?void 0:l[c])==null?void 0:j[R.find(r=>r[0]===n.name)[1]])||0})}))},style:{width:"750px",height:"611px"}})})]})),Ce=F.div`
  display: grid;
  gap: 24px;
`,{Content:ke}=K,De=()=>{const l=Y(),[n,p]=x.useState(null),[i,c]=x.useState(null),[j,r]=x.useState(null),{data:t,isFetching:o,refetch:s}=X().query(`/predictions/${n}`,{},{enabled:!1}),a=JSON.parse((t==null?void 0:t.input_list)||"{}"),d=JSON.parse((t==null?void 0:t.output_list)||"{}"),S=JSON.parse((t==null?void 0:t.regression_data)||"{}");return x.useEffect(()=>{if(t){const h=Object.values(d).reduce((y,_)=>(Object.entries(_).filter(v=>v[0]!=="name").forEach(([v,D])=>{y[v]=(y[v]||0)+D,v!=="total"&&(y.newTotal+=D)}),y),{newTotal:0}),m=R.map((y,_)=>h[y[1]]*L.find(v=>v.name===y[0]).price).reduce((y,_)=>y+_,0);r(m),c(h)}},[t]),console.log("DATA",t),console.log("inputList",a),console.log("outputList",d),console.log("regressionData",S),x.useEffect(()=>{l.resultID&&(p(l.resultID),n&&s())},[l,s,n]),e.jsxs(Me,{children:[e.jsx(G,{client:(t==null?void 0:t.client)||"",matter:{name:(t==null?void 0:t.name)||"",number:t!=null&&t.id?25076483+t.id:""},owner:(t==null?void 0:t.lawyer_name)||"",info:{status:"Active",lastModified:me(t==null?void 0:t.modified).format("YYYY-MM-DD"),type:t?t.team_name.charAt(0).toUpperCase()+t.team_name.slice(1):""},matterAssumptionList:[{id:1,name:"Assumption 1",type:"Predictive"}]}),e.jsxs(ke,{children:[e.jsx(Q,{loading:o,title:e.jsx("div",{children:e.jsx("span",{style:{fontSize:"20px",fontWeight:"400"},children:"Assumptions"})}),subtitle:Array.from(new Set(V.map(h=>h[0]))).map(h=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"16px",fontWeight:500,lineHeight:"19px",color:"#000757",marginTop:"10px",marginBottom:"10px"},children:O(h)}),e.jsx("div",{style:{display:"grid"},children:V.filter(m=>m[0]===h).map((m,y)=>{var _,v,D,E,I,P,T,u;return e.jsxs("div",{className:"row",style:{display:"grid",gridTemplateColumns:"auto  1fr auto",gap:"10px",alignItems:"center",fontSize:"14px",color:"#747ABA"},children:[O(m[1]),e.jsx("div",{style:{width:"100%",borderBottom:"1px solid #747ABA33"}}),t?m[1]==="side_we're_representing"?["Claimant","Defendant"][t.id%2]:m[1]==="num_of_counterparties"?a.number_of_counterparties:m[1]==="num_of_documents_reviewed,_total"?((+a.number_of_documents_harvested.replace(",","")||0)+(+a.number_of_documents_produced_by_other_parties.replace(",","")||0)).toLocaleString():m[1]==="num_chargeable_hours_per_trial_day"?(_=a.trial_inputs)==null?void 0:_.hoursday:m[1]==="num_partners_@_trial"?(v=a.trial_inputs)==null?void 0:v.Partner:m[1]==="num_counsel_@_trial"?(D=a.trial_inputs)==null?void 0:D.Counsel:m[1]==="num_senior_associates_@_trial"?(E=a.trial_inputs)==null?void 0:E.SeniorAssociate:m[1]==="num_mid-level_associates_@_trial"?(I=a.trial_inputs)==null?void 0:I.MidAssociate:m[1]==="num_junior_associates_@_trial"?(P=a.trial_inputs)==null?void 0:P.JuniorAssociate:m[1]==="num_trainees/paralegals_@_trial"?(T=a.trial_inputs)==null?void 0:T.TraineeParalegal:(a==null?void 0:a[(u=U.find(g=>g[0]===m[1]))==null?void 0:u[1]])||"-":"-"]},y)})})]},h))}),e.jsx(J,{spinning:o,children:e.jsxs("div",{className:"pageContent",children:[e.jsx(Z,{effort:(i==null?void 0:i.newTotal)||0,revenue:j,contribution:null,split:k.map((h,m)=>{var y;return(i==null?void 0:i[(y=R.find(_=>_[0]===h.name))==null?void 0:y[1]])||0})}),e.jsx(Fe,{output:d}),e.jsx(ee,{hours:i})]})})]})]})},Me=F.div`
  .pageContent {
    padding: 36px 0 0 36px;
    display: grid;
    gap: 36px;
  }
`,Ie=()=>{const l=Y(),[n,p]=W();return n.get("client"),n.get("matterNumber"),n.get("matterName"),n.get("pricingType"),n.get("pricingAmount"),e.jsx(Pe,{children:l.type==="similarMatters"?e.jsx(we,{}):e.jsx(De,{})})},Pe=F.div`
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
`;export{Ie as default};
