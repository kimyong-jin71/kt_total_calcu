// src/pages/MainPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ButtonGrid from '../components/ButtonGrid';
import Notice from '../components/Notice';

export default function MainPage() {
  const [noticeText, setNoticeText] = useState('');
  const navigate = useNavigate();

  // 공지 설정
  useEffect(() => {
    setNoticeText(
      `- 토탈영업 직원 여러분 환영합니다! 계산하고자 하는 계산기를 위에 버튼에서 선택하세요.
- 오류나 수정사항은 언제든지 연락주세요.`
    );
  }, []);

  // 버튼 클릭 시 해당 계산기로 이동
  const handleSelect = (label) => {
    switch (label) {
      case '하이오더':
        navigate('/hiorder');
        break;
      case 'TV-Biz':
        navigate('/tvbiz');
        break;
      case '인터넷':
        navigate('/internet');
        break;
      case 'TV':
        navigate('/tv');
        break;
      case '로컬':
        navigate('/local');
        break;
      case '결합':
        navigate('/bundle');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <Header />

      {/* 버튼 그리드 + 공지사항 */}
      <main className="container mx-auto px-4 py-6">
        <ButtonGrid onSelect={handleSelect} />
        <Notice text={noticeText} />
      </main>
    </div>
  );
}
