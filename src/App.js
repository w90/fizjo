import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import Header from './Header.js';
import Ribbon from './Ribbon.js';
import Hero from './Hero.js';
import {Grid, Row, Col} from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'polish'
    }

  }
  render() {

    return (
      <div className={'fi-body container-fluid'}>

    <Header />
    <Ribbon />
    <Hero />
    <main className={'fi-main'}>
Main
    </main>

    <footer className={'fi-footer'}>
    Footer
    </footer>

</div>
    );
  }
}

export default App;
