import React from "react";

export default function Notice({ text }) {
  return (
    <section className="w-full px-4 mt-8">
      <h2 className="text-lg font-medium mb-2">공지사항</h2>
      <div className="mt-6 p-4 bg-white rounded shadow-sm whitespace-pre-wrap">
      {text}
        </div>
      <div className="w-full min-h-[150px] bg-white rounded-lg shadow-inner p-4">
        </div>
    </section>
  );
}
