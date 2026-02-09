import BackIcon from "@/assets/common/icons/BackDirectionIcon.svg";
import SearchIcon from "@/assets/common/icons/SearchIcon.svg";
import HomeIcon from "@/assets/common/icons/HomeUnFillIcon.svg";
import CartIcon from "@/assets/common/icons/CartIconGray.svg";

const BackHeader = ({ isSearch = false, isHome = false, label = "" }) => {
  return (
    <div className="flex items-center p-2 gap-2">
      <img src={BackIcon} className="w-4 h-4" />
      {label && (
        <span className="text-sm font-medium text-center">
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
