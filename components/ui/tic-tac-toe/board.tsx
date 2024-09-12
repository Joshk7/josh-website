"use client";

import React, { ReactElement } from "react";
import Square from "@/components/ui/tic-tac-toe/square";
import { Cell, BoardState, BoardResult } from "./utils/types";

type BoardProps = {
  state: BoardState;
  disabled?: boolean;
  gameResult?: BoardResult | false;
  onCellPressed?: (index: number) => void;
};

const Board = ({
  state,
  disabled,
  onCellPressed,
  gameResult,
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
    </div>
  );
};

export default Board;
