(this["webpackJsonpprojet-film"]=this["webpackJsonpprojet-film"]||[]).push([[0],{139:function(e,t){},152:function(e,t){},194:function(e,t,a){e.exports=a(364)},207:function(e,t,a){},364:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"handeleDislike",(function(){return C})),a.d(n,"filterList",(function(){return S})),a.d(n,"onChangeDisplay",(function(){return _})),a.d(n,"changePage",(function(){return B}));var i={};a.r(i),a.d(i,"handleClick",(function(){return q})),a.d(i,"searchFilm",(function(){return G}));var l={};a.r(l),a.d(l,"handleClickBar",(function(){return W})),a.d(l,"addList",(function(){return H})),a.d(l,"deleteList",(function(){return Y})),a.d(l,"updateList",(function(){return Z}));var r=a(0),c=a.n(r),o=a(4),s=a.n(o),u=a(29),m=a(30),g=a(34),p=a(36),d=a(33),f=a(71),h=a(56),E=a(72),y=a(165),v="sideBar/add_list",b=a(53),j=[{title:"Spectre (VF)",imgUrl:"https://i.ytimg.com/vi/EDC4q5Bw2QE/movieposter.jpg",catalogue:"action"},{title:"Jason",imgUrl:"https://i.ytimg.com/vi/GRW2UMSYX4o/movieposter.jpg",catalogue:"action"},{title:"Contagion",imgUrl:"https://i.ytimg.com/vi/wMDoUFajq1I/movieposter.jpg",catalogue:"amour"},{title:"La vie",imgUrl:"https://i.ytimg.com/vi/04Cx-i2k-8M/movieposter.jpg",catalogue:"famille"},{title:"ROBO",imgUrl:"https://i.ytimg.com/vi/W4jt3Gp98jI/movieposter.jpg",catalogue:"faction"},{title:"JOKER",imgUrl:"https://i.ytimg.com/vi/UvuS3Q0yzLk/movieposter.jpg",catalogue:"horrible"},{title:"Les Miserables",imgUrl:"https://i.ytimg.com/vi/4NVTKmoQ98E/movieposter.jpg",catalogue:"action"},{title:"Inseparable",imgUrl:"https://i.ytimg.com/vi/aIVXeqgxyJA/movieposter.jpg",catalogue:"faction"},{title:"Car-Quatre roues",imgUrl:"https://i.ytimg.com/vi/_cfMFdsJytA/movieposter.jpg",catalogue:"cartoon"},{title:"Mister Babadook",imgUrl:"https://i.ytimg.com/vi/cWnER_z7pwU/movieposter.jpg",catalogue:"horrible"},{title:"La Reine de Neiges",imgUrl:"https://i.ytimg.com/vi/5rIxR2KUhEg/movieposter.jpg",catalogue:"cartoon"},{title:"Fast & Furious",imgUrl:"https://i.ytimg.com/vi/m0bGgPiCs-k/movieposter.jpg",catalogue:"action"},{title:"FAHIM",imgUrl:"https://i.ytimg.com/vi/djiIoX3O_-c/movieposter.jpg",catalogue:"famille"},{title:"Emma",imgUrl:"https://i.ytimg.com/vi/E42CvUIcjtA/movieposter.jpg",catalogue:"comedy"}],k=Object(b.fromJS)({totalList:j,dislike:[],changedList:j,chosenTag:["all"],display:"4",currentPage:1}),L=function(e,t){if(t.length>0){return t.filter((function(t){return e.indexOf(t.catalogue)<0}))}return t},O=function(e,t){var a=t.filter((function(t){return e.indexOf(t.catalogue)>=0}));return console.log("after filter"+a),a},x=function(e,t){return t.filter((function(t){return t.title.toLowerCase().indexOf(e.toLowerCase())>-1}))},C=function(e){return{type:"list/handle_dislike",catalogue:e}},S=function(){return{type:"list/filter_list"}},_=function(e){return{type:"list/on_change_display",displayNumber:e}},B=function(e){return{type:"list/change_page",pageNumber:e}},I=Object(y.combineReducers)({list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"list/handle_dislike":return e.set("dislike",e.get("dislike").push(t.catalogue));case"list/filter_list":var a=L(e.get("dislike").toJS(),e.get("changedList").toJS());return e.set("changedList",Object(b.fromJS)(a));case"list/on_change_display":return e.set("display",t.displayNumber);case"list/change_page":return e.set("currentPage",t.pageNumber);case"header/search_film":return e.set("changedList",Object(b.fromJS)(x(t.value,e.get("totalList").toJS())));case"header/handle_click":if("all"===t.item)return e.set("changedList",e.get("totalList"));var n=O([t.item],e.get("totalList").toJS());return e.set("changedList",Object(b.fromJS)(n));case v:return e.set("chosenTag",e.get("chosenTag").push(t.item));case"sideBar/delete_list":var i=e.get("chosenTag").indexOf(t.item);return e.set("chosenTag",e.get("chosenTag").splice(i,1));case"sideBar/update_list":var l=e.get("chosenTag").toJS();if(0===l.length)return console.log(1),e.set("changedList",[]);if(-1!==l.indexOf("all"))return e.set("changedList",e.get("totalList"));console.log(3);var r=O(l,e.get("totalList").toJS());return e.set("changedList",Object(b.fromJS)(r));default:return e}}}),U=a(166),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.c,J=Object(E.d)(I,w(Object(E.a)(U.a))),T=(a(207),a(75)),P=a(27),N=a(370),D=a(365),M=a(375),R=a(376),F=a(63),z=a(369),V=a(371),q=(a(139),function(e){return{type:"header/handle_click",item:e}}),G=function(e){return{type:"header/search_film",value:e}},K=N.a.Search,X=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.totalList,n=t.handleClick,i=function(e){var t=["all"];return e.forEach((function(e){t.indexOf(e.catalogue)<0&&t.push(e.catalogue)})),t}(a.toJS()),l=c.a.createElement(z.a,null,i.map((function(e){return c.a.createElement(z.a.Item,{key:e,onClick:function(){n(e)}},c.a.createElement("a",{href:"#"},e))})));return c.a.createElement(T.a,{align:"middle"},c.a.createElement(P.a,{md:{span:4},xs:{span:0}},c.a.createElement(M.a,{style:{fontSize:"20px",paddingLeft:"10px"}})),c.a.createElement(P.a,{xs:{span:4},md:{span:0}},c.a.createElement(V.a,{overlay:l,trigger:["click"]},c.a.createElement("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},c.a.createElement(M.a,{style:{fontSize:"20px",paddingLeft:"10px"}})))),c.a.createElement(P.a,{xs:{span:12},lg:{span:8}},c.a.createElement(K,{placeholder:"input search text",onSearch:function(t){return e.props.searchFilm(t)},enterButton:!0})),c.a.createElement(P.a,{xs:{span:4,offset:4},lg:{span:4,offset:8},xl:{span:0}},c.a.createElement(F.a,{type:"primary",style:{marginRight:"5px"}},"Login")),c.a.createElement(P.a,{xs:{span:0},xl:{span:4,offset:8}},c.a.createElement(D.a,{icon:c.a.createElement(R.a,null),style:{marginRight:"10px"}}),c.a.createElement(f.b,{to:"/login"},c.a.createElement(F.a,{type:"primary",style:{marginRight:"5px"}},"Login")),c.a.createElement(F.a,null,"Register")))}}]),a}(r.Component);var A=Object(d.b)((function(e){return{totalList:e.getIn(["list","totalList"])}}),(function(e){return{handleClick:function(t){e(i.handleClick(t))},searchFilm:function(t){e(i.searchFilm(t))}}}))(X),Q=a(377),W=(a(152),function(e){return{type:"sideBar/handle_click_bar",item:e}}),H=function(e){return{type:v,item:e}},Y=function(e){return{type:"sideBar/delete_list",item:e}},Z=function(){return{type:"sideBar/update_list"}},$=z.a.SubMenu,ee=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.totalList,a=e.chosenTag,n=e.deleteList,i=e.addList,l=e.updateList,r=function(e){var t=["all"];return e.forEach((function(e){t.indexOf(e.catalogue)<0&&t.push(e.catalogue)})),t}(t.toJS());return c.a.createElement(z.a,{onClick:this.handleClick,style:{width:"100%"},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline"},c.a.createElement($,{key:"sub1",title:c.a.createElement("span",null,c.a.createElement(Q.a,null),c.a.createElement("span",null,"Film Catalogues"))},c.a.createElement(z.a.ItemGroup,{key:"g1",title:"Catalogues"},r.map((function(e){return a.indexOf(e)>=0?c.a.createElement(z.a.Item,{key:e},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",name:"catalogue",value:e,checked:!0,onChange:function(){n(e),l()}}),e)):c.a.createElement(z.a.Item,{key:e},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",name:"catalogue",value:e,onChange:function(){i(e),l()}}),e),c.a.createElement("br",null))})))))}}]),a}(r.Component);var te=Object(d.b)((function(e){return{totalList:e.getIn(["list","totalList"]),changedList:e.getIn(["list","changedList"]),chosenTag:e.getIn(["list","chosenTag"])}}),(function(e){return{handleClickBar:function(t){e(l.handleClickBar(t.item))},addList:function(t){e(l.addList(t))},deleteList:function(t){e(l.deleteList(t))},updateList:function(t){e(l.updateList(t))}}}))(ee),ae=a(367),ne=a(378),ie=a(379),le=a(133),re=a(134);function ce(){var e=Object(le.a)(["\n    font-size: 14px;\n    font-weight:bolder;\n    text-align:center;\n"]);return ce=function(){return e},e}function oe(){var e=Object(le.a)(["\n    font-size:12px;\n    font-weight:bolder;\n    text-align:center;\n"]);return oe=function(){return e},e}var se=re.a.div(oe()),ue=re.a.div(ce()),me=a(373),ge=a(368),pe=a(372),de=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.changePage,a=e.onChangeDisplay,n=e.display,i=e.changedList,l=e.currentPage,r=e.handeleDislike,o=e.filterList,s=e.chosenTag,u=function(e,t,a){document.getElementsByClassName(a)[t].style.color="#c1c1c1"},m=function(e,t,a){document.getElementsByClassName(a)[t].style.color="inherit"};return c.a.createElement("div",{className:"site-card-wrapper"},c.a.createElement(T.a,{gutter:16,justify:"center",style:{padding:"10px 0"}},c.a.createElement(P.a,{xl:{span:16,offset:8},xs:{span:22,offset:2}},c.a.createElement(me.a.Group,{onChange:function(e){t(1),a(e)},defaultValue:"a"},"4"===n?c.a.createElement(me.a.Button,{value:"4",checked:!0},"4 elements"):c.a.createElement(me.a.Button,{value:"4"},"4 elements"),"8"===n?c.a.createElement(me.a.Button,{value:"8",checked:!0},"8 elements"):c.a.createElement(me.a.Button,{value:"8"},"8 elements"),"12"===n?c.a.createElement(me.a.Button,{value:"12",checked:!0},"12 elements"):c.a.createElement(me.a.Button,{value:"12"},"12 elements")))),c.a.createElement(T.a,{justify:"center"},i===[]?c.a.createElement("div",null,"no data"):i.map((function(e,t){for(var a=t;a<l*n&&a>=(l-1)*n;a++)return c.a.createElement(P.a,{xl:{span:6,offset:0},lg:{span:8,offset:0},md:{span:12,offset:0},sm:{span:12,offset:0},key:e.get("title")},c.a.createElement(ae.a,{hoverable:!0,style:{width:200,margin:"15px"},cover:c.a.createElement("img",{alt:"example",src:e.get("imgUrl")})},c.a.createElement(T.a,{align:"bottom"},c.a.createElement(P.a,{span:16},c.a.createElement(ue,null,e.get("title"))),c.a.createElement(P.a,{span:8},c.a.createElement(se,null,e.get("catalogue")))),c.a.createElement(T.a,{style:{padding:"10px 0"}},c.a.createElement(P.a,{span:12,align:"center",justify:"center"},c.a.createElement(ne.a,{className:"dislikeBtn",style:{fontSize:"23px"},onMouseEnter:function(e,a){u(0,t,"dislikeBtn")},onMouseLeave:function(e,a){m(0,t,"dislikeBtn")},onClick:function(){var t;r(e.get("catalogue")),o(),t=e.get("catalogue"),pe.a.success("Successfully removed this catalogue: "+t)}})),c.a.createElement(P.a,{span:12,align:"center",justify:"center"},c.a.createElement(ie.a,{style:{fontSize:"23px"},className:"likeBtn",onMouseEnter:function(e,a){u(0,t,"likeBtn")},onMouseLeave:function(e,a){m(0,t,"likeBtn")}})))));return null}))),c.a.createElement(T.a,{justify:"center",style:{margin:"20px 0"}},0===s.toJS().length?c.a.createElement(ge.a,{defaultCurrent:1,total:1,pageSize:1}):c.a.createElement(ge.a,{current:l,total:i.toJS().length,pageSize:n,onChange:function(e){t(e)}})))}}]),a}(r.Component);var fe=Object(d.b)((function(e){return{changedList:e.getIn(["list","changedList"]),dislike:e.getIn(["list","dislike"]),display:e.getIn(["list","display"]),currentPage:e.getIn(["list","currentPage"]),chosenTag:e.getIn(["list","chosenTag"])}}),(function(e){return{handeleDislike:function(t){e(n.handeleDislike(t))},filterList:function(){e(n.filterList())},onChangeDisplay:function(t){e(n.onChangeDisplay(t.target.value))},changePage:function(t){e(n.changePage(t))}}}))(de),he=a(366),Ee=a(374),ye={labelCol:{span:8},wrapperCol:{span:8}},ve={wrapperCol:{offset:8,span:8}},be=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(he.a,Object.assign({},ye,{name:"basic",initialValues:{remember:!0},style:{paddingTop:"220px"}}),c.a.createElement(he.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},c.a.createElement(N.a,null)),c.a.createElement(he.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},c.a.createElement(N.a.Password,null)),c.a.createElement(he.a.Item,Object.assign({},ve,{name:"remember",valuePropName:"checked"}),c.a.createElement(Ee.a,null,"Remember me")),c.a.createElement(he.a.Item,ve,c.a.createElement(f.b,{to:"/"},c.a.createElement(F.a,{type:"primary",htmlType:"button"},"Submit"))))}}]),a}(r.Component),je=Object(d.b)(null,null)(be),ke=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(r.Fragment,null,c.a.createElement(d.a,{store:J},c.a.createElement(f.a,null,c.a.createElement(h.a,{path:"/",exact:!0},c.a.createElement(T.a,{style:{padding:"10px 0",backgroundColor:"#fff"}},c.a.createElement(P.a,{span:24},c.a.createElement(A,null))),c.a.createElement(T.a,null,c.a.createElement(P.a,{xs:{span:0},md:{span:4},style:{height:"100%"}},c.a.createElement(te,null)),c.a.createElement(P.a,{xs:{span:24},md:{span:20},style:{paddingLeft:"20px"}},c.a.createElement(fe,null)))),c.a.createElement(h.a,{path:"/login",exact:!0,component:je}))))}}]),a}(r.Component);s.a.render(c.a.createElement(ke,null),document.getElementById("root"))}},[[194,1,2]]]);
//# sourceMappingURL=main.cc00f40a.chunk.js.map