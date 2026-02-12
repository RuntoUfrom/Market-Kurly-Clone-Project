//Kurly Only 신상품 뷰컬페/가격 브랜드 유형 혜택 출시 포장타입 배송 프로모션

import FilterBtn from "../button/FilterBtn";

/**
 * 검색 필터 옵션 바 컴포넌트 (가로 스크롤)
 *
 * @param {Object} props
 * @param {boolean} [props.isKurlyOnly=true] - Kurly Only 필터 표시 여부
 * @param {boolean} [props.isNew=false] - 신상품 필터 표시 여부
 * @param {boolean} [props.isWonderHotDeal=false] - 원더핫딜 필터 표시 여부
 * @param {boolean} [props.isBeautyFest=false] - 뷰컬페 필터 표시 여부
 */
const FilterBar = ({
  isKurlyOnly = true,
  isNew = false,
  isWonderHotDeal = false,
  isBeautyFest = false,
}) => {
  let index = 0;
  const filterList = [
    "가격",
    "브랜드",
    "유형",
    "혜택",
    "출시",
    "포장타입",
    "배송",
    "프로모션",
  ];
  return (
    <div className="flex flex-row gap-2 overflow-x-auto scrollbar-hide">
      {isKurlyOnly && (
        <div className="shrink-0 rounded-full bg-linear-to-r from-purple-500 to-sky-300 p-[1.5px]">
          <button
            className="inline-flex items-center gap-1 py-1.5 px-3 bg-white font-medium text-sm rounded-full text-primary hover:bg-gray-50"
            onClick={() => console.log("필터 컬리 온리")}
          >
            Kurly Only
          </button>
        </div>
      )}
      {isNew && (
        <div className="shrink-0 rounded-full bg-linear-to-r from-purple-500 to-sky-300 p-[1.5px]">
          <button
            className="inline-flex items-center gap-1 py-1.5 px-3 bg-white font-medium text-sm rounded-full text-primary hover:bg-gray-50"
            onClick={() => console.log("신상품 필터")}
          >
            신상품
          </button>
        </div>
      )}
      {isWonderHotDeal && (
        <div className="shrink-0 rounded-full bg-linear-to-r from-purple-500 to-sky-300 p-[1.5px]">
          <button
            className="inline-flex items-center gap-1 py-1.5 px-3 bg-white font-medium text-sm rounded-full text-primary hover:bg-gray-50"
            onClick={() => console.log("원더핫딜 필터")}
          >
            원더핫딜
          </button>
        </div>
      )}
      {isBeautyFest && (
        <div className="shrink-0 rounded-full bg-linear-to-r from-purple-500 to-sky-300 p-[1.5px]">
          <button
            className="inline-flex items-center gap-1 py-1.5 px-3 bg-white font-medium text-sm rounded-full text-primary hover:bg-gray-50"
            onClick={() => console.log("뷰컬페 필터")}
          >
            뷰컬페
          </button>
        </div>
      )}
      {filterList.map((item) => (
        <FilterBtn key={item} label={item} />
      ))}
    </div>
  );
};
export default FilterBar;
