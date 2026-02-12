import ProductCartCount from "@/components/feature/CART/ProductCartCount";
import CheckIcon from "@/assets/common/icons/CheckPurpleIcon.svg";
import CheckFilledIcon from "@/assets/common/icons/CheckUnfillIcon.svg";
import { useState } from "react";
/**
 * 장바구니 상품 카드 컴포넌트
 *
 * @param {Object} props
 * @param {Object} props.product - 상품 정보 객체
 * @param {string} props.product.productName - 상품 이름
 * @param {string} props.product.productImage - 상품 이미지 URL
 * @param {string} props.product.productDescription - 상품 설명
 * @param {number|string} props.product.productOriginalPrice - 상품 원가
 * @param {number|string} props.product.productFinalPrice - 상품 최종 가격
 * @param {number} props.product.productQuantityLeft - 남은 재고 수량
 * @param {boolean} props.product.productChecked - 상품 선택 여부
 */
const ProductCartContent = ({ product }) => {
  const {
    productName,
    productImage,
    productDescription,
    productOriginalPrice,
    productFinalPrice,
    productQuantityLeft,
    productChecked,
  } = product;

  const [isChecked, setIsChecked] = useState(productChecked);

  return (
    <div className="flex flex-row gap-3 p-2 bg-white">
      <div
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      >
        {isChecked ? (
          <img src={CheckIcon} alt="선택됨" />
        ) : (
          <img src={CheckFilledIcon} alt="선택안됨" />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-black font-bold">{productName}</p>
          <p className="text-xs text-gray-400 font-medium">
            {productDescription}
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
                {productFinalPrice}
              </p>{" "}
              <p className="text-xs text-gray-400 line-through font-medium">
                {productOriginalPrice}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-baseline">
              <ProductCartCount />
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
