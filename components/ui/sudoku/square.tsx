import { Cell } from "@/components/ui/sudoku/utils/types";
import { cn } from "@/lib/utils";
import { getBoxNumber } from "./utils/board";

interface SquareProps {
  onPress: () => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  index: number;
  value: Cell;
  boxNumber?: number;
  focusIndex?: number;
  focusValue?: Cell;
  permanentValue?: Cell;
}

const Square = ({
  onPress,
  index,
  value,
  focusIndex,
  handleKeyDown,
  focusValue,
  permanentValue,
}: SquareProps) => {
  return (
    <button
      tabIndex={0}
      className={cn(
        "bg-white border border-blue-50 text-2xl h-[30pt] w-[30pt] focus:outline-none text-center text-blue-900 cursor-pointer",
        (index % 9 === 2 || index % 9 === 5) && "border-r-blue-900",
        ((index >= 18 && index < 27) || (index >= 45 && index < 54)) &&
          "border-b-blue-900",
        ((index >= 27 && index <= 35) || (index >= 54 && index <= 62)) &&
          "border-t-blue-900",
        (index % 9 === 3 || index % 9 === 6) && "border-l-blue-900",
        focusIndex !== undefined &&
          getBoxNumber(focusIndex) === getBoxNumber(index) &&
          "bg-blue-100",
        focusIndex !== undefined &&
          focusIndex % 9 === index % 9 &&
          "bg-blue-100",
        focusIndex !== undefined &&
          Math.floor(focusIndex / 9) === Math.floor(index / 9) &&
          "bg-blue-100",
          focusValue !== null && focusValue === value && "bg-blue-300",
          focusIndex !== undefined && focusIndex === index && "bg-blue-200 border-2 border-blue-600 rounded-sm ",
        permanentValue === null && "text-blue-400",
      )}
      onClick={onPress}
      onKeyDown={handleKeyDown}
      key={index}
    >
      {value}
    </button>
  );
};

export default Square;
