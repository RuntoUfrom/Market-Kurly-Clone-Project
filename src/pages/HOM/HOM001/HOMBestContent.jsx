import RoundMenuList from "@/components/common/layout/RoundMenuList";
import SortSelectBtn from "@/components/common/button/SortSelectBtn";
import FilterIcon from "@/assets/common/icons/FilterIcon.svg";
import FilterBar from "@/components/common/layout/FilterBar";
import ProductVerticalScrollSection from "@/components/common/ProductVerticalScrollSection";
import { useState } from "react";
import MarketProductsMockData from "@/mocks/data/HOM/MarketProducts";

const HOMBestContent = () => {
  const menulist = [
    "베스트",
    "간편식사",
    "신선코너",
    "최저가도전",
    "컬리정육점",
    "컬리에만있는",
    "인기급상승",
    "직원추천상품",
  ];
  const [selectmenu, setSelectMenu] = useState(menulist[0]);
  return (
    <div>
      <RoundMenuList menulist={menulist} selectedSubMenu={selectmenu} />
      <div className="flex flex-row justify-between items-center m-2 mx-4 text-sm text-gray-600">
        <span className="text-sm text-gray-600">총 123개</span>
        <div className="flex flex-row items-center">
          <SortSelectBtn label="추천순" />
          <span className="text-sm text-gray-600">
            필터
            <img
              src={FilterIcon}
              alt="filter icon"
              className="inline-block w-4 h-4"
            />
          </span>
        </div>
      </div>
      <div className="mx-4">
        <FilterBar isKurlyOnly={true} isNew={true} isBeautyFest={true} />
      </div>
      <div>
        <ProductVerticalScrollSection products={MarketProductsMockData} />
      </div>
    </div>
  );
};
export default HOMBestContent;
