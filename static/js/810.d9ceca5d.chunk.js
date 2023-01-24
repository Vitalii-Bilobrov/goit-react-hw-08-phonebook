"use strict";(self.webpackChunkvit=self.webpackChunkvit||[]).push([[810],{2810:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var a=function(e){return e.contacts.items},r=function(e){return e.filter},i=t(3634),s=t(9434),c=t(184),o=function(e){var n=e.contactItem,t=(0,s.I0)();return(0,c.jsxs)("li",{id:n.id,children:[(0,c.jsx)("span",{children:n.name}),(0,c.jsx)("span",{children:n.number}),(0,c.jsx)("button",{type:"button",onClick:function(){t((0,i.GK)(n.id))},children:"Delete"})]})},u=function(){var e=(0,s.v9)(a),n=(0,s.v9)(r),t=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{children:t.map((function(e){return(0,c.jsx)(o,{contactItem:e},e.id)}))})})},d=t(2791),l=t(7574),h=function(){var e=(0,s.I0)(),n=(0,s.v9)(r);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("label",{children:"Find contact by name"}),(0,c.jsx)("input",{onChange:function(n){e((0,l.M)(n.target.value))},value:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})},m=t(9439),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},f=function(){var e=(0,d.useState)(""),n=(0,m.Z)(e,2),t=n[0],r=n[1],o=(0,d.useState)(""),u=(0,m.Z)(o,2),l=u[0],h=u[1],f=(0,s.I0)(),x=(0,s.v9)(a),j=p(),v=p(),b=function(e){var n=e.target,t=n.name,a=n.value;"name"===t&&r(a),"number"===t&&h(a)},g=function(){r(""),h("")};return(0,c.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),x.some((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return alert("We already have ".concat(t));f((0,i.uK)({name:t,number:l,id:p()})),g()},children:[(0,c.jsx)("label",{id:j,children:"Name"}),(0,c.jsx)("input",{value:t,onChange:b,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:j}),(0,c.jsx)("label",{id:v,children:"Number"}),(0,c.jsx)("input",{value:l,onChange:b,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:v}),(0,c.jsx)("button",{type:"submit",children:"Add contacts"})]})},x=function(){var e=(0,s.v9)(a),n=(0,s.I0)();return(0,d.useEffect)((function(){n((0,i.ll)())}),[n]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{children:"Phonebook"}),(0,c.jsx)(f,{})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:"Contacts"}),e.length?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(h,{}),(0,c.jsx)(u,{})]}):(0,c.jsx)("p",{children:"You dont have any contacts yet"})]})]})}}}]);
//# sourceMappingURL=810.d9ceca5d.chunk.js.map