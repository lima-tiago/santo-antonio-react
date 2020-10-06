import axios from 'axios.instance'
import React, {useState, useEffect, useMemo} from 'react'
import {Link, useLocation} from 'react-router-dom';

import './styles.scss';

import brandImg from '../../assets/images/brands/capa.svg'
import Preloader from 'components/UI/Preloader';

const Home = (props) => {
    const location = useLocation()
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState({page: {dados: false}});
    const [loadingPercentage, setLoadingPercentage] = useState(1);
    // let timeout = false;

        const config = useMemo(() => ({
            onDownloadProgress: progressEvent => {
                const usualUploadSize = 6136058;
                const total = progressEvent.srcElement.getResponseHeader('Real-Content-Length') || usualUploadSize;
                let percentCompleted = Math.round((progressEvent.loaded * 100) / total);
                percentCompleted = percentCompleted === 100 ? 99 : percentCompleted;
                setLoadingPercentage(percentCompleted);
            }
        }), []);

        let language = 'P'
        if (location.search.includes('language=en')) {
            language = 'I'
        } else if (location.search.includes('language=es')) {
            language = 'E'
        }
    
        useEffect( () =>{
    
            axios.get('/pages/home/' + language, config)
            .then(response => {
                setData(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsFetching(false);
            })
        } ,[language, config]);

    const [hasHover,
        setHasHover] = useState(false);
    const [canHover,
        setCanHover] = useState(true);

    const toggleHover = (opt) => {

        if (!opt) {
            setCanHover(false)
            setHasHover(false)
            setTimeout(() => setCanHover(true), 200)
        }

        if (canHover) {
            if (opt === 'left') {
                setHasHover('left');
            } else if (opt === 'right') {
                setHasHover('right');
            }
        }
    }

    return (
        <>
        <Preloader show={isFetching} loadProgress={loadingPercentage}/>
        {data.page.dados ? 
        <>
        <section className="Home page-interna">
                <div
                    class="Home__side left"
                    data-hasHover={canHover
                    ? hasHover === 'left'
                    : false}
                    onMouseEnter={() => toggleHover('left')}
                    onMouseLeave={() => toggleHover(false)}>
                    <img className="background" src={`data:image/png;base64,${data.page.dados.banner_home_sitio}`} alt=""/>
                    <Link to="/sitio" className="Home__side-title">
                        Sítio
                    </Link>
                </div>
                <div
                    className="Home__side right"
                    data-hasHover={canHover
                    ? hasHover === 'right'
                    : false}
                    onMouseEnter={() => toggleHover('right')}
                    onMouseLeave={() => toggleHover(false)}>
                    <img className="background" src={`data:image/png;base64,${data.page.dados.banner_home_equipe}`} alt=""/>
                    <Link to="/hipica" className="Home__side-title">
                        Equipe Hípica
                    </Link>
                </div>
                <div
                    className="Home__center"
                    data-hasHover={canHover
                    ? hasHover
                    : false}>
                    <div className="Home__center-top"></div>
                    <div className="Home__center-brand">
                        <img src={brandImg} alt="Logomarca Santo Antônio"/>
                    </div>
                    <div className="Home__center-middle"></div>
                    <div className="Home__center-bottom"></div>
                </div>
            </section>
        </> : null}
        </>
    )
}

export default Home;