(window.webpackJsonpfrancisco_brandao=window.webpackJsonpfrancisco_brandao||[]).push([[18],{249:function(e,t,a){},270:function(e,t,a){"use strict";a.r(t);var n=a(85),c=a(25),r=a(66),l=a(0),s=a.n(l),o=a(1),i=a(84),u=a.n(i);a(249);t.default=function(e){var t=Object(o.f)(),a=Object(l.useState)(!0),i=Object(c.a)(a,2),m=(i[0],i[1]),b=Object(l.useState)({eventos:!1}),v=Object(c.a)(b,2),E=v[0],f=v[1],p=Object(l.useState)(!1),d=Object(c.a)(p,2),O=d[0],g=d[1],j="P";return t.search.includes("language=en")?j="I":t.search.includes("language=es")&&(j="E"),Object(l.useEffect)(function(){r.a.get("/equipe/eventos/"+j).then(function(e){f(e.data)}).catch(function(e){return console.log(e)}).finally(function(){m(!1)})},[j]),Object(l.useEffect)(function(){var e=[];u.a.each(E.eventos,function(t,a){e.push({ano:t,meses:function(){var e=[];return u.a.each(a,function(t,a){e.push({mes:t,dias:function(){var e=[];return u.a.each(a,function(t,a){e.push(Object(n.a)({dia:t},a))}),e}()})}),e}()})}),g(e)},[E]),s.a.createElement("section",{className:"Eventos page-interna mb-2 mb-lg-5"},O?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container pt-lg-3"},s.a.createElement("div",{className:"markup mbn"},s.a.createElement("h2",{class:"mb-lg-4"},"Eventos"),s.a.createElement("p",null,"Programa\xe7\xe3o de concursos da Equipe Santo Ant\xf4nio"))),s.a.createElement("div",{className:"container"},O.map(function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"d-flex justify-content-center pb-4 pb-lg-3 mb-lg-5 pt-2 pt-lg-5"},s.a.createElement("div",{className:"Eventos__ano"},e.ano)),s.a.createElement("div",{className:"Eventos__table"},s.a.createElement("div",{className:"Eventos__table-header"},s.a.createElement("div",null,"M\xeas"),s.a.createElement("div",null,"Evento"),s.a.createElement("div",null,"Local")),e.meses.map(function(e){return s.a.createElement("div",{className:"Eventos__item"},s.a.createElement("div",{className:"Eventos__item-mes"},s.a.createElement("span",null,e.mes)),s.a.createElement("div",{className:"Eventos__table-header mobile"},s.a.createElement("div",null,"Dias"),s.a.createElement("div",null,"Evento"),s.a.createElement("div",null,"Local")),s.a.createElement("div",{className:"Eventos__table-datas"},e.dias.map(function(e){return s.a.createElement("div",{className:"Eventos__table-item"},s.a.createElement("span",{className:"data"},e.dia),s.a.createElement("span",{className:"evento"},e.descricao),s.a.createElement("div",{className:"local"},s.a.createElement("span",null,e.local),s.a.createElement("span",null,e.estado)))})))})))}))):null)}},66:function(e,t,a){"use strict";var n=a(67),c=a.n(n).a.create({baseURL:"https://agenciawebsorocaba.com.br/equipe_sa/api/v1/"});t.a=c},85:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach(function(t){n(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}a.d(t,"a",function(){return r})}}]);
//# sourceMappingURL=18.163b41c1.chunk.js.map