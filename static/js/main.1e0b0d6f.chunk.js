(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{126:function(e,t,n){},14:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activelink:"Navbar_activelink__2l0ss"}},157:function(e,t,n){},158:function(e,t,n){},22:function(e,t,n){e.exports={dialogs:"Dialog_dialogs__2nWS6",dialogsItems:"Dialog_dialogsItems__1Ylnr",active:"Dialog_active__24gaD",dialog:"Dialog_dialog__3bJrQ",messages:"Dialog_messages__19Bic",message:"Dialog_message__1YXnE"}},23:function(e,t,n){e.exports={login:"Login_login__10IcO",singIn:"Login_singIn__1cEUe",pageName:"Login_pageName__24QtC",header:"Login_header__26DqL",form:"Login_form__1tdal",testData:"Login_testData__1KY3Z",inputWrapper:"Login_inputWrapper__1JqSs",checkboxWrapper:"Login_checkboxWrapper__3YQ2B",loginBtn:"Login_loginBtn__3UPLJ"}},27:function(e,t,n){e.exports={body:"Users_body__3g2q8",pages:"Users_pages__2ZPtK",photo:"Users_photo__2hOPg",cont:"Users_cont__3AYXt",btn:"Users_btn__9AIH5",selectedPage:"Users_selectedPage__J63sh",imgs:"Users_imgs__2XvSo"}},282:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(64),i=n.n(r),c=(n(157),n(11)),o=(n(158),n(14)),u=n.n(o),l=n(12),d=n(0),j=function(e){return Object(d.jsxs)("nav",{className:u.a.nav,children:[Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(l.b,{to:"/profile",activeClassName:u.a.activelink,children:" Profile "})}),Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(l.b,{to:"/dialogs",activeClassName:u.a.activelink,children:" Messages "})}),Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(l.b,{to:"/users",activeClassName:u.a.activelink,children:" Users "})}),Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(l.b,{to:"/news",activeClassName:u.a.activelink,children:" News "})}),Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(l.b,{to:"/music",activeClassName:u.a.activelink,children:" Music "})}),Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(l.b,{to:"/setting",activeClassName:u.a.activelink,children:" Settings "})}),Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(l.b,{to:"/friends",activeClassName:u.a.activelink,children:" Friends "})})]})},p=function(){return Object(d.jsx)("div",{children:"NEWS"})},h=function(){return Object(d.jsx)("div",{children:"Music"})},b=function(){return Object(d.jsx)("div",{children:"Setting"})},f=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})},m=n(16),O=n(5),g="SEND-MESSAGE ",v={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Valera"},{id:6,name:"Viktor"}],messages:[{id:1,message:"Hello!!!"},{id:2,message:"Haw are you?"},{id:3,message:"This is my friend."},{id:4,message:"yo"},{id:5,message:"yo"}]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var n=t.newMessageBody;return Object(O.a)(Object(O.a)({},e),{},{messages:[].concat(Object(m.a)(e.messages),[{id:6,message:n}])});default:return e}},_=n(10),P=n(22),S=n.n(P),C=function(e){return Object(d.jsxs)("div",{className:S.a.dialog,children:[" ",e.message," "]})},y=function(e){var t="/dialogs/"+e.id;return Object(d.jsx)("div",{className:S.a.dialog+" "+S.a.active,children:Object(d.jsx)(l.b,{to:t,className:S.a.dialog,activeClassName:S.a.active,children:e.name})})},N=n(121),k=n(122),w=n(46),U=n(55),T=n.n(U),E=["input","meta"],D=["input","meta"],I=["input","meta"],A=function(e){var t=e.meta,n=t.touched,a=t.error,s=e.children,r=n&&a,i="".concat(T.a.formControl,"  ").concat(r?T.a.error:"");return Object(d.jsxs)("div",{className:i,children:[Object(d.jsx)("div",{className:T.a.childrenWrapperStyle,children:s}),Object(d.jsx)("div",{className:T.a.fieldErrorWrapper,children:r&&Object(d.jsx)("span",{children:a})})]})},L=function(e){var t=e.input,n=(e.meta,Object(w.a)(e,E));return Object(d.jsx)(A,Object(O.a)(Object(O.a)({},e),{},{children:Object(d.jsx)("textarea",Object(O.a)(Object(O.a)({},t),n))}))},M=function(e){var t=e.input,n=(e.meta,Object(w.a)(e,D));return Object(d.jsx)(A,Object(O.a)(Object(O.a)({},e),{},{children:Object(d.jsx)("input",Object(O.a)(Object(O.a)({},t),n))}))},F=function(e){var t=e.input,n=(e.meta,Object(w.a)(e,I));return Object(d.jsx)(A,Object(O.a)(Object(O.a)({},e),{},{children:Object(d.jsx)("input",Object(O.a)(Object(O.a)({},t),n))}))},R=function(e){if(!e)return"Field id required"},B=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},W=B(50),G=Object(k.a)({form:"dialogAddMessageForm"})((function(e){return Object(d.jsx)("form",{onSubmit:e.handleSubmit,children:Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(N.a,{component:L,name:"newMessageBody",placeholder:"Enter your message",validate:[R,W]})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:" Sent"})})]})})})),H=function(e){var t=e.dialogsPage.dialogs.map((function(e){return Object(d.jsx)(y,{name:e.name,id:e.id},e.id)})),n=e.dialogsPage.messages.map((function(e){return Object(d.jsx)(C,{message:e.message},e.id)}));e.dialogsPage.newMessageBody;return Object(d.jsxs)("div",{className:S.a.dialogs,children:[Object(d.jsx)("div",{className:S.a.dialogsItems,children:t}),Object(d.jsx)("div",{className:S.a.messages,children:Object(d.jsx)("div",{children:n})}),Object(d.jsx)(G,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]})},q=function(e){return{isAuth:e.authData.isAuth}};function z(e){return Object(_.b)(q)((function(t){var n=t.isAuth,a=Object(w.a)(t,["isAuth"]);return n?Object(d.jsx)(e,Object(O.a)({},a)):Object(d.jsx)(c.a,{to:"/login"})}))}var J,K,V=n(9),Y=Object(V.d)(Object(_.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:g,newMessageBody:e}}(t))}}})),z)(H),Q=n(31),X=n(32),Z=n(34),$=n(33),ee=n(26),te=n.n(ee),ne=n(45),ae=n(125),se=n.n(ae).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"6587bf96-e19c-43d8-b7f7-8a779c2e9e9d"}}),re=function(e,t){return se.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},ie=function(e){return se.post("follow/".concat(e)).then((function(e){return e.data.resultCode}))},ce=function(e){return se.delete("follow/".concat(e)).then((function(e){return e.data.resultCode}))},oe=function(){return se.get("auth/me").then((function(e){return e.data}))},ue=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return se.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},le=function(){return se.delete("auth/login").then((function(e){return e.data}))},de={getProfile:function(e){return se.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return se.get("profile/status/".concat(e))},updateStatus:function(e){return se.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),se.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return se.put("profile/",e).then((function(e){return e.data}))}};!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(J||(J={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(K||(K={}));var je={items:[],pageSize:10,totalUsersCount:0,currentPage:555,isFetching:!1,followingInProgress:[],filter:{term:"",friend:null}},pe=function(e){return{type:"FOLLOW",userID:e}},he=function(e){return{type:"UNFOLLOW",userID:e}},be=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},fe=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},me=function(e,t){return{type:"SET-FOLLOWING-IN-PROGRESS",isFetching:e,userId:t}},Oe=n(27),ge=n.n(Oe),ve=n.p+"static/media/user.a603a401.png",xe=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],a=1;a<=t;a++)n.push(a);var s=[];if(1===e.currentPage)(s=n.filter((function(e){return e<10}))).push(n.length);else if(e.currentPage===n.length)s.push(1),s=[].concat(Object(m.a)(s),Object(m.a)(n.filter((function(t){return t>e.currentPage-9}))));else if(e.currentPage>n.length-9){s.push(1);var r=e.currentPage-4,i=e.currentPage+5;(s=[].concat(Object(m.a)(s),Object(m.a)(n.filter((function(e){return e>r&&e<i}))))).push(n.length)}else{s.push(1);var c=e.currentPage-4,o=e.currentPage+5;s=[].concat(Object(m.a)(s),Object(m.a)(n.filter((function(e){return e>c&&e<o}))))}return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:ge.a.pages,children:n.map((function(t){return Object(d.jsx)("span",{className:e.currentPage===t?ge.a.selectedPage:"",onClick:function(n){e.onPageChange(t)},children:t})}))}),e.items.map((function(t){return Object(d.jsxs)("div",{className:ge.a.body,children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(l.b,{to:"/profile/"+t.id,children:Object(d.jsx)("img",{src:null!=t.photos.small?t.photos.small:ve,alt:"avatar",className:ge.a.photo})})}),Object(d.jsx)("div",{children:t.followed?Object(d.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollowUser(t.id)},className:ge.a.btn,children:"Unfollow"}):Object(d.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.followUser(t.id)},className:ge.a.btn,children:"Follow"})})]}),Object(d.jsxs)("span",{className:ge.a.cont,children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:t.name}),Object(d.jsx)("div",{children:t.status})]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:"u.location.country"}),Object(d.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))]})},_e=n.p+"static/media/preloader.464a6fda.gif",Pe=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:_e,className:ge.a.imgs})})},Se=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(Q.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onPageChange=function(t){e.props.getUsersThunkCreator(t,e.props.usersPageData.pageSize)},e}return Object(X.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.usersPageData.currentPage,this.props.usersPageData.pageSize)}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[this.props.usersPageData.isFetching?Object(d.jsx)(Pe,{}):null,Object(d.jsx)(xe,{followUser:this.props.followUserThunkCreator,unfollowUser:this.props.unfollowUserThunkCreator,items:this.props.usersPageData.items,followingInProgress:this.props.usersPageData.followingInProgress,onPageChange:this.onPageChange,totalUsersCount:this.props.usersPageData.totalUsersCount,pageSize:this.props.usersPageData.pageSize,currentPage:this.props.usersPageData.currentPage})]})}}]),n}(s.a.Component),Ce=Object(V.d)(z,Object(_.b)((function(e){return{usersPageData:e.usersPageData}}),{followUser:pe,unfollowUser:he,setCurrentPage:be,getUsersThunkCreator:function(e,t){return function(){var n=Object(ne.a)(te.a.mark((function n(a){var s;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(fe(!0)),a(be(e)),n.next=4,re(e,t);case 4:s=n.sent,a(fe(!1)),a({type:"SET-USERS",items:s.items}),a({type:"SET-TOTAL-USER-COUNT",count:s.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},followUserThunkCreator:function(e){return function(t){t(me(!0,e)),ie(e).then((function(n){0===n&&t(pe(e)),t(me(!1,e))}))}},unfollowUserThunkCreator:function(e){return function(t){t(me(!0,e)),ce(e).then((function(n){0===n&&t(he(e)),t(me(!1,e))}))}}}))(Se),ye=n(38),Ne={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},ke=function(e,t,n,a){return{type:"SN/AUTH/SET-USER-DATA",payload:{id:e,email:t,login:n,isAuth:a}}},we=function(){return function(){var e=Object(ne.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe().then((function(e){if(0===e.resultCode){var n=e.data,a=n.id,s=n.login,r=n.email;t(ke(a,s,r,!0))}}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ue=n(89),Te=n.n(Ue),Ee=function(e){return Object(d.jsxs)("header",{className:Te.a.header,children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-I86af1RynC0u9KgHKUD-H6tCwT_Cf_P2Q&usqp=CAU"})}),Object(d.jsx)("div",{className:Te.a.loginBlock,children:e.isAuth?Object(d.jsxs)("div",{children:[e.login," - ",Object(d.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(d.jsx)(l.b,{to:"/login",children:"Login"})})]})};var De,Ie=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){return Object(Q.a)(this,n),t.apply(this,arguments)}return Object(X.a)(n,[{key:"render",value:function(){return Object(d.jsx)(Ee,{login:this.props.login,isAuth:this.props.isAuth,logout:this.props.logout})}}]),n}(s.a.Component),Ae=Object(_.b)((function(e){return{isAuth:e.authData.isAuth,login:e.authData.login}}),{getAuthUserData:we,logout:function(){return function(){var e=Object(ne.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le().then((function(e){0===e.resultCode&&t(ke(null,null,null,!1))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ie),Le=n(126),Me=n.n(Le),Fe=n(67),Re=n.n(Fe),Be=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(Q.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(X.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(d.jsx)("div",{children:this.state.editMode?Object(d.jsx)("input",{value:this.state.status,onChange:this.onStatusChange,autoFocus:!0,onBlur:this.deactivateEditMode}):Object(d.jsx)("span",{className:Re.a.statusBlock,onDoubleClick:this.activateEditMode,children:this.props.status})})}}]),n}(s.a.Component),We=function(e){var t,n,a,s,r,i,c,o,u,l,j,p;return e.profile?Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:Re.a.descriptionBlock,children:[Object(d.jsx)("img",{src:(null===(t=e.profile)||void 0===t?void 0:t.photos.large)?e.profile.photos.large:ve}),Object(d.jsx)(Be,{status:e.status,updateStatus:e.updateStatus}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{children:null===(n=e.profile)||void 0===n?void 0:n.fullName})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:(null===(a=e.profile)||void 0===a?void 0:a.lookingForAJob)?"Looking for a job -> ":null}),Object(d.jsx)("span",{children:null===(s=e.profile)||void 0===s?void 0:s.lookingForAJobDescription})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[null===(r=e.profile)||void 0===r?void 0:r.contacts.facebook," "]}),Object(d.jsxs)("span",{children:[null===(i=e.profile)||void 0===i?void 0:i.contacts.github," "]}),Object(d.jsxs)("span",{children:[null===(c=e.profile)||void 0===c?void 0:c.contacts.vk," "]}),Object(d.jsxs)("span",{children:[null===(o=e.profile)||void 0===o?void 0:o.contacts.instagram," "]}),Object(d.jsxs)("span",{children:[null===(u=e.profile)||void 0===u?void 0:u.contacts.twitter," "]}),Object(d.jsxs)("span",{children:[null===(l=e.profile)||void 0===l?void 0:l.contacts.website," "]}),Object(d.jsxs)("span",{children:[null===(j=e.profile)||void 0===j?void 0:j.contacts.youtube," "]}),Object(d.jsxs)("span",{children:[null===(p=e.profile)||void 0===p?void 0:p.contacts.mainLink," "]})]})]})}):Object(d.jsx)(Pe,{})},Ge=n(90),He=n.n(Ge),qe=n(91),ze=n.n(qe),Je=function(e){return Object(d.jsxs)("div",{className:"".concat(ze.a.item," ").concat(ze.a.active),children:[Object(d.jsx)("img",{src:"https://i.guim.co.uk/img/media/bf7e98bd289d189e5b86d3f406f740368c663a6a/85_0_2544_1527/master/2544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=98cd2e37e0df5d552473c329d88349ee"}),e.message,Object(d.jsx)("div",{children:Object(d.jsxs)("span",{children:["like: ",e.likesCount]})})]})},Ke={postsData:[{id:1,message:"Hi, how are you",likesCount:12},{id:2,message:"It's my first post",likesCount:15},{id:3,message:"yo yo yo",likesCount:17}],profile:null,status:""},Ve=function(e){return{type:"SET-STATUS",status:e}},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(O.a)(Object(O.a)({},e),{},{postsData:[n].concat(Object(m.a)(e.postsData)),newPostText:""});case"SET-USER-PROFILE":return Object(O.a)(Object(O.a)({},e),{},{profile:t.profileInfo});case"SET-STATUS":return Object(O.a)(Object(O.a)({},e),{},{status:t.status});default:return e}},Qe=B(10),Xe=(De=2,function(e){if(e&&e.length<=De)return"Min length is ".concat(De," symbols")}),Ze=Object(k.a)({form:"ProfileAddMyPostForm"})((function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(N.a,{component:L,name:"newPostText",placeholder:"Add posts",validate:[R,Qe,Xe]})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Add post"})})]})})),$e=Object(_.b)((function(e){return{postsData:e.profilePage.postsData,profile:e.profilePage.profile}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}}))((function(e){var t=e.postsData.map((function(e){return Object(d.jsx)(Je,{message:e.message,likesCount:e.likesCount})}));return Object(d.jsxs)("div",{className:He.a.postsBlock,children:[Object(d.jsx)("h3",{children:"My posts"}),Object(d.jsx)("div",{children:Object(d.jsx)(Ze,{onSubmit:function(t){e.addPost(t.newPostText)}})}),Object(d.jsx)("div",{className:He.a.posts,children:t})]})}));var et=function(e){return Object(d.jsxs)("div",{className:Me.a.content,children:[Object(d.jsx)(We,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(d.jsx)($e,{})]})},tt=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){return Object(Q.a)(this,n),t.apply(this,arguments)}return Object(X.a)(n,[{key:"updateProfile",value:function(){var e=+this.props.match.params.userId;e||this.props.authorizedUserId||this.props.history.push("/login"),this.props.getUserProfileTC(this.props.match.params.userId),this.props.getStatusTC(this.props.match.params.userId)}},{key:"componentDidMount",value:function(){this.updateProfile()}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)(et,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusTC})})}}]),n}(s.a.Component),nt=Object(_.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.authData.id,isAuth:e.authData.isAuth}}),{getUserProfileTC:function(e){return function(t){var n;n=e||"17771",de.getProfile(n).then((function(e){t({type:"SET-USER-PROFILE",profileInfo:e})}))}},getStatusTC:function(e){return function(t){var n;n=e||"17771",de.getStatus(n).then((function(e){t(Ve(e.data))}))}},updateStatusTC:function(e){return function(t){de.updateStatus(e).then((function(n){0===n.data.resultCode&&t(Ve(e))}))}}}),at=Object(V.d)(nt,c.f)(tt),st=n(23),rt=n.n(st),it=Object(k.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;e.captchaUrl;return Object(d.jsxs)("form",{onSubmit:t,className:rt.a.form,children:[Object(d.jsxs)("div",{className:rt.a.testData,children:[Object(d.jsx)("p",{children:"Use test data"}),Object(d.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(d.jsx)("p",{children:"Password: free"})]}),Object(d.jsx)("div",{className:rt.a.inputWrapper,children:Object(d.jsx)(N.a,{placeholder:"Email",name:"email",component:M,validate:[R]})}),Object(d.jsx)("div",{className:rt.a.inputWrapper,children:Object(d.jsx)(N.a,{placeholder:"Password",name:"password",type:"password",component:M,validate:[R]})}),Object(d.jsxs)("div",{className:rt.a.checkboxWrapper,children:[Object(d.jsx)(N.a,{type:"checkbox",name:"rememberMe",component:F})," remember me"]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:rt.a.loginBtn,children:"Login"})}),n&&Object(d.jsx)("div",{className:rt.a.formSummaryError,children:n}),Object(d.jsx)("div",{})]})})),ct=function(){var e=Object(_.d)((function(e){return e.authData.captchaUrl})),t=Object(_.d)((function(e){return e.authData.isAuth})),n=Object(_.c)();return t?Object(d.jsx)(c.a,{to:ot.PROFILE}):Object(d.jsx)("div",{className:rt.a.header,children:Object(d.jsxs)("div",{className:rt.a.singIn,children:[Object(d.jsx)("h1",{className:rt.a.pageName,children:"Login"}),Object(d.jsx)(it,{onSubmit:function(e){n(function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return function(){var s=Object(ne.a)(te.a.mark((function s(r){return te.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,ue(e,t,n,a).then((function(e){if(0===e.resultCode)r(we());else{var t=e.messages.length>0?e.messages[0]:"Some error";r(Object(ye.a)("login",{_error:t}))}}));case 2:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}(e.email,e.password,e.rememberMe,e.captcha))},captchaUrl:e})]})})},ot={PROFILE:"/profile",DIALOGS:"/dialogs",CHAT:"/chat",DEVELOPERS:"/developers",LOGIN:"/login"},ut=function(e){return Object(d.jsxs)("div",{className:"app-wrapper",children:[Object(d.jsx)(Ae,{}),Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"app-wrapper-content",children:[Object(d.jsx)(c.b,{path:"/dialogs",render:function(){return Object(d.jsx)(Y,{})}}),Object(d.jsx)(c.b,{path:"/profile/:userId?",render:function(){return Object(d.jsx)(at,{})}}),Object(d.jsx)(c.b,{path:"/users",render:function(){return Object(d.jsx)(Ce,{})}}),Object(d.jsx)(c.b,{path:"/login",render:function(){return Object(d.jsx)(ct,{})}}),Object(d.jsx)(c.b,{path:"/news",render:function(){return Object(d.jsx)(p,{})}}),Object(d.jsx)(c.b,{path:"/music",render:function(){return Object(d.jsx)(h,{})}}),Object(d.jsx)(c.b,{path:"/setting",render:function(){return Object(d.jsx)(b,{})}}),Object(d.jsx)(c.b,{path:"/friends",render:function(){return Object(d.jsx)(f,{})}})]})]})},lt={friends:[{id:1,name:"Andrey"},{id:2,name:"Sasha"},{id:3,name:"Viktor"}],icon:[{id:1,img:"https://radiustheme.com/demo/html/cirkle/media/team/team_4.jpg"},{id:2,img:"https://radiustheme.com/demo/html/cirkle/media/team/team_1.jpg"},{id:3,img:"https://radiustheme.com/demo/html/cirkle/media/team/team_2.jpg"},{id:4,img:"https://radiustheme.com/demo/html/cirkle/media/team/team_3.jpg"}]},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt;return e},jt=n(127),pt=n(123),ht=Object(V.c)({profilePage:Ye,dialogsPage:x,sidebarReducer:dt,usersPageData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(O.a)(Object(O.a)({},e),{},{items:e.items.map((function(e){return e.id===t.userID?Object(O.a)(Object(O.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(O.a)(Object(O.a)({},e),{},{items:e.items.map((function(e){return e.id===t.userID?Object(O.a)(Object(O.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(O.a)(Object(O.a)({},e),{},{items:Object(m.a)(t.items)});case"SET-CURRENT-PAGE":return Object(O.a)(Object(O.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USER-COUNT":return Object(O.a)(Object(O.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE-IS-FETCHING":return Object(O.a)(Object(O.a)({},e),{},{isFetching:t.isFetching});case"SET-FOLLOWING-IN-PROGRESS":return Object(O.a)(Object(O.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(m.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},authData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/AUTH/SET-USER-DATA":case"SN/AUTH/GET-CAPTCHA-URL":return Object(O.a)(Object(O.a)({},e),t.payload);default:return e}},form:pt.a}),bt=Object(V.e)(ht,Object(V.a)(jt.a)),ft=bt;window.store=bt,i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(_.a,{store:ft,children:Object(d.jsx)(ut,{})})})}),document.getElementById("root"))},55:function(e,t,n){e.exports={formControl:"FormsControl_formControl__yaG1v",childrenWrapperStyle:"FormsControl_childrenWrapperStyle__52jtV",error:"FormsControl_error__30ipB"}},67:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3cd8Y",profileImage:"ProfileInfo_profileImage__V_r63",statusBlock:"ProfileInfo_statusBlock__3HLvc"}},89:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},90:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c"}},91:function(e,t,n){e.exports={item:"Post_item__ihtu9",active:"Post_active__1HCRI"}}},[[282,1,2]]]);
//# sourceMappingURL=main.1e0b0d6f.chunk.js.map