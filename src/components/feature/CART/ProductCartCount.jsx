import SubtractionIcon from "@/assets/common/icons/SubtractionIcon.svg";
import PlusIcon from "@/assets/common/icons/PlusIcon.svg";
import { useState } from "react";
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
