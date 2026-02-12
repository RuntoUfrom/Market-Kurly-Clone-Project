import BackIcon from "@/assets/common/icons/BackDirectionIcon.svg";
import SearchIcon from "@/assets/common/icons/SearchIcon.svg";
import HomeIcon from "@/assets/common/icons/HomeUnFillIcon.svg";
import CartIcon from "@/assets/common/icons/CartIconGray.svg";
import useHistoryController from "@/hooks/controllers/useHistoryController";

/**
 * 뒤로가기 버튼이 있는 공통 헤더 컴포넌트
 *
 * @param {Object} props
 * @param {boolean} [props.isSearch=false] - 검색 아이콘 표시 여부
 * @param {boolean} [props.isHome=false] - 홈 아이콘 표시 여부
 * @param {string} [props.label=""] - 헤더 중앙 타이틀
 */
const BackHeader = ({ isSearch = false, isHome = false, label = "" }) => {
  const { moveTo } = useHistoryController();
  return (
    <div className="flex items-center p-4 gap-2">
      <button
        onClick={() => {
          moveTo({ direction: "BACK", num: 1 });
        }}
      >
        <img src={BackIcon} className="w-4 h-4" />
      </button>

      {label && (
        <span className="text-base font-medium text-center">
          {label.length > 9 ? label.slice(0, 10) + "..." : label}
        </span>
      )}
      <div className="ml-auto flex gap-4">
        {isSearch && <img src={SearchIcon} />}
        {isHome && <img src={HomeIcon} />}
        <img src={CartIcon} />
      </div>
    </div>
  );
};
export default BackHeader;
