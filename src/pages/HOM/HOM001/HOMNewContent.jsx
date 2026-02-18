import RoundMenuList from "@/components/common/layout/RoundMenuList";
import { useState } from "react";
import ProductListContainer from "@/components/common/container/ProductListContainer";
const HOMNewContent = () => {
  const menulist = [
    "인기신상랭킹",
    "제철신선",
    "입점특가",
    "요즘간식",
    "간편한끼",
    "주방리빙",
    "뷰티",
    "패션",
  ];
  const [selectmenu, setSelectMenu] = useState(menulist[0]);
  return (
    <div>
      <RoundMenuList
        menulist={menulist}
        selectedSubMenu={selectmenu}
        onChange={setSelectMenu}
      />
      <ProductListContainer category={"market"} />
    </div>
  );
};
export default HOMNewContent;
