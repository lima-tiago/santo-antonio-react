import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {Animated} from "react-animated-css";
import { withRouter, useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';

import CavaloLink from '../../../components/UI/CavaloLink/'

import './styles.scss';

const Cavalos = (props) => {
    const location = useLocation();
    const pageItems = 6;
    // eslint-disable-next-line
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState(false);
    const [maxItems,
        setMaxItems] = useState(pageItems);
    const [currFilter,
        setCurrFilter] = useState('No Brasil');
    
    let language = 'P'
    if (location.search.includes('language=en')) {
        language = 'I'
    } else if (location.search.includes('language=es')) {
        language = 'E'
    }

    useEffect(() => {
        axios
            .get('/equipe/cavalos/' + language)
            .then(response => {
                setData(response.data);
            })
            .catch(err => console.log(err))
            . finally(() => {
                setIsFetching(false);
            })

        const queryString = require('query-string');
        var parsed = queryString.parse(props.location.search);
        const params = new URLSearchParams(parsed); 
        const filter = params.get('filter');
    
        if(filter){
            // eslint-disable-next-line
            switch(filter){
                case '7':
                    changeFilter('No Brasil')
                break;
                
                case '8':
                    changeFilter('Na Europa')
                break;

                case '9':
                    changeFilter('Potros')
                break;

                case '10':
                    changeFilter('Marcaram História')
                break;
            }
        }
    }, [ language, props.location.search ]);
        
    
        const changeFilter = (filter) => {
            setCurrFilter(filter);
            setMaxItems(pageItems);
        }

        const loadMore = () => {
            setMaxItems(old => old + pageItems);
        }

    return (
        <section className="Cavalos page-interna mb-2 mb-lg-5">
            {data ?
            <>
                <div className="container pt-lg-3 pb-3 ">
                    <div className="markup pb-lg-4">
                        <h2 class="mb-lg-4">Cavalos</h2>
                        <p>
                            {data.page.dados.frase_superior}
                        </p>
                    </div>
                </div>

                <Element name="cavalos">
                <div className="container justify-content-center pb-5">
                    <div className="row px-lg-0">
                        <div className="col-lg-3 px-lg-4 d-flex">
                            <button onClick={() => changeFilter('No Brasil')} className={`btn-default w-80 mx-lg-0 mb-3 mb-lg-4  ${currFilter === 'No Brasil' ? 'active' : ''}`} >
                                No Brasil
                            </button>
                        </div>
                        <div className="col-lg-3 px-lg-4 d-flex">
                            <button onClick={() => changeFilter('Na Europa')} className={`btn-default w-80 mb-3 mb-lg-4 ml-lg-2  ${currFilter === 'Na Europa' ? 'active' : ''}`}>
                                Na Europa
                            </button>
                        </div>
                        <div className="col-lg-3 px-lg-4 d-flex">
                            <button onClick={() => changeFilter('Potros')} className={`btn-default w-80 mb-3 mb-lg-4  ${currFilter === 'Potros' ? 'active' : ''}`} >
                                Potros
                            </button>
                        </div>
                        <div className="col-lg-3 px-lg-4 d-flex">
                            <button onClick={() => changeFilter('Marcaram História')} className={`btn-default w-80 mb-3 mb-lg-4 mr-lg-0  ${currFilter === 'Marcaram História' ? 'active' : ''}`} >
                                Marcaram a história
                            </button>
                        </div>
                    </div>
                </div>
                </Element>

                
                <div className="container">
                    <div className="row">
                        {/* eslint-disable-next-line */}
                        {data.cavalos[currFilter] ? data.cavalos[currFilter].map( (cavalo, i) => {
                            if( i < maxItems){
                            return(
                                <div className="col-md-6 col-lg-4 fadeInUp mb-3" key={cavalo.id}>
                                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                                    <CavaloLink
                                        id={cavalo.slug}
                                        nome={cavalo.name}
                                        has_interna={cavalo.has_interna}
                                        pais={cavalo.bio}
                                        nascimento={cavalo.date_nasc}
                                        detalhes={cavalo.altura ? `${cavalo.status} – ${cavalo.pelagem} – ${cavalo.raça} | altura: ${cavalo.altura}` : null}
                                        img={cavalo.image}
                                    />
                                    </Animated>
                                </div>
                            )
                            }
                        })
                        : null }
                    </div>
                </div>  
            

                {data.cavalos[currFilter].length > maxItems ? 
                <div className="container">
                    <div className="row pt-lg-5">
                        <div className="d-flex w-100 justify-content-center">
                            <button className="btn-sm" onClick={loadMore}>Mostrar mais</button>
                        </div>
                    </div>
                </div> : null}
            </>
            : null}
        </section>
    )
}

export default withRouter(Cavalos);;