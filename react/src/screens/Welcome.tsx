import * as React from 'react';
import {
    Link,
    useHistory
} from "react-router-dom";

import Footer from '../components/Footer'

import '../assets/scss/screens/Welcome.scss'

const Welcome = () => {

    const history = useHistory();

    const _handeSubmit = () => {
        history.push("/portal");
    }

    return (
        <div className="welcome">
            <div className="contents">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="top">
                                <Link to="/" className="logo"/>
                                <h1 className="title">Welcome</h1>
                                <span className="subtitle">Please create an account to continue!</span>

                                <div className="big-buttons">
                                    <Link to="/portal" className="btn facebook">Continue with Facebook</Link>
                                    <Link to="/portal" className="btn google">Continue with Google</Link>
                                </div>

                                <div className="signup-form">
                                    <span className="title">OR USE EMAIL INSTEAD</span>

                                    <form className="form" action="" onSubmit={_handeSubmit}>
                                        <input className="text mail" placeholder="Email Address"/>
                                        <input className="text lock" placeholder="Password"/>
                                        <button type="submit" className="submit">Sign Up</button>
                                    </form>

                                    <div className="login">
                                        Already have an account? <Link to={'/portal'} className="link"
                                                                       onChange={_handeSubmit}>Login</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    )

}

export default Welcome