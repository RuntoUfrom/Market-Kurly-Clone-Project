import NaviIcon from "@/assets/common/icons/NaviIcon.svg";
import CartIconGray from "@/assets/common/icons/CartIconGray.svg";

const MenuHeader = () => {
  return (
    <div className="p-4 flex flex-row justify-between">
      <div className="text-lg font-bold ml-2">카테고리</div>
      <div className="flex flex-row gap-6 mx-4">
        <img src={NaviIcon} className="w-6 h-6" />
        <img src={CartIconGray} className="w-6 h-6" />
      </div>
    </div>
  );
};
export default MenuHeader;
