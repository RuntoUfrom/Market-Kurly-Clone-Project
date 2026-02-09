import ShareIcon from "@/assets/common/icons/ShareIcon.svg";

/**
const mockProduct = {
  ranking: 1,
  rankingCategory: "채소",
  // 2. 샛별 배송 여부
  isDawnDelivery: true,
  // 3. 브랜드명
  brandName: "농부의 아침",
  // 4. 상품 이름
  productName: "[실속] 유기농 파프리카 2입",
  // 5. 상품 설명 (상세 요약)
  shortDescription: "아삭한 식감과 풍부한 영양을 담은 친환경 파프리카",
  // 6. 상품 원산지
  origin: "국산",
  // 7. 할인율 (%)
  discountRate: 20,
  // 8. 할인 후 가격 (판매가)
  salesPrice: 3200,
  // 9. 원가
  originalPrice: 4000,
  // 10. 첫 구매 시 할인율 (%)
  firstPurchaseDiscountRate: 90,
  // 11. 첫 구매 시 할인가
  firstPurchasePrice: 400,
  productImage: "MarketImage01",
};
 */

const ProductDetailInfo = ({ product }) => {
  const {
    ranking,
    rankingCategory,
    isDawnDelivery,
    brandName,
    productName,
    shortDescription,
    origin,
    discountRate,
    salesPrice,
    originalPrice,
    firstPurchaseDiscountRate,
    firstPurchasePrice,
  } = product;

  return (
    <div className="w-full px-4 py-3 bg-white">
      {/* 카테고리 랭킹 + 후기 */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-primary font-semibold bg-secondary/20 p-1 px-3 rounded-2xl">
          {rankingCategory} {ranking}위 &gt;
        </span>
        <span className="text-xs text-gray-500">후기 5,199건</span>
      </div>

      {/* 샛별배송 + 브랜드명 */}
      <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
        {isDawnDelivery && <span>샛별배송</span>}
        {isDawnDelivery && brandName && <span>|</span>}
        <span>{brandName} &gt;</span>
      </div>

      {/* 상품명 + 공유 버튼 */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <h2 className="text-base font-semibold text-gray-900 leading-snug">
          {productName}
        </h2>
        <button
          className="shrink-0 mt-1"
          onClick={() => {
            console.log("공유 버튼 클릭");
          }}
        >
          <img src={ShareIcon} alt="공유" className="w-5 h-5" />
        </button>
      </div>

      {/* 상품 설명 */}
      <p className="text-xs text-gray-500 mb-1">{shortDescription}</p>

      {/* 원산지 */}
      <p className="text-xs text-gray-400 mb-3">원산지: {origin}</p>

      {/* 할인율 + 판매가 + 원가 */}
      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-lg font-bold text-status">{discountRate}%</span>
        <span className="text-lg font-bold text-gray-900">
          {salesPrice.toLocaleString()}원
        </span>
        <span className="text-xs text-gray-400 line-through ml-1">
          {originalPrice.toLocaleString()}원
        </span>
      </div>

      {/* 첫구매 혜택가 */}
      {firstPurchaseDiscountRate !== null && firstPurchasePrice !== null && (
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold text-primary">
            {firstPurchaseDiscountRate}%
          </span>
          <span className="text-lg font-bold text-gray-900">
            {firstPurchasePrice.toLocaleString()}원
          </span>
          <span className="text-xs text-primary mx-2 font-medium">
            첫구매 최대혜택가
          </span>
        </div>
      )}
    </div>
  );
};
export default ProductDetailInfo;
