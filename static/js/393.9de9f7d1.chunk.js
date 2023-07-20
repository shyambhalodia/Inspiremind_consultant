"use strict";(self.webpackChunknutrition_ai_consultant=self.webpackChunknutrition_ai_consultant||[]).push([[393],{57393:function(e,n,r){r.r(n),r.d(n,{default:function(){return _e}});var t=r(72791),a=r(61889),o=r(64554),l=r(40854),i=r(1413),s=r(74165),c=r(15861),u=r(29439),d=r(2919),m=r(27247),h=r(41286),x=r(3579),Z=r(36151),p=r(39504),_=r(13400),g=r(40986),f=r(35527),j=r(36314),v=r(89891),y=r(20890),C=r(763),b=r(81405),P=r(57689),w=r(75985),N=r(61865),D=r(75099),I=r(59662),T=r(70810),k=r(85823),O=r(62328),R=r(5712),q=r(94454),S=r(97123),A=r(39157),E=r(68096),F=r(85523),L=r(79012),M=r(47071),V=r(17133),B=r(30829),U=r(23786),z=r(88970),W=r(54535),H=r(48550),G=r(92506),Y=r(81724),J=r(45823),K=r(95414),Q=r(11882),X=r(84701),$=r(98137),ee=r(73974),ne=r(80184),re=[{label:(0,K.Z)("common_weekly")},{label:(0,K.Z)("common_biweekly")},{label:(0,K.Z)("common_monthly")}],te=function(e){var n=e.open,r=e.onClose,l=e.dialogData,u=(0,b.I0)(),d=(0,b.v9)((function(e){return e.common.currencyList})),m=(0,b.v9)((function(e){return e.servicePlan.serviceTypes})),h=(0,C.get)(m,"serviceTypeOnline",!1),x=(0,C.get)(m,"serviceTypeOffline",!1),p=(0,C.get)(m,"serviceTypePhone",!1),_=h||x||p;(0,t.useEffect)((function(){u((0,J.SM)())}),[u]);var g=Y.Ry().shape({planName:Y.Z_().min(5,(0,K.Z)("consultant_error_service_plan_name_too_short")).max(50,(0,K.Z)("consultant_error_service_plan_name_too_long")).required((0,K.Z)("consultant_error_service_plan_name_required")),numberOfConsultant:Y.Rx().required((0,K.Z)("consultant_error_number_of_consultation_required")),sessionName:Y.Z_().required((0,K.Z)("common_error_consultant_session_required")),timeUnit:Y.Rx().required((0,K.Z)("common_error_time_duration_required")),dietPlan:Y.O7().required((0,K.Z)("common_error_diet_plan_required")),currencyId:Y.Ry().required((0,K.Z)("consultant_error_currency_type_required")),amount:Y.Rx().required((0,K.Z)("consultant_error_amount_required")),details:Y.Z_().required((0,K.Z)("consultant_error_description_required"))}),f=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(n){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.currencyId=(0,C.get)(n,"currencyId._id",""),"update"===(0,C.get)(l,"formType")&&(n._id=(0,C.get)(l,"rowData._id")),e.next=4,u((0,N.kI)(n)).unwrap().then((function(e){e.status&&(u((0,N.t4)()),r(),w.Am.success(e.message))})).catch((function(e){console.log(" handleAddServicePlan err",e)}));case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,ne.jsx)(ne.Fragment,{children:(0,ne.jsx)(ee.ZP,{anchor:"right",variant:"temporary",open:n,onClose:r,children:(0,ne.jsxs)("div",{className:"service-plan-add-container",children:[(0,ne.jsxs)("div",{className:"service-plan-add-header",children:[(0,ne.jsx)("h2",{children:(0,K.Z)("consultant_add_service_plan")}),(0,ne.jsx)(Z.Z,{onClick:r,children:(0,ne.jsx)(O.Z,{})})]}),(0,ne.jsx)(G.J9,{initialValues:{planName:(0,C.get)(l,"rowData.planName",""),numberOfConsultant:(0,C.get)(l,"rowData.numberOfConsultant",""),sessionName:(0,C.get)(l,"rowData.sessionName",""),onlineConsultation:(0,C.get)(l,"rowData.onlineConsultation",!1),offlineConsultation:(0,C.get)(l,"rowData.offlineConsultation",!1),phoneConsultation:(0,C.get)(l,"rowData.phoneConsultation",!1),currencyId:(0,C.get)(l,"rowData.currencyId",""),amount:(0,C.get)(l,"rowData.amount",""),timeUnit:(0,C.get)(l,"rowData.timeUnit",30),dietPlan:(0,C.get)(l,"rowData.dietPlan",!0),details:(0,C.get)(l,"rowData.details","")},validationSchema:g,onSubmit:function(e){console.log("Values===",e);var n=e.onlineConsultation||e.phoneConsultation||e.offlineConsultation;_?n?f(e):w.Am.error("Required select on service type",{autoClose:!1}):w.Am.error("Please Setup Your Profile First Then Create Service Plan",{autoClose:!1})},children:function(e){return(0,ne.jsxs)("form",{onSubmit:e.handleSubmit,className:"d-flex flex-column overflow-auto",children:[(0,ne.jsx)(A.Z,{dividers:!0,children:(0,ne.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,ne.jsx)(a.ZP,{item:!0,xs:12,container:!0,children:(0,ne.jsx)(a.ZP,{item:!0,xs:12,sm:9.9,md:7.9,children:(0,ne.jsx)(H.Z,{label:(0,K.Z)("consultant_service_plan_name"),variant:"outlined",name:"planName",value:e.values.planName,onChange:e.handleChange,onBlur:e.handleBlur,error:!(!e.errors.planName||!e.touched.planName),helperText:e.errors.planName&&e.touched.planName?e.errors.planName:null})})}),(0,ne.jsxs)(a.ZP,{item:!0,xs:12,container:!0,spacing:2,children:[(0,ne.jsx)(a.ZP,{item:!0,md:3,sm:4,xs:12,children:(0,ne.jsx)(H.Z,{label:(0,K.Z)("consultant_number_of_consultation"),variant:"outlined",name:"numberOfConsultant",value:e.values.numberOfConsultant,onChange:e.handleChange,onBlur:e.handleBlur,error:!(!e.errors.numberOfConsultant||!e.touched.numberOfConsultant),helperText:e.errors.numberOfConsultant&&e.touched.numberOfConsultant?e.errors.numberOfConsultant:null})}),(0,ne.jsx)(a.ZP,{item:!0,md:4,sm:6,xs:12,children:(0,ne.jsxs)(E.Z,{fullWidth:!0,children:[(0,ne.jsx)(B.Z,{id:"demo-simple-select-label",children:(0,K.Z)("consultant_consultant_sessions")}),(0,ne.jsx)(W.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"sessionName",value:e.values.sessionName,label:(0,K.Z)("consultant_consultant_sessions"),onChange:e.handleChange,children:(0,C.map)(re,(function(e,n){return(0,ne.jsx)(U.Z,{value:e.label,children:e.label},n)}))}),e.errors.sessionName&&e.touched.sessionName?(0,ne.jsx)(M.Z,{error:!0,children:e.errors.sessionName}):null]})}),(0,ne.jsx)(a.ZP,{item:!0,xs:12,md:5,children:(0,ne.jsxs)(E.Z,{component:"fieldset",variant:"standard",children:[(0,ne.jsx)(V.Z,{children:(0,K.Z)("consultant_consultation_type")}),(0,ne.jsxs)(L.Z,{row:!0,children:[(0,ne.jsx)(F.Z,{value:"online",control:(0,ne.jsx)(q.Z,{name:"onlineConsultation",checked:e.values.onlineConsultation,onChange:e.handleChange}),disabled:!h,label:(0,K.Z)("common_online")}),(0,ne.jsx)(F.Z,{control:(0,ne.jsx)(q.Z,{name:"offlineConsultation",checked:e.values.offlineConsultation,onChange:e.handleChange}),disabled:!x,label:(0,K.Z)("common_offline")}),(0,ne.jsx)(F.Z,{control:(0,ne.jsx)(q.Z,{name:"phoneConsultation",checked:e.values.phoneConsultation,onChange:e.handleChange}),disabled:!p,label:(0,K.Z)("common_phone")})]}),e.errors.onlineConsultation&&e.touched.onlineConsultation&&(0,ne.jsx)(M.Z,{error:!0,children:"Type is Required"})]})})]}),(0,ne.jsx)(a.ZP,{item:!0,sm:4,md:3,xs:12,children:(0,ne.jsx)(R.Z,{getOptionLabel:function(e){return(0,C.isEmpty)(e)?"":e.currency},options:d,name:"currencyId",value:e.values.currencyId,isOptionEqualToValue:function(e,n){if(""===n||e._id===n._id)return!0},onChange:function(n,r){e.setFieldValue("currencyId",r)},disablePortal:!0,autoHighlight:!0,disableClearable:!0,noOptionsText:(0,K.Z)("common_no_data"),popupIcon:(0,ne.jsx)(O.Z,{}),renderOption:function(e,n){return(0,ne.jsxs)(o.Z,(0,i.Z)((0,i.Z)({component:"li",sx:{"& > img":{mr:1,flexShrink:0}}},e),{},{children:[(0,ne.jsx)(o.Z,{component:"span",mr:1,children:n.currency}),n.currencySymbol]}),n._id)},renderInput:function(n){return(0,ne.jsx)(H.Z,(0,i.Z)((0,i.Z)({},n),{},{label:(0,K.Z)("consultant_currency_type"),name:"currencyId",error:!(!e.errors.currencyId||!e.touched.currencyId),helperText:e.errors.currencyId&&e.touched.currencyId?e.errors.currencyId:null}))}})}),(0,ne.jsx)(a.ZP,{item:!0,sm:6,md:5,xs:12,children:(0,ne.jsx)(H.Z,{label:(0,K.Z)("consultant_amount"),variant:"outlined",name:"amount",value:e.values.amount,onChange:e.handleChange,onBlur:e.handleBlur,inputProps:{type:"number"},error:!(!e.errors.amount||!e.touched.amount),helperText:e.errors.amount&&e.touched.amount?e.errors.amount:null})}),(0,ne.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,ne.jsxs)(E.Z,{fullWidth:!0,children:[(0,ne.jsx)(V.Z,{htmlFor:"weight",className:"mb-1",children:(0,K.Z)("consultant_time_duration")}),(0,ne.jsxs)(z.Z,{name:"timeUnit",value:e.values.timeUnit,onChange:function(n,r){e.setFieldValue("timeUnit",r)},row:!0,sx:{marginLeft:"10px",marginTop:"10px"},children:[(0,ne.jsx)(F.Z,{value:30,control:(0,ne.jsx)($.Z,{}),label:"30 "+(0,K.Z)("common_time_length_minute")}),(0,ne.jsx)(F.Z,{value:45,control:(0,ne.jsx)($.Z,{}),label:"45 "+(0,K.Z)("common_time_length_minute")}),(0,ne.jsx)(F.Z,{value:60,control:(0,ne.jsx)($.Z,{}),label:"1 "+(0,K.Z)("common_time_length_hour")})]})]})}),(0,ne.jsxs)(a.ZP,{item:!0,xs:12,sm:6,children:[(0,ne.jsx)(E.Z,{fullWidth:!0,children:(0,ne.jsx)(V.Z,{htmlFor:"weight",className:"mb-1",children:(0,K.Z)("common_diet_plan")})}),(0,ne.jsx)(E.Z,{fullWidth:!0,children:(0,ne.jsxs)(z.Z,{name:"dietPlan",value:e.values.dietPlan,onChange:function(n,r){e.setFieldValue("dietPlan",r)},row:!0,sx:{marginLeft:"10px",marginTop:"10px"},children:[(0,ne.jsx)(F.Z,{value:!0,control:(0,ne.jsx)($.Z,{}),label:(0,K.Z)("common_type_yes")}),(0,ne.jsx)(F.Z,{value:!1,control:(0,ne.jsx)($.Z,{}),label:(0,K.Z)("common_type_no")})]})})]}),(0,ne.jsx)(a.ZP,{item:!0,xs:12,children:(0,ne.jsx)(X.Z,{name:"details",value:e.values.details,setFieldValue:e.setFieldValue,error:!(!e.errors.details||!e.touched.details),helperText:e.errors.details&&e.touched.details?e.errors.details:null})})]})}),(0,ne.jsx)(S.Z,{children:(0,ne.jsx)(Z.Z,{variant:"contained",type:"submit",children:(0,K.Z)("common_add")})})]})}})]})})})},ae=r(81918),oe=r(72426),le=r.n(oe),ie=function(e){var n=e.open,r=e.onClose,t=e.dialogData;return(0,ne.jsx)(ne.Fragment,{children:(0,ne.jsxs)(ee.ZP,{anchor:"right",open:n,onClose:r,children:[(0,ne.jsx)("div",{children:(0,ne.jsx)(y.Z,{variant:"h6",children:"Plan Details"})}),(0,ne.jsx)("div",{className:"plan_details drawer-content",children:(0,ne.jsx)(a.ZP,{container:!0,spacing:2,children:(0,ne.jsx)(a.ZP,{item:!0,xs:12,sm:12,children:(0,ne.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,ne.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ne.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"Plan Name"})}),(0,ne.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ne.jsx)(y.Z,{variant:"body1",children:(0,C.get)(t,"rowData.planName","")})}),(0,ne.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ne.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"consultation sessions"})}),(0,ne.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ne.jsx)(o.Z,{children:(0,ne.jsx)(ae.Z,{label:(0,C.get)(t,"rowData.sessionName",""),sx:{backgroundColor:"secondary.lighter",color:"secondary.dark"}})})}),(0,ne.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ne.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"Duration"})}),(0,ne.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ne.jsxs)(y.Z,{variant:"body1",children:[(0,C.get)(t,"rowData.timeUnit","")," Min"]})}),(0,ne.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ne.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"Post Consultation plan (included)"})}),(0,ne.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ne.jsx)(ae.Z,{label:(0,C.get)(t,"rowData.dietPlan",!1)?"Yes":"No",sx:{border:"1px solid",backgroundColor:"transparent",borderColor:"secondary.main",color:"secondary.main"}})}),(0,ne.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ne.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"Service Charges"})}),(0,ne.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ne.jsxs)(y.Z,{variant:"body1",children:[(0,C.get)(t,"rowData.amount","")," ",(0,C.get)(t,"rowData.currencyId.currencySymbol","")]})}),(0,ne.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ne.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"Created Date"})}),(0,ne.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ne.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:(0,C.isEmpty)((0,C.get)(t,"rowData.createDate",""))?"Date Not Found":le()(t.rowData.createDate).format("LL")})}),(0,ne.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ne.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"Last Date"})}),(0,ne.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ne.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:(0,C.isEmpty)((0,C.get)(t,"rowData.updateDate",""))?"Not Updated":le()(t.rowData.updateDate).format("LL")})})]})})})})]})})};function se(){var e=(0,t.useState)(!1),n=(0,u.Z)(e,2),r=n[0],a=n[1],l=(0,t.useState)(!1),O=(0,u.Z)(l,2),R=O[0],q=O[1],S=(0,t.useState)(""),A=(0,u.Z)(S,2),E=A[0],F=A[1],L=(0,t.useState)([]),M=(0,u.Z)(L,2),V=M[0],B=M[1],U=(0,b.I0)(),z=(0,b.v9)((function(e){return e.servicePlan.details})),W=(0,b.v9)((function(e){return e.servicePlan.serviceTypes})),H=(0,b.v9)((function(e){return e.servicePlan.loading})),G=(0,P.s0)(),Y=(0,t.useCallback)((function(){a(!0)}),[]),J=(0,t.useCallback)((function(){a(!1)}),[]),Q=(0,t.useCallback)((function(){q(!0)}),[]),X=(0,t.useCallback)((function(){q(!1)}),[]),$=(0,C.get)(W,"serviceTypeOnline",!1),ee=(0,C.get)(W,"serviceTypeOffline",!1),re=(0,C.get)(W,"serviceTypePhone",!1),ae=(0,t.useCallback)((function(e){U((0,N.KU)(e)).unwrap().then((function(e){e.status&&(U((0,N.t4)()),w.Am.success(e.message))})).catch((function(e){console.log(" handleAddServicePlan err",e)}))}),[U]),oe=(0,t.useCallback)(function(){var e=(0,c.Z)((0,s.Z)().mark((function e(n,r){var t,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(r),t={_id:r,status:n.target.checked},e.next=4,U((0,N.mW)(t)).unwrap().then((function(e){e.status&&(U((0,N.t4)()),w.Am.success(e.message))})).catch((function(e){console.log("Service plan update error=======>",e)}));case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),[U]);(0,t.useEffect)((function(){U((0,N.t4)()),U((0,N.cK)())}),[U]);var le=(0,t.useMemo)((function(){return[{field:"planName",headerName:(0,K.Z)("consultant_service_plan_name"),width:160},{field:"numberOfConsultant",headerName:(0,K.Z)("consultant_number_of_consultation"),width:160},{field:"sessionName",headerName:(0,K.Z)("consultant_consultant_sessions"),width:160,renderCell:function(e){return(0,ne.jsx)(o.Z,{children:(0,ne.jsx)(D.Z,{color:"secondary",children:(0,C.get)(e,"row.sessionName","")})})}},{field:"onlineConsultation,offlineConsultation,phoneConsultation",headerName:(0,K.Z)("consultant_currency_type"),width:160,renderCell:function(e){return(0,ne.jsxs)(j.Z,{direction:"row",spacing:1,children:[(0,C.get)(e,"row.onlineConsultation",!1)&&(0,ne.jsx)(D.Z,{color:"secondary",children:"Online"}),(0,C.get)(e,"row.offlineConsultation",!1)&&(0,ne.jsx)(D.Z,{color:"secondary",children:"Offline"}),(0,C.get)(e,"row.phoneConsultation",!1)&&(0,ne.jsx)(D.Z,{color:"secondary",children:"Phone"})]})}},{field:"timeUnit",headerName:(0,K.Z)("consultant_time_duration"),width:160,renderCell:function(e){return(0,ne.jsxs)(y.Z,{variant:"subtitle2",children:[(0,C.get)(e,"row.timeUnit","")," Min"]})}},{field:"dietPlan",headerName:(0,K.Z)("common_diet_plan"),width:160,renderCell:function(e){return(0,ne.jsx)(D.Z,{color:"secondary",variant:"outlined",children:(0,C.get)(e,"row.dietPlan",!1)?"Yes":"No"})}},{field:"amount,currencyId",headerName:(0,K.Z)("common_service_charges"),width:160,renderCell:function(e){return(0,ne.jsxs)(y.Z,{variant:"body2",sx:{display:"flex",alignItems:"center"},children:[(0,C.get)(e,"row.amount",""),(0,ne.jsx)(y.Z,{variant:"body1",component:"span",ml:.5,children:(0,C.get)(e,"row.currencyId.currencySymbol","")})]})}},{field:"view",headerName:(0,K.Z)("common_view"),headerAlign:"center",width:70,renderCell:function(e){return(0,ne.jsx)(_.Z,{onClick:function(){B((0,i.Z)((0,i.Z)({},V),{},{rowData:e.row,formType:"show"})),Q()},color:"primary",size:"large",children:(0,ne.jsx)(x.Z,{})})}},{field:"Actions",headerName:(0,K.Z)("common_actions"),headerAlign:"center",width:160,renderCell:function(e){return(0,ne.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,ne.jsx)(_.Z,{sx:{color:"success.dark"},onClick:function(){B((0,i.Z)((0,i.Z)({},V),{},{rowData:e.row,formType:"update"})),Y()},children:(0,ne.jsx)(h.Z,{})}),(0,ne.jsx)(v.Z,{checked:(0,C.get)(e,"row.status",!0),onChange:function(n){return oe(n,e.row._id)},disabled:E===e.row._id&&H,inputProps:{"aria-label":"plan-status",role:"switch"}}),(0,ne.jsx)(_.Z,{color:"error",onClick:function(){return ae(e.row._id)},children:(0,ne.jsx)(m.Z,{})})]})}}]}),[V,ae,Y,oe,Q,H,E]);return(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsxs)(f.Z,{variant:"outlined",className:"h-100",children:[(0,ne.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",marginTop:"20px",marginRight:"20px",marginBottom:"0px"},children:$||ee||re?(0,ne.jsx)(Z.Z,{variant:"contained",onClick:function(){B((0,i.Z)((0,i.Z)({},V),{},{rowData:[],formType:"create"})),Y()},children:(0,K.Z)("consultant_add_service_plan")}):(0,ne.jsx)(Z.Z,{endIcon:(0,ne.jsx)(d.Z,{}),onClick:function(){G("/dashboard/appointment/service-type")},children:(0,K.Z)("consultant_setup")})}),(0,ne.jsx)(p.Z,{children:(0,ne.jsx)(I.Z,{rows:(0,C.isEmpty)(z)?[]:z,columns:le,getRowId:function(e){return e._id},loading:H,components:{Toolbar:function(){return(0,ne.jsx)(T.Z,{align:"right",divider:!0,children:$||ee||re?null:(0,ne.jsx)(Z.Z,{endIcon:(0,ne.jsx)(d.Z,{}),onClick:function(){G("/dashboard/appointment/service-type")},children:(0,K.Z)("consultant_setup")})})},NoRowsOverlay:k.Z,LoadingOverlay:g.Z},className:"min-vh-100"})})]}),(0,ne.jsx)(te,{open:r,onClose:J,dialogData:V}),(0,ne.jsx)(ie,{open:R,onClose:X,dialogData:V})]})}var ce=r(93704),ue=r(63466),de=r(61419),me=r(32416),he=function(e){var n=e.open,r=e.onClose,t=e.type,o=(0,b.I0)(),l=(0,b.v9)((function(e){return e.servicePlan.refundPolicy})),s=(0,(0,me.Z)().GetLanguageList)(),c=Y.Ry().shape({content:Y.Z_().required((0,K.Z)("consultant_error_terms_and_policy_required")),language:Y.Ry().shape().required((0,K.Z)("consultant_error_languages_required")).nullable(),refundMethod:Y.Z_().required((0,K.Z)("common_error_required")),percentage:Y.Rx().when("refundMethod",{is:function(e){return"PRO_RATE_CANCEL_CHARGE"===e},then:Y.Rx().min(0,(0,K.Z)("consultant_error_minimum_value_0")).max(100,(0,K.Z)("consultant_error_maximum_value_100")).positive((0,K.Z)("consultant_error_enter_positive_number")).required((0,K.Z)("consultant_error_percentage_required")),otherwise:Y.Rx().notRequired()})});return console.log(l,"refundPolicy"),(0,ne.jsx)(ne.Fragment,{children:(0,ne.jsx)(Q.Z,{dialogTitle:(0,K.Z)("consultant_cancellation_and_refund_policies"),dialogOpen:n,maxWidth:"md",dialogClose:r,children:(0,ne.jsx)(G.J9,{initialValues:{content:(0,C.get)(l,"content",""),refundMethod:(0,C.get)(l,"refundMethod","PRO_RATE"),percentage:(0,C.get)(l,"percentage",0),language:(0,C.get)(l,"language","")},validationSchema:c,onSubmit:function(e){console.log("Values===",e),function(e){var n,a,s;console.log(null===e||void 0===e||null===(n=e.language)||void 0===n?void 0:n._id,"63");var c="edit"===t?(0,i.Z)((0,i.Z)({},e),{},{_id:l._id,language:null===e||void 0===e||null===(a=e.language)||void 0===a?void 0:a._id}):(0,i.Z)((0,i.Z)({},e),{},{language:null===e||void 0===e||null===(s=e.language)||void 0===s?void 0:s._id});o((0,N.dt)(c)).unwrap().then((function(e){(0,C.get)(e,"status",!1)?(w.Am.success(e.message),o((0,N.dl)()),r()):w.Am.error(e.message)})).catch((function(e){console.log(e)}))}(e)},children:function(e){return(0,ne.jsxs)("form",{onSubmit:e.handleSubmit,className:"d-flex flex-column overflow-auto",children:[(0,ne.jsx)(A.Z,{dividers:!0,children:(0,ne.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,ne.jsxs)(a.ZP,{item:!0,xs:12,children:[(0,ne.jsx)(y.Z,{variant:"h5",className:"mb-2",children:(0,K.Z)("consultant_terms_and_policy")}),(0,ne.jsx)(X.Z,{name:"content",value:e.values.content,setFieldValue:e.setFieldValue,error:!(!e.errors.content||!e.touched.content),helperText:e.errors.content&&e.touched.content?e.errors.content:null})]}),(0,ne.jsx)(a.ZP,{item:!0,xs:12,children:(0,ne.jsxs)(E.Z,{fullWidth:!0,children:[(0,ne.jsx)(V.Z,{htmlFor:"language",className:"mb-2",children:(0,K.Z)("common_language")}),(0,ne.jsx)(R.Z,{getOptionLabel:function(e){var n;return null!==(n=e.title)&&void 0!==n?n:""},options:s,name:"language",value:"string"===typeof e.values.language?s.find((function(n){return n._id===e.values.language})):e.values.language,isOptionEqualToValue:function(e,n){if(""===n||e._id===n._id)return!0},onChange:function(n,r){e.setFieldValue("language",r)},onBlur:e.handleBlur,disablePortal:!0,autoHighlight:!0,disableClearable:!0,noOptionsText:(0,K.Z)("common_no_data"),popupIcon:(0,ne.jsx)(O.Z,{}),renderInput:function(n){return(0,ne.jsx)(H.Z,(0,i.Z)((0,i.Z)({},n),{},{placeholder:(0,K.Z)("consultant_select_language"),name:"language",error:!(!e.errors.language||!e.touched.language),helperText:e.errors.language&&e.touched.language?e.errors.language:null}))}})]})}),(0,ne.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,ne.jsxs)(E.Z,{fullWidth:!0,children:[(0,ne.jsx)(V.Z,{className:"mb-1",children:(0,K.Z)("consultant_refund_method")}),(0,ne.jsxs)(z.Z,{name:"refundMethod",value:e.values.refundMethod,onChange:function(n,r){e.setFieldValue("refundMethod",r),e.setFieldValue("percentage",0)},row:!0,children:[(0,ne.jsx)(F.Z,{value:"PRO_RATE",control:(0,ne.jsx)(de.Z,{}),label:(0,K.Z)("consultant_only_pro_rate")}),(0,ne.jsx)(F.Z,{value:"PRO_RATE_CANCEL_CHARGE",control:(0,ne.jsx)(de.Z,{}),label:(0,K.Z)("consultant_pro_rate_and_cancellation_charges")})]})]})}),"PRO_RATE_CANCEL_CHARGE"===e.values.refundMethod&&(0,ne.jsxs)(a.ZP,{item:!0,md:4,sm:6,xs:12,children:[(0,ne.jsx)(y.Z,{variant:"body1",className:"mb-2",children:(0,K.Z)("consultant_enter_percentage")}),(0,ne.jsx)(H.Z,{placeholder:"percentage",variant:"outlined",name:"percentage",value:e.values.percentage,onChange:e.handleChange,onBlur:e.handleBlur,inputProps:{type:"number"},InputProps:{endAdornment:(0,ne.jsx)(ue.Z,{position:"end",children:(0,ne.jsx)(ce.Z,{})})},error:!(!e.errors.percentage||!e.touched.percentage),helperText:e.errors.percentage&&e.touched.percentage?e.errors.percentage:null})]})]})}),(0,ne.jsx)(S.Z,{children:(0,ne.jsx)(Z.Z,{variant:"contained",type:"submit",children:(0,K.Z)("common_btn_submit")})})]})}})})})},xe=function(){var e=(0,t.useState)(!1),n=(0,u.Z)(e,2),r=n[0],a=n[1],o=(0,b.I0)(),l=(0,b.v9)((function(e){return e.servicePlan.refundPolicyLoading})),i=(0,b.v9)((function(e){return e.servicePlan.refundPolicy}));return(0,t.useEffect)((function(){o((0,N.dl)())}),[o]),(0,ne.jsx)(ne.Fragment,{children:(0,ne.jsx)(f.Z,{variant:"outlined",className:"py-2 px-3",children:l?(0,ne.jsx)(g.Z,{}):(0,ne.jsxs)(j.Z,{direction:{xs:"column",sm:"row"},spacing:1,alignItems:"center",justifyContent:"space-between",children:[(0,ne.jsx)(y.Z,{variant:"h6",children:(0,K.Z)("consultant_setup_terms_and_policy")}),(0,ne.jsx)(Z.Z,{variant:"outlined",onClick:function(){a(!0)},children:(0,C.isEmpty)(i)?(0,K.Z)("consultant_setup"):"Edit"}),(0,ne.jsx)(he,{open:r,onClose:function(){a(!1)},type:(0,C.isEmpty)(i)?"add":"edit"})]})})})},Ze=function(){return(0,ne.jsx)(ne.Fragment,{children:(0,ne.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,ne.jsx)(a.ZP,{item:!0,xs:12,children:(0,ne.jsx)(xe,{})}),(0,ne.jsx)(a.ZP,{item:!0,xs:12,children:(0,ne.jsx)(se,{})})]})})},pe=r(12665),_e=function(){return(0,ne.jsx)(ne.Fragment,{children:(0,ne.jsx)(pe.Z,{title:"Service Plan | InspireMind",children:(0,ne.jsx)(o.Z,{component:"section",className:"w-100",children:(0,ne.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,ne.jsx)(a.ZP,{item:!0,xs:12,children:(0,ne.jsx)(l.Z,{title:"consultant_service_plan",variant:"outlined",elevation:0})}),(0,ne.jsx)(a.ZP,{item:!0,xs:12,children:(0,ne.jsx)(o.Z,{children:(0,ne.jsx)(Ze,{})})})]})})})})}},2919:function(e,n,r){var t=r(64836);n.Z=void 0;var a=t(r(45649)),o=r(80184),l=(0,a.default)((0,o.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt");n.Z=l},93704:function(e,n,r){var t=r(64836);n.Z=void 0;var a=t(r(45649)),o=r(80184),l=(0,a.default)((0,o.jsx)("path",{d:"M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4 4 5.57 4 7.5 5.57 11 7.5 11zm0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6zM4.0025 18.5832 18.59 3.9955l1.4142 1.4143L5.4167 19.9974zM16.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"Percent");n.Z=l},3579:function(e,n,r){var t=r(64836);n.Z=void 0;var a=t(r(45649)),o=r(80184),l=(0,a.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"RemoveRedEye");n.Z=l}}]);
//# sourceMappingURL=393.9de9f7d1.chunk.js.map