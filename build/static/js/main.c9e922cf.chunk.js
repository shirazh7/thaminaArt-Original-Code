(this["webpackJsonpthamina-app"]=this["webpackJsonpthamina-app"]||[]).push([[0],{48:function(n,t,e){},49:function(n,t,e){},79:function(n,t,e){"use strict";e.r(t);var i=e(0),r=e(1),a=e(38),c=e.n(a),o=(e(48),e(49),e(2)),d=e(3);function s(){var n=Object(o.a)(["\n  flex: 1;\n  width: 100%;\n  max-width: ",";\n  /*min-height Need more testing*/\n  min-height: 70vh;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  \n"]);return s=function(){return n},n}function l(){var n=Object(o.a)(["\n  width: 100%;\n  min-height: 100%;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return l=function(){return n},n}var j=d.a.div(l());function x(n){return Object(i.jsx)(j,{children:n.children})}d.a.div(s(),(function(n){var t=n.maxWidth;return t||"auto"}));var u=e.p+"static/media/logo_transparent_cropped.773aeb1f.png";function h(){var n=Object(o.a)(["\n    margin: 0;\n    font-size: ",";\n    color: #ffff;\n    font-weight: 600;\n    \n"]);return h=function(){return n},n}function f(){var n=Object(o.a)(["\n    width: ",";  \n    height: ",";  \n    \n    img{\n        width: 100%;\n        height: 100%;\n    }\n    @media screen and (max-width: 380px) {\n        width:15em;\n        height:10em;\n    \n  }\n\n"]);return f=function(){return n},n}function b(){var n=Object(o.a)(["\n    display: flex;\n    align-items: flex-start ;\n    \n"]);return b=function(){return n},n}var m=d.a.div(b()),p=d.a.div(f(),(function(n){var t=n.size;return t?t+"px":"23em"}),(function(n){var t=n.size;return t?t+"px":"14em"}));d.a.h2(h(),(function(n){var t=n.size;return t?t+"px":"10px"}));function g(n){var t=n.logoSize;n.textSize;return Object(i.jsx)(m,{children:Object(i.jsx)(p,{size:t,children:Object(i.jsx)("img",{src:u,alt:"Thamina Art Logo"})})})}var O=e(5);function v(){var n=Object(o.a)(["\n  display: flex;\n  height: ",";\n"]);return v=function(){return n},n}function w(){var n=Object(o.a)(["\n  display: flex;\n  width: ",";\n"]);return w=function(){return n},n}var y=d.a.span(w(),(function(n){var t=n.margin;return"string"===typeof t?t:"".concat(t,"px")})),z=d.a.span(v(),(function(n){var t=n.margin;return"string"===typeof t?t:"".concat(t,"px")}));function k(n){return"horizontal"===n.direction?Object(i.jsx)(y,Object(O.a)({},n)):Object(i.jsx)(z,Object(O.a)({},n))}k.defaultProps={direction:"horizontal"};var A=e(12),P=768,T=e.p+"static/media/landing-page2.9bf4ddd1.jpg";function L(){var n=Object(o.a)(["\n    margin: 0;\n    line-height: 1.3;\n    color: #ffffff;\n    font-weight: 500;\n    font-size: 90px;\n    text-shadow: 0px 0px 15px rgb(0, 0, 0);\n\n    @media screen and (max-width: ","px) {\n        font-size: 60px;\n    \n  }\n  @media screen and (max-width: 370px) {\n        font-size: 40px;\n    \n  }\n   \n"]);return L=function(){return n},n}function F(){var n=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n\n    @media screen and (max-width: ","px) {\n    align-items: center;\n  }\n  \n"]);return F=function(){return n},n}function M(){var n=Object(o.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center; \n"]);return M=function(){return n},n}function C(){var n=Object(o.a)(["\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.2);\n    display: flex;\n    flex-direction: column;\n\n"]);return C=function(){return n},n}function N(){var n=Object(o.a)(["\n    width: 100%;\n    height: 753px;\n    background-image: url(",");\n    background-position: 0px -50px;\n    background-size: cover;\n    @media screen and (max-width: ","px) {\n        height: 700px;\n        background-position: 0px 0px ;\n  }\n    @media screen and (max-width: ","px) {\n        height: 700px;\n        background-position: -310px 0px ;\n  }\n"]);return N=function(){return n},n}var S=d.a.div(N(),T,1217,767),I=d.a.div(C()),W=d.a.div(M()),H=d.a.div(F(),P),X=d.a.h1(L(),P);function B(n){var t=n.children;Object(A.useMediaQuery)({maxWidth:P});return Object(i.jsx)(S,{children:Object(i.jsxs)(I,{children:[t,Object(i.jsx)(W,{children:Object(i.jsxs)(H,{children:[Object(i.jsx)(g,{}),Object(i.jsx)(X,{style:{fontFamily:"vivaldi"},children:" Welcome to My "}),Object(i.jsx)(X,{style:{fontFamily:"vivaldi"},children:" Portfolio... "}),Object(i.jsx)(k,{direction:"vertical",margin:80})]})})]})})}var q=e(19),D=e(25),E=e(14);function Q(){var n=Object(o.a)(["\n  z-index: 99;\n  cursor: pointer;\n"]);return Q=function(){return n},n}var J=d.a.div(Q()),R=function(n){return Object(i.jsx)(E.a.path,Object(O.a)({fill:"transparent",strokeLinecap:"round",strokeWidth:"3"},n))},_={duration:.3};function G(n){var t=n.toggle,e=n.isOpen;return Object(i.jsx)(J,{onClick:t,children:Object(i.jsxs)("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[Object(i.jsx)(R,{animate:e?"open":"closed",initial:!1,variants:{closed:{d:"M 2 2.5 L 20 2.5",stroke:"hsl(0, 0%, 100%)"},open:{d:"M 3 16.5 L 17 2.5",stroke:"hsl(0, 0%, 18%)"}},transition:_}),Object(i.jsx)(R,{d:"M 2 9.423 L 20 9.423",stroke:"hsl(0, 0%, 100%)",animate:e?"open":"closed",initial:!1,variants:{closed:{opacity:1},open:{opacity:0}},transition:_}),Object(i.jsx)(R,{animate:e?"open":"closed",initial:!1,variants:{closed:{d:"M 2 16.346 L 20 16.346",stroke:"hsl(0, 0%, 100%)"},open:{d:"M 3 2.5 L 17 16.346",stroke:"hsl(0, 0%, 18%)"}},transition:_})]})})}function K(){var n=Object(o.a)(["\n  font-weight: 600;\n  height: 42px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  a {\n    text-decoration: none;\n    color: #444;\n    font-size: 20px;\n    transition: all 200ms ease-in-out;\n  }\n  &:hover {\n    a {\n      color: #555;\n    }\n  }\n"]);return K=function(){return n},n}function U(){var n=Object(o.a)(["\n  padding: 0 0.8em;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return U=function(){return n},n}function V(){var n=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return V=function(){return n},n}var Y=d.a.div(V()),Z=d.a.ul(U()),$=Object(d.a)(E.a.li)(K()),nn={transform:"translateX(0em)",opacity:1},tn={transform:"translateX(5em)",opacity:0};function en(n){var t=n.isOpen;return Object(i.jsx)(Y,{children:Object(i.jsxs)(Z,{children:[Object(i.jsx)($,{initial:!1,animate:t?"show":"hide",variants:{show:Object(O.a)(Object(O.a)({},nn),{},{transition:{delay:.3,duration:.2}}),hide:Object(O.a)(Object(O.a)({},tn),{},{transition:{delay:.05,duration:.05}})},children:Object(i.jsx)("a",{href:"/",children:"Home"})}),Object(i.jsx)($,{initial:!1,animate:t?"show":"hide",variants:{show:Object(O.a)(Object(O.a)({},nn),{},{transition:{delay:.4,duration:.2}}),hide:Object(O.a)(Object(O.a)({},tn),{},{transition:{delay:.1,duration:.05}})},children:Object(i.jsx)("a",{href:"/portfolio",children:"Portfoilio"})}),Object(i.jsx)($,{initial:!1,animate:t?"show":"hide",variants:{show:Object(O.a)(Object(O.a)({},nn),{},{transition:{delay:.5,duration:.2}}),hide:Object(O.a)(Object(O.a)({},tn),{},{transition:{delay:.15,duration:.05}})},children:Object(i.jsx)("a",{href:"/about",children:"About"})}),Object(i.jsx)($,{initial:!1,animate:t?"show":"hide",variants:{show:Object(O.a)(Object(O.a)({},nn),{},{transition:{delay:.6,duration:.2}}),hide:Object(O.a)(Object(O.a)({},tn),{},{transition:{delay:.2,duration:.05}})},children:Object(i.jsx)("a",{href:"/contact",children:"Contact"})}),Object(i.jsx)($,{initial:!1,animate:t?"show":"hide",variants:{show:Object(O.a)(Object(O.a)({},nn),{},{transition:{delay:.7,duration:.2}}),hide:Object(O.a)(Object(O.a)({},tn),{},{transition:{delay:.25,duration:.05}})}})]})})}function rn(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 1em;\n"]);return rn=function(){return n},n}function an(){var n=Object(o.a)(["\n  min-width: 300px;\n  width: 100%;\n  max-width: 44%;\n  height: 100%;\n  background-color: #f0bbbb;\n  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);\n  z-index: 90;\n  position: fixed;\n  top: 0;\n  right: 0;\n  transform: translateX(4em);\n  user-select: none;\n  padding: 1em 2.5em;\n"]);return an=function(){return n},n}function cn(){var n=Object(o.a)(["\n  color: ",";\n  cursor: pointer;\n  z-index: 99;\n  transition: all 250ms ease-in-out;\n"]);return cn=function(){return n},n}function on(){var n=Object(o.a)(["\n  display: flex;\n"]);return on=function(){return n},n}var dn=d.a.div(on()),sn=(d.a.div(cn(),(function(n){return n.reverseColor?"#000":"#fff"})),Object(d.a)(E.a.div)(an())),ln=d.a.div(rn()),jn={open:{transform:"translateX(3%)"},closed:{transform:"translateX(103%)"}},xn={type:"spring",duration:1,stiffness:33,delay:.1};function un(n){var t=Object(r.useState)(!1),e=Object(q.a)(t,2),a=e[0],c=e[1];return Object(i.jsxs)(dn,{children:[Object(i.jsx)(G,{toggle:function(){c(!a)},isOpen:a}),Object(i.jsx)(sn,{initial:!1,animate:a?"open":"closed",variants:jn,transition:xn,children:Object(i.jsx)(ln,{children:Object(i.jsx)(en,{isOpen:a})})})]})}function hn(){var n=Object(o.a)(["\n    height: 90%;\n    width: 1px;\n    background-color: #ffff;\n"]);return hn=function(){return n},n}function fn(){var n=Object(o.a)(["\n    font-size: 17px;\n    color: #6C3232;\n    cursor: pointer;\n    text-decoration:solid;\n    outline: none;\n    transition: all 200ms ease-in-out;\n    padding-right: 0px;\n\n    &:hover{\n        filter:contrast(0.1);\n\n    }\n\n"]);return fn=function(){return n},n}function bn(){var n=Object(o.a)(["\n    display:flex;\n    align-items: center;\n"]);return bn=function(){return n},n}function mn(){var n=Object(o.a)(["\n    width: 100%;\n    height: 60px;\n    background-color: rgba(255, 200, 200, 0.70);\n    display: flex;\n    justify-content: flex-end;\n    padding : 17px;\n    \n    @media screen and (max-width: ","px) {\n    align-items: flex-start;\n  }\n\n"]);return mn=function(){return n},n}var pn=d.a.div(mn(),P),gn=d.a.div(bn()),On=d.a.a(fn());d.a.div(hn());function vn(n){var t=Object(A.useMediaQuery)({maxWidth:P});return Object(i.jsxs)(pn,{children:[!t&&Object(i.jsxs)(gn,{children:[Object(i.jsx)(On,{href:"#/",children:"Home "}),Object(i.jsx)(k,{direction:"horizontal",margin:10}),Object(i.jsx)(On,{href:"#/about",children:" About "}),Object(i.jsx)(k,{direction:"horizontal",margin:10}),Object(i.jsx)(On,{href:"#/portfolio",children:" Portfolio "}),Object(i.jsx)(k,{direction:"horizontal",margin:10}),Object(i.jsx)(On,{href:"#/contact",children:" Contact "}),Object(i.jsx)(k,{direction:"horizontal",margin:20})]}),t&&Object(i.jsx)(un,{})]})}var wn=e.p+"static/media/blackNwhite.071e57a0.jpg",yn=e(42);function zn(){var n=Object(o.a)(["  \n    display: flex;\n    flex-direction: row;        \n    color: #5c5b5b;\n    font-size: 20px;\n    cursor: pointer;\n    transition: all 200ms ease-in-out;\n\n    &:not(:last-of-type){\n        margin-right:10px;\n    }\n\n    &:hover{\n        color:#f78484;\n     }\n"]);return zn=function(){return n},n}function kn(){var n=Object(o.a)(["\n    color: rgba(122, 122, 122, 0.637);\n    font-size: 11px;\n    margin:auto;\n    margin-left: 85px;\n    display: flex;\n    align-items: center;\n    margin-top: 9px;\n\n    @media screen and (max-width: 769px) {\n        font-size: 8px;\n        margin-right: 20px;\n        \n  }\n"]);return kn=function(){return n},n}function An(){var n=Object(o.a)(["\n    color: rgba(122, 122, 122, 0.637);\n    font-size: 11px;\n    margin:auto;\n    margin-left: 10px;\n    display: flex;\n    align-items: center;\n    margin-top: 9px;\n\n    @media screen and (max-width: ","px) {\n        font-size: 7px;\n        margin-left: 0px;\n        \n  }\n"]);return An=function(){return n},n}function Pn(){var n=Object(o.a)(["\n    text-decoration: none;\n    font-style:italic;\n    color: #000;\n    font-weight: 500; \n    margin-left: 10px;\n\n    @media screen and (max-width: ","px) {\n        margin-left:0;\n        margin-top: 2px;\n        \n  }\n    \n"]);return Pn=function(){return n},n}function Tn(){var n=Object(o.a)(["\n    margin: 0;\n    margin-bottom: 8px;\n    color: #5c5b5b;\n    font-weight: 400;\n    font-size:24; \n    font-style:italic;\n\n    @media screen and (max-width: ","px) {\n        font-size:10;\n        font-weight: 200;\n        margin-top:4px;\n        margin-left: 20px;\n  }\n\n    \n"]);return Tn=function(){return n},n}function Ln(){var n=Object(o.a)(["\n    display: flex;\n   \n"]);return Ln=function(){return n},n}function Fn(){var n=Object(o.a)([" \n    display: flex;\n"]);return Fn=function(){return n},n}function Mn(){var n=Object(o.a)(["\n    display: flex;\n   \n"]);return Mn=function(){return n},n}function Cn(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction:column;\n\n"]);return Cn=function(){return n},n}function Nn(){var n=Object(o.a)(["\n    width: 100%;\n    min-height: 50px;\n    display: flex;\n    justify-content: space-between;\n    background-color: rgba(239, 191, 189, 0.61);\n    padding: 10px 3em;\n    border-top: 3px solid #979696;\n\n    @media screen and (max-width: 769px) {\n        padding: 0;\n        min-height: 40px;\n        \n  }\n    \n"]);return Nn=function(){return n},n}var Sn=d.a.div(Nn()),In=(d.a.div(Cn()),d.a.div(Mn())),Wn=d.a.div(Fn()),Hn=d.a.div(Ln()),Xn=d.a.h5(Tn(),P),Bn=d.a.a(Pn(),P),qn=d.a.h6(An(),P),Dn=d.a.h6(kn()),En=d.a.div(zn());function Qn(n){return Object(i.jsxs)(Sn,{children:[Object(i.jsxs)(Wn,{children:[Object(i.jsx)(Xn,{children:"Thamina Art"}),Object(i.jsx)(qn,{children:" \xa9 All Rights Reserved, 2021 "})]}),Object(i.jsx)(In,{children:Object(i.jsx)(Bn,{href:"https://instagram.com/thamina.h?igshid=z9z69jeo76wg",children:Object(i.jsxs)(En,{children:[Object(i.jsx)(k,{direction:"horizontal",margin:15}),Object(i.jsx)(D.a,{icon:yn.a})]})})}),Object(i.jsx)(Hn,{children:Object(i.jsx)(Dn,{children:"Designed and Developed by MS Haque"})})]})}var Jn=[{image:e.p+"static/media/PictureOne.a2f4e3ef.jpg"},{image:e.p+"static/media/PictureThree.3f318012.jpg"},{image:e.p+"static/media/PictureFive.84bb1ba6.jpg"},{image:e.p+"static/media/PictureSeven.cf05d69f.jpg"}],Rn=e(29),_n=function(n){var t=n.slides,e=Object(r.useState)(0),a=Object(q.a)(e,2),c=a[0],o=a[1],d=t.length;return console.log(c),!Array.isArray(t)||t.length<=0?null:Object(i.jsxs)("section",{className:"slider",children:[Object(i.jsx)(Rn.a,{className:"left-arrow",onClick:function(){o(0===c?d-1:c-1)}}),Object(i.jsx)(Rn.b,{className:"right-arrow",onClick:function(){o(c===d-1?0:c+1)}}),Jn.map((function(n,t){return Object(i.jsx)("div",{className:t===c?"slide active":"slide",children:t===c&&Object(i.jsx)("img",{src:n.image,alt:"Fav Pics",className:"image"})},t)}))]})};function Gn(){var n=Object(o.a)(["\n    width: 100%;\n    height: 700px;\n    background-image: url(",");\n    background-position: 0px -120px;\n    background-size: cover;\n    \n    \n\n    @media screen and (max-width: ","px) {\n        background-position: 0px 0px;\n        \n  }\n"]);return Gn=function(){return n},n}function Kn(){var n=Object(o.a)(["\n    width: 100% ;\n    height: 100% ;\n    background-color: rgba(239, 191, 189, 0.61);\n    display: flex;\n    flex-direction: column;\n    \n\n"]);return Kn=function(){return n},n}function Un(){var n=Object(o.a)(["\n    font-weight: 300;\n    font-size: 45px;\n    font-style: italic;\n    color: #ffffff;\n    align-items: center;\n    text-shadow: 0px 0px 4px #e41f1f;\n\n"]);return Un=function(){return n},n}function Vn(){var n=Object(o.a)(["\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n\n    \n    \n"]);return Vn=function(){return n},n}d.a.div(Vn());var Yn=d.a.h1(Un()),Zn=d.a.div(Kn()),$n=d.a.div(Gn(),wn,1672);function nt(n){return Object(i.jsxs)(x,{children:[Object(i.jsx)(B,{children:Object(i.jsx)(vn,{})}),Object(i.jsx)(k,{direction:"vertical",margin:.9}),Object(i.jsx)($n,{children:Object(i.jsxs)(Zn,{children:[Object(i.jsx)(Yn,{style:{fontFamily:"vivaldi"},children:"Personal Favourites x"}),Object(i.jsx)(_n,{slides:Jn})]})}),Object(i.jsx)(k,{direction:"vertical",margin:2}),Object(i.jsx)(Qn,{})]})}var tt=e.p+"static/media/Thani.c01c5a9d.jpg",et=e.p+"static/media/quoteBack.40ca4fbe.jpg";function it(){var n=Object(o.a)(["\n    width: 100%;\n    height: 100%;\n    background-image: url(",");\n    background-position: 0px 0px;\n    background-size: cover;\n\n    @media screen and (max-width: ","px) {\n        background-position: -450px 0px;\n  }\n\n\n"]);return it=function(){return n},n}function rt(){var n=Object(o.a)(["\n    width: 100%;\n    height: 30em;\n    \n\n    img{\n        width: 100%;\n        height: 100%;\n    }\n"]);return rt=function(){return n},n}function at(){var n=Object(o.a)(["\n    display:flex;\n    width: 20%;\n    margin-left: 30px;\n    box-shadow: 0px 0px 15px rgb(0,0,0);\n    outline-style:double;\n    outline-width: 10px;\n    outline-color: #f5baba;\n\n\n    @media screen and (max-width: ","px) {\n        width: 50%;\n\n  }\n    \n"]);return at=function(){return n},n}function ct(){var n=Object(o.a)(["\n    margin: 1px;\n    line-height: 1.3;\n    color: #ffffff;\n    box-shadow: 0 0 1 rgb(255, 255, 255);\n    font-weight: 500;\n    font-size: 40px;\n    font-style: normal;\n    text-shadow: 0px 0px 3px #da2020;\n\n    @media screen and (max-width: ","px) {\n        font-size: 20px;\n\n  }\n    \n    \n   \n"]);return ct=function(){return n},n}function ot(){var n=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    margin-right: 20px;\n\n    @media screen and (max-width: ","px) {\n        margin-right: 0;\n  }\n  \n"]);return ot=function(){return n},n}function dt(){var n=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content:space-between;\n  \n"]);return dt=function(){return n},n}function st(){var n=Object(o.a)(["\n    width: 100%;\n    min-height: 700px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around; \n    \n    @media screen and (max-width: ","px) {\n        flex-direction: column;\n  }\n    \n\n"]);return st=function(){return n},n}var lt=d.a.div(st(),P),jt=d.a.div(dt()),xt=d.a.div(ot(),P),ut=d.a.h4(ct(),P),ht=d.a.div(at(),P),ft=d.a.div(rt()),bt=d.a.div(it(),et,P);function mt(n){var t=Object(A.useMediaQuery)({maxWidth:P});return Object(i.jsxs)(x,{children:[Object(i.jsxs)(bt,{children:[Object(i.jsx)(vn,{}),Object(i.jsxs)(lt,{children:[Object(i.jsx)(ht,{children:Object(i.jsx)(ft,{children:Object(i.jsx)("img",{src:tt,alt:"Thamina Art Logo"})})}),Object(i.jsxs)(xt,{children:[Object(i.jsx)(k,{direction:"horizontal",margin:20}),Object(i.jsx)(ut,{style:{fontFamily:"rageIta"},children:" Thamina Haque "}),t&&Object(i.jsx)(k,{direction:"vertical",margin:10}),Object(i.jsx)(ut,{style:{fontFamily:"rageIta"},children:" Sixth Form student studying Media,"}),Object(i.jsx)(ut,{style:{fontFamily:"rageIta"},children:" Sociology & Fine Art x"})]})]}),Object(i.jsxs)(jt,{children:[Object(i.jsx)(ut,{style:{fontFamily:"rageIta"},children:' " An Ordinary Girl with an everyday life, '}),Object(i.jsx)(ut,{style:{fontFamily:"rageIta"},children:'  drawing her way through it x " '}),Object(i.jsx)(ut,{children:" ~ TH "}),Object(i.jsx)(k,{direction:"vertical",margin:20})]}),Object(i.jsx)(k,{direction:"vertical",margin:70})]}),Object(i.jsx)(Qn,{})]})}var pt=e.p+"static/media/logo.7588fb51.png";function gt(){var n=Object(o.a)(["\n    width: 100%;\n    height: 20em;\n    \n\n    img{\n        width: 100%;\n        height: 100%;\n    }\n"]);return gt=function(){return n},n}function Ot(){var n=Object(o.a)(["\n    display:flex;\n    width: 20%;\n    margin-left: 30px;\n    box-shadow: 0px 0px 15px rgb(0,0,0);\n    \n    outline-width: 10px;\n    outline-color: #f5baba;\n\n    @media screen and (max-width: ","px) {\n        width: 58%;\n        margin-bottom:35px;\n  }\n    \n"]);return Ot=function(){return n},n}function vt(){var n=Object(o.a)(["\n    margin: 1px;\n    line-height: 1.3;\n    color: #000000;\n    box-shadow: 0 0 1 rgb(255, 255, 255);\n    font-weight: 600;\n    font-size: 25px;\n    font-style: normal;\n    text-shadow: 0px 10px 30px #ffffff;\n\n    @media screen and (max-width: ","px) {\n        font-size: 20px;\n        margin-top: 10px;\n  }\n   \n"]);return vt=function(){return n},n}function wt(){var n=Object(o.a)(["\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n    margin-right: 0px;\n  \n"]);return wt=function(){return n},n}function yt(){var n=Object(o.a)(["\n    width: 100%;\n    height: 91.5%;\n    display: flex;\n    align-items: center;\n    justify-content: center; \n\n    @media screen and (max-width: ","px) {\n        flex-direction: column;\n  }\n"]);return yt=function(){return n},n}function zt(){var n=Object(o.a)(["\n    width: 100%;\n    height: 100vh ;\n    background-position: 0px;\n    background-size: cover;\n    background-color: #f8dfdf;\n    align-items: center;\n    justify-content: center; \n\n    @media screen and (max-width: ","px) {\n        flex-direction: column;\n  }\n    \n"]);return zt=function(){return n},n}var kt=d.a.div(zt(),P),At=d.a.div(yt(),P),Pt=d.a.div(wt()),Tt=d.a.h3(vt(),P),Lt=d.a.div(Ot(),P),Ft=d.a.div(gt());function Mt(n){return Object(i.jsxs)(kt,{children:[Object(i.jsx)(vn,{}),Object(i.jsxs)(At,{children:[Object(i.jsx)(Lt,{children:Object(i.jsx)(Ft,{children:Object(i.jsx)("img",{src:pt,alt:"Thamina Art Logo"})})}),Object(i.jsx)(k,{direction:"horizontal",margin:40}),Object(i.jsxs)(Pt,{children:[Object(i.jsx)(Tt,{children:" \u25c8 E-Mail: Thamina1042@hotmail.com"}),Object(i.jsx)(Tt,{children:" \u25c8 Instagram: Thamina.h "})]})]}),Object(i.jsx)(Qn,{})]})}var Ct=e(16),Nt=e(6);e(57);function St(){var n=Object(o.a)(["\n    width: 100% ;\n    height: 100% ;\n    background-color:rgba(248, 231, 229, 0.952);\n    display: flex;\n    flex-direction: column;\n\n\n"]);return St=function(){return n},n}function It(){var n=Object(o.a)(["\n    font-size: 15px;\n    margin: 2px;\n    font-weight: 600;\n    color: #000000;\n\n    @media screen and (max-width: ","px) {\n        font-size: 13px;\n    }\n"]);return It=function(){return n},n}function Wt(){var n=Object(o.a)(["\n    font-size: 15px;\n    margin: 2px;\n    font-weight: 500;\n    color: #000000;\n\n    @media screen and (max-width: ","px) {\n        font-size: 13px;\n    }\n\n"]);return Wt=function(){return n},n}function Ht(){var n=Object(o.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: 1;\n    padding: 10px 20px;\n    border-top: 3px ridge  #ffb8b8;\n \n"]);return Ht=function(){return n},n}function Xt(){var n=Object(o.a)(["\n    width: 100%;\n    height: 35em;\n    \n\n    img{\n        width: 100%;\n        height: 100%;\n    }\n\n    @media screen and (max-width: ","px) {\n    height: 25em;\n    }\n \n"]);return Xt=function(){return n},n}function Bt(){var n=Object(o.a)(["\n    width: 100%;\n"]);return Bt=function(){return n},n}function qt(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    width: 330px;\n    min-height: 250px;\n    background-color: #ffffff;\n    box-shadow: 0px 0px 16px rgb(0, 0, 0);\n    margin: 2em;\n    margin-bottom: 1.3em;\n    margin-left: 8em;\n    outline-style:ridge;\n    outline-width: 5px;\n    outline-color: #ffb8b8;\n\n    @media screen and (max-width: ","px) {\n        margin-left: 2.5em;\n    }\n  @media screen and (max-width: ","px) {\n    width: 230px;\n\n    }\n\n"]);return qt=function(){return n},n}d.a.div(qt(),P,281),d.a.div(Bt()),d.a.div(Xt(),281),d.a.div(Ht()),d.a.h2(Wt(),281),d.a.h2(It(),281),d.a.div(St());var Dt=e.p+"static/media/PictureTwo.bfa18f8e.jpg",Et=e.p+"static/media/PictureFour.fa00c8c0.jpg",Qt=e.p+"static/media/PictureSix.5e8758ea.jpg",Jt=e.p+"static/media/PictureEight.e10548ad.jpg",Rt=e.p+"static/media/PictureNine.a63e79ab.jpg",_t=e.p+"static/media/Picture10.c8d9eec6.jpg",Gt=e.p+"static/media/Picture11.15c61939.jpg",Kt=e.p+"static/media/Picture12.2052b7af.jpg",Ut=e.p+"static/media/Picture13.81a7c0fe.jpg",Vt=e.p+"static/media/Picture14.9e697876.jpg",Yt=e.p+"static/media/Picture15.71c291ae.jpg",Zt=e.p+"static/media/Picture16.a63e79ab.jpg";function $t(){var n=Object(o.a)(["\n    flex-wrap:wrap;\n    flex-direction: row;\n    @media screen and (max-width: ","px) {\n        display: block;\n       flex-direction: row;\n       justify-content: flex-start;\n    }\n"]);return $t=function(){return n},n}function ne(){var n=Object(o.a)(["\n    width: 100%;\n    background-color:#f8dfdf;\n    flex-direction:row;\n    align-items: flex-start;\n    justify-content: flex-start;\n"]);return ne=function(){return n},n}function te(){var n=Object(o.a)(["\n    width: 100%;\n    height: 30em;\n    \n\n    img{\n        width: 100%;\n        height: 100%;\n    }\n"]);return te=function(){return n},n}function ee(){var n=Object(o.a)(["\n    \n    width: 13%;\n    box-shadow: 0px 0px 15px rgb(0,0,0);\n    outline-style: ridge;\n    outline-width: 13px;\n    outline-color: #d8b1b1;\n    \n    \n"]);return ee=function(){return n},n}function ie(){var n=Object(o.a)(["\n    \n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 50px; \n    width: 100%;\n    max-width: ",";\n    min-height: 100%;\n    margin-top: 5em;\n    margin-left: 5em;\n    margin-bottom: 5em;\n    flex-direction: row;\n    align-items: flex-start;\n  \n\n  \n"]);return ie=function(){return n},n}var re=d.a.div(ie(),(function(n){var t=n.maxWidth;return t||"auto"})),ae=d.a.div(ee()),ce=d.a.div(te()),oe=d.a.div(ne()),de=d.a.div($t(),980);function se(n){return Object(i.jsx)(oe,{children:Object(i.jsx)(de,{children:Object(i.jsxs)(re,{children:[Object(i.jsx)(ae,{children:Object(i.jsx)(ce,{children:Object(i.jsx)("img",{src:Dt,alt:"Thamina Art Logo"})})}),Object(i.jsx)(k,{direction:"horizontal",margin:150}),Object(i.jsx)(ae,{children:Object(i.jsx)(ce,{children:Object(i.jsx)("img",{src:Et,alt:"Thamina Art Logo"})})}),Object(i.jsx)(k,{direction:"horizontal",margin:150}),Object(i.jsx)(ae,{children:Object(i.jsx)(ce,{children:Object(i.jsx)("img",{src:Qt,alt:"Thamina Art Logo"})})}),Object(i.jsx)(k,{direction:"horizontal",margin:150}),Object(i.jsx)(ae,{children:Object(i.jsx)(ce,{children:Object(i.jsx)("img",{src:Jt,alt:"Thamina Art Logo"})})}),Object(i.jsx)(k,{direction:"horizontal",margin:150}),Object(i.jsx)(ae,{children:Object(i.jsx)(ce,{children:Object(i.jsx)("img",{src:Rt,alt:"Thamina Art Logo"})})}),Object(i.jsx)(k,{direction:"horizontal",margin:150}),Object(i.jsx)(ae,{children:Object(i.jsx)(ce,{children:Object(i.jsx)("img",{src:_t,alt:"Thamina Art Logo"})})}),Object(i.jsx)(k,{direction:"horizontal",margin:150}),Object(i.jsx)(ae,{children:Object(i.jsx)(ce,{children:Object(i.jsx)("img",{src:Gt,alt:"Thamina Art Logo"})})}),Object(i.jsx)(k,{direction:"horizontal",margin:150}),Object(i.jsx)(ae,{children:Object(i.jsx)(ce,{children:Object(i.jsx)("img",{src:Kt,alt:"Thamina Art Logo"})})}),Object(i.jsx)(k,{direction:"horizontal",margin:150}),Object(i.jsx)(ae,{children:Object(i.jsx)(ce,{children:Object(i.jsx)("img",{src:Ut,alt:"Thamina Art Logo"})})}),Object(i.jsx)(k,{direction:"horizontal",margin:150}),Object(i.jsx)(ae,{children:Object(i.jsx)(ce,{children:Object(i.jsx)("img",{src:Vt,alt:"Thamina Art Logo"})})}),Object(i.jsx)(k,{direction:"horizontal",margin:150}),Object(i.jsx)(ae,{children:Object(i.jsx)(ce,{children:Object(i.jsx)("img",{src:Yt,alt:"Thamina Art Logo"})})}),Object(i.jsx)(k,{direction:"horizontal",margin:150}),Object(i.jsx)(ae,{children:Object(i.jsx)(ce,{children:Object(i.jsx)("img",{src:Zt,alt:"Thamina Art Logo"})})}),Object(i.jsx)(k,{direction:"horizontal",margin:150})]})})})}function le(){var n=Object(o.a)(["\n    width: 100% ;\n    height: 100% ;\n    background-color: #ffd7d7;\n    display: flex;\n    flex-direction: column;\n\n    @media screen and (max-width: ","px) {\n        width: 100%;\n    }\n    \n\n"]);return le=function(){return n},n}function je(){var n=Object(o.a)(["\n  flex: 1;\n  width: 100%;\n  max-width: ",";\n  /*min-height Need more testing*/\n  min-height: 70vh;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  \n"]);return je=function(){return n},n}function xe(){var n=Object(o.a)(["\n    margin: 0;\n    line-height: 0.8;\n    color: #000000;\n    font-weight: 500;\n    font-size: 55px;\n    font-style: normal;\n    text-decoration:none;\n    text-shadow: 0px 0px 2px #e45454;\n\n    @media screen and (max-width: ","px) {\n        margin:5px;\n        font-size:43px;\n       \n  }\n    \n   \n"]);return xe=function(){return n},n}var ue=d.a.h1(xe(),P),he=d.a.div(je(),(function(n){var t=n.maxWidth;return t||"auto"})),fe=d.a.div(le(),281);function be(n){return Object(i.jsxs)(x,{children:[Object(i.jsxs)(fe,{children:[Object(i.jsx)(vn,{}),Object(i.jsx)(k,{direction:"vertical",margin:13}),Object(i.jsx)(ue,{style:{fontFamily:"vivaldi"},children:"My Portfolio"}),Object(i.jsx)(he,{children:Object(i.jsx)(se,{})})]}),Object(i.jsx)(Qn,{})]})}var me=function(){return Object(i.jsx)(Ct.b,{children:Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(Ct.b,{children:Object(i.jsxs)(Nt.c,{children:[Object(i.jsx)(Nt.a,{path:"/",exact:!0,component:nt}),Object(i.jsx)(Nt.a,{path:"/thaminaArt/",exact:!0,component:nt}),Object(i.jsx)(Nt.a,{path:"/portfolio/",exact:!0,component:be}),Object(i.jsx)(Nt.a,{path:"/contact/",exact:!0,component:Mt}),Object(i.jsx)(Nt.a,{path:"/about",exact:!0,component:mt})]})})})})},pe=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,81)).then((function(t){var e=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;e(n),i(n),r(n),a(n),c(n)}))};c.a.render(Object(i.jsx)(Ct.a,{children:Object(i.jsx)(me,{})}),document.getElementById("root")),pe()}},[[79,1,2]]]);
//# sourceMappingURL=main.c9e922cf.chunk.js.map