"use strict";(self.webpackChunknutrition_ai_consultant=self.webpackChunknutrition_ai_consultant||[]).push([[405],{95405:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r=t(64554),o=t(89164),i=t(61889),s=t(72791),c=t(42686),a=t(39384),u=t(74165),l=t(15861),d=t(29439),m=t(36151),f=t(47071),p=t(20890),x=t(763),h=t(74673),g=t(70004),Z=t(81405),v=t(57689),j=t(75985),y=t(90392),_=t(17811),b=t(62249),w=t(87812),C=t(80066),k=t(95414),A=t(80184),P=function(){var e=(0,s.useState)(""),n=(0,d.Z)(e,2),t=n[0],o=n[1],a=(0,s.useState)(!1),P=(0,d.Z)(a,2),S=P[0],E=P[1],I=(0,Z.I0)(),F=(0,v.TH)().state,N=(0,v.s0)(),O=(0,h.Z)(),T=(0,d.Z)(O,2)[1],R=(0,c.xX)().executeRecaptcha,z=(0,Z.v9)(b.is);(0,s.useEffect)((function(){null!==(0,x.get)(F,"isOtpVerified",null)&&!0!==(0,x.isEmpty)((0,x.get)(z,"userId",""))||N("/signup")}));var D=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(){var n,r;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(6!==t.length){e.next=9;break}return E(!1),n={userId:(0,x.get)(z,"userId",""),otp:t},e.next=5,I((0,_.Q8)(n)).unwrap().then((function(e){if((0,x.get)(e,"status",!1)&&""!==(0,x.get)(e,"data.token","")){var n={email:(0,x.get)(z,"email"),token:(0,x.get)(e,"data.token")};T("consultant_data",n,{path:"/",expires:C.aV}),I((0,y.uB)(e.data.token)),I((0,y.nf)(!0)),N("/consultant-info"),o("")}else j.Am.error(e.message)})).catch((function(e){console.log("OTP error=======>",e)}));case 5:return r=e.sent,e.abrupt("return",r);case 9:E(!0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(){var n,t,r;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R){e.next=3;break}return j.Am.error("You are not Authorized"),e.abrupt("return");case 3:return e.next=5,R("yourAction");case 5:return n=e.sent,t={email:(0,x.get)(z,"email",""),googleRecaptchaToken:n},e.next=9,I((0,_.FF)(t)).unwrap().then((function(e){e.status&&j.Am.success(e.message,{position:j.Am.POSITION.TOP_CENTER})})).catch((function(e){console.log("OTP error=======>",e)}));case 9:return r=e.sent,e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(r.Z,{component:"div",className:"h-100",children:(0,A.jsx)(i.ZP,{container:!0,children:(0,A.jsxs)(i.ZP,{item:!0,sm:9,md:10,lg:8,sx:{mx:{md:"0",xs:"auto"}},children:[(0,A.jsx)(p.Z,{variant:"h4",align:"center",mb:2,children:(0,k.Z)("common_otp_verification")}),(0,A.jsxs)(p.Z,{variant:"body1",align:"center",mb:2,children:[(0,k.Z)("common_code_sent_to"),(0,A.jsx)(p.Z,{variant:"body1",color:"primary",component:"span",ml:1,children:z.email})]}),(0,A.jsxs)(i.ZP,{container:!0,spacing:2,justifyContent:"center",children:[(0,A.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,A.jsx)(g.Z,{value:t,onChange:function(e){o(e)},numInputs:6,separator:(0,A.jsx)("span",{style:{width:"8px"}}),isInputNum:!0,shouldAutoFocus:!0,className:w.Z.otp_inputs,containerStyle:{alignItems:"center",justifyContent:"center"},hasErrored:S,errorStyle:{color:"#b71c1c",borderColor:"#b71c1c"},inputStyle:{border:"1px solid #CFD3DB",borderRadius:"8px",width:"40px",height:"40px",fontSize:"16px",color:"#777E89",fontWeight:"400",caretColor:"#777E89",margin:"0 auto"},focusStyle:{border:"1px solid #CFD3DB",outline:"none"}}),S&&(0,A.jsx)(f.Z,{error:!0,sx:{textAlign:"center",mt:1},children:(0,k.Z)("common_error_all_fields_are_required")}),(0,A.jsxs)(p.Z,{variant:"body1",align:"center",mt:2,children:[(0,k.Z)("common_didn't_receive_code")," ?",(0,A.jsx)(p.Z,{variant:"body1",color:"primary",component:"span",className:"cursor-pointer",ml:1,onClick:L,children:(0,k.Z)("common_request_again")})]})]}),(0,A.jsx)(i.ZP,{item:!0,xs:12,children:(0,A.jsx)(m.Z,{variant:"contained",fullWidth:!0,type:"submit",onClick:D,children:(0,k.Z)("common_verify_now")})})]})]})})})})},S=function(){return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(r.Z,{component:"section",sx:{py:{sm:6.4,xs:4}},className:"d-flex align-items-center justify-content-center w-100",children:(0,A.jsx)(o.Z,{maxWidth:"xl",children:(0,A.jsxs)(i.ZP,{container:!0,spacing:2,sx:{justifyContent:{md:"space-between",xs:"center"}},column:12,children:[(0,A.jsx)(i.ZP,{item:!0,lg:6,md:6,children:(0,A.jsx)(c.pm,{reCaptchaKey:"6LfakRIiAAAAAOzDSqY5YxucM0LUaQzzp7_e5FSe",children:(0,A.jsx)(P,{})})}),(0,A.jsx)(i.ZP,{item:!0,lg:5,md:6,children:(0,A.jsx)(a.Z,{})})]})})})})}},74673:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(72791),o=t(46224);function i(e){var n=(0,r.useContext)(o.ZP);if(!n)throw new Error("Missing <CookiesProvider>");var t=n.getAll(),i=(0,r.useState)(t),s=i[0],c=i[1],a=(0,r.useRef)(s);return"undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement&&(0,r.useLayoutEffect)((function(){function t(){var t=n.getAll();(function(e,n,t){if(!e)return!0;for(var r=0,o=e;r<o.length;r++){var i=o[r];if(n[i]!==t[i])return!0}return!1})(e||null,t,a.current)&&c(t),a.current=t}return n.addChangeListener(t),function(){n.removeChangeListener(t)}}),[n]),[s,(0,r.useMemo)((function(){return n.set.bind(n)}),[n]),(0,r.useMemo)((function(){return n.remove.bind(n)}),[n])]}}}]);
//# sourceMappingURL=405.ebbf46ea.chunk.js.map