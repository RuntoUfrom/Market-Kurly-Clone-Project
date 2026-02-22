/**
 * 장바구니 결제 예상 금액 정보 컴포넌트
 *
 * @param {Object} props
 * @param {number} props.totalProductAmount - 총 상품 금액
 * @param {number} props.productDiscountAmount - 상품 할인 금액
 * @param {number} props.couponDiscountAmount - 쿠폰 할인 금액
 * @param {number} props.deliveryFee - 배송비
 * @param {number} props.finalPaymentAmount - 최종 결제 예정 금액
 */
const CartAmount = ({
  totalProductAmount,
  productDiscountAmount,
  couponDiscountAmount,
  deliveryFee,
  finalPaymentAmount,
}) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-3 rounded-md">
      <div className="flex flex-row justify-between text-sm">
        <span className="text-sm font-medium text-gray-900">상품 금액</span>
        <span className="text-sm font-medium text-gray-900">
          {`${totalProductAmount || 0}원`}
        </span>
      </div>
      <div className="flex flex-row justify-between  text-sm">
        <span className="text-sm font-medium text-gray-900">
          상품 할인 금액
        </span>
        <span className="text-status font-medium">{`${productDiscountAmount || 0}원`}</span>
      </div>
      <div className="flex flex-row justify-between  text-sm">
        <span className="text-sm font-medium text-gray-900">
          쿠폰 할인 금액
        </span>
        <span className="text-sm font-medium text-gray-900">{`${couponDiscountAmount || 0}원`}</span>
      </div>
      <div className="flex flex-row justify-between text-sm">
        <span className="text-sm font-medium text-gray-900">배송비</span>
        <span className="text-sm font-medium text-gray-900">{`${deliveryFee || 0}원`}</span>
      </div>
      <div className="flex flex-row justify-between py-4 text-sm">
        <span className="text-sm font-medium text-gray-900">결제 예정금액</span>
        <span className="text-lg font-bold">{`${finalPaymentAmount || 0}원`}</span>
      </div>
    </div>
  );
};
export default CartAmount;
