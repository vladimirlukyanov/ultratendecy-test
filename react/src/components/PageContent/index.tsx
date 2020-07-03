import {Link} from "react-router-dom";
import * as React from "react";
import {FunctionComponent} from "react";

import './_pagecontent.scss';

const PageContent: FunctionComponent = () => {
    return (
        <div>
            <div className="section1">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10">
                            <div className="text">
                                According to the National Oceanic and Atmospheric Administration, Ted, Scambos,
                                NSIDClead
                                scentist, puts the potentially record low maximum sea ice extent tihs year down
                                to low
                                ice
                                extent in the Pacific and a late drop in ice extent in the Barents Sea.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 left">

                        </div>
                        <div className="col-md-6 right">
                            <div className="big-quote">
                                <div className="quote">
                                    <div className="text">Over the span of the satellite record, Arctic sea ice
                                        has been
                                        declining significantly, while sea ice in the Antarctichas increased
                                        very
                                        slightly.
                                    </div>
                                    <div className="signature">-NOAA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 left">
                            <div className="intro">
                                <h2 className="title">So what does the new record for the lowest level of winter
                                    ice
                                    actually
                                    mean?</h2>
                                <p className="desc">
                                    The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                    every
                                    summer,
                                    and that process will continue whatever happens with climate change. Even if
                                    the
                                    Arctic
                                    continues to be one of the fastest-warming regions of the world, it will
                                    always be
                                    plunged into bitterly cold polar dark every winter. And year-by-year, for
                                    all kinds
                                    of
                                    natural reasons, there’s huge variety of the state of the ice.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 right">

                        </div>
                    </div>
                </div>
            </div>

            <div className="section4">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10">
                            <div className="text">
                                For a start, it does not automatically follow that a record amount of ice will
                                melt this
                                summer. More important for determining the size of the annual thaw is the state
                                of the
                                weather as the midnight sun approaches and temperatures rise. But over the more
                                than 30
                                years of satellite records, scientists have observed a clear pattern of decline,
                                decade-by-decade.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="section5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="play-btn-wrapper">
                                <Link to="/" className="play-btn"><span className="play icon"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PageContent