import{s as D,j as e,C as T,R as ne,r as g,T as M,A as le,m as P,a as oe,B as H,F as ce,I as J,b as ue,S as O,e as de,f as me,g as G,h as pe,i as F,k as K,L as Y,c as Q,d as he}from"./index-f703cbf4.js";import{C as B,a as k,s as L,r as R,i as $,H as X,S as Z,B as xe,b as V,F as ge,c as C,p as W,d as q}from"./constants-ecfd14be.js";import{u as U}from"./useAPI-6098160d.js";const ee=({effort:l,revenue:m,split:u})=>e.jsxs(fe,{children:[e.jsxs("div",{className:"left",children:[e.jsx(T,{title:"Predicted Effort",className:"elevated",value:l?l+" hrs":"-",background:"linear-gradient(180deg, #CDEAFA 0%, #DEF4FD 100%)"}),e.jsx(T,{title:"Revenue Opportunity",className:"elevated",value:m?Intl.NumberFormat("en",{notation:"compact",style:"currency",currency:"USD",maximumFractionDigits:2,currencyDisplay:"symbol"}).format(m):"-",background:"linear-gradient(180deg, #F1E0FF 0%, #DEF1FC 100%)"})]}),e.jsx(T,{title:"Role Contribution",className:"elevated",value:u&&l?e.jsxs("span",{children:[(u.reduce((n,c)=>c+n,0)/6).toFixed(0),e.jsx("span",{style:{fontSize:"16px",marginLeft:"2px"},children:"hrs avg"})]}):"-",background:"linear-gradient(180deg, #D6CFFF 0%, #DEF1FC 100%)",children:e.jsx(B,{preset:"minimalBar",option:{xAxis:{data:k.map(n=>n.name)},series:[{name:"",data:u?u.map((n,c)=>({value:n,itemStyle:{color:k[c].color}})):[20,0,0,0,0,0],tooltip:{valueFormatter:n=>n+" hrs"}}]},style:{marginTop:"50px"}})}),e.jsx(T,{title:"Role Split",className:"elevated",value:null,background:"linear-gradient(180deg, #CDF3F5 0%, #DEF1FC 100%)",children:e.jsxs("div",{style:{display:"flex"},children:[e.jsx(B,{preset:"pie",option:{series:[{data:k.map((n,c)=>({name:n.name,value:(u||[0,0,0,0,0,0])[c],itemStyle:{color:n.color}}))}]},style:{width:"210px",height:"200px"}}),e.jsx("div",{className:"legend",children:k.map((n,c)=>e.jsxs(ne.Fragment,{children:[e.jsx("div",{className:"icon",style:{background:n.color}}),e.jsxs("div",{style:{},children:[l?Math.floor((u||[0,0,0,0,0,0])[c]/l*100):0,"%"]}),e.jsx("span",{children:n.name})]},c))})]})})]}),fe=D.div`
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
`,ye=({data:l,loading:m})=>{const[u,n]=g.useState([]),[c,j]=g.useState("");return e.jsx(_e,{children:e.jsx(M,{columns:[{title:"Client",dataIndex:"client_name",ellipsis:!0,width:150},{title:"Matter Name",dataIndex:"primary_matter_name",ellipsis:!0,width:150},{title:"Matter Partner",dataIndex:"aaMock_userID",width:150,render:(r,s)=>e.jsx(le,{users:[P.users[r||0]]})},{title:"Hrs Billed",dataIndex:"aaMock_totalHours",ellipsis:!0,width:80,align:"right"},{title:"Fees Billed",dataIndex:"aaMock_feesBilled",ellipsis:!0,width:90,align:"right",render:(r,s)=>Intl.NumberFormat("en",{notation:"compact",style:"currency",currency:"USD",maximumFractionDigits:1}).format(r)},{title:"Outcome",dataIndex:"aaMock_outcome",width:100,render:(r,s)=>e.jsx(oe,{status:r,color:r==="settled"?"#009fc2":r==="went to trial"?"#5984ff":"grey",children:r==null?void 0:r.toUpperCase()}),filters:["settled","went to trial"].map(r=>({text:r.charAt(0).toUpperCase()+r.slice(1),value:r})),onFilter:(r,s)=>s.aaMock_outcome.includes(r)}].map((r,s)=>({...r,key:s})),loading:m,dataSource:(l==null?void 0:l.filter(r=>(r.client_name+r.primary_matter_name+P.users[r.aaMock_userID||0].name+r.aaMock_totalHours+r.aaMock_feesBilled+r.aaMock_outcome).toLowerCase().includes(c.toLowerCase())))||[],extendHeader:{title:"Matters in Sample",extra:e.jsxs(e.Fragment,{children:[e.jsxs(H,{type:"primary",danger:!0,className:"pill",disabled:u.length===0,children:["Delete",e.jsx(ce,{style:{height:"14px"}})]}),e.jsx(J,{className:"pill",size:"large",placeholder:"Search",style:{width:200},prefix:e.jsx(ue,{style:{fontSize:"18px",color:"#767DC5"}}),value:c,onChange:r=>j(r.target.value)})]})},rowSelection:{type:"checkbox",selectedRowKeys:u,onSelectAll:(r,s,i)=>{n(r?s.map(t=>t.key):[])},onSelect:(r,s)=>{n(s?[...u,r.key]:u.filter(i=>i!==r.key))}},pagination:{showTotal:(r,s)=>`${s.join("-")} of ${r}`,showSizeChanger:!1,pageSize:10,onChange:()=>{n([])}}})})},_e=D.div`
  .ant-table-row {
    cursor: pointer;
  }
`,te=({hours:l,onCalculate:m})=>{const[u,n]=g.useState("Standard Rates"),[c,j]=g.useState(L),[r,s]=g.useState(L.map((t,a)=>({...t,price:P.assetHours[a].value*c[a].price})));g.useEffect(()=>{m&&m(r.reduce((t,a)=>t+a.price,0))},[r]),g.useEffect(()=>{s(c.map((t,a)=>({...t,price:(l?l[R.find(o=>o[0]===t.name)[1]]:P.assetHours[a].value)*c[a].price})))},[l,c]);const i=k.map((t,a)=>({...t,hours:l?l[R.find(o=>o[0]===t.name)[1]]:P.assetHours[a].value,key:a}));return e.jsxs(Se,{children:[e.jsx(M,{columns:[{title:"Roles",render:t=>e.jsxs("span",{children:[e.jsx("span",{style:{color:t.color,marginRight:"10px"},children:"⬤"}),t.name]})},{title:"Predicted Hours",dataIndex:"hours",align:"center",width:200,render:t=>t+" hrs"},{title:e.jsx(O,{value:u,onChange:t=>{t==="Standard Rates"&&j(L),n(t)},options:["Standard Rates","Custom Rates"].map(t=>({label:t,value:t})),style:{width:200}}),align:"center",width:100,render:t=>e.jsx(J,{type:"number",min:0,className:"ratesColumn",style:{width:120,textAlign:"right",paddingRight:"10px",color:"#000757",fontWeight:"bold"},value:c[t.key].price,onChange:a=>{u!=="Custom Rates"&&n("Custom Rates"),j(c.map((o,d)=>d===t.key?{...o,price:Math.floor(+a.target.value)}:o))}})},{title:"Predicted Revenue",width:200,align:"right",render:(t,a,o)=>e.jsx("span",{style:{marginRight:"7px"},children:Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(r[o].price)})}].map((t,a)=>({...t,key:a})),dataSource:i,extendHeader:{title:"Create Price Estimate"},pagination:!1,summary:t=>e.jsxs(M.Summary.Row,{children:[e.jsx(M.Summary.Cell,{index:0,children:"Total"}),e.jsxs(M.Summary.Cell,{index:1,children:[t.reduce((a,o)=>a+o.hours,0)," hrs"]}),e.jsx(M.Summary.Cell,{index:2,children:Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(c.reduce((a,o)=>a+o.price,0))}),e.jsx(M.Summary.Cell,{index:3,align:"right",children:Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(r.reduce((a,o)=>a+o.price,0))})]})}),e.jsxs("div",{className:"footer",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Predicted Total Price"}),e.jsx("span",{children:Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(r.reduce((t,a)=>t+a.price,0))})]}),e.jsxs(H,{type:"primary",className:"pill outline",style:{width:"230px"},children:["Add Another Calculation",e.jsx(de,{})]}),e.jsxs(H,{type:"primary",className:"pill outline",style:{width:"207px",background:"#fff",color:"#0116eb"},children:["Share Price Estimate",e.jsx(me,{})]})]})]})},Se=D.div`
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
`,je=({loading:l,data:m,filters:u})=>{const[n,c]=g.useState([]);g.useEffect(()=>{if(m){const i=m.results.filter(t=>{let a=!0;return Object.entries(u).forEach(([o,d])=>{const x=$.find(h=>o===h[0])[1];switch(d.operator){case"eq":a=a&&t[x]===+d.value;break;case"lt":a=a&&t[x]<+d.value;break;case"gt":a=a&&t[x]>+d.value;break;case"bw":a=a&&t[x]>+d.value1&&t[x]<+d.value2;break}}),a});c(i)}},[u,m]);const j=n.reduce((i,t)=>i+t.aaMock_totalHours,0),r=n.reduce((i,t)=>i+t.aaMock_feesBilled,0),s=n.reduce((i,t)=>(["Partner","Senior","Mid","Junior","Counsel","Paralegal"].forEach((a,o,d)=>{var x;i[o]=(i[o]||0)+(((x=t.aaMock_roleHours)==null?void 0:x[a])||0)}),i),[]).map(i=>Math.floor(i/n.length));return e.jsx(G,{spinning:l,children:e.jsxs(ve,{children:[e.jsx(ee,{effort:Math.floor(j/n.length),revenue:Math.floor(r/n.length),split:s}),e.jsx(ye,{data:n,loading:l}),e.jsx(te,{hours:Object.fromEntries(["Partner","SeniorAssociate","MidAssociate","JuniorAssociate","Counsel","TraineeParalegal"].map((i,t)=>[i,s[t]]))})]})})},ve=D.div`
  padding: 36px 0 0 36px;
  display: grid;
  gap: 36px;
`,{Content:be}=Y,we=()=>{var I;pe();const[l,m]=g.useState(["claim_value","counterclaim_value"]),[u,n]=g.useState({claim_value:{operator:"eq",value:"0"},counterclaim_value:{operator:"eq",value:"0"}}),[c,j]=g.useState(null),[r,s]=g.useState(!1),[i]=F.useForm(),[t,a]=K(),o=t.get("client"),d=t.get("matterNumber"),x=t.get("matterName"),h=t.get("pricingType");t.get("pricingAmount");const[y,b]=g.useState(null),f=p=>Array(6).fill(0).map((_,S)=>S===0?Math.floor(Math.random()*(9-1))+1:[2,3,4].includes(S)?Math.floor(Math.random()*(30-10))+10:Math.floor(Math.random()*(35-18))+18).sort((_,S)=>_-S).reduce((_,S,v,A)=>{const se=["Counsel","Partner","Mid","Senior","Paralegal","Junior"],ae=100-A.reduce((re,ie)=>re+ie,0);return _[se[v]]=Math.floor((v!==A.length-1?S:S+ae)/100*p),_},{}),{data:w,isFetching:E}=U().query("/historicals",{},{onSuccess:async p=>{b({...p,results:p==null?void 0:p.results.map(_=>{const S=Math.floor(Object.entries(_).filter(([v,A])=>v.includes("hours")).reduce((v,A)=>v+A[1],0));return{..._,aaMock_userID:+(Math.random()*9).toFixed(0),aaMock_totalHours:S,aaMock_feesBilled:+(Object.entries(_).filter(([v,A])=>v.includes("hours")).reduce((v,A)=>v+A[1],0)*(350*(Math.random()*(1.3-.85)+.85))).toFixed(1),aaMock_outcome:S>400?"went to trial":"settled",aaMock_roleHours:f(S)}})})}});g.useEffect(()=>{s(!0);const p=setTimeout(()=>{j(i.getFieldsValue()),s(!1)},1e3);return()=>clearTimeout(p)},[l,u]);const z=p=>{Object.fromEntries(Object.entries(p).filter(([_,S])=>(S.value??S.value1??S.value2??null)!==null))},N=()=>{n(i.getFieldsValue())};return e.jsxs(Ae,{children:[e.jsx(X,{client:(I=P.clients[+o%10])==null?void 0:I.client,matter:{name:x,number:d},owner:P.users[o],info:{status:"Active",lastModified:"2021-01-01",type:h.charAt(0).toUpperCase()+h.slice(1)},matterAssumptionList:[{id:1,name:"Assumption 1",type:"Predictive"},{id:2,name:"Assumption 2",type:"Similar Matters"}]}),e.jsxs(be,{children:[e.jsx(Z,{title:e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"20px",fontWeight:"400"},children:"Assumptions"}),e.jsx(H,{icon:e.jsx(xe,{style:{fontSize:"18px"}}),size:"small",type:"text",style:{color:"#747ABA",fontSize:"14px",fontweight:500},onClick:()=>{m(["claim_value","counterclaim_value"]),i.resetFields()},children:"Clear All Filters"})]}),subtitle:e.jsx("div",{children:"Build your assumptions to find similar matters."}),children:e.jsxs(F,{name:"form",form:i,onFinish:z,initialValues:{claim_value:{operator:"eq",value:"0"},counterclaim_value:{operator:"eq",value:"0"}},children:[V.filter(p=>l.includes(p[1])).map((p,_)=>e.jsx(ge,{name:p[1],form:i,handleHide:S=>{i.setFieldValue(S,void 0),m(v=>v.filter(A=>A!==S)),N()},onChange:N},_)),e.jsx(O,{className:"addAssumption",value:"Add an assumption +",options:V.filter(p=>!l.includes(p[1])&&$.find(_=>_[0]===p[1])[1]!=="NOT_FOUND").map(p=>({label:e.jsxs("span",{children:[C(p[1]),e.jsx("span",{style:{float:"right",opacity:.5},children:C(p[0])})]}),value:p[1]})),onSelect:p=>{m(_=>[..._,p])}})]})}),e.jsx(je,{loading:E||r,data:y,filters:c})]})]})},Ae=D.div`
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
`,Fe=({output:l,input:m})=>{const[u,n]=g.useState(null);console.log("GraphTiles / data:",u);const[c]=F.useForm(),j=F.useWatch("horizontalAxis",c),r=F.useWatch("verticalAxis",c);console.log("GraphTiles / output:",l),U().query("/historicals",{},{onSuccess:i=>{n([{...m,...l},...i.results])}});const s={"Pre-action":"pre_action_hours","Issues / Statements of case":"issues_statement_of_case_hours","Interim Applications & Hearings":"interim_applications_hearings_hours","ADR / Settlement Discussions":"adr_settlement_discussions_hours",CMC:"cmc_hours",Disclosure:"disclosure_hours","Witness statements":"witness_statements_hours","Expert reports":"expert_reports_hours","Trial preparation":"trial_preperation_hours",Trial:"trial_hours","Case management, appeals, strategy, administration and enforcement":"case_management_hours"};return e.jsxs(Ce,{children:[e.jsx(T,{title:e.jsx("span",{style:{fontSize:"20px"},children:"Sensibility Check"}),value:null,background:"#EBF0F6",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"},children:[e.jsx("div",{className:"left",style:{display:"grid",alignItems:"center",justifyContent:"start"},children:e.jsxs(F,{form:c,name:"basic",layout:"vertical",children:[e.jsx(F.Item,{label:"Horizontal Axis",name:"horizontalAxis",initialValue:"number_of_documents_harvested",children:e.jsx(O,{defaultValue:"1",options:$.map(i=>({label:C(i[0]),value:i[1]})),style:{width:"270px"}})}),e.jsx(F.Item,{label:"Vertical Axis",name:"verticalAxis",layout:"horizontal",initialValue:"total",children:e.jsx(O,{defaultValue:"1",options:[["total","total"],...W].map(i=>({label:C(i[0])+" Hours",value:i[1]})),style:{width:"270px"}})})]})}),e.jsx(B,{option:{grid:{left:10,right:35,bottom:10,top:25,containLabel:!0},tooltip:{trigger:"item",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}},formatter:(i,t,a,o)=>{const d=u[i.dataIndex];console.log("GraphTiles / params",d);const x=Math.floor(Object.entries(d).filter(([f,w])=>f.includes("hours")).reduce((f,w)=>f+w[1],0)),h=d[j],y=r==="total"?x:d[s[r]];return`<div style="display: grid; grid-template-columns: 1fr auto; gap: 3px 10px;font-size: 12px;">
                  ${[[C(j),h.toLocaleString("en")],[r==="total"?"Total":C(r),y.toLocaleString("en")],["Client Name",d.client_name],["Client Role",d.client_role],["Case Name",d.primary_matter_name]].map((f,w)=>`
                  <div style="text-align:right; font-weight: 700 ">${f[0]}:</div>
                  <div>${f[1]} ${w===1?"hrs":""}</div>`).join("")}
                  
                  </div>`}},xAxis:{name:"",splitLine:{show:!1},axisLine:{lineStyle:{color:"#A3A9E8"}},axisLabel:{color:"#000757",formatter:i=>Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1}).format(i)},axisTick:{show:!1}},yAxis:{name:"",splitLine:{show:!1},axisLine:{lineStyle:{color:"#A3A9E8"}},axisLabel:{color:"#000757",formatter:i=>Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1}).format(i)+" hrs"},axisTick:{show:!1}},series:[{symbolSize:8,data:(u||[]).map((i,t)=>{const a=Math.floor(Object.entries(i).filter(([o,d])=>o.includes("hours")).reduce((o,d)=>o+d[1],0));return[i[j]||0,r==="total"?a:i[s[r]]||0]}),itemStyle:{color:"#A3A9E8"},type:"scatter"}]},style:{width:"500px",height:"200px"}})]})}),e.jsx(T,{title:e.jsx("span",{style:{fontSize:"20px"},children:"Predicted Hours per Phase by Fee Earner"}),value:null,background:"#EBF0F6",children:e.jsx(B,{option:{grid:{left:30,right:10,bottom:10,top:25,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1},xAxis:{type:"value",axisLine:{show:!0,lineStyle:{color:"#A3A9E8"}},axisLabel:{color:"#000757",formatter:i=>i+" hrs"},axisTick:{show:!1}},yAxis:{type:"category",splitLine:{show:!1},axisLine:{lineStyle:{color:"#A3A9E8"}},axisLabel:{color:"#000757"},axisTick:{show:!1},data:["Other","Trial","Trial Preparation","Expert Reports","Witness Statements","Disclosure","CMC","ADR Settlement","Interim Applications","Issues / SOC","Pre-Action"]},series:k.map(i=>({name:i.name,type:"bar",stack:"total",itemStyle:{color:i.color},label:{show:!1},emphasis:{focus:"series"},data:["Other","Trial","Trial Preparation","Expert Reports","Witness Statements","Disclosure","CMC","ADR Settlement","Interim Applications","Issues / SOC","Pre-Action"].map(t=>{var o;const a=W.find(d=>d[0]===t)[1];return((o=l==null?void 0:l[a])==null?void 0:o[R.find(d=>d[0]===i.name)[1]])||0})}))},style:{width:"750px",height:"611px"}})})]})},Ce=D.div`
  display: grid;
  gap: 24px;
`,{Content:De}=Y,Me=()=>{const l=Q(),[m,u]=g.useState(null),[n,c]=g.useState(null),[j,r]=g.useState(null),{data:s,isFetching:i,refetch:t}=U().query(`/predictions/${m}`,{},{enabled:!1}),a=JSON.parse((s==null?void 0:s.input_list)||"{}"),o=JSON.parse((s==null?void 0:s.output_list)||"{}"),d=JSON.parse((s==null?void 0:s.regression_data)||"{}");return g.useEffect(()=>{if(s){const x=Object.values(o).reduce((y,b)=>(Object.entries(b).filter(f=>f[0]!=="name").forEach(([f,w])=>{y[f]=(y[f]||0)+w,f!=="total"&&(y.newTotal+=w)}),y),{newTotal:0}),h=R.map((y,b)=>x[y[1]]*L.find(f=>f.name===y[0]).price).reduce((y,b)=>y+b,0);r(h),c(x)}},[s]),console.log("DATA",s),console.log("inputList",a),console.log("outputList",o),console.log("regressionData",d),g.useEffect(()=>{l.resultID&&(u(l.resultID),m&&t())},[l,t,m]),e.jsxs(ke,{children:[e.jsx(X,{client:(s==null?void 0:s.client)||"",matter:{name:(s==null?void 0:s.name)||"",number:s!=null&&s.id?25076483+s.id:""},owner:(s==null?void 0:s.lawyer_name)||"",info:{status:"Active",lastModified:he(s==null?void 0:s.modified).format("YYYY-MM-DD"),type:s?s.team_name.charAt(0).toUpperCase()+s.team_name.slice(1):""},matterAssumptionList:[{id:1,name:"Assumption 1",type:"Predictive"}]}),e.jsxs(De,{children:[e.jsx(Z,{loading:i,title:e.jsx("div",{children:e.jsx("span",{style:{fontSize:"20px",fontWeight:"400"},children:"Assumptions"})}),subtitle:Array.from(new Set(q.map(x=>x[0]))).map(x=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"16px",fontWeight:500,lineHeight:"19px",color:"#000757",marginTop:"10px",marginBottom:"10px"},children:C(x)}),e.jsx("div",{style:{display:"grid"},children:q.filter(h=>h[0]===x).map((h,y)=>{var b,f,w,E,z,N,I,p;return e.jsxs("div",{className:"row",style:{display:"grid",gridTemplateColumns:"auto  1fr auto",gap:"10px",alignItems:"center",fontSize:"14px",color:"#747ABA"},children:[C(h[1]),e.jsx("div",{style:{width:"100%",borderBottom:"1px solid #747ABA33"}}),s?h[1]==="side_we're_representing"?["Claimant","Defendant"][s.id%2]:h[1]==="num_of_counterparties"?a.number_of_counterparties:h[1]==="num_of_documents_reviewed,_total"?((+a.number_of_documents_harvested.replace(",","")||0)+(+a.number_of_documents_produced_by_other_parties.replace(",","")||0)).toLocaleString():h[1]==="num_chargeable_hours_per_trial_day"?(b=a.trial_inputs)==null?void 0:b.hoursday:h[1]==="num_partners_@_trial"?(f=a.trial_inputs)==null?void 0:f.Partner:h[1]==="num_counsel_@_trial"?(w=a.trial_inputs)==null?void 0:w.Counsel:h[1]==="num_senior_associates_@_trial"?(E=a.trial_inputs)==null?void 0:E.SeniorAssociate:h[1]==="num_mid-level_associates_@_trial"?(z=a.trial_inputs)==null?void 0:z.MidAssociate:h[1]==="num_junior_associates_@_trial"?(N=a.trial_inputs)==null?void 0:N.JuniorAssociate:h[1]==="num_trainees/paralegals_@_trial"?(I=a.trial_inputs)==null?void 0:I.TraineeParalegal:(a==null?void 0:a[(p=$.find(_=>_[0]===h[1]))==null?void 0:p[1]])||"-":"-"]},y)})})]},x))}),e.jsx(G,{spinning:i,children:e.jsxs("div",{className:"pageContent",children:[e.jsx(ee,{effort:(n==null?void 0:n.newTotal)||0,revenue:j,contribution:null,split:k.map((x,h)=>{var y;return(n==null?void 0:n[(y=R.find(b=>b[0]===x.name))==null?void 0:y[1]])||0})}),e.jsx(Fe,{output:o,input:a}),e.jsx(te,{hours:n})]})})]})]})},ke=D.div`
  .pageContent {
    padding: 36px 0 0 36px;
    display: grid;
    gap: 36px;
  }
`,Ee=()=>{const l=Q(),[m,u]=K();return m.get("client"),m.get("matterNumber"),m.get("matterName"),m.get("pricingType"),m.get("pricingAmount"),e.jsx(Pe,{children:l.type==="similarMatters"?e.jsx(we,{}):e.jsx(Me,{})})},Pe=D.div`
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
`;export{Ee as default};
