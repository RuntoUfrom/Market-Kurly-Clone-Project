import SectionHeader from "@/components/common/SectionHeader";
import DealTimer from "@/components/feature/HOM/DealTimer";
import ProductImage from "@/components/common/ProductImage";
import BeautyImage01 from "@/assets/beautymarketimages/BeautyImage01.jpg";
import IconButton from "@/components/common/button/IconButton";
import ChatIcon from "@/assets/common/icons/ChatIcon.svg";

const FullDealComponent = ({ product }) => {
  const {
    productName,
    productImage,
    topBadgeText,
    eventBadge,
    bottomBannerText,
    discountPrice,
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
      <DealTimer endTime="2026-02-10T18:00:00" />
      <ProductImage
        productImage={BeautyImage01}
        topBadgeText="+15%할인"
        eventBadge={false}
      />
      <IconButton label="담기" />

      <p className="text-gray-800 text-lg font-medium">
        {productName?.length > 16
          ? productName.slice(0, 16) + "..."
          : productName}
      </p>
      <p>
        {discountRate > 0 && (
          <span className="text-status font-bold">{discountRate}%</span>
        )}
        <span className="text-gray-900 font-bold">
          {formatPrice(discountPrice)}
        </span>

        {originalPrice > discountPrice && (
          <span className="text-sm text-gray-400 line-through">
            {formatPrice(originalPrice)}
          </span>
        )}
      </p>
      {reviewCount > 0 && (
        <div className="flex items-center gap-1 text-gray-400 text-xs">
          <img src={ChatIcon} className="h-3 w-3" />
          <span>
            {reviewCount > 9999 ? "9,999+" : reviewCount.toLocaleString()}
          </span>
        </div>
      )}
    </div>
  );
};
export default FullDealComponent;
