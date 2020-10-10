import React, { useState } from 'react'
import {NavLink, withRouter, Link} from 'react-router-dom'
import {animateScroll} from 'react-scroll'

import {default as brandImage} from '../../../assets/images/brands/capa.svg'
import './styles.scss';

const Navbar = ({location}) => {
    const [isToggled,
        setIsToggled] = useState(false);
    const IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    const toggleMenu = () => {
        setIsToggled(!isToggled);
    }

    const sitioItems = [
        {
            key: '/sitio/historia',
            label: 'História'
        }, {
            key: '/sitio/quemsomos',
            label: 'Quem Somos'
        }, {
            key: '/sitio/paddock',
            label: 'Paddock'
        }, {
            label: 'Fauna',
            key: '/sitio/fauna'
        }, {
            label: 'Flora',
            key: '/sitio/flora'
        }, {
            label: 'Tour',
            key: '/sitio/tour'
        }, {
            label: 'Hípica',
            key: '/hipica'
        }
    ];

    const hipicaItems = [
        {
            key: '/hipica/historia',
            label: 'História'
        }, {
            key: '/hipica/equipe',
            label: 'Equipe',
            isActive: (match,location) => {
                return /equipe/.test(location.pathname) ||  /integrante/.test(location.pathname)
            }
        }, {
            key: '/hipica/cavalos',
            label: 'Cavalos',
            isActive: (match,location) => {
                return /cavalo/.test(location.pathname)
            }
        }, {
            label: 'Resultados',
            key: '/hipica/resultados'
        }, {
            label: 'Eventos',
            key: '/hipica/eventos'
        }, {
            label: 'Mídia',
            key: '/hipica/midia'
        }, {
            label: 'Sítio',
            key: '/sitio'
        }
    ];

    const clickLink = () => {
        animateScroll.scrollToTop({duration: 200});
        setIsToggled(false);
    }

    return (
        <React.Fragment>
            <div
                className={`Navbar__toggler ${isToggled
                ? 'toggled'
                : ''}`}>
                <button
                    className={`${isToggled
                    ? 'active'
                    : ''} ${IOS
                        ? 'ios'
                        : ''}`}
                    onClick={() => toggleMenu()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>

                <NavLink className="Navbar__toggler-home" to="/">
                    <img src="https://chiquinhobrandao.com.br/santoantonio/static/media/capa.0c6344d5.svg" alt="Logomarca Santo Antonio"/>
                </NavLink>
            </div>
            <nav
                className={`Navbar ${isToggled
                ? 'toggled'
                : ''}`}>
                    
                <div className="container">
                    <div
                        className={`Navbar__content ${isToggled
                        ? 'toggled'
                        : ''} ${IOS
                            ? 'ios'
                            : ''}`}>

                        <div className="Navbar__left">
                            <div className="Navbar__brand">
                                <Link to="/">
                                    <img src="https://chiquinhobrandao.com.br/santoantonio/static/media/capa.0c6344d5.svg" alt="Logomarca Santo Antonio" width={120}/>
                                </Link>
                            </div>

                            <div className="Navbar__div"></div>

                            <Link className="Navbar__caption" to={/sitio/.test(location.pathname) ? '/sitio' : '/hipica'}>
                            {/sitio/.test(location.pathname) && 'Sítio'}
                            {/hipica/.test(location.pathname) && 'Equipe Hípica'}
                            </Link>
                        </div>
                        <div className="Navbar__links">
                            {/sitio/.test(location.pathname) &&
                            (<>
                                {sitioItems.map((i, index) => (
                                    <NavLink
                                        data-key={i.key}
                                        className={`Navbar__item`}
                                        key={i.key}
                                        to={i.key}
                                        onClick={() => clickLink()}>
                                        {i.label}
                                    </NavLink>                                
                                ))}
                            </>)}

                            {/hipica/.test(location.pathname) &&
                            (<>
                                {hipicaItems.map((i, index) => (
                                    <NavLink
                                        data-key={i.key}
                                        className={`Navbar__item`}
                                        key={i.key}
                                        to={i.key}
                                        isActive={i.isActive}
                                        onClick={() => clickLink()}>
                                        {i.label}
                                    </NavLink>                                
                                ))}
                            </>)}
                        </div>
                        <a href="https://chiquinhobrandao.com.br/" class="goToChiquinhoNav">
                            Conheça o Chiquinho Brandão
                        </a>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default withRouter(Navbar);