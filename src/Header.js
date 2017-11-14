import React, { Component } from 'react' ;
import logo from './logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logoVisible: false,
            paragraphVisible: true,
        };
    }

    toggleProp = (prop) => {
      this.setState(prevState => ({
        [prop]: !prevState[prop],
      }) );
    }

    render() {
        return (

        <header className="App-header">

            <img src={logo} className="App-logo" alt="logo"/>
            {this.state.logoVisible && (
                <p>Hello!</p>
            )}
            <h1 className="App-title">Welcome to React</h1>

            <button onClick={this.toggleProp.bind(this, 'logoVisible') }>Show Title</button>

            { this.state.paragraphVisible && (
              <h1>Suddenly appeared!</h1>
            )}

            <button onClick={ this.toggleProp.bind(this,'paragraphVisible') }>Paragraph</button>



        </header>
        )
    }
}

export default Header;
