import React from 'react';

import './styles.scss';

const Footer = (props) => {
    return (
        <footer className="Footer wow fadeInUp">
            <img className="Footer__brand" src="https://chiquinhobrandao.com.br/santoantonio/static/media/footer.112ab5e1.png" alt=""/>
            <hr/>
            <p className="Footer__copy">
            © 2020 Sítio Santo Antônio. Todos os direitos reservados.
            </p>
        </footer>
    )
}

export default Footer;