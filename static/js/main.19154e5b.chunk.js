(this.webpackJsonprobots=this.webpackJsonprobots||[]).push([[0],{15:function(n,e,t){"use strict";t.r(e);var o=t(0),s=t(1),a=t.n(s),r=t(9),A=t.n(r),c=t(2),i=t.n(c),l=t(6),p={insert:"head",singleton:!1},u=(i()(l.a,p),l.a.locals,t(8)),d=t(7),f={insert:"head",singleton:!1},b=(i()(d.a,f),d.a.locals,function(){var n=Object(s.useState)([]),e=Object(u.a)(n,2),t=e[0],a=e[1],r=Object(s.useState)(""),A=Object(u.a)(r,2),c=A[0],i=A[1];Object(s.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(n){return n.json()})).then((function(n){return a(n)})).catch((function(n){return console.log(n)}))}),[]);var l=t.filter((function(n){return n.name.toLowerCase().includes(c.toLowerCase())}));return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"ROBOTS"})}),Object(o.jsx)("input",{type:"text",value:c,onChange:function(n){var e=n.target;i(e.value)}}),Object(o.jsx)("div",{className:"robots",children:l.map((function(n){return Object(o.jsxs)("div",{className:"robot",children:[Object(o.jsx)("img",{src:"https://robohash.org/".concat(n.id,"?200x200"),alt:"robot"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:n.name}),Object(o.jsx)("p",{children:n.email})]})]},n.id)}))})]})}),m=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(e){var t=e.getCLS,o=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),o(n),s(n),a(n),r(n)}))};A.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),m()},6:function(n,e,t){"use strict";var o=t(3),s=t.n(o),a=t(4),r=t.n(a)()(s.a);r.push([n.i,"body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n}\n","",{version:3,sources:["webpack://./src/index.less"],names:[],mappings:"AAAA;EACE,SAAA;EACA,8JAAA;EAGA,mCAAA;EACA,kCAAA;AADF;AAIA;EACE,+EAAA;AAFF",sourcesContent:["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],sourceRoot:""}]),e.a=r},7:function(n,e,t){"use strict";var o=t(3),s=t.n(o),a=t(4),r=t.n(a)()(s.a);r.push([n.i,".App {\n  text-align: center;\n}\n.App input {\n  padding: 15px;\n  border-radius: 15px;\n  border: 2px solid #000000;\n}\n.App input:focus {\n  outline: none;\n}\n.App .robots {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  column-gap: 10px;\n  row-gap: 10px;\n}\n","",{version:3,sources:["webpack://./src/App.less"],names:[],mappings:"AAIA;EACE,kBAAA;AAHF;AAEA;EAII,aAAA;EACA,mBAAA;EACA,yBAAA;AAHJ;AAMI;EACE,aAAA;AAJN;AANA;EAeI,aAAA;EACA,uBAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;AANJ",sourcesContent:["@primary: #ffffff;\n@secondary: #000000;\n\n\n.App{\n  text-align: center;\n\n  input{\n    padding: 15px;\n    border-radius: 15px;\n    border: 2px solid @secondary;\n\n\n    &:focus{\n      outline: none;\n    }\n  }\n\n  .robots{\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    column-gap: 10px;\n    row-gap: 10px;\n  }\n\n}"],sourceRoot:""}]),e.a=r}},[[15,1,2]]]);
//# sourceMappingURL=main.19154e5b.chunk.js.map