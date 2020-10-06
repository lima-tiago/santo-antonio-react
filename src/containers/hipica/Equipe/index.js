import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {Animated} from "react-animated-css";
import { useLocation } from 'react-router-dom';

import IntegranteLink from '../../../components/UI/IntegranteLink/'

import './styles.scss';

const Equipe = (props) => {
    const location = useLocation();
    // eslint-disable-next-line
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState(false);
    const [currFilter,
        setCurrFilter] = useState('Cavaleiros');

    let language = 'P'
    if (location.search.includes('language=en')) {
        language = 'I'
    } else if (location.search.includes('language=es')) {
        language = 'E'
    }

    useEffect(() => {
        axios
            .get('/equipe/equipe/' + language)
            .then(response => {
                setData(response.data);
            })
            .catch(err => console.log(err))
            . finally(() => {
                setIsFetching(false);
            })
    }, [ language ]);
    

    const changeFilter = (filter) => {
        setCurrFilter(filter)
    }

    return (
        <section className="Equipe page-interna mb-2 mb-lg-5">
            {data ?
            <>
            <div className="container pt-lg-3">
                <div className="markup pb-3 pb-lg-4">
                    <h2 className="mb-lg-4">Equipe</h2>
                    <p>
                        {data.page.dados.frase_superior}
                    </p>
                </div>
            </div>

            <div className="container justify-content-center pb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end">
                        <button onClick={() => changeFilter('Cavaleiros')} className={`btn btn-default w-m mb-3 mb-lg-4 ${currFilter === 'Cavaleiros' ? 'active' : ''}`}>
                            Cavaleiros
                        </button>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center justify-content-lg-center">
                        <button onClick={() => changeFilter('Veterinários')} className={`btn btn-default w-m mb-3 mb-lg-4 ${currFilter === 'Veterinários' ? 'active' : ''}`}>
                            Veterinários
                        </button>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center justify-content-lg-start">
                        <button onClick={() => changeFilter('Tratadores Hípica')} className={`btn btn-default w-m mb-3 mb-lg-4 ${currFilter === 'Tratadores Hípica' ? 'active' : ''}`}>
                            Tratadores Hípica
                        </button>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end">
                        <button onClick={() => changeFilter('Tratadores Paddock')} className={`btn btn-default w-m mb-3 mb-lg-4 ${currFilter === 'Tratadores Paddock' ? 'active' : ''}`}>
                            Tratadores Paddock
                        </button>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center justify-content-lg-center">
                        <button onClick={() => changeFilter('Motorista caminhão')} className={`btn btn-default w-m mb-3 mb-lg-4 ${currFilter === 'Motorista caminhão' ? 'active' : ''}`}>
                            Motorista caminhão
                        </button>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center justify-content-lg-start">
                        <button onClick={() => changeFilter('Ferradores')} className={`btn btn-default w-m mb-3 mb-lg-4 ${currFilter === 'Ferradores' ? 'active' : ''}`}>
                            Ferradores
                        </button>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center justify-content-lg-center">
                        <button onClick={() => changeFilter('Administradores')} className={`btn btn-default w-m mb-3 mb-lg-4 ${currFilter === 'Administradores' ? 'active' : ''}`}>
                            Administradores
                        </button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {data.integrantes ? data.integrantes[currFilter].map( (pessoa) => (
                        <div className="col-md-6 col-lg-4 fadeInUp" key={pessoa.id}>
                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                            <IntegranteLink
                                id={pessoa.slug}
                                nome={pessoa.name}
                                ocupacao={pessoa.function}
                                img={pessoa.image}
                                />
                            </Animated>
                        </div>
                    )
                    ) : null}
                </div>
            </div>
            </>
            : null }
        </section>
    )
}

export default Equipe;