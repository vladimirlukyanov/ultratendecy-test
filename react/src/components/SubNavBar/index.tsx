import * as React from "react";
import './_subnavbar.scss'
import {FunctionComponent} from "react";

import {
    Link,
    useParams
} from "react-router-dom";

const SubNavBar: FunctionComponent = () => {


    let {trending} = useParams();

    const menu = [
        {
            title: 'Trending',
            path: '/portal'
        },
        {
            title: 'For You',
            path: '/portal/for_you'
        },
        {
            title: 'Cooking',
            path: '/portal/cooking'
        },
        {
            title: 'Nature',
            path: '/portal/nature'
        },
        {
            title: 'Science',
            path: '/portal/science'
        },
        {
            title: 'Travel',
            path: '/portal/travel'
        },
        {
            title: 'Climate',
            path: '/portal/climate'
        },
        {
            title: 'Music',
            path: '/portal/music'
        },
        {
            title: 'People',
            path: '/portal/people'
        }
    ]


    const menu_items = menu.map((item, index) => {

            let is_active = '';

            if (typeof trending !== 'undefined') {
                is_active = item.path === '/portal/' + trending ? 'active' : '';
            } else {
                if (item.path === '/portal') {
                    is_active = 'active';
                }
            }

            return (
                <li className="list-inline-item" key={'sub' + index}>
                    <Link to={item.path} className={'link ' + is_active}>
                        {item.title}
                    </Link>
                </li>
            )
        }
    );

    return (
        <div className="subheader">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-8 col-md-10">
                        <div className="links">
                            <ul className="list-inline">
                                {menu_items}
                            </ul>
                        </div>
                    </div>
                    <div className="col-4 col-md-2 text-right">
                        <Link to={'/portal/all'} className="btn">Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubNavBar