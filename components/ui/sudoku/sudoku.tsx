import { getSudoku } from "sudoku-gen";
import Board from "@/components/ui/sudoku/board";
import { useEffect, useRef, useState } from "react";
import { BoardState, Cell } from "@/components/ui/sudoku/utils/types";
import { Sudoku } from "sudoku-gen/dist/types/sudoku.type";
import { boardArray, getBoxNumber } from "./utils/board";
import Keypad from "@/components/ui/sudoku/keypad";
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type";
import { cn } from "@/lib/utils";
import { Eraser, RotateCcw } from "lucide-react";

const SudokuGame = () => {
  const [difficultyLevel, _setDifficultyLevel] = useState<Difficulty>("easy");

  const setDifficultyLevel = (difficulty: Difficulty) => {
    _setDifficultyLevel(difficulty);
    const _sudoku = getSudoku(difficulty);
    setSudoku(_sudoku);
    setBoard([...boardArray(_sudoku.puzzle)], null);
    setFocusIndex(undefined);
  };

  const [sudoku, setSudoku] = useState<Sudoku>(getSudoku(difficultyLevel));
  const permanent: BoardState = boardArray(sudoku.puzzle);

  const solved: BoardState = boardArray(sudoku.solution);
  const seedState: BoardState = [...permanent];

  const [board, _setBoard] = useState<BoardState>(seedState);

  const setBoard = (state: BoardState, value: Cell) => {
    setFocusValue(value);
    _setBoard(state);
  };

  const [focusIndex, _setFocusIndex] = useState<number | undefined>(undefined);

  const setFocusIndex = (index: number | undefined) => {
    if (index !== null && index !== undefined) {
      setFocusValue(board[index]);
    }
    _setFocusIndex(index);
  };

  const [focusValue, _setFocusValue] = useState<Cell>(null);

  const setFocusValue = (value: Cell) => {
    _setFocusValue(value);
  };

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
    if (permanent?.[index]) {
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

  const keypad: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className="flex flex-col items-center justify-center p-20">
      <div className="flex flex-col items-center justify-center space-y-4">

      
        <div className="flex flex-row w-full justify-center items-center space-x-1">
          <h1 className="text-blue-900 p-2">Difficulty:</h1>
          <button
            onClick={() => {
              setDifficultyLevel("easy");
            }}
            className={cn(
              "bg-white p-2 rounded-sm text-blue-300 hover:bg-blue-900 hover:text-white",
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
              "bg-white p-2 rounded-sm text-blue-300 hover:bg-blue-900 hover:text-white",
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
              "bg-white p-2 rounded-sm text-blue-300 hover:bg-blue-900 hover:text-white",
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
              "bg-white p-2 rounded-sm text-blue-300 hover:bg-blue-900 hover:text-white",
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

            <div className="w-[272pt] space-x-12 justify-center flex flex-row">
                <div className="flex flex-col space-y-2 items-center">
                    <button>
                    <RotateCcw
                        size={48}
                        className="bg-white text-blue-300 p-2 rounded-full hover:bg-blue-900 hover:text-white"
                    />
                    </button>
                    {/* <h1 className="text-sm text-blue-900">Undo</h1> */}
                </div>

                <div className="flex flex-col space-y-2 items-center">
                    <button>
                    <Eraser
                        size={48}
                        className="bg-white text-blue-300 p-2 rounded-full hover:bg-blue-900 hover:text-white"
                    />
                    </button>
                    {/* <h1 className="text-sm text-blue-900">Erase</h1> */}
                </div>
            </div>

        <div className="flex flex-wrap items-center justify-center h-[225pt] w-[225pt]">
          {keypad.map((value) => (
            <button className="w-[65pt] h-[65pt] bg-white text-blue-300 mx-1 rounded-md hover:bg-blue-900 hover:text-white">
              <h1 className="">{value}</h1>
            </button>
          ))}
        </div>
        </div>
    </div>
  );
};

export default SudokuGame;
