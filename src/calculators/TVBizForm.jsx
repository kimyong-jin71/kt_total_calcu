// File: src/calculators/TVBizForm.jsx
import React, { useEffect } from 'react';
import { config } from '../config/config';

// 한글 레이블 매핑
export const labelMap = {
  // 인터넷 에센스 (1G)
  internet_essence_tvbiz_mult_5year: '인터넷 에센스(1G) 5년 약정 (5원/월)',
  internet_essence_tvbiz_mult_4year: '인터넷 에센스(1G) 4년 약정 (4원/월)',
  internet_essence_tvbiz_mult_3year: '인터넷 에센스(1G) 3년 약정 (35,000원/월)',
  internet_essence_tvbiz_mult_2year: '인터넷 에센스(1G) 2년 약정 (40,000원/월)',
  internet_essence_tvbiz_mult_1year: '인터넷 에센스(1G) 1년 약정 (45,000원/월)',

  // 인터넷 베이직 (500M)
  internet_basic_tvbiz_mult_5year: '인터넷 베이직(500M) 5년 약정 (5원/월)',
  internet_basic_tvbiz_mult_4year: '인터넷 베이직(500M) 4년 약정 (4원/월)',
  internet_basic_tvbiz_mult_3year: '인터넷 베이직(500M) 3년 약정 (30,000원/월)',
  internet_basic_tvbiz_mult_2year: '인터넷 베이직(500M) 2년 약정 (34,000원/월)',
  internet_basic_tvbiz_mult_1year: '인터넷 베이직(500M) 1년 약정 (38,000원/월)',

  // 인터넷 슬림 (100M)
  internet_slim_tvbiz_mult_5year: '인터넷 슬림(100M) 5년 약정 (5원/월)',
  internet_slim_tvbiz_mult_4year: '인터넷 슬림(100M) 4년 약정 (4원/월)',
  internet_slim_tvbiz_mult_3year: '인터넷 슬림(100M) 3년 약정 (20,000원/월)',
  internet_slim_tvbiz_mult_2year: '인터넷 슬림(100M) 2년 약정 (27,000원/월)',
  internet_slim_tvbiz_mult_1year: '인터넷 슬림(100M) 1년 약정 (31,500원/월)',

  // 지니TV 에센스 (266채널)
  tv_ginie_essence_tvbiz_mult_5year: '지니TV 에센스(266채널) 5년 약정 (5원/월)',
  tv_ginie_essence_tvbiz_mult_4year: '지니TV 에센스(266채널) 4년 약정 (4원/월)',
  tv_ginie_essence_tvbiz_mult_3year: '지니TV 에센스(266채널) 3년 약정 (35,000원/월)',
  tv_ginie_essence_tvbiz_mult_2year: '지니TV 에센스(266채널) 2년 약정 (40,000원/월)',
  tv_ginie_essence_tvbiz_mult_1year: '지니TV 에센스(266채널) 1년 약정 (45,000원/월)',

  // 지니TV 라이트 (240채널)
  tv_ginie_lite_tvbiz_mult_5year: '지니TV 라이트(240채널) 5년 약정 (5원/월)',
  tv_ginie_lite_tvbiz_mult_4year: '지니TV 라이트(240채널) 4년 약정 (4원/월)',
  tv_ginie_lite_tvbiz_mult_3year: '지니TV 라이트(240채널) 3년 약정 (30,000원/월)',
  tv_ginie_lite_tvbiz_mult_2year: '지니TV 라이트(240채널) 2년 약정 (34,000원/월)',
  tv_ginie_lite_tvbiz_mult_1year: '지니TV 라이트(240채널) 1년 약정 (38,000원/월)',

  // 지니TV 베이직 (236채널)
  tv_ginie_basic_tvbiz_mult_5year: '지니TV 베이직(236채널) 5년 약정 (5원/월)',
  tv_ginie_basic_tvbiz_mult_4year: '지니TV 베이직(236채널) 4년 약정 (4원/월)',
  tv_ginie_basic_tvbiz_mult_3year: '지니TV 베이직(236채널) 3년 약정 (30,000원/월)',
  tv_ginie_basic_tvbiz_mult_2year: '지니TV 베이직(236채널) 2년 약정 (34,000원/월)',
  tv_ginie_basic_tvbiz_mult_1year: '지니TV 베이직(236채널) 1년 약정 (38,000원/월)',

  // 지니TV 심플 (220채널)
  tv_ginie_slim_tvbiz_mult_5year: '지니TV 심플(220채널) 5년 약정 (5원/월)',
  tv_ginie_slim_tvbiz_mult_4year: '지니TV 심플(220채널) 4년 약정 (4원/월)',
  tv_ginie_slim_tvbiz_mult_3year: '지니TV 심플(220채널) 3년 약정 (20,000원/월)',
  tv_ginie_slim_tvbiz_mult_2year: '지니TV 심플(220채널) 2년 약정 (27,000원/월)',
  tv_ginie_slim_tvbiz_mult_1year: '지니TV 심플(220채널) 1년 약정 (31,500원/월)',

  // 셋탑 박스
  settopbox_3year: '세탑박스 3년'
};

export default function TVBizForm({ selections, onChange, onCalculate }) {
  const { isCorporate, agreementPeriod, totalRooms, settopCount } = selections;
  const suffixMap = { '5년': '5year', '4년': '4year', '3년': '3year', '2년': '2year', '1년': '1year' };
  const yearSuffix = suffixMap[agreementPeriod] || '';
  const corporateWarning = '법인사업자는 인터넷 패밀리 회선에 가입 할 수 없음';

  useEffect(() => {
    if (totalRooms && !settopCount) onChange('settopCount', totalRooms);
  }, [totalRooms, settopCount, onChange]);

  const internetKeys = Object.keys(config).filter(k => k.startsWith('internet_') && k.includes(yearSuffix));
  const tvKeys = Object.keys(config).filter(k => k.startsWith('tv_') && k.includes(yearSuffix));

  const ratioOptions = [
    { value: '1:8', label: '1 : 8' },
    { value: '1:6', label: '1 : 6' }
  ];
  const agreementOptions = ['5년', '4년', '3년', '2년', '1년'];

  return (
    <>
      {/* 법인 체크 및 경고 */}
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="isCorporate"
          className="mr-2"
          checked={isCorporate}
          onChange={e => onChange('isCorporate', e.target.checked)}
        />
        <label htmlFor="isCorporate" className="font-medium">법인사업자</label>
      </div>
      {isCorporate && <p className="text-red-600 mb-4">{corporateWarning}</p>}

      {/* 약정 / 인터넷 / TV */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="border rounded p-4">
          <h3 className="font-semibold mb-2">약정</h3>
          <select
            className="w-full border rounded p-2"
            value={agreementPeriod}
            onChange={e => onChange('agreementPeriod', e.target.value)}
          >
            <option value="">선택하세요</option>
            {agreementOptions.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="border rounded p-4">
          <h3 className="font-semibold mb-2">인터넷</h3>
          <select
            className="w-full border rounded p-2"
            value={selections.internetPlan}
            onChange={e => onChange('internetPlan', e.target.value)}
            disabled={!yearSuffix}
          >
            <option value="">약정 선택 후</option>
            {internetKeys.map(key => <option key={key} value={key}>{labelMap[key]}</option>)}
          </select>
        </div>
        <div className="border rounded p-4">
          <h3 className="font-semibold mb-2">TV</h3>
          <select
            className="w-full border rounded p-2"
            value={selections.tvPlan}
            onChange={e => onChange('tvPlan', e.target.value)}
            disabled={!yearSuffix}
          >
            <option value="">약정 선택 후</option>
            {tvKeys.map(key => <option key={key} value={key}>{labelMap[key]}</option>)}
          </select>
        </div>
      </div>

      {/* 구성 / TV회선 / 셋탑 박스 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="border rounded p-4">
          <h3 className="font-semibold mb-2">인터넷 : TV 구성</h3>
          <select
            className="w-full border rounded p-2"
            value={selections.comboOption}
            onChange={e => onChange('comboOption', e.target.value)}
            disabled={!yearSuffix}
          >
            <option value="">선택하세요</option>
            {ratioOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </div>
        <div className="border rounded p-4">
          <h3 className="font-semibold mb-2">TV회선</h3>
          <input
            type="number"
            className="w-full border rounded p-2"
            value={totalRooms}
            onChange={e => onChange('totalRooms', e.target.value)}
            placeholder="입력하세요"
            disabled={!yearSuffix}
          />
        </div>
        <div className="border rounded p-4">
          <h3 className="font-semibold mb-2">셋탑 박스</h3>
          <input
            type="number"
            className="w-full border rounded p-2"
            value={selections.settopCount}
            onChange={e => onChange('settopCount', e.target.value)}
            placeholder="입력하세요"
            disabled={!yearSuffix}
          />
        </div>
      </div>

      {/* 계산 버튼 */}
      <div className="md:col-span-3">
        <button
          onClick={onCalculate}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          disabled={!selections.agreementPeriod}
        >
          계산하기
        </button>
      </div>
    </>
  );
}
