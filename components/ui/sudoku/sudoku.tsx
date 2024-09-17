import { getSudoku } from "sudoku-gen";
import Board from "@/components/ui/sudoku/board";
import { useState } from "react";
import { BoardState, Cell } from "@/components/ui/sudoku/utils/types";
import { Sudoku } from "sudoku-gen/dist/types/sudoku.type";
import { boardArray, checkCompletion } from "./utils/board";
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type";
import { cn } from "@/lib/utils";
import { Eraser, RotateCcw } from "lucide-react";

interface HistoryEntry {
  boardState: BoardState;
  index?: number;
}

const SudokuGame = () => {
  const [difficultyLevel, _setDifficultyLevel] = useState<Difficulty>("easy");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const setDifficultyLevel = (difficulty: Difficulty) => {
    _setDifficultyLevel(difficulty);
    const _sudoku = getSudoku(difficulty);
    setSudoku(_sudoku);
    const newBoard = boardArray(_sudoku.puzzle);
    setBoard([...newBoard], null);
    setHistory([{ boardState: [...newBoard] }]);
    setFocusIndex(undefined);
  };

  const [sudoku, setSudoku] = useState<Sudoku>(getSudoku(difficultyLevel));
  const permanent: BoardState = boardArray(sudoku.puzzle);
  const solved: BoardState = boardArray(sudoku.solution);

  const initialBoard: BoardState = [...permanent];
  const [board, _setBoard] = useState<BoardState>(initialBoard);
  const [history, setHistory] = useState<HistoryEntry[]>([
    { boardState: initialBoard },
  ]);

  const [step, setStep] = useState<number>(0);

  const setBoard = (state: BoardState, value: Cell) => {
    
    if (checkCompletion(state, solved)) {
        setIsCompleted(true);
    }
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
    const newHistory: HistoryEntry[] = history.slice(0, step + 1);
    setHistory([...history, { boardState: _board, index: focusIndex }]);
    setStep(newHistory.length);
    setBoard(_board, val);
  };

  const handleUndoMove = () => {
    if (step > 0) {
      setStep(step - 1);
      console.log(step, history);
      setBoard(history[step - 1].boardState, null);
      setFocusIndex(history[step - 1].index);
      const newHistory: HistoryEntry[] = history.slice(0, step);
      setHistory(newHistory);
    }
  };

  const handleEraseMove = () => {
    if (focusIndex === undefined || permanent[focusIndex] !== null) {
      return;
    }

    const _board = insertVal(focusIndex, null, board);
    const newHistory: HistoryEntry[] = history.slice(0, step + 1);
    setHistory([...history, { boardState: _board, index: focusIndex }]);
    setStep(newHistory.length);
    setBoard(_board, null);
  };

  //   0,1,2
  //   9,10,11
  //   17,18,19

  const keypad: Cell[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const handleKeypad = (value: Cell) => {
    if (focusIndex === undefined || permanent[focusIndex] !== null) {
      return;
    }

    const _board = insertVal(focusIndex, value, board);
    const newHistory: HistoryEntry[] = history.slice(0, step + 1);
    setHistory([...history, { boardState: _board, index: focusIndex }]);
    setStep(newHistory.length);
    setBoard(_board, value);
  };

  const handleNewGame = () => {
    setDifficultyLevel(difficultyLevel);
    setIsCompleted(false);
  }

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
        <Board
          completed={isCompleted}
          state={board}
          solved={solved}
          focusIndex={focusIndex}
          focusValue={focusValue}
          handleKeyDown={handleOnKeyDown}
          handleNewGame={handleNewGame}
          onCellPressed={(cell) => handleOnCellPressed(cell)}
          permanent={permanent}
        />

        <div className="w-[272pt] space-x-12 justify-center flex flex-row">
          <div className="flex flex-col space-y-2 items-center">
            <button
              onClick={() => {
                handleUndoMove();
              }}
            >
              <RotateCcw
                size={48}
                className="bg-white text-blue-300 p-2 rounded-full hover:bg-blue-900 hover:text-white"
              />
            </button>
            {/* <h1 className="text-sm text-blue-900">Undo</h1> */}
          </div>

          <div className="flex flex-col space-y-2 items-center">
            <button
              onClick={() => {
                handleEraseMove();
              }}
            >
              <Eraser
                size={48}
                className="bg-white text-blue-300 p-2 rounded-full hover:bg-blue-900 hover:text-white"
              />
            </button>
            {/* <h1 className="text-sm text-blue-900">Erase</h1> */}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center h-[160pt] w-[160pt]">
          {keypad.map((value, index) => (
            <button
              key={index}
              onClick={() => handleKeypad(value)}
              className="w-[45pt] h-[45pt] bg-white text-blue-300 mx-1 rounded-md hover:bg-blue-900 hover:text-white"
            >
              <h1>{value}</h1>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SudokuGame;
