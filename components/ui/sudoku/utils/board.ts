import { BoardState, Cell } from "@/components/ui/sudoku/utils/types";

const BOARD_LENGTH = 81;

export const boardArray = (boardString: string): BoardState => {
  var res: BoardState = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];

  for (var i = 0; i < BOARD_LENGTH; i++) {
    var cell: Cell = null;

    switch (boardString.charAt(i)) {
        case "1": {
            cell = "1";
            break;
        }

        case "2": {
            cell = "2";
            break;
        }
        
        case "3": {
            cell = "3";
            break;
        }

        case "4": {
            cell = "4";
            break;
        }

        case "5": {
            cell = "5";
            break;
        }

        case "6": {
            cell = "6";
            break;
        }

        case "7": {
            cell = "7";
            break;
        }

        case "8": {
            cell = "8";
            break;
        }

        case "9": {
            cell = "9";
            break;
        }

        default: {
            cell = null;
        }
    }
    res[i] = cell;
  }

  return res;
};

export const getBoxNumber = (index: number): number => {
    // Calculate row and column from index
    const row = Math.floor(index / 9); // Get the row (0-8)
    const col = index % 9;             // Get the column (0-8)
  
    // Calculate which 3x3 box it belongs to
    const boxRow = Math.floor(row / 3); // 0 for rows 0-2, 1 for rows 3-5, etc.
    const boxCol = Math.floor(col / 3); // 0 for cols 0-2, 1 for cols 3-5, etc.
  
    // Return the box number (0-8)
    return 3 * boxRow + boxCol;
  }