import * as React from "react";
import {FunctionComponent} from "react";

import './_comment.scss';
import {
    Link
} from "react-router-dom";

type CommentProps = {
    title: string,
    desc: string,
    likes: number
    liked: boolean
    date_text: string
    img: string
}

const Comment: FunctionComponent<CommentProps> = ({title, desc, likes, liked, date_text, img}) => {

    return (
        <div className="comment">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="inner">
                            <div className="row">
                                <div className="col-12">
                                    <div className="content">
                                        <div className="profile">
                                            <Link to={'/portal'}>
                                                <img src={img}
                                                     className="img" alt="" />
                                            </Link>
                                        </div>
                                        <div className="name">{title}</div>
                                        <div className="text">{desc}</div>
                                        <div className="like-time-wrapper">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link to={'/portal'} className={liked ? 'like liked' : 'like'} onClick={(e) => e.preventDefault()}>
                                                        <span className="icon"></span><span
                                                        className="counter">{likes}</span></Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span className="date">{date_text}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;