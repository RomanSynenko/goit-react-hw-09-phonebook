(this.webpackJsonplesson1=this.webpackJsonplesson1||[]).push([[0],{10:function(t,e,n){"use strict";n.d(e,"b",(function(){return y})),n.d(e,"a",(function(){return G})),n.d(e,"c",(function(){return K}));var c,r,a,u,o=n(2),s={registerRequest:Object(o.b)("auth/registerRequest"),registerSuccess:Object(o.b)("auth/registerSuccess"),registerError:Object(o.b)("auth/registerError"),loginRequest:Object(o.b)("auth/loginRequest"),loginSuccess:Object(o.b)("auth/loginSuccess"),loginError:Object(o.b)("auth/loginError"),logoutRequest:Object(o.b)("auth/logoutRequest"),logoutSuccess:Object(o.b)("auth/logoutSuccess"),logoutError:Object(o.b)("auth/logoutError"),getCurrentUserRequest:Object(o.b)("auth/gerCurrentUserRequest"),getCurrentUserSuccess:Object(o.b)("auth/gerCurrentUserSuccess"),getCurrentUserError:Object(o.b)("auth/gerCurrentUserError")},i=n(3),b=n(8),j={name:null,email:null},l=s.registerSuccess,O=s.registerError,f=s.loginSuccess,d=s.loginError,h=s.logoutSuccess,g=s.logoutError,p=s.getCurrentUserSuccess,x=s.getCurrentUserError,m=Object(o.c)(j,(c={},Object(i.a)(c,l,(function(t,e){return e.payload.user})),Object(i.a)(c,f,(function(t,e){return e.payload.user})),Object(i.a)(c,h,(function(){return j})),Object(i.a)(c,p,(function(t,e){return e.payload})),c)),v=Object(o.c)(null,(r={},Object(i.a)(r,l,(function(t,e){return e.payload.token})),Object(i.a)(r,f,(function(t,e){return e.payload.token})),Object(i.a)(r,h,(function(){return null})),r)),k=Object(o.c)(null,(a={},Object(i.a)(a,O,(function(t,e){return e.payload})),Object(i.a)(a,d,(function(t,e){return e.payload})),Object(i.a)(a,g,(function(t,e){return e.payload})),Object(i.a)(a,x,(function(t,e){return e.payload})),a)),C=Object(o.c)(!1,(u={},Object(i.a)(u,l,(function(){return!0})),Object(i.a)(u,f,(function(){return!0})),Object(i.a)(u,p,(function(){return!0})),Object(i.a)(u,O,(function(){return!1})),Object(i.a)(u,d,(function(){return!1})),Object(i.a)(u,x,(function(){return!1})),Object(i.a)(u,h,(function(){return!1})),u)),y=Object(b.c)({user:m,isAuthenticated:C,token:v,error:k}),S=n(18),E=n.n(S),R=n(24),N=n(20),q=n.n(N),U=n(39),w=(n(88),n(89),function(){return Object(U.success)({title:"Success!",delay:1e3})}),L=function(){return Object(U.error)({title:"Bad Request",delay:1e3})},A=s.registerRequest,I=s.registerSuccess,T=s.registerError,z=s.loginRequest,B=s.loginSuccess,_=s.loginError,F=s.logoutRequest,J=s.logoutSuccess,H=s.logoutError,M=s.getCurrentUserRequest,P=s.getCurrentUserSuccess,Q=s.getCurrentUserError;q.a.defaults.baseURL="https://connections-api.herokuapp.com";var W=function(t){q.a.defaults.headers.common.Authorization="Bearer ".concat(t)},D=function(){q.a.defaults.headers.common.Authorization=""},G={register:function(t){return function(){var e=Object(R.a)(E.a.mark((function e(n){var c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(A()),e.prev=1,e.next=4,q.a.post("/users/signup",t);case 4:c=e.sent,W(c.data.token),w(),n(I(c.data)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),L(),n(T(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(R.a)(E.a.mark((function e(n){var c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(z()),e.prev=1,e.next=4,q.a.post("/users/login",t);case 4:c=e.sent,W(c.data.token),n(B(c.data)),w(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),L(),n(_(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(R.a)(E.a.mark((function t(e){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(F()),t.prev=1,t.next=4,q.a.post("/users/logout");case 4:D(),e(J()),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),L(),e(H(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(R.a)(E.a.mark((function t(e,n){var c,r,a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),r=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return W(r),e(M()),t.prev=5,t.next=8,q.a.get("/users/current");case 8:a=t.sent,e(P(a.data)),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(5),L(),e(Q(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},K={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUserName:function(t){return t.auth.user.name}}},111:function(t,e,n){},112:function(t,e,n){},113:function(t,e,n){},114:function(t,e,n){},115:function(t,e,n){},119:function(t,e,n){},12:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return j})),n.d(e,"d",(function(){return l})),n.d(e,"j",(function(){return O}));var c=n(2),r=Object(c.b)("contacts/fetchContactRequest"),a=Object(c.b)("contacts/fetchContactSuccess"),u=Object(c.b)("contacts/fetchContactError"),o=Object(c.b)("contacts/addContactRequest"),s=Object(c.b)("contacts/addContactSuccess"),i=Object(c.b)("contacts/addContactError"),b=Object(c.b)("contacts/deleteContactRequest"),j=Object(c.b)("contacts/deleteContactSuccess"),l=Object(c.b)("contacts/deleteContactError"),O=Object(c.b)("contacts/changeFilter")},120:function(t,e,n){"use strict";n.r(e);var c,r,a=n(0),u=n.n(a),o=n(26),s=n.n(o),i=n(17),b=n(9),j=n(10),l=n(7),O=n(19),f=n(34),d=n(1),h=function(t){var e=t.component,n=t.redirectTo,c=Object(f.a)(t,["component","redirectTo"]),r=Object(b.c)(j.c.getIsAuthenticated);return Object(d.jsx)(l.b,Object(O.a)(Object(O.a)({},c),{},{render:function(t){return r?Object(d.jsx)(e,Object(O.a)({},t)):Object(d.jsx)(l.a,{to:n})}}))},g=function(t){var e=t.component,n=t.redirectTo,c=Object(f.a)(t,["component","redirectTo"]),r=Object(b.c)(j.c.getIsAuthenticated);return Object(d.jsx)(l.b,Object(O.a)(Object(O.a)({},c),{},{render:function(t){return r&&c.restricted?Object(d.jsx)(l.a,{to:n}):Object(d.jsx)(e,Object(O.a)({},t))}}))},p=n(51),x=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,125))})),m=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,128))})),v=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,126))})),k=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,127))})),C=function(){return Object(d.jsx)(a.Suspense,{fallback:Object(d.jsx)(p.a,{}),children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(g,{path:"/",exact:!0,component:x}),Object(d.jsx)(h,{path:"/contacts",component:m,redirectTo:"/login"}),Object(d.jsx)(g,{path:"/register",component:k,restricted:!0,redirectTo:"/contacts"}),Object(d.jsx)(g,{path:"/login",component:v,restricted:!0,redirectTo:"/contacts"})]})})},y=(n(111),function(t){var e=t.children;return Object(d.jsx)("main",{className:"container",children:e})}),S=(n(112),function(){var t=Object(b.c)(j.c.getIsAuthenticated);return Object(d.jsxs)("nav",{children:[Object(d.jsx)(i.b,{className:"link",activeClassName:"activeLink",to:"/",exact:!0,children:"Home"}),t&&Object(d.jsx)(i.b,{className:"link",activeClassName:"activeLink",to:"/contacts",exact:!0,children:"Contacts"})]})}),E=(n(113),n(114),function(){var t=Object(b.b)(),e=Object(b.c)(j.c.getUserName),n=Object(a.useCallback)((function(){t(j.a.logOut())}),[t]);return Object(d.jsxs)("div",{className:"logout-container",children:[Object(d.jsxs)("span",{className:"welcone-text",children:["Welcome ",e," "]}),Object(d.jsx)("button",{className:"logout-button",type:"button",onClick:n,children:"Log out"})]})}),R=(n(115),function(){return Object(d.jsxs)("nav",{children:[Object(d.jsx)(i.b,{className:"link",activeClassName:"activeLink",to:"/register",exact:!0,children:"Register"}),Object(d.jsx)(i.b,{className:"link",activeClassName:"activeLink",to:"/login",exact:!0,children:"Login"})]})}),N=function(){var t=Object(b.c)(j.c.getIsAuthenticated);return Object(d.jsxs)("header",{className:"header-container",children:[Object(d.jsx)(S,{}),Object(d.jsx)("div",{className:"registerContainer",children:t?Object(d.jsx)(E,{}):Object(d.jsx)(R,{})})]})},q=function(){var t=Object(b.b)();return Object(a.useEffect)((function(){t(j.a.getCurrentUser())}),[t]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(N,{}),Object(d.jsx)(y,{children:Object(d.jsx)(C,{})})]})},U=n(33),w=n(2),L=n(21),A=n(22),I=n(32),T=n(3),z=n(8),B=n(12),_=Object(w.c)([],(c={},Object(T.a)(c,B.i,(function(t,e){return e.payload})),Object(T.a)(c,B.c,(function(t,e){var n=e.payload;return[].concat(Object(U.a)(t),[n])})),Object(T.a)(c,B.f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),F=Object(w.c)(!1,(r={},Object(T.a)(r,B.h,(function(){return!0})),Object(T.a)(r,B.i,(function(){return!1})),Object(T.a)(r,B.g,(function(){return!1})),Object(T.a)(r,B.b,(function(){return!0})),Object(T.a)(r,B.c,(function(){return!1})),Object(T.a)(r,B.a,(function(){return!1})),Object(T.a)(r,B.e,(function(){return!0})),Object(T.a)(r,B.f,(function(){return!1})),Object(T.a)(r,B.d,(function(){return!1})),r)),J=Object(w.c)("",Object(T.a)({},B.j,(function(t,e){return e.payload}))),H=Object(w.c)(null,{}),M=Object(z.c)({items:_,filter:J,loading:F,error:H}),P=n(57),Q={key:"token",storage:n.n(P).a,whitelist:["token"]},W=Object(U.a)(Object(w.d)({serializableCheck:{ignoredActions:[L.a,L.f,L.b,L.c,L.d,L.e]}})),D=Object(w.a)({reducer:{contact:M,auth:Object(A.a)(Q,j.b)},middleware:W,devTools:!1}),G={store:D,persistor:Object(I.a)(D)},K=n(58);n(118),n(119);s.a.render(Object(d.jsx)(u.a.StrictMode,{children:Object(d.jsx)(b.a,{store:G.store,children:Object(d.jsx)(K.a,{loading:null,persistor:G.persistor,children:Object(d.jsx)(i.a,{children:Object(d.jsx)(q,{})})})})}),document.getElementById("root"))},51:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var c=n(53),r=n(54),a=n(60),u=n(59),o=n(0),s=n(55),i=n.n(s),b=(n(110),n(56)),j=n.n(b),l=n(1),O=function(t){Object(a.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(l.jsx)(i.a,{className:j.a.Loader,type:"Puff",color:"#3f51b5",height:100,width:100})}}]),n}(o.Component)},56:function(t,e,n){t.exports={Loader:"Loader_Loader__BIuQd"}}},[[120,1,2]]]);
//# sourceMappingURL=main.39d46e40.chunk.js.map