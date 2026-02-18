import LayerUtils from "@/utils/LayerUtils";
import BottonDirection from "@/assets/common/icons/BottomDirectionIcon.svg";
import FilterBottomComponent from "../dialog/FilterBottomComponent";
/**
 * 필터 버튼 컴포넌트. 클릭 시 하단 필터 팝업을 띄움.
 *
 * @param {Object} props
 * @param {string} [props.label="필터"] - 버튼 텍스트
 * @param {boolean} [props.icon=true] - 화살표 아이콘 표시 여부
 */
const FilterBtn = ({
  label = "",
  icon = true,
  filterList,
  category,
  onClick,
}) => {
  return (
    <button
      className="inline-flex shrink-0 items-center gap-1 py-1.5 px-3 bg-white border border-gray-300 font-medium text-sm rounded-full text-gray-500 hover:bg-gray-100"
      onClick={onClick}
    >
      {label}
      {icon && <img src={BottonDirection} alt="" className="w-2.5 h-2.5" />}
    </button>
  );
};
export default FilterBtn;
