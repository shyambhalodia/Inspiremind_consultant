"use strict";(self.webpackChunknutrition_ai_consultant=self.webpackChunknutrition_ai_consultant||[]).push([[405],{95405:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r=n(64554),s=n(61889),i=n(72791),a=n(42686),o=n(39384),c=n(74165),u=n(15861),l=n(29439),d=n(36151),p=n(47071),x=n(20890),m=n(763),f=n(74673),h=n(70004),g=n(81405),Z=n(57689),_=n(75985),j=n(90392),y=n(17811),b=n(62249),v=n(87812),k=n(80066),C=n(95414),A=n(80184),w=function(){var e=(0,i.useState)(""),t=(0,l.Z)(e,2),n=t[0],r=t[1],o=(0,i.useState)(!1),w=(0,l.Z)(o,2),P=w[0],S=w[1],I=(0,g.I0)(),E=(0,Z.TH)().state,F=(0,Z.s0)(),O=(0,f.Z)(),T=(0,l.Z)(O,2)[1],z=(0,a.xX)().executeRecaptcha,D=(0,g.v9)(b.is);(0,i.useEffect)((function(){null!==(0,m.get)(E,"isOtpVerified",null)&&!0!==(0,m.isEmpty)((0,m.get)(D,"userId",""))||F("/signup")}));var N=function(){var e=(0,u.Z)((0,c.Z)().mark((function e(){var t,s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(6!==n.length){e.next=9;break}return S(!1),t={userId:(0,m.get)(D,"userId",""),otp:n},e.next=5,I((0,y.Q8)(t)).unwrap().then((function(e){if((0,m.get)(e,"status",!1)&&""!==(0,m.get)(e,"data.token","")){var t={email:(0,m.get)(D,"email"),token:(0,m.get)(e,"data.token")};T("consultant_data",t,{path:"/",expires:k.aV}),I((0,j.uB)(e.data.token)),I((0,j.nf)(!0)),F("/consultant-info"),r("")}else _.Am.error(e.message)})).catch((function(e){console.log("OTP error=======>",e)}));case 5:return s=e.sent,e.abrupt("return",s);case 9:S(!0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=(0,u.Z)((0,c.Z)().mark((function e(){var t,n,r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z){e.next=3;break}return _.Am.error("You are not Authorized"),e.abrupt("return");case 3:return e.next=5,z("yourAction");case 5:return t=e.sent,n={email:(0,m.get)(D,"email",""),googleRecaptchaToken:t},e.next=9,I((0,y.FF)(n)).unwrap().then((function(e){e.status&&_.Am.success(e.message,{position:_.Am.POSITION.TOP_CENTER})})).catch((function(e){console.log("OTP error=======>",e)}));case 9:return r=e.sent,e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(s.ZP,{item:!0,sm:9,md:10,lg:8,sx:{mx:{md:"0",xs:"auto"}},alignSelf:"center",children:[(0,A.jsx)(x.Z,{variant:"h4",align:"center",mb:2,children:(0,C.Z)("common_otp_verification")}),(0,A.jsx)(x.Z,{variant:"body1",align:"center",children:(0,C.Z)("common_please_enter_the_otp_sent_to_your_email")}),(0,A.jsx)(x.Z,{variant:"body1",color:"primary",align:"center",mb:3,children:D.email}),(0,A.jsxs)(s.ZP,{container:!0,spacing:2,justifyContent:"center",children:[(0,A.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,A.jsx)(h.Z,{value:n,onChange:function(e){r(e)},numInputs:6,separator:(0,A.jsx)("span",{style:{width:"8px"}}),isInputNum:!0,shouldAutoFocus:!0,className:v.Z.otp_inputs,containerStyle:{alignItems:"center",justifyContent:"center"},hasErrored:P,errorStyle:{color:"#b71c1c",borderColor:"#b71c1c"},inputStyle:{border:"1px solid #CFD3DB",borderRadius:"8px",width:"40px",height:"40px",fontSize:"16px",color:"#777E89",fontWeight:"400",caretColor:"#777E89",margin:"0 auto"},focusStyle:{border:"1px solid #CFD3DB",outline:"none"}}),P&&(0,A.jsx)(p.Z,{error:!0,sx:{textAlign:"center",mt:1},children:(0,C.Z)("common_error_all_fields_are_required")})]}),(0,A.jsx)(s.ZP,{item:!0,xs:6,children:(0,A.jsx)(d.Z,{variant:"contained",fullWidth:!0,type:"submit",onClick:N,children:(0,C.Z)("verify_otp")})}),(0,A.jsx)(s.ZP,{item:!0,xs:12,children:(0,A.jsxs)(x.Z,{variant:"body1",align:"center",children:[(0,C.Z)("didn't_receive_a_code"),(0,A.jsx)(d.Z,{size:"small",color:"primary",style:{marginLeft:"3px"},onClick:R,children:(0,C.Z)("resend_otp")})]})})]})]})})},P=function(){return(0,A.jsx)(r.Z,{component:"section",sx:{py:{sm:6.4,xs:4}},className:"d-flex align-items-center justify-content-center w-100",children:(0,A.jsxs)(s.ZP,{container:!0,spacing:1,sx:{justifyContent:{md:"space-between",xs:"center"}},column:12,px:10,children:[(0,A.jsx)(s.ZP,{item:!0,lg:6,md:6,children:(0,A.jsx)(a.pm,{reCaptchaKey:"6LfakRIiAAAAAOzDSqY5YxucM0LUaQzzp7_e5FSe",children:(0,A.jsx)(w,{})})}),(0,A.jsx)(s.ZP,{item:!0,lg:5,md:6,children:(0,A.jsx)(o.Z,{})})]})})}}}]);
//# sourceMappingURL=405.64ff22af.chunk.js.map