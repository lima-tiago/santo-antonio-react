import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

import GallerySlider from '../../../components/Sections/GallerySlider/'
import VideoPlayer from '../../../components/Sections/VideoPlayer/'

import './styles.scss';

const Paddock = (props) => {
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
            .get('/sitio/paddock/' + language)
            .then(response => {
                setData(response.data);
            })
            .catch(err => console.log(err))
            . finally(() => {
                setIsFetching(false);
            })
    }, [ language ]);

    return (
        <section className="Paddock page-interna mb-2 mb-lg-5">
            {data.page.dados ? <>
            
                <div className="container sm">
                <div className="markup mb-4 mb-lg-5">
                    <h2>
                        {data.page.title}
                    </h2>
                </div>
            </div>
            <div className="container pb-4 pb-lg-5">
                <div className="markup">
                    { data.page.dados.imagem_superior ? (
                        <img src={data.page.dados.imagem_superior} alt=""/>
                    ) : null}
                    { data.page.dados.video_superior ? (
                        <div dangerouslySetInnerHTML={{ __html: `
                            <video autoplay muted loop playsinline>
                                <source src="${data.page.dados.video_superior}" type="video/mp4"/>
                            </video>
                        `}}></div>
                    ) : null}
                </div>
            </div>

            <div className="container sm">
                <div className="markup wow">
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_superior
                    }}></div>
                    <div className="position-relative px-lg-4 mt-5 pt-lg-3 pb-lg-3">
                        <div className="img-legenda legenda-1">
                            {data.page.dados.texto_quadro_verde}
                        </div>
                        { data.page.dados.imagem_secundaria ? (
                            <img src={data.page.dados.imagem_secundaria} alt=""/>
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

            <div className="bg-bege">
                <div className="container sm markup">
                    <blockquote
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_fundo_bege
                    }}></blockquote>
                    <sm className="author">
                        {data.page.dados.autor_texto_fundo_bege}
                    </sm>
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

            <div className="d-flex justify-content-center mt-4 pt-lg-5">
                <img
                    src={require('../../../assets/images/ico/camera.png')}
                    class="ico-camera"
                    alt="Ícone camera"/>
            </div>
            <div className="container pt-5">
                <GallerySlider
                    items={data.fotos.sort(function(a, b){
                        return a.ordem - b.ordem
                    }) || []}/>
            </div>

            <div className="container mt-3 mt-lg-5 pt-lg-2">
                { data.page.dados.embed_youtube ? 
                <VideoPlayer
                    url={data.page.dados.embed_youtube}
                    image={require('../../../assets/images/backgrounds/home-hipica.png')}/> : null}
            </div>

            <div className="container">
                <div className="d-flex justify-content-center mt-5 pt-lg-3">
                    <Link to="/hipica" className="Paddock__btn">
                        Conheça a equipe hípica
                    </Link>
                </div>
            </div> </> : null}
            
        </section>
    )
}

export default Paddock;