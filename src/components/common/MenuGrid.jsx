import { useRef, useState } from "react";
import MenuCard from "@/components/common/button/MenuCard";
import { MENU_IMAGE_MAP } from "@/constants/menuImageMap";

const MenuGrid = ({
  isBar = false,
  rowNum = 1,
  menuList = {},
  imageMap,
  activeMenu,
  onMenuClick,
}) => {
  const gridRowsClass = rowNum === 2 ? "grid-rows-2" : "grid-rows-1";
  const scrollRef = useRef(null);
  const [scrollRatio, setScrollRatio] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setScrollRatio(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
  };

  return (
    <div className="w-full">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className={`grid ${gridRowsClass} grid-flow-col whitespace-nowrap auto-cols-[64px] gap-2 overflow-x-auto scroll-snap-x-mandatory no-scrollbar px-2 py-2`}
      >
        {menuList.map((item) => (
          <div
            key={item}
            className="scroll-snap-start flex flex-col items-center"
          >
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

      <div className="flex justify-center py-2">
        <div className="relative w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full w-1/3 bg-gray-800 rounded-full transition-transform duration-100"
            style={{ transform: `translateX(${scrollRatio * 200}%)` }}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuGrid;
