import React from 'react';
import './assets/scss/App.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import Welcome from "./screens/Welcome";
import Portal from "./screens/Portal";

import Trends from "./screens/Trends";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Welcome/>
                </Route>
                <Route exact path="/portal">
                    <Portal/>
                </Route>

                <Route exact path="/portal/:trending">
                    <Trends/>
                </Route>

            </Switch>

        </Router>
    );
}

export default App;
