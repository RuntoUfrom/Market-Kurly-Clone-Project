import ProductImageBedge from "@/assets/common/ProductImageBadge.png";
const ProductImage = ({
  productImage,
  topBadge = false,
  topBadgeText = "",
  eventBadge = false,
  bottomBanner = false,
  bottomBannerText = "",
}) => {
  return (
    <div className="relative w-2/5 overflow-hidden rounded-md ">
      <img
        src={productImage}
        alt="상품 이미지"
        className="w-full h-auto object-cover"
      />
      {topBadge && (
        <div className="absolute top-2 left-2 bg-secondary text-white text-xs font-semibold px-2 py-1 rounded">
          {topBadgeText}
        </div>
      )}
      {eventBadge && (
        <img
          src={ProductImageBedge}
          alt="상품 이미지레이어 배지"
          className="absolute bottom-10 left-1 w-16 h-16"
        />
      )}
      {bottomBanner && (
        <div className="absolute bottom-0 left-0 right-0 bg-gray-800/40 text-white text-xs font-medium text-center py-2">
          {bottomBannerText}
        </div>
      )}
    </div>
  );
};
export default ProductImage;
