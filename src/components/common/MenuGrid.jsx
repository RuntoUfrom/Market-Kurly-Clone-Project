import MenuCard from "@/components/common/MenuCard";
import { MENU_IMAGE_MAP } from "@/constants/menuImageMap";

const MenuGrid = ({ isBar = false, rowNum = 1, menuList = {}, imageMap, activeMenu, onMenuClick }) => {
  // rowNum에 따라 grid 행 개수 결정
  const gridRowsClass = rowNum === 2 ? "grid-rows-2" : "grid-rows-1";

  return (
    <div className="w-full">
      {/* 스크롤 컨테이너 */}
      <div
        className={`grid ${gridRowsClass} grid-flow-col whitespace-nowrap auto-cols-[64px] gap-2 overflow-x-auto scroll-snap-x-mandatory no-scrollbar px-2 py-2`}
      >
        {menuList.map((item) => (
          <div key={item} className="scroll-snap-start flex flex-col items-center">
            <MenuCard
              LogoImage={MENU_IMAGE_MAP[item]}
              label={item}
              onClick={() => onMenuClick?.(item)}
            />
            {isBar && (
              <div
                className={`h-0.5 w-10 rounded-full transition-colors ${
                  activeMenu === item ? "bg-purple-600" : "bg-transparent"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;
