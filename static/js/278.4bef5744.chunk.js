"use strict";(self.webpackChunknutrition_ai_consultant=self.webpackChunknutrition_ai_consultant||[]).push([[278],{44278:function(t,e,n){n.r(e),n.d(e,{default:function(){return G}});var a=n(72791),i=n(64554),s=n(1413),r=n(74165),c=n(15861),o=n(29439),l=n(39504),u=n(61889),d=n(35527),h=n(20890),x=n(763),p=n(81405),m=n(75985),f=n(1507),g=n(7645),j=n(151),Z=n(92168),b=n(30445),S=n(89372),w=n(69033),v=n(68681),y=n(93044),k=n(36314),C=n(72426),N=n.n(C),I=n(80184),P=function(t){var e=t.consultantInfo,n=t.loading,a=t.infoLoading,s=t.handleSectionChildStatus;return console.log(e,"consultantInfo"),(0,I.jsx)(I.Fragment,{children:(0,x.get)(e,"licenseCertification",[]).map((function(t,r){return(0,I.jsx)(i.Z,{children:(0,I.jsxs)(k.Z,{direction:"row",align:"center",justifyContent:"space-between",spacing:2,py:2,children:[(0,I.jsxs)(k.Z,{direction:"row",align:"center",children:[(0,I.jsx)(i.Z,{component:"span",children:(0,I.jsx)(y.Z,{sx:{backgroundColor:"grey.300",color:"text.secondary"},children:(0,I.jsx)(v.Z,{})})}),(0,I.jsxs)(i.Z,{sx:{textAlign:"start",marginLeft:"10px"},children:[(0,I.jsx)(h.Z,{variant:"body2",color:"text.primary",className:"fw-bold",children:"".concat(t.name," at ").concat(t.issuingOrganization)}),(0,I.jsx)(h.Z,{variant:"caption",color:"text.secondary",children:"".concat(N()(t.issueDate).format("L")," - ").concat(t.credentialId," - ").concat(t.credentialUrl)})]})]}),(0,I.jsx)(w.Z,{checked:(0,x.get)(t,"status",!0),onChange:function(e){return s(e,"licenseCertification",t._id)},disabled:n||a||!(0,x.get)(e,"licenseCertificationStatus",!1),inputProps:{"aria-label":"licenseCertification-".concat(r,"-status"),role:"switch"}})]})},r)}))})},_=n(3746),L=n(81918),z=n(95414),U=function(t){var e=t.consultantInfo,n=t.loading,i=t.infoLoading,s=t.handleSectionChildStatus,r=t.handleSectionStatus,c=(0,a.useState)("panel0"),l=(0,o.Z)(c,2),p=l[0],m=l[1];return console.log(e,"consultantInfo"),(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(d.Z,{variant:"outlined",sx:{my:1,px:2,py:1},children:[(0,I.jsxs)(k.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,I.jsx)(h.Z,{variant:"subtitle1",children:(0,z.Z)("consultant_specializations_and_sub_specializations")}),(0,I.jsx)(w.Z,{checked:(0,x.get)(e,"specializationStatus",!0),onChange:function(t){return r(t,"specialization")},disabled:n||i,inputProps:{"aria-label":"specialization-status",role:"switch"}})]}),(0,I.jsx)(u.ZP,{item:!0,xs:12,children:(0,x.map)((0,x.get)(e,"specialization",[]),(function(t,a){return console.log(t,"58"),(0,I.jsxs)(Z.Z,{expanded:p==="panel".concat(a),onChange:(r="panel".concat(a),function(t,e){m(!!e&&r)}),children:[(0,I.jsxs)(S.Z,{expandIcon:(0,I.jsx)(j.xR,{sx:{margin:0}}),reverse:!0,children:[(0,I.jsx)(h.Z,{style:{fontWeight:"600"},children:(0,z.Z)((0,x.get)(t,"foreignData.macroName",""))}),(0,I.jsx)(w.Z,{checked:(0,x.get)(t,"status",!0),onChange:function(e){return s(e,"specialization",t._id)},disabled:n||i||!(0,x.get)(e,"specializationStatus",!1),inputProps:{"aria-label":"specialization-status",role:"switch"}})]}),(0,I.jsx)(b.Z,{children:(0,x.map)(t.child,(function(e){return(0,I.jsx)(L.Z,{label:(0,z.Z)((0,x.get)(e,"foreignData.macroName","")),onClick:function(e){return s(e,"child",t._id)},disabled:!t.status,icon:(0,I.jsx)(_.Z,{}),sx:{fontSize:"14px",color:"text.primary",mb:1,mr:1}},e._id)}))})]},a);var r}))})]})})},M=n(74668),F=n(42093),A=n(56310),D=n(21880),E=n(83854),R=function(t){var e=t.consultantInfo,n=t.loading,a=t.infoLoading,s=t.handleSectionChildStatus,r=function(t){switch(t){case"Twitter":return(0,I.jsx)(M.Z,{});case"Facebook":return(0,I.jsx)(F.Z,{});case"LinkedIn":return(0,I.jsx)(A.Z,{});case"Instagram":return(0,I.jsx)(D.Z,{});case"YouTube":return(0,I.jsx)(E.Z,{});default:return(0,I.jsx)(v.Z,{})}};return(0,I.jsx)(I.Fragment,{children:(0,x.get)(e,"socialMediaInfo",[]).map((function(t,c){return(0,I.jsx)(i.Z,{children:(0,I.jsxs)(k.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,mb:1,children:[(0,I.jsxs)(k.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,I.jsx)(i.Z,{component:"span",children:(0,I.jsx)(y.Z,{sx:{backgroundColor:"grey.300",color:"text.secondary"},children:r(t.socialMediaChanel)})}),(0,I.jsxs)(i.Z,{component:"div",children:[(0,I.jsxs)(h.Z,{variant:"body2",color:"text.primary",className:"fw-bold",children:["Follow me on ",t.socialMediaChanel]}),(0,I.jsx)(h.Z,{color:"primary.main",variant:"caption",component:"span",sx:{wordBreak:"break-all"},children:t.chanelLink})]})]}),(0,I.jsx)(w.Z,{checked:(0,x.get)(t,"status",!0),onChange:function(e){return s(e,"socialMediaInfo",t._id)},disabled:n||a||!(0,x.get)(e,"socialMediaInfoStatus",!1),inputProps:{"aria-label":"socialMediaInfo-".concat(c,"-status"),role:"switch"}})]})},c)}))})},T=n(13400),W=n(50533),O=n(78029),Y=n(50132),B=function(t){var e=t.consultantInfo,n=t.handleStatus,a=t.loading,s=t.infoLoading,r=t.secName;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(i.Z,{children:(0,I.jsxs)(u.ZP,{container:!0,children:[(0,I.jsx)(u.ZP,{item:!0,md:1.7,xs:12,children:(0,I.jsx)(y.Z,{sx:{height:{xs:"200px",md:"100px"},width:{xs:"200px",md:"100px"},backgroundColor:"primary.lighter",margin:{xs:"auto",md:"0"}},alt:(0,x.upperCase)((0,x.get)(e,"firstName","U")),src:(0,x.get)(e,"profilePictureURL","NA")})}),(0,I.jsx)(u.ZP,{item:!0,md:10.3,xs:12,children:(0,I.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,I.jsxs)(u.ZP,{item:!0,md:6,xs:12,children:[(0,I.jsxs)(k.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,I.jsx)(h.Z,{variant:"subtitle1",children:e.firstName}),(0,I.jsx)(w.Z,{checked:(0,x.get)(e,"firstNameStatus",!0),onChange:function(t){return n(t,"firstNameStatus")},disabled:"firstNameStatus"===r&&(a||s),inputProps:{"aria-label":"first-Name-status",role:"switch"}})]}),(0,I.jsxs)(k.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,I.jsx)(h.Z,{variant:"subtitle1",children:e.email}),(0,I.jsx)(w.Z,{checked:(0,x.get)(e,"emailStatus",!0),onChange:function(t){return n(t,"emailStatus")},disabled:"emailStatus"===r&&(a||s),inputProps:{"aria-label":"email-status",role:"switch"}})]})]}),(0,I.jsxs)(u.ZP,{item:!0,md:6,xs:12,children:[(0,I.jsxs)(k.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,I.jsx)(h.Z,{variant:"subtitle1",children:e.lastName}),(0,I.jsx)(w.Z,{checked:(0,x.get)(e,"lastNameStatus",!0),onChange:function(t){return n(t,"lastNameStatus")},disabled:"lastNameStatus"===r&&(a||s),inputProps:{"aria-label":"last-name-status",role:"switch"}})]}),(0,I.jsxs)(k.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,I.jsx)(h.Z,{variant:"subtitle1",children:e.mobile}),(0,I.jsx)(w.Z,{checked:(0,x.get)(e,"mobileStatus",!0),onChange:function(t){return n(t,"mobileStatus")},disabled:"mobileStatus"===r&&(a||s),inputProps:{"aria-label":"mobile-status",role:"switch"}})]})]})]})})]})}),(0,I.jsx)(i.Z,{py:2,children:(0,I.jsxs)(k.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,I.jsxs)(i.Z,{sx:{width:"100%"},children:[(0,I.jsx)(h.Z,{variant:"subtitle1",children:(0,z.Z)("consultant_profile_url")}),(0,I.jsxs)(k.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,I.jsx)(W.Z,{color:"primary.main",target:"_blank",className:"text-decoration-none",children:"View Your Profile"}),(0,I.jsx)(O.CopyToClipboard,{options:{message:"Whoa!"},children:(0,I.jsx)(T.Z,{color:"primary",children:(0,I.jsx)(Y.Z,{icon:"eva:copy-fill"})})})]})]}),(0,I.jsx)(w.Z,{checked:(0,x.get)(e,"profileUrlStatus",!0),onChange:function(t){return n(t,"profileUrlStatus")},disabled:"profileUrlStatus"===r&&(a||s),inputProps:{"aria-label":"profile-url-status",role:"switch"}})]})}),(0,I.jsxs)(i.Z,{py:1,children:[(0,I.jsxs)(k.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,I.jsx)(h.Z,{variant:"subtitle1",children:(0,z.Z)("consultant_about_me")}),(0,I.jsx)(w.Z,{checked:(0,x.get)(e,"bioStatus",!0),onChange:function(t){return n(t,"bioStatus")},disabled:"bioStatus"===r&&(a||s),inputProps:{"aria-label":"bio-status",role:"switch"}})]}),(0,I.jsx)(h.Z,{variant:"body2",children:e.bio})]})]})},V=function(t){var e=t.consultantInfo,n=t.loading,a=t.infoLoading,s=t.handleSectionChildStatus;return(0,I.jsxs)(I.Fragment,{children:[" ",(0,x.get)(e,"educationUniversity",[]).map((function(t,r){return(0,I.jsx)(i.Z,{children:(0,I.jsxs)(k.Z,{direction:"row",align:"center",justifyContent:"space-between",spacing:2,py:2,children:[(0,I.jsxs)(k.Z,{direction:"row",align:"center",children:[(0,I.jsx)(i.Z,{component:"span",children:(0,I.jsx)(y.Z,{sx:{backgroundColor:"grey.300",color:"text.secondary"},children:(0,I.jsx)(v.Z,{})})}),(0,I.jsxs)(i.Z,{sx:{textAlign:"start",marginLeft:"10px"},children:[(0,I.jsx)(h.Z,{variant:"body2",color:"text.primary",className:"fw-bold",children:"".concat(t.universityName," at ").concat(t.fieldOfStudy)}),(0,I.jsx)(h.Z,{variant:"caption",color:"text.secondary",children:"".concat(N()(t.startDate).format("L")," to ").concat(N()(t.endDate).format("L")," at ").concat(t.location)})]})]}),(0,I.jsx)(w.Z,{checked:(0,x.get)(t,"status",!0),onChange:function(e){return s(e,"educationUniversity",t._id)},disabled:n||a||!(0,x.get)(e,"universityStatus",!1),inputProps:{"aria-label":"university-".concat(r,"-status"),role:"switch"}})]})},r)}))]})},$=function(){var t=(0,p.I0)(),e=(0,p.v9)(f.SM),n=(0,a.useState)("panel0"),v=(0,o.Z)(n,2),y=v[0],k=v[1],C=(0,a.useState)(""),N=(0,o.Z)(C,2),_=N[0],L=N[1],M=(0,p.v9)((function(t){return t.nutritionProfile.loading})),F=(0,p.v9)((function(t){return t.consultantInfo.loading})),A=e.data,D=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n,a){var i,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L(a),i={},e.t0=a,e.next="firstNameStatus"===e.t0?5:"lastNameStatus"===e.t0?7:"emailStatus"===e.t0?9:"mobileStatus"===e.t0?11:"bioStatus"===e.t0?13:"profileUrlStatus"===e.t0?15:17;break;case 5:return i={firstNameStatus:n.target.checked},e.abrupt("break",18);case 7:return i={lastNameStatus:n.target.checked},e.abrupt("break",18);case 9:return i={emailStatus:n.target.checked},e.abrupt("break",18);case 11:return i={mobileStatus:n.target.checked},e.abrupt("break",18);case 13:return i={bioStatus:n.target.checked},e.abrupt("break",18);case 15:return i={profileUrlStatus:n.target.checked},e.abrupt("break",18);case 17:return e.abrupt("break",18);case 18:return e.next=20,t((0,g.Wz)(i)).unwrap().then((function(e){e.status&&(t((0,f.Em)()),m.Am.success(e.message))})).catch((function(t){console.log("profile update error=======>",t)}));case 20:return s=e.sent,e.abrupt("return",s);case 22:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n,a){var i,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={sectionName:a,status:n.target.checked},L(a),e.next=4,t((0,g.$0)(i)).unwrap().then((function(e){e.status&&(t((0,f.Em)()),m.Am.success(e.message))})).catch((function(t){console.log("profile update error=======>",t)}));case 4:return s=e.sent,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n,a,i){var s,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.stopPropagation(),s={_id:i,sectionName:a,status:n.target.checked},e.next=4,t((0,g.L6)(s)).unwrap().then((function(e){e.status&&(t((0,f.Em)()),m.Am.success(e.message))})).catch((function(t){console.log("profile update error=======>",t)}));case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),W={consultantInfo:A,loading:M,infoLoading:F,handleSectionChildStatus:T},O=[{title:"consultant_education_university",sectionName:"educationUniversity",sectoinStatus:"universityStatus",component:(0,I.jsx)(V,(0,s.Z)({},W))},{title:"consultant_licence_or_certification",sectionName:"licenseCertification",sectoinStatus:"licenseCertificationStatus",component:(0,I.jsx)(P,(0,s.Z)({},W))},{title:"consultant_links",sectionName:"socialMediaInfo",sectoinStatus:"socialMediaInfoStatus",component:(0,I.jsx)(R,(0,s.Z)({},W))}];return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(u.ZP,{container:!0,spacing:2,className:"nutrition-profile-section",children:(0,I.jsxs)(u.ZP,{item:!0,md:10,xs:12,children:[(0,I.jsx)(d.Z,{variant:"outlined",className:"nutrition-bg",children:(0,I.jsx)(l.Z,{children:(0,I.jsx)(B,{consultantInfo:A,handleStatus:D,loading:M,infoLoading:F,secName:_})})}),(0,I.jsx)(U,(0,s.Z)({className:"nutrition-special-design",consultantInfo:A,handleSectionStatus:E},W)),(0,x.map)(O,(function(t,e){return(0,I.jsx)(i.Z,{py:1,className:"nutrition-special-section",children:(0,I.jsxs)(Z.Z,{expanded:y==="panel".concat(e),onChange:(n="panel".concat(e),function(t,e){k(!!e&&n)}),children:[(0,I.jsxs)(S.Z,{expandIcon:(0,I.jsx)(j.xR,{sx:{margin:0}}),reverse:!0,children:[(0,I.jsx)(h.Z,{variant:"subtitle1",children:(0,z.Z)(null===t||void 0===t?void 0:t.title)}),(0,I.jsx)(w.Z,{checked:(0,x.get)(A,t.sectoinStatus,!0),onChange:function(e){return E(e,t.sectionName)},disabled:_===t.sectionName&&(M||F),inputProps:{"aria-label":"".concat(t.sectionName,"-status"),role:"switch"}})]}),(0,I.jsx)(b.Z,{children:(0,I.jsx)(i.Z,{children:t.component})})]})},e);var n}))]})})})},q=n(12665),G=function(){return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(q.Z,{title:"inspiremind Profile | InspireMind",children:(0,I.jsx)(i.Z,{component:"section",className:"w-100",children:(0,I.jsx)($,{})})})})}}}]);
//# sourceMappingURL=278.4bef5744.chunk.js.map