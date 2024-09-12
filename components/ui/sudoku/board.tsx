import Square from "@/components/ui/sudoku/square";
import { BoardState } from "@/components/ui/sudoku/utils/types";

interface BoardProps {
  state: BoardState;
  onCellPressed: (index: number) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => void;
  focusIndex?: number;
}

const Board = ({ state, onCellPressed, handleKeyDown, focusIndex }: BoardProps) => {

  return (
    <div className="flex flex-row flex-wrap w-[272pt] justify-center items-center">
      {state.map((cell, index) => {
        return (
          <Square
            onPress={() => onCellPressed && onCellPressed(index)}
            handleKeyDown={(e) => handleKeyDown(e, index)}
            index={index}
            value={cell}
            focusIndex={focusIndex}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Board;
