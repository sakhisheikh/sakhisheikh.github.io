(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{246:function(e,a,t){"use strict";t.r(a);var n=t(9),r=t.n(n),i=(t(46),t(0)),o=t.n(i),l=t(250),s=t.n(l),c=t(1),d=t.n(c),m=t(75),u=t(20),p=t(287),f=t.n(p),h=t(264),g=t.n(h),b=t(265),y=t.n(b),v=t(266),x=t.n(v),w=t(258),E=t.n(w),C=t(332),k=t.n(C),S=t(303),N=t.n(S),O=t(254),j=t.n(O),I=t(119),W=t.n(I),P=t(314),R=t(302),T=Object(m.createMuiTheme)({overrides:{MuiDrawer:{paperAnchorDockedLeft:{borderRight:0,boxShadow:"5px 0 5px -2px #888"}}}}),D=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={isDrawerOpen:!1},a.toggleDrawer=function(e){var t=e.isDrawerOpen;return function(){a.setState({isDrawerOpen:t})}},a}return r()(a,e),a.prototype.render=function(){var e,a,t,n,r=this.props.classes,i=this.state.isDrawerOpen,l=o.a.createElement(m.MuiThemeProvider,{theme:T},o.a.createElement(f.a,{elevation:16,variant:"permanent",className:s()(r.drawer,(e={},e[r.drawerOpen]=i,e[r.drawerClose]=!i,e)),classes:{paper:s()((a={},a[r.drawerOpen]=i,a[r.drawerClose]=!i,a))},open:i,onKeyDown:this.toggleDrawer({isDrawerOpen:!1})},o.a.createElement(E.a,{button:!0,component:u.Link,to:"/",className:r.toolbar},o.a.createElement("img",{className:r.logo,src:"build/public/images/logo_white.svg",alt:""})),o.a.createElement(R.a,{className:r.sideList})));return o.a.createElement("div",{className:r.root},o.a.createElement("div",{className:r.appFrame},o.a.createElement(W.a,null),o.a.createElement(g.a,{position:"fixed",className:s()(r.appBar,(t={},t[r.appBarShift]=i,t))},o.a.createElement(y.a,{disableGutters:!0},o.a.createElement(j.a,{alignItems:"center",direction:"row",container:!0,className:r.root,spacing:8},o.a.createElement(j.a,{item:!0,xs:5},o.a.createElement(x.a,((n={className:r.title,"aria-label":"Open drawer",onClick:this.toggleDrawer({isDrawerOpen:!i})}).className=r.title+" "+r.menuButton,n),o.a.createElement(k.a,null))),o.a.createElement(j.a,{item:!0,xs:6},o.a.createElement(N.a,{align:"center",size:"large",className:r.title,component:u.Link,to:"/"},"Cinch Dashboard"))))),l,o.a.createElement("main",{className:r.content},o.a.createElement(P.a,null))))},a}(i.Component);D.propTypes={classes:d.a.object},a.default=Object(m.withStyles)(function(e){var a;return{root:{display:"flex"},appFrame:{height:"100vh",zIndex:1,overflow:"hidden",position:"relative",display:"flex",width:"100%"},appBar:{marginLeft:9*e.spacing.unit+1,width:"calc(100% - "+(9*e.spacing.unit+1)+"px)",background:"#ffffff",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - 240px)",transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaper:{position:"relative"},toolbar:Object.assign({height:"200px",backgroundColor:"#fccf5d",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar,{"&:hover":{backgroundColor:"#fccf5d"}}),content:{padding:3*e.spacing.unit,flexGrow:1,backgroundColor:"#eee"},title:{color:"#818181"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap",overflowX:"hidden"},drawerOpen:{width:240,overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:(a={transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:7*e.spacing.unit+1},a[e.breakpoints.up("sm")]={width:9*e.spacing.unit+1},a),logo:{color:"black",width:"100%",maxWidth:"100px",height:"auto",margin:"0 auto"}}})(D)},255:function(e,a,t){var n;e.exports=(n=t(272))&&n.default||n},257:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return u}),t.d(a,"StaticQuery",function(){return p});var n=t(0),r=t.n(n),i=t(1),o=t.n(i),l=t(251),s=t.n(l);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return l.withPrefix}),t.d(a,"navigate",function(){return l.navigate}),t.d(a,"push",function(){return l.push}),t.d(a,"replace",function(){return l.replace}),t.d(a,"navigateTo",function(){return l.navigateTo});var c=t(255),d=t.n(c);t.d(a,"PageRenderer",function(){return d.a});var m=t(49);t.d(a,"parsePath",function(){return m.a});var u=r.a.createContext({}),p=function(e){return r.a.createElement(u.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},272:function(e,a,t){"use strict";t.r(a);t(46);var n=t(0),r=t.n(n),i=t(1),o=t.n(i),l=t(79),s=t(5),c=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=c},278:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n={genres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]}},302:function(e,a,t){"use strict";t(46);var n=t(0),r=t.n(n),i=t(75),o=t(1),l=t.n(o),s=t(258),c=t.n(s),d=t(257),m=t(286),u=t.n(m),p=t(330),f=t.n(p),h=t(331),g=t.n(h),b=function(e){return r.a.createElement(d.Link,Object.assign({},e,{getProps:function(e){var a=e.isCurrent;return{style:{borderLeft:a?"4px solid #fccf5d":"",color:a?"#fff":"#9B9B9B",backgroundColor:a?"#383838":"#323232"}}}}))};function y(e){var a=e.classes;return r.a.createElement("div",{className:a.root},r.a.createElement(c.a,{disableGutters:!0,className:a.listItem,button:!0,component:b,to:"/contact"},r.a.createElement(f.a,{className:a.navItem}),r.a.createElement("span",null,"Contact")),r.a.createElement(u.a,null),r.a.createElement(c.a,{className:a.listItem,button:!0,disableGutters:!0,component:b,to:"/"},r.a.createElement(g.a,{className:a.navItem}),r.a.createElement("span",null,"Clients")),r.a.createElement(u.a,null),r.a.createElement(c.a,{className:a.listItem,button:!0,disableGutters:!0,component:b,to:"/history"},r.a.createElement(g.a,{className:a.navItem}),r.a.createElement("span",null,"History")),r.a.createElement(u.a,null))}y.propTypes={classes:l.a.object.isRequired},a.a=Object(i.withStyles)(function(){return{root:{width:"100%",height:"100vh",maxWidth:360,backgroundColor:"#323232"},listItem:{fontFamily:"Poppins",fontSize:14,fontWeight:500,letterSpacing:1},navItem:{margin:"0 25px"}}})(y)},303:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return r.default}});var r=n(t(462))},314:function(e,a,t){"use strict";t(46),t(275),t(123),t(78),t(315),t(276),t(277),t(267),t(292),t(76);var n=t(316),r=t.n(n),i=t(9),o=t.n(i),l=t(0),s=t.n(l),c=t(1),d=t.n(c),m=t(75),u=t(254),p=t.n(u),f=t(263),h=t.n(f),g=(t(293),t(285)),b=t.n(g),y=t(281),v=t.n(y),x=t(282),w=t.n(x),E=t(283),C=t.n(E),k=t(317),S=t.n(k),N=t(324),O=t.n(N),j=t(268),I=t.n(j),W=t(264),P=t.n(W),R=t(271),T=t.n(R),D=t(265),z=t.n(D),G=t(266),F=t.n(G),B=t(284),q=t.n(B),L=t(278);function M(e){return s.a.createElement(I.a,Object.assign({direction:"up"},e))}var A=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={open:!1},a.handleClickOpen=function(){a.setState(function(e){return{open:!e.open}})},a}return o()(a,e),a.prototype.render=function(){var e=this.props,a=e.classes,t=e.movie,n=this.state.open,r=L.a.genres.filter(function(e){return t.node.name.genres.includes(e.id)});return s.a.createElement(s.a.Fragment,null,s.a.createElement(v.a,{onClick:this.handleClickOpen,className:a.card},s.a.createElement(w.a,null,s.a.createElement(S.a,{fluid:t.node.image.childImageSharp.fluid}))),s.a.createElement(C.a,{className:a.title},t.node.name.title),s.a.createElement(C.a,{className:a.releaseDate},t.node.name.releaseDate.slice(0,4)),s.a.createElement(q.a,{fullScreen:!0,open:n,TransitionComponent:M},s.a.createElement(P.a,{className:a.appBar},s.a.createElement(z.a,null,s.a.createElement(F.a,{color:"inherit",onClick:this.handleClickOpen,"aria-label":"Close"},s.a.createElement(O.a,null)))),s.a.createElement("div",{className:a.fixed}),s.a.createElement(p.a,{alignItems:"center",justify:"center",direction:"row",container:!0,className:a.movieCard,item:!0},s.a.createElement(p.a,{className:a.centered,item:!0,xs:12,md:6,lg:6},s.a.createElement(p.a,{item:!0,xs:12,lg:6},s.a.createElement(v.a,{className:a.overviewCard},s.a.createElement(w.a,null,s.a.createElement(S.a,{fluid:t.node.image.childImageSharp.fluid}))))),s.a.createElement(p.a,{className:a.centered,alignItems:"center",justify:"center",direction:"row",container:!0,xs:12,md:6,lg:6},s.a.createElement(p.a,{container:!0,direction:"row",xs:12,className:a.verticalGap+" "+a.centered},s.a.createElement(p.a,{item:!0,xs:6},s.a.createElement(C.a,{className:a.overviewTitle},t.node.name.title)),s.a.createElement(p.a,{xs:6,className:a.centered},s.a.createElement("div",{className:a.rating+" "+a.centered},s.a.createElement(C.a,{className:a.ratingText},t.node.name.rating)))),s.a.createElement(p.a,{className:a.verticalGap,xs:12},s.a.createElement(C.a,{className:a.overviewSummary},"Overview:"),s.a.createElement(C.a,null,t.node.name.overview)),s.a.createElement(p.a,{className:""+a.verticalGap,xs:2},s.a.createElement("span",null,"Genres: ")),s.a.createElement(p.a,{className:""+a.verticalGap,xs:10},r&&r.map(function(e,t){return s.a.createElement(T.a,{key:t.toString(),avatar:s.a.createElement(b.a,null,e.name.slice(0,1).toUpperCase()),label:e.name,variant:"outlined",className:a.chip})}))))))},a}(l.Component);A.propTypes={classes:d.a.object.isRequired,movieData:d.a.object};var V=Object(m.withStyles)(function(e){var a,t;return{root:{flexGrow:1,fontSize:12},card:(a={maxWidth:150},a[e.breakpoints.down("xs")]={maxWidth:325},a),appBar:{position:"relative",background:"linear-gradient(to right, #141e30, #243b55)"},flex:{flex:1},overviewCard:(t={maxWidth:500},t[e.breakpoints.down("xs")]={maxWidth:350},t),centered:{alignItems:"center",justifyContent:"center",display:"flex"},title:{color:"#dadada",fontWeight:"600",fontSize:13},releaseDate:{color:"#0a1c1d",fontWeight:"600"},rating:{borderRadius:"50%",height:81,width:81,border:"8px solid #818181"},ratingText:{fontSize:20,fontWeight:"bold",color:"#141e30"},overviewTitle:{fontSize:20,fontWeight:600,color:"#141e30"},overviewSummary:{fontSize:15,fontWeight:500,color:"#243b55"},fixed:e.mixins.toolbar,verticalGap:{margin:"15px 0"},movieCard:{padding:10},chip:{margin:e.spacing.unit}}})(A),$=t(328),H=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={open:!1},a.handleClickOpen=function(){a.setState(function(e){e.open})},a}return o()(a,e),a.prototype.render=function(){var e=this.props,a=e.classes,t=e.movieData,n=e.search,i=e.genreId,o={};return r()("filteredList"),o=n||i?t.filter(function(e){return new RegExp(n,"i").test(e.node.name.title)}).filter(function(e){return!i||e.node.name.genres.includes(i)}):t,s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{container:!0,className:a.root},s.a.createElement(p.a,{item:!0,xs:12},s.a.createElement(p.a,{alignItems:"flex-start",direction:"row",container:!0,className:""+a.root,item:!0,spacing:8},Object.keys(o).length?o.map(function(e,t){return s.a.createElement(h.a,{in:!0,timeout:800},s.a.createElement(p.a,{className:a.centered,item:!0,xs:12,lg:2,md:3,sm:6,key:t},s.a.createElement(p.a,{item:!0,xs:12},s.a.createElement(V,Object.assign({key:t.toString()},{movie:e})))))}):s.a.createElement($.a,{variant:"h4",gutterBottom:!0,align:"center"},"Sorry we will update our list soon !")))))},a}(l.Component);H.propTypes={classes:d.a.object.isRequired,movieData:d.a.object};a.a=Object(m.withStyles)({root:{flexGrow:1},card:{maxWidth:345},appBar:{position:"relative"},flex:{flex:1},centered:{alignItems:"center",justifyContent:"center",display:"flex"}})(H)},462:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.styles=void 0;var r=n(t(13)),i=n(t(12)),o=n(t(8)),l=n(t(0)),s=(n(t(1)),n(t(250))),c=n(t(117)),d=t(118),m=n(t(259)),u=(n(t(319)),t(252)),p=function(e){return{root:(0,o.default)({},e.typography.button,{boxSizing:"border-box",minWidth:64,minHeight:36,padding:"8px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,d.fade)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,d.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,d.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},flat:{},flatPrimary:{},flatSecondary:{},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat((0,d.fade)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:(0,d.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat((0,d.fade)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:(0,d.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},raised:{},raisedPrimary:{},raisedSecondary:{},fab:{borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]}},extendedFab:{borderRadius:24,padding:"0 16px",width:"auto",minWidth:48,height:48},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},mini:{width:40,height:40},sizeSmall:{padding:"7px 8px",minWidth:64,minHeight:32,fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",minWidth:112,minHeight:40,fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}};function f(e){var a,t=e.children,n=e.classes,c=e.className,d=e.color,p=e.disabled,f=e.disableFocusRipple,h=e.focusVisibleClassName,g=e.fullWidth,b=e.mini,y=e.size,v=e.variant,x=(0,i.default)(e,["children","classes","className","color","disabled","disableFocusRipple","focusVisibleClassName","fullWidth","mini","size","variant"]),w="fab"===v||"extendedFab"===v,E="contained"===v||"raised"===v,C="text"===v||"flat"===v,k=(0,s.default)(n.root,(a={},(0,r.default)(a,n.fab,w),(0,r.default)(a,n.mini,w&&b),(0,r.default)(a,n.extendedFab,"extendedFab"===v),(0,r.default)(a,n.text,C),(0,r.default)(a,n.textPrimary,C&&"primary"===d),(0,r.default)(a,n.textSecondary,C&&"secondary"===d),(0,r.default)(a,n.flat,"text"===v||"flat"===v),(0,r.default)(a,n.flatPrimary,("text"===v||"flat"===v)&&"primary"===d),(0,r.default)(a,n.flatSecondary,("text"===v||"flat"===v)&&"secondary"===d),(0,r.default)(a,n.contained,E||w),(0,r.default)(a,n.containedPrimary,(E||w)&&"primary"===d),(0,r.default)(a,n.containedSecondary,(E||w)&&"secondary"===d),(0,r.default)(a,n.raised,E||w),(0,r.default)(a,n.raisedPrimary,(E||w)&&"primary"===d),(0,r.default)(a,n.raisedSecondary,(E||w)&&"secondary"===d),(0,r.default)(a,n.outlined,"outlined"===v),(0,r.default)(a,n.outlinedPrimary,"outlined"===v&&"primary"===d),(0,r.default)(a,n.outlinedSecondary,"outlined"===v&&"secondary"===d),(0,r.default)(a,n["size".concat((0,u.capitalize)(y))],"medium"!==y),(0,r.default)(a,n.disabled,p),(0,r.default)(a,n.fullWidth,g),(0,r.default)(a,n.colorInherit,"inherit"===d),a),c);return l.default.createElement(m.default,(0,o.default)({className:k,disabled:p,focusRipple:!f,focusVisibleClassName:(0,s.default)(n.focusVisible,h)},x),l.default.createElement("span",{className:n.label},t))}a.styles=p,f.propTypes={},f.defaultProps={color:"default",component:"button",disabled:!1,disableFocusRipple:!1,fullWidth:!1,mini:!1,size:"medium",type:"button",variant:"text"};var h=(0,c.default)(p,{name:"MuiButton"})(f);a.default=h}}]);
//# sourceMappingURL=component---src-pages-about-js-892978c5981081f4a078.js.map