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
  const dp = formData.devicePeriod;
  const sg = formData.serviceGen;

  // 단가 계산
  const menu10Label = config[`price_menu10_${sg}_${dp}`] || 0;
  const display10Label = config[`price_display10_${sg}_${dp}`] || 0;
  const display15Label = config[`price_display15_${sg}_${dp}`] || 0;

  // 라벨 텍스트
  const menu10Text = `${sg === 'gen1' ? '1세대' : '2세대'} 메뉴판 10인치`;
  const display10Text = `${sg === 'gen1' ? '1세대' : '2세대'} 알림판 10인치`;
  const display15Text = `${sg === 'gen1' ? '1세대' : '2세대'} 알림판 15인치`;

  return (
    <div className="grid gap-4">
      {/* 약정 선택 */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">단말 약정</label>
          <select
            name="devicePeriod"
            className="mt-1 w-full border rounded p-2"
            value={formData.devicePeriod}
            onChange={handleChange}
          >
            <option value="3year">3년</option>
            <option value="2year">2년</option>
            <option value="lumpsum">일시불</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">하이오더 서비스 약정</label>
          <select
            name="servicePeriod"
            className="mt-1 w-full border rounded p-2"
            value={formData.servicePeriod}
            onChange={handleChange}
          >
            <option value="3year">3년</option>
            <option value="2year">2년</option>
          </select>
        </div>
      </div>

      {/* 메뉴판 10인치 */}
      <div>
        <label className="block text-sm">
          {menu10Text} ({menu10Label.toLocaleString()}원)
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

      {/* 알림판 10인치 */}
      <div>
        <label className="block text-sm">
          {display10Text} ({display10Label.toLocaleString()}원)
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

      {/* 알림판 15인치 (2세대만) */}
      {sg === 'gen2' && (
        <div>
          <label className="block text-sm">
            {display15Text} ({display15Label.toLocaleString()}원)
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
      )}

      {/* 카드리더기 (선불형일 때) */}
      {formData.paymentType === 'prepaid' && (
        <>
          <div>
            <label className="block text-sm font-medium">선불형 카드리더기 타입 <span className="text-red-500"> 밴 대리점 별도 계약 및 납부</span></label>
            <select
              name="cardReaderType"
              className="w-full border rounded p-2 mt-1"
              value={formData.cardReaderType}
              onChange={handleChange}
            >
              <option value="basic">기본({config.price_cardreader_basic.toLocaleString()}원)</option>
              <option value="Nice">NICE({config.price_cardreader_Nice.toLocaleString()}원)</option>
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

      {/* 선납금 (할부형일 때만) */}
      {formData.devicePeriod !== 'lumpsum' && (
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
          className="w-full border rounded p-2 mt-1"
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
          className="w-full border rounded p-2 mt-1"
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
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-4"
      >
        계산하기
      </button>
    </div>
  );
}
