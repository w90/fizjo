import React, { Component } from 'react' ;
import logo from './logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logoVisible: false
        };
    }

    render() {
        return (

        <header className="App-header">

            <img src={logo} className="App-logo" alt="logo"/>
            {this.state.logoVisible && (
                <p>Hello!</p>
            )}
            <h1 className="App-title">Welcome to React</h1>
            <button onClick={(prevState, props) => console.log( this.state.logoVisible)}>Show Title</button>
        </header>
        )
    }
}

export default Header;