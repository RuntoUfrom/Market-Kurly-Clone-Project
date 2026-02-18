import MenuCard from "@/components/common/button/MenuCard";
import { ROUND_MENU_IMAGE_MAP } from "@/constants/roundMenuMap";
/**
 * 둥근 메뉴 리스트 컴포넌트 (가로 스크롤)
 *
 * @param {Object} props
 * @param {string[]} [props.menulist] - 표시할 메뉴 라벨 목록
 * @param {string} [props.selectedSubMenu] - 초기 선택된 메뉴 라벨
 */
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
  onChange,
}) => {
  const selectmenus = Object.entries(ROUND_MENU_IMAGE_MAP).filter(([label]) =>
    menulist.includes(label),
  );
  return (
    <div className=" bg-white">
      <div className="flex px-4 py-4 gap-5 whitespace-nowrap auto-cols-[64px] overflow-x-auto scroll-snap-x-mandatory no-scrollbar">
        {selectmenus.map(([label, image]) => (
          <MenuCard
            LogoImage={image}
            key={label}
            label={label}
            isRounded={true}
            isSelected={selectedSubMenu === label}
            onClick={() => onChange?.(label)}
          />
        ))}
      </div>
    </div>
  );
};
export default RoundMenuList;
