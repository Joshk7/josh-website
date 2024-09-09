"use client";

import React, { useEffect, useState } from "react";
import Board from "@/components/ui/tic-tac-toe/board";
import { isEmpty, isTerminal } from "./utils/board";
import { BoardState, Cell } from "./utils/types";
import { getBestMove } from "./utils/player";

function Game() {
  const [squares, setSquares] = useState<BoardState>([
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

  const [turn, setTurn] = useState<"HUMAN" | "BOT">(
    Math.random() < 0.5 ? "HUMAN" : "BOT"
  );
  const [isHumanMaximizing, setIsHumanMaximizing] = useState<boolean>(true);
  const [isPossible, setIsPossible] = useState<boolean>(false);
  const [gamesCount, setGamesCount] = useState({
    wins: 0,
    losses: 0,
    draws: 0,
  });

  const gameResult = isTerminal(squares);

  const insertCell = (index: number, symbol: "x" | "o") => {
    if (squares[index] || isTerminal(squares)) return;

    const newSquares: BoardState = [...squares];
    newSquares[index] = symbol;
    setSquares(newSquares);
  };

  const handleOnSquarePressed = (square: number) => {
    if (turn !== "HUMAN") {
      return;
    }
    insertCell(square, isHumanMaximizing ? "x" : "o");
    setTurn("BOT");
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
    if (gameResult) {
      const winner = getWinner(gameResult.winner);
      if (winner === "HUMAN") {
        setGamesCount({ ...gamesCount, wins: gamesCount.wins + 1 });
      }
      if (winner === "BOT") {
        setGamesCount({ ...gamesCount, losses: gamesCount.losses + 1 });
      }

      if (winner === "DRAW") {
        setGamesCount({ ...gamesCount, draws: gamesCount.draws + 1 });
      }
    } else {
      if (turn === "BOT") {
        if (isEmpty(squares)) {
          const centerAndCorners = [0, 2, 6, 8, 4];
          const firstMove =
            centerAndCorners[
              Math.floor(Math.random() * centerAndCorners.length)
            ];
          insertCell(firstMove, "x");
          setIsHumanMaximizing(false);
          setTurn("HUMAN");
        } else {
          const best = getBestMove(
            squares,
            !isHumanMaximizing,
            0,
            !isPossible ? parseInt("-1") : parseInt("2")
          );
          insertCell(best, isHumanMaximizing ? "o" : "x");
          setTurn("HUMAN");
        }
      }
    }
  }, [squares, turn]);

  const reset = () => {
    setSquares([null, null, null, null, null, null, null, null, null]);
    setTurn(Math.random() < 0.5 ? "HUMAN" : "BOT");
  };

  const winner = isTerminal(squares);

    // console.log(isPossible);

  return (
    <div className="flex flex-col justify-center items-center p-20">
      <div className="flex flex-col items-center">
        <button onClick={() => {setIsPossible(!isPossible)}} className="text-white p-4 rounded-full bg-blue-900 font-bold text-lg text-center mb-4">
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
          gameResult={gameResult}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="text-blue-900 font-bold text-center pt-4">
          {gameResult ? getWinner(gameResult.winner) : null}
        </div>
        <button
          className="text-white p-4 rounded-full bg-blue-900 font-bold text-lg text-center mb-4"
          onClick={() => reset()}
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default Game;
