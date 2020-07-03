import * as React from 'react';
import '../assets/scss/screens/Trends.scss';

// @ts-ignore
import Macy from 'macy/dist/macy';

import NavBar from "../components/NavBar";
import SubNavBar from '../components/SubNavBar';
import Footer from "../components/Footer";

import Trend from "../components/Trend";

import cat1 from '../assets/images/cat1.jpg';
import cat2 from '../assets/images/cat2.jpg';
import cat3 from '../assets/images/cat3.jpg';
import cat4 from '../assets/images/cat4.jpg';
import cat5 from '../assets/images/cat5.jpg';
import cat6 from '../assets/images/cat6.jpg';

import profile2 from '../assets/images/profile2.png';
import profile3 from '../assets/images/profile3.png';
import profile4 from '../assets/images/profile4.png';

import {useEffect} from "react";

import {
    useParams
} from "react-router-dom";

const Trends = () => {


    let {trending} = useParams();

    let trends_items = [
        {
            title: 'Cooking',
            counter: '6.5M',
            image: cat1,
            following: true,
            followers: [profile2, profile3, profile4]
        },
        {
            title: 'Nature',
            counter: '300k',
            image: cat2,
            following: true,
            followers: [profile2, profile3, profile4]
        },
        {
            title: 'Travel',
            counter: '140k',
            image: cat3,
            following: false,
            followers: [profile2, profile3]
        },
        {
            title: 'Climate',
            counter: '2M',
            image: cat4,
            following: false,
            followers: [profile2, profile3, profile4]
        },
        {
            title: 'Music',
            counter: '80k',
            image: cat5,
            following: false,
            followers: [profile2, profile3, profile4]
        },
        {
            title: 'Science',
            counter: '230k',
            image: cat6,
            following: false,
            followers: [profile2, profile3, profile4]
        }

    ]

    if (trending === 'for_you') {
        trends_items.splice(Math.round(Math.random() * 2 + 1), Math.round(Math.random() * 2 + 1));
    }

    if (trending === 'cooking') {
        trends_items = trends_items.splice(0, 1);
    }

    if (trending === 'nature') {
        trends_items = trends_items.splice(1, 1);
    }

    if (trending === 'science') {
        trends_items = trends_items.splice(5, 1);
    }

    if (trending === 'travel') {
        trends_items = trends_items.splice(2, 1);
    }

    if (trending === 'climate') {
        trends_items = trends_items.splice(3, 1);
    }

    if (trending === 'music') {
        trends_items = trends_items.splice(4, 1);
    }


    if (trending === 'people') {
        trends_items = trends_items.splice(1, 1);
    }

    useEffect(() => {

        // @ts-ignore
        new Macy({
            container: '#macy-container',
            trueOrder: false,
            waitForImages: false,
            margin: 24,
            columns: 3,
            breakAt: {
                1200: 3,
                940: 3,
                520: 1,
                400: 1
            }
        });

    }, [trends_items])

    return (
        <div className="account">

            <NavBar/>
            <SubNavBar/>


            <div className="mansory">
                <div className="container">
                    <div className="mansory-wrapper" id="macy-container">
                        {
                            trends_items.map((trend, index) =>
                                <Trend {...trend} key={'t' + index}/>
                            )}

                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    )

}

export default Trends