"use client";

import React, { useEffect, useState } from "react";
import Board from "@/components/ui/tic-tac-toe/board";
import { isEmpty, isTerminal } from "./utils/board";
import { BoardState, Cell } from "./utils/types";
import { getBestMove } from "./utils/player";

function TicTacToeGame() {
  const [turn, _setTurn] = useState<"HUMAN" | "BOT">(
    Math.random() < 0.5 ? "HUMAN" : "BOT"
  );

  const setTurn = (_turn: "HUMAN" | "BOT", _squares: BoardState) => {
    // console.log(_turn);
    _setTurn(_turn);
    playGame(_turn, _squares);
  };

  const [squares, _setSquares] = useState<BoardState>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const setSquares = (state: BoardState) => {
    _setSquares(state);
    determineWinner(state);
  };

  const [isHumanMaximizing, setIsHumanMaximizing] = useState<boolean>(true);
  const [isPossible, setIsPossible] = useState<boolean>(false);
  const [gamesCount, setGamesCount] = useState({
    wins: 0,
    losses: 0,
    draws: 0,
  });

  const [gameResult, setGameResult] = useState<"BOT" | "HUMAN" | "DRAW" | undefined>();

  const determineWinner = (squaresState: BoardState) => {
    const gResult = isTerminal(squaresState);
    if (!gResult) {
      return;
    }
    const winner = getWinner(gResult.winner);
    if (winner === "HUMAN") {
        setGameResult("HUMAN");
      setGamesCount({ ...gamesCount, wins: gamesCount.wins + 1 });
    }
    if (winner === "BOT") {
        setGameResult("BOT");
      setGamesCount({ ...gamesCount, losses: gamesCount.losses + 1 });
    }

    if (winner === "DRAW") {
        setGameResult("DRAW");
      setGamesCount({ ...gamesCount, draws: gamesCount.draws + 1 });
    }
  };

  const playGame = (_turn: "HUMAN" | "BOT", _squares: BoardState) => {
    if (_turn !== "BOT") {
      return;
    }
    if (isEmpty(_squares)) {
      const centerAndCorners = [0, 2, 6, 8, 4];
      const firstMove =
        centerAndCorners[Math.floor(Math.random() * centerAndCorners.length)];
      const newSquares = insertCell(firstMove, "x", _squares);
      setIsHumanMaximizing(false);
      setTurn("HUMAN", newSquares);
      setSquares(newSquares);
    } else {
      const best = getBestMove(
        _squares,
        !isHumanMaximizing,
        0,
        !isPossible ? parseInt("-1") : parseInt("2")
      );
      const newSquares = insertCell(
        best,
        isHumanMaximizing ? "o" : "x",
        _squares
      );
      setTurn("HUMAN", newSquares);
      setSquares(newSquares);
    }
  };

  const insertCell = (
    index: number,
    symbol: "x" | "o",
    curSquares: BoardState
  ) => {
    if (curSquares[index] || isTerminal(curSquares)) return curSquares;

    const newSquares: BoardState = [...curSquares];
    newSquares[index] = symbol;
    return newSquares;
  };

  const handleOnSquarePressed = (square: number) => {
    if (turn !== "HUMAN") {
      return;
    }
    const _squares = insertCell(square, isHumanMaximizing ? "x" : "o", squares);
    setTurn("BOT", _squares);
  };

  const getWinner = (winnerSymbol: Cell): "HUMAN" | "BOT" | "DRAW" => {
    if (winnerSymbol === "x") {
      return isHumanMaximizing ? "HUMAN" : "BOT";
    }
    if (winnerSymbol === "o") {
      return isHumanMaximizing ? "BOT" : "HUMAN";
    }
    return "DRAW";
  };

  useEffect(() => {
    if (turn === "BOT") {
        playGame(turn, squares);
    }
  },[])

  //   useEffect(() => {
  //     if (gameResult) {
  //       const winner = getWinner(gameResult.winner);
  //       if (winner === "HUMAN") {
  //         setGamesCount({ ...gamesCount, wins: gamesCount.wins + 1 });
  //       }
  //       if (winner === "BOT") {
  //         setGamesCount({ ...gamesCount, losses: gamesCount.losses + 1 });
  //       }

  //       if (winner === "DRAW") {
  //         setGamesCount({ ...gamesCount, draws: gamesCount.draws + 1 });
  //       }
  //     } else {
  //       if (turn === "BOT") {
  //         if (isEmpty(squares)) {
  //           const centerAndCorners = [0, 2, 6, 8, 4];
  //           const firstMove =
  //             centerAndCorners[
  //               Math.floor(Math.random() * centerAndCorners.length)
  //             ];
  //           insertCell(firstMove, "x");
  //           setIsHumanMaximizing(false);
  //           setTurn("HUMAN");
  //         } else {
  //           const best = getBestMove(
  //             squares,
  //             !isHumanMaximizing,
  //             0,
  //             !isPossible ? parseInt("-1") : parseInt("2")
  //           );
  //           insertCell(best, isHumanMaximizing ? "o" : "x");
  //           setTurn("HUMAN");
  //         }
  //       }
  //     }
  //   }, [squares, turn]);

  const reset = () => {
    const newSquares: BoardState = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    setSquares(newSquares);
    setTurn(Math.random() < 0.5 ? "HUMAN" : "BOT", newSquares);
    setGameResult(undefined);
  };

  const winner = isTerminal(squares);

  console.log(gameResult);

  return (
    <div className="flex flex-col justify-center items-center px-40 pt-8 pb-4">
      <div className="flex flex-col items-center">
        <button
          onClick={() => {
            setIsPossible(!isPossible);
          }}
          className="text-white p-4 rounded-full bg-blue-900 font-bold text-lg text-center mb-4"
        >
          Difficulty: {!isPossible ? "Impossible" : "Possible"}
        </button>
        <div className="flex flex-row mb-10">
          <div className="flex flex-col bg-white border border-blue-900 items-center p-2 mx-2">
            <h2>Wins</h2>
            <h2>{gamesCount.wins}</h2>
          </div>
          <div className="flex flex-col bg-white border border-blue-900 items-center p-2 mx-2">
            <h2>Draws</h2>
            <h2>{gamesCount.draws}</h2>
          </div>
          <div className="flex flex-col bg-white border border-blue-900 items-center p-2 mx-2">
            <h2>Losses</h2>
            <h2>{gamesCount.losses}</h2>
          </div>
        </div>
      </div>
      <div className="relative">
        <Board
          disabled={Boolean(isTerminal(squares)) || turn !== "HUMAN"}
          onCellPressed={(square) => {
            handleOnSquarePressed(square);
          }}
          state={squares}
          winner={gameResult}
          handleNewGame={reset}
        />
      </div>
    </div>
  );
}

export default TicTacToeGame;
