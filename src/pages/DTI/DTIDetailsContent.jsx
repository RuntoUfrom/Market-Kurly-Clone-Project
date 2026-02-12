import ImageMappingHelper from "@/constants/ImageMappingHelper";

// 카테고리별 상품고시정보 label 맵
const PRODUCT_NOTICE_MAP = {
  market: [
    { key: "packagingType", label: "포장타입" },
    { key: "salesUnit", label: "판매단위" },
    { key: "weight", label: "중량/용량" },
    { key: "allergyInfo", label: "알레르기 정보" },
    { key: "expirationDate", label: "소비기한" },
    { key: "origin", label: "원산지" },
  ],
  beauty: [
    { key: "productTitle", label: "제품명" },
    { key: "manufacturer", label: "제조업자" },
    { key: "origin", label: "제조국" },
    { key: "volume", label: "내용물의 용량" },
    { key: "mainIngredients", label: "주요 성분" },
  ],
  fashion: [
    { key: "productTitle", label: "제품명" },
    { key: "material", label: "소재" },
    { key: "color", label: "색상" },
    { key: "size", label: "치수" },
  ],
  living: [
    { key: "productTitle", label: "제품명" },
    { key: "material", label: "소재" },
    { key: "size", label: "크기" },
    { key: "manufacturer", label: "제조자/수입자" },
  ],
};

const DTIDetailsContent = ({ detailDescription = {}, category = "market" }) => {
  const noticeLabels = PRODUCT_NOTICE_MAP[category] ?? PRODUCT_NOTICE_MAP.market;

  return (
    <div className="flex flex-col justify-center">
      <button className="p-2 bg-gray-300 rounded-2xl text-sm m-6">
        이미지를 클릭하면 더 크게 볼 수 있습니다.
      </button>
      {detailDescription.detailProductImage && (
        <img src={ImageMappingHelper[detailDescription.detailProductImage]} />
      )}
      <div className="px-4 py-6">
        <h3 className="text-base font-bold text-center mb-4">상품고시정보</h3>
        <div className="border-t border-gray-200">
          {noticeLabels.map(({ key, label }) => (
            <div
              key={key}
              className="grid grid-cols-[120px_1fr] border-b border-gray-100"
            >
              <span className="text-xs text-gray-500 py-4 pr-2 whitespace-pre-line">
                {label}
              </span>
              <span className="text-xs text-gray-700 py-4">
                {detailDescription[key] ?? "상품설명 및 상품이미지 참조"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DTIDetailsContent;
