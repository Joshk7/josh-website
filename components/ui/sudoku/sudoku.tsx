import { getSudoku } from "sudoku-gen";
import Board from "@/components/ui/sudoku/board";
import { useEffect, useState } from "react";
import { BoardState, Cell } from "@/components/ui/sudoku/utils/types";
import { Sudoku } from "sudoku-gen/dist/types/sudoku.type";
import { boardArray, getBoxNumber } from "./utils/board";
import Keypad from "@/components/ui/sudoku/keypad";
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type";

const SudokuGame = () => {
  const [difficultyLevel, setDifficultyLevel] = useState<Difficulty>("easy");
  const { puzzle, solution, difficulty }: Sudoku = getSudoku(difficultyLevel);
  const puzzleArray: BoardState = boardArray(puzzle);
  const solutionArray: BoardState = boardArray(solution);

  const [board, _setBoard] = useState<BoardState>(puzzleArray);

  const setBoard = (state: BoardState) => {
    console.log(state);
    _setBoard(state);
  };

  const [solved, setSolved] = useState<BoardState>(solutionArray);
  const [permanent, setPermanent] = useState<BoardState>(puzzleArray);

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
        if (focusIndex !== undefined && focusIndex - 9 >= 0) {
          setFocusIndex(focusIndex - 9);
        }
        return;
      }

      case "ArrowRight": {
        if (focusIndex !== undefined && focusIndex % 9 != 8) {
          setFocusIndex(focusIndex + 1);
        }
        return;
      }

      case "ArrowDown": {
        if (focusIndex !== undefined && focusIndex + 9 <= 80) {
          setFocusIndex(focusIndex + 9);
        }
        return;
      }

      case "ArrowLeft": {
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

    if (focusIndex === undefined) {
      return;
    }

    const _board = insertVal(focusIndex, val, board);
    setBoard(_board);
  };

  return (
    <div className="flex flex-col items-center justify-center p-20">
      Sudoku
      <div className="flex items-center justify-center">
        <Keypad />
        <Board
          state={board}
          focusIndex={focusIndex}
          focusValue={focusValue}
          handleKeyDown={handleOnKeyDown}
          onCellPressed={(cell) => handleOnCellPressed(cell)}
          permanentValues={permanent}
        />
      </div>
    </div>
  );
};

export default SudokuGame;
