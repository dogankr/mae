import{s as c,r as o,j as a,T as x,A as f,B as h,m as p,a as m,I as g,C as d}from"./index-fc75dee1.js";import{F as w,a as j,b as y}from"./index.esm-0ab70743.js";const S=()=>{const[s,i]=o.useState([]),[l,u]=o.useState("");return a.jsx(C,{children:a.jsx(x,{columns:[{title:"Last Modified",dataIndex:"lastModified",width:120},{title:"Matter Name",dataIndex:"matterName"},{title:"Method",dataIndex:"method",width:200},{title:"Pricer",dataIndex:["pricer","name"],width:240,render:(e,t)=>a.jsx(f,{users:[t.pricer]})},{title:"Practise Group",dataIndex:"practiceGroup",width:140,filters:["Acquisition","Litigation","Arbitration"].map(e=>({text:e.charAt(0).toUpperCase()+e.slice(1),value:e})),onFilter:(e,t)=>t.practiceGroup.includes(e)},{title:"Status",dataIndex:"status",width:112,render:(e,t)=>{var r;return a.jsx(h,{status:t.status,color:t.status==="won"?"#45c53e":t.status==="inProgress"?"#9e3ff3":t.status==="estimated"?"#fa9b17":t.status==="lost"?"#f15177":"grey",children:(r=t.status)==null?void 0:r.toUpperCase()})},filters:["won","inProgress","estimated","lost"].map(e=>({text:e.charAt(0).toUpperCase()+e.slice(1),value:e})),onFilter:(e,t)=>t.status.includes(e)}].map((e,t)=>({...e,key:t})),dataSource:p.mainTable.filter(e=>(e.lastModified+e.matterName+e.method+e.pricer.name+e.practiceGroup+e.status).toLowerCase().includes(l.toLowerCase())),extendHeader:{title:"Pricing Estimates",extra:a.jsxs(a.Fragment,{children:[a.jsxs(m,{type:"primary",danger:!0,className:"pill",disabled:s.length===0,children:["Delete",a.jsx(w,{style:{height:"14px"}})]}),a.jsx(g,{placeholder:"Search",className:"pill",size:"large",style:{width:200},prefix:a.jsx(j,{style:{fontSize:"18px",color:"#767DC5"}}),value:l,onChange:e=>u(e.target.value)})]})},rowSelection:{type:"checkbox",selectedRowKeys:s,onSelectAll:(e,t,r)=>{i(e?t.map(n=>n.key):[])}},onRow:(e,t)=>({onClick:r=>{s.includes(e.key)?i(s.filter(n=>n!==e.key)):i([...s,e.key])}}),pagination:{showTotal:(e,t)=>`${t.join("-")} of ${e}`,showSizeChanger:!1,pageSize:10,onChange:()=>{i([])}}})})},C=c.div`
  .ant-table-row {
    cursor: pointer;
  }
`,I=()=>a.jsxs(b,{children:[a.jsxs("div",{className:"topCards",children:[p.mainTiles.map((s,i)=>a.jsx(d,{title:s.title,className:"elevated",value:s.value,background:i%2===0?"linear-gradient(#89aaf6, #e5f4fe)":"linear-gradient(#9fa3f5, #e6f3fd)"},i)),a.jsx(d,{title:a.jsx("span",{style:{color:"#fff"},children:"Visit Pricing Dashboard"}),className:"elevated",value:a.jsx(y,{style:{color:"#fff"}}),background:"linear-gradient(#01ccde, #433ef9)"})]}),a.jsx(S,{})]}),b=c.div`
  display: grid;
  gap: 25px;
  .topCards {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    & > * {
      flex: 1;
    }
  }
`;export{I as default};
