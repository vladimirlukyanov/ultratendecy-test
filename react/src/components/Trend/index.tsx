import * as React from "react";

import {FunctionComponent} from "react";
import './_trends.scss';

import {
    Link
} from "react-router-dom";

type TrendProps = {
    title: string
    counter: string
    image: string
    following: boolean
    followers: Array<string>
}

const Trend: FunctionComponent<TrendProps> = ({title, counter, image, followers, following}) => {

    return (
        <div className="item">
            <img src={image} alt="" className="img"/>
            <div className="inner">

                <div className="row no-gutters">
                    <div className="col-6">
                        <div className="title">{title}</div>
                        <div className="followers-counter">{counter} Followers</div>
                    </div>
                    <div className="col-6">
                        <div className="followers-profiles">
                            <ul className="list-inline">
                                {followers.map((follower, index) =>
                                    <li className="list-inline-item" key={'f' + index}>
                                        <img src={follower} alt="" className="img"/>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

                <Link to={'/portal'} className={following ? 'btn following' : 'btn' }>{following ? 'Following' : 'Follow'}</Link>
            </div>
        </div>
    )
}

export default Trend;