import axios from 'axios.instance'
import React, {useState, useEffect, useMemo} from 'react';
import { Link, useLocation} from 'react-router-dom';

import './styles.scss';
import Preloader from 'components/UI/Preloader';
import brandImage from '../../../assets/images/brands/capa.svg';

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
    // Variavel para testar breakpoint menor que 992px
    // eslint-disable-next-line
    const [isMDScreen, setIsMDScreen] = useState(window.innerWidth < 778);
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
            axios.get('equipe/slides/' + language, config)
            .then(response => {
                setData(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsFetching(false);
            })
        } ,[language, config]);


    useEffect( () => {
        setCurrIndex(0);
    }, []);

    const updateState = (index, automatic) => {
        setCurrIndex(index);

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
        <section className="Home" key="historia-slider">
            {data.slides.map((i, index) => (
                <div
                    className=
                    { `Home__bg historia-slider item-${index} ${currIndex === index ? 'active' : ''}` }
                    style={{
                    backgroundImage: `url(data:image/png;base64,${i.image})`
                }}></div>
            ))}

            <div className="Home__nav">
            {   data.slides.map((_, i)=> (
                    <button
                        key={i}
                        className={currIndex === i
                        ? 'active'
                        : ''}
                        onClick={() => updateState(i)}></button>
                ))}
            </div>

            <div className="Home__caption">
                <Link className="Home__caption-brand" to="/">
                    <img src={brandImage} alt="Logomarca Santo Antônio"/>
                </Link>
                <div className="Home__caption-div"></div>
                <h1 className="Home__caption-title">
                    Equipe <br class="d-block d-lg-none"/> Hípica
                </h1>
            </div>

            <nav className="Home__menu">
                <div className="Home__menu-list" data-show={isToggled}>
                    <Link to="/hipica/historia" className="Home__menu-item">
                        <span className="title">{data.pages[9].titulo}</span>
                        <span className="desc">{data.pages[9].phrase}</span>
                    </Link>
                    <Link to="/hipica/equipe" className="Home__menu-item">
                        <span className="title">{data.pages[8].titulo}</span>
                        <span className="desc">{data.pages[8].phrase}</span>
                    </Link>
                    <Link to="/hipica/cavalos" className="Home__menu-item">
                        <span className="title">{data.pages[7].titulo}</span>
                        <span className="desc">{data.pages[7].phrase}</span>
                    </Link>
                    <Link to="/hipica/resultados" className="Home__menu-item">
                        <span className="title">{data.pages[10].titulo}</span>
                        <span className="desc">{data.pages[10].phrase}</span>
                    </Link>
                    <Link to="/hipica/eventos" className="Home__menu-item">
                        <span className="title">{data.pages[11].titulo}</span>
                        <span className="desc">{data.pages[11].phrase}</span>
                    </Link>
                    <Link to="/hipica/midia" className="Home__menu-item">
                        <span className="title">{data.pages[12].titulo}</span>
                        <span className="desc">{data.pages[12].phrase}</span>
                    </Link>
                    <a href="https://chiquinhobrandao.com.br/" class="goToChiquinho">
                        Conheça o Chiquinho Brandão
                    </a>
                </div>
            </nav>

            <button className="Home__toggler" data-isClose={isToggled} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </button>

            <div className="Home__toggler-bg" data-expanded={isToggled}></div>
        </section>
        </>
        : null }
        </>
    )
}

export default Home;