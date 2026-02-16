import NaviIcon from "@/assets/common/icons/NaviIcon.svg";
import CartIconGray from "@/assets/common/icons/CartIconGray.svg";

/**
 * 전체 메뉴 페이지 헤더 컴포넌트
 */
const MenuHeader = () => {
  return (
    <div className="p-3 flex flex-row justify-between">
      <div className="text-lg font-bold ml-2">카테고리</div>
      <div className="flex flex-row gap-6 mx-4">
        <img src={NaviIcon} className="w-6 h-6" />
        <img src={CartIconGray} className="w-6 h-6" />
      </div>
    </div>
  );
};
export default MenuHeader;
