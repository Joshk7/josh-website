import { getSudoku } from "sudoku-gen";
import Board from "@/components/ui/sudoku/board";
import { useEffect, useState } from "react";
import { BoardState } from "@/components/ui/sudoku/utils/types";
import { Sudoku } from "sudoku-gen/dist/types/sudoku.type";
import { boardArray, getBoxNumber } from "./utils/board";
import Keypad from "@/components/ui/sudoku/keypad";
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type";

const SudokuGame = () => {
  const [difficultyLevel, setDifficultyLevel] = useState<Difficulty>("easy");
  var { puzzle, solution, difficulty }: Sudoku = getSudoku(difficultyLevel);
  var puzzleArray: BoardState = boardArray(puzzle);
  var solutionArray: BoardState = boardArray(solution);

  const [board, setBoard] = useState<BoardState>(puzzleArray);
  const [solved, setSolved] = useState<BoardState>(solutionArray);

  const [focusIndex, setFocusIndex] = useState<number | undefined>(undefined);

  //   console.log(board);
  //   console.log(difficultyLevel);
  //   console.log(solved);

  const handleOnCellPressed = (index: number) => {
    setFocusIndex(index);
  };

  const handleOnKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    console.log(event.key);
    if (!board?.[index]) {
      return;
    }

    switch (event?.key) {
      case "1": {
      }

      case "2": {
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-20">
      Sudoku
      <div className="flex items-center justify-center">
        <Keypad />
        <Board
          state={board}
          focusIndex={focusIndex}
          handleKeyDown={handleOnKeyDown}
          onCellPressed={(cell) => handleOnCellPressed(cell)}
        />
      </div>
    </div>
  );
};

export default SudokuGame;
