import * as React from "react";
import {FunctionComponent, useState} from 'react';
import './_navbar.scss';

import {
    Link,
    useLocation
} from "react-router-dom";

import profileUrl from '../../assets/images/profile1.png';

const NavBar: FunctionComponent = () => {

    let location = useLocation();

    const [collapse, setCollapse] = useState('collapse');

    const links = [
        {
            title: 'Channels',
            path: '/portal'
        },
        {
            title: 'Bookmarks',
            path: '/'
        },
        {
            title: 'Overview',
            path: '/'
        },
        {
            title: 'Widgets',
            path: '/'
        }
    ]


    const link_items = links.map((link, index) =>
        <li key={'k' + index} className={location.pathname === link.path ? "nav-item active" : "nav-item"}>
            <a className="nav-link" href={link.path}>{link.title}</a>
        </li>
    );

    return (
        <div className="header">
            <div className="container">
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
                    <Link className="navbar-brand" to={'/portal'}/>

                    <button id="dropdown_toggler" className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                            onClick={(e) => {
                                e.preventDefault();
                                setCollapse(collapse === 'collapse' ? '' : 'collapse');
                            }}>
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className={collapse === 'collapse' ? 'collapse navbar-collapse' : 'navbar-collapse'}
                         id="navbarNav">
                        <ul className="navbar-nav links left">
                            {link_items}
                        </ul>
                        <ul className="navbar-nav ml-auto right">
                            <li className="nav-item search-wrapper">
                                <Link to={'/'} className="nav-link search"/>
                            </li>
                            <li className="nav-item">
                                <div className="profile">
                                    <Link to={'/'}>
                                        <img src={profileUrl} className="img" alt=""/>
                                        <span className="name">Lea Schneider</span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        </div>
    )
}

export default NavBar