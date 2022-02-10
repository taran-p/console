"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[8394],{48394:function(e,t,o){o.r(t);var n=o(23430),a=o(18489),i=o(50390),c=o(34424),r=o(25594),s=o(81378),l=o(56805),d=o(66946),h=o(86509),u=o(4285),p=o(72462),m=o(44149),x=o(76352),Z=o(30324),g=o(70014),f=o(92440),b=o(66964),v=o(98280),k=o(62559),j={setModalErrorSnackMessage:m.zb},w=(0,c.$j)(null,j);t.default=(0,u.Z)((function(e){return(0,h.Z)((0,a.Z)((0,a.Z)({},p.bl),p.ID))}))(w((function(e){var t=e.classes,o=e.open,a=e.closeModalAndRefresh,c=e.setModalErrorSnackMessage,h=(0,i.useState)(!1),u=(0,n.Z)(h,2),p=u[0],m=u[1],j=(0,i.useState)(""),w=(0,n.Z)(j,2),y=w[0],S=w[1],C=(0,i.useState)(""),P=(0,n.Z)(C,2),N=P[0],z=P[1],F=(0,i.useState)(""),R=(0,n.Z)(F,2),B=R[0],A=R[1],M=(0,i.useState)(!1),O=(0,n.Z)(M,2),E=O[0],I=O[1],K=(0,i.useState)(!1),L=(0,n.Z)(K,2),T=L[0],$=L[1];(0,i.useEffect)((function(){p&&(T?Z.Z.invoke("POST","/api/v1/service-account-credentials",{policy:y,accessKey:N,secretKey:B}).then((function(e){m(!1),a(e)})).catch((function(e){m(!1),c(e)})):Z.Z.invoke("POST","/api/v1/service-accounts",{policy:y}).then((function(e){m(!1),a(e)})).catch((function(e){m(!1),c(e)})))}),[p,m,c,y,a,T,N,B]);return(0,k.jsx)(x.Z,{modalOpen:o,onClose:function(){a(null)},title:"Create Service Account",titleIcon:(0,k.jsx)(v.fr,{}),children:(0,k.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){!function(e){e.preventDefault(),m(!0)}(e)},children:[p&&(0,k.jsx)(r.ZP,{item:!0,xs:12,children:(0,k.jsx)(s.Z,{})}),(0,k.jsxs)(r.ZP,{container:!0,className:t.modalFormScrollable,children:[(0,k.jsx)(r.ZP,{item:!0,xs:12,children:(0,k.jsxs)("div",{className:t.infoDetails,children:["Service Accounts inherit the policy explicitly attached to the parent user and the policy attached to each group in which the parent user has membership. You can specify an optional JSON-formatted policy below to restrict the Service Account access to a subset of actions and resources explicitly allowed for the parent user.",(0,k.jsx)(l.Z,{sx:{paddingTop:"15px",paddingBottom:"15px"},children:"You cannot modify the Service Account optional policy after saving."})]})}),(0,k.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,k.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,k.jsx)(f.Z,{value:"locking",id:"locking",name:"locking",checked:T,onChange:function(e){$(e.target.checked)},label:"Customize Credentials"}),T&&(0,k.jsx)(r.ZP,{item:!0,xs:12,children:(0,k.jsxs)("div",{className:t.stackedInputs,children:[(0,k.jsx)(b.Z,{value:N,label:"Access Key",id:"accessKey",name:"accessKey",placeholder:"Enter Access Key",onChange:function(e){z(e.target.value)}}),(0,k.jsx)(b.Z,{value:B,label:"Secret Key",id:"secretKey",name:"secretKey",placeholder:"Enter Secret Key",onChange:function(e){A(e.target.value)}})]})})]}),(0,k.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,k.jsx)(f.Z,{value:"locking",id:"locking",name:"locking",checked:E,onChange:function(e){I(e.target.checked)},label:"Restrict with policy"}),E&&(0,k.jsx)(r.ZP,{item:!0,xs:12,className:t.codeMirrorContainer,children:(0,k.jsx)(g.Z,{label:"Policy ",value:y,onBeforeChange:function(e,t,o){S(o)}})})]})]})]}),(0,k.jsx)(r.ZP,{container:!0,children:(0,k.jsxs)(r.ZP,{item:!0,xs:12,className:t.modalButtonBar,children:[(0,k.jsx)(d.Z,{type:"button",color:"primary",variant:"outlined",onClick:function(){S("")},children:"Clear"}),(0,k.jsx)(d.Z,{type:"submit",variant:"contained",color:"primary",disabled:p,children:"Create"})]})})]})})})))},92440:function(e,t,o){var n=o(36222),a=o(18489),i=o(50390),c=o(86509),r=o(4285),s=o(49056),l=o(36554),d=o(94187),h=o(35477),u=o(25594),p=o(72462),m=o(97538),x=o(44977),Z=o(62559),g=(0,r.Z)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(s.Z);t.Z=(0,r.Z)((function(e){return(0,c.Z)((0,a.Z)((0,a.Z)({divContainer:{marginBottom:20},indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},p.OR),p.YI))}))((function(e){var t=e.label,o=void 0===t?"":t,a=e.onChange,c=e.value,r=e.id,s=e.name,p=e.checked,f=void 0!==p&&p,b=e.disabled,v=void 0!==b&&b,k=e.switchOnly,j=void 0!==k&&k,w=e.tooltip,y=void 0===w?"":w,S=e.description,C=void 0===S?"":S,P=e.classes,N=e.indicatorLabels,z=(0,Z.jsxs)(i.Fragment,{children:[!j&&(0,Z.jsx)("span",{className:(0,x.Z)(P.indicatorLabel,(0,n.Z)({},P.indicatorLabelOn,!f)),children:N&&N.length>1?N[1]:"OFF"}),(0,Z.jsx)(g,{checked:f,onChange:a,color:"primary",name:s,inputProps:{"aria-label":"primary checkbox"},disabled:v,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:c}),!j&&(0,Z.jsx)("span",{className:(0,x.Z)(P.indicatorLabel,(0,n.Z)({},P.indicatorLabelOn,f)),children:N?N[0]:"ON"})]});return j?z:(0,Z.jsx)("div",{className:P.divContainer,children:(0,Z.jsxs)(u.ZP,{container:!0,alignItems:"center",children:[(0,Z.jsx)(u.ZP,{item:!0,xs:!0,children:(0,Z.jsxs)(u.ZP,{container:!0,children:[(0,Z.jsx)(u.ZP,{item:!0,xs:12,sm:4,md:3,children:""!==o&&(0,Z.jsxs)(l.Z,{htmlFor:r,className:P.inputLabel,children:[(0,Z.jsx)("span",{children:o}),""!==y&&(0,Z.jsx)("div",{className:P.tooltipContainer,children:(0,Z.jsx)(d.Z,{title:y,placement:"top-start",children:(0,Z.jsx)("div",{className:P.tooltip,children:(0,Z.jsx)(m.Z,{})})})})]})}),(0,Z.jsx)(u.ZP,{item:!0,xs:12,sm:!0,textAlign:"left",children:""!==C&&(0,Z.jsx)(h.Z,{component:"p",className:P.fieldDescription,children:C})})]})}),(0,Z.jsx)(u.ZP,{item:!0,xs:12,sm:2,textAlign:"right",className:P.switchContainer,children:z})]})})}))},49056:function(e,t,o){o.d(t,{Z:function(){return w}});var n=o(36222),a=o(1048),i=o(32793),c=o(50390),r=o(44977),s=o(50076),l=o(36128),d=o(91442),h=o(16756),u=o(15573),p=o(8208),m=o(10594);function x(e){return(0,m.Z)("MuiSwitch",e)}var Z=(0,o(43349).Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),g=o(62559),f=["className","color","edge","size","sx"],b=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.edge&&t["edge".concat((0,d.Z)(o.edge))],t["size".concat((0,d.Z)(o.size))]]}})((function(e){var t,o=e.ownerState;return(0,i.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===o.edge&&{marginLeft:-8},"end"===o.edge&&{marginRight:-8},"small"===o.size&&(t={width:40,height:24,padding:7},(0,n.Z)(t,"& .".concat(Z.thumb),{width:16,height:16}),(0,n.Z)(t,"& .".concat(Z.switchBase),(0,n.Z)({padding:4},"&.".concat(Z.checked),{transform:"translateX(16px)"})),t))})),v=(0,p.ZP)(h.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var o=e.ownerState;return[t.switchBase,(0,n.Z)({},"& .".concat(Z.input),t.input),"default"!==o.color&&t["color".concat((0,d.Z)(o.color))]]}})((function(e){var t,o=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:"light"===o.palette.mode?o.palette.common.white:o.palette.grey[300],transition:o.transitions.create(["left","transform"],{duration:o.transitions.duration.shortest})},(0,n.Z)(t,"&.".concat(Z.checked),{transform:"translateX(20px)"}),(0,n.Z)(t,"&.".concat(Z.disabled),{color:"light"===o.palette.mode?o.palette.grey[100]:o.palette.grey[600]}),(0,n.Z)(t,"&.".concat(Z.checked," + .").concat(Z.track),{opacity:.5}),(0,n.Z)(t,"&.".concat(Z.disabled," + .").concat(Z.track),{opacity:"light"===o.palette.mode?.12:.2}),(0,n.Z)(t,"& .".concat(Z.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,o=e.theme,a=e.ownerState;return(0,i.Z)({"&:hover":{backgroundColor:(0,l.Fq)(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&(t={},(0,n.Z)(t,"&.".concat(Z.checked),(0,n.Z)({color:o.palette[a.color].main,"&:hover":{backgroundColor:(0,l.Fq)(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(Z.disabled),{color:"light"===o.palette.mode?(0,l.$n)(o.palette[a.color].main,.62):(0,l._j)(o.palette[a.color].main,.55)})),(0,n.Z)(t,"&.".concat(Z.checked," + .").concat(Z.track),{backgroundColor:o.palette[a.color].main}),t))})),k=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:"light"===t.palette.mode?t.palette.common.black:t.palette.common.white,opacity:"light"===t.palette.mode?.38:.3}})),j=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){return{boxShadow:e.theme.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),w=c.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiSwitch"}),n=o.className,c=o.color,l=void 0===c?"primary":c,h=o.edge,p=void 0!==h&&h,m=o.size,Z=void 0===m?"medium":m,w=o.sx,y=(0,a.Z)(o,f),S=(0,i.Z)({},o,{color:l,edge:p,size:Z}),C=function(e){var t=e.classes,o=e.edge,n=e.size,a=e.color,c=e.checked,r=e.disabled,l={root:["root",o&&"edge".concat((0,d.Z)(o)),"size".concat((0,d.Z)(n))],switchBase:["switchBase","color".concat((0,d.Z)(a)),c&&"checked",r&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},h=(0,s.Z)(l,x,t);return(0,i.Z)({},t,h)}(S),P=(0,g.jsx)(j,{className:C.thumb,ownerState:S});return(0,g.jsxs)(b,{className:(0,r.Z)(C.root,n),sx:w,ownerState:S,children:[(0,g.jsx)(v,(0,i.Z)({type:"checkbox",icon:P,checkedIcon:P,ref:t,ownerState:S},y,{classes:(0,i.Z)({},C,{root:C.switchBase})})),(0,g.jsx)(k,{className:C.track,ownerState:S})]})}))}}]);
//# sourceMappingURL=8394.c3b5a87f.chunk.js.map