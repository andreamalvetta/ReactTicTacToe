import React, { Component } from 'react';
import Status from '../Status';

class Board extends Component {
  state = {
    turn: 'X',
    gameEnded: false,
    winner: undefined
  };

  gameState = {
    board: Array(9).fill(''),
    totalMoves: 0
  };

  clicked(event) {
    if (this.state.gameEnded) {
      return false;
    }

    let board = this.gameState.board;
    if (board[event.target.dataset.square] === '') {
      board[event.target.dataset.square] = this.state.turn;
      event.target.classList.add('selected');
      event.target.classList.add(this.state.turn === 'X' ? 'player-1' : 'player-2');
      this.setState({
        turn: this.state.turn === 'X' ? 'O' : 'X'
      });
      this.gameState = {
        board: board,
        totalMoves: this.gameState.totalMoves + 1
      };
    }

    let result = this.checkWinner();

    if (result === 'X') {
      this.setState({
        gameEnded: true,
        winner: 'X',
        winnerLine: 'Player 1 wins!'
      });
    } else if (result === 'O') {
      this.setState({
        gameEnded: true,
        winner: 'O',
        winnerLine: 'Player 2 wins!'
      });
    } else if (result === 'draw') {
      this.setState({
        gameEnded: true,
        winner: 'draw',
        winnerLine: 'It is a tie!'
      });
    }
  }

  checkWinner() {
    let moves = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let board = this.gameState.board;
    for (let i = 0; i < moves.length; i++) {
      if (board[moves[i][0]] === board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]]) {
        return board[moves[i][0]];
      }
    }

    if (this.gameState.totalMoves === 9) {
      return 'draw';
    }
  }

  render() {
    return (
      <React.Fragment>
        <Status message={this.state.winnerLine} />
        <div id="board" className={this.state.turn === 'X' ? 'player-1' : 'player-2'} onClick={e => this.clicked(e)}>
          {this.gameState.board.map((element, i) => {
            return <div key={i} className="square" data-square={i}></div>;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
