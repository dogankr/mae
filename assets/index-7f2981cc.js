import{s as m,r as c,u as y,j as a,T as j,d,B as p,A as v,a as C,F as b,I as D,b as I,m as M,C as k}from"./index-b6a7d676.js";import{u}from"./useAPI-989904ff.js";const P=()=>{var l;const[s,i]=c.useState([]),[o,h]=c.useState(""),g=y(),{data:n,isFetching:x,refetch:f}=u().query("/predictions",{},{refetchOnmount:!0}),{mutate:w}=u().mutation("DELETE","/predictions"),S=()=>{s.forEach((e,t)=>{w({pathParam:e},{onSuccess:()=>{t===s.length-1&&(i([]),f())}})})};return a.jsx(A,{children:a.jsx(j,{columns:[{title:"Last Modified",dataIndex:"modified",width:120,render:e=>d(e).format("DD/MM/YYYY")},{title:"Matter Name",dataIndex:"name",render:(e,t)=>a.jsx(p,{type:"ghost",className:"pill rowLink",onClick:()=>{console.log("click",t),g(`/analytics/result/predictive/${t.id}`)},children:e})},{title:"Method",dataIndex:"method",width:200,render:()=>"Prediction"},{title:"Pricer",dataIndex:"lawyer_name",width:240,render:(e,t)=>a.jsx(v,{users:[{id:t.id,name:e,location:"",avatar:`/avatars/avatar${e.length%11+1}.png`}]})},{title:"Practise Group",dataIndex:"team_name",width:190,filters:["Acquisition","Litigation","Arbitration"].map(e=>({text:e.charAt(0).toUpperCase()+e.slice(1),value:e})),onFilter:(e,t)=>t.practiceGroup.includes(e)},{title:"Status",dataIndex:"completion",width:112,render:e=>a.jsx(C,{color:e==="won"?"#45c53e":e===0?"#9e3ff3":e===100?"#fa9b17":e==="lost"?"#f15177":"grey",children:(e===0?"incomplete":e===100?"estimated":"In Progress").toUpperCase()}),filters:["won","inProgress","estimated","lost"].map(e=>({text:e.charAt(0).toUpperCase()+e.slice(1),value:e})),onFilter:(e,t)=>t.status.includes(e)}].map((e,t)=>({...e,key:t})),loading:x,dataSource:((l=n==null?void 0:n.results)==null?void 0:l.filter(e=>(d(e.modified).format("DD/MM/YYYY")+e.name+e.client+e.team_name+e.lawyer_name).toLowerCase().includes(o.toLowerCase())))||[],extendHeader:{title:"Pricing Estimates",extra:a.jsxs(a.Fragment,{children:[a.jsxs(p,{type:"primary",danger:!0,className:"pill",disabled:s.length===0,onClick:S,children:["Delete",a.jsx(b,{style:{height:"14px"}})]}),a.jsx(D,{placeholder:"Search",className:"pill",size:"large",style:{width:200,fontSize:"14px",padding:"6.9px 11px"},prefix:a.jsx(I,{style:{fontSize:"18px",color:"#767DC5"}}),value:o,onChange:e=>h(e.target.value)})]})},rowKey:e=>e.id,rowSelection:{type:"checkbox",selectedRowKeys:s,onSelect:(e,t)=>{i(t?[...s,e.id]:s.filter(r=>r!==e.id))},onSelectAll:(e,t)=>{i(e?t.map(r=>r.id):[])}},pagination:{showTotal:(e,t)=>`${t.join("-")} of ${e}`,showSizeChanger:!1,pageSize:10,onChange:()=>{i([])}}})})},A=m.div`
  .rowLink {
    color: unset;
    font-weight: unset;
    transition: all 0.1s ease-in-out;
    &:hover {
      color: #0116eb;
      font-weight: 500;
    }
  }
`,L=()=>a.jsxs(Y,{children:[a.jsx("div",{className:"topCards",children:M.mainTiles.map((s,i)=>a.jsx(k,{title:s.title,className:"elevated",value:s.value,background:i%2===0?"linear-gradient(#89aaf6, #e5f4fe)":"linear-gradient(#9fa3f5, #e6f3fd)"},i))}),a.jsx(P,{})]}),Y=m.div`
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
`;export{L as default};
