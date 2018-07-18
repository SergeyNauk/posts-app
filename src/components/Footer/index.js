import React from 'react';
import '../../components/Header/header.css';

import {Link} from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return (
            <div className="header-component">
                <div className="header-content">
                    <div className="header-logo col-4">
                        <a href="https://www.google.com.ua">LOGO</a>
                    </div>
                    <div className="header-menu col-8">
                        <ul>
                            <li><Link to={'/main'}>main</Link></li>
                            <li><Link to={'/about'}>about</Link></li>
                            <li><Link to={'/contacts'}>contacts</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;