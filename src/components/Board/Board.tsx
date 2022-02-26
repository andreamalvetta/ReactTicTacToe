import React, { useState } from "react";
import Status from "../Status";

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

const Board = () => {
  const [state, setState] = useState<StateInterface>({
    turn: "X",
    gameEnded: false,
    winner: undefined,
  });

  const [gameState, setGameState] = useState<GameStateInterface>({
    board: Array(9).fill(""),
    totalMoves: 0,
  });

  const onClick = (event) => {
    if (state.gameEnded) {
      return false;
    }

    let board = gameState.board;
    if (board[event.target.dataset.square] === "") {
      board[event.target.dataset.square] = state.turn;
      event.target.classList.add("selected");
      event.target.classList.add(state.turn === "X" ? "player-1" : "player-2");

      setState({
        ...state,
        turn: state.turn === "X" ? "O" : "X",
      });

      setGameState({
        board: board,
        totalMoves: gameState.totalMoves + 1,
      });
    }

    let result = checkWinner();

    if (result === "X") {
      setState({
        gameEnded: true,
        winner: "X",
        winnerLine: "Player 1 wins!",
      });
    } else if (result === "O") {
      setState({
        gameEnded: true,
        winner: "O",
        winnerLine: "Player 2 wins!",
      });
    } else if (result === "draw") {
      setState({
        gameEnded: true,
        winner: "draw",
        winnerLine: "It is a tie!",
      });
    }
  };

  const checkWinner = () => {
    let moves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let board = gameState.board;
    for (let i = 0; i < moves.length; i++) {
      if (
        board[moves[i][0]] === board[moves[i][1]] &&
        board[moves[i][1]] === board[moves[i][2]]
      ) {
        return board[moves[i][0]];
      }
    }

    if (gameState.totalMoves === 8) {
      return "draw";
    }
  };

  return (
    <>
      <Status message={state.winnerLine} />
      <div
        id="board"
        className={state.turn === "X" ? "player-1" : "player-2"}
        onClick={onClick}
      >
        {gameState.board.map((_, i) => {
          return <div key={i} className="square" data-square={i}></div>;
        })}
      </div>
    </>
  );
};

export default Board;
