import{r as f,W as g,j as e,X as N,Y as S,Z as C,s as x,a as d,A as F,B as _,$ as O,a0 as M,a1 as b,g as A,i as p,a2 as D,a3 as T,a4 as u}from"./index-f703cbf4.js";const I={grid:{left:-5,right:-5,bottom:0,top:0,containLabel:!1},xAxis:{show:!1,type:"category"},yAxis:{show:!1,type:"value"},series:[{type:"line",symbol:"none",symbolSize:10,lineStyle:{width:3,color:"#54B0F3"},itemStyle:{color:"#54B0F3"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#3CADFF"},{offset:1,color:"rgba(255, 255, 255, 0)"}]}}}]},z={legend:{show:!1},series:[{name:"pie",type:"pie",radius:["50%","90%"],center:["50%","50%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontFamily:"NeueMontreal",fontSize:12,fontWeight:400,textStyle:{color:"##0116eb",borderWidth:0},formatter:a=>a.name+`
`+a.value+" hrs"}},labelLine:{show:!1},data:[{value:1048,name:"item1"},{value:735,name:"item2"}]}]},P=a=>({minimalBar:S,line:I,pie:z})[a]||{},H=({preset:a,style:t,option:s,...l})=>{const[n,c]=f.useState(null);return f.useEffect(()=>{n==null||n.setOption({...g.merge(a?P(a):{},s||{})})},[s]),e.jsx(N,{onChartReady:o=>c(o),opts:{renderer:"svg"},option:{},...l,style:g.merge({width:"100%",height:"100%"},t||{}),notMerge:!0})};function W(a){return C({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 11H7.101l.001-.009a4.956 4.956 0 0 1 .752-1.787 5.054 5.054 0 0 1 2.2-1.811c.302-.128.617-.226.938-.291a5.078 5.078 0 0 1 2.018 0 4.978 4.978 0 0 1 2.525 1.361l1.416-1.412a7.036 7.036 0 0 0-2.224-1.501 6.921 6.921 0 0 0-1.315-.408 7.079 7.079 0 0 0-2.819 0 6.94 6.94 0 0 0-1.316.409 7.04 7.04 0 0 0-3.08 2.534 6.978 6.978 0 0 0-1.054 2.505c-.028.135-.043.273-.063.41H2l4 4 4-4zm4 2h2.899l-.001.008a4.976 4.976 0 0 1-2.103 3.138 4.943 4.943 0 0 1-1.787.752 5.073 5.073 0 0 1-2.017 0 4.956 4.956 0 0 1-1.787-.752 5.072 5.072 0 0 1-.74-.61L7.05 16.95a7.032 7.032 0 0 0 2.225 1.5c.424.18.867.317 1.315.408a7.07 7.07 0 0 0 2.818 0 7.031 7.031 0 0 0 4.395-2.945 6.974 6.974 0 0 0 1.053-2.503c.027-.135.043-.273.063-.41H22l-4-4-4 4z"}}]})(a)}const $=({client:a,matter:t,owner:s,info:l,matterAssumptionList:n})=>{var h;const{name:c,number:o}=t||{name:"",number:""},{status:m,lastModified:r,type:j}=l||{status:"",lastModified:"",type:""};return e.jsxs(B,{children:[e.jsx("div",{className:"client",children:a||" "}),e.jsxs("div",{className:"matter",children:[e.jsx("div",{className:"name",children:c||" "}),e.jsxs("div",{className:"number",children:[" ",o||" "," "]})]}),e.jsxs("div",{className:"info",children:[e.jsxs("div",{className:"left",children:[m&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx(d,{color:"#A040F6",children:m})}),"•"]}),s&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx(F,{users:[typeof s!="string"?s:{name:s,id:1,avatar:"/avatars/avatar2.png"}]})}),"•"]}),e.jsx("span",{children:j}),"•",e.jsxs("span",{children:["Last modified on: ",r||"never"]})]}),e.jsx("div",{className:"right",children:n&&e.jsxs(e.Fragment,{children:[e.jsx(_,{size:"small",type:"ghost",icon:e.jsx(O,{}),className:"pill",children:"Save"}),e.jsx(_,{size:"small",type:"ghost",icon:e.jsx(M,{}),className:"pill",children:"Share"}),e.jsx(b,{className:"select",getPopupContainer:i=>i.parentNode,options:(n||[]).map(i=>({label:e.jsxs("div",{className:"flex",children:[i.name,e.jsx(d,{color:i.type==="Predictive"?"#00a688":"#e542c2",children:i.type})]}),value:i.id})),defaultValue:((h=n[0])==null?void 0:h.id)||"",dropdownRender:i=>e.jsxs("div",{children:[i,e.jsx(_,{type:"block",children:"Add Assumption Set +"})]}),tagRender:i=>{const y=assumptionsData.find(w=>w.id===i.value);return e.jsx(d,{color:"#A040F6",children:y.name})}})]})})]})]})},B=x.div`
  height: 131px;
  margin: 12px 0 34px;
  color: #fff;
  font-weight: 300;
  font-size: 12px;
  .matter {
    display: flex;
    flex-direction: column;
    .name {
      font-size: 26px;
      font-weight: 500;
    }
    .number {
      font-size: 15px;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .ant-tag {
      font-size: 9px;
      letter-spacing: 0.12em;
      padding: 2px 12px;
      text-transform: uppercase;
    }
    .left {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #a3a9e8;
      span {
        color: #fff;
      }
    }
    .right {
      display: flex;
      align-items: center;
      gap: 8px;
      .ant-btn {
        color: #fff;
      }
      svg {
        font-size: 12px;
        margin-right: -4px;
      }
      .select {
        width: 290px;
        border: none;
        margin-left: 20px;
        .ant-select-arrow {
          color: #fff;
        }
        .ant-select-item-option-content .flex {
          color: #000;
        }
        .ant-select-selector {
          font-size: 14px;
          background: #0002;
          border: none;
          color: #fff !important;
          padding: 2px 0 0 18px;
        }
        .flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4px;
          color: #fff;
          .ant-tag {
            width: 120px;
            text-align: center;
          }
        }
        button {
          color: #000;
          font-size: 13px;
          width: 100%;
        }
      }
    }
  }
`,L=({title:a,subtitle:t,children:s,loading:l})=>e.jsx(E,{children:e.jsxs(A,{spinning:l||!1,children:[e.jsx("div",{className:"title",children:a}),e.jsx("div",{className:"subtitle",children:t}),e.jsx("div",{className:"content",children:s})]})}),E=x.div`
  .ant-spin-nested-loading {
    height: 100%;
    .ant-spin-container {
      height: 100%;
      min-height: calc(100vh - 310px);
      background: #f7fafb;
      color: #000757;
      font-weight: 300;
      line-height: 20px;
      font-size: 15px;
      padding: 35px 35px 35px 80px;
      margin-left: -80px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      .title > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`,R=a=>a.replace("num_of","# of").replace("num_","#_").split("_").map(t=>t[0].toUpperCase()+t.slice(1)).join(" "),J=({form:a,name:t,hidden:s,handleHide:l,approx:n,hideRemoveButton:c,custom:o,onChange:m})=>{const r=p.useWatch(t,a);return f.useEffect(()=>{r===void 0&&a.setFieldValue(t,{operator:n?"approx":"eq",value:r||(n?void 0:0)}),m&&m()},[r]),e.jsxs(U,{className:`formTile ${s?"hide":""}`,children:[e.jsxs("div",{className:"header",children:[e.jsx("span",{children:R(t)}),!c&&e.jsx(D,{style:{color:"#747aba"},onClick:()=>{l(t)}})]}),e.jsx("div",{className:`content ${o?"custom":""}`,children:o||e.jsxs(e.Fragment,{children:[e.jsx(p.Item,{name:[t,"operator"],hidden:s,initialValue:n?"approx":"eq",children:e.jsx(b,{options:n?[{label:"Is Exact",value:"exact"},{label:"Is Approx",value:"approx"}]:[{label:"Is Greater Than",value:"gt"},{label:"Is Less Than",value:"lt"},{label:"Is Equal To",value:"eq"},{label:"Is Between",value:"bw"}]})}),(r==null?void 0:r.operator)==="bw"?e.jsx("div",{children:e.jsxs(T,{children:[e.jsx(p.Item,{name:[t,"value1"],hidden:s,rules:[{required:!0,message:""}],children:e.jsx(u,{type:"number",placeholder:"Min",min:0})}),e.jsx(p.Item,{name:[t,"value2"],hidden:s,rules:[{required:!0,message:""}],children:e.jsx(u,{type:"number",placeholder:"Max"})})]})}):e.jsx(p.Item,{name:[t,"value"],hidden:s,rules:[{required:!0,message:""}],children:e.jsx(u,{type:"number",placeholder:"Enter value",min:0})})]})})]})},U=x.div`
  &.hide {
    display: none;
  }
  margin-bottom: 16px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    & > span {
      font-size: 15px;
      font-weight: 500;
      color: #000757;
    }
  }
  .content:not(.custom) {
    display: flex;
    gap: 16px;
    margin: 8px 0 8px;
    .ant-select {
      width: 146px;
      text-align: center;
      .ant-select-selector,
      .ant-select-arrow {
        background: #747aba;
        color: #fff !important;
        font-weight: 300;
        & > svg,
        .ant-select-selection-item {
          color: #fff;
        }
      }
    }
  }
`,q=[["claim","claim_value"],["claim","counterclaim_value"],["evidence","num_of_documents_harvested,_client"],["evidence","num_of_documents_reviewed,_total"],["evidence","num_of_factual_witnesses,_client"],["evidence","num_of_factual_witnesses,_total"],["experts","num_of_experts,_total"],["case_management","num_of_CMCs"],["ADR","num_of_mediations"],["trial","num_months_to_trial"],["trial","num_trial_days"],["trial","num_chargeable_hours_per_trial_day"],["trial","num_partners_@_trial","grid"],["trial","num_counsel_@_trial","grid"],["trial","num_senior_associates_@_trial","grid"],["trial","num_mid-level_associates_@_trial","grid"],["trial","num_junior_associates_@_trial","grid"],["trial","num_trainees/paralegals_@_trial","grid"]],V=[["parties","side_we're_representing"],["parties","num_of_counterparties"],...q],v=[{name:"Partner",color:"#5566ff"},{name:"Senior",color:"#8f79ff"},{name:"Mid",color:"#27a9ff"},{name:"Junior",color:"#ee87ff"},{name:"Counsel",color:"#fc5555"},{name:"Paralegal",color:"#ffc42d"}],G=v.map((a,t)=>({...a,price:Math.floor((v.length-t)*86.5),key:t})),K=[["Partner","Partner"],["Senior","SeniorAssociate"],["Mid","MidAssociate"],["Junior","JuniorAssociate"],["Counsel","Counsel"],["Paralegal","TraineeParalegal"]],X=[["claim_value","claim_value_usd"],["counterclaim_value","counterclaim_value_usd"],["num_of_documents_harvested,_client","number_of_documents_harvested"],["num_of_documents_reviewed,_total","number_of_documents_subject_to_human_review"],["num_of_factual_witnesses,_client","number_of_fact_witnesses_for_our_client"],["num_of_factual_witnesses,_total","number_of_fact_witnesses_in_total"],["num_of_experts,_total","number_of_experts_in_total"],["num_of_CMCs","number_of_CMCs"],["num_of_mediations","number_of_mediations"],["num_months_to_trial","number_of_months_from_preaction_trail_arbitration"],["num_trial_days","number_of_trial_days"],["num_chargeable_hours_per_trial_day","NOT_FOUND"],["num_partners_@_trial","NOT_FOUND"],["num_counsel_@_trial","NOT_FOUND"],["num_senior_associates_@_trial","NOT_FOUND"],["num_mid-level_associates_@_trial","NOT_FOUND"],["num_junior_associates_@_trial","NOT_FOUND"],["num_trainees/paralegals_@_trial","NOT_FOUND"]],Y=[["Pre-Action","Pre-action"],["Issues / SOC","Issues / Statements of case"],["Interim Applications","Interim Applications & Hearings"],["ADR Settlement","ADR / Settlement Discussions"],["CMC","CMC"],["Disclosure","Disclosure"],["Witness Statements","Witness statements"],["Expert Reports","Expert reports"],["Trial Preparation","Trial preparation"],["Trial","Trial"],["Other","Case management, appeals, strategy, administration and enforcement"]];export{W as B,H as C,J as F,$ as H,L as S,v as a,q as b,R as c,V as d,X as i,Y as p,K as r,G as s};
