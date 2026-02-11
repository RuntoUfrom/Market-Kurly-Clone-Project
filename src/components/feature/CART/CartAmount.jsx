const CartAmount = ({
  totalProductAmount,
  productDiscountAmount,
  couponDiscountAmount,
  deliveryFee,
  finalPaymentAmount,
}) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-2">
      <div className="flex flex-row justify-between text-sm">
        <span className="text-sm font-medium text-gray-900">상품 금액</span>
        <span className="text-sm font-medium text-gray-900">
          {`${totalProductAmount}원`}
        </span>
      </div>
      <div className="flex flex-row justify-between  text-sm">
        <span className="text-sm font-medium text-gray-900">
          상품 할인 금액
        </span>
        <span className="text-status font-medium">{`${productDiscountAmount}원`}</span>
      </div>
      <div className="flex flex-row justify-between  text-sm">
        <span className="text-sm font-medium text-gray-900">
          쿠폰 할인 금액
        </span>
        <span className="text-sm font-medium text-gray-900">{`${couponDiscountAmount}원`}</span>
      </div>
      <div className="flex flex-row justify-between text-sm">
        <span className="text-sm font-medium text-gray-900">배송비</span>
        <span className="text-sm font-medium text-gray-900">{`${deliveryFee}원`}</span>
      </div>
      <div className="flex flex-row justify-between py-4 text-sm">
        <span className="text-sm font-medium text-gray-900">결제 예정금액</span>
        <span className="text-lg font-bold">{`${finalPaymentAmount}원`}</span>
      </div>
    </div>
  );
};
export default CartAmount;
