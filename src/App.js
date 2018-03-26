import React, {Component} from 'react';
import './App.css';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class App extends Component {


    render() {
        return (
            <Router>
                <div className="App">
                    <Navigation/>
                    <Content/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
