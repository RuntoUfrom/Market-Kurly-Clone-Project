import ChatIcon from "@/assets/common/icons/ChatIcon.svg";
const ProductInfo = ({ product, layout = "vertical" }) => {
  const {
    isDawnDelivery,
    productName,
    originalPrice,
    discountPrice,
    discountRate,
    reviewCount,
    isKurlyOnly,
  } = product;

  const formatPrice = (price) => {
    return price?.toLocaleString() + "원";
  };

  return (
    <div className="flex flex-col gap-1">
      {/* 샛별배송 - vertical에서만 표시 */}
      {layout === "vertical" && isDawnDelivery && (
        <span className="text-sm text-gray-400">샛별배송</span>
      )}

      {/* 상품명 */}
      <p className="text-gray-800 text-sm font-medium">
        {layout === "horizontal" || layout === "simple-horizontal"
          ? productName?.length > 16
            ? productName.slice(0, 16) + "..."
            : productName
          : productName}
      </p>

      {/* 원가(취소선)  */}
      {layout === "vertical" ||
        (layout === "horizontal" && originalPrice > discountPrice && (
          <span className="text-sm text-gray-400 line-through">
            {formatPrice(originalPrice)}
          </span>
        ))}

      {/* 할인율 + 할인가 */}
      <div className="flex items-center gap-1">
        {discountRate > 0 && (
          <span className="text-status font-bold">{discountRate}%</span>
        )}
        <span className="text-gray-900 font-bold">
          {formatPrice(discountPrice)}
        </span>
      </div>

      {/* 리뷰 수 - vertical에서만 표시 */}
      {layout === "vertical" && reviewCount > 0 && (
        <div className="flex items-center gap-1 text-gray-400 text-xs">
          <img src={ChatIcon} className="h-3 w-3" />
          <span>
            {reviewCount > 9999 ? "9,999+" : reviewCount.toLocaleString()}
          </span>
        </div>
      )}

      {/* Kurly Only 뱃지 - vertical에서만 표시 */}
      {layout === "vertical" && isKurlyOnly && (
        <span className="mt-1 w-fit px-2 py-1 text-xs font-bold text-primary bg-secondary/25  rounded">
          Kurly Only
        </span>
      )}
    </div>
  );
};

export default ProductInfo;
