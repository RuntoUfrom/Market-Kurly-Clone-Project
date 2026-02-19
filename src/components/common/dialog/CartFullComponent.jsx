import ProductCartContent from "@/components/feature/CART/ProductCartContent";
import { useState } from "react";
import CheckUnFillIcon from "@/assets/common/icons/CheckUnfillIcon.svg";
import CheckPurpleIcon from "@/assets/common/icons/CheckPurpleIcon.svg";
import BasicSubmitButton from "../button/BasicSubmitButton";
import CartAmount from "@/components/feature/CART/CartAmount";
import useCartStore from "@/stores/useCartStore";

const CartFullComponent = ({ dialogClose }) => {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const [selectProduct, setSelectProduct] = useState(() =>
    cartItems.map((item) => item.productId),
  ); //체크된 상품 productId 배열 (기본: 전체 선택)

  const isAllSelected =
    selectProduct.length === cartItems.length && cartItems.length > 0;

  // 전체선택 토글
  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectProduct([]);
    } else {
      setSelectProduct(cartItems.map((item) => item.productId));
    }
  };

  // 개별 선택 토글
  const handleToggleSelect = (productId) => {
    setSelectProduct((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  // 선택삭제
  const handleDeleteSelected = () => {
    selectProduct.forEach((id) => removeFromCart(id));
    setSelectProduct([]);
  };

  const handleConfirm = () => {
    dialogClose({ confirmed: true });
  };

  // 선택된 상품의 최종 금액 계산
  const calFinalPrice = () => {
    const selectedItems = cartItems.filter((item) =>
      selectProduct.includes(item.productId),
    );
    return selectedItems.reduce((total, item) => {
      const actualPrice =
        (item.originalPrice * (100 - item.discountRate)) / 100;
      return total + actualPrice * item.quantity;
    }, 0);
  };

  const calOriginalPrice = () => {
    const selectedItems = cartItems.filter((item) =>
      selectProduct.includes(item.productId),
    );
    return selectedItems.reduce((total, item) => {
      const actualPrice = item.originalPrice;
      return total + actualPrice * item.quantity;
    }, 0);
  };

  return (
    <div className="bg-gray-100 h-full flex flex-col">
      <header className="shrink-0 bg-white ">
        <div className="flex flex-row gap-2 p-4 bg-white items-center ">
          <div onClick={handleConfirm}>X</div>
          <div className="text-lg font-medium">장바구니</div>
        </div>
        <div className="flex flex-row gap-2 justify-between px-4 pb-2 ">
          <div className="flex flex-row gap-2 p-1" onClick={handleSelectAll}>
            <img src={isAllSelected ? CheckPurpleIcon : CheckUnFillIcon} />
            <div className="font-medium text-gray-700 text-base">전체선택</div>
          </div>
          <div
            onClick={handleDeleteSelected}
            className="font-medium text-gray-400 text-xs border px-2 rounded-2xl flex items-center justify-center"
          >
            선택삭제
          </div>
        </div>
      </header>
      {cartItems.length > 0 ? (
        <main className="flex-1 overflow-y-auto no-scrollbar p-4 ">
          <div className="flex flex-col mb-6">
            <div className="bg-white rounded-xl overflow-hidden">
              {cartItems.map((product) => (
                <ProductCartContent
                  key={product.productId}
                  product={product}
                  productChecked={selectProduct.includes(product.productId)}
                  onToggleSelect={handleToggleSelect}
                />
              ))}

              <div className="bg-gray-200 p-2 m-4 text-sm font-medium text-center rounded-xl">
                {`상품 ${calFinalPrice() || 0}원 + 배송비 무료`}
              </div>
            </div>
          </div>
          <CartAmount
            finalPaymentAmount={calFinalPrice()}
            totalProductAmount={calOriginalPrice()}
            productDiscountAmount={calOriginalPrice() - calFinalPrice()}
          />
        </main>
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-400">
          담은 상품이 없어요
        </div>
      )}

      <footer className="shrink-0 bg-white">
        <BasicSubmitButton text="구매하기" variant="fill" />
      </footer>
    </div>
  );
};
export default CartFullComponent;
