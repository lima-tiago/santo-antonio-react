(window.webpackJsonpfrancisco_brandao=window.webpackJsonpfrancisco_brandao||[]).push([[24],{265:function(e,a,t){},279:function(e,a,t){"use strict";t.r(a);var l=t(25),c=t(66),n=t(0),m=t.n(n),s=t(67),r=(t(265),t(124));a.default=function(e){var a=Object(n.useState)(!0),i=Object(l.a)(a,2),o=(i[0],i[1]),d=Object(n.useState)({page:{dados:!1}}),g=Object(l.a)(d,2),p=g[0],E=g[1];return Object(n.useEffect)(function(){var e="sitio-fauna-data";Object(s.a)(e)?(o(!1),E(JSON.parse(Object(s.a)(e)))):c.a.get("/sitio/fauna").then(function(a){console.log(a),E(a.data),Object(s.b)(e,JSON.stringify(a.data))}).catch(function(e){return console.log(e)}).finally(function(){o(!1)})},[]),m.a.createElement("section",{className:"Fauna page-interna mb-2 mb-lg-5"},p.page.dados?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"container sm"},m.a.createElement("div",{className:"markup mb-4 mb-lg-5"},m.a.createElement("h2",null,p.page.title))),m.a.createElement("div",{className:"container pb-4 pb-lg-5"},m.a.createElement("div",{className:"markup"},m.a.createElement("img",{src:p.page.dados.imagem_superior,alt:""}))),m.a.createElement("div",{className:"container sm"},m.a.createElement("div",{className:"markup"},m.a.createElement("h3",null,p.page.dados.titulo_texto_superior),m.a.createElement("div",{dangerouslySetInnerHTML:{__html:p.page.dados.texto_superior}}))),m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"galeria py-4 py-lg-5 my-lg-4"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-6 pr-lg-0"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-12 mb-lg-3"},m.a.createElement("img",{src:p.page.dados.imagem_central_1,alt:""})),m.a.createElement("div",{className:"col lg-2"}),m.a.createElement("div",{className:"col-lg-10"},m.a.createElement("img",{src:p.page.dados.imagem_central_4,alt:""})))),m.a.createElement("div",{className:"col-lg-6 pt-lg-4"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-10 mb-lg-3 mt-lg-5 pt-lg-5 position-relative"},m.a.createElement("img",{src:p.page.dados.imagem_central_2,alt:""}),m.a.createElement("div",{className:"img-legenda legenda-1"},p.page.dados.descricao_fotos)),m.a.createElement("div",{className:"d-none d-lg-block col-lg-2"}),m.a.createElement("div",{className:"col-lg-7 mb-lg-3"},m.a.createElement("img",{src:p.page.dados.imagem_central_3,alt:""})),m.a.createElement("div",{className:"d-none d-lg-block col-lg-3"}),m.a.createElement("div",{className:"col-lg-10"},m.a.createElement("img",{src:p.page.dados.imagem_central_5,alt:""}))))))),m.a.createElement("div",{className:"container sm"},m.a.createElement("div",{className:"markup"},m.a.createElement("div",{dangerouslySetInnerHTML:{__html:p.page.dados.texto_continuacao}})),m.a.createElement("div",{className:"position-relative px-lg-5 mt-5 pt-lg-3 pb-lg-3"},m.a.createElement("img",{src:p.page.dados.imagem_central_6,alt:""})),m.a.createElement("div",{className:"markup"},m.a.createElement("div",{dangerouslySetInnerHTML:{__html:p.page.dados.texto_continuacao_2}})),m.a.createElement("div",{className:"position-relative px-lg-5 mt-5 pt-lg-3 pb-lg-3"},m.a.createElement("img",{src:p.page.dados.imagem_central_7,alt:""}))),m.a.createElement("div",{className:"d-flex justify-content-center mt-4 pt-lg-5"},m.a.createElement("img",{src:t(123),class:"ico-camera",alt:"\xcdcone camera"})),m.a.createElement("div",{className:"container pt-5"},m.a.createElement(r.a,{items:p.fotos||[]}))):null)}}}]);
//# sourceMappingURL=24.88d34ead.chunk.js.map