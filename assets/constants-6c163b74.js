import{j as e,E as b,G as h,H as w,J as S,s as f,B as d,A as N,a as m,M as F,N as z,Q as g,F as p,U as C,V as B,W as x}from"./index-fc75dee1.js";const I={grid:{left:-5,right:-5,bottom:0,top:0,containLabel:!1},xAxis:{show:!1,type:"category"},yAxis:{show:!1,type:"value"},series:[{type:"line",symbol:"none",symbolSize:10,lineStyle:{width:3,color:"#54B0F3"},itemStyle:{color:"#54B0F3"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#3CADFF"},{offset:1,color:"rgba(255, 255, 255, 0)"}]}}}]},A={legend:{show:!1},series:[{name:"pie",type:"pie",radius:["50%","90%"],center:["50%","50%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontFamily:"NeueMontreal",fontSize:12,fontWeight:400,textStyle:{color:"##0116eb",borderWidth:0},formatter:s=>s.name+`
`+s.value+" Hrs"}},labelLine:{show:!1},data:[{value:1048,name:"item1"},{value:735,name:"item2"}]}]},L=s=>{const{preset:t,style:a,option:i,...o}=s,c=r=>({minimalBar:w,line:I,pie:A})[r]||{};return e.jsx(b,{opts:{renderer:"svg"},option:h.merge(t?c(t):{},i||{}),...o,style:h.merge({width:"100%",height:"100%"},a||{})})};function R(s){return S({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 11H7.101l.001-.009a4.956 4.956 0 0 1 .752-1.787 5.054 5.054 0 0 1 2.2-1.811c.302-.128.617-.226.938-.291a5.078 5.078 0 0 1 2.018 0 4.978 4.978 0 0 1 2.525 1.361l1.416-1.412a7.036 7.036 0 0 0-2.224-1.501 6.921 6.921 0 0 0-1.315-.408 7.079 7.079 0 0 0-2.819 0 6.94 6.94 0 0 0-1.316.409 7.04 7.04 0 0 0-3.08 2.534 6.978 6.978 0 0 0-1.054 2.505c-.028.135-.043.273-.063.41H2l4 4 4-4zm4 2h2.899l-.001.008a4.976 4.976 0 0 1-2.103 3.138 4.943 4.943 0 0 1-1.787.752 5.073 5.073 0 0 1-2.017 0 4.956 4.956 0 0 1-1.787-.752 5.072 5.072 0 0 1-.74-.61L7.05 16.95a7.032 7.032 0 0 0 2.225 1.5c.424.18.867.317 1.315.408a7.07 7.07 0 0 0 2.818 0 7.031 7.031 0 0 0 4.395-2.945 6.974 6.974 0 0 0 1.053-2.503c.027-.135.043-.273.063-.41H22l-4-4-4 4z"}}]})(s)}const T=({client:s,matter:t,owner:a,info:i,matterAssumptionList:o})=>{var u;const{name:c,number:r}=t||{name:"",number:""},{status:l,lastModified:_,type:v}=i||{status:"",lastModified:"",type:""};return e.jsxs(M,{children:[e.jsx("div",{className:"client",children:s||" "}),e.jsxs("div",{className:"matter",children:[e.jsx("div",{className:"name",children:c||" "}),e.jsxs("div",{className:"number",children:[" ",r||" "," "]})]}),e.jsxs("div",{className:"info",children:[e.jsxs("div",{className:"left",children:[l&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx(d,{color:"#A040F6",children:l})}),"•"]}),a&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx(N,{users:[a]})}),"•"]}),e.jsx("span",{children:v}),"•",e.jsxs("span",{children:["Last modified on: ",_||"never"]})]}),e.jsxs("div",{className:"right",children:[e.jsx(m,{size:"small",type:"text",icon:e.jsx(F,{}),children:"Save"}),e.jsx(m,{size:"small",type:"text",icon:e.jsx(z,{}),children:"Share"}),e.jsx(g,{className:"select",getPopupContainer:n=>n.parentNode,options:(o||[]).map(n=>({label:e.jsxs("div",{className:"flex",children:[n.name,e.jsx(d,{color:n.type==="Predictive"?"#00a688":"#e542c2",children:n.type})]}),value:n.id})),defaultValue:((u=o[0])==null?void 0:u.id)||"",dropdownRender:n=>e.jsxs("div",{children:[n,e.jsx(m,{type:"block",children:"Add Assumption Set +"})]}),tagRender:n=>{const j=assumptionsData.find(y=>y.id===n.value);return e.jsx(d,{color:"#A040F6",children:j.name})}})]})]})]})},M=f.div`
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
`,k=({title:s,subtitle:t,children:a})=>e.jsxs(P,{children:[e.jsx("div",{className:"title",children:s}),e.jsx("div",{className:"subtitle",children:t}),e.jsx("div",{className:"content",children:a})]}),P=f.div`
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
`,E=s=>s.replace("num_of","# of").replace("num_","#_").split("_").map(t=>t[0].toUpperCase()+t.slice(1)).join(" "),$=({form:s,name:t,hidden:a,handleHide:i,approx:o,hideRemoveButton:c,custom:r})=>{const l=p.useWatch(t,s);return e.jsxs(H,{className:`formTile ${a?"hide":""}`,children:[e.jsxs("div",{className:"header",children:[e.jsx("span",{children:E(t)}),!c&&e.jsx(C,{style:{color:"#747aba"},onClick:()=>{i(t)}})]}),e.jsx("div",{className:`content ${r?"custom":""}`,children:r||e.jsxs(e.Fragment,{children:[e.jsx(p.Item,{name:[t,"operator"],hidden:a,initialValue:l?void 0:"eq",children:e.jsx(g,{options:o?[{label:"Is Exact",value:"exact"},{label:"Is Approx",value:"approx"}]:[{label:"Is Greater Than",value:"gt"},{label:"Is Less Than",value:"lt"},{label:"Is Equal To",value:"eq"},{label:"Is Between",value:"bw"}]})}),(l==null?void 0:l.operator)==="bw"?e.jsx("div",{children:e.jsxs(B,{children:[e.jsx(p.Item,{name:[t,"value1"],hidden:a,rules:[{required:!0,message:""}],children:e.jsx(x,{type:"number",placeholder:"Min"})}),e.jsx(p.Item,{name:[t,"value2"],hidden:a,rules:[{required:!0,message:""}],children:e.jsx(x,{type:"number",placeholder:"Max"})})]})}):e.jsx(p.Item,{name:[t,"value"],hidden:a,rules:[{required:!0,message:""}],children:e.jsx(x,{type:"number",placeholder:"Enter value"})})]})})]})},H=f.div`
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
`,q=[["claim","claim_value"],["claim","counterclaim_value"],["evidence","num_of_documents_harvested,_client"],["evidence","num_of_documents_reviewed,_total"],["evidence","num_of_factual_witnesses,_client"],["evidence","num_of_factual_witnesses,_total"],["experts","num_of_experts,_total"],["case_management","num_of_CMCs"],["ADR","num_of_mediations"],["trial","num_months_to_trial"],["trial","num_trial_days"],["trial","num_chargeable_hours_per_trial_day"],["trial","num_partners_@_trial","grid"],["trial","num_counsel_@_trial","grid"],["trial","num_senior_associates_@_trial","grid"],["trial","num_mid-level_associates_@_trial","grid"],["trial","num_junior_associates_@_trial","grid"],["trial","num_trainees/paralegals_@_trial","grid"]],W=[["parties","side_we're_representing"],["parties","num_of_counterparties"],...q],G=[{name:"Partner",color:"#5566ff"},{name:"Senior",color:"#8f79ff"},{name:"Mid",color:"#27a9ff"},{name:"Junior",color:"#ee87ff"},{name:"Counsel",color:"#fc5555"},{name:"Paralegal",color:"#ffc42d"}];export{R as B,L as C,$ as F,T as H,k as S,G as a,E as c,W as p,q as s};
