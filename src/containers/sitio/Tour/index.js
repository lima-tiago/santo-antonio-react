import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import './styles.scss';

const Flora = (props) => {
    const location = useLocation();
    // eslint-disable-next-line
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState({
        page: {
            dados: false
        }
    });

    let language = 'P'
    if (location.search.includes('language=en')) {
        language = 'I'
    } else if (location.search.includes('language=es')) {
        language = 'E'
    }

    useEffect(() => {
        axios
            .get('/sitio/tour/' + language)
            .then(response => {
                setData(response.data);
            })
            .catch(err => console.log(err))
            . finally(() => {
                setIsFetching(false);
            })
    }, [language]);

    return (
        <section className="Flora page-interna mb-2 mb-lg-5">
            {data.page.dados ? 
            <>
<div className="container sm">
                <div className="markup mb-4 mb-lg-5">
                    <h2>
                        {data.page.title}
                    </h2>
                </div>
            </div>
            <div className="container pb-4 pb-lg-5">
                <div className="markup">
                    <img src={data.page.dados.imagem_superior} alt=""/>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <h3>{data.page.dados.titulo_texto_superior}</h3>

                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_superior
                    }}></div>
                </div>
            </div>

            <div className="bg-bege">
                <div className="container sm">
                    <div className="markup">
                        <h4 className="mt-0">
                            {data.page.dados.titulo_texto_continuacao}
                        </h4>
                        <div
                            dangerouslySetInnerHTML={{
                            __html: data.page.dados.texto_fundo_bege
                        }}></div>
                        <div className="position-relative px-lg-5 mx-lg-5 pt-4 mt-1">
                            <img src={data.page.dados.imagem_fundo_bege} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <h4 className="mt-3">
                        {data.page.dados.titulo_texto_continuacao_2}
                    </h4>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_continuacao_2
                    }}></div>
                    <div className="position-relative px-lg-5 mx-lg-5">
                        <img src={data.page.dados.imagem_texto_continuacao_2} alt=""/>
                    </div>
                </div>
            </div>

            <div className="bg-bege">
                <div className="container">
                    <div className="markup">
                        <h4 className="mt-0">
                            {data.page.dados.titulo_texto_continuacao_3}
                        </h4>
                    </div>
                </div>
                <div className="container sm">
                    <div className="markup">
                        <div
                            dangerouslySetInnerHTML={{
                            __html: data.page.dados.texto_continuacao_3
                        }}></div>
                        <div className="position-relative px-lg-5 mx-lg-5 pt-4">
                            <img src={data.page.dados.imagem_texto_continuacao_3} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <h4 className="mt-3">
                        {data.page.dados.titulo_texto_continuacao_4}
                    </h4>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_continuacao_4
                    }}></div>
                    <div className="position-relative px-lg-5 mx-lg-5 pt-4">
                        {data.page.dados.imagem_texto_continuacao_4 ? (
                            <img src={data.page.dados.imagem_texto_continuacao_4} alt=""/>
                        ) : null}
                        {data.page.dados.video_superior ? (
                            <div dangerouslySetInnerHTML={{ __html: `
                                <video autoplay muted loop playsinline>
                                    <source src="${data.page.dados.video_superior}" type="video/mp4"/>
                                </video>
                            `}}></div>
                        ) : null}
                    </div>
                </div>
            </div>

            <div className="bg-bege">
                <div className="container">
                    <div className="markup">
                        <h4 className="mt-0">
                            {data.page.dados.titulo_texto_continuacao_5}
                        </h4>
                    </div>
                </div>
                <div className="container sm">
                    <div className="markup">
                        <div
                            dangerouslySetInnerHTML={{
                            __html: data.page.dados.texto_continuacao_5
                        }}></div>
                        <div className="position-relative px-lg-5 mx-lg-5 pt-4">
                            {data.page.dados.imagem_texto_continuacao_5 ? (
                                <img src={data.page.dados.imagem_texto_continuacao_5} alt=""/>
                            ) : null}
                            {data.page.dados.video_secundario ? (
                                <div dangerouslySetInnerHTML={{ __html: `
                                    <video autoplay muted loop playsinline>
                                        <source src="${data.page.dados.video_secundario}" type="video/mp4"/>
                                    </video>
                                `}}></div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <h4 className="mt-3">
                        {data.page.dados.titulo_texto_continuacao_6}
                    </h4>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_continuacao_6
                    }}></div>
                    <div className="position-relative px-lg-5 mx-lg-5 pt-4">
                        <img src={data.page.dados.imagem_texto_continuacao_6} alt=""/>
                    </div>
                </div>
            </div>
            </>
            : null}

        </section>
    )
}

export default Flora;