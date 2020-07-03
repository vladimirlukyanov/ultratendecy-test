import * as React from 'react';
import '../assets/scss/screens/Portal.scss';

import NavBar from "../components/NavBar";
import SubNavBar from '../components/SubNavBar';
import Hero from '../components/Hero';
import PageContent from '../components/PageContent';
import Comments from "../components/Comments";

import Footer from "../components/Footer";
import {FunctionComponent} from "react";

const Portal: FunctionComponent = () => {

    const hero_info = {
        title : 'Fresh wave of climate strikes takes place around the world',
        source : 'The Guardian',
        time : 'Today',
        tag : 'NATURE'
    }

    return (
        <div className="account">

            <NavBar/>
            <SubNavBar />

            <div className="contents">
                <div className="white-bg">

                    <Hero {...hero_info}  />
                    <PageContent />
                    <Comments />

                </div>
            </div>

            <Footer />

        </div>
    )

}

export default Portal