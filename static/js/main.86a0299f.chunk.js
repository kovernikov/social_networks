(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,s){e.exports={dialogs:"Dialog_dialogs__2nWS6",dialogsItems:"Dialog_dialogsItems__1Ylnr",active:"Dialog_active__24gaD",dialog:"Dialog_dialog__3bJrQ",messages:"Dialog_messages__19Bic",message:"Dialog_message__1YXnE"}},12:function(e,t,s){e.exports={body:"Users_body__3g2q8",pages:"Users_pages__2ZPtK",photo:"Users_photo__2hOPg",cont:"Users_cont__3AYXt",btn:"Users_btn__9AIH5",selectedPage:"Users_selectedPage__J63sh",imgs:"Users_imgs__2XvSo"}},28:function(e,t,s){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3cd8Y",profileImage:"ProfileInfo_profileImage__V_r63"}},29:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c"}},30:function(e,t,s){e.exports={item:"Post_item__ihtu9",active:"Post_active__1HCRI"}},31:function(e,t,s){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},42:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},5:function(e,t,s){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activelink:"Navbar_activelink__2l0ss"}},75:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(19),r=s.n(i),c=(s(48),s(3)),o=(s(49),s(5)),l=s.n(o),u=s(4),d=s(0),j=function(e){return Object(d.jsxs)("nav",{className:l.a.nav,children:[Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:"/profile",activeClassName:l.a.activelink,children:" Profile "})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:"/dialogs",activeClassName:l.a.activelink,children:" Messages "})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:"/users",activeClassName:l.a.activelink,children:" Users "})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:"/news",activeClassName:l.a.activelink,children:" News "})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:"/music",activeClassName:l.a.activelink,children:" Music "})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:"/setting",activeClassName:l.a.activelink,children:" Settings "})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:"/friends",activeClassName:l.a.activelink,children:" Friends "})})]})},p=function(){return Object(d.jsx)("div",{children:"NEWS"})},h=function(){return Object(d.jsx)("div",{children:"Music"})},b=function(){return Object(d.jsx)("div",{children:"Setting"})},g=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})},f=s(7),m=s(2),O="UPDATE-NEW-MESSAGE-BODY",v="SEND-MESSAGE ",x={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Valera"},{id:6,name:"Viktor"}],messages:[{id:1,message:"Hello!!!"},{id:2,message:"Haw are you?"},{id:3,message:"This is my friend."},{id:4,message:"yo"},{id:5,message:"yo"}],newMessageBody:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(m.a)(Object(m.a)({},e),{},{newMessageBody:t.body});case v:var s=e.newMessageBody;return Object(m.a)(Object(m.a)({},e),{},{newMessageBody:"",messages:[].concat(Object(f.a)(e.messages),[{id:6,message:s}])});default:return e}},_=s(9),N=s(11),w=s.n(N),y=function(e){return Object(d.jsxs)("div",{className:w.a.dialog,children:[" ",e.message," "]})},k=function(e){var t="/dialogs/"+e.id;return Object(d.jsx)("div",{className:w.a.dialog+" "+w.a.active,children:Object(d.jsx)(u.b,{to:t,className:w.a.dialog,activeClassName:w.a.active,children:e.name})})},C=function(e){var t=e.dialogsPage.dialogs.map((function(e){return Object(d.jsx)(k,{name:e.name,id:e.id},e.id)})),s=e.dialogsPage.messages.map((function(e){return Object(d.jsx)(y,{message:e.message},e.id)})),n=e.dialogsPage.newMessageBody;return Object(d.jsxs)("div",{className:w.a.dialogs,children:[Object(d.jsx)("div",{className:w.a.dialogsItems,children:t}),Object(d.jsxs)("div",{className:w.a.messages,children:[Object(d.jsx)("div",{children:s}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("textarea",{value:n,onChange:function(t){var s=t.target.value;e.updateNewMessageBody(s)},placeholder:"Enter your message"})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){e.sendMessage()},children:" Sent"})})]})]})]})},T=Object(_.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageBody:function(t){e(function(e){return{type:O,body:e}}(t))},sendMessage:function(){e({type:v})}}}))(C),S=s(14),D=s(15),E=s(17),U=s(16),I=s(27),A=s.n(I),R=s(41),M=s(21),F=s.n(M),L=F.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"436269e6-3a0e-4ec4-988b-c3bac73f2390"}}),B=function(e,t){return L.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},G=function(e){return L.post("follow/".concat(e)).then((function(e){return e.data.resultCode}))},H=function(e){return L.delete("follow/".concat(e)).then((function(e){return e.data.resultCode}))},W=function(){return L.get("auth/me").then((function(e){return e.data}))},z={items:[],pageSize:7,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},J=function(e){return{type:"FOLLOW",userID:e}},K=function(e){return{type:"UNFOLLOW",userID:e}},Y=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},q=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},V=function(e,t){return{type:"SET-FOLLOWING-IN-PROGRESS",isFetching:e,userId:t}},X=s(12),Q=s.n(X),Z=s.p+"static/media/user.a603a401.png",$=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],n=1;n<=t;n++)s.push(n);var a=[];if(1===e.currentPage)(a=s.filter((function(e){return e<10}))).push(s.length);else if(e.currentPage===s.length)a.push(1),a=[].concat(Object(f.a)(a),Object(f.a)(s.filter((function(t){return t>e.currentPage-9}))));else if(e.currentPage>s.length-9){a.push(1);var i=e.currentPage-4,r=e.currentPage+5;(a=[].concat(Object(f.a)(a),Object(f.a)(s.filter((function(e){return e>i&&e<r}))))).push(s.length)}else{a.push(1);var c=e.currentPage-4,o=e.currentPage+5;a=[].concat(Object(f.a)(a),Object(f.a)(s.filter((function(e){return e>c&&e<o}))))}return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:Q.a.pages,children:s.map((function(t){return Object(d.jsx)("span",{className:e.currentPage===t?Q.a.selectedPage:"",onClick:function(s){e.onPageChange(t)},children:t})}))}),e.items.map((function(t){return Object(d.jsxs)("div",{className:Q.a.body,children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(u.b,{to:"/profile/"+t.id,children:Object(d.jsx)("img",{src:null!=t.photos.small?t.photos.small:Z,alt:"avatar",className:Q.a.photo})})}),Object(d.jsx)("div",{children:t.followed?Object(d.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollowUser(t.id)},className:Q.a.btn,children:"Unfollow"}):Object(d.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.followUser(t.id)},className:Q.a.btn,children:"Follow"})})]}),Object(d.jsxs)("span",{className:Q.a.cont,children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:t.name}),Object(d.jsx)("div",{children:t.uniqueUrlName})]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:"u.location.country"}),Object(d.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))]})},ee=s.p+"static/media/preloader.464a6fda.gif",te=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:ee,className:Q.a.imgs})})},se=function(e){Object(E.a)(s,e);var t=Object(U.a)(s);function s(){var e;Object(S.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChange=function(t){e.props.getUsersThunkCreator(t,e.props.usersPageData.pageSize)},e}return Object(D.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.usersPageData.currentPage,this.props.usersPageData.pageSize)}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[this.props.usersPageData.isFetching?Object(d.jsx)(te,{}):null,Object(d.jsx)($,{followUser:this.props.followUserThunkCreator,unfollowUser:this.props.unfollowUserThunkCreator,items:this.props.usersPageData.items,followingInProgress:this.props.usersPageData.followingInProgress,onPageChange:this.onPageChange,totalUsersCount:this.props.usersPageData.totalUsersCount,pageSize:this.props.usersPageData.pageSize,currentPage:this.props.usersPageData.currentPage})]})}}]),s}(a.a.Component),ne=Object(_.b)((function(e){return{usersPageData:e.usersPageData}}),{followUser:J,unfollowUser:K,setCurrentPage:Y,getUsersThunkCreator:function(e,t){return function(){var s=Object(R.a)(A.a.mark((function s(n){var a;return A.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n(q(!0)),n(Y(e)),s.next=4,B(e,t);case 4:a=s.sent,n(q(!1)),n({type:"SET-USERS",items:a.items}),n({type:"SET-TOTAL-USER-COUNT",count:a.totalCount});case 8:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()},followUserThunkCreator:function(e){return function(t){t(V(!0,e)),G(e).then((function(s){0===s&&t(J(e)),t(V(!1,e))}))}},unfollowUserThunkCreator:function(e){return function(t){t(V(!0,e)),H(e).then((function(s){0===s&&t(K(e)),t(V(!1,e))}))}}})(se),ae=s(42),ie=s.n(ae),re=s(28),ce=s.n(re),oe=function(e){var t,s,n,a,i,r,c,o,l,u,j,p;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:ce.a.profileImage,src:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"})}),Object(d.jsxs)("div",{className:ce.a.descriptionBlock,children:[Object(d.jsx)("img",{src:(null===(t=e.profile)||void 0===t?void 0:t.photos.large)?e.profile.photos.large:Z}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{children:null===(s=e.profile)||void 0===s?void 0:s.fullName})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:(null===(n=e.profile)||void 0===n?void 0:n.lookingForAJob)?"Looking for a job -> ":null}),Object(d.jsx)("span",{children:null===(a=e.profile)||void 0===a?void 0:a.lookingForAJobDescription})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[null===(i=e.profile)||void 0===i?void 0:i.contacts.facebook," "]}),Object(d.jsxs)("span",{children:[null===(r=e.profile)||void 0===r?void 0:r.contacts.github," "]}),Object(d.jsxs)("span",{children:[null===(c=e.profile)||void 0===c?void 0:c.contacts.vk," "]}),Object(d.jsxs)("span",{children:[null===(o=e.profile)||void 0===o?void 0:o.contacts.instagram," "]}),Object(d.jsxs)("span",{children:[null===(l=e.profile)||void 0===l?void 0:l.contacts.twitter," "]}),Object(d.jsxs)("span",{children:[null===(u=e.profile)||void 0===u?void 0:u.contacts.website," "]}),Object(d.jsxs)("span",{children:[null===(j=e.profile)||void 0===j?void 0:j.contacts.youtube," "]}),Object(d.jsxs)("span",{children:[null===(p=e.profile)||void 0===p?void 0:p.contacts.mainLink," "]})]})]})]})},le=s(29),ue=s.n(le),de=s(30),je=s.n(de),pe=function(e){return Object(d.jsxs)("div",{className:"".concat(je.a.item," ").concat(je.a.active),children:[Object(d.jsx)("img",{src:"https://i.guim.co.uk/img/media/bf7e98bd289d189e5b86d3f406f740368c663a6a/85_0_2544_1527/master/2544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=98cd2e37e0df5d552473c329d88349ee"}),e.message,Object(d.jsx)("div",{children:Object(d.jsxs)("span",{children:["like: ",e.likesCount]})})]})},he={postsData:[{id:1,message:"Hi, how are you",likesCount:12},{id:2,message:"It's my first post",likesCount:15},{id:3,message:"yo yo yo",likesCount:17}],newPostText:"it-kamasutra.com",profile:null},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-NEW-POST-TEXT":return Object(m.a)(Object(m.a)({},e),{},{newPostText:t.newText});case"ADD-POST":var s={id:5,message:e.newPostText,likesCount:0};return""!==s.message.trim()?Object(m.a)(Object(m.a)({},e),{},{postsData:[s].concat(Object(f.a)(e.postsData)),newPostText:""}):e;case"SET-USER-PROFILE":return Object(m.a)(Object(m.a)({},e),{},{profile:t.profileInfo});default:return e}},ge=Object(_.b)((function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText,profile:e.profilePage.profile}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))},onPostChange:function(t){e({type:"UPDATE-NEW-POST-TEXT",newText:t})}}}))((function(e){var t=e.postsData.map((function(e){return Object(d.jsx)(pe,{message:e.message,likesCount:e.likesCount})})),s=a.a.createRef();return Object(d.jsxs)("div",{className:ue.a.postsBlock,children:[e.postsData[1].message,Object(d.jsx)("h3",{children:"My posts"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("textarea",{onChange:function(t){var s;e.onPostChange(null===(s=t.currentTarget)||void 0===s?void 0:s.value)},ref:s,value:e.newPostText})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){s.current&&e.addPost("")},children:"Add post"})})]}),Object(d.jsx)("div",{className:ue.a.posts,children:t})]})})),fe=function(e){return Object(d.jsxs)("div",{className:ie.a.content,children:[Object(d.jsx)(oe,{profile:e.profile}),Object(d.jsx)(ge,{})]})},me=function(e){Object(E.a)(s,e);var t=Object(U.a)(s);function s(){return Object(S.a)(this,s),t.apply(this,arguments)}return Object(D.a)(s,[{key:"componentDidMount",value:function(){var e,t=this;e=this.props.match.params.userId?this.props.match.params.userId:"2",F.a.get("https://social-network.samuraijs.com/api/1.0/profile/".concat(e)).then((function(e){t.props.setUserProfile(e.data)}))}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)(fe,{profile:this.props.profile})})}}]),s}(a.a.Component),Oe=Object(_.b)((function(e){return e.profilePage}),{setUserProfile:function(e){return{type:"SET-USER-PROFILE",profileInfo:e}}})(Object(c.e)(me)),ve={data:{id:NaN,login:"",email:""},isAuth:!1,messages:[],fieldsErrors:[],resultCode:0},xe=s(31),Pe=s.n(xe),_e=function(e){return Object(d.jsxs)("header",{className:Pe.a.header,children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-I86af1RynC0u9KgHKUD-H6tCwT_Cf_P2Q&usqp=CAU"})}),Object(d.jsx)("div",{className:Pe.a.loginBlock,children:e.isAuth?e.login:Object(d.jsx)(u.b,{to:"/login",children:"Login"})})]})};var Ne=function(e){Object(E.a)(s,e);var t=Object(U.a)(s);function s(){return Object(S.a)(this,s),t.apply(this,arguments)}return Object(D.a)(s,[{key:"componentDidMount",value:function(){var e=this;W().then((function(t){if(0===t.resultCode){var s=t.data,n=s.id,a=s.login,i=s.email;e.props.setAuthUserData(n,a,i)}}))}},{key:"render",value:function(){return Object(d.jsx)(_e,{isAuth:this.props.isAuth,login:this.props.login})}}]),s}(a.a.Component),we=Object(_.b)((function(e){return{isAuth:e.authData.isAuth,login:e.authData.data.login}}),{setAuthUserData:function(e,t,s){return{type:"SET-USER-DATA",data:{id:e,login:t,email:s}}}})(Ne),ye=function(e){return Object(d.jsxs)("div",{className:"app-wrapper",children:[Object(d.jsx)(we,{}),Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"app-wrapper-content",children:[Object(d.jsx)(c.a,{path:"/dialogs",render:function(){return Object(d.jsx)(T,{})}}),Object(d.jsx)(c.a,{path:"/profile/:userId?",render:function(){return Object(d.jsx)(Oe,{})}}),Object(d.jsx)(c.a,{path:"/users",render:function(){return Object(d.jsx)(ne,{})}}),Object(d.jsx)(c.a,{path:"/news",render:function(){return Object(d.jsx)(p,{})}}),Object(d.jsx)(c.a,{path:"/music",render:function(){return Object(d.jsx)(h,{})}}),Object(d.jsx)(c.a,{path:"/setting",render:function(){return Object(d.jsx)(b,{})}}),Object(d.jsx)(c.a,{path:"/friends",render:function(){return Object(d.jsx)(g,{})}})]})]})},ke=s(22),Ce={friends:[{id:1,name:"Andrey"},{id:2,name:"Sasha"},{id:3,name:"Viktor"}],icon:[{id:1,img:"https://radiustheme.com/demo/html/cirkle/media/team/team_4.jpg"},{id:2,img:"https://radiustheme.com/demo/html/cirkle/media/team/team_1.jpg"},{id:3,img:"https://radiustheme.com/demo/html/cirkle/media/team/team_2.jpg"},{id:4,img:"https://radiustheme.com/demo/html/cirkle/media/team/team_3.jpg"}]},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce;return e},Se=s(43),De=Object(ke.b)({profilePage:be,dialogsPage:P,sidebarReducer:Te,usersPageData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(m.a)(Object(m.a)({},e),{},{items:e.items.map((function(e){return e.id===t.userID?Object(m.a)(Object(m.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(m.a)(Object(m.a)({},e),{},{items:e.items.map((function(e){return e.id===t.userID?Object(m.a)(Object(m.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(m.a)(Object(m.a)({},e),{},{items:t.items});case"SET-CURRENT-PAGE":return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USER-COUNT":return Object(m.a)(Object(m.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE-IS-FETCHING":return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.isFetching});case"SET-FOLLOWING-IN-PROGRESS":return Object(m.a)(Object(m.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(f.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},authData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(m.a)(Object(m.a)({},e),{},{data:Object(m.a)({},t.data),isAuth:!0});default:return e}}}),Ee=Object(ke.c)(De,Object(ke.a)(Se.a)),Ue=Ee;window.store=Ee,r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(u.a,{children:Object(d.jsx)(_.a,{store:Ue,children:Object(d.jsx)(ye,{})})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.86a0299f.chunk.js.map