import React from "react";

export default function ButtonCard({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center
        h-20 rounded-lg shadow-md
        bg-gray-100 hover:bg-gray-200
        transition-colors
      "
    >
      <span className="text-lg font-medium">{label}</span>
    </button>
  );
}
