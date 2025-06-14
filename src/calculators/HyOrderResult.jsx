// src/calculators/HyOrderResult.jsx
import React from 'react';

export default function HyOrderResult({ result }) {
  if (result.total == null) return null;
  return (
    <div className="mt-6 bg-gray-50 p-4 rounded">
      <p className="font-semibold">총 금액: {result.total.toLocaleString()}원</p>
      {result.lumpsum != null && (
        <>
          <p>일시불: {result.lumpsum.toLocaleString()}원</p>
          <p>월 납부: {result.monthly.toLocaleString()}원</p>
        </>
      )}
    </div>
  );
}
