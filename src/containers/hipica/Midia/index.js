import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';
import {Animated} from "react-animated-css";

import MidiaLink from '../../../components/UI/MidiaLink/'
import Pagination from './MidiaPagination'

import './styles.scss';

const Midia = (props) => {
    const location = useLocation();
    // eslint-disable-next-line
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState({page: {dados: false}});
        const [currFilter,
            setCurrFilter] = useState({cavaleiro: false, cavalos: false, anos: false});
            const [paginate,
                setPaginate] = useState(1);
            const [currItems,
                setCurrItems] = useState([]);
            const [pageItems,
                setPageItems] = useState([]);

        let listCavaleiros = [];
        let listCavalos = [];
        let listAnos = [];
    
        if (data.posts) {
            data
                .posts.forEach( post => {
                    post.integrantes_data.forEach( integrante => {
                        listCavaleiros.push({label: integrante.label, value: integrante.id})
                    })
                });

            listCavaleiros = listCavaleiros
            .filter((thing, index, self) => index === self.findIndex((t) => (t.value === thing.value)));
                
            data
                .posts.forEach( post => {
                    post.cavalos_data.forEach( integrante => {
                        listCavalos.push({label: integrante.label, value: integrante.id})
                    })
                });
            listCavalos = listCavalos.filter((thing, index, self) => index === self.findIndex((t) => (t.place === thing.place && t.value === thing.value)))
    
            listAnos = data
                .posts
                .map(i => {
                   if(i.date_of_publication){
                    return ({
                        label: new Date(i.date_of_publication).getFullYear(),
                        value: new Date(i.date_of_publication).getFullYear()
                    })
                   }

                   return {
                       label: 2019,
                       value: 2019,
                   }
                })
                .filter((thing, index, self) => index === self.findIndex((t) => (t.place === thing.place && t.value === thing.value)))
                .sort((a,b)=>b.value-a.value)


            console.log(listAnos)

        }

        let language = 'P'
        if (location.search.includes('language=en')) {
            language = 'I'
        } else if (location.search.includes('language=es')) {
            language = 'E'
        }
    
        useEffect(() => {
            axios
                .get('/equipe/midia/' + language)
                .then(response => {
                    setData(response.data);
                })
                .catch(err => console.log(err))
                . finally(() => {
                    setIsFetching(false);
                })
        }, [ language ]);
    
        const changeFilter = (key, val) => {
           if(!val.value){
               setCurrFilter(old => {
                   const oldd = {...old};
                   oldd[key] = false;
                   return oldd
               })
           }else{
            setCurrFilter(old => {
                const oldd = {...old};
                oldd[key] = val;
                return oldd
            })
           }
        }

        useEffect(() => {
           if(data.posts){
            setPaginate(1);
            let filtered = data.posts.filter(i => {
                const teste = 
                    (currFilter.cavaleiro
                    ? i.integrantes_data.some( integrante => integrante.id === currFilter.cavaleiro.value )
                    : true) && 
                    
                    (currFilter.cavalos
                        ? i.cavalos_data.some( cavalo => cavalo.id === currFilter.cavalos.value )
                        : true) && 
                    
                    (currFilter.anos
                    ? new Date(i.date_of_publication).getFullYear() === currFilter.anos.value
                    : true)

                return teste;
            });
            setCurrItems(filtered);
           }
        }, [currFilter, data]);
    
        useEffect(() => {
            setPageItems(paginateArray(currItems, 6, paginate))
        }, [paginate, data, currItems])

        const changePage = (i) => {
            setPaginate(i)
        };
    
        const paginateArray = (array, page_size, page_number) => {
            return array.slice((page_number - 1) * page_size, page_number * page_size);
        }
    return (
        <section className="Midia page-interna mb-2 mb-lg-5">
            {data.page.dados ?
            <>
            <div className="pt-lg-3 pb-lg-1">
                <div className="markup pb-lg-4">
                    <h2 class="mb-lg-4">Mídia</h2>
                    <p>
                        Principais destaques da Equipe Santo Antônio na mídia
                    </p>
                </div>
            </div>

            <div className="container justify-content-center pb-3 pb-lg-5">
                <div className="row px-lg-0">
                    <div className="col-lg-5 px-lg-4 d-flex">
                        <div className="filter-group">
                            <label htmlFor="">Cavaleiro</label>
                            <Select
                                noOptionsMessage={() => 'Sem resultados'}
                                className="custom-select"
                                placeholder={'Todos'}
                                onChange={val => changeFilter('cavaleiro', val)}
                                options={[{
                                    label: 'Todos',
                                    value: ''
                                },
                                ...listCavaleiros
                            ]}/>
                        </div>
                    </div>
                    <div className="col-lg-3 px-lg-4 d-flex pl-lg-0">
                        <div className="filter-group">
                            <label htmlFor="">Anos</label>
                            <Select
                                className="custom-select"
                                placeholder={'Todos'}
                                noOptionsMessage={() => 'Sem resultados'}
                                onChange={val => changeFilter('anos', val)}
                                options={[{
                                    label: 'Todos',
                                    value: '',
                                },
                                ...listAnos
                            ]}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container ">
                <div className="row pt-lg-4">
                   {pageItems.length > 0 ? pageItems.map( (midia, i) => {
                       return(
                        <div className="col-lg-4">
                        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} key={i}>
                            <MidiaLink
                                img={midia.image}
                                link={midia.link}
                                data={midia.date_of_publication}
                                categoria={midia.summary}
                                title={midia.title}
                                description={midia.description}/>
                        </Animated>
                        </div>
                       )
                   }) : <div className="col-12 pt-4 text-center"><h4 style={{color: '#9D8855', fontFamily: 'Lowan'}}>Não encontramos resultados para sua busca.</h4></div>}
                </div>

                <div className="row pt-4 pt-lg-5">
                    <div className="col-12">
                    {pageItems.length > 0
                        ? <Pagination
                                changePage={changePage}
                                totalItems={currItems.length / 6}
                                currPage={paginate - 1}/>
                        : null}
                    </div>
                </div>
            </div>
            </> : null}

        </section>
    )
}

export default Midia;