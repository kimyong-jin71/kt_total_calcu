// src/calculators/HyOrderForm.jsx
import React from 'react';
import { config } from '../config/config';

export default function HyOrderForm({
  formData,
  handleChange,
  prepaidAmount,
  setPrepaidAmount,
  includeVAT,
  setIncludeVAT,
  handleCalculate
}) {
  // 약정 기간에 따른 단가 표시
  const menu10Label = config[`price_menu10_${formData.serviceGen}_${formData.contractPeriod}`] || 0;
  const menu15Label = config[`price_menu15_${formData.contractPeriod}`] || 0;
  const display10Label = config[`price_display10_${formData.contractPeriod}`] || 0;
  const display15Label = config[`price_display15_${formData.contractPeriod}`] || 0;

  return (
    <div className="grid gap-4">
      {/* 결제 방법 선택 */}
      <div>
        <label className="block text-sm font-medium">결제 방법</label>
        <select
          name="paymentType"
          className="w-full border rounded p-2"
          value={formData.paymentType}
          onChange={handleChange}
        >
          <option value="postpaid">후불형</option>
          <option value="prepaid">선불형</option>
        </select>
      </div>
      {/* 단말 약정 / 하이오더 약정 */}
       <div className="grid grid-cols-2 gap-4">
          {/* 단말 약정 */}
             <div>
         <label className="block text-sm font-medium">단말 약정</label>
          <select
            name="contractPeriod"
            className="mt-1 w-full border rounded p-2"
            value={formData.contractPeriod}
            onChange={handleChange}
          >
            <option value="3year">3년</option>
            <option value="2year">2년</option>
            <option value="lumpsum">일시불</option>
          </select>
        </div>
        {/* 하이오더 서비스 약정 */}
        <div>
          <label className="block text-sm font-medium">하이오더 서비스 약정</label>
          <select
            name="contractPeriod"
            className="mt-1 w-full border rounded p-2"
            value={formData.contractPeriod}
            onChange={handleChange}
          >
            <option value="3year">3년</option>
            <option value="2year">2년</option>
            <option value="lumpsum">일시불</option>
          </select>
        </div>
      </div>
      {/* 메뉴판 수량 입력 */}
      <div>
        <label className="block text-sm">
          메뉴판/알림판 10인치 ({menu10Label.toLocaleString()}원)
        </label>
        <input
          type="number"
          name="menu10"
          className="w-full border rounded p-2"
          min={0}
          value={formData.menu10}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-sm">
          메뉴판/알림판 15인치 ({menu15Label.toLocaleString()}원)
        </label>
        <input
          type="number"
          name="menu15"
          className="w-full border rounded p-2"
          min={0}
          value={formData.menu15}
          onChange={handleChange}
        />
      </div>

      {/* 알림판 수량 입력 */}
      <div>
        <label className="block text-sm">
          알림판 10인치 ({display10Label.toLocaleString()}원)
        </label>
        <input
          type="number"
          name="display10"
          className="w-full border rounded p-2"
          min={0}
          value={formData.display10}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-sm">
          알림판 15인치 ({display15Label.toLocaleString()}원)
        </label>
        <input
          type="number"
          name="display15"
          className="w-full border rounded p-2"
          min={0}
          value={formData.display15}
          onChange={handleChange}
        />
      </div>

      {/* 카드리더기 타입과 수량 (선불형) */}
      {formData.paymentType === 'prepaid' && (
        <>
          <div>
            <label className="block text-sm font-medium">카드리더기 타입</label>
            <select
              name="cardReaderType"
              className="w-full border rounded p-2"
              value={formData.cardReaderType}
              onChange={handleChange}
            >
              <option value="basic">기본</option>
              <option value="Nice">NICE</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">카드리더 수량</label>
            <input
              type="number"
              name="cardReader"
              className="w-full border rounded p-2"
              min={0}
              value={formData.cardReader}
              onChange={handleChange}
            />
          </div>
        </>
      )}

      {/* 선납 입금 (약정 형태일 때) */}
      {formData.contractPeriod !== 'lumpsum' && (
        <div>
          <label className="block text-sm font-medium">선납 입금</label>
          <input
            type="number"
            name="prepaidAmount"
            className="w-full border rounded p-2"
            value={prepaidAmount}
            onChange={(e) => setPrepaidAmount(Number(e.target.value) || 0)}
            min={0}
          />
        </div>
      )}

      {/* 할인 옵션 */}
      <div>
        <label className="block text-sm font-medium">할인</label>
        <select
          name="discountOption"
          className="w-full border rounded p-2"
          value={formData.discountOption}
          onChange={handleChange}
        >
          <option value="none">없음</option>
          <option value="ktfamily">KT 결합할인</option>
          <option value="longterm">장기고객 할인</option>
        </select>
      </div>

      {/* 부가세 포함 여부 */}
      <div>
        <label className="block text-sm font-medium">부가세 포함 여부</label>
        <select
          className="w-full border rounded p-2"
          value={includeVAT ? 'include' : 'exclude'}
          onChange={(e) => setIncludeVAT(e.target.value === 'include')}
        >
          <option value="exclude">미포함</option>
          <option value="include">포함</option>
        </select>
      </div>

      {/* 계산하기 버튼 */}
      <button
        onClick={handleCalculate}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        계산하기
      </button>
    </div>
  );
}
