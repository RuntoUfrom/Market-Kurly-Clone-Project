import ShareIcon from "@/assets/common/icons/ShareIcon.svg";
import BasicSubmitButton from "../../common/button/BasicSubmitButton";
//후에 삭제 및 확인 필요
const ProductDetailInfo = ({ product }) => {
  const {
    isDawnDelivery,
    productName,
    originalPrice,
    discountPrice,
    discountRate,
  } = product;

  const formatPrice = (price) => price?.toLocaleString();

  // 브랜드명 추출: [브랜드] 형태에서 추출, 없으면 빈 문자열
  const brandMatch = productName?.match(/\[(.+?)\]/);
  const brandName = brandMatch ? brandMatch[1] : "";

  return (
    <div className="px-4 py-3 flex flex-col gap-3">
      {/* 배송 + 브랜드 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-gray-500">
          {isDawnDelivery && <span>샛별배송</span>}
          {isDawnDelivery && brandName && <span>|</span>}
          {brandName && (
            <span>
              {brandName} <span className="text-gray-400">{">"}</span>
            </span>
          )}
        </div>
        <img src={ShareIcon} alt="공유" className="w-5 h-5" />
      </div>

      {/* 상품명 */}
      <h1 className="text-lg font-bold text-gray-900 leading-snug">
        {productName}
      </h1>

      {/* 상품 설명 */}
      <p className="text-sm text-gray-500">바질과 치즈의 고소한 풍미</p>

      {/* 원산지 */}
      <p className="text-xs text-gray-400">원산지: 상품설명/상세정보 참조</p>

      {/* 가격 영역 */}
      <div className="flex flex-col gap-1">
        {/* 할인율 + 할인가 + 원가 */}
        <div className="flex items-baseline gap-2">
          {discountRate > 0 && (
            <span className="text-xl font-bold text-status">
              {discountRate}%
            </span>
          )}
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(discountPrice)}원
          </span>
          {originalPrice > discountPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(originalPrice)}원
            </span>
          )}
        </div>

        {/* 첫구매 최대혜택가 */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-status">55%</span>
          <span className="text-lg font-bold text-gray-900">6,290원</span>
          <span className="text-xs text-gray-500">
            첫구매 최대혜택가 <span className="text-gray-400">{">"}</span>
          </span>
        </div>
      </div>

      {/* 앱 전용 가격 배너 */}
      <div className="border border-gray-200 rounded-lg p-3 flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="bg-primary text-white text-xs font-bold px-1.5 py-0.5 rounded">
            %
          </span>
          <span className="text-sm text-gray-800">
            앱에서 <span className="font-bold text-primary">6,290원</span>에
            첫구매하고 무료배송받기
          </span>
        </div>
        <span className="text-sm font-semibold text-primary">
          앱 열기 {">"}
        </span>
      </div>

      {/* 쿠폰 버튼 */}

      <BasicSubmitButton text="20% 쿠폰 받기" variant="unfill" />

      {/* 구분선 */}
      <hr className="border-gray-100" />

      {/* 배송 / 판매자 정보 */}
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex">
          <span className="w-16 shrink-0 text-gray-500">배송</span>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">
              {isDawnDelivery ? "샛별배송" : "일반배송"}
            </span>
            <span className="text-xs text-gray-400 mt-1">
              {isDawnDelivery
                ? "23시 전 주문 시 수도권/충청 내일 아침 7시 전 도착\n(그 외 지역 아침 8시 전 도착)"
                : "배송 일정은 주문 시 확인"}
            </span>
          </div>
        </div>
        <div className="flex">
          <span className="w-16 shrink-0 text-gray-500">판매자</span>
          <span className="font-semibold text-gray-900">컬리</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
