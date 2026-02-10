import MenuCard from "@/components/common/button/MenuCard";
import { ROUND_MENU_IMAGE_MAP } from "@/constants/menumaps/roundMenuMap";
import { useState } from "react";
const RoundMenuList = ({
  menulist = [
    "베스트",
    "간편식사",
    "신선코너",
    "최저가도전",
    "컬리정육점",
    "컬리에만있는",
    "인기급상승",
    "직원추천상품",
  ],
  selectedSubMenu,
}) => {
  const [selectmenu, setSelectMenu] = useState(selectedSubMenu || menulist[0]);
  const selectmenus = Object.entries(ROUND_MENU_IMAGE_MAP).filter(([label]) =>
    menulist.includes(label),
  );
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="flex px-4 py-4 gap-5 whitespace-nowrap auto-cols-[64px] overflow-x-auto scroll-snap-x-mandatory no-scrollbar">
        {selectmenus.map(([label, image]) => (
          <MenuCard
            LogoImage={image}
            key={label}
            label={label}
            isRounded={true}
            isSelected={selectmenu === label}
            onClick={() => setSelectMenu(label)}
          />
        ))}
      </div>
    </div>
  );
};
export default RoundMenuList;
