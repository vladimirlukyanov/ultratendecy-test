import * as React from "react";

import './_footer.scss'
import {FunctionComponent} from "react";

const Footer: FunctionComponent = () => {

    const links = [
        {
            title: 'About Us',
            path: '/portal'
        },
        {
            title: 'Terms and Conditions',
            path: '/portal'
        },
        {
            title: 'Privacy Policy',
            path: '/portal'
        },
        {
            title: 'Contact',
            path: '/portal'
        }
    ]


    const link_items = links.map((link, index) =>
        <li className="list-inline-item" key={index}>
            <a href={link.path} className="link" onClick={(e) => e.preventDefault()}>{link.title}</a>
        </li>
    );

    const social_links = [
        {
            'type': 'facebook',
            'path': 'https://facebook.com/'
        },
        {
            'type': 'twitter',
            'path': 'https://twitter.com/'
        },
        {
            'type': 'instagram',
            'path': 'https://instagram.com/'
        }
    ]

    const social_links_items = social_links.map((link, index) =>
        <li className="list-inline-item" key={'s' + index}>
            <a href={link.path} target="_blank" rel="noopener noreferrer" className={'link '+ link.type}>&nbsp;</a>
        </li>
    );

    const copyright = '© 2019 All rights reserved'


    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-lg-6">
                        <div className="links">
                            <ul className="list-inline">
                                {link_items}
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-3 col-lg-2">
                        <div className="social">
                            <ul className="list-inline">
                                {social_links_items}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="copyright">
                            {copyright}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer