import ProductCartCount from "@/components/feature/CART/ProductCartCount";
import CheckIcon from "@/assets/common/icons/CheckPurpleIcon.svg";
import CheckFilledIcon from "@/assets/common/icons/CheckUnfillIcon.svg";
/**
 * 장바구니 상품 카드 컴포넌트
 *
 * @param {Object} props
 * @param {Object} props.product - 상품 정보 객체
 * @param {boolean} props.productChecked - 상품 선택 여부
 * @param {Function} props.onToggleSelect - 선택 토글 콜백
 */
const ProductCartContent = ({ product, productChecked = false, onToggleSelect }) => {
  const {
    productId,
    productName,
    productImage,
    shortDescription,
    originalPrice,
    discountRate,
    productQuantityLeft,
    quantity,
  } = product;

  return (
    <div className="flex flex-row gap-3 p-2 bg-white">
      <div onClick={() => onToggleSelect(productId)}>
        {productChecked ? (
          <img src={CheckIcon} alt="선택됨" />
        ) : (
          <img src={CheckFilledIcon} alt="선택안됨" />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-black font-bold">{productName}</p>
          <p className="text-xs text-gray-400 font-medium">
            {shortDescription}
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <img
            src={productImage}
            alt="상품이미지"
            className="w-20 h-20 rounded-xl"
          />
          <div className="flex flex-col justify-between gap-2">
            <div className="flex flex-row gap-2 items-baseline">
              <p className="text-sm text-black font-bold">
                {`${((100 - discountRate) / 100) * originalPrice}원`}
              </p>
              <p className="text-xs text-gray-400 line-through font-medium">
                {originalPrice}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-baseline">
              <ProductCartCount quantity={quantity} productId={productId} />
              {productQuantityLeft && (
                <p className="text-xs text-status font-medium">{`재고 ${productQuantityLeft}개 미만`}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCartContent;