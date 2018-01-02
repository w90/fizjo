import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trees: 100,
      players: 0,
    }

    this.handleTreeCut = this.handleTreeCut.bind(this);
  }

handleTreeCut() {
  this.setState( prevState => {
    return {
      trees: prevState.trees - 1
    }
  })
}

  render() {
    return (
      <div>
        <Player onCut={ this.handleTreeCut } />
      </div>
    )
  }
}

ReactDOM.render( <Game />, document.getElementById('root') );
