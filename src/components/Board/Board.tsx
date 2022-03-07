import React, { FC, useState } from 'react';
import Status from '../Status';

interface StateInterface {
  turn?: string;
  gameEnded: boolean;
  winner: string;
  winnerLine?: string;
}

interface GameStateInterface {
  board: string[];
  totalMoves: number;
}

const boardData = {
  player1: {
    symbol: 'X',
    name: 'player-1',
    message: 'Player 1 wins!',
  },
  player2: {
    symbol: 'O',
    name: 'player-2',
    message: 'Player 2 wins!',
  },
  draw: {
    name: 'draw',
    message: 'It is a tie!',
  },
};

const Board: FC = () => {
  const [state, setState] = useState<StateInterface>({
    turn: boardData.player1.symbol,
    gameEnded: false,
    winner: undefined,
  });

  const [gameState, setGameState] = useState<GameStateInterface>({
    board: Array(9).fill(''),
    totalMoves: 0,
  });

  const onClick = (event: React.SyntheticEvent) => {
    if (state.gameEnded) {
      return false;
    }

    const element = event.target as HTMLElement;

    if (gameState.board[element.dataset.square] === '') {
      gameState.board[element.dataset.square] = state.turn;
      element.classList.add(
        'selected',
        state.turn === boardData.player1.symbol
          ? boardData.player1.name
          : boardData.player2.name,
      );

      setState({
        ...state,
        turn:
          state.turn === boardData.player1.symbol
            ? boardData.player2.symbol
            : boardData.player1.symbol,
      });

      setGameState({
        board: gameState.board,
        totalMoves: gameState.totalMoves + 1,
      });
    }

    const result = checkWinner();

    if (result === boardData.player1.symbol) {
      setState({
        gameEnded: true,
        winner: boardData.player1.symbol,
        winnerLine: boardData.player1.message,
      });
    }

    if (result === boardData.player2.symbol) {
      setState({
        gameEnded: true,
        winner: boardData.player2.symbol,
        winnerLine: boardData.player2.message,
      });
    }

    if (result === boardData.draw.name) {
      setState({
        gameEnded: true,
        winner: boardData.draw.name,
        winnerLine: boardData.draw.message,
      });
    }
  };

  const checkWinner = () => {
    const moves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let move of moves) {
      if (
        gameState.board[move[0]] === gameState.board[move[1]] &&
        gameState.board[move[1]] === gameState.board[move[2]]
      ) {
        return gameState.board[move[0]];
      }
    }

    if (gameState.totalMoves === 8) {
      return boardData.draw.name;
    }
  };

  return (
    <div id="game">
      {state.winnerLine && <Status>{state.winnerLine}</Status>}
      <div
        id="board"
        className={
          state.turn === boardData.player1.symbol
            ? boardData.player1.name
            : boardData.player2.name
        }
        onClick={onClick}
      >
        {gameState.board.map((_, i) => (
          <div key={i} className="square" data-square={i}></div>
        ))}
      </div>
    </div>
  );
};

export default Board;
