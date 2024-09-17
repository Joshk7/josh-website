import Square from "@/components/ui/sudoku/square";
import { BoardState, Cell } from "@/components/ui/sudoku/utils/types";
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type";

interface BoardProps {
  state: BoardState;
  solved: BoardState;
  onCellPressed: (index: number) => void;
  handleKeyDown: (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => void;
  handleNewGame: () => void;
  focusIndex?: number;
  focusValue?: Cell;
  readonly permanent: BoardState;
  completed?: boolean;
}

const Board = ({
  state,
  onCellPressed,
  handleKeyDown,
  handleNewGame,
  focusIndex,
  focusValue,
  permanent,
  solved,
  completed,
}: BoardProps) => {
  return (
    <div className="flex flex-row flex-wrap w-[272pt] h-[272pt] justify-center items-center">
      {state.map((cell, index) => {
        return (
          <Square
            onPress={() => onCellPressed && onCellPressed(index)}
            valid={cell !== null && solved[index] === cell}
            handleKeyDown={(e) => handleKeyDown(e, index)}
            index={index}
            value={cell}
            focusIndex={focusIndex}
            focusValue={focusValue}
            key={index}
            permanentValue={permanent && permanent[index]}
          />
        );
      })}
      {completed ? (
        <div className="absolute z-10 w-[272pt] h-[272pt]">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-[230pt] h-[230pt] bg-blue-900 rounded-lg flex items-center justify-center flex-col space-y-16">
              <h1 className="text-white font-bold text-2xl">
                Puzzle Completed!
              </h1>
              <button onClick={() => handleNewGame && handleNewGame()} className="bg-white p-4 w-44 font-bold rounded-full text-blue-300">
                New Game
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Board;
