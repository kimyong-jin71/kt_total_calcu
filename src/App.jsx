// src/App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
const HyOrderCalculator = React.lazy(() => import('./calculators/HyOrderCalculator'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>로딩 중…</div>}>
        <Routes>
          {/* 메인 페이지 */}
          <Route path="/" element={<MainPage />} />

          {/* 하이오더 계산기 경로로 */}
          <Route path="/hiorder" element={<HyOrderCalculator />} />

          {/* 그 외 모든 경로는 메인으로로 */}
          <Route path="*" element={<MainPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
