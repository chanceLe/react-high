import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Combine from  './components/combine/Combine';

import PropTypes from './components/PropTypes/index.js'

import Refs from './components/Refs/index.js';

import Context from './components/Context/index.js';

import News from './components/Hoc/index.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
				{/*
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
					*/}
					
					<Combine />
					
					<PropTypes name="chance" />
					
					<Refs />
					
					<Context />
					
					<News name="news"/>
        </header>
      </div>
    );
  }
}

export default App;
