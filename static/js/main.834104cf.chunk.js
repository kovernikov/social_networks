(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},13:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activelink:"Navbar_activelink__2l0ss"}},21:function(e,t,n){e.exports={dialogs:"Dialog_dialogs__2nWS6",dialogsItems:"Dialog_dialogsItems__1Ylnr",active:"Dialog_active__24gaD",dialog:"Dialog_dialog__3bJrQ",messages:"Dialog_messages__19Bic",message:"Dialog_message__1YXnE"}},24:function(e,t,n){e.exports={body:"Users_body__3g2q8",pages:"Users_pages__2ZPtK",photo:"Users_photo__2hOPg",cont:"Users_cont__3AYXt",btn:"Users_btn__9AIH5",selectedPage:"Users_selectedPage__J63sh",imgs:"Users_imgs__2XvSo"}},245:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(52),r=n.n(i),c=(n(120),n(9)),o=(n(121),n(13)),u=n.n(o),l=n(10),d=n(0),j=function(e){return Object(d.jsxs)("nav",{className:u.a.nav,children:[Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(l.b,{to:"/profile",activeClassName:u.a.activelink,children:" Profile "})}),Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(l.b,{to:"/dialogs",activeClassName:u.a.activelink,children:" Messages "})}),Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(l.b,{to:"/users",activeClassName:u.a.activelink,children:" Users "})}),Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(l.b,{to:"/news",activeClassName:u.a.activelink,children:" News "})}),Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(l.b,{to:"/music",activeClassName:u.a.activelink,children:" Music "})}),Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(l.b,{to:"/setting",activeClassName:u.a.activelink,children:" Settings "})}),Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(l.b,{to:"/friends",activeClassName:u.a.activelink,children:" Friends "})})]})},b=function(){return Object(d.jsx)("div",{children:"NEWS"})},p=function(){return Object(d.jsx)("div",{children:"Music"})},h=function(){return Object(d.jsx)("div",{children:"Setting"})},f=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})},g=n(15),O=n(5),m="SEND-MESSAGE ",v={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Valera"},{id:6,name:"Viktor"}],messages:[{id:1,message:"Hello!!!"},{id:2,message:"Haw are you?"},{id:3,message:"This is my friend."},{id:4,message:"yo"},{id:5,message:"yo"}]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var n=t.newMessageBody;return Object(O.a)(Object(O.a)({},e),{},{messages:[].concat(Object(g.a)(e.messages),[{id:6,message:n}])});default:return e}},P=n(11),_=n(21),S=n.n(_),C=function(e){return Object(d.jsxs)("div",{className:S.a.dialog,children:[" ",e.message," "]})},k=function(e){var t="/dialogs/"+e.id;return Object(d.jsx)("div",{className:S.a.dialog+" "+S.a.active,children:Object(d.jsx)(l.b,{to:t,className:S.a.dialog,activeClassName:S.a.active,children:e.name})})},y=n(247),w=n(246),N=Object(w.a)({form:"dialogAddMessageForm"})((function(e){return Object(d.jsx)("form",{onSubmit:e.handleSubmit,children:Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(y.a,{component:"textarea",name:"newMessageBody",placeholder:"Enter your message"})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:" Sent "})})]})})})),T=function(e){var t=e.dialogsPage.dialogs.map((function(e){return Object(d.jsx)(k,{name:e.name,id:e.id},e.id)})),n=e.dialogsPage.messages.map((function(e){return Object(d.jsx)(C,{message:e.message},e.id)}));e.dialogsPage.newMessageBody;return Object(d.jsxs)("div",{className:S.a.dialogs,children:[Object(d.jsx)("div",{className:S.a.dialogsItems,children:t}),Object(d.jsx)("div",{className:S.a.messages,children:Object(d.jsx)("div",{children:n})}),Object(d.jsx)(N,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]})},U=n(115),D=function(e){return{isAuth:e.authData.isAuth}};function E(e){return Object(P.b)(D)((function(t){var n=t.isAuth,s=Object(U.a)(t,["isAuth"]);return n?Object(d.jsx)(e,Object(O.a)({},s)):Object(d.jsx)(c.a,{to:"/login"})}))}var I=n(8),A=Object(I.d)(Object(P.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:m,newMessageBody:e}}(t))}}})),E)(T),M=n(27),L=n(28),F=n(30),R=n(29),B=n(77),G=n.n(B),H=n(111),W=n(112),z=n.n(W).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"6587bf96-e19c-43d8-b7f7-8a779c2e9e9d"}}),J=function(e,t){return z.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},K=function(e){return z.post("follow/".concat(e)).then((function(e){return e.data.resultCode}))},q=function(e){return z.delete("follow/".concat(e)).then((function(e){return e.data.resultCode}))},V=function(){return console.warn("use authAPI"),X.getAuth()},Y=function(e){return console.warn("Obsolete method. Please profileAPI object."),Q.getProfile(e)},X={getAuth:function(){return z.get("auth/me").then((function(e){return e.data}))}},Q={getProfile:function(e){return z.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return z.get("profile/status/".concat(e))},updateStatus:function(e){return z.put("profile/status/",{status:e})}},Z={items:[],pageSize:9,totalUsersCount:10,currentPage:1,isFetching:!1,followingInProgress:[]},$=function(e){return{type:"FOLLOW",userID:e}},ee=function(e){return{type:"UNFOLLOW",userID:e}},te=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},ne=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},se=function(e,t){return{type:"SET-FOLLOWING-IN-PROGRESS",isFetching:e,userId:t}},ae=n(24),ie=n.n(ae),re=n.p+"static/media/user.a603a401.png",ce=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=1;s<=t;s++)n.push(s);var a=[];if(1===e.currentPage)(a=n.filter((function(e){return e<10}))).push(n.length);else if(e.currentPage===n.length)a.push(1),a=[].concat(Object(g.a)(a),Object(g.a)(n.filter((function(t){return t>e.currentPage-9}))));else if(e.currentPage>n.length-9){a.push(1);var i=e.currentPage-4,r=e.currentPage+5;(a=[].concat(Object(g.a)(a),Object(g.a)(n.filter((function(e){return e>i&&e<r}))))).push(n.length)}else{a.push(1);var c=e.currentPage-4,o=e.currentPage+5;a=[].concat(Object(g.a)(a),Object(g.a)(n.filter((function(e){return e>c&&e<o}))))}return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:ie.a.pages,children:n.map((function(t){return Object(d.jsx)("span",{className:e.currentPage===t?ie.a.selectedPage:"",onClick:function(n){e.onPageChange(t)},children:t})}))}),e.items.map((function(t){return Object(d.jsxs)("div",{className:ie.a.body,children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(l.b,{to:"/profile/"+t.id,children:Object(d.jsx)("img",{src:null!=t.photos.small?t.photos.small:re,alt:"avatar",className:ie.a.photo})})}),Object(d.jsx)("div",{children:t.followed?Object(d.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollowUser(t.id)},className:ie.a.btn,children:"Unfollow"}):Object(d.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.followUser(t.id)},className:ie.a.btn,children:"Follow"})})]}),Object(d.jsxs)("span",{className:ie.a.cont,children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:t.name}),Object(d.jsx)("div",{children:t.uniqueUrlName})]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:"u.location.country"}),Object(d.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))]})},oe=n.p+"static/media/preloader.464a6fda.gif",ue=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:oe,className:ie.a.imgs})})},le=function(e){Object(F.a)(n,e);var t=Object(R.a)(n);function n(){var e;Object(M.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChange=function(t){e.props.getUsersThunkCreator(t,e.props.usersPageData.pageSize)},e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.usersPageData.currentPage,this.props.usersPageData.pageSize)}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[this.props.usersPageData.isFetching?Object(d.jsx)(ue,{}):null,Object(d.jsx)(ce,{followUser:this.props.followUserThunkCreator,unfollowUser:this.props.unfollowUserThunkCreator,items:this.props.usersPageData.items,followingInProgress:this.props.usersPageData.followingInProgress,onPageChange:this.onPageChange,totalUsersCount:this.props.usersPageData.totalUsersCount,pageSize:this.props.usersPageData.pageSize,currentPage:this.props.usersPageData.currentPage})]})}}]),n}(a.a.Component),de=Object(I.d)(E,Object(P.b)((function(e){return{usersPageData:e.usersPageData}}),{followUser:$,unfollowUser:ee,setCurrentPage:te,getUsersThunkCreator:function(e,t){return function(){var n=Object(H.a)(G.a.mark((function n(s){var a;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(ne(!0)),s(te(e)),n.next=4,J(e,t);case 4:a=n.sent,s(ne(!1)),s({type:"SET-USERS",items:a.items}),s({type:"SET-TOTAL-USER-COUNT",count:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},followUserThunkCreator:function(e){return function(t){t(se(!0,e)),K(e).then((function(n){0===n&&t($(e)),t(se(!1,e))}))}},unfollowUserThunkCreator:function(e){return function(t){t(se(!0,e)),q(e).then((function(n){0===n&&t(ee(e)),t(se(!1,e))}))}}}))(le),je={data:{id:NaN,login:"",email:""},isAuth:!1,messages:[],fieldsErrors:[],resultCode:0},be=n(78),pe=n.n(be),he=function(e){return Object(d.jsxs)("header",{className:pe.a.header,children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-I86af1RynC0u9KgHKUD-H6tCwT_Cf_P2Q&usqp=CAU"})}),Object(d.jsx)("div",{className:pe.a.loginBlock,children:e.isAuth?e.login:Object(d.jsx)(l.b,{to:"/login",children:"Login"})})]})};var fe=function(e){Object(F.a)(n,e);var t=Object(R.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"componentDidMount",value:function(){V(),this.props.getAuthUserData()}},{key:"render",value:function(){return Object(d.jsx)(he,{isAuth:this.props.isAuth,login:this.props.login})}}]),n}(a.a.Component),ge=Object(P.b)((function(e){return{isAuth:e.authData.isAuth,login:e.authData.data.login}}),{getAuthUserData:function(){return function(e){V().then((function(t){if(0===t.resultCode){var n=t.data,s=n.id,a=n.login,i=n.email;e(function(e,t,n){return{type:"SET-USER-DATA",data:{id:e,login:t,email:n}}}(s,a,i))}}))}}})(fe),Oe=n(113),me=n.n(Oe),ve=n(54),xe=n.n(ve),Pe=function(e){Object(F.a)(n,e);var t=Object(R.a)(n);function n(){var e;Object(M.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(L.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(d.jsx)("div",{children:this.state.editMode?Object(d.jsx)("input",{value:this.state.status,onChange:this.onStatusChange,autoFocus:!0,onBlur:this.deactivateEditMode}):Object(d.jsx)("span",{className:xe.a.statusBlock,onDoubleClick:this.activateEditMode,children:this.props.status})})}}]),n}(a.a.Component),_e=function(e){var t,n,s,a,i,r,c,o,u,l,j,b;return e.profile?Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:xe.a.descriptionBlock,children:[Object(d.jsx)("img",{src:(null===(t=e.profile)||void 0===t?void 0:t.photos.large)?e.profile.photos.large:re}),Object(d.jsx)(Pe,{status:e.status,updateStatus:e.updateStatus}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{children:null===(n=e.profile)||void 0===n?void 0:n.fullName})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:(null===(s=e.profile)||void 0===s?void 0:s.lookingForAJob)?"Looking for a job -> ":null}),Object(d.jsx)("span",{children:null===(a=e.profile)||void 0===a?void 0:a.lookingForAJobDescription})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[null===(i=e.profile)||void 0===i?void 0:i.contacts.facebook," "]}),Object(d.jsxs)("span",{children:[null===(r=e.profile)||void 0===r?void 0:r.contacts.github," "]}),Object(d.jsxs)("span",{children:[null===(c=e.profile)||void 0===c?void 0:c.contacts.vk," "]}),Object(d.jsxs)("span",{children:[null===(o=e.profile)||void 0===o?void 0:o.contacts.instagram," "]}),Object(d.jsxs)("span",{children:[null===(u=e.profile)||void 0===u?void 0:u.contacts.twitter," "]}),Object(d.jsxs)("span",{children:[null===(l=e.profile)||void 0===l?void 0:l.contacts.website," "]}),Object(d.jsxs)("span",{children:[null===(j=e.profile)||void 0===j?void 0:j.contacts.youtube," "]}),Object(d.jsxs)("span",{children:[null===(b=e.profile)||void 0===b?void 0:b.contacts.mainLink," "]})]})]})}):Object(d.jsx)(ue,{})},Se=n(79),Ce=n.n(Se),ke=n(80),ye=n.n(ke),we=function(e){return Object(d.jsxs)("div",{className:"".concat(ye.a.item," ").concat(ye.a.active),children:[Object(d.jsx)("img",{src:"https://i.guim.co.uk/img/media/bf7e98bd289d189e5b86d3f406f740368c663a6a/85_0_2544_1527/master/2544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=98cd2e37e0df5d552473c329d88349ee"}),e.message,Object(d.jsx)("div",{children:Object(d.jsxs)("span",{children:["like: ",e.likesCount]})})]})},Ne={postsData:[{id:1,message:"Hi, how are you",likesCount:12},{id:2,message:"It's my first post",likesCount:15},{id:3,message:"yo yo yo",likesCount:17}],profile:null,status:""},Te=function(e){return{type:"SET-STATUS",status:e}},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(O.a)(Object(O.a)({},e),{},{postsData:[n].concat(Object(g.a)(e.postsData)),newPostText:""});case"SET-USER-PROFILE":return Object(O.a)(Object(O.a)({},e),{},{profile:t.profileInfo});case"SET-STATUS":return Object(O.a)(Object(O.a)({},e),{},{status:t.status});default:return e}},De=Object(w.a)({form:"postAddMyPostForm"})((function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(y.a,{component:"textarea",name:"newPostText",placeholder:"Add posts"})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Add post"})})]})})),Ee=Object(P.b)((function(e){return{postsData:e.profilePage.postsData,profile:e.profilePage.profile}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}}))((function(e){var t=e.postsData.map((function(e){return Object(d.jsx)(we,{message:e.message,likesCount:e.likesCount})}));return Object(d.jsxs)("div",{className:Ce.a.postsBlock,children:[Object(d.jsx)("h3",{children:"My posts"}),Object(d.jsx)("div",{children:Object(d.jsx)(De,{onSubmit:function(t){e.addPost(t.newPostText)}})}),Object(d.jsx)("div",{className:Ce.a.posts,children:t})]})}));var Ie=function(e){return Object(d.jsxs)("div",{className:me.a.content,children:[Object(d.jsx)(_e,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(d.jsx)(Ee,{})]})},Ae=function(e){Object(F.a)(n,e);var t=Object(R.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"componentDidMount",value:function(){this.props.getUserProfileTC(this.props.match.params.userId),this.props.getStatusTC(this.props.match.params.userId)}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)(Ie,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusTC})})}}]),n}(a.a.Component),Me=Object(P.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUserProfileTC:function(e){return function(t){Y(e||"17771").then((function(e){t({type:"SET-USER-PROFILE",profileInfo:e})}))}},getStatusTC:function(e){return function(t){var n;n=e||"17771",Q.getStatus(n).then((function(e){t(Te(e.data))}))}},updateStatusTC:function(e){return function(t){Q.updateStatus(e).then((function(n){0===n.data.resultCode&&t(Te(e))}))}}}),Le=Object(I.d)(Me,c.f)(Ae),Fe=Object(w.a)({form:"login"})((function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(y.a,{placeholder:"Login",name:"login",component:"input"})}),Object(d.jsx)("div",{children:Object(d.jsx)(y.a,{placeholder:"Password",name:"password",component:"input"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)(y.a,{type:"checkbox",name:"rememberMe",component:"input"})," remember me"]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Login"})})]})})),Re=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"LOGIN"}),Object(d.jsx)(Fe,{onSubmit:function(e){console.log(e)}})]})},Be=function(e){return Object(d.jsxs)("div",{className:"app-wrapper",children:[Object(d.jsx)(ge,{}),Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"app-wrapper-content",children:[Object(d.jsx)(c.b,{path:"/dialogs",render:function(){return Object(d.jsx)(A,{})}}),Object(d.jsx)(c.b,{path:"/profile/:userId?",render:function(){return Object(d.jsx)(Le,{})}}),Object(d.jsx)(c.b,{path:"/users",render:function(){return Object(d.jsx)(de,{})}}),Object(d.jsx)(c.b,{path:"/login",render:function(){return Object(d.jsx)(Re,{})}}),Object(d.jsx)(c.b,{path:"/news",render:function(){return Object(d.jsx)(b,{})}}),Object(d.jsx)(c.b,{path:"/music",render:function(){return Object(d.jsx)(p,{})}}),Object(d.jsx)(c.b,{path:"/setting",render:function(){return Object(d.jsx)(h,{})}}),Object(d.jsx)(c.b,{path:"/friends",render:function(){return Object(d.jsx)(f,{})}})]})]})},Ge={friends:[{id:1,name:"Andrey"},{id:2,name:"Sasha"},{id:3,name:"Viktor"}],icon:[{id:1,img:"https://radiustheme.com/demo/html/cirkle/media/team/team_4.jpg"},{id:2,img:"https://radiustheme.com/demo/html/cirkle/media/team/team_1.jpg"},{id:3,img:"https://radiustheme.com/demo/html/cirkle/media/team/team_2.jpg"},{id:4,img:"https://radiustheme.com/demo/html/cirkle/media/team/team_3.jpg"}]},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge;return e},We=n(114),ze=n(248),Je=Object(I.c)({profilePage:Ue,dialogsPage:x,sidebarReducer:He,usersPageData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(O.a)(Object(O.a)({},e),{},{items:e.items.map((function(e){return e.id===t.userID?Object(O.a)(Object(O.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(O.a)(Object(O.a)({},e),{},{items:e.items.map((function(e){return e.id===t.userID?Object(O.a)(Object(O.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(O.a)(Object(O.a)({},e),{},{items:Object(g.a)(t.items)});case"SET-CURRENT-PAGE":return Object(O.a)(Object(O.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USER-COUNT":return Object(O.a)(Object(O.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE-IS-FETCHING":return Object(O.a)(Object(O.a)({},e),{},{isFetching:t.isFetching});case"SET-FOLLOWING-IN-PROGRESS":return Object(O.a)(Object(O.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(g.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},authData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(O.a)(Object(O.a)({},e),{},{data:Object(O.a)({},t.data),isAuth:!0});default:return e}},form:ze.a}),Ke=Object(I.e)(Je,Object(I.a)(We.a)),qe=Ke;window.store=Ke,r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(P.a,{store:qe,children:Object(d.jsx)(Be,{})})})}),document.getElementById("root"))},54:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3cd8Y",profileImage:"ProfileInfo_profileImage__V_r63",statusBlock:"ProfileInfo_statusBlock__3HLvc"}},78:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},79:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c"}},80:function(e,t,n){e.exports={item:"Post_item__ihtu9",active:"Post_active__1HCRI"}}},[[245,1,2]]]);
//# sourceMappingURL=main.834104cf.chunk.js.map