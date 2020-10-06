import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import $ from 'jquery';

import './styles.scss';

const Eventos = (props) => {
    const location = useLocation();
    // eslint-disable-next-line
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState({
        eventos: false
    });
    const [realdata,
        setrealdata] = useState(false);

    let language = 'P'
    if (location.search.includes('language=en')) {
        language = 'I'
    } else if (location.search.includes('language=es')) {
        language = 'E'
    }

    useEffect(() => {
        axios
            .get('/equipe/eventos/' + language)
            .then(response => {
                setData(response.data);
            })
            .catch(err => console.log(err))
            . finally(() => {
                setIsFetching(false);
            })
    }, [ language ]);

    useEffect( () => {
        const anos = [];
        $.each(data.eventos, function(key, mesesv) { 
           // Adiciona os anos
           anos.push({
               ano: key,
               meses: (() => {
                const meses = [];
                $.each(mesesv, function(key, diasv) { 
                    // Adiciona os meses dentro do ano
                    meses.push({
                        mes: key,
                        dias: (function(){
                            const dias = [];
                            $.each(diasv, function(key, diav) { 
                                // Adiciona os dias dentro do mes
                                dias.push({
                                    dia: key,
                                    ...diav
                                  })
                                })
                            return dias
                        })()
                      })
                    })
                    return meses;
               })()
             })
           })
           setrealdata(anos)
    },[data])

    return (
        <section className="Eventos page-interna mb-2 mb-lg-5">
            {realdata ?
            <>
            <div className="container pt-lg-3">
                <div className="markup mbn">
                    <h2 class="mb-lg-4">Eventos</h2>
                    <p>
                        Programação de concursos da Equipe Santo Antônio
                    </p>
                </div>
            </div>

            <div className="container">
                {realdata.map(ano => (
                        <>
                        <div className="d-flex justify-content-center pb-4 pb-lg-3 mb-lg-5 pt-2 pt-lg-5">
                            <div className="Eventos__ano">
                                {ano.ano}
                            </div>
                        </div>

                        <div className="Eventos__table">
                            <div className="Eventos__table-header">
                                <div>
                                    Mês
                                </div>
                                <div>
                                    Evento
                                </div>
                                <div>
                                    Local
                                </div>
                            </div>
                            
                            {ano.meses.map((meses) => (
                                <div className="Eventos__item">
                                <div className="Eventos__item-mes">
                                    <span>{meses.mes}</span>
                                </div>

                                <div className="Eventos__table-header mobile">
                                    <div>
                                        Dias
                                    </div>
                                    <div>
                                        Evento
                                    </div>
                                    <div>
                                        Local
                                    </div>
                                </div>

                                <div className="Eventos__table-datas">
                                    {meses.dias.map( (dia) => (
                                        <div className="Eventos__table-item">
                                            <span className="data">
                                                {dia.dia}
                                            </span>
                                            <span className="evento">{ dia.descricao}</span>
                                            <div className="local">
                                                <span>{dia.local}</span>
                                                <span>{dia.estado}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            ))}
                        </div>
                    </>
                    )
                )}
            </div>
            </>
            : null}
        </section>
    )
}

export default Eventos;