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
        <div className="flex flex-col-reverse items-center mt-4 lg:flex-row lg:items-center">
          <div className="flex flex-col items-center w-64 md:w-80 lg:w-full">
            <h1 className="text-2xl py-8 text-blue-900 font-bold">Tic Tac Toe</h1>
            <p className="lg:px-20 text-blue-400">
              Try winning a tic tac toe game against the computer on impossible
              difficulty! You'll find that the computer is unbeatable because it
              relies on an algorithm to get the best possible move to make
              against you. The minimax algorithm it uses works by recursively
              going through every possible move that could be taken by either
              player until it reaches an end state which returns a score based
              on whether the state is a win, loss, or draw.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center px-40 py-4">
            <TicTacToeGame />
          </div>
        </div>
        <hr className="bg-blue-900 w-11/12 h-4 p-1 m-8 rounded-full" />
        <div className="flex flex-col items-center my-4 py-4 lg:flex-row lg:items-center">
            <div className="flex flex-col justify-center items-center px-40 py-4">
                <SudokuGame />
            </div>
          <div className="flex flex-col items-center w-64 md:w-80 lg:w-full">
            <h1 className="text-2xl py-8 text-blue-900 font-bold">Sudoku</h1>
            <p className="lg:px-20 text-blue-400">
              Sudoku is another fun game, however, there is no fancy algorithm
              to make this one work. I downloaded a sudoku generator
              from npm and integrated it into this website. This project was
              more helpful for me to learn how to set board states, style the
              board, and pass properties to components in react.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
