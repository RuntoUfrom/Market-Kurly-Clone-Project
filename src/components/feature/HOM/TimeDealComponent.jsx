import SectionHeader from "@/components/common/SectionHeader";
import DealTimer from "@/components/feature/HOM/DealTimer";
import ProductImage from "@/components/common/ProductImage";
import BeautyImage01 from "@/assets/productimages/beautymarketimages/BeautyImage01.jpg";
import IconButton from "@/components/common/button/IconButton";
import ChatIcon from "@/assets/common/icons/ChatIcon.svg";

/**
 * 타임 딜 섹션 컴포넌트
 * 타이머와 상품 정보를 표시함.
 *
 * @param {Object} props
 * @param {Object} props.product - 상품 정보 객체
 * @param {string|Date} props.endTime - 타임 딜 종료 시간
 */
const TimeDealComponent = ({ product, endTime }) => {
  const {
    productName,
    productImage,
    topBadgeText,
    eventBadge,
    discountRate,
    originalPrice,
    reviewCount,
  } = product;

  const formatPrice = (price) => {
    return price?.toLocaleString() + "원";
  };

  return (
    <div>
      <SectionHeader main="4시간 타임 특가" description="무조건 본품 증정!" />
      <div className="bg-white px-4">
        <DealTimer endTime={endTime} />
        {/**endTime 작성 예시 :2026-02-10T18:00:00 */}
        <ProductImage
          productImage={BeautyImage01}
          topBadgeText={topBadgeText}
          eventBadge={eventBadge}
        />
        <div className="my-2">
          <IconButton icon="CART" alt="담기 버튼" label="담기" />
        </div>

        <p className="text-gray-800 text-base font-medium">
          {productName?.length > 16
            ? productName.slice(0, 16) + "..."
            : productName}
        </p>
        <p>
          {discountRate > 0 && (
            <span className="text-status font-bold">{discountRate}%</span>
          )}
          <span className="text-gray-900 font-bold mx-2">
            {formatPrice(originalPrice * (1 - discountRate / 100))}
          </span>

          {discountRate > 0 && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </p>
        {reviewCount > 0 && (
          <div className="flex items-center gap-1 text-gray-400 text-xs mt-2">
            <img src={ChatIcon} className="h-3 w-3" />
            <span>
              {reviewCount > 9999 ? "9,999+" : reviewCount.toLocaleString()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default TimeDealComponent;
