import axios from 'axios.instance'
import React, {useState, useEffect, useMemo} from 'react';
import { Link, useLocation } from 'react-router-dom';

import './styles.scss';
import brandImage from '../../../assets/images/brands/capa.svg';
import Preloader from 'components/UI/Preloader';

const Home = (props) => {
    const location = useLocation();
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState({slides: false});
    const [currIndex,
        setCurrIndex] = useState(0);
    const [isAutomatic,
        setIsAutomatic] = useState(true);
    const [isToggled,
        setIsToggled] = useState(false);
    const [loadingPercentage, setLoadingPercentage] = useState(1);

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
    
            axios.get('sitio/slides/' + language, config)
            .then(response => {
                setData(response.data);
                setCurrIndex(0)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsFetching(false);
            })
        } ,[language, config]);

    const updateState = (index, automatic) => {
        setCurrIndex(index)

        if (!automatic) {
            setIsAutomatic(false);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (isAutomatic) {
                updateState(currIndex === data.slides.length - 1
                    ? 0
                    : currIndex + 1, true)
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [currIndex, data.slides.length, isAutomatic]);

    const toggleMenu = () => {
        setIsToggled(oldState => !oldState);
    }

    return (
        <>
        <Preloader show={isFetching} loadProgress={loadingPercentage}/>
        {data.slides ? 
        <>
        <section className="Home-S" key="historia-slider">
            {data.slides.map((i, index) => (
                <div
                    className=
                    { `Home-S__bg historia-slider item-${index} ${currIndex === index ? 'active' : ''}` }
                    style={{
                    backgroundImage: `url(data:image/png;base64,${i.image})`
                }}></div>
            ))}

            <div className="Home-S__nav">
                {data.slides.map((_, i)=> (
                    <button
                        key={i}
                        className={currIndex === i
                        ? 'active'
                        : ''}
                        onClick={() => updateState(i)}></button>
                ))}
            </div>

            <div className="Home-S__caption">
                <h1 className="Home-S__caption-title">
                    Sítio
                </h1>

                <div className="Home-S__caption-div"></div>
                <Link to="/" className="Home-S__caption-brand">
                    <img src={brandImage} alt="Logomarca Santo Antônio"/>
                </Link>
            </div>

            <nav className="Home-S__menu">
                <div className="Home-S__menu-list" data-show={isToggled}>
                    <Link to="/sitio/historia" className="Home-S__menu-item">
                        <span className="title">{data.pages[1].titulo}</span>
                        <span className="desc">{data.pages[1].phrase}</span>
                    </Link>
                    <Link to="/sitio/quemsomos" className="Home-S__menu-item">
                        <span className="title">{data.pages[6].titulo}</span>
                        <span className="desc">{data.pages[6].phrase}</span>
                    </Link>
                    <Link to="/sitio/paddock" className="Home-S__menu-item">
                        <span className="title">{data.pages[2].titulo}</span>
                        <span className="desc">{data.pages[2].phrase}</span>
                    </Link>
                    <Link to="/sitio/fauna" className="Home-S__menu-item">
                        <span className="title">{data.pages[3].titulo}</span>
                        <span className="desc">{data.pages[3].phrase}</span>
                    </Link>
                    <Link to="/sitio/flora" className="Home-S__menu-item">
                        <span className="title">{data.pages[4].titulo}</span>
                        <span className="desc">{data.pages[4].phrase}</span>
                    </Link>
                    <Link to="/sitio/tour" className="Home-S__menu-item">
                        <span className="title">{data.pages[5].titulo}</span>
                        <span className="desc">{data.pages[5].phrase}</span>
                    </Link>
                    <a href="http://francisco-brandao.netlify.app/" class="goToChiquinho">
                        Conheça o Chiquinho Brandão
                    </a>
                </div>
            </nav>

            <button className="Home-S__toggler" data-isClose={isToggled} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </button>

            <div className="Home-S__toggler-bg" data-expanded={isToggled}></div>
        </section>
        </>
        : null }
        </>
    )
}

export default Home;