import{_ as ae,d as K,e as E,f as se,r as h,g as U,K as k,R as ee,t as fe,h as $e,i as Se,k as xe,l as be,n as ve,o as ye,p as Ce,q as Ie,v as we,w as je,P as ze,x as Ne,s as le,j as o,C as M,y as Te,z as te,I as De,D as Ee,a as _,u as Fe,F as G,c as Pe,m as ie,S as ne,L as Ae}from"./index-fc75dee1.js";import{c as He,C as Oe,H as Me,S as We,B as Xe,p as A,F as oe}from"./constants-6c163b74.js";import{e as Be,f as _e}from"./index.esm-0ab70743.js";var Le=["className","prefixCls","style","active","status","iconPrefix","icon","wrapperStyle","stepNumber","disabled","description","title","subTitle","progressDot","stepIcon","tailContent","icons","stepIndex","onStepClick","onClick","render"];function re(e){return typeof e=="string"}function ce(e){var t,i=e.className,n=e.prefixCls,r=e.style,s=e.active,l=e.status,f=e.iconPrefix,u=e.icon;e.wrapperStyle;var w=e.stepNumber,j=e.disabled,v=e.description,b=e.title,y=e.subTitle,N=e.progressDot,$=e.stepIcon,F=e.tailContent,S=e.icons,C=e.stepIndex,a=e.onStepClick,m=e.onClick,c=e.render,g=ae(e,Le),d=!!a&&!j,p={};d&&(p.role="button",p.tabIndex=0,p.onClick=function(T){m==null||m(T),a(C)},p.onKeyDown=function(T){var I=T.which;(I===k.ENTER||I===k.SPACE)&&a(C)});var z=function(){var I,x,O=K("".concat(n,"-icon"),"".concat(f,"icon"),(I={},E(I,"".concat(f,"icon-").concat(u),u&&re(u)),E(I,"".concat(f,"icon-check"),!u&&l==="finish"&&(S&&!S.finish||!S)),E(I,"".concat(f,"icon-cross"),!u&&l==="error"&&(S&&!S.error||!S)),I)),R=h.createElement("span",{className:"".concat(n,"-icon-dot")});return N?typeof N=="function"?x=h.createElement("span",{className:"".concat(n,"-icon")},N(R,{index:w-1,status:l,title:b,description:v})):x=h.createElement("span",{className:"".concat(n,"-icon")},R):u&&!re(u)?x=h.createElement("span",{className:"".concat(n,"-icon")},u):S&&S.finish&&l==="finish"?x=h.createElement("span",{className:"".concat(n,"-icon")},S.finish):S&&S.error&&l==="error"?x=h.createElement("span",{className:"".concat(n,"-icon")},S.error):u||l==="finish"||l==="error"?x=h.createElement("span",{className:O}):x=h.createElement("span",{className:"".concat(n,"-icon")},w),$&&(x=$({index:w-1,status:l,title:b,description:v,node:x})),x},P=l||"wait",W=K("".concat(n,"-item"),"".concat(n,"-item-").concat(P),i,(t={},E(t,"".concat(n,"-item-custom"),u),E(t,"".concat(n,"-item-active"),s),E(t,"".concat(n,"-item-disabled"),j===!0),t)),X=se({},r),H=h.createElement("div",U({},g,{className:W,style:X}),h.createElement("div",U({onClick:m},p,{className:"".concat(n,"-item-container")}),h.createElement("div",{className:"".concat(n,"-item-tail")},F),h.createElement("div",{className:"".concat(n,"-item-icon")},z()),h.createElement("div",{className:"".concat(n,"-item-content")},h.createElement("div",{className:"".concat(n,"-item-title")},b,y&&h.createElement("div",{title:typeof y=="string"?y:void 0,className:"".concat(n,"-item-subtitle")},y)),v&&h.createElement("div",{className:"".concat(n,"-item-description")},v))));return c&&(H=c(H)||null),H}var Re=["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","stepIcon","initial","icons","onChange","itemRender","items"];function Q(e){var t,i=e.prefixCls,n=i===void 0?"rc-steps":i,r=e.style,s=r===void 0?{}:r,l=e.className;e.children;var f=e.direction,u=f===void 0?"horizontal":f,w=e.type,j=w===void 0?"default":w,v=e.labelPlacement,b=v===void 0?"horizontal":v,y=e.iconPrefix,N=y===void 0?"rc":y,$=e.status,F=$===void 0?"process":$,S=e.size,C=e.current,a=C===void 0?0:C,m=e.progressDot,c=m===void 0?!1:m,g=e.stepIcon,d=e.initial,p=d===void 0?0:d,z=e.icons,P=e.onChange,W=e.itemRender,X=e.items,H=X===void 0?[]:X,T=ae(e,Re),I=j==="navigation",x=j==="inline",O=x||c,R=x?"horizontal":u,J=x?void 0:S,pe=O?"vertical":b,me=K(n,"".concat(n,"-").concat(R),l,(t={},E(t,"".concat(n,"-").concat(J),J),E(t,"".concat(n,"-label-").concat(pe),R==="horizontal"),E(t,"".concat(n,"-dot"),!!O),E(t,"".concat(n,"-navigation"),I),E(t,"".concat(n,"-inline"),x),t)),ge=function(V){P&&a!==V&&P(V)},he=function(V,Z){var D=se({},V),B=p+Z;return F==="error"&&Z===a-1&&(D.className="".concat(n,"-next-error")),D.status||(B===a?D.status=F:B<a?D.status="finish":D.status="wait"),x&&(D.icon=void 0,D.subTitle=void 0),!D.render&&W&&(D.render=function(ue){return W(D,ue)}),ee.createElement(ce,U({},D,{active:B===a,stepNumber:B+1,stepIndex:B,key:B,prefixCls:n,iconPrefix:N,wrapperStyle:s,progressDot:O,stepIcon:g,icons:z,onStepClick:P&&ge}))};return ee.createElement("div",U({className:me,style:s},T),H.filter(function(Y){return Y}).map(he))}Q.Step=ce;const Ge=e=>{const{componentCls:t,customIconTop:i,customIconSize:n,customIconFontSize:r}=e;return{[`${t}-item-custom`]:{[`> ${t}-item-container > ${t}-item-icon`]:{height:"auto",background:"none",border:0,[`> ${t}-icon`]:{top:i,width:n,height:n,fontSize:r,lineHeight:`${r}px`}}},[`&:not(${t}-vertical)`]:{[`${t}-item-custom`]:{[`${t}-item-icon`]:{width:"auto",background:"none"}}}}},Ve=Ge,qe=e=>{const{componentCls:t,inlineDotSize:i,inlineTitleColor:n,inlineTailColor:r}=e,s=e.paddingXS+e.lineWidth,l={[`${t}-item-container ${t}-item-content ${t}-item-title`]:{color:n}};return{[`&${t}-inline`]:{width:"auto",display:"inline-flex",[`${t}-item`]:{flex:"none","&-container":{padding:`${s}px ${e.paddingXXS}px 0`,margin:`0 ${e.marginXXS/2}px`,borderRadius:e.borderRadiusSM,cursor:"pointer",transition:`background-color ${e.motionDurationMid}`,"&:hover":{background:e.controlItemBgHover},"&[role='button']:hover":{opacity:1}},"&-icon":{width:i,height:i,marginInlineStart:`calc(50% - ${i/2}px)`,[`> ${t}-icon`]:{top:0},[`${t}-icon-dot`]:{borderRadius:e.fontSizeSM/4}},"&-content":{width:"auto",marginTop:e.marginXS-e.lineWidth},"&-title":{color:n,fontSize:e.fontSizeSM,lineHeight:e.lineHeightSM,fontWeight:"normal",marginBottom:e.marginXXS/2},"&-description":{display:"none"},"&-tail":{marginInlineStart:0,top:s+i/2,transform:"translateY(-50%)","&:after":{width:"100%",height:e.lineWidth,borderRadius:0,marginInlineStart:0,background:r}},[`&:first-child ${t}-item-tail`]:{width:"50%",marginInlineStart:"50%"},[`&:last-child ${t}-item-tail`]:{display:"block",width:"50%"},"&-wait":Object.assign({[`${t}-item-icon ${t}-icon ${t}-icon-dot`]:{backgroundColor:e.colorBorderBg,border:`${e.lineWidth}px ${e.lineType} ${r}`}},l),"&-finish":Object.assign({[`${t}-item-tail::after`]:{backgroundColor:r},[`${t}-item-icon ${t}-icon ${t}-icon-dot`]:{backgroundColor:r,border:`${e.lineWidth}px ${e.lineType} ${r}`}},l),"&-error":l,"&-active, &-process":Object.assign({[`${t}-item-icon`]:{width:i,height:i,marginInlineStart:`calc(50% - ${i/2}px)`,top:0}},l),[`&:not(${t}-item-active) > ${t}-item-container[role='button']:hover`]:{[`${t}-item-title`]:{color:n}}}}}},Ke=qe,Ue=e=>{const{componentCls:t,iconSize:i,lineHeight:n,iconSizeSM:r}=e;return{[`&${t}-label-vertical`]:{[`${t}-item`]:{overflow:"visible","&-tail":{marginInlineStart:i/2+e.controlHeightLG,padding:`${e.paddingXXS}px ${e.paddingLG}px`},"&-content":{display:"block",width:(i/2+e.controlHeightLG)*2,marginTop:e.marginSM,textAlign:"center"},"&-icon":{display:"inline-block",marginInlineStart:e.controlHeightLG},"&-title":{paddingInlineEnd:0,paddingInlineStart:0,"&::after":{display:"none"}},"&-subtitle":{display:"block",marginBottom:e.marginXXS,marginInlineStart:0,lineHeight:n}},[`&${t}-small:not(${t}-dot)`]:{[`${t}-item`]:{"&-icon":{marginInlineStart:e.controlHeightLG+(i-r)/2}}}}}},Ye=Ue,Qe=e=>{const{componentCls:t,navContentMaxWidth:i,navArrowColor:n,stepsNavActiveColor:r,motionDurationSlow:s}=e;return{[`&${t}-navigation`]:{paddingTop:e.paddingSM,[`&${t}-small`]:{[`${t}-item`]:{"&-container":{marginInlineStart:-e.marginSM}}},[`${t}-item`]:{overflow:"visible",textAlign:"center","&-container":{display:"inline-block",height:"100%",marginInlineStart:-e.margin,paddingBottom:e.paddingSM,textAlign:"start",transition:`opacity ${s}`,[`${t}-item-content`]:{maxWidth:i},[`${t}-item-title`]:Object.assign(Object.assign({maxWidth:"100%",paddingInlineEnd:0},fe),{"&::after":{display:"none"}})},[`&:not(${t}-item-active)`]:{[`${t}-item-container[role='button']`]:{cursor:"pointer","&:hover":{opacity:.85}}},"&:last-child":{flex:1,"&::after":{display:"none"}},"&::after":{position:"absolute",top:`calc(50% - ${e.paddingSM/2}px)`,insetInlineStart:"100%",display:"inline-block",width:e.fontSizeIcon,height:e.fontSizeIcon,borderTop:`${e.lineWidth}px ${e.lineType} ${n}`,borderBottom:"none",borderInlineStart:"none",borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${n}`,transform:"translateY(-50%) translateX(-50%) rotate(45deg)",content:'""'},"&::before":{position:"absolute",bottom:0,insetInlineStart:"50%",display:"inline-block",width:0,height:e.lineWidthBold,backgroundColor:r,transition:`width ${s}, inset-inline-start ${s}`,transitionTimingFunction:"ease-out",content:'""'}},[`${t}-item${t}-item-active::before`]:{insetInlineStart:0,width:"100%"}},[`&${t}-navigation${t}-vertical`]:{[`> ${t}-item`]:{marginInlineEnd:0,"&::before":{display:"none"},[`&${t}-item-active::before`]:{top:0,insetInlineEnd:0,insetInlineStart:"unset",display:"block",width:e.lineWidth*3,height:`calc(100% - ${e.marginLG}px)`},"&::after":{position:"relative",insetInlineStart:"50%",display:"block",width:e.controlHeight*.25,height:e.controlHeight*.25,marginBottom:e.marginXS,textAlign:"center",transform:"translateY(-50%) translateX(-50%) rotate(135deg)"},[`> ${t}-item-container > ${t}-item-tail`]:{visibility:"hidden"}}},[`&${t}-navigation${t}-horizontal`]:{[`> ${t}-item > ${t}-item-container > ${t}-item-tail`]:{visibility:"hidden"}}}},Je=Qe,Ze=e=>{const{antCls:t,componentCls:i}=e;return{[`&${i}-with-progress`]:{[`${i}-item`]:{paddingTop:e.paddingXXS,[`&-process ${i}-item-container ${i}-item-icon ${i}-icon`]:{color:e.processIconColor}},[`&${i}-vertical > ${i}-item `]:{paddingInlineStart:e.paddingXXS,[`> ${i}-item-container > ${i}-item-tail`]:{top:e.marginXXS,insetInlineStart:e.iconSize/2-e.lineWidth+e.paddingXXS}},[`&, &${i}-small`]:{[`&${i}-horizontal ${i}-item:first-child`]:{paddingBottom:e.paddingXXS,paddingInlineStart:e.paddingXXS}},[`&${i}-small${i}-vertical > ${i}-item > ${i}-item-container > ${i}-item-tail`]:{insetInlineStart:e.iconSizeSM/2-e.lineWidth+e.paddingXXS},[`&${i}-label-vertical`]:{[`${i}-item ${i}-item-tail`]:{top:e.margin-2*e.lineWidth}},[`${i}-item-icon`]:{position:"relative",[`${t}-progress`]:{position:"absolute",insetBlockStart:(e.iconSize-e.stepsProgressSize-e.lineWidth*2)/2,insetInlineStart:(e.iconSize-e.stepsProgressSize-e.lineWidth*2)/2}}}}},ke=Ze,et=e=>{const{componentCls:t,descriptionMaxWidth:i,lineHeight:n,dotCurrentSize:r,dotSize:s,motionDurationSlow:l}=e;return{[`&${t}-dot, &${t}-dot${t}-small`]:{[`${t}-item`]:{"&-title":{lineHeight:n},"&-tail":{top:Math.floor((e.dotSize-e.lineWidth*3)/2),width:"100%",marginTop:0,marginBottom:0,marginInline:`${i/2}px 0`,padding:0,"&::after":{width:`calc(100% - ${e.marginSM*2}px)`,height:e.lineWidth*3,marginInlineStart:e.marginSM}},"&-icon":{width:s,height:s,marginInlineStart:(e.descriptionMaxWidth-s)/2,paddingInlineEnd:0,lineHeight:`${s}px`,background:"transparent",border:0,[`${t}-icon-dot`]:{position:"relative",float:"left",width:"100%",height:"100%",borderRadius:100,transition:`all ${l}`,"&::after":{position:"absolute",top:-e.marginSM,insetInlineStart:(s-e.controlHeightLG*1.5)/2,width:e.controlHeightLG*1.5,height:e.controlHeight,background:"transparent",content:'""'}}},"&-content":{width:i},[`&-process ${t}-item-icon`]:{position:"relative",top:(s-r)/2,width:r,height:r,lineHeight:`${r}px`,background:"none",marginInlineStart:(e.descriptionMaxWidth-r)/2},[`&-process ${t}-icon`]:{[`&:first-child ${t}-icon-dot`]:{insetInlineStart:0}}}},[`&${t}-vertical${t}-dot`]:{[`${t}-item-icon`]:{marginTop:(e.controlHeight-s)/2,marginInlineStart:0,background:"none"},[`${t}-item-process ${t}-item-icon`]:{marginTop:(e.controlHeight-r)/2,top:0,insetInlineStart:(s-r)/2,marginInlineStart:0},[`${t}-item > ${t}-item-container > ${t}-item-tail`]:{top:(e.controlHeight-s)/2,insetInlineStart:0,margin:0,padding:`${s+e.paddingXS}px 0 ${e.paddingXS}px`,"&::after":{marginInlineStart:(s-e.lineWidth)/2}},[`&${t}-small`]:{[`${t}-item-icon`]:{marginTop:(e.controlHeightSM-s)/2},[`${t}-item-process ${t}-item-icon`]:{marginTop:(e.controlHeightSM-r)/2},[`${t}-item > ${t}-item-container > ${t}-item-tail`]:{top:(e.controlHeightSM-s)/2}},[`${t}-item:first-child ${t}-icon-dot`]:{insetInlineStart:0},[`${t}-item-content`]:{width:"inherit"}}}},tt=et,it=e=>{const{componentCls:t}=e;return{[`&${t}-rtl`]:{direction:"rtl",[`${t}-item`]:{"&-subtitle":{float:"left"}},[`&${t}-navigation`]:{[`${t}-item::after`]:{transform:"rotate(-45deg)"}},[`&${t}-vertical`]:{[`> ${t}-item`]:{"&::after":{transform:"rotate(225deg)"},[`${t}-item-icon`]:{float:"right"}}},[`&${t}-dot`]:{[`${t}-item-icon ${t}-icon-dot, &${t}-small ${t}-item-icon ${t}-icon-dot`]:{float:"right"}}}}},nt=it,ot=e=>{const{componentCls:t,iconSizeSM:i,fontSizeSM:n,fontSize:r,colorTextDescription:s}=e;return{[`&${t}-small`]:{[`&${t}-horizontal:not(${t}-label-vertical) ${t}-item`]:{paddingInlineStart:e.paddingSM,"&:first-child":{paddingInlineStart:0}},[`${t}-item-icon`]:{width:i,height:i,marginTop:0,marginBottom:0,marginInline:`0 ${e.marginXS}px`,fontSize:n,lineHeight:`${i}px`,textAlign:"center",borderRadius:i},[`${t}-item-title`]:{paddingInlineEnd:e.paddingSM,fontSize:r,lineHeight:`${i}px`,"&::after":{top:i/2}},[`${t}-item-description`]:{color:s,fontSize:r},[`${t}-item-tail`]:{top:i/2-e.paddingXXS},[`${t}-item-custom ${t}-item-icon`]:{width:"inherit",height:"inherit",lineHeight:"inherit",background:"none",border:0,borderRadius:0,[`> ${t}-icon`]:{fontSize:i,lineHeight:`${i}px`,transform:"none"}}}}},rt=ot,at=e=>{const{componentCls:t,iconSizeSM:i,iconSize:n}=e;return{[`&${t}-vertical`]:{display:"flex",flexDirection:"column",[`> ${t}-item`]:{display:"block",flex:"1 0 auto",paddingInlineStart:0,overflow:"visible",[`${t}-item-icon`]:{float:"left",marginInlineEnd:e.margin},[`${t}-item-content`]:{display:"block",minHeight:e.controlHeight*1.5,overflow:"hidden"},[`${t}-item-title`]:{lineHeight:`${n}px`},[`${t}-item-description`]:{paddingBottom:e.paddingSM}},[`> ${t}-item > ${t}-item-container > ${t}-item-tail`]:{position:"absolute",top:0,insetInlineStart:n/2-e.lineWidth,width:e.lineWidth,height:"100%",padding:`${n+e.marginXXS*1.5}px 0 ${e.marginXXS*1.5}px`,"&::after":{width:e.lineWidth,height:"100%"}},[`> ${t}-item:not(:last-child) > ${t}-item-container > ${t}-item-tail`]:{display:"block"},[` > ${t}-item > ${t}-item-container > ${t}-item-content > ${t}-item-title`]:{"&::after":{display:"none"}},[`&${t}-small ${t}-item-container`]:{[`${t}-item-tail`]:{position:"absolute",top:0,insetInlineStart:i/2-e.lineWidth,padding:`${i+e.marginXXS*1.5}px 0 ${e.marginXXS*1.5}px`},[`${t}-item-title`]:{lineHeight:`${i}px`}}}}},st=at;var L;(function(e){e.wait="wait",e.process="process",e.finish="finish",e.error="error"})(L||(L={}));const q=(e,t)=>{const i=`${t.componentCls}-item`,n=`${e}IconColor`,r=`${e}TitleColor`,s=`${e}DescriptionColor`,l=`${e}TailColor`,f=`${e}IconBgColor`,u=`${e}IconBorderColor`,w=`${e}DotColor`;return{[`${i}-${e} ${i}-icon`]:{backgroundColor:t[f],borderColor:t[u],[`> ${t.componentCls}-icon`]:{color:t[n],[`${t.componentCls}-icon-dot`]:{background:t[w]}}},[`${i}-${e}${i}-custom ${i}-icon`]:{[`> ${t.componentCls}-icon`]:{color:t[w]}},[`${i}-${e} > ${i}-container > ${i}-content > ${i}-title`]:{color:t[r],"&::after":{backgroundColor:t[l]}},[`${i}-${e} > ${i}-container > ${i}-content > ${i}-description`]:{color:t[s]},[`${i}-${e} > ${i}-container > ${i}-tail::after`]:{backgroundColor:t[l]}}},lt=e=>{const{componentCls:t,motionDurationSlow:i}=e,n=`${t}-item`,r=`${n}-icon`;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[n]:{position:"relative",display:"inline-block",flex:1,overflow:"hidden",verticalAlign:"top","&:last-child":{flex:"none",[`> ${n}-container > ${n}-tail, > ${n}-container >  ${n}-content > ${n}-title::after`]:{display:"none"}}},[`${n}-container`]:{outline:"none","&:focus-visible":{[r]:Object.assign({},be(e))}},[`${r}, ${n}-content`]:{display:"inline-block",verticalAlign:"top"},[r]:{width:e.iconSize,height:e.iconSize,marginTop:0,marginBottom:0,marginInlineStart:0,marginInlineEnd:e.marginXS,fontSize:e.iconFontSize,fontFamily:e.fontFamily,lineHeight:`${e.iconSize}px`,textAlign:"center",borderRadius:e.iconSize,border:`${e.lineWidth}px ${e.lineType} transparent`,transition:`background-color ${i}, border-color ${i}`,[`${t}-icon`]:{position:"relative",top:e.iconTop,color:e.colorPrimary,lineHeight:1}},[`${n}-tail`]:{position:"absolute",top:e.iconSize/2-e.paddingXXS,insetInlineStart:0,width:"100%","&::after":{display:"inline-block",width:"100%",height:e.lineWidth,background:e.colorSplit,borderRadius:e.lineWidth,transition:`background ${i}`,content:'""'}},[`${n}-title`]:{position:"relative",display:"inline-block",paddingInlineEnd:e.padding,color:e.colorText,fontSize:e.fontSizeLG,lineHeight:`${e.titleLineHeight}px`,"&::after":{position:"absolute",top:e.titleLineHeight/2,insetInlineStart:"100%",display:"block",width:9999,height:e.lineWidth,background:e.processTailColor,content:'""'}},[`${n}-subtitle`]:{display:"inline",marginInlineStart:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize},[`${n}-description`]:{color:e.colorTextDescription,fontSize:e.fontSize}},q(L.wait,e)),q(L.process,e)),{[`${n}-process > ${n}-container > ${n}-title`]:{fontWeight:e.fontWeightStrong}}),q(L.finish,e)),q(L.error,e)),{[`${n}${t}-next-error > ${t}-item-title::after`]:{background:e.colorError},[`${n}-disabled`]:{cursor:"not-allowed"}})},ct=e=>{const{componentCls:t,motionDurationSlow:i}=e;return{[`& ${t}-item`]:{[`&:not(${t}-item-active)`]:{[`& > ${t}-item-container[role='button']`]:{cursor:"pointer",[`${t}-item`]:{[`&-title, &-subtitle, &-description, &-icon ${t}-icon`]:{transition:`color ${i}`}},"&:hover":{[`${t}-item`]:{"&-title, &-subtitle, &-description":{color:e.colorPrimary}}}},[`&:not(${t}-item-process)`]:{[`& > ${t}-item-container[role='button']:hover`]:{[`${t}-item`]:{"&-icon":{borderColor:e.colorPrimary,[`${t}-icon`]:{color:e.colorPrimary}}}}}}},[`&${t}-horizontal:not(${t}-label-vertical)`]:{[`${t}-item`]:{paddingInlineStart:e.padding,whiteSpace:"nowrap","&:first-child":{paddingInlineStart:0},[`&:last-child ${t}-item-title`]:{paddingInlineEnd:0},"&-tail":{display:"none"},"&-description":{maxWidth:e.descriptionMaxWidth,whiteSpace:"normal"}}}}},dt=e=>{const{componentCls:t}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},xe(e)),{display:"flex",width:"100%",fontSize:0,textAlign:"initial"}),lt(e)),ct(e)),Ve(e)),rt(e)),st(e)),Ye(e)),tt(e)),Je(e)),nt(e)),ke(e)),Ke(e))}},pt=$e("Steps",e=>{const{wireframe:t,colorTextDisabled:i,controlHeightLG:n,colorTextLightSolid:r,colorText:s,colorPrimary:l,colorTextLabel:f,colorTextDescription:u,colorTextQuaternary:w,colorFillContent:j,controlItemBgActive:v,colorError:b,colorBgContainer:y,colorBorderSecondary:N,colorSplit:$}=e,F=Se(e,{processIconColor:r,processTitleColor:s,processDescriptionColor:s,processIconBgColor:l,processIconBorderColor:l,processDotColor:l,processTailColor:$,waitIconColor:t?i:f,waitTitleColor:u,waitDescriptionColor:u,waitTailColor:$,waitIconBgColor:t?y:j,waitIconBorderColor:t?i:"transparent",waitDotColor:i,finishIconColor:l,finishTitleColor:s,finishDescriptionColor:u,finishTailColor:l,finishIconBgColor:t?y:v,finishIconBorderColor:t?l:v,finishDotColor:l,errorIconColor:r,errorTitleColor:b,errorDescriptionColor:b,errorTailColor:$,errorIconBgColor:b,errorIconBorderColor:b,errorDotColor:b,stepsNavActiveColor:l,stepsProgressSize:n,inlineDotSize:6,inlineTitleColor:w,inlineTailColor:N});return[dt(F)]},e=>{const{colorTextDisabled:t,fontSize:i,controlHeightSM:n,controlHeight:r,controlHeightLG:s,fontSizeHeading3:l}=e;return{titleLineHeight:r,customIconSize:r,customIconTop:0,customIconFontSize:n,iconSize:r,iconTop:-.5,iconFontSize:i,iconSizeSM:l,dotSize:r/4,dotCurrentSize:s/4,navArrowColor:t,navContentMaxWidth:"auto",descriptionMaxWidth:140}});function mt(e){return e.filter(t=>t)}function gt(e,t){if(e)return e;const i=ve(t).map(n=>{if(h.isValidElement(n)){const{props:r}=n;return Object.assign({},r)}return null});return mt(i)}var ht=globalThis&&globalThis.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i};const de=e=>{const{percent:t,size:i,className:n,rootClassName:r,direction:s,items:l,responsive:f=!0,current:u=0,children:w,style:j}=e,v=ht(e,["percent","size","className","rootClassName","direction","items","responsive","current","children","style"]),{xs:b}=ye(f),{getPrefixCls:y,direction:N,steps:$}=h.useContext(Ce),F=h.useMemo(()=>f&&b?"vertical":s,[b,s]),S=Ie(i),C=y("steps",e.prefixCls),[a,m]=pt(C),c=e.type==="inline",g=y("",e.iconPrefix),d=gt(l,w),p=c?void 0:t,z=Object.assign(Object.assign({},$==null?void 0:$.style),j),P=K($==null?void 0:$.className,{[`${C}-rtl`]:N==="rtl",[`${C}-with-progress`]:p!==void 0},n,r,m),W={finish:h.createElement(we,{className:`${C}-finish-icon`}),error:h.createElement(je,{className:`${C}-error-icon`})},X=T=>{let{node:I,status:x}=T;if(x==="process"&&p!==void 0){const O=S==="small"?32:40;return h.createElement("div",{className:`${C}-progress-icon`},h.createElement(ze,{type:"circle",percent:p,size:O,strokeWidth:4,format:()=>null}),I)}return I},H=(T,I)=>T.description?h.createElement(Ne,{title:T.description},I):I;return a(h.createElement(Q,Object.assign({icons:W},v,{style:z,current:u,size:S,items:d,itemRender:c?H:void 0,stepIcon:X,direction:F,prefixCls:C,iconPrefix:g,className:P})))};de.Step=Q.Step;const ut=de,ft=({itemKey:e})=>o.jsx($t,{children:o.jsxs(M,{title:o.jsxs("span",{style:{display:"flex",gap:"10px",alignItems:"center",fontSize:"20px"},children:[o.jsx(Te,{style:{color:"#767DC5",fontSize:"22px"}}),e?He(e):""]}),className:"elevated",background:"#e9eef5",children:["Lorem ipsum dolor sit amet consectetur. Pellentesque nulla congue sapien tellus.",o.jsxs("div",{className:"stats",children:[o.jsxs("div",{className:"top",children:[o.jsx(M,{title:o.jsxs("span",{children:["Filled"," ",o.jsx(te,{style:{fontSize:"14px",opacity:.8}})]}),className:"elevated",value:"78 %",background:"linear-gradient(180deg, #CDEAFA 0%, #DEF4FD 100%)"}),o.jsx(M,{title:"Sample Size",className:"elevated",value:"375",background:"linear-gradient(180deg, #F1E0FF 0%, #DEF1FC 100%)"})," ",o.jsx(M,{title:"Mean",className:"elevated",value:"$14.2M",background:"linear-gradient(180deg, #CDF3F5 0%, #DEF1FC 100%)"}),o.jsx(M,{title:"Median",className:"elevated",value:"$11.5M",background:"linear-gradient(180deg, #D6CFFF 0%, #DEF1FC 100%)"})]}),o.jsxs("div",{className:"bottom",children:[o.jsxs("div",{className:"left",children:[o.jsx(M,{title:o.jsxs("span",{children:["Distribution of samples"," ",o.jsx(te,{style:{fontSize:"14px",opacity:.8}})]}),children:o.jsx(Oe,{preset:"line",option:{grid:{left:0,right:0,bottom:0,top:0,containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisLabel:{show:!1},data:["10%","20%","30%","40%","50%","60%"]},yAxis:{type:"value",min:600,max:1300,axisLabel:{show:!1},splitLine:{show:!1}},tooltip:{trigger:"axis"},series:[{data:[820,800,820,940,1050,900],name:"Samples",type:"line",stack:"Total",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#0217EA"},itemStyle:{color:"#0217EA"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.2,color:"#0217EA"},{offset:1,color:"#0217EA00"}]}}}]}})}),o.jsx("div",{background:"linear-gradient(-90deg, #0112BC, #6977FF)",style:{background:"linear-gradient(-90deg, #0112BC, #6977FF)",borderRadius:"20px",display:"flex",alignItems:"center",justifyItems:"space-between",height:"30px",color:"#fff",fontWeight:"300",padding:"0 20px"},children:o.jsxs("div",{style:{flex:1,display:"flex",justifyContent:"space-between"},children:[o.jsx("span",{children:"Min $1.1M"}),o.jsx("span",{children:"Max $250.5M"})]})})]}),o.jsxs(M,{background:"transparent",title:"Find a claim value",style:{border:"1px solid #A3A9E8"},children:[o.jsx(De,{placeholder:"Search matters",prefix:o.jsx(Ee,{})}),o.jsx("div",{style:{padding:"20px 0",display:"grid",gap:"5px",color:"#000757",borderBottom:"1px solid #A3A9E8"},children:[{name:"Long Matter Name here ",value:5e3},{name:"Long Matter Name here ",value:5e3}].map((t,i)=>o.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[o.jsxs("span",{children:[" ",t.name+i," "]}),o.jsxs("span",{children:["$"," ",o.jsx("span",{style:{width:"61px",height:"30px",padding:"4px 12px",alignItems:"center",gap:"10px",borderRadius:"6px",background:"#0112BC",color:"#fff"},children:t.value.toLocaleString("en-US")})]})]},i))}),o.jsx(_,{type:"text",size:"small",style:{color:"#0116EB",marginTop:"5px"},children:"Add Matter +"})]})]})]})]})}),$t=le.div`
  margin-bottom: 16px;
  & > div > .ant-card-body {
    color: #000757;
    padding-top: 16px;
    .stats {
      display: grid;
      gap: 16px;
      padding: 12px 0;
      .top,
      .bottom {
        padding: 12px 0;
        display: flex;
        gap: 16px;
        & > * {
          flex: 1;
        }
      }
      .bottom > .left {
        display: grid;
        gap: 16px;
      }
    }
  }
`,{Content:St}=Ae,Ct=()=>{var S,C;const e=Fe(),[t,i]=h.useState(0),[n,r]=h.useState([1,0,0,0,0,0,0]),[s,l]=h.useState([]),[f]=G.useForm();G.useWatch("claim_value",f);const[u,w]=Pe(),j=u.get("client"),v=u.get("matterNumber"),b=u.get("matterName"),y=u.get("pricingType"),N=u.get("pricingAmount"),$=[{title:"Parties",description:" of 2"},{title:"Claim",description:" of 2"},{title:"Evidance",description:" of 4"},{title:"Experts",description:" of 1"},{title:"Case Management",description:" of 1"},{title:"ADR",description:" of 1"},{title:"Trial",description:" of 9"}],F=a=>{const m=Object.fromEntries(Object.entries(a).filter(([g,d])=>(d.value??d.value1??d.value2??d??null)!==null)),c=new URLSearchParams;c.append("client",j),v&&c.append("matterNumber",v),c.append("matterName",b),c.append("pricingType",y),c.append("pricingAmount",N),A.forEach(g=>{const d=m[g[1]];d&&(g[2]?c.append(g[1],d.value??d.value1??d.value2):c.append(g[1],d))}),e(`/analytics/result/predictive?${c.toString()}&`)};return o.jsxs(xt,{children:[o.jsx(Me,{client:(S=ie.clients.find(a=>a.id===+j))==null?void 0:S.client,matter:{name:b,number:v},owner:ie.users[j],info:{status:"Active",lastModified:"2021-01-01",type:y},matterAssumptionList:[{id:1,name:"Assumption 1",type:"Predictive"},{id:2,name:"Assumption 2",type:"Similar Matters"}]}),o.jsxs(St,{children:[o.jsx(We,{title:o.jsxs("div",{children:[o.jsx("span",{style:{fontSize:"20px",fontWeight:"400"},children:"Assumptions"}),o.jsx(_,{icon:o.jsx(Xe,{style:{fontSize:"18px"}}),size:"small",type:"text",style:{color:"#747ABA",fontSize:"14px",fontweight:500},onClick:()=>{f.resetFields()},children:"Clear All Filters"})]}),subtitle:o.jsx("div",{children:"All fields are required."}),children:o.jsx(ut,{className:"formSteps",progressDot:!0,current:t,onChange:a=>i(a),direction:"vertical",items:$.map((a,m)=>({...a,description:n[m]+a.description})).reduce((a,m,c)=>{a[c]=m;const g=m.description.split(" of ").reduce((d,p,z)=>z===0?p:d==p,!1);return c===0?a[c].status=g?"finish":"wait":a[c].status=g&&a[c-1].status==="finish"?"finish":"wait",a[c].className=m.description.split(" of ")[0]==="0"?"":g?"green":"yellow",a},[])})}),o.jsxs("div",{className:"pageContent",children:[o.jsx("div",{className:"pageTitle",children:$[t].title}),o.jsxs(G,{name:"form",form:f,onFinish:F,onFinishFailed:a=>console.log(a),initialValues:{"side_we're_representing":"claimant"},onValuesChange:()=>{const a=f.getFieldsValue(),m=A.map(g=>[...g,Object.values(a[g[1]]).every(d=>!!d)]);console.log(".reduce / list:",m);const c=m.reduce((g,d,p)=>(d[d.length-1]&&(g[Array.from(new Set(A.map(z=>z[0]))).indexOf(d[0])]+=1),g),[0,0,0,0,0,0,0]);console.log(".reduce / newFormStatus:",c),r(c)},children:[A.filter(a=>!a[2]).map((a,m)=>{const c=Array.from(new Set(A.map(p=>p[0]))).indexOf(a[0])!==t,g=Array.from(new Set(A.map(p=>p[0]))).indexOf(a[0])===t&&!["side_we're_representing"].includes(a[1]),d=s.includes(a[1]);return o.jsxs("div",{className:"formTileWrapper",children:[o.jsx(oe,{name:a[1],form:f,handleHide:p=>{f.setFieldValue(p,void 0),setFormKeys(z=>z.filter(P=>P!==p))},hideRemoveButton:!0,hidden:c,custom:a[1]==="side_we're_representing"&&o.jsx(G.Item,{name:[a[1]],children:o.jsx(ne,{style:{width:"145px"},options:[{label:"Claimant",value:"claimant"},{label:"Defendant",value:"defendant"}]})})},m),g&&!c&&o.jsx(_,{type:"ghost",size:"small",className:"expandButton",onClick:()=>l(p=>p.includes(a[1])?p.filter(z=>z!==a[1]):[...p,a[1]]),children:d?o.jsxs(o.Fragment,{children:["Hide Details ",o.jsx(Be,{})]}):o.jsxs(o.Fragment,{children:["Show Details ",o.jsx(_e,{})]})}),d&&!c&&o.jsx(ft,{itemKey:a[1]})]},m)}),o.jsx("div",{className:"formGrid",children:A.filter(a=>!!a[2]).map((a,m)=>{const c=Array.from(new Set(A.map(g=>g[0]))).indexOf(a[0])!==t;return o.jsx("div",{className:"formTileWrapper",children:o.jsx(oe,{name:a[1],form:f,handleHide:g=>{f.setFieldValue(g,void 0),setFormKeys(d=>d.filter(p=>p!==g))},hideRemoveButton:!0,hidden:c,custom:a[1]==="side_we're_representing"&&o.jsx(G.Item,{name:"side_we're_representing",initialValue:"claimant",children:o.jsx(ne,{style:{width:"145px"},options:[{label:"Claimant",value:"claimant"},{label:"Defendant",value:"defendant"}]})})},m)},m)})}),o.jsxs("div",{className:"controls",children:[o.jsx(_,{type:"text",className:"pill outline",onClick:()=>i(t-1),disabled:t===0,children:"Back"}),t===$.length-1?o.jsx(_,{type:"primary",className:"pill",htmlType:"submit",disabled:n.reduce((a,m)=>a+m,0)!==20,children:"Run Predictive Analysis"}):o.jsxs(_,{type:"primary",className:"pill",htmlType:"submit",onClick:()=>i(t+1),children:["Next (",(C=$[t+1])==null?void 0:C.title,")"]})]})]})]})]})]})},xt=le.div`
  &:before {
    background: #000757;
    content: "";
    position: absolute;
    width: 100%;
    height: 276px;
    z-index: -3;
    top: 0;
    left: 0;
  }
  .controls {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    padding: 8px 36px;
    margin: 0 -36px 0 -36px;
    position: sticky;
    bottom: 0;
    background: #fff;
    box-shadow: 0 -15px 15px 0 #fff;
  }
  .ant-collapse-header {
    padding: 0 !important;
    cursor: default !important;
  }
  & > .ant-layout-content {
    display: grid;
    grid-template-columns: 385px 1fr;
    height: 100%;
  }
  .pageContent {
    padding: 36px 0 36px 36px;
    .pageTitle {
      color: #000757;
      font-size: 20px;
      margin-bottom: 20px;
    }
    .formTileWrapper {
      position: relative;
      .formTile {
        border-top: 1px solid #ebecff;
        padding: 16px 0 0 0;
        margin: 0;
        /* border-bottom: 1px solid #ebecff; */
      }
      .expandButton {
        position: absolute;
        top: 40px;
        right: 0;
        color: #747aba;
        font-size: 12px;
        svg {
          font-size: 12px;
        }
      }
    }
    .formGrid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 0 16px;
      border-top: 1px solid #ebecff;
      .formTile {
        border-top: none;
      }
    }
  }
  .formSteps .ant-steps-item-content {
    display: flex !important;
    justify-content: space-between;
    border-bottom: 1px solid #ebecff;
    min-height: 32px !important;
    margin: 5px 0;
    .ant-steps-item-description {
      color: #a3a9e8;
      font-weight: 400;
    }
  }
  .green .ant-steps-item-description {
    color: #1aa64a !important;
  }
  .yellow .ant-steps-item-description {
    color: #ed7200 !important;
  }

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
`;export{Ct as default};