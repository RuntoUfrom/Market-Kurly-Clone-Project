import ShareIcon from "@/assets/common/icons/ShareIcon.svg";

/**
 * 상품 상세 정보 컴포넌트
 *
 * @param {Object} props
 * @param {Object} props.product - 상품 정보 객체
 * @param {number} props.product.ranking - 랭킹 순위
 * @param {string} props.product.rankingCategory - 랭킹 카테고리
 * @param {boolean} props.product.isDawnDelivery - 샛별배송 여부
 * @param {string} props.product.brandName - 브랜드명
 * @param {string} props.product.productName - 상품명
 * @param {string} props.product.shortDescription - 상품 짧은 설명
 * @param {string} props.product.origin - 원산지 정보
 * @param {number} props.product.discountRate - 할인율
 * @param {number} props.product.originalPrice - 원가
 * @param {number} [props.product.firstDiscountRate] - 첫 구매 혜택률
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
    originalPrice,
    firstDiscountRate,
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
          {(originalPrice * (1 - discountRate / 100)).toLocaleString()}원
        </span>
        <span className="text-xs text-gray-400 line-through ml-1">
          {originalPrice.toLocaleString()}원
        </span>
      </div>

      {/* 첫구매 혜택가 */}
      {firstDiscountRate > 0 && (
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold text-primary">
            {firstDiscountRate}%
          </span>
          <span className="text-lg font-bold text-gray-900">
            {(originalPrice * (1 - firstDiscountRate / 100)).toLocaleString()}원
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
