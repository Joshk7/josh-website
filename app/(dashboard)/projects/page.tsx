"use client";

import dynamic from "next/dynamic";

const Game = dynamic(() => import("../../../components/ui/tic-tac-toe/game"), {
  ssr: false,
});

const SudokuGame = dynamic(() => import("@/components/ui/sudoku/sudoku"), {
  ssr: false,
});

const Projects = () => {
  return (
    <div className="w-full max-h-full relative">
      <Game />
      <SudokuGame />
    </div>
  );
};

export default Projects;
