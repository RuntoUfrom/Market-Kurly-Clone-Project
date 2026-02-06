import LayerUtils from "@/utils/LayerUtils";
import BottonDirection from "@/assets/common/icons/BottomDirectionIcon.svg";

const FilterBtn = ({ label = "필터", icon = true }) => {
  return (
    <button
      className="inline-flex items-center gap-1 py-1.5 px-3 bg-white border border-gray-300 font-medium text-sm rounded-full text-gray-500 hover:bg-gray-100"
      onClick={() => LayerUtils.openFilterLayer()}
    >
      {label}
      {icon && <img src={BottonDirection} alt="" className="w-2.5 h-2.5" />}
    </button>
  );
};
export default FilterBtn;
