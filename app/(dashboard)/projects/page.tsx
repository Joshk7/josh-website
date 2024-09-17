"use client";

import dynamic from "next/dynamic";

const TicTacToeGame = dynamic(() => import("../../../components/ui/tic-tac-toe/tic-tac-toe-game"), {
  ssr: false,
});

const SudokuGame = dynamic(() => import("@/components/ui/sudoku/sudoku"), {
  ssr: false,
});

const Projects = () => {
  return (
    <div className="w-full max-h-full relative">
      <TicTacToeGame />
      <SudokuGame />
    </div>
  );
};

export default Projects;
