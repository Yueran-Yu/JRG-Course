import React from 'react';
import {
    // hashRouter no need to use the backend server
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

const Nav = styled.nav`
  border: 2px solid blue;

  > ul {
    display: flex;
    justify-content: space-around;

    > li {
      text-align: center;
      padding: 16px;
    }
  }

`

function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
                    <Switch>
                        <Route path="/tags">
                            <Tags/>
                        </Route>
                        <Route path="/money">
                            <Money/>
                        </Route>
                        <Statistics/>
                        <Redirect exact from='/' to="/money"/>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>
                </Main>

                <Nav>
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
                </Nav>
            </Wrapper>
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
