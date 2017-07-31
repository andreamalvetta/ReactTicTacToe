import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      turn: 'X',
      gameEnded: false,
      winner: undefined
    }

    this.gameState = {
      board: Array(9).fill(''),
      totalMoves: 0
    }
  }

  clicked(event) {
    if(this.state.gameEnded) {
      return false;
    }

    let board = this.gameState.board;
    if(board[event.target.dataset.square] === '') {
      board[event.target.dataset.square] = this.state.turn;
      event.target.innerText = this.state.turn;
      this.setState({
        turn: this.state.turn === 'X' ? 'O' : 'X'
      });
      this.gameState = {
        board: board,
        totalMoves: this.gameState.totalMoves + 1
      }
    }

    let result = this.checkWinner();

    if (result === 'X') {
      this.setState({
        gameEnded: true,
        winner: 'X',
        winnerLine: 'Match won by X'
      });
    }
    else if (result === 'O') {
      this.setState({
        gameEnded: true,
        winner: 'O',
        winnerLine: 'Match won by O'
      });
    }
    else if (result === 'draw') {
      this.setState({
        gameEnded: true,
        winner: 'draw',
        winnerLine: 'Match is drawn'
      });
    }
  }

  checkWinner() {
    let moves = [
      [0, 1, 2],
      [3, 4 ,5],
      [6, 7, 8],
      [0, 3 ,6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    let board = this.gameState.board;
    for (let i = 0; i < moves.length; i++) {
      if(board[moves[i][0]] === board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]]) {
        return board[moves[i][0]];
      }
    }

    if(this.gameState.totalMoves === 9) {
      return 'draw';
    }
  }

  render() {
    return (
      <div id="game">
        <div id="status">{this.state.winnerLine}</div>
        <div id="head">
          World's best tic tac toe AI
        </div>
        <div id="board" onClick={(e) => this.clicked(e)}>
          {
            this.gameState.board.map((element, i) => {
              return (
                <div key={i} className="square" data-square={i}></div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
