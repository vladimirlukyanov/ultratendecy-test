import * as React from "react";
import {FunctionComponent} from "react";
import {
    Link
} from "react-router-dom";

import './_commentform.scss';
import profile_img from '../../assets/images/profile1.png';

const CommentForm: FunctionComponent = () => {

    return (
        <div className="comment-form">
            <form action="" className="form">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-2 col-md-2 left">
                                    <div className="profile">
                                        <Link to={'/portal'}>
                                            <img src={profile_img} className="img" alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col">
                                    <input type="text" className="text" placeholder="Write something…"/>
                                </div>
                                <div className="col-12 col-md-3">
                                    <button className="big-button" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CommentForm;