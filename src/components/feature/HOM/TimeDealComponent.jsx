import SectionHeader from "@/components/common/SectionHeader";
import DealTimer from "@/components/feature/HOM/DealTimer";
import ProductImage from "@/components/common/ProductImage";
import IconButton from "@/components/common/button/IconButton";
import ChatIcon from "@/assets/common/icons/ChatIcon.svg";
import ImageMappingHelper from "@/constants/ImageMappingHelper";
import useHistoryController from "@/hooks/controllers/useHistoryController";
import useCartStore from "@/stores/useCartStore";
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
    productId,
    productName,
    productImage,
    topBadgeText,
    eventBadge,
    discountRate,
    originalPrice,
    reviewCount,
  } = product;
  const { moveTo } = useHistoryController();
  const { addToCart } = useCartStore();
  const formatPrice = (price) => {
    return price?.toLocaleString() + "원";
  };
  const handleProductClick = () => {
    moveTo({
      direction: "FORWARD",
      menuId: "DTI001",
      params: { productId },
    });
  };
  const cartData = {
    ...product,
    productImage: ImageMappingHelper[product?.productImage],
  };

  const handleCartClick = (e) => {
    e.stopPropagation();
    addToCart({ ...cartData, quantity: 1 });
  };
  return (
    <div onClick={handleProductClick}>
      <div className="bg-white px-4">
        <DealTimer endTime={endTime} />
        {/**endTime 작성 예시 :2026-02-10T18:00:00 */}
        <div className="h-40">
          <ProductImage
            productImage={ImageMappingHelper[productImage]}
            topBadgeText={topBadgeText}
            eventBadge={eventBadge}
          />
        </div>

        <div className="my-2" onClick={handleCartClick}>
          <IconButton icon="CART" alt="담기 버튼" label="담기" />
        </div>

        <p className="text-gray-800 text-base font-medium">
          {productName?.length > 16
            ? productName.slice(0, 30) + "..."
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
