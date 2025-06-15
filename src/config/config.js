// src/config/config.js

// 하이오더 고정 값 시작
// 가격 및 고정값 모아두는 설정 파일
export const config = {
  // 메뉴판 단가
  price_menu10_gen2_3year: 7000,
  price_menu10_gen2_2year: 10500,
  price_menu10_gen2_lumpsum: 237000,
  price_menu10_gen1_3year: 6000,
  price_menu10_gen1_2year: 8500,
  price_menu10_gen1_lumpsum: 18400,
  
  // 알림판 단가
  price_display10_gen2_3year: 7000,
  price_display10_gen2_2year: 10500,
  price_display10_gen2_lumpsum: 237000,
  price_display15_gen2_3year: 9000,
  price_display15_gen2_2year: 13500,
  price_display15_gen2_lumpsum: 286000,
  price_display10_gen1_3year: 6000,
  price_display10_gen1_2year: 8500,
  price_display10_gen1_lumpsum: 18400,
  price_display15_gen1_3year: 9000,
  price_display15_gen1_2year: 13500,
  price_display15_gen1_lumpsum: 286000,


  // 서비스 세대별 기간별 고정값
  price_cardreader_basic: 2000,  //카드리더기가 basic일 경우 요금
  price_cardreader_Nice : 3000,  //카드리더기가 nice일 경우 요금
  price_service_gen1_3year: 13000, //하이오더 1세대 서비스 3년 할부 요금
  price_service_gen1_2year: 15500, //하이오더 1세대 서비스 2년 할부 요금
  price_service_gen2_3year: 13000, //하이오더 2세대 서비스 3년 할부 요금
  price_service_gen2_2year: 15500, //하이오더 2세대 서비스 2년 할부 요금
  
  price_service_gen1_3year_lumpsum: 421200, //하이오더 1세대 서비스 3년 선납납 요금
  price_service_gen1_2year_lumpsum: 334800, //하이오더 1세대 서비스 2년 선납납 요금
  price_service_gen2_3year_lumpsum: 421200, //하이오더 2세대 서비스 3년 선납납 요금
  price_service_gen2_2year_lumpsum: 334800,  //하이오더 2세대 서비스 2년 선납납 요금

  // 하이오더 고정 값 끝

  // tv_biz고정 값 시작
  //tvbiz 인터넷 기본 고정값
  internet_essence_tvbiz_mult_5year : 5, //인터넷 에센스(1G)_5년 약정(5원/월)
  internet_essence_tvbiz_mult_4year : 4, //인터넷 에센스(1G)_4년 약정(4원/월)
  internet_essence_tvbiz_mult_3year : 35000, //인터넷 에센스(1G)_3년 약정(35,000원/월)
  internet_essence_tvbiz_mult_2year : 40000, //인터넷 에센스(1G)_2년 약정(40,000원/월)
  internet_essence_tvbiz_mult_1year : 45000, //인터넷 에센스(1G)_1년 약정(45,000원/월)
  
  internet_basic_tvbiz_mult_5year : 5, //인터넷 베이직(500M)_5년 약정(5원/월)
  internet_basic_tvbiz_mult_4year : 4, //인터넷 베이직(500M)_4년 약정(4원/월)
  internet_basic_tvbiz_mult_3year : 30000, //인터넷 베이직(500M)_3년 약정(30,000원/월)
  internet_basic_tvbiz_mult_2year : 34000, //인터넷 베이직(500M)_2년 약정(34,000원/월)
  internet_basic_tvbiz_mult_1year : 38000, //인터넷 베이직(500M)_1년 약정(38,000원/월)

  internet_slim_tvbiz_mult_5year : 5, //인터넷 슬림(100M)_5년 약정(5원/월)
  internet_slim_tvbiz_mult_4year : 4, //인터넷 슬림(100M)_4년 약정(4원/월)
  internet_slim_tvbiz_mult_3year : 20000, //인터넷 슬림(100M)_3년 약정(30,000원/월)
  internet_slim_tvbiz_mult_2year : 27000, //인터넷 슬림(100M)_3년 약정(27,000원/월)
  internet_slim_tvbiz_mult_1year : 31500, //인터넷 슬림(100M)_3년 약정(31,500원/월)

  //tvbiz 인터넷 family 고정값
  internet_essence_tvbiz_mult_family_5year : 5, //인터넷 에센스(1G)_family_5년 약정(5원/월)
  internet_essence_tvbiz_mult_family_4year : 4, //인터넷 에센스(1G)_family_4년 약정(4원/월)
  internet_essence_tvbiz_mult_family_3year : 35000, //인터넷 에센스(1G)_family_3년 약정(35,000원/월)
  internet_essence_tvbiz_mult_family_2year : 40000, //인터넷 에센스(1G)_family_2년 약정(40,000원/월)
  internet_essence_tvbiz_mult_family_1year : 45000, //인터넷 에센스(1G)_family_1년 약정(45,000원/월)
  
  internet_basic_tvbiz_mult_family_5year : 5, //인터넷 베이직(500M)_family_5년 약정(5원/월)
  internet_basic_tvbiz_mult_family_4year : 4, //인터넷 베이직(500M)_family_4년 약정(4원/월)
  internet_basic_tvbiz_mult_family_3year : 30000, //인터넷 베이직(500M)_family_3년 약정(30,000원/월)
  internet_basic_tvbiz_mult_family_2year : 34000, //인터넷 베이직(500M)_family_2년 약정(34,000원/월)
  internet_basic_tvbiz_mult_family_1year : 38000, //인터넷 베이직(500M)_family_1년 약정(38,000원/월)

  internet_slim_tvbiz_mult_family_5year : 5, //인터넷 심플(100M)_family_5년 약정(5원/월)
  internet_slim_tvbiz_mult_family_4year : 4, //인터넷 심플(100M)_family_4년 약정(4원/월)
  internet_slim_tvbiz_mult_family_3year : 20000, //인터넷 심플(100M)_family_3년 약정(30,000원/월)
  internet_slim_tvbiz_mult_family_2year : 27000, //인터넷 심플(100M)_family_3년 약정(27,000원/월)
  internet_slim_tvbiz_mult_family_1year : 31500, //인터넷 심플(100M)_family_3년 약정(31,500원/월)

    //tvbiz 지니TV 기본 고정값
  tv_ginie_essence_tvbiz_mult_5year : 5, //지니TV 에센스(266ch)_5년 약정(5원/월)
  tv_ginie_essence_tvbiz_mult_4year : 4, //지니TV 에센스(266ch)_4년 약정(4원/월)  
  tv_ginie_essence_tvbiz_mult_3year : 35000, //지니TV 에센스(266ch)_3년 약정(35,000원/월)
  tv_ginie_essence_tvbiz_mult_2year : 40000, //지니TV 에센스(266ch)_2년 약정(40,000원/월)
  tv_ginie_essence_tvbiz_mult_1year : 45000, //지니TV 에센스(266ch)_1년 약정(45,000원/월)

  tv_ginie_lite_tvbiz_mult_5year : 5, //지니TV 라이트(266ch)_5년 약정(5원/월)
  tv_ginie_lite_tvbiz_mult_4year : 4, //지니TV 라이트(266ch)_4년 약정(4원/월)
  tv_ginie_lite_tvbiz_mult_3year : 30000, //지니TV 라이트(240ch)_3년 약정(30,000원/월)
  tv_ginie_lite_tvbiz_mult_2year : 34000, //지니TV 라이트(240ch)_2년 약정(34,000원/월)
  tv_ginie_lite_tvbiz_mult_1year : 38000, //지니TV 라이트(240ch)_1년 약정(38,000원/월)
 
  tv_ginie_basic_tvbiz_mult_5year : 5, //지니TV 베이직(236ch)_5년 약정(5원/월)
  tv_ginie_basic_tvbiz_mult_4year : 4, //지니TV 베이직(236ch)_4년 약정(4원/월)
  tv_ginie_basic_tvbiz_mult_3year : 30000, //지니TV 베이직(236ch)_3년 약정(30,000원/월)
  tv_ginie_basic_tvbiz_mult_2year : 34000, //지니TV 베이직(236ch)_2년 약정(34,000원/월)
  tv_ginie_basic_tvbiz_mult_1year : 38000, //지니TV 베이직(236ch)_1년 약정(38,000원/월)

  tv_ginie_slim_tvbiz_mult_5year : 5, //지니TV 심플(220ch)_5년 약정(5원/월)
  tv_ginie_slim_tvbiz_mult_4year : 4, //지니TV 심플(220ch)_4년 약정(4원/월)
  tv_ginie_slim_tvbiz_mult_3year : 20000, //지니TV 심플(220ch)_3년 약정(30,000원/월)
  tv_ginie_slim_tvbiz_mult_2year : 27000, //지니TV 심플(220ch)_3년 약정(27,000원/월)
  tv_ginie_slim_tvbiz_mult_1year : 31500, //지니TV 심플(220ch)_3년 약정(31,500원/월)

    //tvbiz 지니TV 추가 고정값
  tv_ginie_essence_tvbiz_mult_addition_5year : 5, //지니TV 에센스(266ch)_추가_5년 약정(5원/월)
  tv_ginie_essence_tvbiz_mult_addition_4year : 4, //지니TV 에센스(266ch)_추가_4년 약정(4원/월)  
  tv_ginie_essence_tvbiz_mult_addition_3year : 35000, //지니TV 에센스(266ch)_추가_3년 약정(35,000원/월)
  tv_ginie_essence_tvbiz_mult_addition_2year : 40000, //지니TV 에센스(266ch)_추가_2년 약정(40,000원/월)
  tv_ginie_essence_tvbiz_mult_addition_1year : 45000, //지니TV 에센스(266ch)_추가_1년 약정(45,000원/월)

  tv_ginie_lite_tvbiz_mult_addition_5year : 5, //지니TV 라이트(266ch)_추가_5년 약정(5원/월)
  tv_ginie_lite_tvbiz_mult_addition_4year : 4, //지니TV 라이트(266ch)_추가_4년 약정(4원/월)
  tv_ginie_lite_tvbiz_mult_addition_3year : 30000, //지니TV 라이트(240ch)_추가_3년 약정(30,000원/월)
  tv_ginie_lite_tvbiz_mult_addition_2year : 34000, //지니TV 라이트(240ch)_추가_2년 약정(34,000원/월)
  tv_ginie_lite_tvbiz_mult_addition_1year : 38000, //지니TV 라이트(240ch)_추가_1년 약정(38,000원/월)
 
  tv_ginie_basic_tvbiz_mult_addition_5year : 5, //지니TV 베이직(236ch)_추가_5년 약정(5원/월)
  tv_ginie_basic_tvbiz_mult_addition_4year : 4, //지니TV 베이직(236ch)_추가_4년 약정(4원/월)
  tv_ginie_basic_tvbiz_mult_addition_3year : 30000, //지니TV 베이직(236ch)_추가_3년 약정(30,000원/월)
  tv_ginie_basic_tvbiz_mult_addition_2year : 34000, //지니TV 베이직(236ch)_추가_2년 약정(34,000원/월)
  tv_ginie_basic_tvbiz_mult_addition_1year : 38000, //지니TV 베이직(236ch)_추가_1년 약정(38,000원/월)

  tv_ginie_slim_tvbiz_mult_addition_5year : 5, //지니TV 심플(220ch)_추가_5년 약정(5원/월)
  tv_ginie_slim_tvbiz_mult_addition_4year : 4, //지니TV 심플(220ch)_추가_4년 약정(4원/월)
  tv_ginie_slim_tvbiz_mult_addition_3year : 20000, //지니TV 심플(220ch)_추가_3년 약정(30,000원/월)
  tv_ginie_slim_tvbiz_mult_addition_2year : 27000, //지니TV 심플(220ch)_추가_2년 약정(27,000원/월)
  tv_ginie_slim_tvbiz_mult_addition_1year : 31500, //지니TV 심플(220ch)_추가_1년 약정(31,500원/월)  

  // 셋탑 박스 고정값
  settopbox_3year:3000,
};
