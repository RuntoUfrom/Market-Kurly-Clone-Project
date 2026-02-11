import CheckedIcon from "@/assets/common/icons/CheckPurpleIcon.svg";
import UnCheckIcon from "@/assets/common/icons/CheckUnfillIcon.svg";
import { useState } from "react";

const CheckBox = ({ isCheck = false, label = "", number = null }) => {
  const [check, setCheck] = useState(isCheck);
  return (
    <div className="flex flex-row gap-2">
      <div
        onClick={() => {
          setCheck(!check);
        }}
      >
        {check ? (
          <img src={CheckedIcon} alt="선택됨" />
        ) : (
          <img src={UnCheckIcon} alt="안선택됨" />
        )}
      </div>
      <div className="flex flex-row gap-1 items-baseline">
        <div className="text-sm font-medium text-black">{label}</div>
        {number && (
          <div className="text-xs font-light text-gray-600">{number}</div>
        )}
      </div>
    </div>
  );
};
export default CheckBox;
