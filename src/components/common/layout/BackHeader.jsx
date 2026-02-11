import BackIcon from "@/assets/common/icons/BackDirectionIcon.svg";
import SearchIcon from "@/assets/common/icons/SearchIcon.svg";
import HomeIcon from "@/assets/common/icons/HomeUnFillIcon.svg";
import CartIcon from "@/assets/common/icons/CartIconGray.svg";
import useHistoryController from "@/hooks/controllers/useHistoryController";

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
