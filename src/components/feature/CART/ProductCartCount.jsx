import SubtractionIcon from "@/assets/common/icons/SubtractionIcon.svg";
import PlusIcon from "@/assets/common/icons/PlusIcon.svg";
import useCartStore from "@/stores/useCartStore";

/**
 * 장바구니 상품 수량 조절 컴포넌트
 * store의 quantity를 직접 사용하여 Single Source of Truth 유지
 */
const ProductCartCount = ({ quantity, productId }) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  return (
    <div>
      <div className="bg-gray-300 flex flex-row justify-between w-20 rounded-2xl">
        <div
          onClick={() => {
            if (quantity > 1) {
              updateQuantity(productId, quantity - 1);
            }
          }}
          className="w-7 h-7 flex flex-col justify-center p-2"
        >
          <img src={SubtractionIcon} alt="-" />
        </div>
        <div className="w-7 h-7 flex flex-col justify-center p-2">
          {quantity}
        </div>
        <div
          onClick={() => {
            updateQuantity(productId, quantity + 1);
          }}
          className="w-7 h-7 flex flex-col justify-center p-2"
        >
          <img src={PlusIcon} alt="+" />
        </div>
      </div>
    </div>
  );
};
export default ProductCartCount;