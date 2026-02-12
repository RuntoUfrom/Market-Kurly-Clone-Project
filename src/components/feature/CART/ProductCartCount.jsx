import SubtractionIcon from "@/assets/common/icons/SubtractionIcon.svg";
import PlusIcon from "@/assets/common/icons/PlusIcon.svg";
import { useState } from "react";
/**
 * 장바구니 상품 수량 조절 컴포넌트
 * 현재는 내부 state로 count를 관리함.
 */
const ProductCartCount = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="bg-gray-300 flex flex-row justify-between w-20 rounded-2xl">
        <div
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
          className="w-7 h-7 flex flex-col justify-center p-2"
        >
          <img src={SubtractionIcon} alt="-" />
        </div>

        <div className="w-7 h-7 flex flex-col justify-center p-2">{count}</div>
        <div
          onClick={() => {
            setCount(count + 1);
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
