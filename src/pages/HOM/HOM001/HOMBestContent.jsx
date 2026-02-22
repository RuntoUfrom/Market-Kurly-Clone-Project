import RoundMenuList from "@/components/common/layout/RoundMenuList";
import { useState } from "react";
import ProductListContainer from "@/components/common/container/ProductListContainer";

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
      <RoundMenuList
        menulist={menulist}
        selectedSubMenu={selectmenu}
        onChange={setSelectMenu}
      />
      <ProductListContainer
        category={"market"}
        page={1}
        limit={20}
        isHOM={true}
        subMenu={selectmenu}
        tabKey="best"
      />
    </div>
  );
};
export default HOMBestContent;
