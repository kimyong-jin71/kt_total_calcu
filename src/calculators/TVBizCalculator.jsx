// File: src/calculators/TVBizCalculator.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TVBizForm, { labelMap } from './TVBizForm';
import { config } from '../config/config';

export default function TVBizCalculator() {
  const navigate = useNavigate();
  const [selections, setSelections] = useState({
    isCorporate: false,
    agreementPeriod: '',
    internetPlan: '',
    tvPlan: '',
    comboOption: '',
    totalRooms: '',
    settopCount: ''
  });
  const [result, setResult] = useState(null);

  const handleChange = (name, value) => {
    setSelections(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'totalRooms' ? { settopCount: value } : {})
    }));
  };

  const calculate = () => {
    const {
      agreementPeriod,
      internetPlan,
      tvPlan,
      comboOption,
      totalRooms,
      settopCount
    } = selections;

    const rooms = Number(totalRooms) || 0;
    const ratio = comboOption.includes(':') ? Number(comboOption.split(':')[1]) : 1;

    // threshold = main + maxFamily = 1 + 4 = 5
    const threshold = 5;
    const groups = rooms / ratio;

    // tvBasicCount: full-price TV
    const tvBasicCount = groups <= 1 ? 1 : Math.floor(groups);
    // mainCount: number of internet lines needed
    const mainCount = Math.ceil(tvBasicCount / threshold);
    // familyCount: family lines = full-price TV - main lines
    const familyCount = tvBasicCount - mainCount;
    // additional TV = remaining rooms
    const tvAddCount = Math.max(rooms - tvBasicCount, 0);

    const stbCount = Number(settopCount) || rooms;
    const adultCount = stbCount;

    // prices
    const intPrice = config[internetPlan] || 0;
    const tvPrice = config[tvPlan] || 0;
    const addPrice = Math.round(tvPrice * 0.7);
    const stbPrice = 3000;
    const adultPrice = 2000;

    // amounts
    const intAmount = mainCount * intPrice;
    const famAmount = familyCount * intPrice;
    const basicAmount = tvBasicCount * tvPrice;
    const addAmount = tvAddCount * addPrice;
    const stbAmount = stbCount * stbPrice;
    const adultAmount = adultCount * adultPrice;

    const subtotal = intAmount + famAmount + basicAmount + addAmount + stbAmount + adultAmount;
    const vat = Math.round(subtotal * 0.1);
    const total = subtotal + vat;

    setResult({
      mainCount,
      familyCount,
      tvBasicCount,
      tvAddCount,
      stbCount,
      adultCount,
      intPrice,
      tvPrice,
      addPrice,
      stbPrice,
      adultPrice,
      famAmount,
      basicAmount,
      addAmount,
      stbAmount,
      adultAmount,
      subtotal,
      vat,
      total
    });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">KT TV_BIZ 계산기</h2>
      <TVBizForm selections={selections} onChange={handleChange} onCalculate={calculate} />

      {result && (
        <table className="w-full border border-gray-300 mt-4 text-sm">
          <thead className="bg-green-100 text-left">
            <tr>
              <th className="border px-2 py-1">No.</th>
              <th className="border px-2 py-1">규격</th>
              <th className="border px-2 py-1">품목</th>
              <th className="border px-2 py-1">단위</th>
              <th className="border px-2 py-1">수량</th>
              <th className="border px-2 py-1">단가</th>
              <th className="border px-2 py-1">금액</th>
              <th className="border px-2 py-1">비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">1</td>
              <td className="border px-2 py-1">인터넷</td>
              <td className="border px-2 py-1">{labelMap[selections.internetPlan]}</td>
              <td className="border px-2 py-1">회선</td>
              <td className="border px-2 py-1">{result.mainCount}</td>
              <td className="border px-2 py-1">{result.intPrice?.toLocaleString()}</td>
              <td className="border px-2 py-1">{result.intPrice ? (result.mainCount * result.intPrice).toLocaleString() + '원' : ''}</td>
              <td className="border px-2 py-1"></td>
            </tr>
            {result.familyCount > 0 && (
              <tr>
                <td className="border px-2 py-1">2</td>
                <td className="border px-2 py-1">인터넷 패밀리</td>
                <td className="border px-2 py-1">{labelMap[selections.internetPlan]} 패밀리</td>
                <td className="border px-2 py-1">회선</td>
                <td className="border px-2 py-1">{result.familyCount}</td>
                <td className="border px-2 py-1">{result.intPrice?.toLocaleString()}</td>
                <td className="border px-2 py-1">{result.famAmount?.toLocaleString() + '원'}</td>
                <td className="border px-2 py-1"></td>
              </tr>
            )}
            <tr>
              <td className="border px-2 py-1">3</td>
              <td className="border px-2 py-1">TV 기본</td>
              <td className="border px-2 py-1">{labelMap[selections.tvPlan]}</td>
              <td className="border px-2 py-1">회선</td>
              <td className="border px-2 py-1">{result.tvBasicCount}</td>
              <td className="border px-2 py-1">{result.basicAmount ? (result.basicAmount / result.tvBasicCount).toLocaleString() : ''}</td>
              <td className="border px-2 py-1">{result.basicAmount?.toLocaleString() + '원'}</td>
              <td className="border px-2 py-1"></td>
            </tr>
            {result.tvAddCount > 0 && (
              <tr>
                <td className="border px-2 py-1">4</td>
                <td className="border px-2 py-1">TV 추가</td>
                <td className="border px-2 py-1">{labelMap[selections.tvPlan]} 추가</td>
                <td className="border px-2 py-1">회선</td>
                <td className="border px-2 py-1">{result.tvAddCount}</td>
                <td className="border px-2 py-1">{result.addPrice?.toLocaleString()}</td>
                <td className="border px-2 py-1">{result.addAmount?.toLocaleString() + '원'}</td>
                <td className="border px-2 py-1"></td>
              </tr>
            )}
            <tr>
              <td className="border px-2 py-1">5</td>
              <td className="border px-2 py-1">셋탑 박스</td>
              <td className="border px-2 py-1">셋탑 A형 {selections.agreementPeriod}</td>
              <td className="border px-2 py-1">대</td>
              <td className="border px-2 py-1">{result.stbCount}</td>
              <td className="border px-2 py-1">{result.stbPrice?.toLocaleString()}</td>
              <td className="border px-2 py-1">{result.stbAmount?.toLocaleString() + '원'}</td>
              <td className="border px-2 py-1"></td>
            </tr>
            <tr>
              <td className="border px-2 py-1">6</td>
              <td className="border px-2 py-1">성인채널</td>
              <td className="border px-2 py-1">부가서비스</td>
              <td className="border px-2 py-1">구독</td>
              <td className="border px-2 py-1">{result.adultCount}</td>
              <td className="border px-2 py-1">{result.adultPrice?.toLocaleString()}</td>
              <td className="border px-2 py-1">{result.adultAmount?.toLocaleString() + '원'}</td>
              <td className="border px-2 py-1"></td>
            </tr>
            <tr className="font-bold bg-gray-100">
              <td className="border px-2 py-1" colSpan="6" align="right">계</td>
              <td className="border px-2 py-1">{result.subtotal?.toLocaleString() + '원'}</td>
              <td className="border px-2 py-1"></td>
            </tr>
            <tr>
              <td className="border px-2 py-1" colSpan="6" align="right">부가세</td>
              <td className="border px-2 py-1">{result.vat?.toLocaleString() + '원'}</td>
              <td className="border px-2 py-1"></td>
            </tr>
            <tr className="font-bold bg-gray-100">
              <td className="border px-2 py-1" colSpan="6" align="right">총계</td>
              <td className="border px-2 py-1">{result.total?.toLocaleString() + '원'}</td>
              <td className="border px-2 py-1"></td>
            </tr>
          </tbody>
        </table>
      )}

      <div className="mt-6 text-center">
        <button onClick={() => navigate('/')} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">
          메인으로 돌아가기
        </button>
      </div>
    </div>
  );
}
