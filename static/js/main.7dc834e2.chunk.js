(this.webpackJsonpparking=this.webpackJsonpparking||[]).push([[0],{82:function(e,t,r){},83:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r.n(a),n=r(32),i=r.n(n),d=(r(70),r(93)),s=r(92),l=r(62),j=r(11),o=r(12),b=r.n(o),u=r(25),h=r(18),O=r(89),m=r(91),x=r(58),p=r(59),T=r(34),f=r(19),A=r(90),v=r(54),y=r(64),D=r(57),_=r(40),E=(r(84),r(73),r(2));0===_.a.apps.length&&_.a.initializeApp({apiKey:"AIzaSyA5UHixrGRSpIKFv0ZIwFR0-J3we_4A7Wc",authDomain:"suza-second.firebaseapp.com",projectId:"suza-second",storageBucket:"suza-second.appspot.com",messagingSenderId:"660323136078",appId:"1:1:660323136078:web:cc0dbb2e04088a8509491f",measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/parking-lot",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyA5UHixrGRSpIKFv0ZIwFR0-J3we_4A7Wc",REACT_APP_AUTH_DOMAIN:"suza-second.firebaseapp.com",REACT_APP_PROJECT_ID:"suza-second",REACT_APP_STORAGE_BUCKET:"suza-second.appspot.com",REACT_APP_MESSAGING_SENDER_ID:"660323136078",REACT_APP_APP_ID:"1:1:660323136078:web:cc0dbb2e04088a8509491f"}).REACT_APP_MEASUREMENT_ID});var R=_.a.firestore();_.a.auth();function S(){var e=Object(a.useState)(),t=Object(h.a)(e,2),r=(t[0],t[1],Object(y.a)()),c=r.register,n=r.handleSubmit,i=Object(a.useState)(!1),d=Object(h.a)(i,2),s=d[0],l=d[1],j=Object(a.useState)([]),o=Object(h.a)(j,2),_=o[0],S=o[1],g=Object(a.useState)(0),C=Object(h.a)(g,2),k=(C[0],C[1],Object(a.useState)(!1)),w=Object(h.a)(k,2),I=w[0],F=w[1],M=Object(a.useState)({id:null,name:"",number:null,arrivalTime:new Date,departureTime:new Date,reason:"",createdAt:new Date}),N=Object(h.a)(M,2),z=N[0],B=N[1],q=R.collection("parkingLot"),H=q.orderBy("createdAt","asc").limitToLast(100),K=Object(D.a)(H,{idField:"id"}),U=Object(h.a)(K,1)[0];console.log("REACT_APP_PROJECT_ID","suza-second"),Object(a.useEffect)((function(){if(U){var e=U.map((function(e,t){return Object(E.jsx)(P,{data:e,i:t,onDeleteClick:G,onEditClick:J})}));S(e)}}),[U]);var V=function(){B({id:null,name:"",number:0,arrivalTime:new Date,departureTime:new Date,reason:"",createdAt:new Date}),l(!1),F(!1)},L=function(){var e=Object(u.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={name:t.name,number:parseFloat(t.number),arrivalTime:new Date(t.arrivalTime),departureTime:new Date(t.departureTime),reason:t.reason,createdAt:new Date(t.createdAt)},console.log("onSubmit",r),!I){e.next=8;break}return console.log("UPDATING!!!!",t.id),e.next=6,q.doc(t.id).set(r).then((function(){return console.log("parkingRef has been set")})).catch((function(e){console.error("Error: ",e),alert(e)}));case 6:e.next=10;break;case 8:return e.next=10,q.add(r).then((function(){return console.log("New record has been added.")})).catch((function(e){console.error("Errror:",e),alert(e)}));case 10:V();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e){console.log("handleDeleteClick in Parking",e),window.confirm("Are you sure to delete this record?")&&q.doc(e).delete()},J=function(e){var t={id:e.id,name:e.name,number:parseFloat(e.number),arrivalTime:e.arrivalTime.toDate(),departureTime:e.departureTime.toDate(),reason:e.reason,createdAt:e.createdAt.toDate()};console.log("handleEditClick",t),B(t),l(!0),F(!0)};return Object(E.jsxs)(x.a,{children:[Object(E.jsx)(T.a,{children:Object(E.jsxs)(f.a,{children:[Object(E.jsx)("h1",{children:"Report"}),Object(E.jsxs)(O.a,{variant:"outline-dark",onClick:function(){return l(!0)},children:[Object(E.jsx)(v.a,{})," Request"]})]})}),Object(E.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"#"}),Object(E.jsx)("th",{children:"Name"}),Object(E.jsx)("th",{children:"Phone Number"}),Object(E.jsx)("th",{children:"Arrival Time"}),Object(E.jsx)("th",{children:"Departure Time"}),Object(E.jsx)("th",{children:"Reason"}),Object(E.jsx)("th",{children:"Created At"}),Object(E.jsx)("th",{children:"Delete"})]})}),Object(E.jsx)("tbody",{children:_})]}),Object(E.jsx)(m.a,{show:s,onHide:V,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:Object(E.jsxs)("form",{onSubmit:n(L),children:[Object(E.jsx)("input",{type:"hidden",placeholder:"ID",ref:c({required:!1}),name:"id",id:"id",defaultValue:z.id}),Object(E.jsx)(m.a.Header,{closeButton:!0,children:Object(E.jsx)(m.a.Title,{children:I?"Edit Record":"Add New Record"})}),Object(E.jsxs)(m.a.Body,{children:[Object(E.jsxs)(T.a,{children:[Object(E.jsx)(f.a,{children:Object(E.jsx)("label",{htmlFor:"name",children:"Name"})}),Object(E.jsx)(f.a,{children:Object(E.jsx)("input",{type:"text",placeholder:"Name",ref:c({required:!0}),name:"name",id:"name",defaultValue:z.name})})]}),Object(E.jsxs)(T.a,{children:[Object(E.jsx)(f.a,{children:Object(E.jsx)("label",{htmlFor:"number",children:"Number"})}),Object(E.jsx)(f.a,{children:Object(E.jsx)("input",{type:"number",step:"any",min:"0",placeholder:"Number",ref:c({required:!0}),name:"number",id:"number",defaultValue:z.number})})]}),Object(E.jsxs)(T.a,{children:[Object(E.jsx)(f.a,{children:Object(E.jsx)("label",{htmlFor:"arrivalTime",children:"ArrivalTime"})}),Object(E.jsx)(f.a,{children:Object(E.jsx)("input",{type:"date",placeholder:"ArrivalTime",ref:c({required:!0}),name:"arrivalTime",id:"arrivalTime",defaultValue:Object(A.a)(z.arrivalTime,"yyyy-MM-dd")})})]}),Object(E.jsxs)(T.a,{children:[Object(E.jsx)(f.a,{children:Object(E.jsx)("label",{htmlFor:"departureTime",children:"DepartureTime"})}),Object(E.jsx)(f.a,{children:Object(E.jsx)("input",{type:"date",placeholder:"DepartureTime",ref:c({required:!0}),name:"departureTime",id:"departureTime",defaultValue:Object(A.a)(z.departureTime,"yyyy-MM-dd")})})]}),Object(E.jsxs)(T.a,{children:[Object(E.jsx)(f.a,{children:Object(E.jsx)("label",{htmlFor:"reason",children:"Reason"})}),Object(E.jsx)(f.a,{children:Object(E.jsx)("input",{type:"text",placeholder:"Reason",ref:c({required:!0}),name:"reason",id:"reason",defaultValue:z.reason})})]}),Object(E.jsxs)(T.a,{children:[Object(E.jsx)(f.a,{children:Object(E.jsx)("label",{htmlFor:"createdAt",children:"Date"})}),Object(E.jsx)(f.a,{children:Object(E.jsx)("input",{type:"date",placeholder:"Date",ref:c({required:!0}),name:"createdAt",id:"createdAt",defaultValue:Object(A.a)(z.createdAt,"yyyy-MM-dd")})})]})]}),Object(E.jsxs)(m.a.Footer,{children:[Object(E.jsx)(O.a,{variant:"secondary",onClick:V,children:"Close"}),Object(E.jsx)(O.a,{variant:I?"success":"primary",type:"submit",children:I?"Save Record":"Add Record"})]})]})})]})}function P(e){var t=e.data;e.i;return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{}),Object(E.jsx)("td",{children:t.name}),Object(E.jsx)("td",{children:t.number}),Object(E.jsx)("td",{children:Object(A.a)(t.arrivalTime.toDate(),"yyyy-MM-dd")}),Object(E.jsx)("td",{children:Object(A.a)(t.departureTime.toDate(),"yyyy-MM-dd")}),Object(E.jsx)("td",{children:t.reason}),Object(E.jsx)("td",{children:Object(A.a)(t.createdAt.toDate(),"yyyy-MM-dd")}),Object(E.jsx)("td",{children:Object(E.jsx)(v.b,{onClick:function(){return e.onDeleteClick(t.id)}})})]})}var g=function(){return Object(E.jsxs)(l.a,{children:[Object(E.jsxs)(d.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(E.jsx)(d.a.Brand,{href:"/",children:"Parking Report"}),Object(E.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(E.jsx)(d.a.Collapse,{id:"responsive-navbar-nav",children:Object(E.jsx)(s.a,{className:"mr-auto",children:Object(E.jsx)(s.a.Link,{href:"/report",children:"Report"})})})]}),Object(E.jsx)(j.c,{children:Object(E.jsx)(j.a,{path:"/report",children:Object(E.jsx)(S,{})})})]})},C=(r(82),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,94)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),a(e),c(e),n(e),i(e)}))});i.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(g,{})}),document.getElementById("root")),C()}},[[83,1,2]]]);
//# sourceMappingURL=main.7dc834e2.chunk.js.map