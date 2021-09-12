import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyTodoList from "./pages/MyTodoList";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomePage/>
                </Route>
                <Route path="/todo">
                    <MyTodoList/>
                </Route>
                <Route path="/authors">

                </Route>
            </Switch>
        </Router>
    );
}

export default App;
