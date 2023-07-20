"use strict";(self.webpackChunknutrition_ai_consultant=self.webpackChunknutrition_ai_consultant||[]).push([[983],{33983:function(n,t,e){e.r(t),e.d(t,{default:function(){return cn}});var a=e(72791),o=e(64554),r=e(89164),i=e(61889),s=e(81405),c=e(29439),l=e(42419),d=e(65956),u=e(13400),m=e(20890),x=e(54802),h=e(15522),f=e(95414),Z=e(92168),p=e(30445),j=e(89372),b=e(80184),v=function(){var n=(0,x.v9)(h.RE),t=n.faqData,e=n.faqStep,o=(0,a.useState)("panel0"),r=(0,c.Z)(o,2),i=r[0],s=r[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m.Z,{variant:"h4",gutterBottom:!0,children:(0,f.Z)("common_faq")}),t.filter((function(n){return n.step===e})).map((function(n,t){return(0,b.jsxs)(Z.Z,{expanded:i==="panel".concat(t),onChange:(e="panel".concat(t),function(n,t){s(!!t&&e)}),children:[(0,b.jsx)(j.Z,{"aria-controls":"panel1d-content",id:"panel1d-header",expandIcon:i==="panel".concat(t)?(0,b.jsx)(u.Z,{sx:{backgroundColor:"primary.contrastText"},children:(0,b.jsx)(d.Z,{})}):(0,b.jsx)(u.Z,{children:(0,b.jsx)(l.Z,{})}),children:(0,b.jsx)(m.Z,{variant:"subtitle1",children:(0,f.Z)(null===n||void 0===n?void 0:n.titleMacro)})}),(0,b.jsx)(p.Z,{children:(0,b.jsx)(m.Z,{variant:"body1",color:"text.secondary",children:(0,f.Z)(null===n||void 0===n?void 0:n.descriptionMacro)})})]},t);var e}))]})},_=e(74165),g=e(15861),C=e(74512),k=e(29145),w=e(15825),I=e(70242),y=e(40986),S=e(763),N=e(76329),A=e(47572),L=e(56202),E=e(1942),D=e(76668),P=e(77231),B=e(36151),M=e(85523),F=e(79012),O=e(47071),T=e(36314),q=e(92506),H=e(74673),J=e(57689),R=e(81724);var U=e.p+"static/media/last_step.3464db42fddaa0d1fda7e937dad74d9a.svg",V=e(90392),z=e(1507),G=e(80066),Q=e(151),W=e(1413),X=e(45987),Y=e(94454),K=e(66934),$=["name","value","sx"],nn=(0,K.ZP)(Y.Z)((function(n){n.other;return{".MuiSvgIcon-root":{width:"1.8rem",height:"1.8rem"},"&.Mui-checked":{"&, & + .MuiFormControlLabel-label":{backgroundColor:"inherit"},color:n.theme.palette.secondary.main}}})),tn=function(n){var t=n.name,e=n.value,a=n.sx,o=(0,X.Z)(n,$);return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(nn,(0,W.Z)({name:t,value:e,sx:(0,W.Z)({},a),other:n},o))})},en=function(n){var t=n.handleBack,e=n.consultantInfo,a=(0,s.I0)(),r=(0,J.s0)(),l=(0,H.Z)(),d=(0,c.Z)(l,2)[1],u=e.data,m=R.Ry().shape({termsAndCondition:R.O7().oneOf([!0],"Must Accept Terms and Conditions")}),x=function(){var n=(0,g.Z)((0,_.Z)().mark((function n(t){var e;return(0,_.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a((0,z.yS)(t)).unwrap().then(function(){var n=(0,g.Z)((0,_.Z)().mark((function n(t){return(0,_.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.status){n.next=5;break}return a((0,z.Em)()),n.next=4,a((0,V.L_)()).unwrap().then((function(n){n.status&&d("isSignupCompleted",n.data.termsAndCondition,{path:"/",expires:G.aV})})).catch((function(n){console.log("OTP error=======>",n)}));case 4:r("/dashboard");case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()).catch((function(n){console.log(" basic err",n)}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{children:(0,b.jsx)(q.J9,{initialValues:{termsAndCondition:(0,S.get)(u,"termsAndCondition",!1),subscription:(0,S.get)(u,"subscription",!1)},validationSchema:m,onSubmit:function(){var n=(0,g.Z)((0,_.Z)().mark((function n(t){var e;return(0,_.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={termsAndCondition:t.termsAndCondition,subscription:t.subscription,step:6},n.next=3,x(e);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),children:function(n){return(0,b.jsx)("form",{onSubmit:n.handleSubmit,children:(0,b.jsxs)(i.ZP,{container:!0,spacing:2,children:[(0,b.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,b.jsx)(o.Z,{component:"img",src:U,className:"img-fluid w-100"}),(0,b.jsxs)(F.Z,{children:[(0,b.jsx)(o.Z,{className:"checkbox_wrapper",children:(0,b.jsx)(M.Z,{control:(0,b.jsx)(tn,{name:"termsAndCondition",checked:n.values.termsAndCondition,checkedIcon:(0,b.jsx)(Q.yz,{}),onChange:n.handleChange}),label:(0,f.Z)("common_terms_and_conditions")})}),n.errors.termsAndCondition&&(0,b.jsx)(O.Z,{error:!0,children:n.errors.termsAndCondition}),n.errors.subscription&&(0,b.jsx)(O.Z,{error:!0,children:n.errors.subscription})]})]}),(0,b.jsx)(i.ZP,{item:!0,xs:12,children:(0,b.jsxs)(T.Z,{direction:"row",justifyContent:"space-between",children:[(0,b.jsx)(B.Z,{type:"button",variant:"outlined",color:"primary",onClick:t,children:(0,f.Z)("common_btn_back")}),(0,b.jsx)(T.Z,{direction:"row",spacing:1,children:(0,b.jsx)(B.Z,{type:"submit",variant:"contained",disabled:n.isSubmitting,children:(0,f.Z)("common_next")})})]})})]})})}})})})},an=e(45823),on=function(){var n=(0,a.useState)(0),t=(0,c.Z)(n,2),e=t[0],r=t[1],i=(0,x.I0)(),s=(0,x.v9)((function(n){return n.consultantInfo.infoLoading})),l=(0,x.v9)((function(n){return n.common.countryLoading})),d=(0,x.v9)(z.SM),u=function(n){r((function(){return n})),i((0,h.Hx)())},Z=function(){r((function(n){return n-1})),i((0,h.IX)())},p=(0,a.useCallback)((0,g.Z)((0,_.Z)().mark((function n(){return(0,_.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i((0,h.Qb)("CONSULTANT_SIGNUP")),i((0,an.Sy)()),i((0,an.Jp)()),i((0,an.vH)()),i((0,an.vL)({sectionName:"SPECIALIZATION"})),i((0,an.uY)({sectionName:"SOCIAL_MEDIA_CHANNELS"})),n.next=8,i((0,z.Em)()).unwrap().then((function(n){n.status&&(i((0,h.ZL)((0,S.get)(n,"data.step",0))),r((0,S.get)(n,"data.step",0)))}));case 8:case"end":return n.stop()}}),n)}))),[i]),j=(0,a.useMemo)((function(){return(0,S.debounce)(p,1e3)}),[p]);(0,a.useEffect)((function(){j()}),[j]);var v=[{label:"common_basic_information",formData:(0,b.jsx)(N.Z,{handleNext:u,handleBack:Z,consultantInfo:d,buttonLabel:(0,f.Z)("common_next"),isEdit:!1})},{label:"consultant_residential_address",formData:(0,b.jsx)(D.Z,{handleNext:u,handleBack:Z,consultantInfo:d,buttonLabel:(0,f.Z)("common_next"),isEdit:!1})},{label:"consultant_professional_domain",formData:(0,b.jsx)(L.Z,{handleNext:u,handleBack:Z,consultantInfo:d,buttonLabel:(0,f.Z)("common_next"),isEdit:!1})},{label:"consultant_professional_information",formData:(0,b.jsx)(E.Z,{handleNext:u,handleBack:Z,consultantInfo:d,buttonLabel:(0,f.Z)("common_next"),isEdit:!1})},{label:"consultant_licence_or_certification_info_&_publications_or_links",formData:(0,b.jsx)(A.Z,{handleNext:u,handleBack:Z,consultantInfo:d,buttonLabel:(0,f.Z)("common_next"),isEdit:!1})},{label:"consultant_social_media_information",formData:(0,b.jsx)(P.Z,{handleNext:u,handleBack:Z,consultantInfo:d,buttonLabel:(0,f.Z)("common_next"),isEdit:!1})},{label:"common_terms_and_conditions",formData:(0,b.jsx)(en,{handleNext:u,handleBack:Z,consultantInfo:d,buttonLabel:(0,f.Z)("common_next"),isEdit:!1})}];return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{component:"div",children:(0,b.jsx)(I.Z,{activeStep:e,orientation:"vertical",children:s&&l?(0,b.jsx)(y.Z,{}):(0,S.map)(v,(function(n,t,e){var a=e.length;return(0,b.jsxs)(C.Z,{children:[(0,b.jsx)(w.Z,{optional:t===a-1?(0,b.jsx)(m.Z,{variant:"caption",children:(0,f.Z)("common_last_step")}):null,children:(0,f.Z)(null===n||void 0===n?void 0:n.label)}),(0,b.jsx)(k.Z,{children:(0,b.jsx)(o.Z,{children:n.formData})})]},n.label)}))})})})},rn=e(47047),sn=function(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(o.Z,{component:"div",sx:{width:"100%"},children:[(0,b.jsx)(rn.Z,{animation:"wave",height:50}),(0,b.jsx)(rn.Z,{animation:"wave",height:50}),(0,b.jsx)(rn.Z,{animation:"wave",height:50}),(0,b.jsx)(rn.Z,{animation:"wave",height:50})]})})},cn=function(){var n=(0,s.v9)((function(n){return n.faq.loading}));return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{component:"section",sx:{py:{sm:6.4,xs:4}},className:"d-flex align-items-center justify-content-center w-100",children:(0,b.jsx)(r.Z,{maxWidth:"xl",children:(0,b.jsxs)(i.ZP,{container:!0,spacing:2,sx:{justifyContent:{md:"space-between",xs:"center"}},column:12,children:[(0,b.jsx)(i.ZP,{item:!0,md:6,xs:12,children:(0,b.jsx)(on,{})}),(0,b.jsx)(i.ZP,{item:!0,lg:5,md:6,children:n?(0,b.jsx)(sn,{}):(0,b.jsx)(v,{})})]})})})})}}}]);
//# sourceMappingURL=983.06e95392.chunk.js.map