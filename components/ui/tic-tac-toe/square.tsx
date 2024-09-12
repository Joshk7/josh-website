"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Cell } from "./utils/types";

interface SquareProps {
  disabled?: boolean;
  onPress: () => void;
  value: Cell;
  index: number;
}

const Square = ({ disabled, onPress, value }: SquareProps) => {
  return (
    <button
      disabled={disabled}
      className={
        "bg-white border border-blue-50 text-2xl font-bold h-20 w-20 text-center text-blue-900 cursor-pointer"
      }
      onClick={onPress}
    >
      {value}
    </button>
  );
};

export default Square;
