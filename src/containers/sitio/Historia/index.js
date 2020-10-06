import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import './styles.scss';

const Hipismo = (props) => {
    const location = useLocation();
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
            .get('/sitio/historia/' + language)
            .then(response => {
                setData(response.data);
            })
            .catch(err => console.log(err))
            . finally(() => {
                setIsFetching(false);
            })
    }, []);

    return (
        <section className="Historia page-interna mb-2 mb-lg-5">
           {data.page.dados ? <>
            <div className="container sm">
                <div className="markup">
                    <h2>
                        {data.page.title}
                    </h2>

                    {data.page.dados.video_superior ? (
                        <div dangerouslySetInnerHTML={{
                            __html: `
                            <video autoplay muted loop playsinline>
                                <source src="${data.page.dados.video_superior}" type="video/mp4"/>
                            </video>
                        `}}></div>
                    ) : null}

                    <h3>
                        {data.page.dados.titulo_texto}
                    </h3>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_superior
                    }}></div>
                </div>
            </div>

            <div className="bg-bege">
                <div className="container sm markup">
                    <blockquote
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_fundo_bege
                    }}></blockquote>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_abaixo_fundo_bege
                    }}></div>
                </div>
            </div>

            <div className="container">
                <div className="row my-5 py-lg-4">
                    <div className="col-lg-5 position-relative">
                        <img src={data.page.dados.imagem_historia_1} class="img-1" alt=""/>
                    </div>
                    <div className="col-lg-7 position-relative">
                        <img src={data.page.dados.imagem_historia_2} alt=""/>
                        <div className="img-legenda legenda-1">
                            {data.page.dados.texto_quadro_verde}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container sm pb-4 pb-lg-5">
                <div className="markup">
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_entre_imagens
                    }}></div>
                </div>
            </div>

            <div className="container pb-4 pb-lg-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={data.page.dados.imagem_historia_3} alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <img src={data.page.dados.imagem_historia_4} alt=""/>
                    </div>
                </div>
            </div>

            <div className="container sm pb-4 pb-lg-5">
                <div className="markup">
                <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_entre_imagens_2
                    }}></div>
                </div>
            </div>

            <div className="container pb-4 pb-lg-5">
                <div className="markup">
                    <img src={data.page.dados.imagem_historia_5} alt=""/>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_final
                    }}></div>
                </div>
            </div>
           </> : null}
        </section>
    )
}

export default Hipismo;