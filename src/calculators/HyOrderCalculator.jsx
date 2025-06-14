// src/calculators/HyOrderCalculator.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/index.css';
import HyOrderForm from './HyOrderForm';
import { config } from '../config/config';

export default function HyOrderCalculator() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    serviceGen: "gen2",
    paymentType: "postpaid",
    devicePeriod: "3year",
    servicePeriod: "3year",
    menu10: 0,
    display10: 0,
    display15: 0,
    cardReaderType: "basic",
    cardReader: 0,
    discountOption: "none",
  });
  const [prepaidAmount, setPrepaidAmount] = useState(0);
  const [includeVAT, setIncludeVAT] = useState(false);
  const [result, setResult] = useState(null);
  const [monthlyOnly, setMonthlyOnly] = useState(null);
  const [lumpsumOnly, setLumpsumOnly] = useState(null);
  const resultRef = useRef(null);

  // 선불형일 때 카드리더 수량은 메뉴판 10인치 수량만 반영
  useEffect(() => {
    if (formData.paymentType === "prepaid") {
      setFormData(prev => ({ ...prev, cardReader: prev.menu10 }));
    }
  }, [formData.paymentType, formData.menu10]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (formData.paymentType === 'prepaid' && name === 'cardReader') {
      setFormData(prev => ({ ...prev, cardReader: prev.menu10 }));
      return;
    }
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      const numFields = ["menu10", "display10", "display15", "cardReader"];
      setFormData(prev => ({
        ...prev,
        [name]: numFields.includes(name) ? Number(value) : value
      }));
    }
  };

  const handleCalculate = () => {
    const dp = formData.devicePeriod;
    const sp = formData.servicePeriod;
    const sg = formData.serviceGen;

    // 단말 금액
    const m10 = formData.menu10 * (config[`price_menu10_${sg}_${dp}`] || 0);
    const d10 = formData.display10 * (config[`price_display10_${sg}_${dp}`] || 0);
    const d15 = formData.display15 * (config[`price_display15_${sg}_${dp}`] || 0);

    // 카드리더(선불): 타입별 단가 가져오기
    const readerRate = config[`price_cardreader_${formData.cardReaderType}`] || 0;
    const card = formData.paymentType === "prepaid"
      ? formData.cardReader * readerRate
      : 0;

    // 서비스 요금
    const totalTerms = formData.menu10 + formData.display10 + formData.display15;
    const serviceRate = config[`price_service_${sg}_${sp}`] || 0;
    const serviceLump = config[`price_service_${sg}_${sp}_lumpsum`] || 0;

    let total = 0, monthly = null, lumpsum = null;
    if (dp.includes('lumpsum') || sp.includes('lumpsum')) {
      lumpsum = m10 + d10 + d15 + serviceLump * totalTerms;
      monthly = formData.paymentType === 'prepaid' ? card : 0;
      if (includeVAT) {
        lumpsum = Math.round(lumpsum * 1.1);
        monthly = Math.round(monthly * 1.1);
      }
      setLumpsumOnly(lumpsum);
      setMonthlyOnly(monthly);
      total = lumpsum + monthly;
    } else {
      total = m10 + d10 + d15 + serviceRate * totalTerms + card - prepaidAmount;
      if (includeVAT) total = Math.round(total * 1.1);
      setLumpsumOnly(null);
      setMonthlyOnly(null);
    }

    setResult(total);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow rounded-xl">
      <h2 className="text-xl font-bold mb-4 text-center">KT 하이오더 계산기</h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium">하이오더 세대</label>
          <select
            name="serviceGen"
            className="mt-1 w-full border rounded p-2"
            value={formData.serviceGen}
            onChange={handleChange}
          >
            <option value="gen1">1세대 (기본: {config.price_service_gen1_3year.toLocaleString()}원)</option>
            <option value="gen2">2세대 (기본: {config.price_service_gen2_3year.toLocaleString()}원)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">결제 방법</label>
          <select
            name="paymentType"
            className="mt-1 w-full border rounded p-2"
            value={formData.paymentType}
            onChange={handleChange}
          >
            <option value="postpaid">후불형</option>
            <option value="prepaid">선불형</option>
          </select>
        </div>
      </div>

      <HyOrderForm
        formData={formData}
        handleChange={handleChange}
        prepaidAmount={prepaidAmount}
        setPrepaidAmount={setPrepaidAmount}
        includeVAT={includeVAT}
        setIncludeVAT={setIncludeVAT}
        handleCalculate={handleCalculate}
      />

      <div ref={resultRef} className="mt-4">
        {monthlyOnly != null && lumpsumOnly != null ? (
          <>
            <div className="font-semibold">일시불 총액: {lumpsumOnly.toLocaleString()}원</div>
            <div className="font-semibold">월 요금: {monthlyOnly.toLocaleString()}원</div>
          </>
        ) : (
          result != null && <div className="font-semibold">예상 총 금액: {result.toLocaleString()}원</div>
        )}
      </div>

      <div className="mt-6 text-center">
        <button onClick={() => navigate('/')} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          메인으로 돌아가기
        </button>
      </div>
    </div>
  );
}
