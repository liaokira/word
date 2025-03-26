import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ExampleComponent from './components/ExampleComponent';
import './styles/app.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/example" component={ExampleComponent} />
            </Switch>
        </Router>
    );
};

export default App;