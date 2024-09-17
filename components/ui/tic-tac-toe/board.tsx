"use client";

import React, { ReactElement, useState } from "react";
import Square from "@/components/ui/tic-tac-toe/square";
import { Cell, BoardState, BoardResult } from "./utils/types";

type BoardProps = {
  state: BoardState;
  disabled?: boolean;
  winner?: "HUMAN" | "BOT" | "DRAW" | false;
  onCellPressed?: (index: number) => void;
  handleNewGame: () => void;
};

const Board = ({
  state,
  disabled,
  onCellPressed,
  winner,
  handleNewGame,
}: BoardProps) => {
  return (
    <div className="flex flex-row flex-wrap w-60 h-60">
      {state.map((cell, index) => {
        return (
          <React.Fragment key={index + "-board"}>
            <Square
              disabled={cell !== null || disabled}
              onPress={() => onCellPressed && onCellPressed(index)}
              index={index}
              key={index}
              value={cell}
            />
          </React.Fragment>
        );
      })}

      {winner && (
        <div className="absolute z-10 w-full h-full">
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-8 w-56 h-56 bg-blue-900 rounded-lg">
              {winner === "HUMAN" && (
                <h1 className="bg-white p-4 rounded-lg font-bold text-blue-900">
                  You win!
                </h1>
              )}
              {winner === "BOT" && (
                <h1 className="bg-white p-4 rounded-lg font-bold text-blue-900">
                  Computer wins :&#40;
                </h1>
              )}
              {winner === "DRAW" && (
                <h1 className="bg-white p-4 rounded-lg font-bold text-blue-900">
                  It's a draw!
                </h1>
              )}
              <button
                onClick={() => {
                  handleNewGame();
                }}
                className="text-white p-4 rounded-full bg-blue-300 font-bold text-lg text-center mb-4"
              >
                New Game
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
