import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import './styles.scss';

const Historia = (props) => {
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
    const [historiaPais, setHistoriaPais] = useState('brasil');

    let language = 'P'
    if (location.search.includes('language=en')) {
        language = 'I'
    } else if (location.search.includes('language=es')) {
        language = 'E'
    }

    useEffect(() => {
        axios
            .get('/equipe/historia/' + language)
            .then(response => {
                setData(response.data);
            })
            .catch(err => console.log(err))
            . finally(() => {
                setIsFetching(false);
            })
    }, [language]);

    console.log(data)

    return (
        <section className="Historia-h page-interna mb-2 mb-lg-5">
            {data.page.dados ? 
            <>
            <div className="container sm pt-lg-3">
                <div className="markup mb-3">
                    <h2 class="mb-0">
                        {data.page.title}
                    </h2>
                </div>
            </div>
            <div className="container pb-4 pb-lg-5 px-lg-5">
                <figure className="markup px-lg-5">
                    <img src={data.page.dados.imagem_superior} alt=""/>
                    <figcaption className="text-center mt-4">
                        {data.page.dados.legenda_imagem_superior}
                    </figcaption>
                </figure>
            </div>
            <div className="container sm pt-lg-5">
                <div className="markup wow">
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_superior
                    }}></div>
                </div>
            </div>
            <div class="Historia-ativa">
                <div class="container">
                    <div class="Historia-ativa__title">
                        <h2>EQUIPE SANTO ANTÔNIO</h2>
                    </div>
                    <div class="Historia-ativa__toggle">
                        <button onClick={() => setHistoriaPais('brasil')} class={historiaPais === 'brasil' ? 'selected' : ''}>
                            No Brasil
                        </button>
                        <button onClick={() => setHistoriaPais('europa')} class={historiaPais === 'europa' ? 'selected' : ''}>
                            Na Europa
                        </button>
                    </div>
                </div>
            </div>

            { historiaPais === 'brasil' ? (
                <>
                    { data.page.dados.titulo_objetivo || data.page.dados.texto_objetivo ? (
                        <div className="bg-bege">
                            <div className="container sm">
                                <div className="markup">
                                    <h4 class="mb-4 mt-0">{data.page.dados.titulo_objetivo}</h4>
                                    <blockquote
                                        dangerouslySetInnerHTML={{
                                        __html: data.page.dados.texto_objetivo
                                    }}></blockquote>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    { data.page.dados.titulo_historia_hipismo || data.page.dados.imagem_historia_hipismo ||
                        data.page.dados.legenda_imagem_historia_hipismo || data.page.dados.texto_hipismo || data.page.dados['imagem_historia_hipismo2'] ||
                        data.page.dados.legenda_imagem_hipismo2 ? (
                        <div className="container sm">
                            <div className="markup pt-lg-1">
                                <h4>{data.page.dados.titulo_historia_hipismo}</h4>
                                <figure className="pb-4 pb-lg-5">
                                    <img src={data.page.dados.imagem_historia_hipismo} alt=""/>
                                    <figcaption className="text-right">
                                        {data.page.dados.legenda_imagem_historia_hipismo}
                                    </figcaption>
                                </figure>
                                <div className="px-lg-4"
                                    dangerouslySetInnerHTML={{
                                    __html: data.page.dados.texto_hipismo
                                }}></div>

                                <div className="px-3 pt-4">
                                    <figure>
                                        <img src={data.page.dados['imagem_historia_hipismo2']}alt=""/>
                                        <figcaption className="text-right">
                                            {data.page.dados.legenda_imagem_hipismo2}
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    { data.page.dados.texto_citacao_bege || data.page.dados.titulo_citacao_bege ? (
                        <div className="bg-bege">
                            <div className="container sm markup">
                                <blockquote
                                    dangerouslySetInnerHTML={{
                                    __html: data.page.dados.texto_citacao_bege
                                }}></blockquote>
                                <sm className="author">
                                    {data.page.dados.titulo_citacao_bege}
                                </sm>
                            </div>
                        </div>
                    ) : null}

                    <div className="container sm">
                        <div className="markup">
                            <div
                                dangerouslySetInnerHTML={{
                                __html: data.page.dados.texto_continuacao
                            }}></div>
                        </div>
                    </div>

                    <div className="container sm">
                        <div className="markup pt-3 pt-lg-4">
                            <h4>{data.page.dados.titulo_texto_tropa}</h4>
                            <div
                                dangerouslySetInnerHTML={{
                                __html: data.page.dados.texto_tropa
                            }}></div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row pt-3 pt-lg-5 mt-lg-3">
                            <figure className="col-lg-6">
                                <img
                                    height="400"
                                    style={{
                                    objectFit: 'cover'
                                }}
                                    src={data.page.dados['img-hipismo-2']}
                                    alt=""/>
                                    <figcaption className="text-right">
                                        {data.page.dados['legenda_img-hipismo-2']}
                                    </figcaption>
                            </figure>
                            <figure className="col-lg-6">
                                <img
                                    height="400"
                                    style={{
                                    objectFit: 'cover'
                                }}
                                    src={data.page.dados['img-hipismo-3']}
                                    alt=""/>
                                    <figcaption className="text-right">
                                        {data.page.dados['legenda_img-hipismo-3']}
                                    </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="container sm">
                        <div className="markup pt-4 pt-lg-5">
                            <h4>{data.page.dados.titulo_texto_cavaleiro_novo}</h4>
                            <div className="px-lg-4"
                                dangerouslySetInnerHTML={{
                                __html: data.page.dados.texto_cavaleiro_novo
                            }}></div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row pt-3 pt-lg-5 mt-lg-3 justify-content-center">
                            <div className="col-lg-7 px-lg-0">
                                <figure>
                                <img
                                    height="700"
                                    style={{
                                    objectFit: 'cover'
                                }}
                                    src={data.page.dados['img-hipismo-4']}
                                    alt=""/>
                                    <figcaption class="text-right">
                                        {data.page.dados['legenda_img-hipismo-4']}
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="container sm">
                        <div className="markup pt-4 pt-lg-5">
                            <h4>{data.page.dados.titulo_texto_acidentes}</h4>
                            <div
                                dangerouslySetInnerHTML={{
                                __html: data.page.dados.texto_acidentes
                            }}></div>
                        </div>
                    </div>

                    <div className="bg-bege overlay-1">
                        <div className="container sm">
                            <div className="markup">
                                <h4 className="mt-0">{data.page.dados.titulo_texto_a_equipe}</h4>
                                <div
                                    dangerouslySetInnerHTML={{
                                    __html: data.page.dados.texto_a_equipe
                                }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="container sm">
                        <div className="galeria-1">
                            <div className="row">
                                <div className="col-lg-6 pr-lg-0">
                                    <img
                                        className="mb-0"
                                        height="350"
                                        style={{
                                        objectFit: 'cover'
                                    }}
                                        src={data.page.dados['img-hipismo-6']}
                                        alt=""/>
                                    <img
                                        height="350"
                                        style={{
                                        objectFit: 'cover'
                                    }}
                                        src={data.page.dados['img-hipismo-7']}
                                        alt=""/>
                                </div>
                                <div className="col-lg-6 pl-lg-0">
                                    <img
                                        height="700"
                                        style={{
                                        objectFit: 'cover'
                                    }}
                                        src={data.page.dados['img-hipismo-8']}
                                        alt=""/>
                                </div>
                            </div>
                            <figcaption className="text-right mt-3">
                                {data.page.dados['legenda_img-hipismo-8']}
                            </figcaption>
                        </div>

                        <div className="markup pt-4 pt-lg-5 pb-lg-1">
                            <div
                                dangerouslySetInnerHTML={{
                                __html: data.page.dados.texto_a_equipe_continuacao
                            }}></div>
                        </div>
                    </div>

                    <div className="bg-bege">
                        <div className="container sm markup">
                            <blockquote
                                dangerouslySetInnerHTML={{
                                __html: data.page.dados.texto_fundo_bege2
                            }}></blockquote>
                            <sm className="author">
                                {data.page.dados.titulo_citacao_bege2}
                            </sm>
                        </div>
                    </div>

                    <div className="container sm py-lg-3">
                        <div className="markup">
                            <div
                                className="px-lg-4"
                                dangerouslySetInnerHTML={{
                                __html: data.page.dados.texto_continuacao_2
                            }}></div>
                        </div>
                    </div>

                    <div className="bg-bege">
                        <div className="container sm markup">
                        <blockquote
                                dangerouslySetInnerHTML={{
                                __html: data.page.dados.texto_fundo_bege3
                            }}></blockquote>
                            <sm className="author">
                            {data.page.dados.titulo_citacao_bege3}
                            </sm>
                        </div>
                    </div>

                    <div className="container pt-lg-4">
                        <div className="row pt-3 pt-lg-5 mt-lg-3">
                            <div className="col-lg-6 pr-lg-0">
                                <img
                                    height="300"
                                    style={{
                                    objectFit: 'cover'
                                }}
                                src={data.page.dados['img-hipismo-9']}
                                    alt=""/>
                                <img
                                    height="400"
                                    style={{
                                    objectFit: 'cover'
                                }}
                                src={data.page.dados['img-hipismo-10']}
                                    alt=""/>
                            </div>
                            <div className="col-lg-6 pl-lg-0">
                                <img
                                    height="300"
                                    style={{
                                    objectFit: 'cover'
                                }}
                                src={data.page.dados['img-hipismo-11']}
                                    alt=""/>
                                <img
                                    height="400"
                                    style={{
                                    objectFit: 'cover'
                                }}
                                src={data.page.dados['img-hipismo-12']}
                                    alt=""/>
                            </div>
                        </div>
                        <figcaption className="text-right mt-3">
                            {data.page.dados['legenda_img-hipismo-12']}
                        </figcaption>
                    </div>

                    { data.page.dados.titulo_texto_nova_empreitada || data.page.dados.texto_nova_empreitada ||
                        data.page.dados['img-hipismo-13'] || data.page.dados['legenda_foto_inferior'] ? (
                        <div className="container sm pt-4 pt-lg-5">
                            <div className="markup">
                                <h4>
                                    {data.page.dados.titulo_texto_nova_empreitada}
                                </h4>
                                <div
                                    dangerouslySetInnerHTML={{
                                    __html: data.page.dados.texto_nova_empreitada
                                }}></div>
                                <div className="pt-4 pt-lg-5 mt-lg-3">
                                    <figure>
                                        <img src={data.page.dados['img-hipismo-13']}alt=""/>
                                        <figcaption class="text-right">
                                            {data.page.dados["legenda_foto_inferior"]}
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </>

            ) : (
                <>
                    { data.page.dados.titulo_objetivo_europa || data.page.dados.texto_objetivo_europa ? (
                        <div className="bg-bege">
                            <div className="container sm">
                                <div className="markup">
                                    <h4 class="mb-4 mt-0">{data.page.dados.titulo_objetivo_europa}</h4>
                                    <blockquote
                                        dangerouslySetInnerHTML={{
                                        __html: data.page.dados.texto_objetivo_europa
                                    }}></blockquote>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    { data.page.dados.titulo_texto_nova_empreitada_europa || data.page.dados.texto_nova_empreitada_europa ||
                        data.page.dados['img-hipismo-13_europa'] || data.page.dados['legenda_foto_inferior_europa'] ? (
                        <div className="container sm">
                            <div className="markup">
                                <h4>
                                    {data.page.dados.titulo_texto_nova_empreitada_europa}
                                </h4>
                                <div
                                    dangerouslySetInnerHTML={{
                                    __html: data.page.dados.texto_nova_empreitada_europa
                                }}></div>
                                <div className="pt-4 pt-lg-5 mt-lg-3">
                                    <figure>
                                        <img src={data.page.dados['img-hipismo-13_europa']}alt=""/>
                                        <figcaption class="text-right">
                                            {data.page.dados["legenda_foto_inferior_europa"]}
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </>
            )}
            </>
            : null}
        </section>
    )
}

export default Historia;