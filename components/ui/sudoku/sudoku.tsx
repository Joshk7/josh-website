import { getSudoku } from "sudoku-gen";
import Board from "@/components/ui/sudoku/board";
import { useEffect, useRef, useState } from "react";
import { BoardState, Cell } from "@/components/ui/sudoku/utils/types";
import { Sudoku } from "sudoku-gen/dist/types/sudoku.type";
import { boardArray, getBoxNumber } from "./utils/board";
import Keypad from "@/components/ui/sudoku/keypad";
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type";
import { cn } from "@/lib/utils";

const SudokuGame = () => {
  const [difficultyLevel, _setDifficultyLevel] = useState<Difficulty>("easy");

  const setDifficultyLevel = (difficulty: Difficulty) => {
    _setDifficultyLevel(difficulty);
    const _sudoku = getSudoku(difficulty);
    setSudoku(_sudoku);
    setBoard([...boardArray(_sudoku.puzzle)], null);
  };

  const [sudoku, setSudoku] = useState<Sudoku>(getSudoku(difficultyLevel));
  const permanent = boardArray(sudoku.puzzle);
  const solved: BoardState = boardArray(sudoku.solution);

  const [board, _setBoard] = useState<BoardState>([...permanent]);

  const setBoard = (state: BoardState, value: Cell) => {
    console.log(state);
    setFocusValue(value);
    _setBoard(state);
  };

  //   const [permanent, setPermanent] = useState<BoardState>(puzzleArray);

  const [focusIndex, _setFocusIndex] = useState<number | undefined>(undefined);

  const setFocusIndex = (index: number) => {
    setFocusValue(board[index]);
    _setFocusIndex(index);
  };

  const [focusValue, _setFocusValue] = useState<Cell>(null);

  const setFocusValue = (value: Cell) => {
    _setFocusValue(value);
  };

  //   console.log(board);
  //   console.log(difficultyLevel);
  //   console.log(solved);

  const handleOnCellPressed = (index: number) => {
    setFocusIndex(index);
    setFocusValue(board[index]);
  };

  const insertVal = (index: number, value: Cell, curBoard: BoardState) => {
    if (permanent[index]) {
      return curBoard;
    }

    const newBoard: BoardState = [...board];
    newBoard[index] = value;
    return newBoard;
  };

  const handleOnKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (board?.[index]) {
      return;
    }
    event.preventDefault();

    var val: Cell = null;
    switch (event?.key) {
      case "1": {
        val = "1";
        break;
      }

      case "2": {
        val = "2";
        break;
      }

      case "3": {
        val = "3";
        break;
      }

      case "4": {
        val = "4";
        break;
      }

      case "5": {
        val = "5";
        break;
      }

      case "6": {
        val = "6";
        break;
      }

      case "7": {
        val = "7";
        break;
      }

      case "8": {
        val = "8";
        break;
      }

      case "9": {
        val = "9";
        break;
      }

      case "ArrowUp": {
        event.preventDefault();
        if (focusIndex !== undefined && focusIndex - 9 >= 0) {
          setFocusIndex(focusIndex - 9);
        }
        return;
      }

      case "ArrowRight": {
        event.preventDefault();
        if (focusIndex !== undefined && focusIndex % 9 != 8) {
          setFocusIndex(focusIndex + 1);
        }
        return;
      }

      case "ArrowDown": {
        event.preventDefault();
        if (focusIndex !== undefined && focusIndex + 9 <= 80) {
          setFocusIndex(focusIndex + 9);
        }
        return;
      }

      case "ArrowLeft": {
        event.preventDefault();
        if (focusIndex !== undefined && focusIndex % 9 != 0) {
          setFocusIndex(focusIndex - 1);
        }
        return;
      }

      case "Backspace": {
        val = null;
        break;
      }

      default: {
        return;
      }
    }

    if (focusIndex === undefined || permanent[focusIndex] !== null) {
      return;
    }

    const _board = insertVal(focusIndex, val, board);
    setBoard(_board, val);
  };

  return (
    <div className="flex flex-col items-center justify-center p-20">
      <div className="flex flex-col items-start justify-center">
        <div className="flex flex-row w-full justify-center items-center mb-4">
          <h1 className="text-blue-900 mr-1">Difficulty:</h1>
          <button
            onClick={() => {
              setDifficultyLevel("easy");
            }}
            className={cn(
              "bg-white p-2 rounded-sm mx-1 text-blue-300 hover:bg-blue-900 hover:text-white",
              difficultyLevel === "easy" && "bg-blue-900 text-white"
            )}
          >
            Easy
          </button>
          <button
            onClick={() => {
              setDifficultyLevel("medium");
            }}
            className={cn(
              "bg-white p-2 rounded-sm mx-1 text-blue-300 hover:bg-blue-900 hover:text-white",
              difficultyLevel === "medium" && "bg-blue-900 text-white"
            )}
          >
            Medium
          </button>
          <button
            onClick={() => {
              setDifficultyLevel("hard");
            }}
            className={cn(
              "bg-white p-2 rounded-sm mx-1 text-blue-300 hover:bg-blue-900 hover:text-white",
              difficultyLevel === "hard" && "bg-blue-900 text-white"
            )}
          >
            Hard
          </button>
          <button
            onClick={() => {
              setDifficultyLevel("expert");
            }}
            className={cn(
              "bg-white p-2 rounded-sm mx-1 text-blue-300 hover:bg-blue-900 hover:text-white",
              difficultyLevel === "expert" && "bg-blue-900 text-white"
            )}
          >
            Expert
          </button>
        </div>
        {/* <Keypad /> */}
        <Board
          state={board}
          solved={solved}
          focusIndex={focusIndex}
          focusValue={focusValue}
          handleKeyDown={handleOnKeyDown}
          onCellPressed={(cell) => handleOnCellPressed(cell)}
          permanent={permanent}
        />
      </div>
    </div>
  );
};

export default SudokuGame;
