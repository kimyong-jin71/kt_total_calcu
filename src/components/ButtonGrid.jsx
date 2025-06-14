import React from "react";
import ButtonCard from "./ButtonCard";

const BUTTONS = ["하이오더", "TV-Biz", "인터넷", "TV", "로컬", "결합"];

export default function ButtonGrid({ onSelect }) {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 px-4 mt-6">
      {BUTTONS.map((label) => (
        <ButtonCard key={label} label={label} onClick={() => onSelect(label)} />
      ))}
    </div>
);
}
