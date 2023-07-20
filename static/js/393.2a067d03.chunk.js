"use strict";(self.webpackChunknutrition_ai_consultant=self.webpackChunknutrition_ai_consultant||[]).push([[393],{57393:function(e,n,t){t.r(n),t.d(n,{default:function(){return pe}});var r=t(72791),a=t(61889),o=t(64554),l=t(40854),i=t(1413),s=t(74165),c=t(15861),u=t(29439),d=t(2919),m=t(27247),h=t(41286),x=t(3579),Z=t(36151),p=t(39504),g=t(13400),_=t(40986),j=t(35527),v=t(89891),f=t(20890),y=t(763),b=t(81405),C=t(57689),P=t(75985),w=t(61865),N=t(75099),D=t(52260),I=t(70810),T=t(85823),O=t(62328),k=t(5712),R=t(94454),q=t(97123),S=t(39157),A=t(68096),E=t(85523),F=t(79012),L=t(47071),M=t(17133),V=t(30829),U=t(23786),B=t(88970),z=t(54535),W=t(48550),H=t(92506),G=t(81724),Y=t(45823),J=t(95414),K=(t(2665),t(84701)),Q=t(98137),X=t(73974),$=t(80184),ee=[{label:(0,J.Z)("common_weekly")},{label:(0,J.Z)("common_biweekly")},{label:(0,J.Z)("common_monthly")}],ne=function(e){var n=e.open,t=e.onClose,l=e.dialogData,u=(0,b.I0)(),d=(0,b.v9)((function(e){return e.common.currencyList})),m=(0,b.v9)((function(e){return e.servicePlan.serviceTypes})),h=(0,y.get)(m,"serviceTypeOnline",!1),x=(0,y.get)(m,"serviceTypeOffline",!1),p=(0,y.get)(m,"serviceTypePhone",!1),g=h||x||p;(0,r.useEffect)((function(){u((0,Y.SM)())}),[u]);var _=G.Ry().shape({planName:G.Z_().min(5,(0,J.Z)("consultant_error_service_plan_name_too_short")).max(50,(0,J.Z)("consultant_error_service_plan_name_too_long")).required((0,J.Z)("consultant_error_service_plan_name_required")),numberOfConsultant:G.Rx().required((0,J.Z)("consultant_error_number_of_consultation_required")),sessionName:G.Z_().when("numberOfConsultant",{is:function(e){return 1!==e},then:G.Z_().required((0,J.Z)("common_error_consultant_session_required")),otherwise:G.Z_()}),timeUnit:G.Rx().required((0,J.Z)("common_error_time_duration_required")),dietPlan:G.O7().required((0,J.Z)("common_error_diet_plan_required")),currencyId:G.Ry().required((0,J.Z)("consultant_error_currency_type_required")),amount:G.Rx().required((0,J.Z)("consultant_error_amount_required")),details:G.Z_().required((0,J.Z)("consultant_error_description_required"))}),j=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(n){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.currencyId=(0,y.get)(n,"currencyId._id",""),console.log(n,"payload"),"update"===(0,y.get)(l,"formType")&&(n._id=(0,y.get)(l,"rowData._id")),e.next=5,u((0,w.kI)(n)).unwrap().then((function(e){e.status&&(u((0,w.t4)()),t(),P.Am.success(e.message))})).catch((function(e){console.log(" handleAddServicePlan err",e)}));case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,$.jsx)($.Fragment,{children:(0,$.jsx)(X.ZP,{anchor:"right",variant:"temporary",open:n,onClose:t,children:(0,$.jsxs)("div",{className:"service-plan-add-container",children:[(0,$.jsxs)("div",{className:"service-plan-add-header",children:[(0,$.jsx)("h2",{children:(0,J.Z)("consultant_add_service_plan")}),(0,$.jsx)(Z.Z,{onClick:t,children:(0,$.jsx)(O.Z,{})})]}),(0,$.jsx)(H.J9,{initialValues:{planName:(0,y.get)(l,"rowData.planName",""),numberOfConsultant:(0,y.get)(l,"rowData.numberOfConsultant",""),sessionName:(0,y.get)(l,"rowData.sessionName",""),onlineConsultation:(0,y.get)(l,"rowData.onlineConsultation",!1),offlineConsultation:(0,y.get)(l,"rowData.offlineConsultation",!1),phoneConsultation:(0,y.get)(l,"rowData.phoneConsultation",!1),currencyId:(0,y.get)(l,"rowData.currencyId",""),amount:(0,y.get)(l,"rowData.amount",""),timeUnit:(0,y.get)(l,"rowData.timeUnit",30),dietPlan:(0,y.get)(l,"rowData.dietPlan",!0),details:(0,y.get)(l,"rowData.details","")},validationSchema:_,onSubmit:function(e){console.log("Values===",e);var n=e.onlineConsultation||e.phoneConsultation||e.offlineConsultation;g?n?j(e):P.Am.error("Required select on service type",{autoClose:!1}):P.Am.error("Please Setup Your Profile First Then Create Service Plan",{autoClose:!1})},children:function(e){return(0,$.jsxs)("form",{onSubmit:e.handleSubmit,className:"d-flex flex-column overflow-auto",children:[(0,$.jsx)(S.Z,{dividers:!0,children:(0,$.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,$.jsx)(a.ZP,{item:!0,xs:12,container:!0,children:(0,$.jsx)(a.ZP,{item:!0,xs:12,sm:9.9,md:7.9,children:(0,$.jsx)(W.Z,{label:(0,J.Z)("consultant_service_plan_name"),variant:"outlined",name:"planName",value:e.values.planName,onChange:e.handleChange,onBlur:e.handleBlur,error:!(!e.errors.planName||!e.touched.planName),helperText:e.errors.planName&&e.touched.planName?e.errors.planName:null})})}),(0,$.jsxs)(a.ZP,{item:!0,xs:12,container:!0,spacing:2,children:[(0,$.jsx)(a.ZP,{item:!0,md:3,sm:4,xs:12,children:(0,$.jsx)(W.Z,{label:(0,J.Z)("consultant_number_of_consultation"),variant:"outlined",name:"numberOfConsultant",value:e.values.numberOfConsultant,onChange:e.handleChange,onBlur:e.handleBlur,error:!(!e.errors.numberOfConsultant||!e.touched.numberOfConsultant),helperText:e.errors.numberOfConsultant&&e.touched.numberOfConsultant?e.errors.numberOfConsultant:null})}),console.log(e.values.numberOfConsultant,"233"),(0,$.jsx)(a.ZP,{item:!0,md:4,sm:6,xs:12,children:(0,$.jsxs)(A.Z,{fullWidth:!0,children:[(0,$.jsx)(V.Z,{id:"demo-simple-select-label",children:(0,J.Z)("consultant_consultant_sessions")}),(0,$.jsx)(z.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"sessionName",value:e.values.sessionName,label:(0,J.Z)("consultant_consultant_sessions"),onChange:e.handleChange,disabled:1===parseInt(e.values.numberOfConsultant,10),children:(0,y.map)(ee,(function(e,n){return(0,$.jsx)(U.Z,{value:e.label,children:e.label},n)}))}),e.errors.sessionName&&e.touched.sessionName?(0,$.jsx)(L.Z,{error:!0,children:e.errors.sessionName}):null]})}),(0,$.jsx)(a.ZP,{item:!0,xs:12,md:5,children:(0,$.jsxs)(A.Z,{component:"fieldset",variant:"standard",children:[(0,$.jsx)(M.Z,{children:(0,J.Z)("consultant_consultation_type")}),(0,$.jsxs)(F.Z,{row:!0,children:[(0,$.jsx)(E.Z,{value:"online",control:(0,$.jsx)(R.Z,{name:"onlineConsultation",checked:e.values.onlineConsultation,onChange:e.handleChange}),disabled:!h,label:(0,J.Z)("common_online")}),(0,$.jsx)(E.Z,{control:(0,$.jsx)(R.Z,{name:"offlineConsultation",checked:e.values.offlineConsultation,onChange:e.handleChange}),disabled:!x,label:(0,J.Z)("common_offline")}),(0,$.jsx)(E.Z,{control:(0,$.jsx)(R.Z,{name:"phoneConsultation",checked:e.values.phoneConsultation,onChange:e.handleChange}),disabled:!p,label:(0,J.Z)("common_phone")})]}),e.errors.onlineConsultation&&e.touched.onlineConsultation&&(0,$.jsx)(L.Z,{error:!0,children:"Type is Required"})]})})]}),(0,$.jsx)(a.ZP,{item:!0,sm:4,md:3,xs:12,children:(0,$.jsx)(k.Z,{getOptionLabel:function(e){return(0,y.isEmpty)(e)?"":e.currency},options:d,name:"currencyId",value:e.values.currencyId,isOptionEqualToValue:function(e,n){if(""===n||e._id===n._id)return!0},onChange:function(n,t){e.setFieldValue("currencyId",t)},disablePortal:!0,autoHighlight:!0,disableClearable:!0,noOptionsText:(0,J.Z)("common_no_data"),popupIcon:(0,$.jsx)(O.Z,{}),renderOption:function(e,n){return(0,$.jsxs)(o.Z,(0,i.Z)((0,i.Z)({component:"li",sx:{"& > img":{mr:1,flexShrink:0}}},e),{},{children:[(0,$.jsx)(o.Z,{component:"span",mr:1,children:n.currency}),n.currencySymbol]}),n._id)},renderInput:function(n){return(0,$.jsx)(W.Z,(0,i.Z)((0,i.Z)({},n),{},{label:(0,J.Z)("consultant_currency_type"),name:"currencyId",error:!(!e.errors.currencyId||!e.touched.currencyId),helperText:e.errors.currencyId&&e.touched.currencyId?e.errors.currencyId:null}))}})}),(0,$.jsx)(a.ZP,{item:!0,sm:6,md:5,xs:12,children:(0,$.jsx)(W.Z,{label:(0,J.Z)("consultant_amount"),variant:"outlined",name:"amount",value:e.values.amount,onChange:e.handleChange,onBlur:e.handleBlur,inputProps:{type:"number"},error:!(!e.errors.amount||!e.touched.amount),helperText:e.errors.amount&&e.touched.amount?e.errors.amount:null})}),(0,$.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,$.jsxs)(A.Z,{fullWidth:!0,children:[(0,$.jsx)(M.Z,{htmlFor:"weight",className:"mb-1",children:(0,J.Z)("consultant_time_duration")}),(0,$.jsxs)(B.Z,{name:"timeUnit",value:e.values.timeUnit,onChange:function(n,t){e.setFieldValue("timeUnit",t)},row:!0,sx:{marginLeft:"10px",marginTop:"10px"},children:[(0,$.jsx)(E.Z,{value:30,control:(0,$.jsx)(Q.Z,{}),label:"30 "+(0,J.Z)("common_time_length_minute")}),(0,$.jsx)(E.Z,{value:45,control:(0,$.jsx)(Q.Z,{}),label:"45 "+(0,J.Z)("common_time_length_minute")}),(0,$.jsx)(E.Z,{value:60,control:(0,$.jsx)(Q.Z,{}),label:"1 "+(0,J.Z)("common_time_length_hour")})]})]})}),(0,$.jsxs)(a.ZP,{item:!0,xs:12,sm:6,children:[(0,$.jsx)(A.Z,{fullWidth:!0,children:(0,$.jsx)(M.Z,{htmlFor:"weight",className:"mb-1",children:(0,J.Z)("common_diet_plan")})}),(0,$.jsx)(A.Z,{fullWidth:!0,children:(0,$.jsxs)(B.Z,{name:"dietPlan",value:e.values.dietPlan,onChange:function(n,t){e.setFieldValue("dietPlan",t)},row:!0,sx:{marginLeft:"10px",marginTop:"10px"},children:[(0,$.jsx)(E.Z,{value:!0,control:(0,$.jsx)(Q.Z,{}),label:(0,J.Z)("common_type_yes")}),(0,$.jsx)(E.Z,{value:!1,control:(0,$.jsx)(Q.Z,{}),label:(0,J.Z)("common_type_no")})]})})]}),(0,$.jsx)(a.ZP,{item:!0,xs:12,children:(0,$.jsx)(K.Z,{name:"details",value:e.values.details,setFieldValue:e.setFieldValue,error:!(!e.errors.details||!e.touched.details),helperText:e.errors.details&&e.touched.details?e.errors.details:null})})]})}),(0,$.jsx)(q.Z,{children:(0,$.jsx)(Z.Z,{variant:"contained",type:"submit",children:(0,J.Z)("common_add")})})]})}})]})})})},te=t(81918),re=t(72426),ae=t.n(re),oe=function(e){var n,t,r,l,i=e.open,s=e.onClose,c=e.dialogData;1==(null===c||void 0===c||null===(n=c.rowData)||void 0===n?void 0:n.phoneConsultation)?l="Phone Consultation":1==(null===c||void 0===c||null===(t=c.rowData)||void 0===t?void 0:t.onlineConsultation)?l="Online Consultation":1==(null===c||void 0===c||null===(r=c.rowData)||void 0===r?void 0:r.offlineConsultation)&&(l="Offline Consultation");var u=(0,y.get)(c,"rowData.details",""),d=null===u||void 0===u?void 0:u.replace(/<[^>]+>/g,"");return(0,$.jsx)($.Fragment,{children:(0,$.jsxs)(X.ZP,{anchor:"right",open:i,onClose:s,className:"plan-details-design",children:[(0,$.jsx)("div",{children:(0,$.jsx)(f.Z,{variant:"h6",children:"Plan Details"})}),(0,$.jsx)("div",{className:"plan_details drawer-content",children:(0,$.jsx)(a.ZP,{container:!0,spacing:2,children:(0,$.jsx)(a.ZP,{item:!0,xs:12,sm:12,children:(0,$.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"subtitle1",color:"text.primary",children:"Plan Name"})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"body1",children:(0,y.get)(c,"rowData.planName","")})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"subtitle1",color:"text.primary",children:"consultation sessions"})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(o.Z,{children:(0,$.jsx)(te.Z,{label:(0,y.get)(c,"rowData.sessionName",""),sx:{backgroundColor:"secondary.lighter",color:"secondary.dark"}})})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"subtitle1",color:"text.primary",children:"Duration"})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsxs)(f.Z,{variant:"body1",children:[(0,y.get)(c,"rowData.timeUnit","")," Min"]})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"subtitle1",color:"text.primary",children:"Post Consultation plan (included)"})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(te.Z,{label:(0,y.get)(c,"rowData.dietPlan",!1)?"Yes":"No",sx:{border:"1px solid",backgroundColor:"transparent",borderColor:"secondary.main",color:"secondary.main"}})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"subtitle1",color:"text.primary",children:"Service Charges"})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsxs)(f.Z,{variant:"body1",children:[(0,y.get)(c,"rowData.amount","")," ",(0,y.get)(c,"rowData.currencyId.currencySymbol","")]})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"subtitle1",color:"text.primary",children:"Number of Consultant"})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"body1",children:(0,y.get)(c,"rowData.numberOfConsultant","")})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"subtitle1",color:"text.primary",children:"Details"})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"body1",children:d&&d})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"subtitle1",color:"text.primary",children:"Consultation Type"})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"body1",children:l&&l})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"subtitle1",color:"text.primary",children:"Time Unit"})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"body1",children:(0,y.get)(c,"rowData.timeUnit","")})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"subtitle1",color:"text.primary",children:"Created Date"})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"subtitle1",color:"text.primary",children:(0,y.isEmpty)((0,y.get)(c,"rowData.createDate",""))?"Date Not Found":ae()(c.rowData.createDate).format("LL")})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"subtitle1",color:"text.primary",children:"Last Date"})}),(0,$.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,$.jsx)(f.Z,{variant:"subtitle1",color:"text.primary",children:(0,y.isEmpty)((0,y.get)(c,"rowData.updateDate",""))?"Not Updated":ae()(c.rowData.updateDate).format("LL")})})]})})})})]})})};function le(){var e=(0,r.useState)(!1),n=(0,u.Z)(e,2),t=n[0],a=n[1],l=(0,r.useState)(!1),O=(0,u.Z)(l,2),k=O[0],R=O[1],q=(0,r.useState)(""),S=(0,u.Z)(q,2),A=S[0],E=S[1],F=(0,r.useState)([]),L=(0,u.Z)(F,2),M=L[0],V=L[1],U=(0,b.I0)(),B=(0,b.v9)((function(e){return e.servicePlan.details})),z=(0,b.v9)((function(e){return e.servicePlan.serviceTypes})),W=(0,b.v9)((function(e){return e.servicePlan.loading})),H=(0,C.s0)(),G=(0,r.useCallback)((function(){a(!0)}),[]),Y=(0,r.useCallback)((function(){a(!1)}),[]),K=(0,r.useCallback)((function(){R(!0)}),[]),Q=(0,r.useCallback)((function(){R(!1)}),[]),X=(0,y.get)(z,"serviceTypeOnline",!1),ee=(0,y.get)(z,"serviceTypeOffline",!1),te=(0,y.get)(z,"serviceTypePhone",!1),re=(0,r.useCallback)((function(e){U((0,w.KU)(e)).unwrap().then((function(e){e.status&&(U((0,w.t4)()),P.Am.success(e.message))})).catch((function(e){console.log(" handleAddServicePlan err",e)}))}),[U]),ae=(0,r.useCallback)(function(){var e=(0,c.Z)((0,s.Z)().mark((function e(n,t){var r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(t),r={_id:t,status:n.target.checked},e.next=4,U((0,w.mW)(r)).unwrap().then((function(e){e.status&&(U((0,w.t4)()),P.Am.success(e.message))})).catch((function(e){console.log("Service plan update error=======>",e)}));case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),[U]);(0,r.useEffect)((function(){U((0,w.t4)()),U((0,w.cK)())}),[U]);var le=(0,r.useMemo)((function(){return[{field:"planName",headerName:(0,J.Z)("consultant_service_plan_name"),width:160},{field:"numberOfConsultant",headerName:(0,J.Z)("consultant_number_of_consultation"),width:160},{field:"sessionName",headerName:(0,J.Z)("consultant_consultant_sessions"),width:160,renderCell:function(e){return(0,$.jsx)(o.Z,{children:(0,$.jsx)(N.Z,{color:"secondary",children:(0,y.get)(e,"row.sessionName","")})})}},{field:"onlineConsultation,offlineConsultation,phoneConsultation",headerName:(0,J.Z)("consultant_currency_type"),width:160,renderCell:function(e){return(0,$.jsxs)(f.Z,{variant:"body2",sx:{display:"flex",alignItems:"center"},children:[(0,y.get)(e,"row.currencyId.currency",""),(0,$.jsx)(f.Z,{variant:"body1",component:"span",ml:.5,children:(0,y.get)(e,"row.currencyId.currencySymbol","")})]})}},{field:"timeUnit",headerName:(0,J.Z)("consultant_time_duration"),width:160,renderCell:function(e){return(0,$.jsxs)(f.Z,{variant:"subtitle2",children:[(0,y.get)(e,"row.timeUnit","")," Min"]})}},{field:"dietPlan",headerName:(0,J.Z)("common_diet_plan"),width:160,renderCell:function(e){return(0,$.jsx)(N.Z,{color:"secondary",variant:"outlined",children:(0,y.get)(e,"row.dietPlan",!1)?"Yes":"No"})}},{field:"amount,currencyId",headerName:(0,J.Z)("common_service_charges"),width:160,renderCell:function(e){return(0,$.jsxs)(f.Z,{variant:"body2",sx:{display:"flex",alignItems:"center"},children:[(0,y.get)(e,"row.amount",""),(0,$.jsx)(f.Z,{variant:"body1",component:"span",ml:.5,children:(0,y.get)(e,"row.currencyId.currencySymbol","")})]})}},{field:"view",headerName:(0,J.Z)("common_view"),headerAlign:"center",width:70,renderCell:function(e){return(0,$.jsx)(g.Z,{onClick:function(){V((0,i.Z)((0,i.Z)({},M),{},{rowData:e.row,formType:"show"})),K()},color:"primary",size:"large",children:(0,$.jsx)(x.Z,{})})}},{field:"Actions",headerName:(0,J.Z)("common_actions"),headerAlign:"center",width:160,renderCell:function(e){return(0,$.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,$.jsx)(g.Z,{sx:{color:"success.dark"},onClick:function(){V((0,i.Z)((0,i.Z)({},M),{},{rowData:e.row,formType:"update"})),G()},children:(0,$.jsx)(h.Z,{})}),(0,$.jsx)(v.Z,{checked:(0,y.get)(e,"row.status",!0),onChange:function(n){return ae(n,e.row._id)},disabled:A===e.row._id&&W,inputProps:{"aria-label":"plan-status",role:"switch"}}),(0,$.jsx)(g.Z,{color:"error",onClick:function(){return re(e.row._id)},children:(0,$.jsx)(m.Z,{})})]})}}]}),[M,re,G,ae,K,W,A]);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(j.Z,{variant:"outlined",className:"h-100 service-plan-design",children:[(0,$.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",marginTop:"20px",marginRight:"20px",marginBottom:"0px"},children:X||ee||te?(0,$.jsx)(Z.Z,{variant:"contained",onClick:function(){V((0,i.Z)((0,i.Z)({},M),{},{rowData:[],formType:"create"})),G()},children:(0,J.Z)("consultant_add_service_plan")}):(0,$.jsx)(Z.Z,{endIcon:(0,$.jsx)(d.Z,{}),onClick:function(){H("/dashboard/appointment/service-type")},children:(0,J.Z)("consultant_setup")})}),(0,$.jsx)(p.Z,{children:(0,$.jsx)(D.Z,{rows:(0,y.isEmpty)(B)?[]:B,columns:le,getRowId:function(e){return e._id},loading:W,components:{Toolbar:function(){return(0,$.jsx)(I.Z,{align:"right",divider:!0,children:X||ee||te?null:(0,$.jsx)(Z.Z,{endIcon:(0,$.jsx)(d.Z,{}),onClick:function(){H("/dashboard/appointment/service-type")},children:(0,J.Z)("consultant_setup")})})},NoRowsOverlay:T.Z,LoadingOverlay:_.Z},className:"min-vh-100"})})]}),(0,$.jsx)(ne,{open:t,onClose:Y,dialogData:M}),(0,$.jsx)(oe,{open:k,onClose:Q,dialogData:M})]})}var ie=t(36314),se=t(93704),ce=t(63466),ue=t(61419),de=t(32416),me=function(e){var n=e.open,t=e.onClose,r=e.type,o=(0,b.I0)(),l=(0,b.v9)((function(e){return e.servicePlan.refundPolicy})),s=(0,(0,de.Z)().GetLanguageList)(),c=G.Ry().shape({content:G.Z_().required((0,J.Z)("consultant_error_terms_and_policy_required")),language:G.Ry().shape().required((0,J.Z)("consultant_error_languages_required")).nullable(),refundMethod:G.Z_().required((0,J.Z)("common_error_required")),percentage:G.Rx().when("refundMethod",{is:function(e){return"PRO_RATE_CANCEL_CHARGE"===e},then:G.Rx().min(0,(0,J.Z)("consultant_error_minimum_value_0")).max(100,(0,J.Z)("consultant_error_maximum_value_100")).positive((0,J.Z)("consultant_error_enter_positive_number")).required((0,J.Z)("consultant_error_percentage_required")),otherwise:G.Rx().notRequired()})});return console.log(l,"refundPolicy"),(0,$.jsx)($.Fragment,{children:(0,$.jsx)(X.ZP,{anchor:"right",open:n,onClose:t,className:"terms-details-design",children:(0,$.jsx)(H.J9,{initialValues:{content:(0,y.get)(l,"content",""),refundMethod:(0,y.get)(l,"refundMethod","PRO_RATE"),percentage:(0,y.get)(l,"percentage",0),language:(0,y.get)(l,"language","")},validationSchema:c,onSubmit:function(e){console.log("Values===",e),function(e){var n,a,s;console.log(null===e||void 0===e||null===(n=e.language)||void 0===n?void 0:n._id,"63");var c="edit"===r?(0,i.Z)((0,i.Z)({},e),{},{_id:l._id,language:null===e||void 0===e||null===(a=e.language)||void 0===a?void 0:a._id}):(0,i.Z)((0,i.Z)({},e),{},{language:null===e||void 0===e||null===(s=e.language)||void 0===s?void 0:s._id});o((0,w.dt)(c)).unwrap().then((function(e){(0,y.get)(e,"status",!1)?(P.Am.success(e.message),o((0,w.dl)()),t()):P.Am.error(e.message)})).catch((function(e){console.log(e)}))}(e)},children:function(e){return(0,$.jsxs)("form",{onSubmit:e.handleSubmit,className:"d-flex flex-column overflow-auto",children:[(0,$.jsx)(S.Z,{dividers:!0,children:(0,$.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,$.jsxs)(a.ZP,{item:!0,xs:12,children:[(0,$.jsx)(f.Z,{variant:"h5",className:"mb-2",children:(0,J.Z)("consultant_terms_and_policy")}),(0,$.jsx)(K.Z,{name:"content",value:e.values.content,setFieldValue:e.setFieldValue,error:!(!e.errors.content||!e.touched.content),helperText:e.errors.content&&e.touched.content?e.errors.content:null})]}),(0,$.jsx)(a.ZP,{item:!0,xs:12,children:(0,$.jsxs)(A.Z,{fullWidth:!0,children:[(0,$.jsx)(M.Z,{htmlFor:"language",className:"mb-2",children:(0,J.Z)("common_language")}),(0,$.jsx)(k.Z,{getOptionLabel:function(e){var n;return null!==(n=e.title)&&void 0!==n?n:""},options:s,name:"language",value:"string"===typeof e.values.language?s.find((function(n){return n._id===e.values.language})):e.values.language,isOptionEqualToValue:function(e,n){if(""===n||e._id===n._id)return!0},onChange:function(n,t){e.setFieldValue("language",t)},onBlur:e.handleBlur,disablePortal:!0,autoHighlight:!0,disableClearable:!0,noOptionsText:(0,J.Z)("common_no_data"),popupIcon:(0,$.jsx)(O.Z,{}),renderInput:function(n){return(0,$.jsx)(W.Z,(0,i.Z)((0,i.Z)({},n),{},{placeholder:(0,J.Z)("consultant_select_language"),name:"language",error:!(!e.errors.language||!e.touched.language),helperText:e.errors.language&&e.touched.language?e.errors.language:null}))}})]})}),(0,$.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,$.jsxs)(A.Z,{fullWidth:!0,children:[(0,$.jsx)(M.Z,{className:"mb-1",children:(0,J.Z)("consultant_refund_method")}),(0,$.jsxs)(B.Z,{name:"refundMethod",value:e.values.refundMethod,onChange:function(n,t){e.setFieldValue("refundMethod",t),e.setFieldValue("percentage",0)},row:!0,children:[(0,$.jsx)(E.Z,{value:"PRO_RATE",control:(0,$.jsx)(ue.Z,{}),label:(0,J.Z)("consultant_only_pro_rate")}),(0,$.jsx)(E.Z,{value:"PRO_RATE_CANCEL_CHARGE",control:(0,$.jsx)(ue.Z,{}),label:(0,J.Z)("consultant_pro_rate_and_cancellation_charges")})]})]})}),"PRO_RATE_CANCEL_CHARGE"===e.values.refundMethod&&(0,$.jsxs)(a.ZP,{item:!0,md:4,sm:6,xs:12,children:[(0,$.jsx)(f.Z,{variant:"body1",className:"mb-2",children:(0,J.Z)("consultant_enter_percentage")}),(0,$.jsx)(W.Z,{placeholder:"percentage",variant:"outlined",name:"percentage",value:e.values.percentage,onChange:e.handleChange,onBlur:e.handleBlur,inputProps:{type:"number"},InputProps:{endAdornment:(0,$.jsx)(ce.Z,{position:"end",children:(0,$.jsx)(se.Z,{})})},error:!(!e.errors.percentage||!e.touched.percentage),helperText:e.errors.percentage&&e.touched.percentage?e.errors.percentage:null})]})]})}),(0,$.jsx)(q.Z,{children:(0,$.jsx)(Z.Z,{variant:"contained",type:"submit",children:(0,J.Z)("common_btn_submit")})})]})}})})})},he=function(){var e=(0,r.useState)(!1),n=(0,u.Z)(e,2),t=n[0],a=n[1],o=(0,b.I0)(),l=(0,b.v9)((function(e){return e.servicePlan.refundPolicyLoading})),i=(0,b.v9)((function(e){return e.servicePlan.refundPolicy}));return(0,r.useEffect)((function(){o((0,w.dl)())}),[o]),(0,$.jsx)($.Fragment,{children:(0,$.jsx)(j.Z,{variant:"outlined",className:"py-2 px-3",children:l?(0,$.jsx)(_.Z,{}):(0,$.jsxs)(ie.Z,{direction:{xs:"column",sm:"row"},spacing:1,alignItems:"center",justifyContent:"space-between",children:[(0,$.jsx)(f.Z,{variant:"h6",children:(0,J.Z)("consultant_setup_terms_and_policy")}),(0,$.jsx)(Z.Z,{variant:"outlined",onClick:function(){a(!0)},children:(0,y.isEmpty)(i)?(0,J.Z)("consultant_setup"):"Edit"}),(0,$.jsx)(me,{open:t,onClose:function(){a(!1)},type:(0,y.isEmpty)(i)?"add":"edit"})]})})})},xe=function(){return(0,$.jsx)($.Fragment,{children:(0,$.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,$.jsx)(a.ZP,{item:!0,xs:12,children:(0,$.jsx)(he,{})}),(0,$.jsx)(a.ZP,{item:!0,xs:12,children:(0,$.jsx)(le,{})})]})})},Ze=t(12665),pe=function(){return(0,$.jsx)($.Fragment,{children:(0,$.jsx)(Ze.Z,{title:"Service Plan | InspireMind",children:(0,$.jsx)(o.Z,{component:"section",className:"w-100",children:(0,$.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,$.jsx)(a.ZP,{item:!0,xs:12,children:(0,$.jsx)(l.Z,{title:"consultant_service_plan",variant:"outlined",elevation:0})}),(0,$.jsx)(a.ZP,{item:!0,xs:12,children:(0,$.jsx)(o.Z,{children:(0,$.jsx)(xe,{})})})]})})})})}},2919:function(e,n,t){var r=t(64836);n.Z=void 0;var a=r(t(45649)),o=t(80184),l=(0,a.default)((0,o.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt");n.Z=l},93704:function(e,n,t){var r=t(64836);n.Z=void 0;var a=r(t(45649)),o=t(80184),l=(0,a.default)((0,o.jsx)("path",{d:"M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4 4 5.57 4 7.5 5.57 11 7.5 11zm0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6zM4.0025 18.5832 18.59 3.9955l1.4142 1.4143L5.4167 19.9974zM16.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"Percent");n.Z=l},3579:function(e,n,t){var r=t(64836);n.Z=void 0;var a=r(t(45649)),o=t(80184),l=(0,a.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"RemoveRedEye");n.Z=l}}]);
//# sourceMappingURL=393.2a067d03.chunk.js.map