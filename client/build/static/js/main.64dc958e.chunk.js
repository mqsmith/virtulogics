(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{120:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(41),c=a.n(l),o=(a(96),a(2)),s=a(24),i=a(14),m=a(12),u=a.n(m),p=a(23),d=a(9),h=a.n(d),E=a(85),g=a.n(E),f=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(n){var r=g.a.v4();n({type:"SET_ALERT",payload:{msg:e,alertType:t,id:r}}),setTimeout((function(){return n({type:"REMOVE_ALERT",payload:r})}),a)}},v=function(e){e?h.a.defaults.headers.common["x-auth-token"]=e:delete h.a.defaults.headers.common["x-auth-token"]},b=function(){return function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&v(localStorage.token),e.prev=1,e.next=4,h.a.get("/api/auth");case 4:a=e.sent,t({type:"USER_LOADED",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"AUTH_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},y=(a(120),Object(i.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){e({type:"CLEAR_PROFILE"}),e({type:"LOGOUT"})}}})((function(e){var t=e.auth,a=t.isAuthenticated,l=t.loading,c=e.logout,s=r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{onClick:c,href:"/"},r.a.createElement("i",{className:"fas fa-sign-out-alt"})," ",r.a.createElement("span",{className:"hide-sm"},"Logout")))),i=r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/register"},"Register")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/login"},"Login")));return r.a.createElement("nav",{className:"navbar bg-dark nav-header"},r.a.createElement("h1",null,r.a.createElement(o.b,{to:"/"})),!l&&r.a.createElement(n.Fragment,null,a?s:i))}))),O=a(15),w=a(43);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var j=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:f,register:function(e){var t=e.name,a=e.email,n=e.password;return function(){var e=Object(p.a)(u.a.mark((function e(r){var l,c,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={headers:{"Content-Type":"application/json"}},c=JSON.stringify({name:t,email:a,password:n}),e.prev=2,e.next=5,h.a.post("/api/users",c,l);case 5:o=e.sent,r({type:"REGISTER_SUCCESS",payload:o.data}),r(b()),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),(s=e.t0.response.data.errors)&&s.forEach((function(e){return r(f(e.msg,"danger"))})),r({type:"REGISTER_FAIL"});case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.setAlert,a=e.register,l=e.isAuthenticated,c=Object(n.useState)({name:"",email:"",password:"",password2:""}),i=Object(w.a)(c,2),m=i[0],d=i[1],h=m.name,E=m.email,g=m.password,f=m.password2,v=function(e){return d(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},m,Object(O.a)({},e.target.name,e.target.value)))},b=function(){var e=Object(p.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),g!==f?t("Passwords do not match","danger"):a({name:h,email:E,password:g});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l?r.a.createElement(s.a,{to:"/clusters"}):r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"large text-primary"},"Sign Up"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"})," Create Your Account"),r.a.createElement("form",{className:"form",onSubmit:function(e){return b(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",value:h,onChange:function(e){return v(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",placeholder:"Email Address",name:"email",value:E,onChange:function(e){return v(e)}}),r.a.createElement("small",{className:"form-text"},"This site uses Gravatar so if you want a profile image, use a Gravatar email")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:g,onChange:function(e){return v(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Confirm Password",name:"password2",value:f,onChange:function(e){return v(e)}})),r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Register"})),r.a.createElement("p",{className:"my-1"},"Already have an account? ",r.a.createElement(o.b,{to:"/login"},"Sign In")))}));function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var D=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(p.a)(u.a.mark((function a(n){var r,l,c,o;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={headers:{"Content-Type":"application/json"}},l=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,h.a.post("/api/auth",l,r);case 5:c=a.sent,n({type:"LOGIN_SUCCESS",payload:c.data}),n(b()),a.next=15;break;case 10:a.prev=10,a.t0=a.catch(2),(o=a.t0.response.data.errors)&&o.forEach((function(e){return n(f(e.msg,"danger"))})),n({type:"LOGIN_FAIL"});case 15:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,l=Object(n.useState)({email:"",password:""}),c=Object(w.a)(l,2),i=c[0],m=c[1],d=i.email,h=i.password,E=function(e){return m(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},i,Object(O.a)({},e.target.name,e.target.value)))},g=function(){var e=Object(p.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t(d,h);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a?r.a.createElement(s.a,{to:"/clusters"}):r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"large text-primary"},"Sign In"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"})," Sign Into Your Account"),r.a.createElement("form",{className:"form",onSubmit:function(e){return g(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",placeholder:"Email Address",name:"email",value:d,onChange:function(e){return E(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:h,onChange:function(e){return E(e)},minLength:"6"})),r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Login"})),r.a.createElement("p",{className:"my-1"},"Don't have an account? ",r.a.createElement(o.b,{to:"/register"},"Sign Up")))})),k=Object(i.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return null!==t&&t.length>0&&t.map((function(e){return r.a.createElement("div",{key:e.id,className:"alert alert-".concat(e.alertType)},e.msg)}))})),C=a(90),S=Object(i.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=a.isAuthenticated,l=a.loading,c=Object(C.a)(e,["component","auth"]);return r.a.createElement(s.b,Object.assign({},c,{render:function(e){return n||l?r.a.createElement(t,e):r.a.createElement(s.a,{to:"/login"})}}))})),P=function(){return r.a.createElement("section",{className:"container"},r.a.createElement(k,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/register",component:j}),r.a.createElement(s.b,{path:"/login",component:D})))},_=a(3),R=a(4),A=a(6),T=a(5),L=a(7),U=(a(122),function(e){function t(){return Object(_.a)(this,t),Object(A.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"col-md-2 d-none d-md-block bg-light sidebar"},r.a.createElement("div",{className:"sidebar-sticky"},r.a.createElement("ul",{className:"nav flex-column"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"/clusters"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-home"},r.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"})),"Cluster Overview ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"/hosts"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-layers"},r.a.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),r.a.createElement("polyline",{points:"2 17 12 22 22 17"}),r.a.createElement("polyline",{points:"2 12 12 17 22 12"})),"Hosts View")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"/collection"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-bar-chart-2"},r.a.createElement("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),r.a.createElement("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),r.a.createElement("line",{x1:"6",y1:"20",x2:"6",y2:"14"})),"Collection"))))))}}]),t}(n.Component)),M={color:"white"},B={backgroundImage:'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1791&q=80")',color:"white",height:"500px",fontSize:"80px",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},F={backgroundColor:"#ff5235",fontSize:"20px",width:"150px",margin:"35px",borderColor:"black"},I={backgroundColor:"white"},G={padding:"55px"},z={color:"#ff5235"},H={backgroundColor:"#15a2b8"},W={listStyleType:"none"},J={backgroundColor:"#ff5235"},q=function(e){function t(){return Object(_.a)(this,t),Object(A.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{class:"jumbotron",style:B},r.a.createElement("h1",null,"Virtulogics"),r.a.createElement("p",null,"Simple, Seamless Capacity Planning"),r.a.createElement("p",null,r.a.createElement("button",{className:"btn btn-primary btn-lg",style:F},"Try it Free"))),r.a.createElement("div",{className:"container marketing",style:I},r.a.createElement("div",{className:"row featurette",style:G},r.a.createElement("div",{className:"col-md-7"},r.a.createElement("h2",{className:"featurette-heading"},"Smart Capacity Planning Suggestions ",r.a.createElement("span",{style:z},"It'll blow your mind.")),r.a.createElement("p",{className:"lead"},"Easily and Quickly know when its time to upgrade. "),r.a.createElement("br",null),r.a.createElement("p",{className:"lead"}," Data is displayed in a clear and concise way where you can easy get an overview of your current load. Exactly what you need. "),r.a.createElement("br",null),r.a.createElement("p",{className:"lead"},"Easily customize each of your graphs or extend the time frame visible. "),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("a",{className:"btn btn-secondary",href:"#",role:"button",style:H},"Try for Free"))),r.a.createElement("div",{className:"col-md-5"},r.a.createElement("img",{className:"featurette-image img-fluid mx-auto","data-src":"holder.js/500x500/auto",alt:"500x500",style:M,src:"https://howto.socialchorus.com/hc/article_attachments/360003206494/Dashboard.gif","data-holder-rendered":"true"}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row featurette",style:G},r.a.createElement("div",{className:"col-md-5 pull-md-7"},r.a.createElement("img",{className:"featurette-image img-fluid mx-auto","data-src":"holder.js/500x500/auto",alt:"500x500",src:"https://media.giphy.com/media/fWwR0wiDbqmWs/giphy.gif","data-holder-rendered":"true",style:M})),r.a.createElement("div",{className:"col-md-7 push-md-5"},r.a.createElement("h2",{className:"featurette-heading"},"Clean, Easy to Read Dashboard ")," ",r.a.createElement("h2",null,r.a.createElement("span",{style:z},"Check it out for yourself.")),r.a.createElement("p",{className:"lead"},"Our easy to read dashboard doesn't require weeks of training. "),r.a.createElement("br",null),r.a.createElement("p",{className:"lead"},"Data is displayed in a clear and concise way where you can easy get an overview of your current load. Exactly what you need. "),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("a",{className:"btn btn-secondary",href:"#",role:"button",style:H},"Try for Free")))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row featurette",style:G},r.a.createElement("div",{className:"col-md-7"},r.a.createElement("h2",{className:"featurette-heading"},"Practical Pricing.  ",r.a.createElement("span",{style:z},"No Headaches.")),r.a.createElement("br",null),r.a.createElement("p",{className:"lead"},"We don't like to play games when it comes your money. "),r.a.createElement("p",{className:"lead"},"Our clear and simple pricing structure keeps you focused on what really matters and headache-free!"),r.a.createElement("p",{className:"lead"},"Flat Monthly rates with no caps on the number of users in your account"),r.a.createElement("p",{className:"lead"},"Robust referal program makes it even easier to save!"),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("a",{className:"btn btn-secondary",href:"#",role:"button",style:H},"Try for Free"))),r.a.createElement("div",{className:"col-md-5"},r.a.createElement("img",{className:"featurette-image img-fluid mx-auto","data-src":"holder.js/500x500/auto",alt:"500x500",src:"https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80","data-holder-rendered":"true",style:M}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("img",{className:"rounded-circle",src:"https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",alt:"Generic placeholder image",width:"140",height:"140"}),r.a.createElement("h2",null,"Bronze Plan"),r.a.createElement("ul",{style:W},r.a.createElement("li",null,"Capacity Planner Dashboard"),r.a.createElement("li",null,"Ability to add up to 2 clusters"),r.a.createElement("li",null,"2 Users"),r.a.createElement("li",null,"Load Alert Notifications ")),r.a.createElement("p",null,r.a.createElement("a",{className:"btn btn-secondary",href:"#",role:"button",style:J},"Sign Up \xbb"))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("img",{className:"rounded-circle",src:"https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",alt:"Generic placeholder image",width:"140",height:"140"}),r.a.createElement("div",null,r.a.createElement("h2",null,"Silver Plan"),r.a.createElement("ul",{style:W},r.a.createElement("li",null,"Everything in the Bronze Plan"),r.a.createElement("li",null,"Ability to add up to 5 clusters"),r.a.createElement("li",null,"5 Users"),r.a.createElement("li",null,"Smart Load Balance")),r.a.createElement("p",null,r.a.createElement("a",{className:"btn btn-secondary",href:"#",role:"button",style:J},"Sign Up \xbb")))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("img",{className:"rounded-circle",src:"https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",alt:"Generic placeholder image",width:"140",height:"140"}),r.a.createElement("h2",null,"Gold Plan"),r.a.createElement("ul",{style:W},r.a.createElement("li",null,"Everything in the Bronze and Silver Plan"),r.a.createElement("li",null,"Ability to add up to 10 clusters"),r.a.createElement("li",null,"10 Users"),r.a.createElement("li",null,"Priority Integrations"),r.a.createElement("li",null,"24/7Phone Support")),r.a.createElement("p",null,r.a.createElement("a",{className:"btn btn-secondary",href:"#",role:"button",style:J},"Sign Up \xbb"))))))}}]),t}(n.Component),Q=a(26),V=a.n(Q),Y=a(28),K=a.n(Y);K.a.defaults.global.defaultFontFamily="Roboto, sans-serif";var X=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(A.a)(this,Object(T.a)(t).call(this,e))).chartRef=r.a.createRef(),a}return Object(L.a)(t,e),Object(R.a)(t,[{key:"componentDidUpdate",value:function(){console.log(this.props.hostOneData),console.log(this.props.hostTwoData),console.log(this.props.time),this.myChart=new K.a(this.chartRef.current,{type:"line",options:{maintainAspectRatio:!0,scales:{xAxes:[{id:"bottom-x-axis",type:"category",position:"bottom"},{id:"bottom-x-axis",type:"category",position:"bottom"}]}},data:{labels:this.props.time,datasets:[{data:this.props.hostOneData,label:this.props.hostOneLabels,backgroundColor:"RGBA(0,173,255,0.26)",xAxisID:"bottom-x-axis"},{data:this.props.hostTwoData,label:this.props.hostTwoLabels,backgroundColor:"RGBA(255,0,0,0.26)",xAxisID:"bottom-x-axis"}]}}),console.log(this.myChart)}},{key:"render",value:function(){return r.a.createElement("canvas",{ref:this.chartRef})}}]),t}(r.a.Component),$=function(e){function t(){var e,a;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(A.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).state={hostOneData:[],hostOneLabels:[],hostTwoData:[],hostTwoLabels:[],time:[]},a.getRam=function(){h.a.get("/api/chart-mem").then((function(e){console.log(e.data.data);var t=e.data.data.filter((function(e){return"lab-esxi-01.vdilab.int"===e.esxhostname})),n=e.data.data.filter((function(e){return"lab-esxi-01.vdilab.int"===e.esxhostname})),r=e.data.data.filter((function(e){return"lab-esxi-02.vdilab.int"===e.esxhostname}));t=t.map((function(e){return V()(e.time).format("h:mm:ss a")}));var l=n.map((function(e){return e.RAM_Usage})),c=r.map((function(e){return e.RAM_Usage})),o=n.map((function(e){return e.esxhostname})),s=r.map((function(e){return e.esxhostname}));a.setState({hostOneData:l,hostOneLabels:o,hostTwoData:c,hostTwoLabels:s,time:t}),console.log(a.state)})).catch((function(e){console.log(e)}))},a}return Object(L.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){this.getRam()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main chart-wrapper container"},r.a.createElement(X,{label:"Host MEM Usage Average",hostOneData:this.state.hostOneData,hostTwoData:this.state.hostTwoData,hostOneLabels:this.state.hostOneLabels[0],hostTwoLabels:this.state.hostTwoLabels[0],time:this.state.time,color:"#3E517A"})))}}]),t}(n.Component),Z=function(){return r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-spinner fa-spin"})," Loading host data...")},ee=(a(123),a(124),function(e){return r.a.createElement("div",{className:"card card-stats"},r.a.createElement("div",{id:"inner",className:"card-header"},e.title),r.a.createElement("button",{className:"btn btn-success"},r.a.createElement("p",null,e.text),e.firstButton," %"),r.a.createElement("button",{className:"btn btn-success"},r.a.createElement("p",null,"MEM Utilization:"),e.secondButton," %"))}),te=(a(125),function(e){return r.a.createElement("div",{className:"card card-stats"},r.a.createElement("div",{className:"card-header"},"Host CPU Stats:"),r.a.createElement("button",{className:"btn btn-success"},r.a.createElement("p",null,"CPU Usage:"),e.usagemhz_average," Mhz"),r.a.createElement("button",{className:"btn btn-success"},r.a.createElement("p",null,"CPU Utilization:"),e.utilization_average," %"))}),ae=function(e){function t(){var e,a;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(A.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).state={allData:[],loading:!0},a.getBoth=function(){h.a.get("/api/host/cpu-mem/1").then((function(e){var t=e.data,n=Object.values(t);a.setState({allData:n,loading:!1}),console.log(a.state.allData[0].esxhostname),console.log(a.state.allData[0].totalCapacity_average),console.log(a.state.allData[0].usage_average),console.log((a.state.allData[0].totalCapacity_average*a.state.allData[0].usage_average/1e5).toFixed(2));var r=a.state.allData[0].totalCapacity_average*a.state.allData[0].usage_average/1e5;console.log(r.toFixed(2))})).catch((function(e){console.log(e)}))},a}return Object(L.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){this.getBoth()}},{key:"render",value:function(){var e;return this.state.loading?(e=r.a.createElement("div",{className:"loading"},r.a.createElement(Z,null)),r.a.createElement("div",null,e)):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},this.state.allData.map((function(e,t){return r.a.createElement("div",{className:"card card-wrapper"},r.a.createElement("div",{key:e.moid,className:"card main-card"},r.a.createElement("div",{className:"row header-row"},r.a.createElement("div",{className:"col-md-7 top-left"},r.a.createElement(o.b,{to:"/host/".concat(e.esxhostname)},r.a.createElement("button",{className:"btn-dark btn-sm"},"Click to view host details"))),r.a.createElement("div",{className:"col-md-4 top-right"})),r.a.createElement("div",{className:"row button-row"},r.a.createElement("div",{className:"col-md-4 top-left"},r.a.createElement("img",{src:"/img/host.png"}),r.a.createElement("div",{className:"host-text-box"},r.a.createElement("p",null,"Host: ",e.esxhostname),r.a.createElement("p",null,"Cluster: ",e.clustername),r.a.createElement("p",null,"vCenter: ",e.vcenter),r.a.createElement("p",null,"CPU Ready: ",e.utilization_average," "))),r.a.createElement("div",{className:"col-md-4 mem-col"},r.a.createElement(ee,{title:"Host Memory Usage",text:"MEM Usage:",firstButton:(e.totalCapacity_average*e.usage_average/1e5).toFixed(2),secondButton:e.usage_average})),r.a.createElement("div",{className:"col-md-4 cpu-col"},r.a.createElement(te,{usagemhz_average:e.usagemhz_average,utilization_average:e.cpu_usage_average}))),r.a.createElement("p",null,"Device polled @ ",V()(e.time).format("h:mm:ss a"))))})))))}}]),t}(n.Component),ne=a(27);a(126);K.a.defaults.global.defaultFontFamily="Roboto, sans-serif";var re=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(A.a)(this,Object(T.a)(t).call(this,e))).chartRef=r.a.createRef(),a}return Object(L.a)(t,e),Object(R.a)(t,[{key:"componentDidUpdate",value:function(){this.myChart=new K.a(this.chartRef.current,{type:"doughnut",data:{labels:this.props.label,datasets:[{data:this.props.data,label:"Points",backgroundColor:["#696969","#A9A9A9","#2FDE00"],hoverBackgroundColor:["#808080","#C0C0C0","#175000"]}]}})}},{key:"render",value:function(){return r.a.createElement("canvas",Object.assign({},this.props,{ref:this.chartRef,data:this.props.data}))}}]),t}(r.a.Component),le=function(e){function t(){var e,a;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(A.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).state={allData:[],loading:!0,totalmemoryusage:[],label:[],data:[],singlevcentername:[],singleclustername:[]},a.getBoth=function(){h.a.get("/api/host/cpu-mem/1").then((function(e){var t=e.data,n=Object.values(t);a.setState({allData:n,loading:!1}),console.log("===================================================================");for(var r=[],l=0;l<a.state.allData.length;l++)console.log(a.state.allData[l].usage_average),r.push(a.state.allData[l].usage_average);console.log(r);for(var c=a.state.allData.map((function(e){return e.usage_average})),o=0,s=0;s<c.length;s++)o+=c[s];for(var i=a.state.allData.map((function(e){return e.cpu_usage_average})),m=0,u=0;u<i.length;u++)m+=i[u];var p=a.state.allData.map((function(e){return e.esxhostname})),d=a.state.allData.map((function(e){return e.clustername})),h=Object(ne.a)(new Set(d)),E=a.state.allData.map((function(e){return e.vcenter})),g=Object(ne.a)(new Set(E));a.setState({cputotal:m,totalmemoryusage:o,label:p,data:c,singleclustername:h,singlevcentername:g}),console.log(o)})).catch((function(e){console.log(e)}))},a}return Object(L.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){this.getBoth()}},{key:"render",value:function(){var e;return this.state.loading?(e=r.a.createElement("div",{className:"loading"},r.a.createElement(Z,null)),r.a.createElement("div",null,e)):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-wrapper"},r.a.createElement("div",{className:"card main-card"},r.a.createElement("div",{className:"row header-row"},r.a.createElement("div",{className:"col-md-7 top-left"},r.a.createElement(o.b,{to:"/hosts"},r.a.createElement("button",{className:"btn-dark btn-sm"},"Click to view host details"))),r.a.createElement("div",{className:"col-md-4 top-right"}),r.a.createElement("div",{className:"row button-row"},r.a.createElement("div",{className:"col-md-sm top-left"},r.a.createElement("img",{src:"/img/cluster.png"}),r.a.createElement("div",{className:"host-text-box"},r.a.createElement("p",null,"Cluster: ",this.state.singleclustername),r.a.createElement("p",null,"vCenter: ",this.state.singlevcentername),r.a.createElement("p",null,"Number of ESXi Hosts: ",this.state.label.length))),r.a.createElement("div",{className:"col-sm-4 mem-col"},r.a.createElement("p",null,"Cluster memory usage by host"),r.a.createElement(re,this.state)),r.a.createElement("div",{className:"col-md-4 cpu-col"},r.a.createElement(ee,{title:"Cluster CPU/MEM Usage",text:"CPU Usage:",firstButton:this.state.cputotal,secondButton:this.state.totalmemoryusage}))),r.a.createElement("div",{className:"col-md-4 mem-col"}),r.a.createElement("div",{className:"col-md-4 cpu-col"})))),")")))}}]),t}(n.Component),ce=function(e){function t(){var e,a;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(A.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).state={allData:[],loading:!0},a.getBoth=function(){h.a.get("/api/host/cpu-mem/1/"+a.props.match.params.esxhostname).then((function(e){var t=e.data,n=Object.values(t);a.setState({allData:n,loading:!1}),console.log(a.state.allData[0].esxhostname),console.log(a.state.allData[0].totalCapacity_average),console.log(a.state.allData[0].usage_average),console.log((a.state.allData[0].totalCapacity_average*a.state.allData[0].usage_average/1e5).toFixed(2));var r=a.state.allData[0].totalCapacity_average*a.state.allData[0].usage_average/1e5;console.log(r.toFixed(2))})).catch((function(e){console.log(e)}))},a}return Object(L.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){console.log("Host props: ",this.props),this.getBoth()}},{key:"componentDidUpdate",value:function(e){console.log("Host updated props: ",this.props)}},{key:"render",value:function(){var e;return this.state.loading?(e=r.a.createElement("div",{className:"loading"},r.a.createElement(Z,null)),r.a.createElement("div",null,e)):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},this.state.allData.map((function(e,t){return r.a.createElement("div",{className:"card card-wrapper"},r.a.createElement("div",{key:e.moid,className:"card main-card"},r.a.createElement("div",{className:"row header-row"},r.a.createElement("div",{className:"col-md-7 top-left"},r.a.createElement(o.b,{to:"/hosts"},r.a.createElement("button",{className:"btn-dark btn-sm"},"Click to back to the hosts view"))),r.a.createElement("div",{className:"col-md-4 top-right"})),r.a.createElement("div",{className:"row button-row"},r.a.createElement("div",{className:"col-md-4 top-left"},r.a.createElement("img",{src:"/img/host.png"}),r.a.createElement("div",{className:"host-text-box"},r.a.createElement("p",null,"Host: ",e.esxhostname),r.a.createElement("p",null,"Cluster: ",e.clustername),r.a.createElement("p",null,"vCenter: ",e.vcenter),r.a.createElement("p",null,"CPU Ready: ",e.utilization_average," "))),r.a.createElement("div",{className:"col-md-4 mem-col"},r.a.createElement(ee,{title:"Host Memory Usage",text:"MEM Usage:",firstButton:(e.totalCapacity_average*e.usage_average/1e5).toFixed(2),secondButton:e.usage_average})),r.a.createElement("div",{className:"col-md-4 cpu-col"},r.a.createElement(te,{usagemhz_average:e.usagemhz_average,utilization_average:e.cpu_usage_average}))),r.a.createElement("p",null,"Device polled @ ",V()(e.time).format("h:mm:ss a"))))})))))}}]),t}(n.Component),oe=a(22),se=a(88),ie=a(89),me=[];function ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function pe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ue(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ue(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var de={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null};function he(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?he(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):he(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ge={profile:null,profiles:[],repos:[],loading:!0,error:{}};function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ve(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var be={posts:[],post:null,loading:!0,error:{}},ye=Object(oe.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_ALERT":return[].concat(Object(ne.a)(e),[n]);case"REMOVE_ALERT":return e.filter((function(e){return e.id!==n}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"USER_LOADED":return pe({},e,{isAuthenticated:!0,loading:!1,user:n});case"REGISTER_SUCCESS":case"LOGIN_SUCCESS":return localStorage.setItem("token",n.token),pe({},e,{},n,{isAuthenticated:!0,loading:!1});case"REGISTER_FAIL":case"AUTH_ERROR":case"LOGIN_FAIL":case"LOGOUT":case"ACCOUNT_DELETED":return localStorage.removeItem("token"),pe({},e,{token:null,isAuthenticated:!1,loading:!1});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_PROFILE":case"UPDATE_PROFILE":return Ee({},e,{profile:n,loading:!1});case"GET_PROFILES":return Ee({},e,{profiles:n,loading:!1});case"PROFILE_ERROR":return Ee({},e,{error:n,loading:!1});case"CLEAR_PROFILE":return Ee({},e,{profile:null,repos:[],loading:!1});case"GET_REPOS":return Ee({},e,{repos:n,loading:!1});default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_POSTS":return ve({},e,{posts:n,loading:!1});case"GET_POST":return ve({},e,{post:n,loading:!1});case"ADD_POST":return ve({},e,{posts:[n].concat(Object(ne.a)(e.posts)),loading:!1});case"DELETE_POST":return ve({},e,{posts:e.posts.filter((function(e){return e._id!==n})),loading:!1});case"POST_ERROR":return ve({},e,{error:n,loading:!1});case"UPDATE_LIKES":return ve({},e,{posts:e.posts.map((function(e){return e._id===n.id?ve({},e,{likes:n.likes}):e})),loading:!1});case"ADD_COMMENT":return ve({},e,{post:ve({},e.post,{comments:n}),loading:!1});case"REMOVE_COMMENT":return ve({},e,{post:ve({},e.post,{comments:e.post.comments.filter((function(e){return e._id!==n}))}),loading:!1});default:return e}}}),Oe=[ie.a],we=Object(oe.createStore)(ye,{},Object(se.composeWithDevTools)(oe.applyMiddleware.apply(void 0,Oe)));a(220);localStorage.token&&v(localStorage.token);var Ne=function(){return Object(n.useEffect)((function(){we.dispatch(b())}),[]),r.a.createElement(i.a,{store:we},r.a.createElement(o.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:function(e){return r.a.createElement("div",{className:"nav-style"},r.a.createElement(y,null),r.a.createElement(q,e))}}),r.a.createElement(S,{exact:!0,path:"/collection",component:function(e){return r.a.createElement("div",{className:"page-wrap"},r.a.createElement(y,null),r.a.createElement(U,null),r.a.createElement($,e))}}),r.a.createElement(S,{exact:!0,path:"/host/:esxhostname",component:function(e){return r.a.createElement("div",{className:"page-wrap"},r.a.createElement(y,null),r.a.createElement(U,null),r.a.createElement(ce,e))}}),r.a.createElement(S,{exact:!0,path:"/hosts",component:function(e){return r.a.createElement("div",{className:"page-wrap"},r.a.createElement(y,null),r.a.createElement(U,null),r.a.createElement(ae,e))}}),r.a.createElement(S,{exact:!0,path:"/collection",component:function(e){return r.a.createElement("div",{className:"page-wrap"},r.a.createElement(y,null),r.a.createElement(U,null),r.a.createElement($,e))}}),r.a.createElement(S,{exact:!0,path:"/clusters",component:function(e){return r.a.createElement("div",{className:"page-wrap"},r.a.createElement(y,null),r.a.createElement(U,null),r.a.createElement(le,e))}}),r.a.createElement(s.b,{component:function(e){return r.a.createElement("div",{className:"nav-style"},r.a.createElement(y,null),r.a.createElement(P,e))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},91:function(e,t,a){e.exports=a(221)},96:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.64dc958e.chunk.js.map