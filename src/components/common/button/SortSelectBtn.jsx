import { useState } from "react";
import BottomDirectionIcon from "@/assets/common/icons/BottomDirectionIcon.svg";
import TopDirectionIcon from "@/assets/common/icons/TopDirectionIcon.svg";

/**
 * 정렬 옵션을 선택하는 드롭다운 버튼 컴포넌트
 * @param {Object} props
 * @param {string} [props.label="추천순"] - 현재 선택된 정렬 라벨
 * @param {function} props.onChange - 정렬 옵션 변경 시 호출되는 핸들러
 */
const SortSelectBtn = ({ label = "추천순", onChange }) => {
  const filterOptions = [
    "추천순",
    "신상품순",
    "판매량순",
    "혜택순",
    "높은 가격순",
    "낮은 가격순",
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex flex-row items-center justify-center  w-30">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" gap-1 text-sm text-gray-600 py-1 px-1"
        >
          {label}
        </button>
        <img
          src={isOpen ? TopDirectionIcon : BottomDirectionIcon}
          alt="정렬"
          className="w-3 h-3"
        />
      </div>

      {isOpen && (
        <ul className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-md z-20 min-w-28">
          {filterOptions.map((option) => (
            <li key={option}>
              <button
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
                  label === option ? "text-primary font-bold" : "text-gray-700"
                }`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortSelectBtn;
