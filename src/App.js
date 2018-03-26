import React, {Component} from 'react';
import './App.css';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import WordsManagerPage from "./pages/WordsManagerPage";

class App extends Component {


    render() {
        return (
            <Router>
                <div className="App">
                    <Navigation/>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/wordsmanager" component={WordsManagerPage} />
                    {/*<Content/>*/}
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
