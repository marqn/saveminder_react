import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <Navigation />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
