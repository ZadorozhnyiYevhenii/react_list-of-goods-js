(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(5),s=n.n(c),i=n(4),o=n(1),r=n(2),a=n.n(r),l=(n(10),n(11),n(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b="alphabetically",j="length";var h=function(){var t=Object(o.useState)(""),e=Object(i.a)(t,2),n=e[0],c=e[1],s=Object(o.useState)(!1),r=Object(i.a)(s,2),h=r[0],d=r[1],g=function(t,e,n){var c=[].concat(u);return e&&c.sort((function(t,n){switch(e){case b:return t.localeCompare(n);case j:return t.length-n.length;default:return 0}})),n&&c.reverse(),c}(0,n,h);return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:a()("button","is-info",{"is-light":n!==b}),onClick:function(){return c(b)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:a()("button","is-success",{"is-light":n!==j}),onClick:function(){return c(j)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:a()("button","is-warning",{"is-light":!h}),onClick:function(){return d(!h)},children:"Reverse"}),(n||h)&&Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){d(!1),c("")},children:"Reset"})]}),Object(l.jsx)("ul",{children:g.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.385afc25.chunk.js.map