import React from 'react';
import {
    // hashRouter no need to use the backend server
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";


function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/tags">Tags</Link>
                        </li>
                        <li>
                            <Link to="/money">Money</Link>
                        </li>
                        <li>
                            <Link to="/statistics">Statistics</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/tags">
                        <Tags/>
                    </Route>
                    <Route path="/money">
                        <Money/>
                    </Route>
                    <Route path="/statistics">
                        <Statistics/>
                    </Route>
                    <Redirect exact from='/' to="/money"/>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Tags() {
    return <h2>Home</h2>;
}

function Money() {
    return <h2>Money</h2>;
}

function Statistics() {
    return <h2>Statistics</h2>;
}

function NoMatch() {
    return (
        <div>Page Not Found.</div>
    )
}

export default App;
