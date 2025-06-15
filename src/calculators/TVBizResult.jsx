// File: src/calculators/TVBizResult.jsx
import React from 'react';

export default function TVBizResult({ result }) {
  return (
    <div className="mt-6 p-4 bg-white rounded shadow">
      <h3 className="font-semibold mb-2">결과</h3>
      <p>인터넷 요금: {result.internetPrice.toLocaleString()}원</p>
      <p>TV 요금: {result.tvPrice.toLocaleString()}원</p>
      <p>결합 할인: -{result.comboDiscount.toLocaleString()}원</p>
      <p className="font-bold">총 요금: {result.total.toLocaleString()}원</p>
    </div>
  );
}
