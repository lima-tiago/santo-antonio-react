(window.webpackJsonpfrancisco_brandao=window.webpackJsonpfrancisco_brandao||[]).push([[16],{263:function(e,a,t){},264:function(e,a,t){e.exports=t.p+"static/media/home-hipica.3c85dca7.png"},278:function(e,a,t){"use strict";t.r(a);var c=t(25),l=t(66),n=t(0),r=t.n(n),o=t(67),s=t(5),i=t(124),m=t(79);t(263);a.default=function(e){var a=Object(n.useState)(!0),d=Object(c.a)(a,2),u=(d[0],d[1]),p=Object(n.useState)({page:{dados:!1}}),g=Object(c.a)(p,2),v=g[0],E=g[1];return Object(n.useEffect)(function(){var e="sitio-paddock-data";Object(o.a)(e)?(console.log(JSON.parse(Object(o.a)(e))),u(!1),E(JSON.parse(Object(o.a)(e)))):l.a.get("/sitio/paddock").then(function(a){console.log(a),E(a.data),Object(o.b)(e,JSON.stringify(a.data))}).catch(function(e){return console.log(e)}).finally(function(){u(!1)})},[]),r.a.createElement("section",{className:"Paddock page-interna mb-2 mb-lg-5"},v.page.dados?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container sm"},r.a.createElement("div",{className:"markup mb-4 mb-lg-5"},r.a.createElement("h2",null,v.page.title))),r.a.createElement("div",{className:"container pb-4 pb-lg-5"},r.a.createElement("div",{className:"markup"},v.page.dados.imagem_superior?r.a.createElement("img",{src:v.page.dados.imagem_superior,alt:""}):null,v.page.dados.video_superior?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:'\n                            <video autoplay muted loop >\n                                <source src="'.concat(v.page.dados.video_superior,'" type="video/mp4"/>\n                            </video>\n                        ')}}):null)),r.a.createElement("div",{className:"container sm"},r.a.createElement("div",{className:"markup wow"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:v.page.dados.texto_superior}}),r.a.createElement("div",{className:"position-relative px-lg-4 mt-5 pt-lg-3 pb-lg-3"},r.a.createElement("div",{className:"img-legenda legenda-1"},v.page.dados.texto_quadro_verde),v.page.dados.imagem_secundaria?r.a.createElement("img",{src:v.page.dados.imagem_secundaria,alt:""}):null,v.page.dados.video_secundario?r.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0},r.a.createElement("source",{src:v.page.dados.video_secundario,type:"video/mp4"})):null))),r.a.createElement("div",{className:"bg-bege"},r.a.createElement("div",{className:"container sm markup"},r.a.createElement("blockquote",{dangerouslySetInnerHTML:{__html:v.page.dados.texto_fundo_bege}}),r.a.createElement("sm",{className:"author"},v.page.dados.autor_texto_fundo_bege))),r.a.createElement("div",{className:"container sm"},r.a.createElement("div",{className:"markup"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:v.page.dados.texto_final}}))),r.a.createElement("div",{className:"d-flex justify-content-center mt-4 pt-lg-5"},r.a.createElement("img",{src:t(123),class:"ico-camera",alt:"\xcdcone camera"})),r.a.createElement("div",{className:"container pt-5"},r.a.createElement(i.a,{items:v.fotos.sort(function(e,a){return e.ordem-a.ordem})||[]})),r.a.createElement("div",{className:"container mt-3 mt-lg-5 pt-lg-2"},v.page.dados.embed_youtube?r.a.createElement(m.a,{url:v.page.dados.embed_youtube,image:t(264)}):null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-center mt-5 pt-lg-3"},r.a.createElement(s.b,{to:"/hipica",className:"Paddock__btn"},"Conhe\xe7a a equipe h\xedpica")))," "):null)}},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){"use strict";var c=t(25),l=t(0),n=t.n(l),r=t(71),o=t.n(r),s=t(282),i=(t(77),function(e){var a=e.closeModal,c=e.visible,l=e.url;return n.a.createElement(s.a,null,n.a.createElement("aside",{className:"VideoModal","data-visible":c},n.a.createElement("div",{className:"container position-relative"},n.a.createElement("header",{className:"VideoModal__header"},n.a.createElement("div",{className:"left"},n.a.createElement("img",{class:"icon",src:t(70),alt:"Camera"}),n.a.createElement("h3",{class:"title"},"V\xeddeo")),n.a.createElement("button",{onClick:a,className:"VideoModal__close",title:"Fechar modal"})),n.a.createElement("div",{className:"VideoModal__content"},n.a.createElement("iframe",{src:l,className:"video-iframe",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))))});t(78),a.a=function(e){var a=e.image,t=e.url,r=e.size,s=e.cap1,m=e.cap2,d=Object(l.useState)(!1),u=Object(c.a)(d,2),p=u[0],g=u[1],v=function(){g(!0)};return n.a.createElement(n.a.Fragment,null,n.a.createElement("article",{className:"VideoPlayer","data-size":r,onClick:v},n.a.createElement("div",{className:"position-relative"},n.a.createElement("div",{className:"VideoPlayer__img"},n.a.createElement("div",{className:"overlay"}),n.a.createElement("img",{src:a,alt:"Foto de background do video"})),n.a.createElement("button",{className:"VideoPlayer__play",title:"Abrir modal do video",onClick:v})),s?n.a.createElement("div",{className:"VideoPlayer__caption"},n.a.createElement("div",{className:"cap1"},s),n.a.createElement("div",{className:"cap2"},m)):null),n.a.createElement(i,{closeModal:function(){o()("iframe").each(function(){var e=o()(this).attr("src");o()(this).attr("src",e)}),g(!1)},visible:p,url:t}))}}}]);
//# sourceMappingURL=16.7d06bc6a.chunk.js.map