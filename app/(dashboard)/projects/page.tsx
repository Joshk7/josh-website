"use client";

import dynamic from "next/dynamic";

const TicTacToeGame = dynamic(
  () => import("../../../components/ui/tic-tac-toe/tic-tac-toe-game"),
  {
    ssr: false,
  }
);

const SudokuGame = dynamic(() => import("@/components/ui/sudoku/sudoku"), {
  ssr: false,
});

const Projects = () => {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full flex flex-col items-center m-auto">
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-xl">Tic Tac Toe</h1>
            <p className="p-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              necessitatibus suscipit, iure, quae praesentium perspiciatis,
              expedita nam distinctio natus totam nisi fugiat quasi sed. Nisi
              assumenda dicta beatae sed quibusdam!
            </p>
          </div>
          <TicTacToeGame />
        </div>
        <div className="flex items-center">
          <SudokuGame />
          <div className="flex flex-col items-center">
            <h1 className="text-xl">Sudoku</h1>
            <p className="p-20">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
              molestiae ad quisquam, officia praesentium corrupti dolor eos
              repudiandae debitis dolorum recusandae labore omnis aliquam culpa
              quas reiciendis quia neque odio!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
