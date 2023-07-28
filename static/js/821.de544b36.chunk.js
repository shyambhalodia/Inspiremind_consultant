"use strict";(self.webpackChunknutrition_ai_consultant=self.webpackChunknutrition_ai_consultant||[]).push([[821],{70821:function(e,n,r){r.r(n),r.d(n,{default:function(){return N}});var t=r(64554),s=r(89164),o=r(61889),a=r(72791),i=r(42686),c=r(1413),l=r(74165),d=r(15861),m=r(29439),u=r(3746),h=r(20165),p=r(39504),x=r(94454),Z=r(68096),_=r(85523),g=r(79012),j=r(47071),f=r(13400),w=r(63466),b=r(30829),v=r(77196),y=r(35527),k=r(36314),C=r(13967),A=r(48550),S=r(20890),M=r(21795),P=r(763),q=r(74673),z=r(81405),B=r(57689),F=r(11087),I=r(75985),L=r(81724),R=r(90392),U=r(95113),Y=r(80066),D=r(95414),V=r(89208),W=r(71686),T=r(69060),J=r(80184),K=function(){var e=(0,a.useState)(!1),n=(0,m.Z)(e,2),r=n[0],s=n[1],K=(0,z.v9)((function(e){return e.signin.loading})),N=(0,q.Z)(),O=(0,m.Z)(N,2)[1],Q=(0,i.xX)().executeRecaptcha,X=(0,B.s0)(),E=(0,z.I0)(),G=(0,C.Z)(),H=L.Ry().shape({email:L.Z_().email((0,D.Z)("common_error_email_valid_email")).required((0,D.Z)("common_error_email_required")),password:L.Z_().min(6,(0,D.Z)("common_error_password_too_short_min_6_length")).max(18,(0,D.Z)("common_error_password_too_long_max_18_length")).required((0,D.Z)("common_error_password_required"))}),$=(0,Y.AU)("remember_me"),ee=function(){s(!r)},ne=function(e){e.preventDefault()},re=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(n){var r,t,s;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Q){e.next=3;break}return I.Am.error("You are not authorized"),e.abrupt("return");case 3:return e.next=5,Q("yourAction");case 5:return r=e.sent,t={email:n.email,password:n.password,googleRecaptchaToken:r},e.next=9,E((0,U.Yo)(t)).unwrap().then(function(){var e=(0,d.Z)((0,l.Z)().mark((function e(n){var r;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.status||""===(0,P.get)(n,"data.token","")){e.next=11;break}return r={token:n.data.token},O("consultant_data",r,{path:"/",expires:Y.aV}),e.next=5,E((0,R.L_)()).unwrap().then((function(e){e.status&&O("isSignupCompleted",(0,P.get)(e,"data.termsAndCondition",!1),{path:"/",expires:Y.aV})})).catch((function(e){console.log("me error=======>",e)}));case 5:E((0,R.uB)(n.data.token)),E((0,R.nf)(!0)),I.Am.success(n.message),X("/dashboard"),e.next=12;break;case 11:I.Am.error(n.message);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){console.log("signin error========>",e)}));case 9:return s=e.sent,e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,J.jsx)(J.Fragment,{children:(0,J.jsx)(y.Z,{variant:"outlined",children:(0,J.jsx)(p.Z,{children:(0,J.jsx)(M.J9,{initialValues:{email:(0,P.get)($,"email",""),password:"",rememberMe:!1},validationSchema:H,onSubmit:function(e){if(re(e),e.rememberMe){var n={email:e.email};(0,Y.Lz)("remember_me",n)}},children:function(e){return(0,J.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,J.jsx)(S.Z,{variant:"h4",align:"center",mb:3,children:(0,D.Z)("consultant_get_ready_to_login")}),(0,J.jsxs)(k.Z,{direction:"row",spacing:3,justifyContent:"center",mb:3,children:[(0,J.jsx)(W.Z,{}),(0,J.jsx)(T.Z,{})]}),(0,J.jsxs)(o.ZP,{container:!0,spacing:2,justifyContent:"center",children:[(0,J.jsx)(o.ZP,{item:!0,xs:12,children:(0,J.jsx)(A.Z,{label:(0,D.Z)("common_email"),name:"email",value:e.values.email,onChange:e.handleChange,onBlur:e.handleBlur,error:!(!e.errors.email||!e.touched.email),helperText:e.errors.email&&e.touched.email?e.errors.email:null})}),(0,J.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,J.jsxs)(Z.Z,{variant:"outlined",fullWidth:!0,sx:(0,c.Z)({},G.typography.customInput),children:[(0,J.jsx)(b.Z,{error:e.errors.password&&e.touched.password,htmlFor:"outlined-adornment-password",children:(0,D.Z)("common_password")}),(0,J.jsx)(v.Z,{id:"outlined-adornment-password",label:(0,D.Z)("common_password"),type:r?"text":"password",name:"password",value:e.values.password,onChange:e.handleChange,onBlur:e.handleBlur,endAdornment:(0,J.jsx)(w.Z,{position:"end",children:(0,J.jsx)(f.Z,{"aria-label":"toggle password visibility",onClick:ee,onMouseDown:ne,edge:"end",children:r?(0,J.jsx)(h.Z,{}):(0,J.jsx)(u.Z,{})})}),error:!(!e.errors.password||!e.touched.password)}),e.errors.password&&e.touched.password&&(0,J.jsx)(j.Z,{error:!0,id:"outlined-adornment-password",children:e.errors.password})]}),(0,J.jsxs)(k.Z,{direction:{xs:"column",sm:"row"},alignItems:{xs:"start",sm:"center"},justifyContent:{xs:"center",sm:"space-between"},sx:{width:"100%"},children:[(0,J.jsx)(t.Z,{component:"div",children:(0,J.jsx)(g.Z,{children:(0,J.jsx)(_.Z,{control:(0,J.jsx)(x.Z,{name:"rememberMe",value:e.values.rememberMe,onChange:e.handleChange}),label:(0,D.Z)("common_remember_me")+" ?"})})}),(0,J.jsx)(t.Z,{component:"div",children:(0,J.jsxs)(F.rU,{to:"/recover/account",children:[(0,D.Z)("common_forgot_password")," ?"]})})]})]}),(0,J.jsx)(o.ZP,{item:!0,xs:12,children:(0,J.jsx)(V.Z,{variant:"contained",fullWidth:!0,type:"submit",loading:e.isSubmitting&&K,disabled:e.isSubmitting&&K,children:(0,D.Z)("common_sign_in")})}),(0,J.jsxs)(S.Z,{variant:"body1",mt:2,children:[(0,D.Z)("common_dont_have_an_account")," ?"," ",(0,J.jsx)(F.rU,{to:"/signup",children:(0,D.Z)("common_sign_up")})]})]})]})}})})})})},N=function(){return(0,J.jsx)(J.Fragment,{children:(0,J.jsx)(t.Z,{component:"section",sx:{py:{sm:6.4,xs:4}},className:"d-flex align-items-center justify-content-center w-100",children:(0,J.jsx)(s.Z,{maxWidth:"xl",children:(0,J.jsx)(o.ZP,{container:!0,spacing:2,justifyContent:"center",children:(0,J.jsx)(o.ZP,{item:!0,xs:12,sm:8,md:6,lg:5,xl:4,children:(0,J.jsx)(i.pm,{reCaptchaKey:"6LfakRIiAAAAAOzDSqY5YxucM0LUaQzzp7_e5FSe",children:(0,J.jsx)(K,{})})})})})})})}}}]);
//# sourceMappingURL=821.de544b36.chunk.js.map