import * as React from "react";
import {FunctionComponent} from "react";

import {
    Link,
} from "react-router-dom";

import './_hero.scss';

type HeroProps = {
    title: string,
    source: string,
    time: string,
    tag: string
}

const Hero: FunctionComponent<HeroProps> = ({title, source, time, tag}) => {
    return (
        <div className="hero">
            <div className="content">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 left">
                            <h1 className="title">{title}</h1>
                            <div className="subtitle">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <span className="badge badge-pill source">{source}</span>
                                    </li>
                                    <li className="list-inline-item">
                                        <span className="badge badge-pill date">{time}</span>
                                    </li>
                                    <li className="list-inline-item">
                                        <span className="badge badge-pill tags">{tag}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 right">
                            <div className="social">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <Link to="/" className="link"><span
                                            className="icon quote"></span></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/" className="link"><span
                                            className="icon bookmark"></span></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/" className="link"><span
                                            className="icon share"></span></Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Hero