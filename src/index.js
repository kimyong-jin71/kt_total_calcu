// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

// 1) root 엘리먼트를 가져와서
const container = document.getElementById('root');
// 2) createRoot 으로 root 객체를 만들고
const root = ReactDOM.createRoot(container);
// 3) root.render 로 렌더링합니다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);