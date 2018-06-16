import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick() }>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squareArray: Array(9).fill(null),
    }
  }

  handleClick(i) {
    const squares = this.state.squareArray.slice(); // .slice to copy squares array instead of mutating
    squares[i] = 'X';
    this.setState({squareArray: squares});
  }

  renderSquare(i) {
    return <Square
      value={this.state.squareArray[i]}
      onClick={() => this.handleClick(i)}
    />;
  }

  render() {
    const status = 'Next Player X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render () {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>
            {
              // status
            }
            <ol>{
                /*Todo*/
              }</ol>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById('root'));